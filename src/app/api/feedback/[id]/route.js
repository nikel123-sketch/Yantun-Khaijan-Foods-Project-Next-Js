import { feedback } from "../../route";

export async function GET(req, { params }) {
  const { id } =await params;
const newfeedback=feedback.find(fd=>fd.id==id)
  return Response.json({
    newfeedback,
   
  });
}
