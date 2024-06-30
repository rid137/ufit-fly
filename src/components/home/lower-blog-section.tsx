import Tags from './tags';
import PostCard from './post-card';
import { IPost } from '@/types/post';
import CustomLoader from '@/utils/custom-loader';

interface ILowerBlogSection {
    post: IPost[] | undefined
    isLoading: boolean
    isError: boolean
}

const postImages = ["/images/home/post-img4.svg", "/images/home/post-img5.svg", "/images/home/post-img6.svg", "/images/home/post-img7.svg"]

const LowerBlogSection = ({post, isLoading, isError}: ILowerBlogSection) => {

    return (
        <section className="common__padding md:px-[5rem] mt-12 mb-10">
            <div className="flex gap-[10%] flex-col md:flex-row">
                <div className="w-full md:w-[70%]">                
                    {
                        isLoading ?
                        <CustomLoader />
                        :
                        isError ?
                        <div className="">Error Fetching Blogs</div>
                        :
                        <>
                            {
                                post?.slice(5, 9)?.map((item, index) => (
                                    <PostCard img={postImages[index]} key={item?.id} post={item}  />
                                ))
                            }
                        </>
                    }
                </div>
                
                <div className="w-full md:w-[20%]">
                    <Tags />
                </div>
            </div>
        </section>
    )
}

export default LowerBlogSection