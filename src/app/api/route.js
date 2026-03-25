export const feedback = [
  {
    id: 1,
    message: "good",
  },
  {
    id: 2,
    message: "good",
  },
  {
    id:3,
    message: "good",
  },
];

export async function GET(request){
    return Response.json([
      {
        id: 1,
        message: "good",
      },
      {
        id: 2,
        message: "good",
      },
      {
        id: 3,
        message: "good",
      },
    ]);
}