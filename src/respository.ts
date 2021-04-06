import { queryVariables } from "."

/**
 * @description Github Graphql Repository
 * @defaultVariables id name
 * @fields
 * AssignableUsers
 * 
 * BranchProtectionRules
 * 
 * CodeOfConduct
 * 
 * Collaborators
 * 
 * CommitComments
 * 
 * contactLinks {
 *      about
 * 
 *      name
 * 
 *      url
 * }
 * 
 * createdAt
 * 
 * databaseId
 *  
 * defaultBranchRef {
 *      Ref
 * }
 * 
 * deleteBranchOnMerge
 * 
 * DeployKeys
 * 
 * Deployment
 * 
 * hasIssuesEnabled
 * 
 * description
 * 
 * descriptionHTML
 * 
 * diskUsage
 * 
 * forkCount
 * 
 * fork {
 *      Repositories
 * }
 * fundingLinks {
 *      platform
 *      url
 * }
 * 
 * hasIssuesEnabled
 * 
 * hasProjectsEnabled
 * 
 * hasWikiEnabled
 * 
 * homepageUrl
 * 
 * id
 * 
 * interactionAbility {
 *      expiresAt
 * 
 *      limit
 * 
 *      origin
 * }
 * 
 * isArchived
 * 
 * isBlankIssuesEnabled
 * 
 * isDisabled
 * 
 * isEmpty
 * isFork
 * 
 * 
 * isInOrganization
 * 
 * isLocked
 * 
 * isMirror
 * 
 * isPrivate
 * 
 * isSecurityPolicyEnabled
 * 
 * isTemplate
 * 
 * isUserConfigurationRepository
 * 
 * issue {
 *      Issue
 * 
 * }
 * 
 * issueOrPullRequest(number: number) {
 * 
 *      onIssue
 * 
 *      onPullRequest
 * }
 * 
 * issueTemplates {
 *      about
 * 
 *      body
 * 
 *      name
 * 
 *      title
 * }
 * 
 * issues {
 *      Issues
 * }
 * 
 * label {
 * 
 *      Label
 * 
 * }
 * 
 * labels {
 *      Labels
 * }
 * 
 * Languages
 * 
 * latestRelease {
 *      LatestRelease
 * }
 * 
 * licenseInfo {
 *      LicenseInfo
 * }
 * 
 * lockReason
 * 
 * MentionableUsers
 * 
 * mergeCommitAllowed
 * 
 * Milestone
 * 
 * Milestones
 * 
 * mirrorUrl
 * 
 * name
 * 
 * nameWithOwner
 *
 * RepoObject
 * 
 * openGraphImageUrl
 * 
 * owner {
 *      Owner
 * }
 * 
 * Packages
 * 
 * parent {
 *      Repository
 * }
 * 
 * pinnedIssues {
 *      Issues
 * }
 * 
 * primaryLanguage {
 * 
 *      color
 * 
 *      id
 * 
 *      name
 * }
 * 
 * project {
 *      Project
 * }
 * 
 * Projects
 * 
 * projectsResourcePath
 * 
 * projectsUrl
 * 
 * pullRequest {
 *      PullRequest
 * }
 * 
 * PullRequests
 * 
 * pushedAt
 * 
 * rebaseMergeAllowed
 * 
 * ref {
 *      Ref
 * }
 * 
 * Refs
 * 
 * release {
 *      Release
 * }
 * 
 * Releases
 * 
 * Topics
 * 
 * resourcePath
 * 
 * securityPolicyUrl
 * 
 * shortDescriptionHTML
 * 
 * squashMergeAllowed
 * 
 * sshUrl
 * 
 * stargazerCount
 * 
 * Stargazers
 * 
 * Submodules
 * 
 * tempCloneToken
 * 
 * templateRepository {
 *      Repository
 * }
 * 
 * updatedAt
 * 
 * url
 * 
 * usesCustomOpenGraphImage
 * 
 * viewerCanAdminister
 * 
 * viewerCanCreateProjects
 * 
 * viewerCanSubscribe
 * 
 * viewerCanUpdateTopics
 * 
 * viewerDefaultCommitEmail
 * 
 * viewerDefaultMergeMethod
 * 
 * viewerHasStarred
 * 
 * viewerPermission
 * 
 * viewerPossibleCommitEmails
 * 
 * viewerSubscription
 * 
 * 
 * VulnerabilityAlerts
 * 
 * Watchers
 */


export const Repository = (fields: string = "") => `
    id
    ${fields}        
`
/**
 * @description Github Graphql RepoObject
 * 
 * abbreviatedOid
 * 
 * 
 * commitResourcePath
 * 
 * commitUrl
 * 
 * id
 * 
 * oid
 * 
 * respository {
 * 
 *      Repository
 * 
 * }
 * 
 * onCommit
 * 
 * onTree
 * 
 * onBlog
 * 
 * onTag
 * 
*/

export const RepoObject = (expression: string, oid: string, fields: string) => `
    object(expression: ${expression}, oid: ${oid}) {
        ${fields}
    }

`

/**
 * @description Github Graphql Repositories
 * @defaultVariables totalCount 
 * @queryArguments 
 * affiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * 
 * ownerAffiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * isFork boolean
 * 
 * isLocked boolean
 * 
 * privacy "PUBLIC" | "PRIVATE"
 * 
 * @fields
 * Repository
 */

export const Repositories = (params: queryVariables.Repositories) => `
    repositories(first: ${params.first} ${params.affiliations ? `affiliations: ${params.affiliations}` : ""} ${params.ownerAffiliations ? `, ownerAffiliations: ${params.ownerAffiliations}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.isFork ? `isFork: ${params.isFork}` : ""} ${params.isLocked ? `, isLocked: ${params.isLocked}` : ""} 
    ${params.last ? `, last:${params.last}` : ""}, ${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""}` : ""}` : ""}` : ""}` : ""}` : ""} ${params.privacy ? `, privacy: ${params.privacy}` : ""}) {
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
    }
`

/**
 * @description Github Graphql Forks
 * @defaultVariables totalCount 
 * @queryArguments 
 * affiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * 
 * ownerAffiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * isLocked boolean
 * 
 * privacy "PUBLIC" | "PRIVATE"
 * 
 * @fields
 * Repository
 */

export const Forks = (params: queryVariables.Repositories) => `
    forks(first: ${params.first} ${params.affiliations ? `affiliations: ${params.affiliations}` : ""} ${params.ownerAffiliations ? `, ownerAffiliations: ${params.ownerAffiliations}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.isFork ? `isFork: ${params.isFork}` : ""} ${params.isLocked ? `, isLocked: ${params.isLocked}` : ""} 
    ${params.last ? `, last:${params.last}` : ""}, ${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""}` : ""}` : ""}` : ""}` : ""}` : ""} ${params.privacy ? `, privacy: ${params.privacy}` : ""}) {
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
* @description Github Graphql BranchProtectionRule
 * allowsDeletions
 * 
 * allowsForcePushes
 * 
 * BranchProtectionRuleConflicts
 * 
 * creator {
 *      Owner
 * }
 *          
 * databaseId
 *          
 * dismissesStaleReviews
 *          
 * id
 *          
 * isAdminEnforced
 *          
 * MatchingRefs
 *          
 * pattern
 *          
 * PushAllowances
 * 
 * repository {
 *      Repository
 * }
 * 
 * requiredApprovingReviewCount
 * 
 * requiredStatusCheckContexts
 * 
 * requiresApprovingReviews
 * 
 * requiresCodeOwnerReviews
 * 
 * requiresCommitSignatures
 * 
 * requiresLinearHistory
 * 
 * requiresStatusChecks
 * 
 * requiresStrictStatusChecks
 * 
 * restrictsPushes
 * 
 * restrictsReviewDismissals
 * 
 * ReviewDismissalAllowances
*/

export const BranchProtectionRule = (fields: string = "") => `
    id
    ${fields}
`


/**
 * @description Github Graphql ReviewDismissalAllowances  
 * @defaultVariables totalCount
 * @queryArguments
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * actor {
 *      onTeam
 *      onUser
 * }
 * branchProtectionRule {
 *      BranchProtectionRule
 * }
 * 
 * id
*/

export const ReviewDismissalAllowances = (params: queryVariables.BasicFields) => `
    reviewDismissalAllowances( first: ${params.first}, ${params.after ? `, after: "${params.after}" ` : ""} ${before ? `, before: "${before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql BranchProtectionRules  
 * @defaultVariables totalCount
 * @queryArguments
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * BranchProtectionRule
*/

export const BranchProtectionRules = (params: queryVariables.BasicFields) => `
    branchProtectionRules( first: ${params.first}, ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
        edges {
			cursor
			node {
                id
				${params.fields}
			}
		}
	 
		nodes {
            id
			${params.fields}  
		}
		${params.pageInfo ? params.pageInfo : ""}
		totalCount
    }
`

/**
 * @description Github Graphql BranchProtectionRuleConflicts  
 * @defaultVariables totalCount
 * @queryArguments 
 * direction "ASC" | "DESC" 
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * 
 * branchProtectionRule{
 *      BranchProtectionRules
 * }
 * 
 * conflictingBranchProtectionRule{ 
 *      BranchProtectionRules
 *  }
 * 
 * ref {
 *      Ref
 * }
*/

export const BranchProtectionRuleConflicts = (params: queryVariables.BasicFields) => `
    branchProtectionRuleConflicts(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql PullRequest
 * @defaultVariables id
 * @fields 
 * activeLockReason
 * 
 * additions
 * 
 * assignees {
 *      Assignees
 * }
 * 
 * author {
 *      Author
 * }
 * 
 * authorAssociation
 * 
 * autoMergeRequest {
 * 
 *      authorEmail
 * 
 *      commitBody
 * 
 *      commitHeadline
 * 
 *      enabledAt
 * 
 *      enabledBy {
 * 
 *          Owner
 * 
 *      }
 * 
 *      mergeMethod
 * 
 *      pullRequest {
 * 
 *          PullRequest
 * 
 *      }
 * 
 * }
 * 
 * baseRef {
 * 
 *      BaseRef
 * 
 * }
 * 
 * baseRefName
 * 
 * baseRefOid
 * 
 * baseRepository {
 * 
 *      Repository
 * 
 * }
 * 
 * body
 * 
 * bodyHTML
 * 
 * bodyText
 * 
 * changedFiles
 * 
 * checksResourcePath
 * 
 * checksUrl
 * 
 * closed
 * 
 * closedAt
 * 
 * comments {
 * 
 *      Comments
 * 
 * }
 * 
 * commits {
 * 
 *      Commit
 * 
 * }
 * 
 * createdAt
 * 
 * createdViaEmail
 * 
 * databaseId
 * 
 * deletions
 * 
 * editor {
 * 
 *      Owner
 * 
 * }
 * 
 * files {
 * 
 *      File
 * 
 * }
 * 
 * headRef {
 * 
 *      Ref
 * 
 * }
 * 
 * headRefName
 * 
 * headRefOid
 * 
 * headRepository {
 * 
 *      Repository
 * 
 * }
 * 
 * hoverCard {
 * 
 *      RepositoryHoverCard
 * }
 * 
 * id
 * 
 * includesCreatedEdit
 * 
 * isCrossRepository
 * 
 * isDraft
 * 
 * 
 * isReadByViewer
 * 
 * labels {
 *      Labels
 * 
 * }
 * 
 * lastEditedAt
 * 
 * LatestOpinionatedReviews
 * 
 * LatestReviews
 * 
 * locked
 * 
 * maintainerCanModify
 * 
 * mergeCommit {
 *      Commit
 * }
 * 
 * locked
 * 
 * mergeable
 * 
 * merged
 * 
 * mergedAt
 * 
 * mergedBy {
 * 
 *      Owner
 * }
 * 
 * Milestone
 * 
 * number
 * 
 * Participants
 * 
 * ProjectCards
 * 
 * potentialMergeCommit {
 *      Commit
 * }
 * 
 * publishedAt
 * 
 * reactionGroups {
 *      reactionGroups
 * }
 * 
 * Reactions
 * 
 * repository {
 *      Repository
 * }
 * 
 * resourcePath
 * 
 * revertResourcePath
 * 
 * revertUrl
 * 
 * reviewDecision
 * 
 * reviewRequests {
 *      ReviewRequests
 * }
 * 
 * reviewThreads {
 *      ReviewThreads
 * }
 * 
 * reviews {
 *      Reviews
 * }
 * 
 * state
 * 
 * suggestedReviewers {
 *      isAuthor
 * 
 *      isCommenter
 * 
 *      isCommenter
 * 
 *      reviewer {
 *          User
 *      }
 * 
 * }
 * 
 * timeline {
 *      Timeline
 * }
 * 
 * timelineItems {
 *      TimelineItems
 * }
 * 
 * title
 * 
 * updatedAt
 * 
 * url
 * 
 * userContentEdits {
 *      UserContentEdits
 * }
 * 
 * viewerCanApplySuggestion
 * 
 * viewerCanDeleteHeadRef
 * 
 * viewerCanDisableAutoMerge
 * 
 * viewerCanEnableAutoMerge
 * 
 * viewerCanReact
 * 
 * viewerCanSubscribe
 * 
 * viewerCanUpdate
 * 
 * viewerCannotUpdateReasons
 * 
 * viewerDidAuthor
 * 
 * viewerMergeBodyText(mergeType: "MERGE" | "SQUASH" | "REBASE")
 * 
 * viewerMergeHeadlineText(mergeType: "MERGE" | "SQUASH" | "REBASE")
 * 
 * viewerSubscription
 */

export const PullRequest = (number: number = 10, fields: string = "") => `
    pullRequest(number: ${number}) {
        ${fields}
    }
`
/**
 * @description Github Graphql onPullRequest  
 * @queryArguments
 * PullRequest
*/


export const onPullRequest = (fields: string = "") => `
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
 * 
 * isOutdated
 * 
 * diffSide
 * 
 * isCollapsed
 * 
 * isResolved
 * 
 * line
 * 
 * originalLine
 * 
 * originalStartLine
 * 
 * path
 * 
 * pullRequest {
 *      PullRequest
 * }
 * 
 * repository {
 *      Repository
 * }
 * 
 * resolvedBy {
 *      Owner
 * }
 * 
 * startDiffSide
 * 
 * startLine
 * 
 * viewerCanReply
 * 
 * viewerCanResolve
 * 
 * viewerCanUnresolve
*/

export const PullRequestReviewThread = (fields: string = "") => `
    id
    ${fields}
`

/**
 * @description Github Graphql onPullRequestReviewThread  
 * @queryArguments
 * PullRequestReviewThread
*/
export const onPullRequestReviewThread = (fields: string = "") => `
    ... on PullRequestReviewThread {
        ${fields}
    }
`

/**
 * @description Github Graphql PullRequests  
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * states "OPEN" | "CLOSED" | "MERGED"
 * 
 * baseRefName string
 * 
 * headRefName string
 * 
 * labels string
 * 
 * orderBy "CREATED_AT" | "UPDATED_AT" | "COMMENTS" 
 * @fields 
 * PullRequest
*/

export const PullRequests = (params: queryVariables.PullRequests) => `
    pullRequests(first: ${params.first} ${params.baseRefName ? `, baseRefName: "${params.baseRefName}"` : ""} ${params.headRefName ? `, headRefName: "${params.headRefName}"` : ""} ${params.labels ? `, labels: "${params.labels}"` : ""} 
        ${params.states ? `, states: ${params.states}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}, ${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""}` : ""}` : ""}` : ""}` : ""}` : ""},) {
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
    }
`


/**
 * @description Github Graphql AssociatedPullRequests  
 * @defaultVariables totalCount
 * @queryArguments 
 * direction "ASC" | "DESC" 
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * states "OPEN" | "CLOSED" | "MERGED"
 * 
 * baseRefName string
 * 
 * headRefName string
 * 
 * labels string
 * 
 * field "CREATED_AT" | "UPDATED_AT" | "COMMENTS" 
 * 
 * @fields 
 * PullRequest
*/

export const AssociatedPullRequests = (params: queryVariables.PullRequests) => `
    associatedPullRequests(first: ${params.first} ${params.baseRefName ? `, baseRefName : "${params.baseRefName}"` : ""} ${params.headRefName ? `, headRefName: "${params.headRefName}"` : ""} ${params.labels ? `, labels: "${params.labels}"` : ""} ${params.states ? `, states: ${params.states}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""}
    ${params.last ? `, last: ${params.last}` : ""}, ${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""}` : ""}` : ""}` : ""}` : ""}` : ""}) {
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
 * @description Github Graphql MatchingRefs  
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * query string
 * @fields 
 * Ref
*/

export const MatchingRefs = (params: queryVariables.Query) => `
    matchingRefs(query : ${params.query}, first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
        ${params.fields}
        totalCount
    }
`

/**
 * @description Github Graphql PushAllowances   
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * actor {
 *      onApp
 *      onTeam
 *      onUser
 * }
 * branchProtectionRule {
 *      BranchProtectionRule
 * }
 * id
*/

export const PushAllowances = (params: queryVariables.BasicFields) => `
    pushAllowances(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql App
 * @defaultVariables id name
 * @fields createdAt
 * 
 * databaseId
 * 
 * description
 * 
 * logoBackgroundColor
 * 
 * logoUrl
 * 
 * slug
 * 
 * updatedAt
 * 
 * url
 * 
 */

export const App = (fields: string = "") => `
    id
    name
    ${fields}        
`

/**
 * @description Github Graphql onApp
 * @defaultVariables id
 * @fields avatarUrl
 * App
 */

export const onApp = (fields: string = "") => `
 ... on App {
     ${fields}        
 }
`

/**
 * @description Github Graphql Issue
 * @defaultVariables id
 * @fields activeLockReason
 * 
 * Assignees
 * 
 * Author
 * 
 * authorAssociation
 * 
 * body
 * 
 * bodyHTML
 * 
 * bodyResourcePath
 * 
 * bodyText
 * 
 * bodyUrl
 * 
 * closed
 * 
 * closedAt
 * 
 * Comments
 * 
 * createdAt
 * 
 * createdViaEmail
 * 
 * databaseId
 * 
 * editor {
 *  Owner
 * }
 * 
 * RepositoryHoverCard
 *
 * id
 * 
 * includesCreatedEdit
 * 
 * isPinned
 * 
 * isReadByViewer
 * 
 * Labels
 * 
 * lastEditedAt
 * 
 * locked
 * 
 * Milestone
 * 
 * number
 * 
 * Participants
 * 
 * ProjectCards
 * 
 * publishedAt
 * 
 * ReactionGroups
 * 
 * Reactions
 * 
 * Repository
 * 
 * resourcePath
 * 
 * state
 * 
 * Timeline
 * 
 * TimelineItems
 * 
 * title
 * 
 * updatedAt
 * 
 * url
 * 
 * UserContentEdits
 * 
 * viewerCanReact
 * 
 * viewerCanSubscribe
 * 
 * viewerCanUpdate
 * 
 * viewerCannotUpdateReasons
 * 
 * viewerDidAuthor
 * 
 * viewerSubscription
 */


export const Issue = (issueNumber: number, fields: string = "") => `
    issue (number: ${issueNumber}) {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql onIssue  
 * @queryArguments
 * Issue
*/
export const onIssue = (fields: string = "") => `
    ... on Issue {
        ${fields}
    }
`
/**
 * @description Github Graphql onGenericHovercardContext 
* message
* 
* octicon
*/

export const onGenericHovercardContext = (fields: string) => `
    ... on GenericHovercardContext {
        __typename
        ${fields}        
    }

`

/**
 * @description Github Graphql onOrganizationTeamsHovercardContext 
* message
* 
* octicon
* 
* RelevantTeams
* 
* teamsResourcePath
* 
* teamsUrl
* 
* totalTeamCount
*/

export const onOrganizationTeamsHovercardContext = (fields: string) => `
    ... on OrganizationTeamsHovercardContext {
        __typename
        ${fields}        
    }
`

/**
 * @description Github Graphql onOrganizationsHovercardContext 
* message
* 
* octicon
* 
* RelevantOrganizations
* 
* totalOrganizationCount
*/

export const onOrganizationsHovercardContext = (fields: string) => `
    ... on OrganizationsHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onReviewStatusHovercardContext 
* reviewDecision
* 
* message
* 
* octicon
*/

export const onReviewStatusHovercardContext = (fields: string) => `
    ... on ReviewStatusHovercardContext {
        ${fields}        
    }
`

/**
* @description Github Graphql onViewerHovercardContext 
* message
* 
* octicon
* 
* viewer {
*   User
* }
*/

export const onViewerHovercardContext = (fields: string) => `
    ... on ViewerHovercardContext {
        __typename
        ${fields}        
    }
`
/**
 * @description Github Graphql RepositoryHoverCard
 * @fields 
 * contexts {
 *
 *      message
 * 
 *      octicon
 * 
 *      onOrganizationTeamsHovercardContext
 * 
 *      onGenericHovercardContext 
 *      
 *      onOrganizationsHovercardContext
 * 
 *      onReviewStatusHovercardContext
 * 
 *      onViewerHovercardContext
 */

export const RepositoryHoverCard = (fields: string = "", includeNotificationContexts?: boolean) => `
    hovercard ${includeNotificationContexts ? `(includeNotificationContexts: ${includeNotificationContexts})` : ""} {
        contexts { 
            ${fields}
        }
    }    
`

/**
 * @description Github Graphql Labels  
 * @defaultVariables totalCount
 * @queryArguments direction "ASC" | "DESC" 
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * orderBy "CREATED_AT" | "NAME"
 * 
 * direction "ASC" | "DESC"
 * 
 * @fields 
 * Label
*/

export const Labels = (params: queryVariables.Labels) => `
    labels(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""}) {
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
 * @description Github Graphql Label
 * @defaultVariables id isDefault
 * @fields 
 * color
 * 
 * createdAt
 * 
 * description
 * 
 * isDefault
 * 
 * Issues
 *  
 * name
 * 
 * PullRequests
 * 
 * Repository
 * 
 * resourcePath
 * 
 * updatedAt
 * 
 * url
 */


export const Label = (name: string,fields: string = "") => `
    label (name: "${name}") {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql Issues  
 * @defaultVariables totalCount
 * @queryArguments direction "ASC" | "DESC" 
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * orderBy "CREATED_AT" | "UPDATE_AT" | "COMMENTS"
 * 
 * direction = "ASC" | "DESC"
 * 
 * states "OPEN" | "CLOSED"
 * 
 * filterBy {assignee: string, createdBy: string, labels: string, mentioned: string, milestone: string, since: string, states: "OPEN" | "CLOSED", viewerSubscribed: boolean}
 * @fields 
 * Issue
*/

export const Issues = (params: queryVariables.Issues) => `
    issues(first: ${params.first} ${params.labels ? `, labels: ${params.labels}` : ""} ${params.state ? `, state: ${params.state}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}
        ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}` : ""}
        ${params.filterBy ? `, filterBy:{${params.filterBy}}` : ""}) {

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
 * @description Github Graphql Participants 
 * @params User
 */

export const Participants = (params: queryVariables.BasicFields) => `
    participants(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {

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
 * @description Github Graphql BaseRef
 * @defaultVariables id
 * @fields
 * AssociatedPullRequests
 * 
 * BranchProtectionRules
 * 
 * id
 * 
 * name
 * 
 * prefix
 * 
 * refUpdateRule {
 *      RefUpdateRules
 * }
 * 
 * target {
 *      abbreviatedOid
 * 
 *      commitResourcePath
 * 
 *      commitUrl
 * 
 *      id
 * 
 *      oid
 * }
 * 
 * repository {
 *      Repository
 * }
 * 
 * onCommit
 * 
 * onTree
 * 
 * onBlog
 * 
 * onTag
 */

export const BaseRef = (fields: string = "") => `
    ${fields}
`

/**
* @description Github Graphql Branch
* @defaultVariables id name
* @fields 
* AssociatedPullRequests

* BranchProtectionRules

* prefix

* refUpdateRule {
*      RefUpdateRules
* }

* repository {
*      Repository
* }

* target
*/

export const Branch = (fields: string = "") => `
    id
    name
    ${fields}
`


/**
 * @description Github Graphql Commit
 * @defaultVariables id
 * @fields 
 * abbreviatedOid
 * 
 * additions
 * 
 * AssociatedPullRequests
 * 
 * author {
 *      Author
 * }
 * 
 * authoredByCommitter
 * 
 * authoredDate
 * 
 * Authors
 * 
 * Blame
 * 
 * changedFiles
 * 
 * CheckSuite
 * 
 * Comments
 * 
 * commitResourcePath
 * 
 * commitUrl
 * 
 * committedDate
 * 
 * committedViaWeb
 * 
 * committer {
 * 
 *      avatarUrl
 * 
 *      date
 * 
 *      email
 * 
 *      name
 * 
 *      User
 * 
 * }
 * 
 * deletions
 * 
 * Deployment
 * 
 * File
 * 
 * History
 * 
 * message
 * 
 * messageBody
 * 
 * messageBodyHTML
 * 
 * messageHeadline
 * 
 * messageHeadlineHTML
 * 
 * oid
 * 
 * onBehalfOf {
 *      Organization
 * }
 * 
 * parents {
 *      Parents
 * }
 * 
 * pushedDate
 * 
 * repository {
 *      Repository
 * }
 * 
 * signature {
 *      Signature
 * }
 * 
 * CommitStatus
 * 
 * statusCheckRollup {
 * 
 *      Commit
 * 
 *      Contexts
 * 
 *      id
 * 
 *      state
 * }
 * 
 * SubModules
 * 
 * tarballUrl
 * 
 * Tree
 * 
 * id
 * 
 * resourcePath
 * 
 * tarballUrl
 * 
 * treeResourcePath
 * 
 * treeUrl
 * 
 * url
 * 
 * viewerCanSubscribe
 * 
 * viewerSubscription
 * 
 * zipballUrl
 */

export const Commit = (fields: string = "") => `
    id
    ${fields}
`
/**
* @description Github Graphql CommitStatus
* @fields 

* CombinedContexts

* commit{
    Commit
}

* Context

* Contexts

* id
            
* state
*/

export const CommitStatus = (fields: string = "") => `
    status {
        id
        ${fields}
    }
`

/**
* @description Github Graphql

* @defaultVariable age startingLine
* age

* Commit

* endingLine

* startingLine
*/

export const Blame = (path: string, fields: string) => `
    blame(path: "${path}") {
        ranges {
            age
            startingLine 
            ${fields}
        }
    }
`
/**
 * @description Github Graphql onCommit  
 * @queryArguments
 * Commit 
 */
export const onCommit = (fields: string = "") => `
    ...on Commit {
    ${fields}
}
`
/**
 * @description Github Graphql Tree  
 * @defaultVariables id
 * @queryArguments
 * abbreviatedOid
 * 
 * commitResourcePath
 * 
 * commitUrl
 * 
 * entries {
 *      File
 * }
 * 
 * oid
 * 
 * Repository
 */

export const Tree = (fields: string = "") => `
    ${fields}
    
`

/**
 * @description Github Graphql onTree  
 * @queryArguments
 * Tree
 */
export const onTree = (fields: string = "") => `
    ...on Tree {
        ${fields}
    }
`

/**
 * @description Github Graphql Blob  
 * @defaultVariables id
 * @queryArguments
 * abbreviatedOid
 * 
 * byteSize
 * 
 * commitResourcePath
 * 
 * commitUrl
 * 
 * id
 * 
 * isBinary
 * 
 * isTruncated
 * 
 * oid
 * 
 * Repository
 * 
 * text
 */
export const Blob = (fields: string = "") => `
    ${fields}
`

/**
 * @description Github Graphql onBlob  
 * @queryArguments
 * Blob
 */
export const onBlob = (fields: string = "") => `
    ...on Blob {
        ${fields}
    }
`
/**
 * @description Github Graphql Tag  
 * @defaultVariables id name
 * @queryArguments
 * abbreviatedOid
 * 
 * commitResourcePath
 * 
 * commitUrl
 * 
 * message
 * 
 * oid
 * 
 * repository {
 *      Repository
 * }
 * 
 * tagger {
 *      avatarUrl
 * 
 *      date
 * 
 *      email
 * 
 *      name
 * 
 *      User
 * }
 * 
 * target {
 *      abbreviatedOid
 * 
 *      commitResourcePath
 * 
 *      commitUrl
 * 
 *      id
 * 
 *      oid
 * 
 *      repository {
 *          Repository
 *      }
 * 
 *      onCommit
 * 
 *      onTree
 * 
 *      onBlob
 * 
 *      onTag
 * }
 * 
 */
export const Tag = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql onTag  
 * @queryArguments
 * Tag
 */
export const onTag = (fields: string = "") => `
    ...on Tag {
        ${fields}
    }
`


/**
 * @description Github Graphql Deployments  
 * @defaultVariables totalCount environments
 * @queryArguments 
 * direction "ASC" | "DESC" 
 * 
 * orderBy "CREATED_AT"
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * Deployment
*/

export const Deployments = (params: queryVariables.Deployments) => `
    deployments(first: ${params.first} ${params.environments ? `, environments: ${params.environments}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.deployment ? `deployment: ${params.deployment}` : ""} ${params.last ? `, last: ${params.last}` : ""}, 
    ${params.orderBy || params.direction ? `orderBy: { field: ${params.orderBy}, direction: ${params.direction}}` : ""}) {
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
 * @description Github Graphql Deployment  
 * @defaultVariables id
 * @queryArguments 
 * Commit
 * 
 * commitOid
 * 
 * createdAt
 * 
 * creator{
 *      Author
 * }
 * 
 * databaseId
 * 
 * description
 * 
 * environment
 * 
 * latestEnvironment
 * 
 * latestStatus {
 *      createdAt
 *      
 *      creator{
 *          Author
 *      }
 * }
 * 
 * Deployment
 * 
 * description
 * 
 * environmentUrl
 * 
 * id
 * 
 * logUrl
 * 
 * state
 * 
 * updatedAt
 * 
 * originalEnvironment
 * 
 * payload
 * 
 * ref {
 *      Ref
 * }
 * 
 * repository {
 *      Repository
 * }
 * 
 * state
 * 
 * Statuses
 * 
 * task
 * 
 * updatedAt
 */

export const Deployment = (fields: string = "") => `
    id
    ${fields}
`

/**
 * @description Github Graphql Ref
 * @defaultVariables id
 * @fields 
 * AssociatedPullRequests
 * 
 * id
 * 
 * branchProtectionRule {
 *      BranchProtectionRules
 * }
 * 
 * name
 * 
 * prefix
 * 
 * refUpdateRule {
 *      RefUpdateRules
 * }
 * 
 * Repository {
 *      RepositoryNode
 * }
 * target
 */

export const Ref = (fields: string = "") => `
    id
    ${fields}
`

/**
 * @description Github Graphql RefUpdateRules
 * @defaultVariables id
 * @fields allowsDeletions
 * allowsForcePushes
 * 
 * pattern
 * 
 * requiredApprovingReviewCount
 * 
 * requiredStatusCheckContexts
 *
 * requiresLinearHistory
 *  
 * requiresSignatures
 *
 * viewerCanPush
*/

export const RefUpdateRules = (fields: string = "") => `
    id
    ${fields}
`

/**
 * @description Github Graphql Statuses  
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * Status
*/

export const Statuses = (params: queryVariables.BasicFields) => `
    statuses(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Languages  
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * color
 * 
 * id
 * 
 * name
*/

export const Languages = (params: queryVariables.BasicFields) => `
    languages(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
        totalSize
    }
`

/**
 * @description Github Graphql File
 * @defaultVariables name type path
 * @fields 
 * extension
 * 
 * isGenerated
 * 
 * mode
 * 
 * object {
 * 
 *      abbreviatedOid
 * 
 *      commitResourcePath
 * 
 *      commitUrl
 * 
 *      id
 * 
 *      oid
 * 
 *      repository {
 * 
 *          Repository
 * 
 *      }
 * 
 *      onCommit
 * 
 *      onTree
 * 
 *      onBlob
 * 
 *      onTag
 * }
 * 
 * oid
 * 
 * Repository
 * 
 * submodule {
 * 
 *      branch
 * 
 *      gitUrl
 * 
 *      name
 * 
 *      path
 * 
 *      subprojectCommitOid
 * 
 *      type
 * }
 */

export const File = (path: string, fields: string = "") => `
    file(path: ${path}) {
        name
        type
        ${fields}
    }
`

/**
 * @description Github Graphql History  
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * author: {emails: string, id: string}
 * 
 * since string
 * 
 * until string
 * 
 * path string
 * 
 * @fields 
 * Commit
 * 
* }
*/

export const History = (params: queryVariables.History) => `
history(first: ${params.first} ${params.author ? `, author: ${params.author}` : ""} ${params.path ? `, path: ${params.path}` : ""} ${params.since ? `, since: ${params.since}` : ""} ${params.until ? `, until: ${params.until}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""}
  ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Parents
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields
 * Commit
*/

export const Parents = (params: queryVariables.BasicFields) => `
parents(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Signature
 * @defaultVariables id
 * @fields 
 * email
 * 
 * isValid
 * 
 * payload
 * 
 * signature
 * 
 * signer {
 *      User
 * }
 * 
 * state
 * 
 * wasSignedByGitHub
 * 
 * ... on GpgSignature {
 *      keyId
 * 
 *      email
 * 
 *      isValid
 * 
 *      payload
 * 
 *      signature
 * 
 *      signer {
 *          User
 *      }
 * 
 *      state
 * 
 *      wasSignedByGitHub
 * }
 * 
 * ... on SmimeSignature {
 * 
 *      __typename
 * 
 *      email
 * 
 *      isValid
 * 
 *      payload
 * 
 *      signature
 * 
 *      signer {
 *          User
 *      }
 * 
 *      state
 * 
 *      wasSignedByGitHub
 * }
 * 
 * ... on UnknownSignature {
 *      __typename
 * 
 *      email
 * 
 *      isValid
 * 
 *      payload
 * 
 *      signature
 * 
 *      signer {
 *          User
 *      }
 * 
 *      state
 * 
 *      wasSignedByGitHub
 * }
 */

export const Signature = (fields: string = "") => `
    id
    ${fields}
`

/**
 * @description Github Graphql CombinedContexts
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * onCheckRun
 * onStatusContext
*/

export const CombinedContexts = (params: queryVariables.BasicFields) => `
    combinedContexts(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Annotations
 * @defaultVariables totalCount
 * @queryArguments
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * annotationLevel
 * 
 * blobUrl
 * 
 * databaseId
 * 
 * location {
 *      start {
 *          column
 *      
 *          line
 *      }
 *      end {
 *          column
 *          line
 *      }
 * }
 * message
 *          
 * path
 *          
 * rawDetails
 *          
 * title
*/

export const Annotations = (params: queryVariables.BasicFields) => `
    annotations(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql CheckSuite
 * @defaultVariables id conclusion
 * @fields 
 * app {
 *      App
 * }
 * 
 * branch {
 *      Branch
 * }
 * 
 * checkRuns {
 *      CheckRuns
 * }
 * 
 * commit {
 *      Commit
 * }
 * 
 * conclusion
 * 
 * createdAt
 * 
 * databaseId
 * 
 * id
 * 
 * matchingPullRequests {
 *      PullRequests
 * }
 * 
 * push {
 *      id
 * 
 *      nextSha
 * 
 *      permalink
 * 
 *      previousSha
 * 
 *      pusher {
 *          User
 *      }
 * 
 *      repository {
 *          Repository
 *      }
 * }
 * 
 * repository {
 *      Repository
 * }
 * 
 * resourcePath
 * 
 * status
 * 
 * updatedAt
 * 
 * url
 */

export const CheckSuite = (fields: string = "") => `
    id
    conclusion
    ${fields}
`
/**
 * @description Github Graphql CheckSuites
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * filterBy {appId: number, checkName: string}
 * @fields
 * CheckSuites
*/

export const CheckSuites = (params: queryVariables.CheckRuns) => `
    checkSuites(first: ${params.first} ${params.filterBy ? `, filter: ${params.filterBy},` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql CheckRun
 * @defaultVariables id name
 * @fields 
 * annotation {
 *      Annotation
 * }
 * 
 * checkSuite {
 *      CheckSuite
 * }
 * 
 * completedAt
 * 
 * conclusion
 * 
 * databaseId
 * 
 * detailsUrl
 * 
 * externalId
 * 
 * permalink
 * 
 * repository {
 *      Repository
 * }
 * 
 * url
 * 
 * title
 * 
 * text
 * 
 * summary
 * 
 * status
 * 
 * startedAt
 * 
 * resourcePath
 */

export const CheckRun = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql CheckRuns
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * filterBy {appId: number, checkName: string, checkType: "ALL" | "LATEST" , status: "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "COMPLETED" | "WAITING" | "REQUESTED"}
 * @fields
 * CheckRun
*/

export const CheckRuns = (params: queryVariables.CheckRuns) => `
    checkRuns(first: ${params.first} ${params.filterBy ? `, filter: ${params.filterBy},` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql onCheckRun  
 * @queryArguments 
 * CheckRun
 */

export const onCheckRun = (fields: string = "") => `
 ...on CheckRun {
    ${fields}
}
`

/**
 * @description Github Graphql StatusContext
 * @defaultVariables id state
 * @fields 
 *  avatarUrl
 *  
 * context
 * 
 * createdAt
 * 
 * creator {
 *      Owner
 * }
 * 
 * description
 * 
 * state
 * 
 * targetUrl
 */

export const StatusContext = (fields: string = "") => `
    id
    state
    ${fields}
`

/**
 * @description Github Graphql onStatusContext  
 * @defaultVariables totalCount
 * @queryArguments 
 * StatusContext
 */

export const onStatusContext = (fields: string = "") => `
    ...on StatusContext {
        ${fields}
    }
`

/**
 * @description Github Graphql Context
 * @defaultVariables id
 * @fields 
 * avatarUrl
 * 
 * commit {
 *      Commit
 * }
 * 
 * context
 * 
 * createdAt
 * 
 * creator {
 *      Owner
 * }
 * 
 * description
 * 
 * id
 * 
 * state
 * 
 * targetUrl
 */

export const Context = (name: string, fields: string) => `
    context(name: "${name}") {
        ${fields}
    }
`
/**
 * @description Github Graphql Contexts
 * @defaultVariables totalCount
 * @fields
 * avatarUrl
 * 
 * commit {
 *      Commit
 * }
 * 
 * context
 * 
 * createdAt
 * 
 * creator {
 *      Owner
 * }
 * 
 * description
 * 
 * id
 * 
 * state
 * 
 * targetUrl
*/

export const CommitContexts = (fields: string = "") => `
    contexts {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql StatusCheckRollup
 * @defaultVariables totalCount
 * @fields
 * avatarUrl
 * 
 * commit {
 *      Commit
 * }
 * 
 * id
 * 
 * state
 */
export const StatusCheckRollup = (fields: string = "") => `
    statusCheckRollup {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql Submodules
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields
 * branch
 * gitUrl
 * 
 * name
 * 
 * path
 * 
 * subprojectCommitOid
*/

export const Submodules = (params: queryVariables.BasicFields) => `
    submodules(first: ${params.first}  ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Milestone
 * @defaultVariables id description
 * @fields 
 * closed
 * 
 * closedAt
 * 
 * createdAt
 * 
 * creator
 * 
 * dueOn
 * 
 * id
 * 
 * Issues
 * 
 * number
 * 
 * progressPercentage
 * 
 * PullRequests
 * 
 * repository {
 *      Repository
 * }
 * 
 * resourcePath
 * 
 * state
 * 
 * title
 * 
 * updatedAt
 * 
 * url
 */

export const Milestone = (fields: string = "") => `
    milestone {
        id
        description
        ${fields}
    }
    
`

/**
 * @description Github Graphql Milestones  
 * @defaultVariables totalCount 
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * query string
 * 
 * state "OPEN" | "CLOSED"
 * 
 * orderBy "DUE_DATE" | "CREATED_AT" | "UPDATED_AT" | "NUMBER"
 * 
 * direction "ASC" | "DESC"
 * 
 * @fields
 * Milestone
*/

export const Milestones = (params: queryVariables.Milestones) => `
    milestones(${params.query ? `query: ${params.query}` : ""} first: ${params.first} ${params.state ? `state: ${params.state}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: { field: ${params.orderBy}, direction: ${params.direction}}) {
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
 * @description Github Graphql ReviewRequests
 * @defaultVariables totalCount
 * @queryArguments 
 * direction "ASC" | "DESC" 
 * 
 * orderBy "LOGIN" | "CREATED_AT"
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * asCodeOwner
 *          
 * databaseId
 *
 * id
 *
 * pullRequest {
 *      PullRequest
 * }
 *
 * requestedReviewer {
 *      onMannequin
 * 
 *      onTeam
 *  
 *      onUser
 * }
*/

export const ReviewRequests = (params: queryVariables.BasicFields) => `
    reviewRequests(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql ReviewThreads
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields 
 * comments {
 *      Comments
 *      
 *      diffSide
 *      
 *      id
 *      
 *      isCollapsed
 *      
 *      isOutdated
 *      
 *      isResolved
 *      
 *      line
 *      
 *      originalLine
 *      
 *      originalStartLine
 *      
 *      path
 * }
 * 
 * pullrequest {
 *      PullRequest
 * }
 * 
 * repository {
 *      Repository
 * }
 * 
 * resolvedBy {
 *      User
 * }
 * 
 * startDiffSide
 * 
 * startLine
 * 
 * viewerCanReply
 * 
 * viewerCanResolve
 * 
 * viewerCanUnresolve
*/

export const ReviewThreads = (params: queryVariables.BasicFields) => `
    reviewThreads(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Reviews
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields
 * Repository
*/

export const Reviews = (params: queryVariables.BasicFields) => `
reviews(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
    edges {
        cursor
        node {
            role
            ${params.fields}
        }
    }
 
    nodes {
        role
        ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
}
`

/**
* @description Github Graphql onAddedToProjectEvent
* @fields
* actor {
    Owner
}
* 
* createdAt

* databaseId

* id
*/

export const onAddedToProjectEvent = (fields: string = "") => `
    ... on AddedToProjectEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutoMergeDisabledEvent
* @fields 
* actor {
    Owner
}

* createdAt string

* disabler {
    UserInfo
}

* id
    
* pullRequest {
    PullRequest
}

* reason

* reasonCode
*/

export const onAutoMergeDisabledEvent = (fields: string = "") => `
    ... on AutoMergeDisabledEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutoMergeEnabledEvent
*@fields    
* actor {
    Owner
}
    
* createdAt string

* disabler {
    User
}
    
* id
    
* pullRequest {
    PullRequest
}

* reason

* reasonCode
*/

export const onAutoMergeEnabledEventt = (fields: string = "") => `
    ... on AutoMergeEnabledEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutoRebaseEnabledEvent 
* @fields
* actor {
    Owner
}

* createdAt
    
* enabler {
    User
}

* id
    
* pullRequest {
    PullRequest
}
*/

export const onAutoRebaseEnabledEvent = (fields: string = "") => `
    ... on AutoRebaseEnabledEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutoSquashEnabledEvent
* @fields
* actor {
    Owner
}
    
* createdAt
    
* enabler {
    User
}
    
* id
    
pullRequest {
    PullRequest
}
*/
export const onAutoSquashEnabledEvent = (fields: string = "") => `
    ... on AutoSquashEnabledEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutomaticBaseChangeFailedEvent
* @fields
* actor{
    Owner
}
    
* createdAt
    
* id
    
* pullRequest {
    PullRequest
}
    
* newBase
    
* oldBase
*/


export const onAutomaticBaseChangeFailedEvent = (fields: string = "") => `
    ... on AutomaticBaseChangeFailedEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAssignedEvent
* actor {
*   Owner
* }
*      
* assignable {
*   Assignees
* }
*      
* assignee {
*   Owner
* }
*              
* createdAt
*  
* id
*      
* user {
*   User
* }
*/


export const onAssignedEvent = (fields: string = "") => `
    ... on AssignedEvent {
        createdAt
        id
        ${fields}
    }
`

/**
 * @description Github Graphql onBaseRefDeletedEvent
 * actor {
 *      Owner
 * }
 * 
 * baseRefName
 * 
 * createdAt
 * 
 * ClosedEvent
 * 
 * id
 *
 * pullRequest {
 *      PullRequest
 * }
 */

export const onBaseRefDeletedEvent = (fields: string = "") => `
    ... on BaseRefDeletedEvent {
        id
        baseRefName 
        ${fields}
    }
`

/**
* @description Github Graphql onBaseRefChangedEvent
* @fields    
* actor{ 
    Owner
}
    
* createdAt
    
* currentRefName

* databaseId
    
* id
    
* previousRefName
    
* pullRequest

*/

export const onBaseRefChangedEvent = (fields: string = "") => `
    ... on BaseRefChangedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onCommentDeletedEvent 
* @fields
* actor {
    Owner
}
    
* id
    
* createdAt

* databaseId

* deletedCommentAuthor
*/

export const onCommentDeletedEvent = (fields: string = "") => `
    ... on CommentDeletedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onConnectedEvent 
* @fields
* actor {
    Owner
}
    
* createdAt
    
* id
    
* isCrossRepository
    
source {
    onIssue
    onPullRequest
}
* subject {
    onIssue
    onPullRequest
}
*/

export const onConnectedEvent = (fields: string = "") => `
    ... on ConnectedEvent {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onConvertToDraftEvent
* @fields
* actor {
    Owner
}
    
* createdAt

* id

* pullRequest{
    PullRequest
}
    
* resourcePath
    
* url
*/

export const onConvertToDraftEvent = (fields: string = "") => `
    ... on ConvertToDraftEvent {
        ${fields}    
    }
`
/**
* @description Github Graphql onConvertedNoteToIssueEvent
* @fields    
* actor {
    Owner
}
    
* createdAt
    
* databaseId
    
* id
*/


export const onConvertedNoteToIssueEvent = (fields: string = "") => `
    ... on ConvertedNoteToIssueEvent {
        ${fields}    
    }
`
/**
* @description Github Graphql onDisconnectedEvent
* @fields
* actor {
    Owner
}
    
* createdAt
    
* id

* isCrossRepository
    
* source {
    onIssue
    onPullRequest
}
    
* subject {
    onIssue
    onPullRequest
}
*/

export const onDisconnectedEvent = (fields: string = "") => `
    ... on DisconnectedEvent {
        id
        ${fields}    
    }
`

/**
* @description Github Graphql onAutomaticBaseChangeSucceededEvent
 * @fields   
* actor {
    Owner
}
    
* createdAt
    
* id
    
* pullRequest {
    PullRequest
}
    
* newBase
    
* oldBase
*/

export const onAutomaticBaseChangeSucceededEvent = (fields: string = "") => `
    ... on AutomaticBaseChangeSucceededEvent {
        id
        ${fields}    
    }
`
/**
* @description Github Graphql onBaseRefForcePushedEvent
* id

* afterCommit {
*   Commit   
* }

* beforeCommit {
*   Commit   
* }

* createdAt

* pullRequest {
*   PullRequest
* }

* ref {
*   Ref
* }
*/

export const onBaseRefForcePushedEvent = (fields: string = "") => `
    ... on BaseRefForcePushedEvent {
        ${fields}    
    }
`
/**
* @description Github Graphql onClosedEvent
* actor {
    Owner
* }

* closable {
*   Closable
* }

* closer {
*   onCommit
*   onPullRequest
* }

* createdAt

* id

* resourcePath

* url
*/

export const onClosedEvent = (fields: string = "") => `
    ... on ClosedEvent {
        id
        url
        ${fields}
    }
`
/**
 * @description Github Graphql onCommitCommentThread
* Comments

* Commit

* id

* path

* position

* repository {
*   Repository
* }
*/

export const onCommitCommentThread = (fields?: string) => `
    ... on CommitCommentThread {
        id
        path
        ${fields}
    }
`

/**
 * @description Github Graphql onCrossReferencedEvent
* id

* actor {
*   Owner
* }

* createdAt

* isCrossRepository

* referencedAt

* resourcePath

* source {
*   onIssue
*   onPullRequest
* }

* target {
*   onIssue
*   onPullRequest
* }

* url

* willCloseTarget
*/

export const onCrossReferencedEvent = (fields: string = "") => `
    ... on CrossReferencedEvent {
        url
        ${fields}
    }
`
/**
* @description Github Graphql onDemilestonedEvent
* id

* actor {
*   Owner
* }

* createdAt

* milestoneTitle

* subject {
*   onIssue
*   onPullRequest
* }
*/

export const onDemilestonedEvent = (fields: string = "") => `
    ... on DemilestonedEvent {
        id
        milestoneTitle
        ${fields}
    }
`
/**
 * @description Github Graphql onDeployedEvent
 * id
 * 
 * actor {
 *      Owner
 * }
 *              
 * createdAt
 *              
 * databaseId
 *              
 * deployment {
 *      Deployment
 * }
 * 
 * pullRequest {
 *      PullRequest
 * }
 * 
 * ref {
 *      Ref
 * }
 */
export const onDeployedEvent = (fields: string = "") => `
    ... on DeployedEvent {
        id
        databaseId
        ${fields}
    }
`

/**
 * @description Github Graphql onDeploymentEnvironmentChangedEvent
* id

* actor

* createdAt

* deploymentStatus {
*       createdAt

*       creator {
*           Owner
*       }

*       deployment {
*           Deployment
*       }

*       description

*       environmentUrl

*       id

*       logUrl

*       state

*       updatedAt
* }

* pullRequest {
*       PullRequest
* }
*/

export const onDeploymentEnvironmentChangedEvent = (fields?: string) => `
    ... on DeploymentEnvironmentChangedEvent {
        id
        actor
        ${fields}
    }
`
/**
 * @description Github Graphql onHeadRefDeletedEvent
* id
* actor {
*       Owner
* }

* createdAt

* headRefName

* headRef {
*       Ref
* }

* pullRequest {
*       PullRequest
* }
*/

export const onHeadRefDeletedEvent = (fields: string = "") => `
    ... on HeadRefDeletedEvent  {
        id
        headRefName
        ${fields}
    }
`
/**
 * @description Github Graphql onHeadRefForcePushedEvent 
* actor {
*   Owner
* }

* afterCommit {
*   Commit   
* }

* beforeCommit {
*   Commit   
* }

* id

* pullRequest {
*   PullRequest
* }

* ref {
*   Ref
* }
*/

export const onHeadRefForcePushedEvent = (fields: string = "") => `
    ... on HeadRefForcePushedEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onHeadRefRestoredEvent
* actor {
*   Owner
* }

* createAt

* id

* pullRequest {
*   PullRequest
* }
*/


export const onHeadRefRestoredEvent = (fields: string = "") => `
    ... on HeadRefRestoredEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onLabeledEvent
* actor {
*   Ownwer
* }

* createdAt

* id

* label {
*   label
* }

* labelable {
*   Labels

*   onIssue

*   onPullRequest
*   }
*/

export const onLabeledEvent = (fields: string = "") => `
    ... on LabeledEvent {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onLockedEvent
* createdAt

* creator {
*   Owner
* }

* id

* lockReason

* lockable {
*   activeLockReason

*   locked {
*       OnIssue
*       onPullRequest
*   }
* }
*/

export const onLockedEvent = (fields: string = "") => `
    ... on LockedEvent{
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onMergedEvent
* actor {
*   Owner
* }

* Commit

* createdAt

* id

* mergeRef {
*   Ref
* }

* mergeName

* pullRequest {
*   PullRequest
* }

* resourcePath

* url
*/

export const onMergedEvent = (fields: string = "") => `
    ... on MergedEvent {
        id
        url
        ${fields}
    }    
`
/**
 * @description Github Graphql onMilestonedEvent
* id

* actor {
*   Owner
* }

* createdAt

* milestoneTitle

* subject {
*   onIssue
*   onPullRequest
* }
*/

export const onMilestonedEvent = (fields: string = "") => `
    ... on MilestonedEvent {
        id
        milestoneTitle
        ${fields}
    }
`
/**
 * @description Github Graphql onReferencedEvent
* actor {
*   Owner
* }

* commit {
*   Commit
* }

* commitRepository {
*   Repository
* }

* createdAt

* id

* isCrossRepository

* isDirectReference

* subject {
*   onIssue
*   onPullRequest
* }
*/

export const onReferencedEvent = (fields: string = "") => `
    ... on ReferencedEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onRenamedTitleEvent
* actor {
*   Owner
* }

* createdAt

* id

* currentTitle

* subject {
*   onIssue
*   onPullRequest
* }

* previousTitle
*/

export const onRenamedTitleEvent = (fields: string = "") => `
    ... on RenamedTitleEvent {
        id
        currentTitle
        ${fields}
    }
`
/**
 * @description Github Graphql onReopenedEvent
* actor {
*   Owner
* }

* id

* createdAt

* closable {
*   Closable
* }
*/

export const onReopenedEvent = (fields: string = "") => `
    ... on ReopenedEvent {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql onReviewDismissedEvent
* actor {
*   Owner
* }

* createdAt

* databaseId

* dismissalMessage

* dismissalMessageHTML

* id

* previousReviewState

* pullRequest {
*   PullRequest
* }

* pullRequestCommit {
*   Commit

*   id

*   pullRequest {
*       PullRequest
*   }

*   resourcePath

*   url
* }

* resourcePath

* review {
*   Review
* }

* url
*/

export const onReviewDismissedEvent = (fields: string = "") => `
    ... on ReviewDismissedEvent {
        id
        resourcePath
        ${fields}
    }
`

/**
 * @description Github Graphql onReviewRequestRemovedEvent
* actor {
*   Owner
* }

* createdAt

* id

* pullRequest {
*   PullRequest
* }

* requestedReviewer {
*   onMannequin
*   onTeam
*   onUser
* }
*/

export const onReviewRequestRemovedEvent = (fields: string = "") => `
    ... on ReviewRequestRemovedEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onReviewRequestedEvent  
* actor {
*   Owner
* }

* createdAt

* id

* pullRequest {
*   PullRequest
* }

* requestedReviewer {
*   onMannequin

*   onTeam

*   onUser
* }
*/

export const onReviewRequestedEvent = (fields: string = "") => `
    ... on ReviewRequestedEvent  {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onSubscribedEvent  
* actor {
*   Owner
* }

* createdAt

* id

* subscribable {
*   Subscribable
* }
*/

export const onSubscribedEvent = (fields: string = "") => `
    ... on SubscribedEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onUnassignedEvent 
* id

* actor {
*   Owner
* }

* assignable {
*   Assignees
*   onIssue
*   onPullRequest
* }
* assignee {
*   onBot
*   onMannequin
*   onOrganization
*   onUser
* }
* createdAt
* user {
*   User
* }
*/

export const onUnassignedEvent = (fields: string = "") => `
    ... on UnassignedEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onUnlabeledEvent
* actor {
*   Owner
* }
* createdAt
* id
* label {
*   Label
* }
* labelable {
*   Labels
*   onIssue
*   onPullRequest
* }
*/

export const onUnlabeledEvent = (fields: string = "") => `
    ... on UnlabeledEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onUnlockedEvent 
* actor {
*   Owner
* }
* createdAt
* id
* lockable {
*   activeLockReason
*   locked
*   onIssue
*   onPullRequest
* }
*/

export const onUnlockedEvent = (fields: string = "") => `
    ... on UnlockedEvent {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql onMarkedAsDuplicateEvent
* @fields    
* actor {
    Owner
}

* canonical {
    onIssue
    onPullRequest
}
    
* createdAt
    
* duplicate

* id
    
* isCrossRepository
*/

export const onMarkedAsDuplicateEvent = (fields: string = "") => `
    ... on MarkedAsDuplicateEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onMovedColumnsInProjectEvent
* @fields
* actor {
    Owner
}
    
* createdAt
    
* databaseId
    
* id

*/

export const onMovedColumnsInProjectEvent = (fields: string = "") => `
    ... on MovedColumnsInProjectEvent {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql onPinnedEvent
 * @fields
* actor {
    Owner
}

* createdAt
    
* id
    
* issue {
    Issue
}
*/

export const onPinnedEvent = (fields: string = "") => `
    ... on PinnedEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onUnpinnedEvent
 * @fields
* actor {
    Owner
}

* createdAt
    
* id
    
* issue {
    Issue
}
*/

export const onUnpinnedEvent = (fields: string = "") => `
    ... on UnpinnedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPullRequestCommit
* @fields     
* commit {
    Commit
}

* id
    
* pullRequest {
    PullRequest
}
    
* resourcePath
    
* url
*/

export const onPullRequestCommit = (fields: string = "") => `
    ... on PullRequestCommit {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPullRequestCommitCommentThread
* @fields
* comments {
    Comments
}

* commit {
    Commit
}
    
* id
    
* path
    
* position
    
* pullRequest {
    PullRequest
}
    
* repository {
    Repository
}
*/

export const onPullRequestCommitCommentThread = (fields: string = "") => `
    ... on PullRequestCommitCommentThread {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onPullRequestReview
 * @fields
 * PullRequestReview
 */
export const onPullRequestReview = (fields: string = "") => `
    ... on PullRequestReview {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql onPullRequestRevisionMarker
* @fields    
* __typename
    
* createdAt
    
* lastSeenCommit {
    Commit
}
    
* pullRequest {
    PullRequest
}
*/

export const onPullRequestRevisionMarker = (fields: string = "") => `
    ... on PullRequestRevisionMarker {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onReadyForReviewEvent
* @fields    
* actor {
    Owner
}
    
* createdAt
    
* id
    
* pullRequest {
    PullRequest
}
*/

export const onReadyForReviewEvent = (fields: string = "") => `
    ... on ReadyForReviewEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRemovedFromProjectEvent
* @fields    
* actor {
    Owner
}
    
* createdAt
    
* databaseId
    
* id
*/
export const onRemovedFromProjectEvent = (fields: string = "") => `
    ... on RemovedFromProjectEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTransferredEvent
* @fields    
* id
    
* actor {
    Owner
}
    
* createdAt
    
* fromRepository {
    Repository
}
    
issue {
    Issue
}
*/

export const onTransferredEvent = (fields: string = "") => `
    ... on TransferredEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onUnmarkedAsDuplicateEvent
* @field
* actor {
    Owner
}

* canonical {
    onIssue
    onPullRequest
}
    
* createdAt

* duplicate {
    onIssue
    onPullRequest
}
    
* id
    
* isCrossRepository
*/

export const onUnmarkedAsDuplicateEvent = (fields: string = "") => `
    ... on UnmarkedAsDuplicateEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onUnsubscribedEvent
* @field
* subscribable {
    Subscribable
}
    
* actor {
    Owner
}
    
* createdAt
    
* id
*/

export const onUnsubscribedEvent = (fields: string = "") => `
    ... on UnsubscribedEvent {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql Lockable
 * @fields
 * onIssue
 * 
 * onPullRequest
 * 
 * activeLockReason
 * 
 * locked
*/


export const Lockable = (fields: string = "") => `
    id
    ${fields}
`
/**
 * @description Github Graphql Labelable
 * @fields
 * onLabels 
 * onIssue 
 * onPullRequest 
*/

export const Labelable = (fields: string = "") => `
    id
    ${fields}
`
/**
 * @description Github Graphql onUserBlockedEvent
* actor

* blockDuration

* createdAt

* id

* subject {
*   User
* }
*/

export const onUserBlockedEvent = (fields: string = "") => `
    ... on UserBlockedEvent {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql Timeline
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * since string
 * @fields
 * onAssignedEvent
 * 
 * onBaseRefDeletedEvent 
 *          
 * onBaseRefForcePushedEvent
 *          
 * onClosedEvent
 * 
 * onCommit
 * 
 * onCommitCommentThread
 *           
 * onCrossReferencedEvent
 *          
 * onDemilestonedEvent
 * 
 * onDeployedEvent
 *
 * onDeploymentEnvironmentChangedEvent
 *
 * onHeadRefDeletedEvent
 *           
 * onHeadRefForcePushedEvent
 *           
 * onHeadRefRestoredEvent
 *          
 * onIssueComment
 * 
 * onLabeledEvent
 * 
 * onLockedEvent 
 *           
 * onMilestonedEvent
 * 
 * onPullRequestReview
 * 
 * onPullRequestReviewComment
 * 
 * onPullRequestReviewThread
 *
 * onReferencedEvent
 * 
 * onRenamedTitleEvent
 * 
 * onReopenedEvent
 * 
 * onReviewDismissedEvent
 * 
 * onReviewRequestRemovedEvent
 *          
 * onReviewRequestedEvent
 * 
 * onSubscribedEvent
 *           
 * onUnassignedEvent
 *           
 * onUnlabeledEvent
 * 
 * onUnlockedEvent
 * 
 * onUserBlockedEvent
 */

export const Timeline = (params: queryVariables.Timeline) => `
timeline(${params.after ? `, after: "${params.after}" ` : ""} ${params.since ? `, since: ${params.since}` : ""} ${params.before ? `, before: "${params.before}" ` : ""}, first: ${params.first} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql TimelineItems
 * @defaultVariables totalCount  itemsTypes = "PULL_REQUEST_COMMIT"
 * @queryArguments
 * itemTypes "PULL_REQUEST_COMMIT" | "PULL_REQUEST_COMMIT_COMMENT_THREAD" | "PULL_REQUEST_REVIEW" | "PULL_REQUEST_REVIEW_THREAD" | "PULL_REQUEST_REVISION_MARKER" | "AUTOMATIC_BASE_CHANGE_FAILED_EVENT" | "AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT" |
 * "AUTO_MERGE_DISABLED_EVENT" | "AUTO_MERGE_ENABLED_EVENT" | "AUTO_REBASE_ENABLED_EVENT" | "AUTO_SQUASH_ENABLED_EVENT" | "BASE_REF_CHANGED_EVENT" | "BASE_REF_FORCE_PUSHED_EVENT" | "BASE_REF_DELETED_EVENT" | "DEPLOYED_EVENT" | "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT" |
 * "HEAD_REF_DELETED_EVENT" | "HEAD_REF_FORCE_PUSHED_EVENT" | "HEAD_REF_RESTORED_EVENT" | "MERGED_EVENT" | "REVIEW_DISMISSED_EVENT" | "REVIEW_REQUESTED_EVENT" | "REVIEW_REQUEST_REMOVED_EVENT" | "READY_FOR_REVIEW_EVENT" | "CONVERT_TO_DRAFT_EVENT" | 
 * "ISSUE_COMMENT" | "CROSS_REFERENCED_EVENT" | "ADDED_TO_PROJECT_EVENT" | "ASSIGNED_EVENT" | "CLOSED_EVENT" | "COMMENT_DELETED_EVENT" | "CONNECTED_EVENT" | "CONVERTED_NOTE_TO_ISSUE_EVENT" | "DEMILESTONED_EVENT" | "DISCONNECTED_EVENT" | "LABELED_EVENT" |
 * "LOCKED_EVENT" "MARKED_AS_DUPLICATE_EVENT" | "MENTIONED_EVENT" | "MILESTONED_EVENT" | "MOVED_COLUMNS_IN_PROJECT_EVENT" | "PINNED_EVENT" | "REFERENCED_EVENT" | "REMOVED_FROM_PROJECT_EVENT" | "RENAMED_TITLE_EVENT" | "REOPENED_EVENT" | "SUBSCRIBED_EVENT" | "TRANSFERRED_EVENT" |
 * "UNASSIGNED_EVENT" | "UNLABELED_EVENT" | "UNLOCKED_EVENT" | "USER_BLOCKED_EVENT" | "UNMARKED_AS_DUPLICATE_EVENT" | "UNPINNED_EVENT" | "UNSUBSCRIBED_EVENT"
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * skip number
 * 
 * since string
 * @fields 
 * onAddedToProjectEvent
 * 
 * onAssignedEvent
 * 
 * onAutoMergeDisabledEvent
 * 
 * onAutoMergeEnabledEvent
 * 
 * onAutoRebaseEnabledEvent
 * 
 * onAutoSquashEnabledEvent
 * 
 * onAutomaticBaseChangeFailedEvent
 * 
 * onAutomaticBaseChangeSucceededEvent
 * 
 * onBaseRefChangedEvent
 * 
 * onBaseRefDeletedEvent
 * 
 * onBaseRefForcePushedEvent
 * 
 * onClosedEvent
 * 
 * onCommentDeletedEvent
 * 
 * onConnectedEvent
 * 
 * onConvertToDraftEvent
 * 
 * onConvertedNoteToIssueEvent
 * 
 * onCrossReferencedEvent
 * 
 * onDemilestonedEvent
 * 
 * onDeployedEvent
 * 
 * onDeploymentEnvironmentChangedEvent
 * 
 * onDisconnectedEvent
 * 
 * onHeadRefDeletedEvent
 * 
 * onHeadRefDeletedEvent
 * 
 * onHeadRefForcePushedEvent
 * 
 * onHeadRefRestoredEvent
 * 
 * onIssueComment
 * 
 * onLabeledEvent
 * 
 * onLockedEvent
 * 
 * onMarkedAsDuplicateEvent
 * 
 * onMentionedEvent
 * 
 * MilestonedEvent
 * 
 * onMovedColumnsInProjectEvent
 * 
 * onPinnedEvent
 * 
 * onPullRequestCommit
 * 
 * onPullRequestCommitCommentThread
 * 
 * onPullRequestReview
 * 
 * onPullRequestReviewThread
 * 
 * onPullRequestRevisionMarker
 * 
 * onReadyForReviewEvent
 * 
 * onReferencedEvent
 * 
 * onRemovedFromProjectEvent
 * 
 * onRenamedTitleEvent
 * 
 * onReopenedEvent
 * 
 * onReviewDismissedEvent
 * 
 * onReviewDismissedEvent
 * 
 * onReopenedEvent
 * 
 * onReviewDismissedEvent
 * 
 * onReviewRequestRemovedEvent
 * 
 * onReviewRequestedEvent
 * 
 * onSubscribedEvent
 * 
 * onTransferredEvent
 * 
 * onUnassignedEvent
 * 
 * onUnlabeledEvent
 * 
 * onUnlockedEvent
 * 
 * onUnmarkedAsDuplicateEvent
 * 
 * onUnpinnedEvent
 * 
 * onUnsubscribedEvent
 * 
 * onUserBlockedEvent
*/

export const TimelineItems = (params: queryVariables.TimelineItems) => `
timelineItems(first: ${params.first} ${params.itemTypes ? `, itemTypes: ${params.itemTypes}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""} ${params.skip ? `, skip: ${params.skip}` : ""}
    ${params.since ? `, since: ${params.since}` : ""}) {
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
 * @description Github Graphql Assignees  
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields
 * User
*/

export const Assignees = (params: queryVariables.BasicFields) => `
    assignees(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Closable
 * @queryArguments 
 * closed
 * 
 * closedAt
 * 
 * onProject
 * 
 * onIssue
 * 
 * onPullRequest
 * 
 * onMilestone
*/

export const Closable = (fields: string = "") => `
    ${fields}
`

/**
* @description Github Graphql Project
* @defaultVariables id name
* @fields
* body string

* bodyHTML string

* closed boolean

* closedAt string

* columns Columns

* createdAt string

* creator Owner

* databaseId number

* id number

* name string

* number number

* owner Owner

* pendingCards Cards

* progress {

   doneCount number

   donePercentage number

   enabled boolean

   inProgressCount number

   inProgressPercentage number

   todoCount: number

   todoPercentage: number

}

* resourcePath string

* state string

* updatedAt string

* url string

* viewerCanUpdate boolean
*/

export const Project = (fields: string = "") => `
    project {
        id
        name
        ${fields}
    }
`

/**
* @description Github Graphql ProjectCards
* @fields Column

* content {
    onIssue
    onPullRequest
}

* createdAt

* creator {
    Owner
}

* databaseId

* id

* isArchived

* note

* Project

* resourcePath

* state

* updatedAt

* url
*/

export const ProjectCards = (params: queryVariables.Cards) => `
    projectCards(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}) {
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
* @description Github Graphql Projects
* @defaultVariables totalCount
* @queryArguments
* after string 

* before string

* first number

* last number

* direction "ASC" | "DESC"

* orderBy "UPDATED_AT" | "CREATED_AT" | "NAME"

* search string

* states "OPEN" | "CLOSED"

* @fields
* Project
*/

export const Projects = (params: queryVariables.Projects) => `
    projects(first: ${params.first} ${params.excludePopular ? `, excludeFirst: ${params.excludeFirst}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}, orderBy: { field: ${params.orderBy}, direction: ${params.direction}}) {
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
* @description Github Graphql Version
* @defaultVariables id statistics
* @fields
* Files

* Package

* plaform

* preRelease

* readme

* Release

* summary

* version
*/

export const Version = (fields: string = "") => `
    id
    statistics {
        downloadsTotalCount
    }
    ${fields}
`

/**
* @description Github Graphql LatestVersion
* @fields Version
*/
export const LatestVersion = (fields: string = "") => `
    latestVersion {
        ${fields}
    }
`

/**
* @description Github Graphql Versions
* @queryArguments 
* after string

* before string

* first number

* last number

* @fields Version

*/
export const Versions = (params: queryVariables.BasicFields) => `
    versions(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }

        nodes {
            ${params.fields}
            ${params.pageInfo ? params.pageInfo : ""}
        }
        totalCount
    }
`

/**
 * @description Github Graphql Column
 * @defaultVariables id name
 * @fields 
 * Cards
 * 
 * createdAt
 * 
 * databaseId
 * 
 * id
 * 
 * name
 * 
 * purpose
 * 
 * project {
 *      Project
 * }
 * 
 * resourcePath
 * 
 * updatedAt
 * 
 * url
 * 
 * }
 */

export const Column = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql Columns  
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields
 * Column
*/

export const Columns = (params: queryVariables.BasicFields) => `
columns(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Card  
 * @defaultVariables id state
 * @fields
 * Column
 * 
 * content {
 *      onIssue
 *      onPullRequest
 * }
 * 
 * createdAt
 * 
 * creator {
 *      Owner
 * }
 * 
 * databaseId
 * 
 * id
 * 
 * isArchived
 * 
 * note
 * 
 * project {
 *      Project
 * }
 * 
 * resourcePath
 * 
 * state
 * 
 * updatedAt
 * 
 * url
*/

export const Card = (fields: string = "") => `
    id
    state
    ${fields}
`

/**
* @description Github Graphql IssueComment
* @fields    
* author {
    Owner
}
    
* authorAssociation
    
* body

* bodyHTML

* bodyText
    
* createdAt
    
* createdViaEmail
    
* databaseId
    
* editor {
    Owner
}
    
* id
    
* includesCreatedEdit
    
* isMinimized
    
* issue {
    Issue
}
    
* lastEditedAt
    
* minimizedReason
    
* publishedAt
    
* pullRequest {
    PullRequest
}
    
* reactionGroups {
    ReactionGroups
}
    
* reactions {
    Reactions
}
*/

export const IssueComment = (fields: string = "") => `
    id
    ${fields}
`
/**
 * @description Github Graphql onIssueComment
 * @fields
 * IssueComment
 */

export const onIssueComment = (fields: string = "") => `
    ... on IssueComment {
        id
        ${fields}
    }
`
/**
 * @description Github Graphql Cards  
 * @defaultVariables totalCount 
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * archivedStates "ARCHIVED" | "NOT_ARCHIVED"
 * @fields
 * Card
* }
*/

export const Cards = (params: queryVariables.Cards) => `
cards(first: ${params.first} ${params.archivedStates ? `archivedStates: ${params.archivedStates}` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Review
 * @defaultVariables id
 * @fields 
 * author {
 *      Owner
 * }
 * 
 * authorAssociation
 * 
 * authorCanPushToRepository
 * 
 * body
 * 
 * bodyHTML
 * 
 * bodyText
 * 
 * comment {
 *      Comments
 * }
 * 
 * commit {
 *      Commit
 * }
 * 
 * createdAt
 * 
 * createdViaEmail
 * 
 * databaseId
 * 
 * editor {
 *      Owner
 * }
 * 
 * id
 * 
 * includesCreatedEdit
 * 
 * lastEditedAt
 * 
 * onBehalfOf {
 *      onBehalfOf
 * }
 * 
 * publishedAt
 * 
 * pullRequest {
 *      PullRequest
 * }
 * 
 * reactionGroups {
 *      ReactionGroups
 * }
 * 
 * reactions {
 *      Reactions
 * }
 * 
 * repository {
 *      Repository
 * }
 * 
 * publishedAt
 * 
 * resourcePath
 * 
 * state
 * 
 * submittedAt
 * 
 * updatedAt
 * 
 * url
 * 
 * userContentEdits {
 *      UserContentEdits
 * }
 * 
 * publishedAt
 * 
 * viewerCanDelete
 * 
 * 
 * viewerCanReact
 * 
 * viewerCanUpdate
 * 
 * viewerCannotUpdateReasons
 * 
 * viewerDidAuthor
 */

export const Review = (fields: string = "") => `
    id
    ${fields}
`
/**
* @description Github Graphql Reactable
*   databaseId

*   id

*   onIssue

*   onPullRequest

*   onTeamDiscussion

*   onTeamDiscussionComment

*   onCommitComment

*   onIssueComment

*   onPullRequestReview

*   onPullRequestReviewComment
*/

export const Reactable = (fields: string = "") => `
    id
    ${fields}
`
/**
* @description Github Graphql ReactionGroups 
* @defaultVariables totalCount

* @fields
* content
          
* createdAt

* subject {
*   databaseId

*   id

*   ReactionGroups

*   Reactions

*   onIssue

*   onPullRequest

*   onTeamDiscussion

*   onTeamDiscussionComment

*   onCommitComment

*   onIssueComment

*   onPullRequestReview

*   onPullRequestReviewComment
* }

* Users

* viewerHasReacted
*/

export const ReactionGroups = (fields: string = "") => `
    reactionGroups {
        content
        createdAt
        ${fields}
    }
`

/**
 * @description Github Graphql onBehalfOf 
 * @defaultVariables totalCount
 * @queryArguments 
 * direction "ASC" | "DESC" 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * @fields
 * Team
*/

export const onBehalfOf = (params: queryVariables.BasicFields) => `
    onBehalfOf(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Subscribable
 * @defaultVariables id
 * @queryArguments 
 * actor {
 *      Owner
 * }
 * 
 * createdAt
 * 
 * viewerCanSubscribe
 * 
 * viewerSubscription
 * 
 * onIssue
 * 
 * onPullRequest
 * 
 * onRepository
 * 
 * onTeam
 * 
 * onTeamDiscussion
 * 
 * onCommit
*/

export const Subscribable = (fields: string = "") => `
    id
    ${fields}
`


/**
 * @description Github Graphql Collaborators
 * @defaultVariables totalCount
 * @queryArguments 
 * affiliations "OUTSIDE" | "DIRECT" | "ALL"
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * query string
 * @fields
 * User
 */

export const Collaborators = (params: queryVariables.Collaborators) => `
    collaborators(${params.query ? `query: ${params.query}` : ""} first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last:${params.last}` : ""},
    ${params.affiliation ? `, affiliation: ${params.affiliation}` : ""}) {
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
 * @description Github Graphql DeployKeys
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * @fields
 * createdAt
 * 
 * id
 * 
 * key
 *
 * readOnly
 *          
 * title
 *          
 * verified
 * }
*/

export const DeployKeys = (params: queryVariables.BasicFields) => `
deployKeys(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Reaction
 * @fields
 * content
 * 
 * createdAt
 * 
 * databaseId
 * 
 * id
 * 
 * reactable {
 *      Reactable
 * }
 * User
 */

export const Reaction = (fields: string = "") => `
    id
    content
    ${fields}
`
/**
 * @description Github Graphql Reactions
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * @fields
 * Reaction
 * 
*/

export const Reactions = (params: queryVariables.BasicFields) => `
    reactions(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql CommitComments
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * @fields
 * Comment
 * 
*/

export const CommitComments = (params: queryVariables.BasicFields) => `
    commitComments(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * @fields
 * Comment
 * 
*/

export const Comments = (params: queryVariables.BasicFields) => `
    comments(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql Release
 * @defaultVariables id name
 * @queryArguments
 * author {
 *      User
 * }
 * 
 * createdAt
 * 
 * description
 * 
 * descriptionHTML
 * 
 * isDraft
 * 
 * isLatest
 * 
 * isPrerelease
 * 
 * name
 * 
 * publishedAt
 */

export const Release = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql ReleaseAssets
 * @defaultVariables totalCount
 * @queryArguments 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * 
 * name string
 * @fields
 * contentType
 * 
 * createdAt
 * 
 * downloadCount
 *
 * downloadUrl
 *          
 * id
 *          
 * name
 *          
 * release {
 *      Release
 * }
 *          
 * size
 *          
 * updatedAt
 *          
 * uploadedBy {
 *      User
 *          
 * }
 *          
 * url
*/

export const ReleaseAssets = (params: queryVariables.ReleaseAssets) => `
commitComments(name: ${params.name}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql LicenseInfo
 * @defaultVariables id name
 * @queryArguments
 * body
 * 
 * conditions {
 *      description
 *      key
 *      label
 * }
 * 
 * description
 * 
 * featured
 * 
 * hidden
 * 
 * id
 * 
 * implementation
 * 
 * key
 * 
 * limitations {
 *      description
 *      key
 *      label
 * }
 * 
 * name
 * 
 * nickname
 * 
 * permissions {
 *      description
 *      key
 *      label
 * }
 * 
 * pseudoLicense
 * 
 * spdxId
 * 
 * url
 */

export const LicenseInfo = (fields: string = "") => `
    id
    name
    ${fields}
`


/**
 * @description Github Graphql Package
 * @defaultVariables id name
 * @queryArguments
 * latestVersion {
 *      Version
 * }
 * 
 * packageType
 * 
 * repository {
 *      Repository
 * }
 * 
 * statistics {
 *      downloadsTotalCount
 * }
 * 
 * Version
 * 
 * Version
 * 
 */

export const Package = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
* @description Github Graphql Packages  
* @defaultVariables totalCount 

* id

* name

* packageType

* statistics

* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT"

* names string

* packageType "NPM" | "RUBYGEMS" | "MAVEN" | "DOCKER" | "DEBIAN" | "NUGET" | "PYPI"

* repositoryId string

* @fields 
* LatestVersion

* Repository

* Version

* Versions

*/

export const Packages = (params: queryVariables.Packages) => `
packages(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
    edges {
        cursor
        node {
            id
            name
            packageType
            statistics {
                downloadsTotalCount
            }
            ${params.fields}
        }
    }
    nodes {
        id
        name
        packageType
        statistics {
            downloadsTotalCount
        }
        ${params.fields}
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
}
`

/**
 * @description Github Graphql VulnerabilityAlerts
 * @defaultVariables totalCount
 * @queryArguments 
 * direction "ASC" | "DESC"
 * 
 * orderBy "CREATED_AT"
 * 
 * packageType "NPM" | "RUBYGEMS" | "MAVEN" | "DOCKER" | "DEBIAN" | "NUGET" | "PYPI"
 * 
 * repositoryId string
 * 
 * after String
 * 
 * names string
 * 
 * before String
 * 
 * first number
 * 
 * last number
 * 
 * direction "ASC"
 * @fields
 * createdAt
 * 
 * dismissReason
 * 
 * dismissedAt
 * 
 * dismisser {
 *      User
 * }
 * 
 * id
 * 
 * repository {
 *      Repository
 * }
 * 
 * securityAdvisory {
 *      SecurityAdvisory
 * }
 * 
 * securityVulnerability {
 *      Vulnerability
 * }
 * 
 * vulnerableManifestFilename
 * 
 * vulnerableManifestPath
 * 
 * vulnerableRequirements
 * 
 * viewerHasReacted
 * 
*/

export const VulnerabilityAlerts = (params: queryVariables.VulnerabilityAlerts) => `
    vulnerabilityAlerts(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""},
        ${params.packageType ? `, packageType: ${params.packageType}` : ""} ${params.repositoryId ? `, repositoryId: ${params.repositoryId}` : ""} ${params.names ? `, names: ${params.names}` : ""}) {
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
 * @description Github Graphql SecurityAdvisory
 * @defaultVariables databaseId description
 * @fields 
 * cvss {
 *      score
 *      vectorString
 * }
 * 
 * CWES
 * 
 * edges {
 *      cursor
 * 
 *      node {
 *          cweId
 *          description
 *          id
 *          name
 *      }
 * }
 * 
 * databaseId
 * 
 * description
 * 
 * ghsaId
 * 
 * id
 * 
 * identifiers {
 *      type
 *      value
 * }
 * 
 * notificationsPermalink
 * 
 * origin
 * 
 * permalink
 * 
 * publishedAt
 * 
 * references {
 *      url
 * }
 * 
 * severity
 * 
 * summary
 *      updatedAt
 * }
 * 
 * updatedAt
 * 
 * vulnerabilities {
 *      Vulnerabilities
 * }
 * 
 * withdrawnAt
 */


export const SecurityAdvisory = (fields: string = "") => `
    databaseId
    description
    ${fields}
`

/**
 * @description Github Graphql Vulnerabilities
 * @defaultVariables totalCount
 * @queryArguments 
 * ecosystem "NPM" | "RUBYGEMS" | "MAVEN" | "COMPOSER" | "NUGET" | "PIP"
 * 
 * severities "LOW" | "MODERATE" | "HIGH" | "CRITICAL"
 * 
 * after string
 * 
 * before string
 * 
 * first number
 * 
 * last number
 * @fields
 * Vulnerability
 */

export const Vulnerabilities = (params: queryVariables.Vulnerabilities) => `
vulnerabilities(first: ${params.first} ${params.ecosystem ? `, ecosystem: ${params.ecosystem}` : ""} ${params.severities ? `, severities: ${params.severities}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last:${params.last}` : ""},
    orderBy: { field: ${params.orderBy}, direction: ${params.direction}}) {
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
 * @description Github Graphql Vulnerability
 * @defaultVariables severity
 * @fields 
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

export const Vulnerability = (fields: string = "") => `
severity
${fields}
`

/**
 * @description Github Graphql Watches  
 * @defaultVariables totalCount
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * @fields 
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

export const Watchers = (params: queryVariables.BasicFields) => `
watchers(after: ${after} ${params.before ? `, before: "${params.before}" ` : ""}, first: ${params.first} ${params.last ? `, last: ${params.last}` : ""}) {
    ${params.fields}
    totalCount
}
`


/**
 * @description Github Graphql CodeOfConduct 
 * body
 * 
 * key
 * 
 * id
 * 
 * name
 * 
 * resourcePath
 * 
 * url
 */

export const CodeOfConduct = (fields: string = "") => `
    codeOfConduct {
        id
        name
        ${fields}
    }
`