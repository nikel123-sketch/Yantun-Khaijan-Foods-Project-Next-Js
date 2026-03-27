import { connect } from "@/app/lib/dbConnect";

const  feedbackColl = connect("feedbacks");


export async function GET(req){
    const result=await feedbackColl.find().toArray();
    return Response.json(result)
}

export async function POST(req){
    const {name,message}=await req.json();

    if(!name ||typeof name !='string'){
        return Response.json({
            status:400,
            message:'name must be requerd'
        })
    }

    if(!message || typeof message !='string'){
        return Response.json({
          status: 400,
          message: "message must be requerd",
        });
    }

    const newfeedback={name,message,date:new Date()}
    const result=await feedbackColl.insertOne(newfeedback)

    return Response.json(result)


}
