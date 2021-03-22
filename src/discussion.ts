/**
* @description Github Graphql Topic
* @defaultVariables 
* id 
* name
* RelatedTopics
* stargazerCount
* Stargazers
* viewerHasStarred
*/

export const Topic = (field: string) => `
    ${field}
`

/**
* @description Github Graphql RelatedTopics
* @defaultVariables
* first number
* field Topic
*/

export const RelatedTopics = (first: number = 10, field: string) => `
    relatedTopics(first: ${first}) {
        ${field}
    }
`

/**
* @description Github Graphql Stargazers
* @fields User
* @defaultVariables
* first number
* last number
* after string
* before string
* orderBy "STARRED_AT"
* direction "ASC" | "DESC"
*/

export const Stargazers = (first: number = 10, field: string, pageInfo?: string, orderBy: string = "STARRED_AT", direction: string = "ASC", after?: string, before?: string, last?: string) => `
    stargazers(first: ${first} ${after ? `, ${after}` : ""} ${before ? `, ${before}` : ""} ${last ? `, ${last}` : ""}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        edges {
            cursor
            node {
                ${field}
            }
            starredAt
        }
        nodes {${field}}
        ${pageInfo ? pageInfo : ""}
        totalCount
    }
`
