import Image from "next/image";
import { getUser } from "../../lib/data";
import style from "./postUser.module.css";


async function PostUser({ userId }) {
  //Fetch Data with API
  // const user = await getData(userId);

  //Fetch data without an api
  const user = await getUser(userId);
  return (
    <div className={style.container}>
      <Image
        className={style.avatar}
        src={"/noAvatar.png"}
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
