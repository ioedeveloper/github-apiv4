import { queryVariables } from "."

/**
* @description Github Graphql Topic
* @defaultVariables
* @fields
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
* @fields
** Topic
*/

export const RelatedTopics = (first: number = 10, field: string) => `
    relatedTopics(first: ${first}) {
        ${field}
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



export const Discussions = (isPinned:boolean = false, first:number = 10, after:string = '', before: string = '',  last:number = 0, orderBy:string = "CREATED_AT", direction:string = 'ASC', fields:string = '') => `
    discussions(isPinned:${isPinned}, first: ${first} ${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''} ${last?`, last: ${last}`:''}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
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

export const Comment = (fromComment:number = 10, first: number = 10, fields: string = '', orderBy: string = "NUMBER" ,direction:string =  "ASC",after: string = '', before: string = '', last: number = 0) => `
    comment(fromComment: ${fromComment},${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, first: ${first}${last ? `, last: ${last}` : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
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
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after String
 * before String
 * first number
 * last number
 * content string
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

export const Reactions = (content:string = "", fields: string = '', orderBy: string = "CREATED_AT", direction:string =  "ASC", first: number = 10, after: string = '', before: string = '', last: number = 0) => `
    reactions(content: ${content},first: ${first} ${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''} ${last ? `, last: ${last}` : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
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

export const Invitations = (first: number = 10, fields: string = '', after: string = '', before: string = '',  last: number) => `
    invitations(${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, first: ${first}${last ? `, last: ${last}` : ''}) {
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

export const LatestOpinionatedReviews = (writersOnly:boolean = false, fields: string = '', first: number = 10, after: string = '', before: string = '', last: number = 0) => `
    latestOpinionatedReviews(writersOnly: ${writersOnly},  first: ${first} ${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, ${last ? `, last: ${last}` : ''}) {
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

export const LatestReviews = (first: number = 10, after: string = '', before: string = '', last: number = 0, fields: string = '') => `
    latestOpinionatedReviews(${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, first: ${first}${last ? `, last: ${last}` : ''}) {
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

export const CommitComments = (first: number = 10, fields: string = '', after: string = '', before: string = '', last: number = 0) => `
    commitComments(first: ${first} ${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''} ${last ? `, last: ${last}` : ''}) {
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

export const Languages = (first: number = 10, fields: string = '', orderBy: string = "SIZE", direction:string = "ASC", after: string = '', before: string = '', last: number = 0) => `
    labels(first: ${first} ${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, ${last ? `, last: ${last}` : ''}, orderBy: {field: ${orderBy}, direction: ${direction}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql AuditLog  
 * @defaultVariables totalCount orderBy = "CREATED_AT", directions = "ASC", first = 10
 * @queryArguments 
 * query string
 * after String
 * before String
 * first number
 * last number
 * orderBy "CREATED_AT"
 * directions "ASC",
 * @queryVariables
 * edges {
 *      cursor, 
 *      node: {
 *          MembersCanDeleteReposClearAuditEntry
 *          MembersCanDeleteReposDisableAuditEntry
 *          MembersCanDeleteReposEnableAuditEntry
 *          OauthApplicationCreateAuditEntry
 *          OrgAddBillingManagerAuditEntry
 *          OrgAddMemberAuditEntry
 *          OrgBlockUserAuditEntry
 *          OrgConfigDisableCollaboratorsOnlyAuditEntry
 *          OrgConfigEnableCollaboratorsOnlyAuditEntry
 *          OrgCreateAuditEntry
 *          OrgDisableOauthAppRestrictionsAuditEntry
 *          OrgDisableSamlAuditEntry
 *          OrgDisableTwoFactorRequirementAuditEntry
 *          OrgEnableOauthAppRestrictionsAuditEntry
 *          OrgEnableSamlAuditEntry
 *          OrgEnableTwoFactorRequirementAuditEntry
 *          OrgInviteMemberAuditEntry
 *          OrgInviteToBusinessAuditEntry
 *          OrgOauthAppAccessApprovedAuditEntry
 *          OrgOauthAppAccessDeniedAuditEntry
 *          OrgOauthAppAccessRequestedAuditEntry
 *          OrgRemoveBillingManagerAuditEntry
 *          OrgRemoveMemberAuditEntry
 *          OrgRemoveOutsideCollaboratorAuditEntry
 *          OrgRestoreMemberAuditEntry
 *          OrgUnblockUserAuditEntry
 *          OrgUpdateDefaultRepositoryPermissionAuditEntry
 *          OrgUpdateMemberAuditEntry
 *          OrgUpdateMemberRepositoryCreationPermissionAuditEntry
 *          OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
 *          PrivateRepositoryForkingDisableAuditEntry
 *          PrivateRepositoryForkingEnableAuditEntry
 *          RepoAccessAuditEntry
 *          RepoAddMemberAuditEntry
 *          RepoAddTopicAuditEntry
 *          RepoArchivedAuditEntry
 *          RepoChangeMergeSettingAuditEntry
 *          RepoConfigDisableAnonymousGitAccessAuditEntry
 *          RepoConfigDisableCollaboratorsOnlyAuditEntry
 *          RepoConfigDisableContributorsOnlyAuditEntry
 *          RepoConfigDisableSockpuppetDisallowedAuditEntry
 *          RepoConfigEnableAnonymousGitAccessAuditEntry
 *          RepoConfigEnableCollaboratorsOnlyAuditEntry
 *          RepoConfigEnableContributorsOnlyAuditEntry
 *          RepoConfigEnableSockpuppetDisallowedAuditEntry
 *          RepoConfigLockAnonymousGitAccessAuditEntry
 *          RepoConfigUnlockAnonymousGitAccessAuditEntry
 *          RepoCreateAuditEntry
 *          RepoDestroyAuditEntry
 *          RepoRemoveMemberAuditEntry
 *          RepoRemoveTopicAuditEntry
 *          RepositoryVisibilityChangeDisableAuditEntry
 *          RepositoryVisibilityChangeEnableAuditEntry
 *          TeamAddMemberAuditEntry
 *          TeamAddRepositoryAuditEntry
 *          TeamChangeParentTeamAuditEntry
 *          TeamRemoveMemberAuditEntry
 *          TeamRemoveRepositoryAuditEntry
 *      }
 * }
 * nodes {
 *      MembersCanDeleteReposClearAuditEntry
 *      MembersCanDeleteReposDisableAuditEntry
 *      MembersCanDeleteReposEnableAuditEntry
 *      OauthApplicationCreateAuditEntry
 *      OrgAddBillingManagerAuditEntry
 *      OrgAddMemberAuditEntry
 *      OrgBlockUserAuditEntry
 *      OrgConfigDisableCollaboratorsOnlyAuditEntry
 *      OrgConfigEnableCollaboratorsOnlyAuditEntry
 *      OrgCreateAuditEntry
 *      OrgDisableOauthAppRestrictionsAuditEntry
 *      OrgDisableSamlAuditEntry
 *      OrgDisableTwoFactorRequirementAuditEntry
 *      OrgEnableOauthAppRestrictionsAuditEntry
 *      OrgEnableSamlAuditEntry
 *      OrgEnableTwoFactorRequirementAuditEntry
 *      OrgInviteMemberAuditEntry
 *      OrgInviteToBusinessAuditEntry
 *      OrgOauthAppAccessApprovedAuditEntry
 *      OrgOauthAppAccessDeniedAuditEntry
 *      OrgOauthAppAccessRequestedAuditEntry
 *      OrgRemoveBillingManagerAuditEntry
 *      OrgRemoveMemberAuditEntry
 *      OrgRemoveOutsideCollaboratorAuditEntry
 *      OrgRestoreMemberAuditEntry
 *      OrgUnblockUserAuditEntry
 *      OrgUpdateDefaultRepositoryPermissionAuditEntry
 *      OrgUpdateMemberAuditEntry
 *      OrgUpdateMemberRepositoryCreationPermissionAuditEntry
 *      OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
 *      PrivateRepositoryForkingDisableAuditEntry
 *      PrivateRepositoryForkingEnableAuditEntryInvitation
 *      RepoAccessAuditEntry
 *      RepoAddMemberAuditEntry
 *      RepoAddTopicAuditEntry
 *      RepoArchivedAuditEntry
 *      RepoChangeMergeSettingAuditEntry
 *      RepoConfigDisableAnonymousGitAccessAuditEntry
 *      RepoConfigDisableCollaboratorsOnlyAuditEntry
 *      RepoConfigDisableContributorsOnlyAuditEntry
 *      RepoConfigDisableSockpuppetDisallowedAuditEntry
 *      RepoConfigEnableAnonymousGitAccessAuditEntry
 *      RepoConfigEnableCollaboratorsOnlyAuditEntry
 *      RepoConfigEnableContributorsOnlyAuditEntry
 *      RepoConfigEnableSockpuppetDisallowedAuditEntry
 *      RepoConfigLockAnonymousGitAccessAuditEntry
 *      RepoConfigUnlockAnonymousGitAccessAuditEntry
 *      RepoCreateAuditEntry
 *      RepoDestroyAuditEntry
 *      RepoRemoveMemberAuditEntry
 *      RepoRemoveTopicAuditEntry
 *      RepositoryVisibilityChangeDisableAuditEntry
 *      RepositoryVisibilityChangeEnableAuditEntry
 *      TeamAddMemberAuditEntry
 *      TeamAddRepositoryAuditEntry
 *      TeamChangeParentTeamAuditEntry
 *      TeamRemoveMemberAuditEntry
 *      TeamRemoveRepositoryAuditEntry
 * } 
 * 
*/

export const AuditLog = (params: queryVariables.AuditLog) => `
    auditLog(query:${params.query}, ${params.first ? `first: ${params.first}` : ""} ${params.last ? `last: ${params.last}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""},
        ${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : "" }) {
        edges {
			cursor
			node {
				${params.fields}
			}
		}
		nodes {
			${params.fields}  
		}
		${params.pageInfo ? params.pageInfo : ""}
		totalCount
	}

`

/**
* @description Github Graphql Comments
* @defaultVariables totalCount
* @queryArguments 
** after string
** before string
** first number
** last number
* @fields
** Comment 
*/

export const Comments = (params: queryVariables.BasicFields) => `
    comments(${params.first ? `first: ${params.first}` : "" } ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
    
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ""}
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