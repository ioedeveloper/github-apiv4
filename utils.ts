import axios from "axios";

export function getRequest(key: string, query: string): Promise<any> {
    return axios("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${key}`,
        },
        data: JSON.stringify({ query: query }),
    }).then(res => {
        if(res.data && res.data.data){
            return res.data.data
        }
        return res.data
    });
}
