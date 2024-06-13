import LastActivity from "./index"
import {repoProps} from "./repo"
import { useEffect, useState } from "react"
import axios from "axios"


export const builder: React.FC = () => {
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [repos, setRepos] = useState<any[]>([])
    const [error, setHasError] = useState(false)

    useEffect(()=> {
        setIsDataLoading(true)
        try {
            axios.get("/api/get-githubApi").then(response => {
                setRepos(response.data.data)
            })
        } catch (error) {
            alert(error)
            setHasError(true)
        }finally{
            setIsDataLoading(false)
        }
    }, [])

    return(
        <LastActivity.root>
            {isDataLoading === false && (

                repos.map((item, index) => (
                    <LastActivity.repo key={index}
                    properties={{
                        imageSrc: item.owner.avatar_url,
                        linkToRepo: item.html_url,
                        repoName: item.name,
                        repoDesc: item.description,
                        repoOwner: item.owner.login,
                        repoUpdatedAt: item.updated_at,
                        repoLanguage: item.language
                    }}
                    />
                ))
                // 

            )}
        </LastActivity.root>
    )
}