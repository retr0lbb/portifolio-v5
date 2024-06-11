import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios"
import { isNullOrUndefined } from "util";

export default async function handler(request: NextApiRequest, reply: NextApiResponse){
    const url = "https://api.github.com/users/retr0lbb/repos"
    const token = process.env.GITHUB_API_KEY


    interface repoMainProps {
        name: string,
    }

    async function getRepos(url:string): Promise<repoMainProps[]>{
        const response = await axios.get(url, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        return response.data
    }

    async function getLatestCommit(repo: string): Promise<any>{
        const url = `/repos/retr0lbb/${repo}/commits`;
        const response = await axios.get(url, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        const commits = response.data
        return commits.length > 0 ? commits[0]: null;
    }

    try {
        const repos = await getRepos(url)

        if(repos.length === 0){
            return reply.status(404).json({ message: 'Nenhum repositório encontrado.' });
        }

        let mostRecentCommit: any = null
        let mostRecentRepo: string | null = null

        for(const repo in repos){
            console.log()
        }
        
    } catch (error) {
        
    }
    


    //return reply.send({data})
}