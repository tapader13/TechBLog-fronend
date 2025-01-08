import { connectDb } from "@/lib/db";

export default async function handler(req,res){
    if(req.method==="POST"){
        await connectDb();
        const data=req.body;
}