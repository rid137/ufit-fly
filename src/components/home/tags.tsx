import { tagList } from "@/data"

const Tags = () => {
    return (
        <>
            <p className="font-semibold mb-2">Tags</p>
            <div className="w-full flex flex-row gap-3 flex-wrap md:flex-col">
                {
                    tagList?.map((item, index) => (
                        <span key={index} className="text-sm cursor-pointer text-nowrap">{item}</span>
                    ))
                }
            </div>
        </>
    )
}

export default Tags