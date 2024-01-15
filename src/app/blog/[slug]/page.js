import style from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "../../../../lib/data";
import { Suspense } from "react";
async function SinglePost({params,searchParams}) {
  const {slug} = params;
  //Fetch data through API
  // const getData = async function(){
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  // return res.json();
  // }

  // const post = await getData(slug);

  //Fetch Data without an API
  const post =await getPost(slug);
  console.log(post);
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18796586/pexels-photo-18796586/free-photo-of-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          fill
          className={style.img}
        />
      </div>
      <div className={style.textContainer}>
        <h2 className={style.title}>{post.title}</h2>
        <div className={style.detail}>
          <Image
            className={style.avatar}
            src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
            width={50}
            height={50}
          />
          
          <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.id}/>
          </Suspense>
          <div className={style.detailText}>
            <span className={style.detailTitle}>
                Published
            </span>
            <span className={style.detailValue}>
                01.01.2024
            </span>
          </div>
        </div>
        <div className={style.content}>
            {post.body}
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
