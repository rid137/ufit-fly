import Image from 'next/image'

const CustomLoader = () => {
    return (
        <div className="flex items-center justify-center h-[20rem] bg-[#fff]">
            <div className="flex flex-col gap-[10px] items-center">
                <Image width={0} height={0} className="w-52 h-20" src="/icons/shared/logo.svg" alt="logo" />
                <div className="flex items-center gap-[1rem]">
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-1" style={{backgroundColor : "#1C1C1C80"}}></div>
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-1" style={{backgroundColor : "#1C1C1C80"}}></div>
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-2" style={{backgroundColor : "#1C1C1C80"}}></div>
                    <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-3" style={{backgroundColor : "#1C1C1C80"}}></div>
                </div>
            </div>
        </div>
    )
}

export default CustomLoader