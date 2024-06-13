import { Octokit } from "octokit"
import {Repo, repoProps} from "./repo"
import {Root } from "./root"
import { GetServerSideProps } from "next"

interface RepoDataProps {
    updated_at: string,
    owner: {
        login: string,
        avatar_url: string
    },
    name: string,
    description: string | null,
    html_url: string
}

function LatestAcivity({repo}: {repo: any[]}){

    if(!repo){
        return
    }

    return(
        <Root>

            {
                repo.map((item: RepoDataProps, index: number)=> (
                    <Repo properties={{
                        imageSrc: item.owner.avatar_url,
                        linkToRepo: item.html_url,
                        repoDesc: item.description ?? "",
                        repoLanguage: "",
                        repoName: item.name,
                        repoOwner: item.owner.login,
                        repoUpdatedAt: item.updated_at
        
                    }} />
                ))
            }
        </Root>
    )
}


export default LatestAcivity