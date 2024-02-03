import { NextResponse } from "next/server";
import { Post } from "../../../../lib/models";
import { connectToDb } from "../../../../lib/utils"

export const GET = async (request)=>{
    try{
        connectToDb();

        const post = await Post.find();
        return NextResponse.json(post);
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch posts");
    }
}