import { queryVariables } from '.'

/**
 * @description Github Graphql Comment
 * @defaultVariables id
 * @fields
 ** author { Author }
 ** authorAssociation
 ** body
 ** bodyHTML
 ** bodyText
 ** bodyVersion
 ** createdAt
 ** createdViaEmail
 ** Commit
 ** databaseId
 ** Discussion
 ** editor { Editor }
 ** id
 ** includesCreatedEdit
 ** lastEditedAt
 ** number
 ** path
 ** position
 ** publishedAt
 ** ReactionGroups
 ** subject { databaseId id }
 */

export const Comment = (fromComment:number = 10, first: number = 10, fields: string = '', orderBy: string = 'NUMBER', direction:string = 'ASC', after: string = '', before: string = '', last: number = 0) => `
    comment(fromComment: ${fromComment},${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, first: ${first}${last ? `, last: ${last}` : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
* @description Github Graphql ReactionGroups
* @defaultVariables totalCount
* @fields
** content
** createdAt
** subject {
    ** databaseId
    ** id
    ** ReactionGroups
    ** Reactions
    ** onIssue
    ** onPullRequest
    ** onTeamDiscussion
    ** onTeamDiscussionComment
    ** onCommitComment
    ** onIssueComment
    ** onPullRequestReview
    ** onPullRequestReviewComment
* }
** Users
** viewerHasReacted
*/

export const ReactionGroups = (fields: string = '') => `
    reactionGroups {
        content
        createdAt
        ${fields}
    }
`

/**
* @description Github Graphql Reactable
* @fields
** databaseId
** id
** onIssue
** onPullRequest
** onTeamDiscussion
** onTeamDiscussionComment
** onCommitComment
** onIssueComment
** onPullRequestReview
** onPullRequestReviewComment
*/

export const Reactable = (fields: string = '') => `
    reactable {
        id
        ${fields}
    }    
`

/**
* @description Github Graphql Reactions
* @defaultVariables totalCount
* @queryArguments
** direction 'ASC' | 'DESC'
** after string
** before string
** first number
** last number
** content string
** @fields
** Reaction
*/

export const Reactions = (params: queryVariables.Reactions) => `
    reactions(${params.content ? `content: "${params.content}"` : ''}${params.first ? `first: ${params.first}` : ''} ${params.last ? `last: ${params.last}` : ''} ${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''},
    ${params.orderBy || params.direction ? ` orderBy: {orderBy: ${params.orderBy}, direction: ${params.direction}` : ''}) {
        edges {
			cursor
			node {
				${params.fields}
			}
		}
		nodes {
			${params.fields}  
		}
		${params.pageInfo ? params.pageInfo : ''}
		totalCount
    }
`
/**
* @description Github Graphql Reaction
* @fields
** content
** createdAt
** databaseId
** id
** Reactable
** User
*/

export const Reaction = (fields: string = '') => `
    reaction {
        id
        content
        ${fields}
    }    

`

/**
 * @description Github Graphql LatestOpinionatedReviews
 * @defaultVariables totalCount
 * @queryArguments
 ** after string
 ** before string
 ** first number
 ** last number
 ** writersOnly boolean
 * @fields
 ** Review
*/

export const LatestOpinionatedReviews = (params: queryVariables.LatestOpinionatedReviews) => `
    latestOpinionatedReviews(${params.writersOnly ? `writersOnly: ${params.writersOnly}` : ''}, ${params.first ? `first: ${params.first}` : ''} ${params.last ? `last: ${params.last}` : ''} ${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        } 
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

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

export const Topic = (fields: string, name?: string) => `
    topic ${name ? `(name: "${name}")` : ''} {
        ${fields}
    }
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
    comments (${params.first ? `first: ${params.first}` : ''} ${params.last ? `last: ${params.last}` : ''} ${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''}
    ${params.fromComment ? `, fromComment: ${params.fromComment}` : ''}
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''} ) {
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
        ${params.pageInfo ? params.pageInfo : ''}
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
    discussions ( ${params.first ? `first: ${params.first}` : ''}  ${params.first ? `last: ${params.last}` : ''} ${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''}
    ${params.isPinned ? `, isPinned: ${params.isPinned}` : ''}   
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''} ) {
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
        ${params.pageInfo ? params.pageInfo : ''}
    }
`
