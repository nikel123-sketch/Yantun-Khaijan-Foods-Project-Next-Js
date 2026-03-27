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


//  delete api--
export async function DELETE(req,{params}){
    const {id}=await params;
      if (!id || id.length !== 24) {
        return Response.json({
          status: 400,
          message: "your id not valid",
        });
      }
    const query={_id:new ObjectId(id)};
    const result=await feedbackColl.deleteOne(query);
    return Response.json(result)
}



// update /patch api--
export async function PATCH(req,{params}){
  const {message,name}=await req.json();
  const {id}=await params;

  if(!message || typeof message !='string'){
    return Response.json({
      status:400,
      message:'message must be requerd'
    })
  }
  if(!name || typeof name !='string'){
    return Response.json({
      status:400,
      message:'name must be requerd'
    })
  }

  if(!ObjectId.isValid(id)){
    return Response.json({
      status:400,
      message:'id is not valid'
    })
  }

  const query={_id:new ObjectId(id)}
  const update={
    $set:{
      name,
      message,
      date:new Date()
    }
  }

  const result=await feedbackColl.updateOne(query,update);
  return Response.json(result)
}