import Link from 'next/link';
import Image from 'next/image';
import { IPost } from '@/types/post';
import CustomLoader from '@/utils/custom-loader';
import { clipSentence, returnCapitalize } from '@/utils/helpers';

interface IUpperBlogSection {
    post: IPost[] | undefined
    isLoading: boolean
    isError: boolean
}

const UpperBlogSection = ({post, isLoading, isError}: IUpperBlogSection) => {
    return (
        <section className="common__padding  xl:px-[18rem] mt-10 ">
            {
                isLoading ?
                <CustomLoader />
                :
                isError ?
                <div className="text-center">Error Fetching Blogs</div>
                :
                <>
                    {
                        post?.slice(0, 3)?.map(({id, title, body}, index) => (
                            <Link key={id} href={`/post/${id}`} className="flex flex-col items-start gap-4 w-full mb-8 md:flex-row md:gap-8">
                                <div className="w-full md:w-1/2 h-[10rem] md:h-[15rem]">
                                    <Image className="w-full h-full object-cover" src={`${index < 1 ? "/images/home/post-img1.svg" : index === 1 ? "/images/home/post-img2.svg" : "/images/home/post-img3.svg"}`} width={1000} height={1000} alt="blog image" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h5>{index < 1 ? "minimalism" : index === 1 ? "technology" : "article"}</h5>
                                    <h2>{returnCapitalize(title!)}</h2>
                                    <small className="flex my-2 items-center gap-1">
                                        <span>Ralph Hawkins</span>
                                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="1.5" cy="1.5" r="1.5" fill="#1C1C1C" fill-opacity="0.5"/>
                                        </svg>
                                        <span>May 7, 2019 (10 mins read)</span>
                                    </small>
                                    <p>{clipSentence(body!, 120)}</p>
                                </div>
                            </Link>
                        ))
                    }
                </>
            }
            
        </section>
    )
}

export default UpperBlogSection