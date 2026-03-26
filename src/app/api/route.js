export const feedback=[
    {
        id:1,
        name:'nikel'
    }
]


export async function GET(req){
    return Response.json([
        {
            name:'nikel'
        }
    ])
}
