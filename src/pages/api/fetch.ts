import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(request: NextApiRequest, reply: NextApiResponse){
    const response = await fetch("http://localhost:3333")
}