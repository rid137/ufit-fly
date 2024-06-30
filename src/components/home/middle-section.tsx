import { IPost } from "@/types/post"
import { returnCapitalize } from "@/utils/helpers"

interface IMiddleBgSectionProps {
    post: IPost | undefined
    isLoading: boolean
    isError: boolean
}

const MiddleSection = ({post, isError, isLoading}: IMiddleBgSectionProps) => {
    return (
        <section className="common__padding w-full mt-14 ">
            <div
                className="bg-no-repeat bg-center bg-cover w-full h-[30rem] relative flex__center md:pr-10 "
                style={{
                    backgroundImage: 'url("/images/home/middle-section-bg.svg")',
                }}
            >
                <div className="flex w-full justify-center  items-center md:justify-end">
                    <div className="flex justify-end items-center">
                        <div className="bg-white flex flex-col justify-center gap-1 pt- px-6 h-[22rem] w-[25rem]">
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
                                    <h5>Interior</h5>
                                    <h2>{returnCapitalize(post?.title!)}</h2>
                                    <small className="flex mb-1">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiddleSection