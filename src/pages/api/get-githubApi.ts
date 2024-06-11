import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(request: NextApiRequest, reply: NextApiResponse){
    return reply.send({message: "Hey man"})
}