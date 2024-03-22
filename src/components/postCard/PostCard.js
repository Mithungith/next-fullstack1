import style from "./postCard.module.css";
import Link from "next/link";
import Image from "next/image";

function PostCard({ post }) {
  //console.log(style);
  return (
    <div className={style.container}>
      <div className={style.top}>
        {post.img && (
          <div className={style.imgContainer}>
            <Image src={post.img} alt="img" fill className={style.img} />
          </div>
        )}
        <span className={style.date}>01.01.2024</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={style.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
