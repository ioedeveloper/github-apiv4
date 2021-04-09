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
 * Issue
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
 * Issues
 * 
 * Label
 * 
 * Labels
 * 
 * Languages
 * 
 * LatestRelease
 * 
 * LicenseInfo
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
 * Project
 * 
 * Projects
 * 
 * projectsResourcePath
 * 
 * projectsUrl
 * 
 * PullRequest
 * 
 * PullRequests
 * 
 * pushedAt
 * 
 * rebaseMergeAllowed
 * 
 * Ref
 * 
 * Refs
 * 
 * Release
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
    repository {
        id
        ${fields}
    }    
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
 * Repository
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
    ${params.last ? `, last:${params.last}` : ""}, ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""} ${params.privacy ? `, privacy: ${params.privacy}` : ""}) {
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
    ${params.last ? `, last:${params.last}` : ""}, ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""} ${params.privacy ? `, privacy: ${params.privacy}` : ""}) {
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
 * Repository
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
    branchProtectionRule {
        id
        ${fields}
    }
    
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
 * 
 * BranchProtectionRule
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
 * BranchProtectionRule
 * 
 * conflictingBranchProtectionRule{ 
 *      BranchProtectionRule
 *  }
 * 
 * Ref
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
 * Assignees
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
 *      PullRequest
 * 
 * 
 * }
 * 
 * BaseRef
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
 * Comments
 * 
 * Commits
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
 * Files
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
 * Labels
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
 * ReactionGroups
 * 
 * Reactions
 * 
 * Repository
 * 
 * resourcePath
 * 
 * revertResourcePath
 * 
 * revertUrl
 * 
 * reviewDecision
 * 
 * ReviewRequests
 * 
 *  ReviewThreads
 * 
 * Reviews
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
 * @description Github Graphql PullRequestReviewThread  
 * @defaultVariables id
 * @queryArguments
 * Comments
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
 * PullRequest
 * 
 * Repository
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
    pullRequestReviewThread {
        id
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
        ${params.states ? `, states: ${params.states}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}, ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""},) {
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
    ${params.last ? `, last: ${params.last}` : ""}, ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""}) {
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
 * BranchProtectionRule
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
    app {
        id
        name
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


export const Label = (name: string, fields: string = "") => `
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
 * @description Github Graphql PinnedIssues  
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
 * @fields 
 * Issue
*/

export const PinnedIssues = (params: queryVariables.BasicFields) => `
    pinnedIssues(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * RefUpdateRule
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
 * Repository
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
    baseRef {
        ${fields}
    }
`

/**
* @description Github Graphql Branch
* @defaultVariables id name
* @fields 
* AssociatedPullRequests

* BranchProtectionRules

* prefix

* RefUpdateRule

* Repository

* target
*/

export const Branch = (fields: string = "") => `
    branch {
        id
        name
        ${fields}
    }
    
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
 * Parents
 * 
 * pushedDate
 * 
 * Repository
 * 
 * Signature
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
    commit {
        id
        ${fields}
    }    
`

/**
* @description Github Graphql Author
* @fields 
* avatarUrl

* date

* email

* name

* user {
   User
}
*/

export const Author = (fields: string = "") => `
    author {
        name
        ${fields}
    }
`

/**
* @description Github Graphql Authors
* @defaultVariables totalCount first = 10
* @queryArguments direction "ASC" | "DESC"
* after string

* before string

* first number

* last number
* 
* @fields 
* Author
*/

export const Authors = (params: queryVariables.BasicFields) => `
 authors(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
* @description Github Graphql Commits
* @defaultVariables totalCount
* @queryArguments
* after string 

* before string

* first number

* last number
* @fields
* Commit

* id

* pullRequest {
    PullRequest
}

* resourcePath

* url
*/

export const Commits = (params: queryVariables.BasicFields) => `
    commits(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql MergeCommit  
 * @queryArguments
 * Commit 
 */
 export const MergeCommit = (fields: string = "") => `
    mergeCommit {
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
 * Entries
 * 
 * oid
 * 
 * Repository
 */

export const Tree = (fields: string = "") => `
    tree {
        ${fields}
    }
`

/**
 * @description Github Graphql Entries 
 * path
 * 
 * extension
 * 
 * isGenerated
 * 
 * mode
 * 
 * name
 * 
 * Object
 * 
 * path

 * oid

 * Submodule

 * type
 */
export const Entries = (fields: string = "") => `
    entries {
        ${fields}
    }
`
/**
* @description Github Graphql Object 
* path

* extension

* isGenerated

* mode

* repository {
    Repository
}

* onCommit

* onTree

* onBlog

* onTag

*/
export const Object = (fields: string = "") => `
    object {
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
    blob {
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
 * Repository
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
 *      Repository
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
    tag {
        id
        name
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
 * Ref
 * 
 * Repository
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
    deployment {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql Ref
 * @defaultVariables id
 * @fields 
 * AssociatedPullRequests
 * 
 * BranchProtectionRule
 * 
 * id
 * 
 * name
 * 
 * prefix
 * 
 * RefUpdateRule
 * 
 * Repository
 * 
 * target {
 *    Object
 * }
 */

export const Ref = (qualifiedName: string, fields: string = "") => `
    ref (qualifiedName: "${qualifiedName}") {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql Refs  
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
 * AssociatedPullRequests
 * 
 * BranchProtectionRule
 * 
 * id
 * 
 * name
 * 
 * prefix
 * 
 * RefUpdateRule
 * 
 * Repository
 * 
 * target {
 *      Object
 * }
*/

export const Refs = (params: queryVariables.Refs) => `
    refs(refPrefix: "${params.refPrefix}", first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}
    ${params.orderBy || params.direction? `, orderBy: { field: ${params.orderBy}, direction: ${params.direction}}`:""} ${params.direction ? `, direction: "${params.direction}" ` : ""}
    ${params.query ? `, query: "${params.query}" ` : ""}) {
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

export const RefUpdateRule = (fields: string = "") => `
    refUpdateRule {
        ${fields}
    }
    
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
 *      Repository
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
    file (path: "${path}") {
        name
        type
        ${fields}
    }
`

/**
* @description Github Graphql Files 
* additions

* deletions

* path

* viewerViewedState
*/

export const Files = (params: queryVariables.BasicFields) => `
    files(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""}
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
 * onGpgSignature
 * 
 * onSmimeSignature
 *
 * onUnknownSignature 
 */

export const Signature = (fields: string = "") => `
    signature {
        id
        ${fields}
    }    

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
 * App
 * 
 * Branch
 * 
 * CheckRuns
 * 
 * Commit
 * 
 * conclusion
 * 
 * createdAt
 * 
 * databaseId
 * 
 * id
 * 
 * MatchingPullRequests
 * 
 * Push 
 *  
 * Repository
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
    checkSuite {
        id
        conclusion
        ${fields}    
    }    
`
/**
* @description Github Graphql Push 
* id
* 
* nextSha
* 
* permalink
* 
* previousSha
* 
* pusher {
*   User
* }
* 
* Repository
*/

export const Push = (fields: string = "") => `
    push {
        id
        ${fields}
    }
` 
/**
* @description Github Graphql Pusher

* User
*/

export const Pusher = (fields: string = "") => `
    pusher {
        id
        ${fields}
    }
` 
/**
* @description Github Graphql Pusher
* name

* avatarUrl

* date

* email
* user {
    User
}
*/

export const Committer = (fields: string = "") => `
    committer {
        name
        ${fields}
    }
` 
/**
 * @description Github Graphql MatchingPullRequests
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
 * PullRequest
*/

export const MatchingPullRequests = (params: queryVariables.BasicFields) => `
    matchingPullRequests(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * CheckSuite
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
 * Repository
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
    checkRun {
        id
        name
        ${fields}
    }    
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
    statusContext {
        id
        state
        ${fields}
    }
`

/**
 * @description Github Graphql Context
 * @defaultVariables id
 * @fields 
 * avatarUrl
 * 
 * Commit
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
 * Commit
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
 * Commit
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
 * Repository
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

export const Milestone = (number?: number,fields: string = "") => `
    milestone ${number? `(number: ${number})`:""} {
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
    milestones(${params.query ? `query: ${params.query}` : ""} first: ${params.first} ${params.state ? `state: ${params.state}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}
    ${params.orderBy || params.direction? `, orderBy: { field: ${params.orderBy}, direction: ${params.direction}}`:""}) {
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
 * PullRequest
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
 * PullRequest
 * 
 * Repository
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
 * Review
*/

export const Reviews = (params: queryVariables.BasicFields) => `
    reviews(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
* @description Github Graphql SuggestedReviewers
* isAuthor

* isCommenter

* reviewer {
    User
}
*/
export const SuggestedReviewers = (fields: string = "") => `
    suggestedReviewers {
        ${fields}
    }
`
/**
* @description Github Graphql ViewerLatestReview
* Review
*/

export const ViewerLatestReview = (fields: string = "") => `
    viewerLatestReview {
        ${fields}
    }
`
/**
* @description Github Graphql ViewerLatestReviewRequest
* asCodeOwner

* databaseId

* id

* pullRequest {
    PullRequest
}

* requestedReviewer {
    onMannequin
    onTeam
    onUser
}
*/

export const ViewerLatestReviewRequest = (fields: string = "") => `
    viewerLatestReviewRequest {
        ${fields}
    }
`

/**
* @description Github Graphql Files 
* Review
*/

export const LatestReviews = (params: queryVariables.BasicFields) => `
    latestReviews(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""}
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
    lockable {
        id
        ${fields}
    }    
`
/**
 * @description Github Graphql Labelable
 * @fields
 * onLabels 
 * onIssue 
 * onPullRequest 
*/

export const Labelable = (fields: string = "") => `
    labelable {
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
    closable { 
        ${fields}
    }
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

export const Project = (number: number,fields: string = "") => `
    project (number: ${number}) {
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
    projects(first: ${params.first} ${params.excludePopular ? `, excludeFirst: ${params.excludeFirst}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""} 
    ${params.orderBy || params.direction? `, orderBy: { field: ${params.orderBy}, direction: ${params.direction}}`:""}) {
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
    version {
        id
        statistics {
            downloadsTotalCount
        }
        ${fields}
    }
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
 * Project
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
    column{
        id
        name
        ${fields}
    }
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
 * Project
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
    card{
        id
        state
        ${fields}
    }
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
    issueComment {
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
 * Comments
 * 
 * Commit
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
 * onBehalfOf
 * 
 * publishedAt
 * 
 * PullRequest
 * 
 * ReactionGroups
 * 
 * Reactions
 * 
 * Repository
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
 * UserContentEdits
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
    review {
        id
        ${fields}
    }    

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
    reactable {
        id
        ${fields}
    }    
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
    subscribable {
        id
        ${fields}
    }    
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
 * Reactable
 * 
 * User
 */

export const Reaction = (fields: string = "") => `
    reaction {
        id
        content
        ${fields}
    }    

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

export const Release = (tagName: string,fields: string = "") => `\
    release (tagName: "${tagName}") {
        name
        ${fields}
    }
    
`

/**
 * @description Github Graphql Releases
 * @fields Release
 */

export const Releases = (params: queryVariables.Releases) => `
    releases(${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} first: ${params.first} ${params.last ? `, last: ${params.last}` : ""}
    ${params.orderBy || params.direction? `, orderBy: { field: ${params.orderBy}, direction: ${params.direction}}`:""}) {
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
 * @description Github Graphql LatestRelease
 * @fields Release
 */

export const LatestRelease = (fields: string = "") => `
    latestRelease {
        id
        name
        ${fields}
    }   
 
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
 * Release
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
    licenseInfo {
        id
        name
        ${fields}
    }    
`


/**
 * @description Github Graphql Package
 * @defaultVariables id name
 * @queryArguments
 * LatestVersion {
 * 
 * packageType
 * 
 * Repository
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
    package {
        id
        name
        ${fields}
    }    

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
 * Repository
 * 
 * SecurityAdvisory
 * 
 * SecurityVulnerability 
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
 * @description Github Graphql CWES
 * @fields
 * cweId
 * 
 * description
 * 
 * id
 * 
 * name
 */

 export const CWES = (params: queryVariables.BasicFields) => `
    cwes(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * Vulnerabilities
 * 
 * withdrawnAt
 */


export const SecurityAdvisory = (fields: string = "") => `
    securityAdvisory {
        databaseId
        description
        ${fields}
    }    

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
    ${params.orderBy || params.direction? `, orderBy: { field: ${params.orderBy}, direction: ${params.direction}}`:""}) {
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
    vulnerability {
        severity
        ${fields}
    }
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
 * User 
*/

export const Watchers = (params: queryVariables.BasicFields) => `
    watchers(${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""}, first: ${params.first} ${params.last ? `, last: ${params.last}` : ""}) {
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
 * @description Github Graphql CodeOfConduct 
 * @fields
 * 
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

/**
 * @description Github Graphql Topic
 * @fields
 * 
 * id
 * 
 * name
 * 
 * RelatedTopics
 * 
 * stargazerCount
 * 
 * Stargazers
 * 
 * viewerHasStarred
 */

export const Topic = (fields:string = "") => `
    topic {
        name
        ${fields}
    }
`

/**
 * @description Github Graphql Topic
 * 
 * @fields
 * id
 * 
 * name
 * 
 * RelatedTopics
 * 
 * stargazerCount
 * 
 * Stargazers
 * 
 * viewerHasStarred
 */

 export const RelatedTopics = (first: number,fields:string = "") => `
    relatedTopics (first: ${first}) {
        name
        ${fields}
    }
`
/**
 * @description Github Graphql RepositoryTopics
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
 * url
 * 
 * id
 * 
 * Topic
 * resourcePath
 */

 export const RepositoryTopics = (params: queryVariables.BasicFields) => `
    repositoryTopics(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last:${params.last}` : ""}){
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
 * @description Github Graphql Stargazers
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
 * User
 */

export const Stargazers = (params: queryVariables.Stargazers) => `
    stargazers(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `, last:${params.last}` : ""}
    ){
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
 