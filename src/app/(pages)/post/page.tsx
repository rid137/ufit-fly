"use client"

import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { images } from '@/data';
import API, { baseUrl } from '@/libs';
import { IPost } from '@/types/post';
import CustomLoader from '@/utils/custom-loader';
import { clipSentence, returnCapitalize } from '@/utils/helpers';

type PostCardProps = {
    post: IPost
    img: string
}

const Post = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const fetchPosts = async () => {
        try {
          const response: {data: IPost[] | null} = await API.get(`${baseUrl}/posts`);
          console.log('Data successfully fetched:', response.data);
          return response.data || [];
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    const { isLoading, isError, data: postData } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const filteredPost = postData?.slice(10, 20)?.filter((post) => searchValue.toLowerCase() === "" ? post : post?.title?.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <section className='my-20 common__padding'>
            <div className="flex__center w-full mb-20">
                <div className="flex items-center justify- gap- p-4 rounded-full w-[20rem] md:w-[30rem] h-[3rem] border-2">
                    <input 
                        type="text"
                        onChange={handleSearchChange}
                        className="bg-transparent w-full rounded-md placeholder:text-[#746767] outline-none" 
                        placeholder='Search for posts' 
                    />
                    <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.25 26.25L20.8125 20.8125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            {
                isLoading ?
                <CustomLoader />
                :
                isError ?
                <div className="w-full mb-6 md:px-[14rem]">Error Fetching Blogs</div>
                :
                <>
                    {
                        filteredPost!?.length > 0 ? filteredPost?.map((item, index) => (
                            <PostCard img={images[index]} key={item?.id} post={item}  />
                        )) 
                        :
                        <div className="flex__center w-full">Post is not available</div>
                    }
                </>
            }
        </section>
    )
}

export default Post;

const PostCard = ({post, img}: PostCardProps) => {
    const { id, title, body} = post;

    return (
        <Link href={`/post/${id}`} className="flex items-start gap-4 md:gap-8 w-fit mb-6 md:mx-[14rem]">
            <div className="w-1/3 h-[12rem]">
                <Image className="w-full h-full object-cover" src={img} width={1000} height={1000} alt="blog image" 
                />
            </div>
            <div className="w-2/3">
                <h5>Featured Article</h5>
                <h2>{returnCapitalize(title!)}</h2>
                <small className="flex my-2 items-center gap-1">
                    <span className="text-sm sm:text-normal">Ralph Hawkins</span>
                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#1C1C1C" fillOpacity="0.5" />
                    </svg>
                    <span className="text-sm sm:text-normal">May 7, 2019 (10 mins read)</span>
                </small>
                <p>{clipSentence(body!, 100)}</p>
            </div>
        </Link>
    )
}