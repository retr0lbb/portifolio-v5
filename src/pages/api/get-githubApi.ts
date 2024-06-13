import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit"

export default async function handler(request: NextApiRequest, reply: NextApiResponse){
    const token = process.env.GITHUB_API_KEY

    const octokit = new Octokit({
        auth: token
    })


    const result = await octokit.request("GET /users/{username}/repos", {
        username: "retr0lbb",
        sort: "updated",
        per_page: 3,
    })

    if(result.data.length <= 0){
        return reply.status(404).send({message: "no repos found"})
    }


    return reply.status(200).send({message: "serach done sucessfull", data: result.data})
}