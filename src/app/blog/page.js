import PostCard from "@/components/postCard/PostCard";
import style from "./blog.module.css";
import { getPosts } from "../../lib/data";

//  Fetch data through API
const getData = async () => {
  const data = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!data.ok) {
    throw Error("Somthing Went Wrong");
  }
  return data.json();
};

const posts = await getData();
//Fetch Data without An API

export const metadata = {
  title: "Blog Page",
  description: "blog page description",
};

async function BlogPage() {
  //const posts = await getPosts();

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
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default BlogPage;
