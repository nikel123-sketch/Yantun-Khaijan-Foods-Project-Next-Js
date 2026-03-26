import { feedback } from "../../route";

export async function GET(req,{params}){
    const {id}=await params;

    const singlefeedback= feedback.find(item=>item.id===Number(id))
    return Response.json(singlefeedback)
}
