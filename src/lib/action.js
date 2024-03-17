"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  // "use server";
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const userId = formData.get("userId");
  // const slug = formData.get("slug");
  // console.log(title,desc,userId,slug);

  const { title, desc, userId, slug, img } = Object.fromEntries(formData);
  //console.log(title, desc, userId, slug, img,"********************");
  

  try {
    connectToDb();
    const newPost = new Post({
      title,
      img,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    //console.log("save to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return {
      error: "Somthing went wrong!",
    };
  }
};

export const deletePost = async (formData) => {
  // "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("delete from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return {
      error: "Somthing went wrong!",
    };
  }
};

/*===================================*/
export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("save to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return {
      error: "Somthing went wrong!",
    };
  }
};

export const deleteUser = async (formData) => {
  // "use server";

  //

  //console.log(formData, "hrr");
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("delete from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return {
      error: "Somthing went wrong!",
    };
  }
};
/*===================================*/

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut("github");
};

export const register = async (previousState, formData) => {
  // console.log(formData,"tttt");
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    //return  "Password do not match";
    //throw Error("Password do not match");
    return { error: "Password do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username aleady exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Somthing went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  console.log(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      console.log(err);
      return { error: "invalid username or password" };
    }
    //return {error:"Somthing went wrong!"};
    throw err;
  }
};
