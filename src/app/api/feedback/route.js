import { feedback } from "../route";

export async function GET(req){
    return Response.json(feedback)
}


export async function POST(req){
    const {message}=await req.json();

    
    if(!message || typeof message !='string'){
        return Response.json({
            status:400,
            message:'message must be requrd'
        })
    }

    const newfeedback={id:feedback.length+1, message}
    feedback.push(newfeedback)
    return Response.json({
        status:200,
        newfeedback
    })
}