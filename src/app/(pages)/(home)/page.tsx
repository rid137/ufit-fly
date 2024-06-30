"use client";

import Hero from "@/components/home/hero";
import MiddleSection from "@/components/home/middle-section";
import Logo from "@/components/shared/logo";
import MobileNav from "@/components/shared/mobile-nav";
import Navbar from "@/components/shared/navbar";
import API, { baseUrl } from "@/libs";
import { IPost } from "@/types/post";
import CustomLoader from "@/utils/custom-loader";
import CustomButton from "@/utils/customButton";
import { clipSentence, returnCapitalize } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "../../../components/home/post-card";
import Tags from "@/components/home/tags";
import UpperBlogSection from "@/components/home/upper-blog-section";
import LowerBlogSection from "@/components/home/lower-blog-section";

const Home = () => {

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


    return (
        <>
            <Hero post={ postData && postData[0]} isLoading={isLoading} isError={isError} />
            <div className="text-center w-full common__padding mt-7">
                <h1 className="text-[2rem] font-bold">Editor’s Picks</h1>
                <div className="flex__center">
                    <div className="h-1 w-32 bg-black"></div>
                </div>
            </div>

            <UpperBlogSection post={postData} isError={isError} isLoading={isLoading} />
            <MiddleSection post={ postData && postData[5]} isError={isError} isLoading={isLoading}/>
            <LowerBlogSection post={postData} isError={isError} isLoading={isLoading} />
        </>
    )
}

export default Home;
