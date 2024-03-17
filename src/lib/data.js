import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// //Temporary Data
// const users = [
//     {id:1,name:"jhon"},
//     {id:2,name:"jane"},
//     {id:3,name:"Mithun"},
//     {id:4,name:"Asha"},
//     {id:5,name:"Jhon"},
//     {id:6,name:"Riya"},
//     {id:7,name:"Heral"},
//     {id:8,name:"Meghraj"},
//     {id:9,name:"Ayush"},
// ];

// const posts = [
//     {id:1,title:"post 1",body:".........",userId:1},
//     {id:2,title:"post 2",body:".........",userId:2},
//     {id:3,title:"post 3",body:".........",userId:3},
//     {id:4,title:"post 4",body:".........",userId:4},
//     {id:5,title:"post 5",body:".........",userId:5},
//     {id:6,title:"post 6",body:".........",userId:6},
//     {id:7,title:"post 7",body:".........",userId:7},
//     {id:8,title:"post 8",body:".........",userId:8},
//     {id:9,title:"post 9",body:".........",userId:9}
// ];

export const getPosts = async () => {
  // return posts;
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Posts!");
  }
};

export const getPost = async (slug) => {
  // const post = posts.find((post)=>post.id === parseInt(id));
  // return post;
  try {
    connectToDb();
    const post = await Post.findOne(slug);
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Post!");
  }
};

export const getUser = async (id) => {
  noStore(); //use to clear cache
  // return users.find((user)=>user.id === parseInt(id));
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async (id) => {
  // return users.find((user)=>user.id === parseInt(id));
  try {
    connectToDb();
    const users = await User.find(id);
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
