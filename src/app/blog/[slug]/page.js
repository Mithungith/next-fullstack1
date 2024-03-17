import style from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "../../../lib/data";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  // const post = await getPost(slug);
  // return {
  //   title: post.title,
  //   description: post.desc,
  // };
};

async function SinglePost({ params, searchParams }) {
  const { slug } = params;
  //Fetch data through API
  const getData = async function () {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    //const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{method:"DELETE"}); for deleting the post
    return res.json();
  };

  const post = await getData(slug);
  //console.log(post,"+++++++++++++++++");
  //console.log(slug,post,"======||=======================");

  //Fetch Data without an API
  //const post =await getPost(slug);
  //console.log(post,"New post",slug);
  //console.log(post.userId,post.slug,post.title,post.createdAt,post.desc,"hey-hey");

  return (
    <div className={style.container}>
      {post.img && (
        <div className={style.imgContainer}>
          <Image src={post.img} alt="img" fill className={style.img} />
        </div>
      )}
      <div className={style.textContainer}>
        <h2 className={style.title}>{post.title}</h2>
        <div className={style.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={style.detailText}>
            <span className={style.detailTitle}>Published</span>
            <span className={style.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={style.content}>{post.desc}</div>
      </div>
    </div>
  );
}

export default SinglePost;
