import Link from 'next/link';
import Image from 'next/image';
import { IPost } from '@/types/post';
import { clipSentence, returnCapitalize } from '@/utils/helpers';

interface IPostCardProps {
    post: IPost
    img: string
}

const PostCard = ({post, img}: IPostCardProps) => {
    const {id, title, body} = post
    return (
        <Link href={`/post/${id}`} key={id} className="flex items-start gap-4 w-full mb-12 md:gap-8">
            <div className="w-1/3 h-[12rem]">
                <Image className="w-full h-full object-cover" src={img} width={1000} height={1000} alt="blog image" />
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

export default PostCard