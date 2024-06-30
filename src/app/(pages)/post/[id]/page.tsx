"use client"

import API, { baseUrl } from "@/libs";
import { useQuery } from "@tanstack/react-query";
import { IPost } from "@/types/post";
import CustomLoader from "@/utils/custom-loader";
import { returnCapitalize } from "@/utils/helpers";


const PostDetails = ({ params }: { params: { id: string }}) => {
    const { id } = params

    const fetchSinglePost = async () => {
        try {
            const response: {data: IPost | null} = await API.get(`${baseUrl}/posts/${id}`);
            console.log('Data successfully fetched:', response.data);
            return response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    const { isLoading, isError, data: postData } = useQuery({
        queryKey: [`post-${id}`],
        queryFn: fetchSinglePost,
    })

    return (
        <section className='mt-8 pb-40 common__padding'>
            <div className="bg-no-repeat bg-center bg-cover mt-8 w-full h-[25rem] relative"
                style={{
                    backgroundImage: 'url("/images/home/hero-bg.svg")',
                }}
            >
            </div>
        
            <div className="mt-10 flex__column gap-4 md:px-[23rem]">
                {
                    isLoading ?
                    <CustomLoader />
                    :
                    isError ?
                    <div className="">Error fetching post!!!</div>
                    :
                    <>
                        <h2 className="text-center">{returnCapitalize(postData?.title!)}</h2>
                        <small className="flex my-2 items-center gap-1">
                            <span className="text-sm sm:text-normal">Ralph Hawkins</span>
                            <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#1C1C1C" fillOpacity="0.5" />
                            </svg>
                            <span className="text-sm sm:text-normal">May 7, 2019 (10 mins read)</span>
                        </small>
                        <p>{postData?.body}</p>
                    </>
                }
            </div>
        </section>
    )
}

export default PostDetails