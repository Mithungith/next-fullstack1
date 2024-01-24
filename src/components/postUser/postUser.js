import Image from "next/image";
import { getUser } from "../../../lib/data";
import style from "./postUser.module.css";

//Fetch Data with API
// async function getData(userId){
//     const data=  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});

//     return data.json();
// }

async function PostUser({ userId }) {
  //Fetch Data with API
  // const user = await getData(userId);

  //Fetch data without an api
  const user = await getUser(userId);
  console.log(userId, "mit");
  return (
    <div className={style.container}>
      <Image
        className={style.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt="img"
        width={50}
        height={50}
      />

      <div className={style.texts}>
        <span className={style.title}>Author</span>
        <span className={style.username}>{user.username}</span>
      </div>
    </div>
  );
}

export default PostUser;
