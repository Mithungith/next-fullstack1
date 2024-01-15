import { getUser } from "../../../lib/data";
import style from "./postUser.module.css";

//Fetch Data with API
// async function getData(userId){
//     const data=  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});

//     return data.json();
// }


async function PostUser({userId}){
    //Fetch Data with API
    // const user = await getData(userId);

    //Fetch data without an api
    const user = await getUser(userId);
    console.log(userId);
    return (
        <div className={style.container}>
            <span className={style.title}>
                Author
            </span>
            <span className={style.username}>
                {user.name}
            </span>
        </div>
    )
}

export default PostUser;