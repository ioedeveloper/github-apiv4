/**
* @description Github Graphql onUser
* @defaultVariables id email
* @fields
** User
*/

 export const onUser = (fields: string) => `
	... on User {
		id
		email
		${fields}
 	}
`

/**
* @description Github Graphql onEnterpriseUserAccount
* @fields
** EnterpriseUserAccount
*/

export const onEnterpriseUserAccount = (fields: string = '') => `
    ... on EnterpriseUserAccount {
        ${fields}
    }
`

/**
* @description Github Graphql onMannequin
* @defaultVariables id email
* @fields
** avatarUrl
** createdAt
** databaseId
** login
** resourcePath
** updatedAt
** url
*/

export const onMannequin = (fields?: string) => `
	... on Mannequin {
		id
		email
		${fields}        
	}
`

/**
* @description Github Graphql onBot
* @defaultVariables id
* @fields
** avatarUrl
** createdAt
** databaseId
** login
** resourcePath
** updatedAt
** url
*/

export const onBot = (fields?: string) => `
	... on Bot {
		id
		email
		${fields}        
	}
`

/**
* @description Github Graphql onPullRequest  
* @fields
** PullRequest
*/

export const onPullRequest = (fields: string = "") => `
    ... on PullRequest {
        ${fields}
    }
`

/**
* @description Github Graphql onPullRequestReviewThread  
* @fields
** PullRequestReviewThread
*/

export const onPullRequestReviewThread = (fields: string = "") => `
    ... on PullRequestReviewThread {
        ${fields}
    }
`

/**
* @description Github Graphql onApp
* @defaultVariables id
* @fields
** avatarUrl
** App
*/

export const onApp = (fields: string = "") => `
	... on App {
		${fields}        
	}
`

/**
* @description Github Graphql onIssue  
* @fields
** Issue
*/

export const onIssue = (fields: string = "") => `
    ... on Issue {
        ${fields}
    }
`

/**
 * @description Github Graphql onGenericHovercardContext 
* @fields
** message
** octicon
*/

export const onGenericHovercardContext = (fields: string) => `
    ... on GenericHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onOrganizationTeamsHovercardContext 
* @fields
** message
** octicon
** RelevantTeams
** teamsResourcePath
** teamsUrl
** totalTeamCount
*/

export const onOrganizationTeamsHovercardContext = (fields: string) => `
    ... on OrganizationTeamsHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onOrganizationsHovercardContext 
* @fields
** message
** octicon
** RelevantOrganizations
** totalOrganizationCount
*/

export const onOrganizationsHovercardContext = (fields: string) => `
    ... on OrganizationsHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onReviewStatusHovercardContext 
* @fields
** reviewDecision
** message
** octicon
*/

export const onReviewStatusHovercardContext = (fields: string) => `
    ... on ReviewStatusHovercardContext {
        ${fields}        
    }
`

/**
* @description Github Graphql onViewerHovercardContext 
* @fields
** message
** octicon
** viewer { User }
*/

export const onViewerHovercardContext = (fields: string) => `
    ... on ViewerHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onUnknownSignature 
* @fields
** email
** isValid
** payload
** signature
** signer { User }
** state
** wasSignedByGitHub
*/

export const onUnknownSignature = (fields:string = "" ) => `
    ... on UnknownSignature {
        __typename
        ${fields}
    }
`

/**
* @description Github Graphql onSmimeSignature 
* @fields
** __typename
** email
** isValid
** payload
** signature
** signer { User }
** state
** wasSignedByGitHub
*/

export const onSmimeSignature = (fields:string = "" ) => `
    ... on SmimeSignature {
        __typename
        ${fields}
    }
`

/**
* @description Github Graphql onGpgSignature
* @fields
** keyId
** email
** isValid
** payload
** signature
** signer { User }
** state
** wasSignedByGitHub
*/

export const onGpgSignature = (fields:string = "" ) => `
    ... on GpgSignature {
        ${fields}
    }
`

/**
* @description Github Graphql onAddedToProjectEvent
* @fields
** actor { Owner }
** createdAt
** databaseId
** id
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
** actor { Owner }
** createdAt
** disabler { User }
** id
** pullRequest { PullRequest }
** reason
** reasonCode
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
* @fields    
** actor { Owner }
** createdAt
** disabler { User }
** id
** pullRequest { PullRequest }
** reason
** reasonCode
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
** actor { Owner }
** createdAt
** enabler { User }
** id
** pullRequest { PullRequest }
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
** actor { Owner }
** createdAt
** enabler { User }
** id
** pullRequest { PullRequest }
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
** actor{ Owner }
** createdAt
** id
** pullRequest { PullRequest }
** newBase
** oldBase
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
* @fields
** actor { Owner }
** assignable { Assignable }
** assignee { Owner }
** createdAt
** id
** user { User }
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
* @fields
** actor { Owner }
** baseRefName
** createdAt
** ClosedEvent
** id
** pullRequest { PullRequest }
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
** actor{ Owner }
** createdAt
** currentRefName
** databaseId
** id
** previousRefName
** pullRequest { PullRequest }
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
** actor { Owner }
** id
** createdAt
** databaseId
** deletedCommentAuthor
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
** actor { Owner }
** createdAt
** id
** isCrossRepository
** source { onIssue onPullRequest }
** subject { onIssue onPullRequest }
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
** actor { Owner }
** createdAt
** id
** pullRequest{ PullRequest }
** resourcePath
** url
*/

export const onConvertToDraftEvent = (fields: string = "") => `
    ... on ConvertToDraftEvent {
        ${fields}    
    }
`

/**
* @description Github Graphql onConvertedNoteToIssueEvent
* @fields
** actor { Owner }
** createdAt
** databaseId
** id
*/

export const onConvertedNoteToIssueEvent = (fields: string = "") => `
    ... on ConvertedNoteToIssueEvent {
        ${fields}    
    }
`

/**
* @description Github Graphql onDisconnectedEvent
* @fields
** actor { Owner }
** createdAt
** id
** isCrossRepository
** source { onIssue onPullRequest }
** subject { onIssue onPullRequest }
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
** actor { Owner }
** createdAt
** id
** pullRequest { PullRequest }
** newBase
** oldBase
*/

export const onAutomaticBaseChangeSucceededEvent = (fields: string = "") => `
    ... on AutomaticBaseChangeSucceededEvent {
        id
        ${fields}    
    }
`

/**
* @description Github Graphql onBaseRefForcePushedEvent
* @fields
** id
** afterCommit { Commit }
** beforeCommit { Commit }
** createdAt
** pullRequest { PullRequest }
** ref { Ref }
*/

export const onBaseRefForcePushedEvent = (fields: string = "") => `
    ... on BaseRefForcePushedEvent {
        ${fields}    
    }
`

/**
* @description Github Graphql onClosedEvent
* @fields
** actor { Owner }
** closable { Closable }
** closer { onCommit onPullRequest }
** createdAt
** id
** resourcePath
** url
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
* @fields
** Comments
** Commit
** id
** path
** position
** repository { Repository }
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
* @fields
** id
** actor { Owner }
** createdAt
** isCrossRepository
** referencedAt
** resourcePath
** source { onIssue onPullRequest }
** target { onIssue onPullRequest }
** url
** willCloseTarget
*/

export const onCrossReferencedEvent = (fields: string = "") => `
    ... on CrossReferencedEvent {
        url
        ${fields}
    }
`

/**
* @description Github Graphql onDemilestonedEvent
** id
** actor { Owner }
** createdAt
** milestoneTitle
** subject { onIssue onPullRequest }
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
* @fields
** id
** actor { Owner }
** createdAt
** databaseId
** deployment { Deployment }
** pullRequest { PullRequest }
** ref { Ref }
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
* @fields
** id
** actor
** createdAt
** deploymentStatus {
	** createdAt
	**  creator { Owner }
	** deployment { Deployment }
	** description
	** environmentUrl
	** id
	** logUrl
	** state
	** updatedAt
* }
** pullRequest { PullRequest }
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
* @fields
** id
** actor { Owner }
** createdAt
** headRefName
** headRef { Ref }
** pullRequest { PullRequest }
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
* @fields
** actor { Owner }
** afterCommit { Commit }
** beforeCommit { Commit }
** id
** pullRequest { PullRequest }
** ref { Ref }
*/

export const onHeadRefForcePushedEvent = (fields: string = "") => `
    ... on HeadRefForcePushedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onHeadRefRestoredEvent
* actor { Owner }
** createAt
** id
** pullRequest { PullRequest }
*/

export const onHeadRefRestoredEvent = (fields: string = "") => `
    ... on HeadRefRestoredEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onLabeledEvent
** actor { Owner }
** createdAt
** id
** label { Label }
** labelable { Labels onIssue onPullRequest }
*/

export const onLabeledEvent = (fields: string = "") => `
    ... on LabeledEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onLockedEvent
* @fields
** createdAt
** creator { Owner }
** id
** lockReason
** lockable { activeLockReason locked { OnIssue onPullRequest } }
*/

export const onLockedEvent = (fields: string = "") => `
    ... on LockedEvent{
        id
        ${fields}
    }
`

/**
* @description Github Graphql onMergedEvent
* @fields
** actor { Owner }
** Commit
** createdAt
** id
** mergeRef { Ref }
** mergeName
** pullRequest { PullRequest }
** resourcePath
** url
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
* @fields
** id
** actor { Owner }
** createdAt
** milestoneTitle
** subject { onIssue onPullRequest }
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
* @fields
** actor { Owner }
** commit { Commit }
** commitRepository { Repository }
** createdAt
** id
** isCrossRepository
** isDirectReference
** subject { onIssue onPullRequest }
*/

export const onReferencedEvent = (fields: string = "") => `
    ... on ReferencedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRenamedTitleEvent
* @fields
** actor { Owner }
** createdAt
** id
** currentTitle
** subject { onIssue onPullRequest }
** previousTitle
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
* @fields
** actor { Owner }
** id
** createdAt
** closable { Closable }
*/

export const onReopenedEvent = (fields: string = "") => `
    ... on ReopenedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onReviewDismissedEvent
* @fields
** actor { Owner }
** createdAt
** databaseId
** dismissalMessage
** dismissalMessageHTML
** id
** previousReviewState
** pullRequest { PullRequest }
** pullRequestCommit {
	** Commit
	** id
	** pullRequest { PullRequest }
	** resourcePath
	** url
* }
** resourcePath
** review { Review }
** url
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
* @fields
** actor { Owner }
** createdAt
** id
** pullRequest { PullRequest }
** requestedReviewer { onMannequin onTeam onUser }
*/

export const onReviewRequestRemovedEvent = (fields: string = "") => `
    ... on ReviewRequestRemovedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onReviewRequestedEvent  
* @fields
**  actor { Owner }
** createdAt
** id
** pullRequest { PullRequest }
** requestedReviewer { onMannequin onTeam onUser }
*/

export const onReviewRequestedEvent = (fields: string = "") => `
    ... on ReviewRequestedEvent  {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onSubscribedEvent  
* @fields
** actor { Owner }
** createdAt
** id
** subscribable { Subscribable }
*/

export const onSubscribedEvent = (fields: string = "") => `
    ... on SubscribedEvent {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onUnassignedEvent 
* @fields
** id
** actor { Owner }
** assignable { Assignees onIssue onPullRequest }
* assignee { onBot onMannequin onOrganization onUser }
* createdAt
* user { User }
*/

export const onUnassignedEvent = (fields: string = "") => `
    ... on UnassignedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onUnlabeledEvent
* @fields
** actor { Owner }
** createdAt
** id
** label { Label }
** labelable { Labels onIssue onPullRequest }
*/

export const onUnlabeledEvent = (fields: string = "") => `
    ... on UnlabeledEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onUnlockedEvent 
* @fields
** actor { Owner }
** createdAt
** id
** lockable { activeLockReason locked onIssue onPullRequest }
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
** actor { Owner}
** canonical { onIssue onPullRequest }
** createdAt
** duplicate
** id
** isCrossRepository
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
* actor { Owner }
** createdAt
** databaseId
** id
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
** actor { Owner }
** createdAt
** id
** issue { Issue }
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
** actor { Owner}
** createdAt
** id
** issue { Issue }
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
** commit { Commit }
** id
** pullRequest { PullRequest }
** resourcePath
** url
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
** comments { Comments }
** commit { Commit }
** id
** path
** position
** pullRequest { PullRequest }
** repository { Repository }
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
 ** PullRequestReview
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
** __typename
** createdAt
** lastSeenCommit { Commit }
** pullRequest { PullRequest }
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
** actor { Owner }
** createdAt
** id
** pullRequest { PullRequest }
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
** actor { Owner }
** createdAt
** databaseId
** id
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
** id
** actor { Owner }
** createdAt
** fromRepository { Repository }
** issue { Issue }
*/

export const onTransferredEvent = (fields: string = "") => `
    ... on TransferredEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onUnmarkedAsDuplicateEvent
* @fields
** actor { Owner }
** canonical { onIssue onPullRequest }
** createdAt
** duplicate { onIssue onPullRequest }
** id
** isCrossRepository
*/

export const onUnmarkedAsDuplicateEvent = (fields: string = "") => `
    ... on UnmarkedAsDuplicateEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onUnsubscribedEvent
* @fields
* subscribable { Subscribable }
** actor { Owner }
** createdAt
** id
*/

export const onUnsubscribedEvent = (fields: string = "") => `
    ... on UnsubscribedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onUserBlockedEvent
* @fields
** actor
** blockDuration
** createdAt
** id
** subject { User }
*/

export const onUserBlockedEvent = (fields: string = "") => `
    ... on UserBlockedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onIssueComment
* @fields
** IssueComment
*/

 export const onIssueComment = (fields: string = "") => `
    ... on IssueComment {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onCommit  
* @fields
** Commit 
*/

 export const onCommit = (fields: string = "") => `
    ... on Commit {
        ${fields}
    }
`

/**
* @description Github Graphql onTree  
* @fields
** Tree
*/

export const onTree = (fields: string = "") => `
	... on Tree {
		${fields}
	}
`

/**
 * @description Github Graphql onBlob  
 * @fields
 ** Blob
 */

 export const onBlob = (fields: string = "") => `
	... on Blob {
		${fields}
	}
`

/**
* @description Github Graphql onTag  
* @fields
** Tag
*/

 export const onTag = (fields: string = "") => `
	... on Tag {
		${fields}
	}
`

/**
* @description Github Graphql onCheckRun  
* @fields 
** CheckRun
*/

export const onCheckRun = (fields: string = "") => `
	... on CheckRun {
		${fields}
	}
`


/**
* @description Github Graphql onStatusContext  
* @defaultVariables totalCount
* @fields 
** StatusContext
*/

 export const onStatusContext = (fields: string = "") => `
	... on StatusContext {
		${fields}
	}
`
