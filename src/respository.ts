/**
 * @description Github Graphql PendingAdminInvitations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryVariables
 * createdAt
 * description
 * descriptionHTML
 * hasIssuesEnabled
 * forkCount
 * hasProjectsEnabled
 * hasWikiEnabled
 * homepageUrl
 * isArchived
 * isFork
 * isInOrganization
 * isLocked
 * isMirror
 * isPrivate
 * isTemplate
 * LicenseInfo
 * lockReason
 * mirrorUrl
 * name
 * nameWithOwner
 * openGraphImageUrl
 * Owner
 */

export const PendingAdminInvitations = (query: string = "", visibility: string = "PUBLIC", after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = "CREATED_AT", directions: string = "ASC", fields: string = '') => `
    pendingAdminInvitations(query: ${query},visibility = ${visibility}, after: ${after} ${before ? ', before' : ''} , first: ${first} ${last ? ', last: number' : ''},orderBy: {orderBy: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Owner
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryVariables
 * avatarUrl
 * id
 * login
 */



export const Owner = (fields: string, user: string = '', organization: string = '', repository: string) => `
  owner {
    ${fields}
  }
`

/**
 * @description Github Graphql Repositories
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false affiliations "OWNER" isFork = false isLocked = false privacy = "PUBLIC"
 * @queryArguments 
 * affiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * ownerAffiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * after string
 * before string
 * first number
 * last number
 * isFork boolean
 * isLocked boolean
 * privacy "PUBLIC" | "PRIVATE"
 * @queryVariables
 * edges {
 *      cursor
 *      node {
 *          RepositoryNode
 *      }
 *  }
 * nodes {
 *  RepositoryNode
 *  PageInfo
 *  totalCount
 *  totalDiskUsage
 * }
 */

export const Repositories = (affiliations: string = "OWNER", ownerAffiliations: string = "OWNER", privacy: string = "PUBLIC", after: string = "", before: string = "", first: number = 10, last?: number, isFork: boolean = false, isLocked: boolean = false, orderBy: string = "CREATED_AT", direction: string = "ASC", fields: string = "") => `
    repositories(affiliations: ${affiliations}, ownerAffiliations:${ownerAffiliations}, after: ${after}, before: ${before}, first: ${first}, isFork: ${isFork}, isLocked: ${isLocked}, ${last ? ', last=${last}' : ''} orderBy: {orderBy: ${orderBy}, direction: ${direction}}, ownerAffiliations: OWNER, privacy: ${privacy}) {
        ${fields}
    }
`

/**
 * @description Github Graphql BranchProtectionRules  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          allowsDeletions
 *          allowsForcePushes
 *          BranchProtectionRuleConflicts
 *          creator {
 *              avatarUrl
 *              login
 *              resourcePath
 *              url
 *              onEnterpriseUserAccount
 *              onOrganization
 *              onUser
 *              onMannequin
 *              onBot
 *          }
 *          databaseId
 *          dismissesStaleReviews
 *          id
 *          isAdminEnforced
 *          MatchingRefs
 *          pattern
 *          PushAllowances
 *      }
 *  }
 *  nodes {
*       onEnterpriseUserAccount
*       onUser
*   }
*   PageInfo
*   totalCount
* }
*/

export const BranchProtectionRules = (after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    branchProtectionRules(after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
    }
`

/**
 * @description Github Graphql BranchProtectionRuleConflicts  
 * @defaultVariables totalCount orderBy = CREATED_AT  direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          branchProtectionRule{
 *              BranchProtectionRules
 *          }
 *          conflictingBranchProtectionRule{
 *              BranchProtectionRules
 *          }
 *          ref {
 *              Ref
 *          }
 *      }
 *  }
 *  nodes {
*       branchProtectionRule{
*              BranchProtectionRules
*          }
*          conflictingBranchProtectionRule{
*              BranchProtectionRules
*          }
*          ref {
*              AssociatedPullRequests
*              id
*              branchProtectionRule {
*                 BranchProtectionRules
*              }
*              name
*              prefix
*              refUpdateRule {
*                  allowsDeletions
*                  allowsForcePushes
*                  pattern
*                  requiredApprovingReviewCount
*                  requiredStatusCheckContexts
*                  requiresLinearHistory
*                  requiresSignatures
*                  viewerCanPush
*              }
*              Repository {
*                  RepositoryNode
*              }
*              target
*          }
*       PageInfo
*       totalCount
*   }
*   PageInfo
*   totalCount
* }
*/

export const BranchProtectionRuleConflicts = (after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    branchProtectionRuleConflicts(after: ${after} ${before ? ', before' : ''} , first: ${first} ${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
    }
`

/**
 * @description Github Graphql PullRequest
 * @defaultVariables id
 * @queryVariables activeLockReason
 * additions
 * assignees {
 *      Assignees
 * }
 * author {
 *      Author
 * }
 * authorAssociation
 * autoMergeRequest {
 *      authorEmail
 *      commitBody
 *      commitHeadline
 *      enabledAt
 *      enabledBy {
 *          Owner
 *      }
 *      mergeMethod
 *      pullRequest {
 *          PullRequest
 *      }
 * }
 * baseRef {
 *      BaseRef
 * }
 * baseRefName
 * baseRefOid
 * baseRepository {
 *      Repository
 * }
 * body
 * bodyHTML
 * bodyText
 * changedFiles
 * checksResourcePath
 * checksUrl
 * closed
 * closedAt
 * comments {
 *      Comments
 * }
 * commits {
 *      Commit
 * }
 * createdAt
 * createdViaEmail
 * databaseId
 * deletions
 * editor {
 *      Owner
 * }
 * files {
 *      File
 * }
 * headRef {
 *      Ref
 * }
 * headRefName
 * headRefOid
 * headRepository {
 *      Repository
 * }
 * hoverCard {
 *      HoverCard
 * }
 * id
 * includesCreatedEdit
 * isCrossRepository
 * isDraft
 * isReadByViewer
 * labels {
 *      Label
 * }
 * lastEditedAt
 Make this: //LatestOpinionatedReviews
 * LatestReviews
 * locked
 * maintainerCanModify
 * mergeCommit {
 *      Commit
 * }
 * locked
 * mergeable
 * merged
 * mergedAt
 * mergedBy {
 *      Owner
 * }
 * Milestone
 * number
 * Participants
 * permalink
 * potentialMergeCommit {
 *      Commit
 * }
 * ProjectCards
 * publishedAt
 * reactionGroups {
 *      Groups
 * }
 * Reactions
 */

 export const PullRequest = (fields:string = '') => `
    id
    ${fields}
`

/**
 * @description Github Graphql PullRequests  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10 states = "OPEN"
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * states "OPEN" | "CLOSED" | "MERGED"
 * baseRefName string
 * headRefName string
 * labels string
 * field "CREATED_AT" | "UPDATED_AT" | "COMMENTS" 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          PullRequest
 *      }
 *  }
 *  nodes {
 *       PullRequest
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const PullRequests = (baseRefName: string = "", headRefName: string = "", labels: string = "", states: string = "OPEN", after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    pullRequests(baseRefName : ${baseRefName},headRefName:${headRefName},labels:${labels},states:${states},after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}},) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql AssociatedPullRequests  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10 states = "OPEN"
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * states "OPEN" | "CLOSED" | "MERGED"
 * baseRefName string
 * headRefName string
 * labels string
 * field "CREATED_AT" | "UPDATED_AT" | "COMMENTS" 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          PullRequest
 *      }
 *  }
 *  nodes {
 *       PullRequest
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const AssociatedPullRequests = (baseRefName: string = "", headRefName: string = "", labels: string = "", states: string = "OPEN", after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    associatedPullRequests(baseRefName : ${baseRefName},headRefName:${headRefName},labels:${labels},states:${states},after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}},) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MatchingRefs  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * query string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          AssociatedPullRequests
 *              id
 *              branchProtectionRule {
 *                 BranchProtectionRules
 *              }
 *              name
 *              prefix
 *              refUpdateRule {
 *                  allowsDeletions
 *                  allowsForcePushes
 *                  pattern
 *                  requiredApprovingReviewCount
 *                  requiredStatusCheckContexts
 *                  requiresLinearHistory
 *                  requiresSignatures
 *                  viewerCanPush
 *              }
 *              Repository {
 *                  RepositoryNode
 *              }
 *              target
 *      }
 *  }
 *  nodes {
 *       AssociatedPullRequests
 *          id
 *          branchProtectionRule {
 *              BranchProtectionRules
 *          }
 *          name
 *          prefix
 *          refUpdateRule {
 *              allowsDeletions
 *              allowsForcePushes
 *              pattern
 *              requiredApprovingReviewCount
 *              requiredStatusCheckContexts
 *              requiresLinearHistory
 *              requiresSignatures
 *              viewerCanPush
 *          }
 *          Repository {
 *          RepositoryNode
 *       }
 *       target
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const MatchingRefs = (query: string = "", after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    matchingRefs(query : ${query},after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MatchingRefs  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          
 *      }
 *  }
 *  nodes {
 *       actor {
 *          onActor
 *       }
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const PushAllowances = (after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    pushAllowances(after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql App
 * @defaultVariables id name
 * @queryVariables createdAt
 * databaseId
 * description
 * logoBackgroundColor
 * logoUrl
 * slug
 * updatedAt
 * url
 * 
 */

 export const App = (fields:string = '') => `
    id
    name
    ${fields}        
`

/**
 * @description Github Graphql onApp
 * @defaultVariables id
 * @queryVariables avatarUrl
 * App
 */

 export const onApp = (fields:string = '') => `
 ... on App {
     ${fields}        
 }
`

/**
 * @description Github Graphql Issue
 * @defaultVariables id
 * @queryVariables activeLockReason
 * Assignees
 * Author
 * id
 * activeLockReason
 * authorAssociation
 * body
 * bodyHTML
 * bodyResourcePath
 * bodyText
 * bodyUrl
 * closed
 * closedAt
 * Comments
 * createdAt
 * createdViaEmail
 * databaseId
 * editor {
 *  Editor
 * }
 * HoverCard
 * includesCreatedEdit
 * isPinned
 * isReadByViewer
 *
 */


 export const Issue = (fields:string = '') => `
    id
    ${fields}
`


/**
 * @description Github Graphql HoverCard
 * @queryVariables 
 * contexts {
 *      message
 *      octicon
 *      ... on GenericHovercardContext {
 *          __typename
 *          message
 *          octicon
 *       }
 *      ... on OrganizationTeamsHovercardContext {
 *          __typename
 *          message
 *          octicon
 *          RelevantTeams
 *          teamsResourcePath
 *          teamsUrl
 *          totalTeamCount
 *      }
 *      ... on OrganizationsHovercardContext {
 *          __typename
 *          message
 *          octicon
 *          RelevantOrganisations
 *          totalOrganizationCount
 *      }
 *      ... on ReviewStatusHovercardContext {
 *          reviewDecision
 *          message
 *          octicon
 *      }
 *      ... on ViewerHovercardContext {
 *          __typename
 *          message
 *          octicon
 *          viewer {
 *              User
 *          }
 *      }
 * 
 * }
 * 
 */

 export const HoverCard = (includeNotificationContexts:string = "",fields:string = '') => `
    ${fields}        
`

/**
 * @description Github Graphql Labels  
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * orderBy = "CREATED_AT" | "NAME"
 * direction = "ASC" | "DESC"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Label
 *      }
 *  }
 *  nodes {
 *       Label
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const Labels = (after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = "NAME", direction:string = "ASC",fields: string = '') => `
    labels(after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''},orderBy: {field: ${orderBy}, direction: ${direction}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql Label
 * @defaultVariables id isDefault
 * @queryVariables color
 * createdAt
 * description
 * isDefault
 * issues {
 *      Issues
 *  }
 *  name
 *  PullRequests
 *  Repository
 *  resourcePath
 *  updatedAt
 *  url
 */


 export const Label = (fields:string = '') => `
    id
    ${fields}
`

/**
 * @description Github Graphql Issues  
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 states = "OPEN"
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * orderBy = "CREATED_AT" | "UPDATE_AT" | "COMMENTS"
 * direction = "ASC" | "DESC"
 * states "OPEN" | "CLOSED"
 * filterBy {assignee: string, createdBy: string, labels: string, mentioned: string, milestone: string, since: string, states: "OPEN" | "CLOSED", viewerSubscribed: boolean}
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Issue
 *      }
 *  }
 *  nodes {
 *       Issue
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const Issues = (labels: string = "",states:string = "OPEN",after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy: string = "NAME", direction:string = "ASC",filterBy:string = "",fields: string = '') => `
    issues(labels:${labels},states: ${states},after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''},orderBy: {field: ${orderBy}, direction: ${direction},
    ${filterBy&&filterBy}) {}
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql BaseRef
 * @defaultVariables id
 * @queryVariables
 * AssociatedPullRequests
 * BranchProtectionRules
 * id
 * name
 * prefix
 * refUpdateRule {
 *      RefUpdateRules
 * }
 * target {
 *      abbreviatedOid
 *      commitResourcePath
 *      commitUrl
 *      id
 *      oid
 * }
 * repository {
 *      Repository
 * }
 * onCommit
 * onTree
 * onBlog
 * onTag
 * } 
 */

 export const BaseRef = (fields:string = "") => `
    ${fields}
 ` 

 /**
 * @description Github Graphql Branch
 * @defaultVariables id name
 * @queryVariables 
 * associatedPullRequests {
 *      AssociatedPullRequests
 * }
 * branchProtectionRule {
 *      BranchProtectionRules
 * }
 * prefix
 * refUpdateRule {
 *      RefUpdateRules
 * }
 * repository {
 *      Repository
 * }
 * target
 */

  export const Branch = (fields:string = '') => `
  id
  name
  ${fields}        
`


/**
 * @description Github Graphql Commit
 * @defaultVariables id
 * @queryVariables 
 * abbreviatedOid
 * additions
 * associatedPullRequests {
 *      AssociatedPullRequests
 * }
 * author {
 *      Author
 * }
 * authoredByCommitter
 * authoredDate
 * authors {
 *      Authors
 * }
 * blame(path: "") {
 *      ranges {
 *          age
 *          commit {
 *              Commit
 *          }
 *          endingLine
 *          startingLine
 *      }
 * }
 * changedFiles
 * checkSuites {
 *      CheckSuite
 * }
 * Comments
 * commitResourcePath
 * commitUrl
 * committedDate
 * committedViaWeb
 * committer {
 *      avatarUrl
 *      date
 *      email
 *      name
 *      User
 * }
 * deletions
 * Deployment
 * File
 * History
 * message
 * messageBody
 * messageBodyHTML
 * messageHeadline
 * messageHeadlineHTML
 * oid
 * onBehalfOf {
 *      Organization
 * }
 * parents {
 *      Parents
 * }
 * pushedDate
 * repository {
 *      Repository
 * }
 * signature {
 *      Signature
 * }
 * status {
 *      Status
 * }
 * statusCheckRollup {
 *      commit {
 *          Commit
 *      }
 *      contexts {
 *          Contexts
 *      }
 *      id
 *      state
 * }
 * SubModules
 * tarballUrl
 * Tree
 * id
 * resourcePath
 * tarballUrl
 * treeResourcePath
 * treeUrl
 * url
 * viewerCanSubscribe
 * viewerSubscription
 * zipballUrl
 */

 export const Commit = (fields:string = '') => `
     id
     ${fields}        
`

/**
 * @description Github Graphql onCommit  
 * @queryArguments
 * Commit 
 */
export const onCommit = (fields:string = '') => `
    ... on Commit {
        ${fields}
    }
`
/**
 * @description Github Graphql Tree  
 * @defaultVariables id
 * @queryArguments
 * abbreviatedOid
 * commitResourcePath
 * commitUrl
 * entries {
 *      File
 * }
 * oid
 * Repository
 */
 export const Tree = (fields:string = '') => `
    ${fields}
`
/**
 * @description Github Graphql onTree  
 * @queryArguments
 * Tree
 * @defaultVariables totalCount environments = "" orderBy = CREATED_AT direction = "ASC" first = 10
 */
 export const onTree = (fields:string = '') => `
 ... on Tree {
     ${fields}
 }
`

/**
 * @description Github Graphql Blob  
 * @defaultVariables id
 * @queryArguments
 * abbreviatedOid
 * byteSize
 * commitResourcePath
 * commitUrl
 * id
 * isBinary
 * isTruncated
 * oid
 * Repository
 * text
 */
 export const Blob = (fields:string = '') => `
    ${fields}
`

/**
 * @description Github Graphql onBlob  
 * @queryArguments
 * Blob
 */
 export const onBlob = (fields:string = '') => `
 ... on Blob {
     ${fields}
 }
`
/**
 * @description Github Graphql Tag  
 * @defaultVariables id name
 * @queryArguments
 * abbreviatedOid
 * commitResourcePath
 * commitUrl
 * message
 * oid
 * repository {
 *      Repository
 * }
 * tagger {
 *      avatarUrl
 *      date
 *      email
 *      name
 *      User
 * }
 * target {
 *      abbreviatedOid
 *      commitResourcePath
 *      commitUrl
 *      id
 *      oid
 *      repository {
 *          Repository
 *      }
 *      onCommit
 *      onTree
 *      onBlob
 *      onTag
 * }
 * 
 */
 export const Tag = (fields:string = '') => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql onTag  
 * @queryArguments
 * Tag
 */
 export const onTag = (fields:string = '') => `
 ... on Tag {
     ${fields}
 }
`


/**
 * @description Github Graphql Deployments  
 * @defaultVariables totalCount environments = "" orderBy = CREATED_AT direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * orderBy 'CREATED_AT'
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Deployment
 *      }
 *      nodes {
 *          Deployment
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Deployments = (environments:string = "",after:string = '', before: string = '',deployment:string, first:number = 10, last:number = 0, orderBy:string = 'CREATED_AT', direction:string = 'ASC',fields:string = '') => `
    deployments( environments: ${environments},after: ${after} ${before?`, before: ${before}`:''}, deployment:${deployment} , first: ${first} ${last?`, last: ${last}`:''}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Deployment  
 * @defaultVariables id
 * @queryArguments 
 * Commit
 * commitOid
 * createdAt
 * creator{
 *      Author
 * }
 * databaseId
 * description
 * environment
 * latestEnvironment
 * latestStatus {
 * createdAt
 * creator{
 *      Author
 * }
 * Deployment
 * description
 * environmentUrl
 * id
 * logUrl
 * state
 * updatedAt
 * originalEnvironment
 * payload
 * ref {
 *      Ref
 * }
 * repository {
 *      Repository
 * }
 * state
 * Statuses
 * task
 * updatedAt
 */

 export const Deployment = (fields:string = '') => `
    id
    ${fields}        
`
/**
 * @description Github Graphql Ref
 * @defaultVariables id
 * @queryVariables 
 * AssociatedPullRequests
 * id
 * branchProtectionRule {
 *  BranchProtectionRules
 * }
 * name
 * prefix
 * refUpdateRule {
 *      RefUpdateRules
 * }
 *  Repository {
 *      RepositoryNode
 *  }
 *  target
 */

 export const Ref = (fields:string = '') => `
    id
    ${fields}        
`

/**
 * @description Github Graphql RefUpdateRules
 * @defaultVariables id
 * @queryVariables allowsDeletions
 *      allowsForcePushes
 *      pattern
 *      requiredApprovingReviewCount
 *      requiredStatusCheckContexts
 *      requiresLinearHistory
 *      requiresSignatures
 *      viewerCanPush
*/

export const RefUpdateRules = (fields:string = '') => `
    id
    ${fields}        
`

/**
 * @description Github Graphql Status
 * @defaultVariables id
 * @queryVariables 
 * combinedContexts {
 *     CombinedContexts
 * }
 * commit {
 *     Commit
 * }
 * context {
 *     Context
 * }
 * contexts {
 *     Context
 * }
 * id
 * state
 */

 export const Status = (fields:string = '') => `
     id
     ${fields}        
`

/**
 * @description Github Graphql Statuses  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Status
 *      }
 *      nodes {
 *          Status
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const Statuses = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    authors(after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql File
 * @defaultVariables name type
 * @queryVariables 
 * extension
 * isGenerated
 * mode
 * name
 * object {
 *      abbreviatedOid
 *      commitResourcePath
 *      commitUrl
 *      id
 *      oid
 *      repository {
 *          Repository
 *      }
 *      onCommit
 *      onTree
 *      onBlob
 *      onTag
 * }
 * oid
 * path
 * Repository
 * submodule {
 *      branch
 *      gitUrl
 *      name
 *      path
 *      subprojectCommitOid
 *      type
 * }
 */

 export const File = (path:string = "",fields:string = '') => `
    file(path: ${path}) {
        ${fields}
        name
        type
    }
`

/**
 * @description Github Graphql History  
 * @defaultVariables totalCount  first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * author: {emails: string, id: string}
 * since string
 * until string
 * path string
 * @queryVariables 
 * 
 *  edges {
 *      cursor
 *      node {
 *          Commit
 *      }
 *      nodes {
 *          Commit
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const History = (author:string = "",path:string = "",since:string = "", until:string = "",after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    history(${author&&author}${path?`, path: ${path}`:''}${since?`, since: ${since}`:''},${until?`, until: ${until}`:''},after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Parents
 * @defaultVariables totalCount first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Commit
 *      }
 *      nodes {
 *          Commit
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const Parents = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    parents(after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Signature
 * @defaultVariables id
 * @queryVariables 
 * email
 * isValid
 * payload
 * signature
 * signer {
 *      User
 * }
 * state
 * wasSignedByGitHub
 * ... on GpgSignature {
 *      keyId
 *      email
 *      isValid
 *      payload
 *      signature
 *      signer {
 *          User
 *      }
 *      state
 *      wasSignedByGitHub
 * }
 * ... on SmimeSignature {
 *      __typename
 *      email
 *      isValid
 *      payload
 *      signature
 *      signer {
 *          User
 *      }
 *      state
 *      wasSignedByGitHub
 * }
 * ... on UnknownSignature {
 *      __typename
 *      email
 *      isValid
 *      payload
 *      signature
 *      signer {
 *          User
 *      }
 *      state
 *      wasSignedByGitHub
 * }
 */

 export const  Signature = (fields:string = '') => `
     id
     ${fields}        
`

/**
 * @description Github Graphql CombinedContexts
 * @defaultVariables totalCount first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          onCheckRun
 *          onStatusContext
 *      }
 *      nodes {
 *          onCheckRun
 *          onStatusContext
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const CombinedContexts = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    combinedContexts(after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Annotations
 * @defaultVariables totalCount first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          annotationLevel
 *          blobUrl
 *          databaseId
 *          location {
 *              start {
 *                  column
 *                  line
 *              }
 *              end {
 *                  column
 *                  line
 *              }
 *          }
 *          message
 *          path
 *          rawDetails
 *          title
 *      }
 *      nodes {
 *          annotationLevel
 *          blobUrl
 *          databaseId
 *          location {
 *              start {
 *                  column
 *                  line
 *              }
 *              end {
 *                  column
 *                  line
 *              }
 *          }
 *          message
 *          path
 *          rawDetails
 *          title
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const Annotations = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    annotations(after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql CheckSuite
 * @defaultVariables id conclusion
 * @queryVariables 
 *  app {
 *      App
 * }
 * branch {
 *      Branch
 * }
 * checkRuns {
 *      CheckRuns
 * }
 * commit {
 *      Commit
 * }
 * conclusion
 * createdAt
 * databaseId
 * id
 * matchingPullRequests {
 *      PullRequests
 * }
 * push {
 *      id
 *      nextSha
 *      permalink
 *      previousSha
 *      pusher {
 *          User
 *      }
 *      repository {
 *          Repository
 *      }
 * }
 * repository {
 *      Repository
 * }
 * resourcePath
 * status
 * updatedAt
 * url
 */

 export const CheckSuite = (fields:string = '') => `
     id
     conclusion
     ${fields}        
`

/**
 * @description Github Graphql CheckRun
 * @defaultVariables id name
 * @queryVariables 
 *  annotation {
 *      Annotation
 * }
 * checkSuite {
 *      CheckSuite
 * }
 * completedAt
 * conclusion
 * databaseId
 * detailsUrl
 * externalId
 * permalink
 * repository {
 *      Repository
 * }
 * url
 * title
 * text
 * summary
 * status
 * startedAt
 * resourcePath
 */

 export const CheckRun = (fields:string = '') => `
     id
     name
     ${fields}        
`

/**
 * @description Github Graphql CheckRuns  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * filterBy {appId: number, checkName: string, checkType: "ALL" | "LATEST" , status: "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "COMPLETED" | "WAITING" | "REQUESTED"}
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          CheckRun
 *      }
 *      nodes {
 *          CheckRun
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const CheckRuns = (filterBy:string = "", after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    checkRuns(${filterBy&&`${filterBy},`}after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql onCheckRun  
 * @queryArguments 
 * CheckRun
 */

 export const onCheckRun = (fields:string = '') => `
 ... on CheckRun {
     ${fields}        
 }
`

/**
 * @description Github Graphql StatusContext
 * @defaultVariables id state
 * @queryVariables 
 *  avatarUrl
 *  context
 *  createdAt
 *  creator {
 *      Owner
 *  }
 * description
 * state
 * targetUrl
 */

 export const StatusContext = (fields:string = '') => `
     id
     state
     ${fields}        
`
/**
 * @description Github Graphql onStatusContext  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * StatusContext
 */

 export const onStatusContext = (fields:string = '') => `
 ... on StatusContext {
     ${fields}        
 }
`

/**
 * @description Github Graphql Context
 * @defaultVariables id
 * @queryVariables 
 * avatarUrl
 * commit {
 *      Commit
 * }
 * context
 * createdAt
 * creator {
 *      Owner
 * }
 * description
 * id
 * state
 * targetUrl
 */

 export const Context = (name:string = "",fields:string = '') => `
    context(name: ${name}) {
        ${fields}
    }
`
/**
 * @description Github Graphql Submodules
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          branch
 *          gitUrl
 *          name
 *          path
 *          subprojectCommitOid
 *      }
 *      nodes {
 *          branch
 *          gitUrl
 *          name
 *          path
 *          subprojectCommitOid
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const Submodules = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    submodules(after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql Milestone
 * @defaultVariables id description
 * @queryVariables 
 * closed
 * closedAt
 * createdAt
 * creator
 * dueOn
 * id
 * Issues
 * number
 * progressPercentage
 * PullRequests
 * repository {
 *      Repository
 * }
 * resourcePath
 * state
 * title
 * updatedAt
 * url
 */

 export const Milestone = (fields:string = '') => `
    id
    description
    ${fields}        
`
