/**
 * @description Github Graphql Repository
 * @defaultVariables id
 * @queryVariables
 * AssignableUsers
 * BranchProtectionRules
 * CodeOfConduct
 * Collaborators
 * CommitComments
 * contactLinks {
 *      about
 *      name
 *      url
 * }
 * createdAt
 * databaseId
 * defaultBranchRef {
 *      Ref
 * }
 * deleteBranchOnMerge
 * DeployKeys
 * Deployment
 * hasIssuesEnabled
 * description
 * descriptionHTML
 * diskUsage
 * forkCount
 * fork {
 *      Repositories
 * }
 * fundingLinks {
 *      platform
 *      url
 * }
 * hasIssuesEnabled
 * hasProjectsEnabled
 * hasWikiEnabled
 * homepageUrl
 * id
 * interactionAbility {
 *      expiresAt
 *      limit
 *      origin
 * }
 * isArchived
 * isBlankIssuesEnabled
 * isDisabled
 * isEmpty
 * isFork
 * isInOrganization
 * isLocked
 * isMirror
 * isPrivate
 * isSecurityPolicyEnabled
 * isTemplate
 * isUserConfigurationRepository
 * issue {
 *      Issue
 * }
 * issueOrPullRequest(number: number) {
 *      onIssue
 *      onPullRequest
 * }
 * issueTemplates {
 *      about
 *      body
 *      name
 *      title
 * }
 * issues {
 *      Issues
 * }
 * label {
 *      Label
 * }
 * labels {
 *      Labels
 * }
 * Languages
 * latestRelease {
 *      LatestRelease
 * }
 * licenseInfo {
 *      LicenseInfo
 * }
 * lockReason
 * MentionableUsers
 * mergeCommitAllowed
 * Milestone
 * Milestones
 * mirrorUrl
 * name
 * nameWithOwner
 * object(expression: string, oid: string) {
 *      abbreviatedOid
 *      commitResourcePath
 *      commitUrl
 *      id
 *      oid
 *      respository {
 *          Repository
 *      }
 *      onCommit
 *      onTree
 *      onBlog
 *      onTag
 * }
 * openGraphImageUrl
 * owner {
 *      Owner
 * }
 * Packages
 * parent {
 *      Repository
 * }
 * pinnedIssues {
 *      Issues
 * }
 * primaryLanguage {
 *      color
 *      id
 *      name
 * }
 * project {
 *      Project
 * }
 * Projects
 * projectsResourcePath
 * projectsUrl
 * pullRequest {
 *      PullRequest
 * }
 * PullRequests
 * pushedAt
 * rebaseMergeAllowed
 * ref {
 *      Ref
 * }
 * Refs
 * release {
 *      Release
 * }
 * Releases
 * Topics
 * resourcePath
 * securityPolicyUrl
 * shortDescriptionHTML
 * squashMergeAllowed
 * sshUrl
 * stargazerCount
 * //implement this Stargazers
 * Submodules
 * tempCloneToken
 * templateRepository {
 *      Repository
 * }
 * updatedAt
 * url
 * usesCustomOpenGraphImage
 * viewerCanAdminister
 * viewerCanCreateProjects
 * viewerCanSubscribe
 * viewerCanUpdateTopics
 * viewerDefaultCommitEmail
 * viewerDefaultMergeMethod
 * viewerHasStarred
 * viewerPermission
 * viewerPossibleCommitEmails
 * viewerSubscription
 * VulnerabilityAlerts
 * Watchers
 */

 export const Repository = (fields:string = '') => `
    id
    ${fields}        
`

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

export const PendingAdminInvitations = (query: string = "", visibility: string = "PUBLIC", first: number = 10,after: string = '', before: string = '', last: number = 0, orderBy: string = "CREATED_AT", directions: string = "ASC", fields: string = '') => `
    pendingAdminInvitations(query: ${query},visibility = ${visibility}, ${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''} , first: ${first} ${last ? `last: ${last}` : ''},orderBy: {orderBy: ${orderBy}, direction: ${directions}}) {
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



export const Owner = (fields: string) => `
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
 *          Repository
 *      }
 *  }
 * nodes {
 *  Repository
 *  PageInfo
 *  totalCount
 *  totalDiskUsage
 * }
 */

export const Repositories = (affiliations: string = "OWNER", ownerAffiliations: string = "OWNER", privacy: string = "PUBLIC", after: string = "", before: string = "", first: number = 10, last?: number, isFork: boolean = false, isLocked: boolean = false, orderBy: string = "CREATED_AT", direction: string = "ASC", fields: string = "") => `
    repositories(affiliations: ${affiliations}, ownerAffiliations:${ownerAffiliations}, ${after ? `, after: ${after} ` : ''}, ${before ? `, before: ${before}`: ''} first: ${first}, isFork: ${isFork}, isLocked: ${isLocked}, ${last ? ', last=${last}' : ''} orderBy: {orderBy: ${orderBy}, direction: ${direction}}, ownerAffiliations: OWNER, privacy: ${privacy}) {
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

export const BranchProtectionRules = (first: number = 10,after: string = '', before: string = '', last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    branchProtectionRules(${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
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

export const BranchProtectionRuleConflicts = (first: number = 10,after: string = '', before: string = '', last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    branchProtectionRuleConflicts(${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''} , first: ${first} ${last ? `last: ${last}` : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
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
 *      Labels
 * }
 * lastEditedAt
 * LatestOpinionatedReviews
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
 * repository {
 *      Repository
 * }
 * resourcePath
 * revertResourcePath
 * revertUrl
 * reviewDecision
 * reviewRequests {
 *      ReviewRequests
 * }
 * reviewThreads {
 *      ReviewThreads
 * }
 * reviews {
 *      Reviews
 * }
 * state
 * suggestedReviewers {
 *      isAuthor
 *      isCommenter
 *      isCommenter
 *      reviewer {
 *          User
 *      }
 * }
 * timeline {
 *      Timeline
 * }
 * timelineItems {
 *      TimelineItems
 * }
 * title
 * updatedAt
 * url
 * userContentEdits {
 *      UserContentEdits
 * }
 * viewerCanApplySuggestion
 * viewerCanDeleteHeadRef
 * viewerCanDisableAutoMerge
 * viewerCanEnableAutoMerge
 * viewerCanReact
 * viewerCanSubscribe
 * viewerCanUpdate
 * viewerCannotUpdateReasons
 * viewerDidAuthor
 * viewerMergeBodyText(mergeType: "MERGE" | "SQUASH" | "REBASE")
 * viewerMergeHeadlineText(mergeType: "MERGE" | "SQUASH" | "REBASE")
 * viewerSubscription
 */

 export const PullRequest = (number:number = 10 ,fields:string = '') => `
    pullRequest(number: ${number}) {
        ${fields}
    }
`
/**
 * @description Github Graphql onPullRequest  
 * @queryArguments
 * PullRequest
*/
export const onPullRequest = (fields:string = '') => `
    ... on PullRequest {
        ${fields}
    }
`
/**
 * @description Github Graphql PullRequestReviewThread  
 * @defaultVariables id
 * @queryArguments
 * comments {
 *      Comments
 * } 
 * isOutdated
 * diffSide
 * isCollapsed
 * isResolved
 * line
 * originalLine
 * originalStartLine
 * path
 * pullRequest {
 *      PullRequest
 * }
 * repository {
 *      Repository
 * }
 * resolvedBy {
 *      Owner
 * }
 * startDiffSide
 * startLine
 * viewerCanReply
 * viewerCanResolve
 * viewerCanUnresolve
*/

export const PullRequestReviewThread = (fields:string = '') => `
    id
    ${fields}
`

/**
 * @description Github Graphql onPullRequestReviewThread  
 * @queryArguments
 * PullRequestReviewThread
*/
export const onPullRequestReviewThread = (fields:string = '') => `
    ... on PullRequestReviewThread {
        ${fields}
    }
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

export const PullRequests = (baseRefName: string = "", headRefName: string = "", labels: string = "", states: string = "OPEN", first: number = 10,after: string = '', before: string = '', last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    pullRequests(baseRefName : ${baseRefName},headRefName:${headRefName},labels:${labels},states:${states},${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}},) {
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

export const AssociatedPullRequests = (baseRefName: string = "", headRefName: string = "", labels: string = "", states: string = "OPEN", first: number = 10,after: string = '', before: string = '', last: number = 0, orderBy: string = 'CREATED_AT', direction: string = 'ASC', fields: string = '') => `
    associatedPullRequests(baseRefName : ${baseRefName},headRefName:${headRefName},labels:${labels},states:${states},${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}},) {
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

export const MatchingRefs = (query: string = "", first: number = 10,after: string = '', before: string = '', last: number = 0, fields: string = '') => `
    matchingRefs(query : ${query},${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}) {
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

export const PushAllowances = (first: number = 10,after: string = '', before: string = '', last: number = 0, fields: string = '') => `
    pushAllowances(${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}) {
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
 * @description Github Graphql onIssue  
 * @queryArguments
 * Issue
*/
export const onIssue = (fields:string = '') => `
    ... on Issue {
        ${fields}
    }
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
 *          RelevantOrganizations
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

 export const HoverCard = (fields:string = '') => `
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
 * orderBy "CREATED_AT" | "NAME"
 * direction "ASC" | "DESC"
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

export const Labels = (first: number = 10,after: string = '', before: string = '', last: number = 0, orderBy: string = "NAME", direction:string = "ASC",fields: string = '') => `
    labels(${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''},orderBy: {field: ${orderBy}, direction: ${direction}) {
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

export const Issues = (labels: string = "",states:string = "OPEN",first: number = 10,after: string = '', before: string = '', last: number = 0, orderBy: string = "NAME", direction:string = "ASC",filterBy:string = "",fields: string = '') => `
    issues(labels:${labels},states: ${states},${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''},orderBy: {field: ${orderBy}, direction: ${direction},
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
    deployments( environments: ${environments},${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, deployment:${deployment} , first: ${first} ${last?`, last: ${last}`:''}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
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

export const Statuses = (first:number = 10,after:string = '', before: string = '', last:number = 0,fields:string = '') => `
    authors(first: ${first} ${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql File
 * @defaultVariables name type path
 * @queryVariables 
 * extension
 * isGenerated
 * mode
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
        name
        type
        ${fields}
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
    history(${author&&author}${path?`, path: ${path}`:''}${since?`, since: ${since}`:''},${until?`, until: ${until}`:''},${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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
    parents(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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
    combinedContexts(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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
    annotations(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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
    checkRuns(${filterBy&&`${filterBy},`}${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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
    submodules(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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
/**
 * @description Github Graphql Milestones  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * query string
 * state "OPEN" | "CLOSED"
 * orderBy "DUE_DATE" | "CREATED_AT" | "UPDATED_AT" | "NUMBER"
 * direction "ASC" | "DESC"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Milestone
 *      }
 *      nodes {
 *          Milestone
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const Milestones = (query:string = "",state:string = "OPEN",after:string = '', before: string = '', first:number = 10, last:number = 0,orderBy:string = "DUE_DATE", direction: "ASC",fields:string = '') => `
    milestones(query: ${query},state: ${state},${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql ReviewRequests
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * orderBy 'LOGIN' | 'CREATED_AT'
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          asCodeOwner
 *          databaseId
 *          id
 *          pullRequest {
 *              PullRequest
 *          }
 *          requestedReviewer {
 *              onMannequin
 *              onTeam
 *              onUser
 *          }
 *      }
 *      nodes {
 *          asCodeOwner
 *          databaseId
 *          id
 *          pullRequest {
 *              PullRequest
 *          }
 *          requestedReviewer {
 *              onMannequin
 *              onTeam
 *              onUser
 *          }
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const ReviewRequests = (after:string = '', before: string = '', first:number = 10, last:number = 0, fields:string = '') => `
    reviewRequests(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last ?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql ReviewThreads
 * @defaultVariables totalCount  first = 10
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
 *          comments {
 *              Comments
 *              diffSide
 *              id
 *              isCollapsed
 *              isOutdated
 *              isResolved
 *              line
 *              originalLine
 *              originalStartLine
 *              path
 *          }
 *          pullrequest {
 *              PullRequest
 *          }
 *          repository {
 *              Repository
 *          }
 *          resolvedBy {
 *              User
 *          }
 *          startDiffSide
 *          startLine
 *          viewerCanReply
 *          viewerCanResolve
 *          viewerCanUnresolve
 *      }
 *      nodes {
 *          comments {
 *              Comments
 *              diffSide
 *              id
 *              isCollapsed
 *              isOutdated
 *              isResolved
 *              line
 *              originalLine
 *              originalStartLine
 *              path
 *          }
 *          pullrequest {
 *              PullRequest
 *          }
 *          repository {
 *              Repository
 *          }
 *          resolvedBy {
 *              User
 *          }
 *          startDiffSide
 *          startLine
 *          viewerCanReply
 *          viewerCanResolve
 *          viewerCanUnresolve
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const ReviewThreads = (after:string = '', before: string = '', first:number = 10, last:number = 0, fields:string = '') => `
    reviewThreads(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last ?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Reviews
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
 *          Repository
 *      }
 *      role
 *      nodes {
 *          Repository
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Reviews = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    reviews(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Timeline
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * since string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          ... on AssignedEvent {
 *              actor {
 *                  Owner
 *              }
 *              assignable {
 *                  Assignees
 *              }
 *              assignee {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              user {
 *                  User
 *              }
 *              
 *          }
 *          ... on BaseRefDeletedEvent {
 *              actor {
 *                  Owner
 *              }
 *              baseRefName
 *              createdAt
 *         ClosedEvent     id
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on BaseRefForcePushedEvent {
 *              id
 *              afterCommit {
 *                  Commit   
 *              }
 *              beforeCommit {
 *                  Commit   
 *               }
 *              createdAt
 *              pullRequest {
 *                  PullRequest
 *              }
 *              ref {
 *                  Ref
 *              }
 *           }
 *          ... on ClosedEvent {
 *              actor {
 *                  Owner
 *              }
 *              closable {
 *                  Closable
 *              }
 *              closer {
 *                  onCommit
 *                  onPullRequest
 *              }
 *              createdAt
 *              id
 *              resourcePath
 *              url
 *           }
 *          onCommit
 *          ... on CommitCommentThread {
 *              Comments
 *              Commit
 *              id
 *              path
 *              position
 *              repository {
 *                  Repository
 *              }
 *          }
 *          ... on CrossReferencedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              isCrossRepository
 *              referencedAt
 *              resourcePath
 *              source {
 *                  onIssue
 *                  onPullRequest
 *              }
 *              target {
 *                  onIssue
 *                  onPullRequest
 *              }
 *              url
 *              willCloseTarget
 *          }
 *          ... on DemilestonedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              milestoneTitle
 *              subject {
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on DeployedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              databaseId
 *              deployment {
 *                  Deployment
 *              }
 *              pullRequest {
 *                  PullRequest
 *              }
 *              ref {
 *                  Ref
 *              }
 *          }
 *          ... on DeploymentEnvironmentChangedEvent {
 *              id
 *              actor
 *              createdAt
 *              deploymentStatus {
 *                  createdAt
 *                  creator {
 *                      Owner
 *                  }
 *                  deployment {
 *                      Deployment
 *                  }
 *                  description
 *                  environmentUrl
 *                  id
 *                  logUrl
 *                  state
 *                  updatedAt
 *              }
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on HeadRefDeletedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              headRefName
 *              headRef {
 *                  Ref
 *              }
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on HeadRefForcePushedEvent {
 *              actor {
 *                  Owner
 *              }
 *              afterCommit {
 *                  Commit   
 *              }
 *              beforeCommit {
 *                  Commit   
 *              }
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *              ref {
 *                  Ref
 *              }
 *          }
 *          ... on HeadRefRestoredEvent {
 *              actor {
 *                  Owner
 *              }
 *              createAt
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on IssueComment {
 *              Comment
 *           }
 *          ... on LabeledEvent {
 *              actor {
 *                  Ownwer
 *              }
 *              createdAt
 *              id
 *              label {
 *                  label
 *              }
 *              labelable {
 *                  Labels
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on LockedEvent {
 *              createdAt
 *              creator {
 *                  Owner
 *              }
 *              id
 *              lockReason
 *              lockable {
 *                  activeLockReason
 *                  locked {
 *                      OnIssue
 *                      onPullRequest
 *                  }
 *              }
 *          }
 *          ... on MergedEvent {
 *              actor {
 *                  Owner
 *              }
 *              Commit
 *              createdAt
 *              id
 *              mergeRef {
 *                  Ref
 *              }
 *              mergeName 
 *              pullRequest {
 *                  PullRequest
 *              }
 *              resourcePath
 *              url
 *          }
 *          ... on MilestonedEvent {
 *                  id
 *                  actor {
 *                      Owner
 *                  }
 *                  createdAt
 *                  milestoneTitle
 *                  subject {
 *                      onIssue
 *                      onPullRequest
 *                  }
 *          }
 *          ... on PullRequestReview {
 *              PullRequest
 *          }
 *          ... on PullRequestReviewComment {
 *              PullRequest
 *          }
 *          onPullRequestReviewThread
 *          ... on ReferencedEvent {
 *              actor {
 *                  Owner
 *              }
 *              commit {
 *                  Commit
 *              }
 *              commitRepository {
 *                  Repository
 *              }
 *              createdAt
 *              id
 *              isCrossRepository
 *              isDirectReference
 *              subject {
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on RenamedTitleEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              currentTitle
 *              subject {
 *                  onIssue
 *                  onPullRequest
 *              }
 *              previousTitle
 *          }
 *          ... on ReopenedEvent {
 *              actor {
 *                  Owner
 *              }
 *              id
 *              createdAt
 *              closable {
 *                  Closable
 *              }
 *           }
 *          ... on ReviewDismissedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              databaseId
 *              dismissalMessage
 *              dismissalMessageHTML
 *              id
 *              previousReviewState
 *              pullRequest {
 *                  PullRequest
 *              }
 *              pullRequestCommit {
 *                  Commit
 *                  id
 *                  pullRequest {
 *                      PullRequest
 *                  }
 *                  resourcePath
 *                  url
 *              }
 *              resourcePath
 *              review {
 *                  Review
 *              }
 *              url
 *          }
 *          ... on ReviewRequestRemovedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *              requestedReviewer {
 *                  onMannequin
 *                  onTeam
 *                  onUser
 *              }
 *          }
 *          ... on ReviewRequestedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *              requestedReviewer {
 *                  onMannequin
 *                  onTeam
 *                  onUser
 *              }
 *          }
 *          ... on SubscribedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              subscribable {
 *                  Subscribable
 *              }
 *          }
 *          ... on UnassignedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              assignable {
 *                  Assignees
 *                  onIssue
 *                  onPullRequest
 *              }
 *              assignee {
 *                  onBot
 *                  onMannequin
 *                  onOrganization
 *                  onUser
 *              }
 *              createdAt
 *              user {
 *                  User
 *              }
 *          }
 *          ... on UnlabeledEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              label {
 *                  Label
 *              }
 *              labelable {
 *                  Labels
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on UnlockedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              lockable {
 *                  activeLockReason
 *                  locked
 *                  onIssue
 *                  onPullRequest
 *               }
 *          }
 *          ... on UnlockedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              subscribable {
 *                  id
 *                  viewerCanSubscribe
 *                  viewerSubscription
 *                  onIssue
 *                  onPullRequest
 *                  onRepository
 *                  onTeam
 *                  onTeamDiscussion
 *                  onCommit
 *              }
 *          }
 *          ... on UserBlockedEvent {
 *              actor
 *              blockDuration
 *              createdAt
 *              id
 *              subject {
 *                  User
 *              }
 *          }
 *      }
 *      role
 *      nodes {
 *          ... on AssignedEvent {
 *              actor {
 *                  Owner
 *              }
 *              assignable {
 *                  Assignees
 *              }
 *              assignee {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              user {
 *                  User
 *              }
 *              
 *          }
 *          ... on BaseRefDeletedEvent {
 *              actor {
 *                  Owner
 *              }
 *              baseRefName
 *              createdAt
 *         ClosedEvent     id
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on BaseRefForcePushedEvent {
 *              id
 *              afterCommit {
 *                  Commit   
 *              }
 *              beforeCommit {
 *                  Commit   
 *               }
 *              createdAt
 *              pullRequest {
 *                  PullRequest
 *              }
 *              ref {
 *                  Ref
 *              }
 *           }
 *          ... on ClosedEvent {
 *              actor {
 *                  Owner
 *              }
 *              closable {
 *                  Closable
 *              }
 *              closer {
 *                  onCommit
 *                  onPullRequest
 *              }
 *              createdAt
 *              id
 *              resourcePath
 *              url
 *           }
 *          onCommit
 *          ... on CommitCommentThread {
 *              Comments
 *              Commit
 *              id
 *              path
 *              position
 *              repository {
 *                  Repository
 *              }
 *          }
 *          ... on CrossReferencedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              isCrossRepository
 *              referencedAt
 *              resourcePath
 *              source {
 *                  onIssue
 *                  onPullRequest
 *              }
 *              target {
 *                  onIssue
 *                  onPullRequest
 *              }
 *              url
 *              willCloseTarget
 *          }
 *          ... on DemilestonedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              milestoneTitle
 *              subject {
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on DeployedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              databaseId
 *              deployment {
 *                  Deployment
 *              }
 *              pullRequest {
 *                  PullRequest
 *              }
 *              ref {
 *                  Ref
 *              }
 *          }
 *          ... on DeploymentEnvironmentChangedEvent {
 *              id
 *              actor
 *              createdAt
 *              deploymentStatus {
 *                  createdAt
 *                  creator {
 *                      Owner
 *                  }
 *                  deployment {
 *                      Deployment
 *                  }
 *                  description
 *                  environmentUrl
 *                  id
 *                  logUrl
 *                  state
 *                  updatedAt
 *              }
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on HeadRefDeletedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              headRefName
 *              headRef {
 *                  Ref
 *              }
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on HeadRefForcePushedEvent {
 *              actor {
 *                  Owner
 *              }
 *              afterCommit {
 *                  Commit   
 *              }
 *              beforeCommit {
 *                  Commit   
 *              }
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *              ref {
 *                  Ref
 *              }
 *          }
 *          ... on HeadRefRestoredEvent {
 *              actor {
 *                  Owner
 *              }
 *              createAt
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *          }
 *          ... on IssueComment {
 *              Comment
 *           }
 *          ... on LabeledEvent {
 *              actor {
 *                  Ownwer
 *              }
 *              createdAt
 *              id
 *              label {
 *                  label
 *              }
 *              labelable {
 *                  Labels
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on LockedEvent {
 *              createdAt
 *              creator {
 *                  Owner
 *              }
 *              id
 *              lockReason
 *              lockable {
 *                  activeLockReason
 *                  locked {
 *                      OnIssue
 *                      onPullRequest
 *                  }
 *              }
 *          }
 *          ... on MergedEvent {
 *              actor {
 *                  Owner
 *              }
 *              Commit
 *              createdAt
 *              id
 *              mergeRef {
 *                  Ref
 *              }
 *              mergeName 
 *              pullRequest {
 *                  PullRequest
 *              }
 *              resourcePath
 *              url
 *          }
 *          ... on MilestonedEvent {
 *                  id
 *                  actor {
 *                      Owner
 *                  }
 *                  createdAt
 *                  milestoneTitle
 *                  subject {
 *                      onIssue
 *                      onPullRequest
 *                  }
 *          }
 *          ... on PullRequestReview {
 *              PullRequest
 *          }
 *          ... on PullRequestReviewComment {
 *              PullRequest
 *          }
 *          onPullRequestReviewThread
 *          ... on ReferencedEvent {
 *              actor {
 *                  Owner
 *              }
 *              commit {
 *                  Commit
 *              }
 *              commitRepository {
 *                  Repository
 *              }
 *              createdAt
 *              id
 *              isCrossRepository
 *              isDirectReference
 *              subject {
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on RenamedTitleEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              currentTitle
 *              subject {
 *                  onIssue
 *                  onPullRequest
 *              }
 *              previousTitle
 *          }
 *          ... on ReopenedEvent {
 *              actor {
 *                  Owner
 *              }
 *              id
 *              createdAt
 *              closable {
 *                  Closable
 *              }
 *           }
 *          ... on ReviewDismissedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              databaseId
 *              dismissalMessage
 *              dismissalMessageHTML
 *              id
 *              previousReviewState
 *              pullRequest {
 *                  PullRequest
 *              }
 *              pullRequestCommit {
 *                  Commit
 *                  id
 *                  pullRequest {
 *                      PullRequest
 *                  }
 *                  resourcePath
 *                  url
 *              }
 *              resourcePath
 *              review {
 *                  Review
 *              }
 *              url
 *          }
 *          ... on ReviewRequestRemovedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *              requestedReviewer {
 *                  onMannequin
 *                  onTeam
 *                  onUser
 *              }
 *          }
 *          ... on ReviewRequestedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              pullRequest {
 *                  PullRequest
 *              }
 *              requestedReviewer {
 *                  onMannequin
 *                  onTeam
 *                  onUser
 *              }
 *          }
 *          ... on SubscribedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              subscribable {
 *                  Subscribable
 *              }
 *          }
 *          ... on UnassignedEvent {
 *              id
 *              actor {
 *                  Owner
 *              }
 *              assignable {
 *                  Assignees
 *                  onIssue
 *                  onPullRequest
 *              }
 *              assignee {
 *                  onBot
 *                  onMannequin
 *                  onOrganization
 *                  onUser
 *              }
 *              createdAt
 *              user {
 *                  User
 *              }
 *          }
 *          ... on UnlabeledEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              label {
 *                  Label
 *              }
 *              labelable {
 *                  Labels
 *                  onIssue
 *                  onPullRequest
 *              }
 *          }
 *          ... on UnlockedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              lockable {
 *                  activeLockReason
 *                  locked
 *                  onIssue
 *                  onPullRequest
 *               }
 *          }
 *          ... on UnlockedEvent {
 *              actor {
 *                  Owner
 *              }
 *              createdAt
 *              id
 *              subscribable {
 *                  id
 *                  viewerCanSubscribe
 *                  viewerSubscription
 *                  onIssue
 *                  onPullRequest
 *                  onRepository
 *                  onTeam
 *                  onTeamDiscussion
 *                  onCommit
 *              }
 *          }
 *          ... on UserBlockedEvent {
 *              actor
 *              blockDuration
 *              createdAt
 *              id
 *              subject {
 *                  User
 *              }
 *          }
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Timeline = (since:string = "",after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    timeline(${after ? `, after: ${after} ` : ''} ${since?`, since: ${since}`:''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql TimelineItems
 * @defaultVariables totalCount  first = 10 itemsTypes = "PULL_REQUEST_COMMIT"
 * @queryArguments
 * itemsTypes "PULL_REQUEST_COMMIT" | "PULL_REQUEST_COMMIT_COMMENT_THREAD" | "PULL_REQUEST_REVIEW" | "PULL_REQUEST_REVIEW_THREAD" | "PULL_REQUEST_REVISION_MARKER" | "AUTOMATIC_BASE_CHANGE_FAILED_EVENT" | "AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT" |
 * "AUTO_MERGE_DISABLED_EVENT" | "AUTO_MERGE_ENABLED_EVENT" | "AUTO_REBASE_ENABLED_EVENT" | "AUTO_SQUASH_ENABLED_EVENT" | "BASE_REF_CHANGED_EVENT" | "BASE_REF_FORCE_PUSHED_EVENT" | "BASE_REF_DELETED_EVENT" | "DEPLOYED_EVENT" | "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT" |
 * "HEAD_REF_DELETED_EVENT" | "HEAD_REF_FORCE_PUSHED_EVENT" | "HEAD_REF_RESTORED_EVENT" | "MERGED_EVENT" | "REVIEW_DISMISSED_EVENT" | "REVIEW_REQUESTED_EVENT" | "REVIEW_REQUEST_REMOVED_EVENT" | "READY_FOR_REVIEW_EVENT" | "CONVERT_TO_DRAFT_EVENT" | 
 * "ISSUE_COMMENT" | "CROSS_REFERENCED_EVENT" | "ADDED_TO_PROJECT_EVENT" | "ASSIGNED_EVENT" | "CLOSED_EVENT" | "COMMENT_DELETED_EVENT" | "CONNECTED_EVENT" | "CONVERTED_NOTE_TO_ISSUE_EVENT" | "DEMILESTONED_EVENT" | "DISCONNECTED_EVENT" | "LABELED_EVENT" |
 * "LOCKED_EVENT" "MARKED_AS_DUPLICATE_EVENT" | "MENTIONED_EVENT" | "MILESTONED_EVENT" | "MOVED_COLUMNS_IN_PROJECT_EVENT" | "PINNED_EVENT" | "REFERENCED_EVENT" | "REMOVED_FROM_PROJECT_EVENT" | "RENAMED_TITLE_EVENT" | "REOPENED_EVENT" | "SUBSCRIBED_EVENT" | "TRANSFERRED_EVENT" |
 * "UNASSIGNED_EVENT" | "UNLABELED_EVENT" | "UNLOCKED_EVENT" | "USER_BLOCKED_EVENT" | "UNMARKED_AS_DUPLICATE_EVENT" | "UNPINNED_EVENT" | "UNSUBSCRIBED_EVENT"
 * after string
 * before string
 * first number
 * last number
 * skip number
 * since string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Timeline
 *      }
 *  }
 * nodes {
 *      Timeline
 *      PageInfo
 *      totalCount
 * }
 * filteredCount
 * pageCount
 * PageInfo
 * updatedAt
 * }
*/

export const TimelineItems = (itemsTypes:string = "PULL_REQUEST_COMMIT",after:string = '', before: string = '', first:number = 10, last:number = 0, skip:string, since:string = "",fields:string = '') => `
    timelineItems(itemsTypes:${itemsTypes},${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last ?`, last: ${last}`:''}${skip ?`, skip: ${skip}`:''}
    ${since ?`, since: ${since}`:''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql Assignees  
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
 *          User
 *      }
 *      role
 *      nodes {
 *          User
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Assignees = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    assignees(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql Closable
 * @queryArguments 
 * closed
 * closedAt
 * onProject
 * onIssue
 * onPullRequest
 * onMilestone
*/

export const Closable = (fields:string = '') => `
    ${fields}
`


/**
 * @description Github Graphql Project
 * @defaultVariables id name
 * @queryArguments 
 * body
 * bodyHTML
 * closed
 * closedAt
 * columns {
 *      Columns
 * }
 * createdAt
 * creator {
 *      Owner
 * }
 * databaseId
 * number
 * owner {
 *      Owner
 * }
 * pendingCards {
 *      Cards
 * }
 * progress {
 *      doneCount
 *      enabled
 *      donePercentage
 *      inProgressCount
 *      inProgressPercentage
 *      todoCount
 *      todoPercentage
 * }
 * resourcePath
 * state
 * updatedAt
 * url
 * viewerCanUpdate
 * 
*/

export const Project = (number:number = 10,fields:string = '') => `
    project(number:${number}) {
        id
        name
        ${fields}
    }
`

/**
 * @description Github Graphql Projects
 * @defaultVariables totalCount first = 10
 * @queryArguments direction 'ASC' | 'DESC' orderBy = "CREATED_AT" states "OPEN"
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "UPDATED_AT" | "NAME"
 * direction "ASC"
 * states "OPEN" | "CLOSED"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Project
 *      }
 *  }
 *  nodes { 
 *      Project
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const Projects = (search:string = "",states:string = "OPEN",after: string = '', before: string = '', first: number = 10, last: number = 0, orderBy:string = 'CREATED_AT', direction:string = 'ASC',fields: string = '') => `
    projects(search: ${search},state: ${states},${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, ${first ? `, first: ${first} ` : ''}${last ? `last: ${last}` : ''},orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Column
 * @defaultVariables id name
 * @queryVariables 
 * Cards
 * createdAt
 * databaseId
 * id
 * name
 * purpose
 * project {
 *      Project
 * }
 * resourcePath
 * updatedAt
 * url
 * }
 */

export const Column = (fields:string = '') => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql Columns  
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
 *          Column
 *      }
 *      role
 *      nodes {
 *          Column
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Columns = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    columns(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql Card  
 * @defaultVariables id state
 * @queryVariables
 * Column
 * content {
 *      onIssue
 *      onPullRequest
 * }
 * createdAt
 * creator {
 *      Owner
 * }
 * databaseId
 * id
 * isArchived
 * note
 * project {
 *      Project
 * }
 * resourcePath
 * state
 * updatedAt
 * url
*/

export const Card = (fields:string = '') => `
    id 
    state
    ${fields}
`

/**
 * @description Github Graphql Cards  
 * @defaultVariables totalCount first = 10 archivedStates = ARCHIVED
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * archivedStates: "ARCHIVED" | "NOT_ARCHIVED"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Card
 *      }
 *      role
 *      nodes {
 *          Card
 *      }
 *  }
*   PageInfo
* }
*/

export const Cards = (archivedStates:string = "ARCHIVED",after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    cards(archivedStates: ${archivedStates},${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Review
 * @defaultVariables id
 * @queryVariables 
 * author {
 *      Owner
 * }
 * authorAssociation
 * authorCanPushToRepository
 * body
 * bodyHTML
 * bodyText
 * comment {
 *      Comments
 * }
 * commit {
 *      Commit
 * }
 * createdAt
 * createdViaEmail
 * databaseId
 * editor {
 *      Owner
 * }
 * id
 * includesCreatedEdit
 * lastEditedAt
 * onBehalfOf {
 *      onBehalfOf
 * }
 * publishedAt
 * pullRequest {
 *      PullRequest
 * }
 * reactionGroups {
 *      ReactionGroups
 * }
 * reactions {
 *      Reactions
 * }
 * repository {
 *      Repository
 * }
 * publishedAt
 * resourcePath
 * state
 * submittedAt
 * updatedAt
 * url
 * userContentEdits {
 *      UserContentEdits
 * }
 * publishedAt
 * viewerCanDelete
 * viewerCanReact
 * viewerCanUpdate
 * viewerCannotUpdateReasons
 * viewerDidAuthor
 */

 export const Review = (fields:string = '') => `
    id
    ${fields}        
`

/**
 * @description Github Graphql onBehalfOf 
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
 *          Team
 *      }
 *      nodes {
 *          Team
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const onBehalfOf = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    onBehalfOf(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Subscribable
 * @defaultVariables id
 * @queryArguments 
 * actor {
 *      Owner
 * }
 * createdAt
 * viewerCanSubscribe
 * viewerSubscription
 * onIssue
 * onPullRequest
 * onRepository
 * onTeam
 * onTeamDiscussion
 * onCommit
*/

export const Subscribable = (fields:string = '') => `
    id
    ${fields}
`


/**
 * @description Github Graphql Collaborators
 * @defaultVariables totalCount first = 10 value = false affiliations "ALL"
 * @queryArguments 
 * affiliations "OUTSIDE" | "DIRECT" | "ALL"
 * after string
 * before string
 * first number
 * query string
 * @queryVariables
 *      cursor
 *      node {
 *          User
 *      }
 *  }
 * nodes {
 *  User
 *  PageInfo
 *  totalCount
 * }
 */

 export const Collaborators = (query: string = "", after: string = "",before: string = "",first: number = 10,last?: number,fields:string = "") => `
    collaborators(query: ${query}, ${after ? `, after: ${after} ` : ''}, ${before ? `, before: ${before}`: ''} first: ${first}, ${last? ', last=${last}': ''}) {
        ${fields}
    }
`


/**
 * @description Github Graphql DeployKeys
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *          createdAt
 *          id
 *          key
 *          readOnly
 *          title
 *          verified
 *      }
 *  }
 * nodes {
 *      createdAt
 *      id
 *      key
 *      readOnly
 *      title
 *      verified
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const DeployKeys = (first: number = 10,after: string = '', before: string = '', last: number = 0, fields: string = '') => `
    deployKeys(${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql CommitComments
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
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

export const CommitComments = (first: number = 10,after: string = '', before: string = '', last: number = 0, fields: string = '') => `
    commitComments(${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql Release
 * @defaultVariables id name
 * @queryArguments
 * author {
 *      User
 * }
 * createdAt
 * description
 * descriptionHTML
 * isDraft
 * isLatest
 * isPrerelease
 * name
 * publishedAt
 */

 export const Release = (fields:string = '') => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql ReleaseAssets
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * name string
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *          contentType
 *          createdAt
 *          downloadCount
 *          downloadUrl
 *          id
 *          name
 *          release {
 *              Release
 *          }
 *          size
 *          updatedAt
 *          uploadedBy {
 *              User
 *          }
 *          url
 *      }
 *  }
 * nodes {
 *      contentType
 *      createdAt
 *      downloadCount
 *      downloadUrl
 *      id
 *      name
 *      release {
 *          Release
 *      }
 *      size
 *      updatedAt
 *      uploadedBy {
 *          User
 *      }
 *      url
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const ReleaseAssets = (name:string = "",first: number = 10,after: string = '', before: string = '', last: number = 0, fields: string = '') => `
    commitComments(name: ${name},${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql LicenseInfo
 * @defaultVariables id name
 * @queryArguments
 * body
 * conditions {
 *      description
 *      key
 *      label
 * }
 * description
 * featured
 * hidden
 * id
 * implementation
 * key
 * limitations {
 *      description
 *      key
 *      label
 * }
 * name
 * nickname
 * permissions {
 *      description
 *      key
 *      label
 * }
 * pseudoLicense
 * spdxId
 * url
 */

 export const LicenseInfo = (fields:string = '') => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql Version
 * @defaultVariables id
 * @queryArguments
 * Files
 * Package
 * platform
 * preRelease
 * readme
 * Release
 * statistics {
 *      downloadsTotalCount
 * }
 * summary
 * version
 */

 export const Version = (fields:string = '') => `
    id
    ${fields}
`

/**
 * @description Github Graphql Versions
 * @defaultVariables totalCount first = 10 orderBy = "CREATE_AT",direction = "ASC"
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * orderBy "CREATE_AT"
 * direction "ASC"
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Version                                                   
 *      }
 *  }
 * nodes {
 *      Version
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const Versions = (first: number = 10,after: string = '', before: string = '', last: number = 0,orderBy:string = "CREATE_AT",direction:string = "ASC", fields: string = '') => `
    versions(${after ? `, after: ${after} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''},orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Package
 * @defaultVariables id name
 * @queryArguments
 * latestVersion {
 *      Version
 * }
 * packageType
 * repository {
 *      Repository
 * }
 * statistics {
 *      downloadsTotalCount
 * }
 * Version
 * Version
 * 
 */

 export const Package = (fields:string = '') => `
    id
    name
    ${fields}
`
/**
 * @description Github Graphql Packages
 * @defaultVariables totalCount first = 10 orderBy = "CREATE_AT",direction = "ASC" packageType "NPM"
 * @queryArguments 
 * direction "ASC" | "DESC"
 * field "CREATED_AT"
 * packageType "NPM" | "RUBYGEMS" | "MAVEN" | "DOCKER" | "DEBIAN" | "NUGET" | "PYPI"
 * repositoryId string
 * after String
 * names string,
 * before String
 * first number
 * last number
 * orderBy "CREATE_AT"
 * direction "ASC"
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Package
 *      }
 *  }
 * nodes {
 *      Package
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const Packages = (names:string = "",packageType:string = "",first: number = 10,after: string = '', before: string = '', last: number = 0,orderBy:string = "CREATE_AT",direction:string = "ASC", fields: string = '') => `
    packages(names:${names},${after ? `, after: ${after} ` : ''}${packageType ? `, package: ${packageType} ` : ''} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''},orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql VulnerabilityAlerts
 * @defaultVariables totalCount first = 10 orderBy = "CREATE_AT",direction = "ASC" packageType "NPM"
 * @queryArguments 
 * direction "ASC" | "DESC"
 * field "CREATED_AT"
 * packageType "NPM" | "RUBYGEMS" | "MAVEN" | "DOCKER" | "DEBIAN" | "NUGET" | "PYPI"
 * repositoryId string
 * after String
 * names string,
 * before String
 * first number
 * last number
 * orderBy "CREATE_AT"
 * direction "ASC"
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Package
 *      }
 *  }
 * nodes {
 * createdAt
 * dismissReason
 * dismissedAt
 * dismisser {
 *      User
 * }
 * id
 * repository {
 *      Repository
 * }
 * securityAdvisory {
 *      SecurityAdvisory
 * }
 * securityVulnerability {
 *      Vulnerability
 * }
 * vulnerableManifestFilename
 * vulnerableManifestPath
 * vulnerableRequirements
 * viewerHasReacted
 * }
*/

export const VulnerabilityAlerts = (first: number = 10,after: string = '', before: string = '', last: number = 0, fields: string = '') => `
    vulnerabilityAlerts(${after ? `, after: ${after} ` : ''}${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql SecurityAdvisory
 * @defaultVariables databaseId description
 * @queryVariables 
 * cvss {
 *      score
 *      vectorString
 * }
 * cwes(last: number, first: number, before: string, after: string) {
 *  totalCount
 *      nodes {
 *      cweId
 *      description
 *      id
 *      name
 * }
 * edges {
 *      cursor
 *      node {
 *          cweId
 *          description
 *          id
 *          name
 *      }
 * }
 * }
 * databaseId
 * description
 * ghsaId
 * id
 * identifiers {
 *      type
 *      value
 * }
 * notificationsPermalink
 * origin
 * permalink
 * publishedAt
 * references {
 *      url
 * }
 * severity
 * summary
 *      updatedAt
 * }
 * updatedAt
 * vulnerabilities {
 *      Vulnerabilities
 * }
 * withdrawnAt
 */


 export const SecurityAdvisory = (fields:string = '') => `
    databaseId
    description
    ${fields}        
`

/**
 * @description Github Graphql Vulnerabilities
 * @defaultVariables totalCount field = "UPDATED_AT" direction = "ASC" first = 10 ecosystem = "NPM" severities = "LOW"
 * @queryArguments 
 * ecosystem "NPM" | "RUBYGEMS" | "MAVEN" | "COMPOSER" | "NUGET" | "PIP"
 * severities "LOW" | "MODERATE" | "HIGH" | "CRITICAL"
 * after string
 * before string
 * first number
 * last number
 * @queryVariables
 * edges {
 *      cursor
 *      node {
 *          Vulnerability
 *      }
 *  }
 * nodes {
 *      Vulnerability
 * }
 * PageInfo
 * totalCount
 * }
 */

 export const Vulnerabilities = (severities:string = "LOW",ecosystem:string = "NPM",first: number = 10,after: string = "",before: string = "",last?: number, orderBy:string = 'UPDATED_AT', direction:string = 'ASC',fields:string = "") => `
    vulnerabilities(first: ${first} ${severities ? `, severities: ${severities}`:''} ${after ? `, after: ${after}`: ''} ${before ? `, before: ${before}`: ''}  ${last? ', last=${last}': ''},orderBy: {field: ${orderBy}, direction: ${direction}},) {
        ${fields}
    }
`

/**
 * @description Github Graphql Vulnerability
 * @defaultVariables severity
 * @queryVariables 
 * advisory {
 *      SecurityAdvisory
 * }
 * firstPatchedVersion {
 *      identifier
 * }
 * package {
 *      ecosystem
 *      name
 * }
 * severity
 * updatedAt
 * vulnerableVersionRange
 */

 export const Vulnerability = (fields:string = '') => `
    severity
    ${fields}        
`

/**
 * @description Github Graphql Watches  
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
 *         User                                                   
 *      }
 *  }
 * nodes {
 *      User
 *      PageInfo
 *      totalCount
 * }
 * viewerHasReacted
 * }
*/

export const Watchers = (after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    watchers(after: ${after} ${before ? `, before: ${before} ` : ''}, first: ${first} ${last ? `last: ${last}` : ''}) {
        ${fields}
        totalCount
    }
`
