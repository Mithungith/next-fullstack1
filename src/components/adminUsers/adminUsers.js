import { deleteUser } from "../../lib/action";
import { getUsers } from "../../lib/data";
import style from "./adminUsers.module.css";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={style.container}>
      <h1>Users</h1>
      {users.map((user) => {
        console.log(user.id);
        return (
          <div className={style.user} key={user.id}>
            <div className={style.detail}>
              <Image
                src={user.img || "/noAvatar.png"}
                alt=""
                width={50}
                height={50}
              />
              <span className={style.postTitle}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={style.userButton} type="submit">
                Delete
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};
export default AdminUsers;
