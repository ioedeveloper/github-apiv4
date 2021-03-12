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
 * comments {
 *      Comments
 * }
 * commentsResourcePath
 * commentsUrl
 * createdAt
 * createdViaEmail
 * databaseId
 * editor {
 *      Owner
 * }
 * id
 * includesCreatedEdit
 * isPinned
 * isPrivate
 * lastEditedAt
 * number
 * publishedAt
 * reactionGroups {
 *      ReactionGroups
 * }
 * reactions {
 *      Reactions
 * }
 * resourcePath
 * team {
 *      Team
 * }
 * resourcePath
 * title
 * updatedAt
 * url
 * UserContentEdits
 * viewerCanDelete
 * viewerCanPin
 * viewerCanReact
 * viewerCanSubscribe
 * viewerCanUpdate
 * viewerCannotUpdateReasons
 * viewerDidAuthor
 * viewerSubscription
 */

 export const Discussion = (number: number = 10, fields: string = '') => `
    discussion(number: ${number}) {
        ${fields}
    }
`

/**
 * @description Github Graphql Discussions  
 * @defaultVariables totalCount first = 10 orderBy:string = 'CREATED_AT'
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * isPinned boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Discussion
 *      }
 *      nodes {
 *          Discussion
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/



export const Discussions = (isPinned:boolean = false,after:string = '', before: string = '', first:number = 10, last:number = 0, orderBy:string = "CREATED_AT", direction:string = 'ASC',fields:string = '') => `
    discussions(isPinned:${isPinned},${after ? `, after: ${after} ` : ''}${before?`, before: ${before}`:''}, ${first ? `, first: ${first} ` : ''}${last?`, last: ${last}`:''}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql Comment
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

export const Comment = (fromComment:number = 10,after: string = '', before: string = '', first: number = 10, last: number = 0,orderBy: string = "NUMBER",direction:string =  "ASC", fields: string = '') => `
    comments(fromComment: ${fromComment},${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Comments
 * @defaultVariables totalCount  first = 10
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * skip number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Comment
 *      }
 *      nodes {
 *          Comment
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Comments = (after:string = '', before: string = '', first:number = 10, last:number = 0, skip:string, fields:string = '') => `
    comments(${after ? `, after: ${after} ` : ''}${before?`, before: ${before}`:''}, ${first ? `, first: ${first} ` : ''}${last ?`, last: ${last}`:''}${skip ?`, skip: ${skip}`:''}) {
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
 * user {
 *      Users
 * }
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
 * @queryVariables 
 * edges {
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
 * nodes {
 *      Reaction
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const Reactions = (content:string = "",after: string = '', before: string = '', first: number = 10, last: number = 0,orderBy: string = "CREATED_AT",direction:string =  "ASC", fields: string = '') => `
    reactions(content: ${content},${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Reaction
 * @defaultVariables id content
 * @queryVariables 
 * content
 * createdAt
 * databaseId
 * id
 * reactable
 * users {
 *      User
 * }
 */

export const Reaction = (fields: string = "") => `
    content
    ${fields}
`

/**
 * @description Github Graphql Invitation
 * @defaultVariables id 
 * @queryVariables 
 * createdAt
 *  email
 *  id
 *  invitationType
 *  invitee{
 *      User
 *  }
 *  inviter {
 *      User
 *  }
 *  organization {
 *      Organization
 *  }
 *  role
 */

 export const Invitation = (fields: string = "") => `
 content
 ${fields}
`

/**
 * @description Github Graphql Invitations  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Invitation                                                    
 *      }
 *  }
 * nodes {
 *      Invitation
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const Invitations = (after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    invitations(${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql LatestOpinionatedReviews 
 * @defaultVariables totalCount first = 10 writersOnly = false
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * writersOnly boolean
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Comment                                                   
 *      }
 *  }
 * nodes {
 *      Comment
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const LatestOpinionatedReviews = (writersOnly:boolean = false,after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    latestOpinionatedReviews(writersOnly: ${writersOnly},${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql LatestReviews
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Comment                                                   
 *      }
 *  }
 * nodes {
 *      Comment
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const LatestReviews = (after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    latestOpinionatedReviews(${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql CommitComments
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Comment                                                   
 *      }
 *  }
 * nodes {
 *      Comment
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const CommitComments = (after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    commitComments(${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql Languages
 * @defaultVariables totalCount orderBy = "SIZE" direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * orderBy "SIZE""
 * direction "ASC" | "DESC"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          color
 *          id
 *          name
 *      }
 *  }
 *  nodes {
 *      color
 *      id
 *      name
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const Languages = (after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = "SIZE", direction:string = "ASC",fields: string = '') => `
    labels(${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? ', last: number' : ''},orderBy: {field: ${orderBy}, direction: ${direction}) {
        ${fields}
        totalCount
    }
`