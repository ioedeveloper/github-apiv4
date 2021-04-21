import { queryVariables } from "."

/**
* @description Github Graphql Topic
* @defaultVariables
** id
** name
** RelatedTopics
** stargazerCount
** Stargazers
** viewerHasStarred
*/


export const Topic = (field: string) => `
    ${field}
`

/**
* @description Github Graphql RelatedTopics
* @defaultVariables
** first number
* @fields Topic
*/

export const RelatedTopics = (first: number = 10, field: string) => `
    relatedTopics(first: ${first}) {
        ${field}
    }
`

/**
* @description Github Graphql Stargazers
* @defaultVariables
** first number
** last number
** after string
** before string
** orderBy "STARRED_AT"
** direction "ASC" | "DESC"
** @field User
*/

export const Stargazers = (first: number = 10, field: string, pageInfo?: string, orderBy: string = 'STARRED_AT', direction: string = 'ASC', after?: string, before?: string, last?: string) => `
    stargazers(first: ${first} ${after ? `, ${after}` : ''} ${before ? `, ${before}` : ''} ${last ? `, ${last}` : ''}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        edges {
            cursor
            node {
                ${field}
            }
            starredAt
        }
        nodes {${field}}
        ${pageInfo || ''}
        totalCount
    }
`

/**
* @description Github Graphql Discussion
* @fields
** author {
    ** Owner
}
** authorAssociation
** body
** bodyHTML
** bodyText
** bodyVersion
** Comments
** commentsResourcePath
** commentsUrl
** createdAt
** createdViaEmail
** databaseId
** editor {
    ** Owner
*}
** id
** includesCreatedEdit
** isPinned
** isPrivate
** lastEditedAt
** number
** publishedAt
** ReactionGroups
** Reactions
** resourcePath
** Team
** title
** updatedAt
** url
** UserContentEdits
** viewerCanDelete
** viewerCanPin
** viewerCanReact
** viewerCanSubscribe
** viewerCanUpdate
** viewerCannotUpdateReasons
** viewerDidAuthor
** viewerSubscription
*/

export const Discussion = (number: number, fields: string) => `
    discussion (number: ${number}) {
        ${fields}
    }
`

/**
* @description Github Graphql Comments
* @defaultVariables totalCount
* @queryArguments 
* after string
** before string
** first number
** last number
** orderBy "NAME"

* @fields
** Comment

*/


export const Comments = (params: queryVariables.Comments) => `
    comments (${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.first? `,first: ${params.first}` : ""} ${params.last ? `, last: ${params.last}` : ""}
    ${params.fromComment? `, fromComment: ${params.fromComment}` : ""}   
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""} ) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            totalCount
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ""}
    }
`

/**
* @description Github Graphql Comment
* @fields
** Discussion
*/

export const Comment = (number: number, fields: string) => `
    comment {
        ${fields}
    }
`

/**
* @description Github Graphql Discussions
* @defaultVariables totalCount
* @queryArguments 
** after string
** before string
** first number
** last number
** orderBy "CREATED_AT"

* @fields
** Discussion
*/


export const Discussions = (params: queryVariables.Discussions) => `
    discussions (${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.first? `,first: ${params.first}` : ""} ${params.last ? `, last: ${params.last}` : ""}
    ${params.isPinned? `, isPinned: ${params.isPinned}` : ""}   
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""} ) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            totalCount
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ""}
    }
`