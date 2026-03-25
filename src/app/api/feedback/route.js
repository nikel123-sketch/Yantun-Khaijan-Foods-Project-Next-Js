import { feedback } from "../route";

export async function GET(request) {
  return Response.json(feedback);
}

export async function POST(request) {
  const { message } = await request.json();
  console.log(message)

  // Validation
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Message is required and must be a string",
    });
  }

  // Create new feedback
  const newFeedback = { message, id: feedback.length + 1 };
  feedback.push(newFeedback);

  // Return updated feedback
  return Response.json({
    status: 200,
    message: "Feedback added successfully",
    data: newFeedback, // just the new feedback
    feedback
  });
}
