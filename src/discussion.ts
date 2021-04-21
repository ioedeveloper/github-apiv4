/**
* @description Github Graphql Topic
* @fields
** id
** name
** RelatedTopics
** stargazerCount
** Stargazers
** viewerHasStarred
*/

export const Topic = (fields: string) => `
    ${fields}
`

/**
* @description Github Graphql RelatedTopics
* @defaultVariables first number
* @fields
** Topic
*/

export const RelatedTopics = (first: number = 10, fields: string) => `
    relatedTopics(first: ${first}) {
        ${fields}
    }
`
