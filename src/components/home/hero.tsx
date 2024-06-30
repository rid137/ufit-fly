import { IPost } from "@/types/post"

interface IHeroProps {
    post: IPost | undefined
    isLoading: boolean
    isError: boolean
}

const Hero = ({post, isLoading, isError}: IHeroProps) => {
    return (
        <section
            className="bg-no-repeat bg-center bg-cover mt-8 w-full h-[25rem] relative"
            style={{
                backgroundImage: 'url("/images/home/hero-bg.svg")',
            }}
        >
            <div className="absolute left-8 top-0 bg-white flex flex-col gap-1 px-6 h-[20rem] w-[25rem]">
                {
                    isLoading ?
                    <div className="flex__column w-full h-full gap-3">
                        <p>Loading content... Kindly wait a moment!!!</p>
                        <div className="flex items-center gap-[1rem]">
                            <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-1" style={{backgroundColor : "#1C1C1C80"}}></div>
                            <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-1" style={{backgroundColor : "#1C1C1C80"}}></div>
                            <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-2" style={{backgroundColor : "#1C1C1C80"}}></div>
                            <div className="w-[1.5rem] h-[1.5rem] rounded-full bounce bounce-3" style={{backgroundColor : "#1C1C1C80"}}></div>
                        </div>
                    </div>
                    :
                    isError ?
                    <div className="flex__column w-full h-full">Error Fetching Content!!!</div>
                    :
                    <>
                        <h5>Featured Article</h5>
                        <h2>{post?.title}</h2>
                        <small className="flex mb-1 items-center gap-1">
                            <span>Ralph Hawkins</span>
                            <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#1C1C1C" fill-opacity="0.5"/>
                            </svg>
                            <span>May 7, 2019 (10 mins read)</span>
                        </small>
                        <p>{post?.body}</p>
                    </>
                }
            </div>
        </section>
    )
}

export default Hero