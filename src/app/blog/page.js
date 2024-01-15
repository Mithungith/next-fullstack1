import PostCard from "@/components/postCard/PostCard";
import style from "./blog.module.css";
import { getPosts } from "../../../lib/data";

//  Fetch data through API
// const getData = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!data.ok) {
//     throw Error("Somthing Went Wrong");
//   }
//   return data.json();
// };


//Fetch Data without An API

async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={style.container}>
      {/* <div className={style.post}>
            <PostCard/>
            </div>
            <div className={style.post}>
            <PostCard/>
            </div>
            <div className={style.post}>
            <PostCard/>
            </div>
            <div className={style.post}>
            <PostCard/>
            </div> */}
      {posts.map((post) => {
        return (
          <div className={style.post} key={post.id}>
            <PostCard post = {post}/>
          </div>
        );
      })}
    </div>
  );
}

export default BlogPage;
