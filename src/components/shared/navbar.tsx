"use client"

import { useEffect, useState } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import Logo from "./logo"
import MobileNav from "./mobile-nav";
import CustomButton from "@/utils/customButton"

const Navbar = () => {
    const [activePage, setActivePage] = useState<string>('');

    const pathname = usePathname();
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActivePage(pathname.split('/')[1])
        }
    }, [pathname]);

    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    return (
        <div className="relative">
            <nav className="hidden items-center justify-between w-full h-[8vh] bg-white common__padding pt-6 lg:flex">
                <div className="font-libre flex__center gap-4">
                    <Logo />
                    <Link href="/" className={`${activePage === "" ? "font-bold" : ""} mt-4`}>Home</Link>
                    <Link href="/post" className={`${activePage === "post" ? "font-bold" : ""} mt-4`}>Posts</Link>
                </div>

                <div className="flex__center gap-3">
                    <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.25 26.25L20.8125 20.8125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <CustomButton cls="border-2 py-1 px-6 border-black rounded-lg">Login</CustomButton>
                </div>
            </nav>
            <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
    )
}

export default Navbar