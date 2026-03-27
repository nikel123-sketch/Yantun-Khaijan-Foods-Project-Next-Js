import { ObjectId } from "mongodb";

const { connect } = require("@/app/lib/dbConnect");

 const feedbackColl=connect('feedbacks')



//  get api
 export async function GET(req,{params}){
    const {id}=await params;

    if(!id || id.length !==24){
        return Response.json({
            status:400,
            message:'your id not valid'
        })
    }
    const query={_id:new ObjectId(id)};
    const result=await feedbackColl.findOne(query)

    return Response.json(result)

 }