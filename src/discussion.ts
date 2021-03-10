/**
 * @description Github Graphql Discussion
 * @defaultVariables id
 * @queryVariables 
 * author {
 *      Author
 * }
 * authorAssociation
 * body
 * bodyHTML
 * bodyText
 * bodyVersion
 */

 export const Discussion = (number: number = 10, fields: string = '') => `
    discussion(number: ${number}) {
        ${fields}
    }
`

/**
 * @description Github Graphql Comments
 * @defaultVariables id orderBy = "NUMBER"
 * @queryVariables 
 * author {
 *      Author
 * }
 * authorAssociation
 * body
 * bodyHTML
 * bodyText
 * bodyVersion
 * createdAt
 * createdViaEmail
 * databaseId
 * Discussion
 * editor {
 *     Editor
 * }
 * id
 * includesCreatedEdit
 * lastEditedAt
 * number
 * publishedAt
 * ReactionGroups
 * subject {
 *      databaseId
 *      id
 * }
 */

export const Comments = (fromComment:number = 10,after: string = '', before: string = '', first: number = 10, last: number = 0,orderBy: string = "NUMBER",direction:string =  "ASC", fields: string = '') => `
    comments(fromComment: ${fromComment},after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql ReactionGroups
 * @defaultVariables id email
 * @queryVariables content
 * createdAt
 * subject {
 *      databaseId
 *      id
 *      ReactionGroups
 *      Reactions
 *      viewerCanReact
 *      onIssue
 *      onPullRequest
 *      onTeamDiscussionComment
 *      onCommitComment
 *      onIssueComment
 *      onPullRequestReview
 *      onPullRequestReviewComment
 * }
 * Users
 * viewerHasReacted
 */


export const ReactionGroups = (fields: string = '') => `
    ${fields}
`
/**
 * @description Github Graphql Reactions  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10 immediateOnly = false
 * @queryArguments direction 'ASC' | 'DESC' 
 * after String
 * before String
 * first number
 * last number
 * content string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *         content
 *          createdAt
 *          id
 *          databaseId
 *          reactable {
 *              Reaction
 *          }                                                    
 *      }
 *  }
 *  nodes {
 *       
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const Reactions = (content:string = "",after: string = '', before: string = '', first: number = 10, last: number = 0,orderBy: string = "CREATED_AT",direction:string =  "ASC", fields: string = '') => `
    reactions(content: ${content},after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Reaction
 * @defaultVariables id databaseId
 * @queryVariables 
 * databaseId
 * id
 * reactionGroups {
 *      ReactionGroups
 * }
 */

export const Reaction = (fields: string = "") => `
    ${fields}
`
