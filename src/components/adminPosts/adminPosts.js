import style from "./adminPosts.module.css";
import { getPosts } from "../../lib/data";
import Image from "next/image";
import { deletePost } from "../../lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();
  //console.log(posts,"hehe");

  // const deletePostWithId = async (id)=>{
  //     "use server";
  //     return deletePost.bind(null,id);
  // }

  return (
    <div className={style.container}>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div className={style.post} key={post.id}>
            <div className={style.detail}>
              <Image src={post.img} alt="" width={50} height={50} />
              <span className={style.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={style.postButton}>Delete</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};
export default AdminPosts;
