export const feedback = [
  {
    id: 1,
    message: "nikel",
  },
  {
    id: 2,
    message: "emu",
  },
  {
    id: 3,
    message: "niher",
  },
  {
    id: 4,
    message: "nishi",
  },
];

export async function GET(req){
    return Response.json({
        id:1,
        message:'fast'
    })
}
