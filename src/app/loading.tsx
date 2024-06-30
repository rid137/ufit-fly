import Image from 'next/image'

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-[#fff]">
            <div className="flex flex-col gap-[10px] items-center">
                <Image width={0} height={0} className="w-52 h-20" src="/icons/shared/logo.svg" alt="logo" />
                <div className="flex items-center gap-[1rem]">
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#8c1865] bounce bounce-1"></div>
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#c208c2e7] bounce bounce-1"></div>
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#8c1865] bounce bounce-2"></div>
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#c208c2] bounce bounce-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;