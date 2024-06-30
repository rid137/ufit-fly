import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './logo';

interface IMobileNavProps {
    isNavOpen: boolean;
    setIsNavOpen: (isNavopen: boolean) => void;
}

const MobileNav = ({isNavOpen, setIsNavOpen}: IMobileNavProps) => {
    const handleNavClick = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <>
            <nav className="flex items-center justify-between w-full h-[8vh] bg-white common__padding pt-6 lg:hidden">
                <Logo />
                <div className="cursor-pointer">
                    {
                        isNavOpen ?
                        <X className='size-8' onClick={handleNavClick}/>
                        :
                        <Menu className='size-8' onClick={handleNavClick}/>
                    }
                </div>
            </nav>
            <>
                {
                    isNavOpen &&
                    <div className="absolute bg-white w-full top-[8vh] mt-8 px-4 py-6 z-50 lg:hidden">
                        <div className="flex flex-col gap-4">
                            <Link className="w-fit" onClick={() => setIsNavOpen(false)}  href="/">Home</Link>
                            <Link className="w-fit" onClick={() => setIsNavOpen(false)}  href="/post">Post</Link>
                        </div>
                    </div>
                }
            </>
        </>
    )
}

export default MobileNav