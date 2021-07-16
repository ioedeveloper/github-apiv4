import * as types from './types'

/**
 * @description Github Graphql Mutation for AcceptEnterpriseAdministratorInvitation
 * @mutationFields
 ** clientMutationId string
 ** invitationId string
 * @fields Invitation
 */

export const AcceptEnterpriseAdministratorInvitation = (mutationFields: types.AcceptEnterpriseAdministratorInvitationInput, invitation?: string) => `
    mutation AcceptEnterpriseAdministratorInvitationInput {
        acceptEnterpriseAdministratorInvitation  (input:{invitationId:"${mutationFields.invitationId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${invitation}
        }
    }
`

/**
 * @description Github Graphql Mutation for AcceptTopicSuggestion
 * @mutationFields
 ** clientMutationId string
 ** name string
 ** repositoryId string
 * @fields Topic
 */

export const AcceptTopicSuggestion = (mutationFields: types.AcceptTopicSuggestionInput, topic?: string) => `
    mutation AcceptTopicSuggestionInput {
        acceptTopicSuggestion  (input:{repositoryId: "${mutationFields.repositoryId}", name:"${mutationFields.name}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${topic}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddAssigneesToAssignable
 * @mutationFields
 ** assigneeIds string[]
 ** assignableId string
 ** clientMutationId string
 * @fields Assigness
 */

export const AddAssigneesToAssignable = (mutationFields: types.AddAssigneesToAssignableInput, assignee?: string) => `
    mutation AddAssigneesToAssignableInput {
        addAssigneesToAssignable  (input:{assignableId: "${mutationFields.assignableId}" ${mutationFields.assigneeIds ? `, assigneeIds: "${mutationFields.assigneeIds}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${assignee}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddComment
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** subjectId string
 * @fields Subject
 */

export const AddComment = (mutationFields: types.AddCommentInput, comment?: string) => `
    mutation AddCommentInput {
        addComment  (input:{body: "${mutationFields.body}"  subjectId: "${mutationFields.subjectId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${comment}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddEnterpriseSupportEntitlement
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 ** login string
 * @fields Enterprise
 */

export const AddEnterpriseSupportEntitlement = (mutationFields: types.AddEnterpriseSupportEntitlementInput, support?: string) => `
    mutation AddEnterpriseSupportEntitlementInput {
        addEnterpriseSupportEntitlement  (input:{enterpriseId: "${mutationFields.enterpriseId}", login: "${mutationFields.login}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${support}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddLabelsToLabelable
 * @mutationFields
 ** clientMutationId string
 ** labelIds string[]
 ** labelableId string
 * @fields Labels
 */

export const AddLabelsToLabelable = (mutationFields: types.LabelsToLabelableInput, support?: string) => `
    mutation LabelsToLabelableInput {
        addLabelsToLabelable  (input:{labelableId: "${mutationFields.labelableId}", labelIds: ${mutationFields.labelIds} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${support}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddProjectCard
 * @mutationFields
 ** clientMutationId string
 ** contentId string
 ** note string
 ** projectColumnId string
 * @fields ProjectCard
 */

export const AddProjectCard = (mutationFields: types.AddProjectCardInput, card?: string) => `
    mutation AddProjectCardInput {
        addProjectCard  (input:{${mutationFields.note ? `note: "${mutationFields.note}"` : ''} ${mutationFields.contentId ? `contentId: "${mutationFields.contentId}"` : ''} ${mutationFields.projectColumnId ? `, projectColumnId: "${mutationFields.projectColumnId}"` : ''}
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${card}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddProjectColumn
 * @mutationFields
 ** clientMutationId string
 ** projectId string
 ** name string
 * @fields Project
 */

export const AddProjectColumn = (mutationFields: types.AddProjectColumnInput, card?: string) => `
    mutation AddProjectColumnInput {
        addProjectColumn  (input:{name: "${mutationFields.name}" ${mutationFields.projectId ? `, projectId: "${mutationFields.projectId}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${card}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddPullRequestReviewComment
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** projectId string
 ** commitOID string
 ** inReplyTo string
 ** path string
 ** position number
 ** pullRequestId string
 ** pullRequestReviewId string
 * @fields Comment
 */

export const AddPullRequestReviewComment = (mutationFields: types.AddPullRequestReviewCommentInput, pullRequest?: string) => `
    mutation AddPullRequestReviewCommentInput {
        addPullRequestReviewComment  (input:{body: "${mutationFields.body}", pullRequestId: "${mutationFields.pullRequestId}", ${mutationFields.pullRequestReviewId ? `pullRequestReviewId:"${mutationFields.pullRequestReviewId}"` : ''} 
        ${mutationFields.commitOID ? `, commitOID: "${mutationFields.commitOID}"` : ''} ${mutationFields.inReplyTo ? `, inReplyTo: "${mutationFields.inReplyTo}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
        ${mutationFields.position ? `, position: ${mutationFields.position}` : ''} ${mutationFields.path ? `, path: "${mutationFields.path}"` : ''} ${mutationFields.pullRequestReviewId ? `, pullRequestReviewId: "${mutationFields.pullRequestReviewId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddPullRequestReview
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** comments DraftPullRequestReviewComment[]
 ** commitOID GitObjectID
 ** event "APPROVE" | "COMMENT" | "DISMISS" | "REQUEST_CHANGES"
 ** path string
 ** pullRequestId string
 ** threads DraftPullRequestReviewThread[]
 * @fields PullRequestReview
 */

export const AddPullRequestReview = (mutationFields: types.AddPullRequestReviewInput, pullRequestReview?: string) => `
    mutation AddPullRequestReviewInput {
        addPullRequestReview  (input:{body: "${mutationFields.body}", pullRequestId: "${mutationFields.pullRequestId}" ${mutationFields.comments ? `, comments: "${mutationFields.comments}"` : ''} 
            ${mutationFields.commitOID ? `, commitOID: "${mutationFields.commitOID}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
            ${mutationFields.event ? `, event: ${mutationFields.event}` : ''} ${mutationFields.position ? `, position: ${mutationFields.position}` : ''} ${mutationFields.path ? `, path: "${mutationFields.path}"` : ''}}){
            ${pullRequestReview}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddPullRequestReviewThread
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** line number
 ** path string
 ** pullRequestId string
 ** pullRequestReviewId string
 ** side string
 ** startLine number
 ** pullRequestId string
 ** startSide "LEFT" | "RIGHT"
 * @fields Thread
 */

export const AddPullRequestReviewThread = (mutationFields: types.AddPullRequestReviewThreadInput, thread?: string) => `
    mutation AddPullRequestReviewThreadInput {
        addPullRequestReviewThread (input:{body: "${mutationFields.body}", pullRequestId: "${mutationFields.pullRequestId}" ${mutationFields.path ? `, path: "${mutationFields.path}"` : ''} ${mutationFields.position ? `, position: ${mutationFields.position}` : ''} 
        ${mutationFields.line ? `, line: ${mutationFields.line}` : ''} ${mutationFields.side ? `, side: ${mutationFields.side}` : ''} ${mutationFields.startLine ? `, startLine: ${mutationFields.startLine}` : ''} ${mutationFields.pullRequestReviewId ? `, pullRequestReviewId: ${mutationFields.pullRequestReviewId}` : ''} 
        ${mutationFields.startSide ? `, startSide: "${mutationFields.startSide}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
        }){
            ${thread}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddReaction
 * @mutationFields
 ** content "CONFUSED" | "EYES" | "HEART" | "HOORAY" | "LAUGH" | "ROCKET" | "THUMBS_DOWN" | "THUMBS_UP"
 ** subjectId string
 * @fields Reaction
 */

export const AddReaction = (mutationFields: types.AddReactionInput, reaction?: string) => `
    mutation AddReactionInput {
        addReaction  (input:{content: ${mutationFields.content}, subjectId: "${mutationFields.subjectId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${reaction}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddStar
 * @mutationFields
 ** clientMutationId string
 ** starrableId string
 * @fields Star
 */

export const AddStar = (mutationFields: types.AddStarInput, star?: string) => `
    mutation AddStarInput {
        addStar (input:{starrableId: "${mutationFields.starrableId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${star}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddVerifiableDomain
 * @mutationFields
 ** clientMutationId string
 ** domain string
 ** ownerId string
 * @fields Reaction
 */

export const AddVerifiableDomain = (mutationFields: types.AddVerifiableDomainInput, domain?: string) => `
 mutation AddVerifiableDomainInput {
     addVerifiableDomain  (input:{domain: "${mutationFields.domain}", ownerId: "${mutationFields.ownerId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
         ${domain}
     }
 }
`

/**
 * @description Github Graphql Mutation for ApproveVerifiableDomain
 * @mutationFields
 ** clientMutationId string
 ** id string
 ** domain string
 * @fields Domain
 */

export const ApproveVerifiableDomain = (mutationFields: types.ApproveVerifiableDomainInput, domain?: string) => `
    mutation ApproveVerifiableDomainInput {
        approveVerifiableDomain  (input:{id: "${mutationFields.id}", domain: "${mutationFields.domain}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${domain}
        }
    }
`

/**
 * @description Github Graphql Mutation for ArchiveRepositoryInput
 * @mutationFields
 ** clientMutationId string
 ** repositoryId string
 * @fields Repository
 */

export const ArchiveRepository = (mutationFields: types.ArchiveRepositoryInput, star?: string) => `
    mutation ArchiveRepositoryInput {
        archiveRepository  (input:{repositoryId: "${mutationFields.repositoryId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${star}
        }
    }
`

/**
 * @description Github Graphql Mutation for AuditLogOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 * @fields AuditLog
 */

export const AuditLogOrder = (mutationFields: types.AuditLogOrder, auditLog?: string) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for CancelEnterpriseAdminInvitation
 * @mutationFields
 ** clientMutationId string
 ** invitationId string
 * @fields Invitation
 */

export const CancelEnterpriseAdminInvitation = (mutationFields: types.CancelEnterpriseAdminInvitationInput, invitation?: string) => `
    mutation CancelEnterpriseAdminInvitationInput {
        cancelEnterpriseAdminInvitation  (input:{invitationId: "${mutationFields.invitationId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${invitation}
        }
    }
`

/**
 * @description Github Graphql Mutation for ChangeUserStatus
 * @mutationFields
 ** clientMutationId string
 ** emoji string
 ** expiresAt string
 ** limitedAvailability boolean
 ** message string
 ** organizationId string
 * @fields Status
 */

export const ChangeUserStatus = (mutationFields: types.ChangeUserStatusInput, status?: string) => `
    mutation ChangeUserStatusInput {
        changeUserStatus  (input:{message: "${mutationFields.message}" ${mutationFields.emoji ? `, emoji: "${mutationFields.emoji}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}
            ${mutationFields.expiresAt ? `, expiresAt: "${mutationFields.expiresAt}"` : ''} ${mutationFields.limitedAvailability ? `, limitedAvailability: ${mutationFields.limitedAvailability}` : ''} ${mutationFields.organizationId ? `, organizationId: ${mutationFields.organizationId}"` : ''}}){
            ${status}
        }
    }
`

/**
 * @description Github Graphql Mutation for CheckAnnotationData
 * @mutationFields
 ** annotationLevel "FAILURE" | "NOTICE" | "WARNING"
 ** location CheckAnnotationRange
 ** message string
 ** path string
 ** rawDetails string
 ** title string
 */

export const CheckAnnotationData = (mutationFields: types.CheckAnnotationData) => `
    { annotationLevel:${mutationFields.annotationLevel} ${mutationFields.location ? `, location: ${mutationFields.location}` : ''} ${mutationFields.message ? `, message: "${mutationFields.message}"` : ''}
        ${mutationFields.path ? `, path: "${mutationFields.path}"` : ''} ${mutationFields.rawDetails ? `, rawDetails: "${mutationFields.rawDetails}"` : ''} ${mutationFields.title ? `, title: "${mutationFields.title}"` : ''} }
`

/**
 * @description Github Graphql Mutation for CheckAnnotationRange
 * @mutationFields
 ** endColumn number
 ** endLine number
 ** startColumn number
 ** startLine number
 */

export const CheckAnnotationRange = (mutationFields: types.CheckAnnotationRange) => `
    { ${mutationFields.startColumn ? `startColumn: ${mutationFields.startColumn}` : ''} ${mutationFields.endColumn ? `, endColumn: ${mutationFields.endColumn}` : ''} ${mutationFields.startLine ? `startLine: ${mutationFields.startLine}` : ''}
        ${mutationFields.endLine ? `, endLine: ${mutationFields.endLine}` : ''} }
`

/**
 * @description Github Graphql Mutation for CheckRunAction
 * @mutationFields
 ** description string
 ** identifier string
 ** label string
 */

export const CheckRunAction = (mutationFields: types.CheckRunAction) => `
    {${mutationFields.description ? `description: "${mutationFields.description}"` : ''} identifier: "${mutationFields.identifier}" label: "${mutationFields.label}" }
`

/**
 * @description Github Graphql Mutation for CheckRunFilter
 * @mutationFields
 ** appId number
 ** checkName string
 ** checkType "ALL" | "LATEST"
 ** status "COMPLETED" | "IN_PROGRESS" | "QUEUED" | "REQUESTED" | "WAITING"
 */

export const CheckRunFilter = (mutationFields: types.CheckRunFilter, checkrun?: string) => `
 { ${mutationFields.appId ? `appId: ${mutationFields.appId}` : ''} ${mutationFields.checkName ? `, checkName: "${mutationFields.checkName}"` : ''} ${mutationFields.checkType ? `, checkType: "${mutationFields.checkType}"` : ''}
    ${mutationFields.status ? `, status: "${mutationFields.status}"` : ''} }
`

/**
 * @description Github Graphql Mutation for CheckRunOutput
 * @mutationFields
 ** annotations CheckAnnotationData
 ** images CheckRunOutputImage
 ** summary string
 ** text string
 ** title string
 */

export const CheckRunOutput = (mutationFields: types.CheckRunOutput) => `
    { annotations: ${mutationFields.annotations}, images: ${mutationFields.images} summary: "${mutationFields.summary}",
        text: "${mutationFields.text}" title: "${mutationFields.title}" }
`

/**
 * @description Github Graphql Mutation for CheckRunOutputImage
 * @mutationFields
 ** alt string
 ** caption string
 ** imageUrl string
 */

export const CheckRunOutputImage = (mutationFields: types.CheckRunOutputImage) => `
    { alt: "${mutationFields.alt}", imageUrl: "${mutationFields.imageUrl}", caption: "${mutationFields.caption}" }
`

/**
 * @description Github Graphql Mutation for CheckSuiteAutoTriggerPreference
 * @mutationFields
 ** appId string
 ** setting boolean
 * @fields CheckRun
 */

export const CheckSuiteAutoTriggerPreference = (mutationFields: types.CheckSuiteAutoTriggerPreference, checkrun?: string) => `
    { appId: "${mutationFields.appId}", setting: ${mutationFields.setting} }
`

/**
 * @description Github Graphql Mutation for CheckSuiteFilter
 * @mutationFields
 ** appId number
 ** checkName boolean
 */

export const CheckSuiteFilter = (mutationFields: types.CheckSuiteFilter, checkrun?: string) => `
    { appId: "${mutationFields.appId}", setting: "${mutationFields.checkName}" }
`

/**
 * @description Github Graphql Mutation for ClearLabelsFromLabelable
 * @mutationFields
 ** clientMutationId string
 ** labelableId string
 * @fields Labelable
 */

export const ClearLabelsFromLabelable = (mutationFields: types.ClearLabelsFromLabelableInput, labelable?: string) => `
    mutation ClearLabelsFromLabelableInput {
        clearLabelsFromLabelable  (input:{ labelableId: "${mutationFields.labelableId}", ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
            ${labelable}
        }
    }
`

/**
 * @description Github Graphql Mutation for CloneProject
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** includeWorkflows boolean
 ** name string
 ** public boolean
 ** sourceId string
 ** targetOwnerId string
 * @fields Project
 */

export const CloneProject = (mutationFields: types.CloneProjectInput, project?: string) => `
    mutation CloneProjectInput {
        cloneProject  (input:{body:"${mutationFields.body}", includeWorkflows: ${mutationFields.includeWorkflows} 
            ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.public ? `, public: ${mutationFields.public}` : ''}
            ${mutationFields.targetOwnerId ? `, targetOwnerId: "${mutationFields.targetOwnerId}"` : ''} ${mutationFields.sourceId ? `, sourceId: "${mutationFields.sourceId}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for CloneTemplateRepository
 * @mutationFields
 ** description string
 ** clientMutationId string
 ** includeAllBranches boolean
 ** name string
 ** ownerId string
 ** repositoryId string
 ** visibility RepositoryVisibility
 * @fields Repository
 */

export const CloneTemplateRepository = (mutationFields: types.CloneTemplateRepositoryInput, repository?: string) => `
 mutation CloneTemplateRepositoryInput {
    cloneTemplateRepository  (input:{ name: "${mutationFields.name}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.description ? `, description:"${mutationFields.description}"` : ''}
    ${mutationFields.includeAllBranches ? `, includeAllBranches: ${mutationFields.includeAllBranches}` : ''} ${mutationFields.ownerId ? `, ownerId: "${mutationFields.ownerId}"` : ''} 
    ${mutationFields.visibility ? `, visibility: ${mutationFields.visibility}` : ''} }){
         ${repository}
     }
 }
`

/**
 * @description Github Graphql Mutation for CloseIssue
 * @mutationFields
 ** clientMutationId string
 ** issueId string
 * @fields Issue
 */

export const CloseIssue = (mutationFields: types.CloseIssueInput, issue?: string) => `
    mutation CloseIssueInput {
        closeIssue (input:{ issueId: "${mutationFields.issueId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for ClosePullRequest
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 * @fields Issue
 */

export const ClosePullRequest = (mutationFields: types.ClosePullRequestInput, pullRequest?: string) => `
 mutation ClosePullRequestInput {
    closePullRequest (input:{ pullRequestId: "${mutationFields.pullRequestId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${pullRequest}
     }
 }
`

/**
 * @description Github Graphql Mutation for CommitAuthor
 * @mutationFields
 ** emails string[]
 ** id string
 */

export const CommitAuthor = (mutationFields: types.CommitAuthor) => `
    { emails: ${mutationFields.emails} id: "${mutationFields.id}" }
`

/**
 * @description Github Graphql Mutation for CommitContributionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field: "COMMIT_COUNT" | "OCCURRED_AT"
 * @fields Issue
 */

export const CommitContributionOrder = (mutationFields: types.CommitContributionOrder) => `
    { commitContributionOrder { direction: ${mutationFields.direction} field: ${mutationFields.field}} }
`

/**
 * @description Github Graphql Mutation for ContributionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 */

export const ContributionOrder = (mutationFields: types.Direction) => `
    { contributionOrder { direction: ${mutationFields.direction} } }
`

/**
 * @description Github Graphql Mutation for ConvertProjectCardNoteToIssue
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** projectCardId string
 ** repositoryId string
 ** title string
 * @fields ProjectCard
 */

export const ConvertProjectCardNoteToIssue = (mutationFields: types.ConvertProjectCardNoteToIssueInput, projectCard?: string) => `
    mutation ConvertProjectCardNoteToIssueInput {
        convertProjectCardNoteToIssue (input:{body: "${mutationFields.body}", ${mutationFields.projectCardId ? `, projectCardId: "${mutationFields.projectCardId}"` : ''} 
        ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''} ${mutationFields.title ? `, title: "${mutationFields.title}"` : ''}
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${projectCard}
        }
    }
`

/**
 * @description Github Graphql Mutation for ConvertPullRequestToDraft
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 * @fields PullRequest
 */

export const ConvertPullRequestToDraft = (mutationFields: types.ConvertPullRequestToDraftInput, pullRequest?: string) => `
    mutation ConvertPullRequestToDraftInput {
        convertPullRequestToDraft (input:{ pullRequestId : "${mutationFields.pullRequestId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateBranchProtectionRule
 * @mutationFields
 ** allowsDeletions boolean
 ** allowsForcePushes boolean
 ** clientMutationId string
 ** dismissesStaleReviews boolean
 ** isAdminEnforced boolean
 ** pattern string
 ** pushActorIds string
 ** repositoryId string
 ** requiredApprovingReviewCount number
 ** requiredStatusCheckContexts string[]
 ** requiresApprovingReviews boolean
 ** requiresCodeOwnerReviews boolean
 ** requiresCommitSignatures boolean
 ** requiresLinearHistory boolean
 ** requiresStatusChecks boolean
 ** requiresStrictStatusChecks boolean
 ** restrictsPushes boolean
 ** restrictsReviewDismissals boolean
 ** reviewDismissalActorIds string[]
 * @fields BranchProtectionRule
 */

export const CreateBranchProtectionRule = (mutationFields: types.CreateBranchProtectionRuleInput, branchProtectionRule?: string) => `
    mutation CreateBranchProtectionRuleInput {
        createBranchProtectionRule (input:{repositoryId: "${mutationFields.repositoryId}", pattern: "${mutationFields.pattern}" ${mutationFields.allowsDeletions !== undefined ? `, allowsDeletions: ${mutationFields.allowsDeletions}` : ''}, 
            ${mutationFields.allowsForcePushes !== undefined ? `, allowsForcePushes: ${mutationFields.allowsForcePushes}` : ''} ${mutationFields.dismissesStaleReviews !== undefined ? `, dismissesStaleReviews: ${mutationFields.dismissesStaleReviews}` : ''} 
            ${mutationFields.isAdminEnforced !== undefined ? `, isAdminEnforced: ${mutationFields.isAdminEnforced}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
                ${mutationFields.pushActorIds ? `, pushActorIds: ${mutationFields.pushActorIds}` : ''} 
                ${mutationFields.requiredApprovingReviewCount !== undefined ? `, requiredApprovingReviewCount: ${mutationFields.requiredApprovingReviewCount}` : ''} ${mutationFields.requiredStatusCheckContexts ? `, requiredStatusCheckContexts: ${mutationFields.requiredStatusCheckContexts}` : ''}
                ${mutationFields.requiresApprovingReviews !== undefined ? `, requiresApprovingReviews: ${mutationFields.requiresApprovingReviews}` : ''} ${mutationFields.requiresCodeOwnerReviews !== undefined ? `, requiresCodeOwnerReviews: ${mutationFields.requiresCodeOwnerReviews}` : ''} 
                ${mutationFields.requiresCommitSignatures !== undefined ? `, requiresCommitSignatures: ${mutationFields.requiresCommitSignatures}` : ''} ${mutationFields.requiresLinearHistory !== undefined ? `, requiresLinearHistory : ${mutationFields.requiresLinearHistory}` : ''}
                ${mutationFields.requiresStatusChecks !== undefined ? `, requiresStatusChecks: ${mutationFields.requiresStatusChecks}` : ''} ${mutationFields.requiresStrictStatusChecks !== undefined ? `, requiresStrictStatusChecks: ${mutationFields.requiresStrictStatusChecks}` : ''} 
                ${mutationFields.restrictsPushes !== undefined ? `, restrictsPushes: ${mutationFields.restrictsPushes}` : ''} ${mutationFields.restrictsReviewDismissals ? `, restrictsReviewDismissals: ${mutationFields.restrictsReviewDismissals}` : ''} 
                ${mutationFields.reviewDismissalActorIds ? `, reviewDismissalActorIds: ${mutationFields.reviewDismissalActorIds}` : ''}}){
            ${branchProtectionRule}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateCheckRun
 * @mutationFields
 ** actions CheckRunAction[]
 ** clientMutationId string
 ** completedAt DateTime
 ** conclusion 'ACTION_REQUIRED' | 'CANCELLED' | 'FAILURE' | 'NEUTRAL' | 'SKIPPED' | 'STALE' | 'STARTUP_FAILURE' | 'SUCCESS' | 'TIMED_OUT'
 ** detailsUrl string
 ** externalId string
 ** headSha GitObjectID
 ** name string
 ** output CheckRunOutput
 ** repositoryId string
 ** startedAt DateTime
 ** status 'COMPLETED' | 'IN_PROGRESS' | 'QUEUED' | 'WAITING'
 * @fields CheckRun
 */

export const CreateCheckRun = (mutationFields: types.CreateCheckRunInput, checkRun?: string) => `
    mutation CreateCheckRunInput {
        createCheckRun (input:{actions: [${mutationFields.actions}],  conclusion: ${mutationFields.conclusion} ${mutationFields.completedAt ? `, completedAt: "${mutationFields.completedAt}"` : ''} 
                ${mutationFields.detailsUrl ? `, detailsUrl : "${mutationFields.detailsUrl}"` : ''} ${mutationFields.externalId ? `, externalId: "${mutationFields.externalId}"` : ''}
                ${mutationFields.headSha ? `, headSha: "${mutationFields.headSha}"` : ''} ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.output ? `, output: ${mutationFields.output}` : ''}
                ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''} ${mutationFields.startedAt ? `, startedAt: "${mutationFields.startedAt}"` : ''}
                ${mutationFields.status ? `, status: ${mutationFields.status}` : ''} }){
            ${checkRun}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateCheckSuite
 * @mutationFields
 ** clientMutationId string
 ** headSha string
 ** repositoryId string
 * @fields CheckSuite
 */

export const CreateCheckSuite = (mutationFields: types.CreateCheckSuiteInput, checkSuite?: string) => `
    mutation CreateCheckSuiteInput {
        createCheckSuite (input:{ headSha : "${mutationFields.headSha}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${checkSuite}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateContentAttachment
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** contentReferenceId string
 ** title string
 * @fields ContentAttachment
 */

export const CreateContentAttachment = (mutationFields: types.CreateContentAttachmentInput, contentAttachment?: string) => `
    mutation CreateContentAttachmentInput {
        createContentAttachment (input:{ body: "${mutationFields.body}", contentReferenceId: "${mutationFields.contentReferenceId}", title: "${mutationFields.title}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${contentAttachment}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateEnterpriseOrganization
 * @mutationFields
 ** adminLogins string
 ** clientMutationId string
 ** billingEmail string
 ** enterpriseId string
 ** login string
 ** profileName string
 * @fields Organization
 */

export const CreateEnterpriseOrganization = (mutationFields: types.CreateEnterpriseOrganizationInput, repository?: string) => `
    mutation CreateEnterpriseOrganizationInput {
        createEnterpriseOrganization (input:{ login: "${mutationFields.login}", enterpriseId: "${mutationFields.enterpriseId}", adminLogins: [${mutationFields.adminLogins}], 
        billingEmail: "${mutationFields.billingEmail}", profileName: "${mutationFields.profileName}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${repository}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateIpAllowListEntry
 * @mutationFields
 ** allowListValue string (An IP address or range of addresses in CIDR notation)
 ** clientMutationId string
 ** isActive boolean
 ** name string
 ** ownerId string
 * @fields IpAllowList
 */

export const CreateIpAllowListEntry = (mutationFields: types.CreateIpAllowListEntryInput, ipAllowList?: string) => `
    mutation CreateIpAllowListEntryInput {
        createIpAllowListEntry (input:{ allowListValue: "${mutationFields.allowListValue}", isActive: ${mutationFields.isActive}, name: "${mutationFields.name}",
            ownerId: "${mutationFields.ownerId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${ipAllowList}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateIssue
 * @mutationFields
 ** assigneeIds string[]
 ** body string
 ** clientMutationId string
 ** issueTemplate string
 ** labelIds string[]
 ** milestoneId string
 ** projectIds string[]
 ** repositoryId string
 ** title string
 * @fields Issue
 */

export const CreateIssue = (mutationFields: types.IssueMutation, issue?: string) => `
    mutation CreateIssueInput {
        createIssue (input:{body:"${mutationFields.body}", repositoryId:"${mutationFields.repositoryId}", title:"${mutationFields.title}" 
            ${mutationFields.assigneeIds ? `, assigneeIds: ${mutationFields.assigneeIds}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
            ${mutationFields.issueTemplate ? `, issueTemplate: ${mutationFields.issueTemplate}` : ''} ${mutationFields.labelIds ? `, labelIds: "${mutationFields.labelIds}"` : ''} ${mutationFields.milestoneId ? `, milestoneId: "${mutationFields.milestoneId}"` : ''}
            ${mutationFields.projectIds ? `, projectIds: "${mutationFields.projectIds}"` : ''} }){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateProject
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** name string
 ** ownerId string
 ** repositoryIds string[]
 ** template "AUTOMATED_KANBAN_V2" | "AUTOMATED_REVIEWS_KANBAN" | "BASIC_KANBAN" | "BUG_TRIAGE"
 * @fields Project
 */

export const CreateProject = (mutationFields: types.CreateProjectInput, project?: string) => `
    mutation CreateProjectInput {
        createProject (input:{ body: "${mutationFields.body}", name: "${mutationFields.name}" ${mutationFields.ownerId ? `, ownerId: "${mutationFields.ownerId}"` : ''} ${mutationFields.repositoryIds ? `, repositoryIds: ${mutationFields.repositoryIds}` : ''}
        ${mutationFields.template ? `, template: ${mutationFields.template}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreatePullRequest
 * @mutationFields
 ** baseRefName string
 ** body string
 ** clientMutationId string
 ** draft boolean
 ** headRefName string
 ** maintainerCanModify boolean
 ** repositoryId string
 ** title string
 * @fields PullRequest
 */

export const CreatePullRequest = (mutationFields: types.CreatePullRequestInput, pullRequest?: string) => `
 mutation CreatePullRequestInput {
    createPullRequest (input:{ baseRefName: "${mutationFields.baseRefName}", headRefName: "${mutationFields.headRefName}", repositoryId: "${mutationFields.repositoryId}", title: "${mutationFields.title}",
        ${mutationFields.draft ? `, draft: ${mutationFields.draft}` : ''} ${mutationFields.maintainerCanModify ? `, maintainerCanModify: ${mutationFields.maintainerCanModify}` : ''} 
        ${mutationFields.body ? `, body: "${mutationFields.body}"` : ''}  ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${pullRequest}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateRef
 * @mutationFields
 ** clientMutationId string
 ** name string
 ** oid GitObjectID!
 ** repositoryId string
 * @fields PullRequest
 */

export const CreateRef = (mutationFields: types.CreateRefInput, project?: string) => `
    mutation CreateRefInput {
        createRef (input:{ name: "${mutationFields.name}",  repositoryId: "${mutationFields.repositoryId}" ${mutationFields.oid ? `, oid: "${mutationFields.oid}"` : ''} 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateRepository
 * @mutationFields
 ** clientMutationId string
 ** description string
 ** hasIssuesEnabled boolean
 ** hasWikiEnabled boolean
 ** name string
 ** ownerId string
 ** teamId string
 ** template boolean
 ** visibility "INTERNAL" | "PRIVATE" | "PUBLIC"
 * @fields Repository
 */

export const CreateRepository = (mutationFields: types.CreateRepositoryInput, repository?: string) => `
 mutation CreateRepositoryInput {
    createRepository (input:{description:"${mutationFields.description}", name:"${mutationFields.name}" ${mutationFields.hasIssuesEnabled ? `, hasIssuesEnabled: ${mutationFields.hasIssuesEnabled}` : ''} 
        ${mutationFields.hasWikiEnabled ? `, hasWikiEnabled: ${mutationFields.hasWikiEnabled}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
         ${mutationFields.homepageUrl ? `, homepageUrl: "${mutationFields.homepageUrl}"` : ''} ${mutationFields.ownerId ? `, ownerId: "${mutationFields.ownerId}"` : ''}
          ${mutationFields.teamId ? `, teamId: "${mutationFields.teamId}"` : ''} ${mutationFields.template ? `, template: ${mutationFields.template}` : ''} ${mutationFields.visibility ? `, visibility: ${mutationFields.visibility}` : ''} }){
         ${repository}
     }
 }
`

/**
 * @description Github Graphql Mutation for CreateTeamDiscussionComment
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** discussionId string
 * @fields TeamDiscussionComment
 */

export const CreateTeamDiscussionComment = (mutationFields: types.CreateTeamDiscussionCommentInput, teamDiscussion?: string) => `
 mutation CreateTeamDiscussionCommentInput {
    createTeamDiscussionComment (input:{ body: "${mutationFields.body}",  discussionId: "${mutationFields.discussionId}" 
    ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${teamDiscussion}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateTeamDiscussion
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** private boolean
 ** teamId string
 ** title string
 * @fields TeamDiscussion
 */

export const CreateTeamDiscussion = (mutationFields: types.CreateTeamDiscussionInput, teamDiscussion?: string) => `
 mutation CreateTeamDiscussionInput {
    createTeamDiscussion (input:{ body: "${mutationFields.body}",  private : ${mutationFields.private}, teamId : "${mutationFields.teamId}", title : "${mutationFields.title}"  
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${teamDiscussion}
    }
 }
`

/**
 * @description Github Graphql Mutation for DeclineTopicSuggestion
 * @mutationFields
 ** name string
 ** clientMutationId string
 ** reason "NOT_RELEVANT" | "PERSONAL_PREFERENCE" | "TOO_GENERAL" | "TOO_SPECIFIC"
 ** repositoryId string
 * @fields Topic
 */

export const DeclineTopicSuggestion = (mutationFields: types.DeclineTopicSuggestionInput, topic?: string) => `
 mutation DeclineTopicSuggestionInput {
    declineTopicSuggestion (input:{ name: "${mutationFields.name}",  reason : ${mutationFields.reason}, repositoryId: "${mutationFields.repositoryId}"  
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${topic}
    }
 }
`

/**
 * @description Github Graphql Mutation for DeleteBranchProtectionRule
 * @mutationFields
 ** branchProtectionRuleId string
 ** clientMutationId string
 */

export const DeleteBranchProtectionRule = (mutationFields: types.DeleteBranchProtectionRuleInput) => `
    mutation DeleteBranchProtectionRuleInput {
        deleteBranchProtectionRule (input:{branchProtectionRuleId: "${mutationFields.branchProtectionRuleId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId 
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteDeployment
 * @mutationFields
 ** id string
 ** clientMutationId string
 */

export const DeleteDeployment = (mutationFields: types.DefautFields) => `
    mutation DeleteDeploymentInput {
        deleteDeployment (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteIpAllowListEntry
 * @mutationFields
 ** ipAllowListEntryId string
 ** clientMutationId string
 * @fields IpAllowList
 */

export const DeleteIpAllowListEntry = (mutationFields: types.DeleteIpAllowListEntryInput, ipAllowList?: string) => `
    mutation DeleteIpAllowListEntryInput {
        deleteIpAllowListEntry (input:{ipAllowListEntryId: "${mutationFields.ipAllowListEntryId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${ipAllowList}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteIssueComment
 * @mutationFields
 ** id string
 ** clientMutationId string
 */

export const DeleteIssueComment = (mutationFields: types.DefautFields) => `
    mutation DeleteIssueCommentInput {
        deleteIssueComment (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteIssue
 * @mutationFields
 ** issueId string
 ** clientMutationId string
 * @fields Repository
 */

export const DeleteIssue = (mutationFields: types.DeleteIssueInput, repository?: string) => `
    mutation DeleteIssueInput {
        deleteIssue (input:{issueId: "${mutationFields.issueId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${repository}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeletePackageVersion
 * @mutationFields
 ** packageVersionId string
 ** clientMutationId string
 */

export const DeletePackageVersion = (mutationFields: types.DeletePackageVersionInput) => `
    mutation DeletePackageVersionInput {
        deletePackageVersion (input:{packageVersionId: "${mutationFields.packageVersionId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId
            success
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteProjectCard
 * @mutationFields
 ** cardId string
 ** clientMutationId string
 * @fields { ProjectColumn }
 */

export const DeleteProjectCard = (mutationFields: types.DeleteProjectCardInput, projectColumnFields: string) => `
    mutation DeleteProjectCardInput {
        deleteProjectCard (input:{cardId: "${mutationFields.cardId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            column { ${projectColumnFields} }
            deletedCardId
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteProjectColumn
 * @mutationFields
 ** columnId string
 ** clientMutationId string
 * @fields Project
 */

export const DeleteProjectColumn = (mutationFields: types.DeleteProjectColumnInput, project: string) => `
    mutation DeleteProjectColumnInput {
        deleteProjectColumn (input:{columnId : "${mutationFields.columnId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            deletedColumnId
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteProject
 * @mutationFields
 ** projectId string
 ** clientMutationId string
 * @fields ProjectOwner
 */

export const DeleteProject = (mutationFields: types.DeleteProjectInput, projectOwner?: string) => `
    mutation DeleteProjectInput {
        deleteProjectColumn (input:{projectId : "${mutationFields.projectId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${projectOwner}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeletePullRequestReviewComment
 * @mutationFields
 ** id string
 ** clientMutationId string
 * @fields PullRequestReview
 */

export const DeletePullRequestReviewComment = (mutationFields: types.DefautFields, pullRequestReview?: string) => `
    mutation DeletePullRequestReviewCommentInput {
        deletePullRequestReviewComment (input:{id : "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${pullRequestReview}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeletePullRequestReview
 * @mutationFields
 ** pullRequestReviewId string
 ** clientMutationId string
 * @fields PullRequestReview
 */

export const DeletePullRequestReview = (mutationFields: types.DeletePullRequestReviewInput, pullRequestReview?: string) => `
    mutation DeletePullRequestReviewInput {
        deletePullRequestReview (input:{pullRequestReviewId: "${mutationFields.pullRequestReviewId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${pullRequestReview}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteRef
 * @mutationFields
 ** refId string
 ** clientMutationId string
 */

export const DeleteRef = (mutationFields: types.DeleteRefInput) => `
    mutation DeleteRefInput {
        deleteRef (input:{refId: "${mutationFields.refId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteTeamDiscussionComment
 * @mutationFields
 ** id string
 ** clientMutationId string
 */

export const DeleteTeamDiscussionComment = (mutationFields: types.DefautFields) => `
    mutation DeleteRefInput {
        deleteTeamDiscussionComment (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteTeamDiscussion
 * @mutationFields
 ** id string
 ** clientMutationId string
 */

export const DeleteTeamDiscussion = (mutationFields: types.DefautFields) => `
    mutation DeleteTeamDiscussionInput {
        deleteTeamDiscussion (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteVerifiableDomain
 * @mutationFields
 ** id string
 ** clientMutationId string
 */

export const DeleteVerifiableDomain = (mutationFields: types.DefautFields) => `
    mutation DeleteVerifiableDomainInput {
        deleteVerifiableDomain (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for DeploymentOrder
 * @mutationFields
 ** id string
 ** clientMutationId string
 */

export const DeploymentOrder = (mutationFields: types.DeploymentOrder) => `
    {direction: ${mutationFields.direction}, field: ${mutationFields.field}}
`

/**
 * @description Github Graphql Mutation for DisablePullRequestAutoMerge
 * @mutationFields
 ** pullRequestId string
 ** clientMutationId string
 * @fields
 ** Actor
 ** PullRequestReview
 */

export const DisablePullRequestAutoMerge = (mutationFields: types.DisablePullRequestAutoMergeInput, fields?: string) => `
    mutation DisablePullRequestAutoMergeInput {
        disablePullRequestAutoMerge (input:{pullRequestId: "${mutationFields.pullRequestId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${fields}
        }
    }
`

/**
 * @description Github Graphql Mutation for DismissPullRequestReview
 * @mutationFields
 ** pullRequestReviewId string
 ** clientMutationId string
 ** message string
 * @fields PullRequestReview
 */

export const DismissPullRequestReview = (mutationFields: types.DismissPullRequestReviewInput, pullRequest?: string) => `
    mutation DismissPullRequestReviewInput {
        dismissPullRequestReview (input:{pullRequestReviewId: "${mutationFields.pullRequestReviewId}", message: "${mutationFields.message}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for DraftPullRequestReviewComment
 * @mutationFields
 ** body string
 ** path string
 ** position number
 */

export const DraftPullRequestReviewComment = (mutationFields: types.DraftPullRequestReviewComment) => `
    { body : "${mutationFields.body}", path:"${mutationFields.path}", position: ${mutationFields.position} }
`

/**
 * @description Github Graphql Mutation for DraftPullRequestReviewThread
 * @mutationFields
 ** body string
 ** line number
 ** path string
 ** side "LEFT" | "RIGHT"
 ** startLine number
 ** startSide "LEFT" | "RIGHT"
 */

export const DraftPullRequestReviewThread = (mutationFields: types.DraftPullRequestReviewThread) => `
    { body: "${mutationFields.body}", path: "${mutationFields.path}", line: ${mutationFields.line}, side: ${mutationFields.side} startLine: ${mutationFields.startLine}
        startSide: ${mutationFields.startSide} }
`

/**
 * @description Github Graphql Mutation for EnablePullRequestAutoMerge
 * @mutationFields
 ** authorEmail string
 ** clientMutationId string
 ** commitBody string
 ** commitHeadline string
 ** mergeMethod "MERGE" | "REBASE" | "SQUASH"
 ** pullRequestId string
 * @fields
 ** Actor
 ** PullRequest
 */

export const EnablePullRequestAutoMerge = (mutationFields: types.EnablePullRequestAutoMergeInput, pullRequest?: string) => `
    mutation EnablePullRequestAutoMergeInput {
        enablePullRequestAutoMerge (input:{pullRequestId: "${mutationFields.pullRequestId}" ${mutationFields.authorEmail ? `, authorEmail: "${mutationFields.authorEmail}"` : ''} ${mutationFields.commitBody ? `, commitBody: "${mutationFields.commitBody}"` : ''} ${mutationFields.commitHeadline ? `, commitHeadline: "${mutationFields.commitHeadline}"` : ''}
        ${mutationFields.mergeMethod ? `, mergeMethod: ${mutationFields.mergeMethod}` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for EnterpriseAdministratorInvitationOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const EnterpriseAdministratorInvitationOrder = (mutationFields: types.EnterpriseAdministratorInvitationOrder) => `
    {field: ${mutationFields.field}, direction: ${mutationFields.direction}}
`

/**
 * @description Github Graphql Mutation for EnterpriseMemberOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "LOGIN"
 */

export const EnterpriseMemberOrder = (mutationFields: types.EnterpriseMemberOrder) => `
    { field: ${mutationFields.field}, direction: ${mutationFields.direction} }
`

/**
 * @description Github Graphql Mutation for EnterpriseServerInstallationOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "CUSTOMER_NAME" | "HOST_NAME"
 */

export const EnterpriseServerInstallationOrder = (mutationFields: types.EnterpriseServerInstallationOrder) => `
    { field: ${mutationFields.field}, direction: ${mutationFields.direction} }
`

/**
 * @description Github Graphql Mutation for EnterpriseServerUserAccountEmailOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "EMAIL"
 */

export const EnterpriseServerUserAccountEmailOrder = (mutationFields: types.EnterpriseServerUserAccountEmailOrder) => `
    { field: ${mutationFields.field}, direction: ${mutationFields.direction} }
`

/**
 * @description Github Graphql Mutation for EnterpriseServerUserAccountOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "LOGIN" | "REMOTE_CREATED_AT"
 */

export const EnterpriseServerUserAccountOrder = (mutationFields: types.EnterpriseServerUserAccountOrder) => `
    { field: ${mutationFields.field}, direction: ${mutationFields.direction} }
`

/**
 * @description Github Graphql Mutation for EnterpriseServerUserAccountsUploadOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const EnterpriseServerUserAccountsUploadOrder = (mutationFields: types.EnterpriseServerUserAccountsUploadOrder) => `
    { field: ${mutationFields.field}, direction: ${mutationFields.direction} }
`

/**
 * @description Github Graphql Mutation for FollowUser
 * @mutationFields
 ** clientMutationId string
 ** userId string
 * @fields User
 */

export const FollowUser = (mutationFields: types.FollowUserInput, user?: string) => `
    mutation FollowUserInput {
        followUser (input:{userId: "${mutationFields.userId}" ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
            ${user}
        }
    }
`

/**
 * @description Github Graphql Mutation for GistOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "PUSHED_AT" | "UPDATED_AT"
 */

export const GistOrder = (mutationFields: types.GistOrder) => `
    { field: ${mutationFields.field}, direction: ${mutationFields.direction} }
`

/**
 * @description Github Graphql Mutation for ImportProject
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** columnImports ProjectColumnImport[]
 ** name string
 ** ownerName string
 ** public boolean
 * @fields Project
 */

export const ImportProject = (mutationFields: types.ImportProjectInput, project?: string) => `
    mutation ImportProjectInput {
        importProject (input:{body: "${mutationFields.body}", columnImports: ${mutationFields.columnImports}, name: "${mutationFields.name}", 
        ownerName: "${mutationFields.ownerName}", public: ${mutationFields.public} ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for ProjectColumnImport
 * @mutationFields
 ** columnName string
 ** issues ProjectCardImport[]
 ** position number
 */

export const ProjectColumnImport = (mutationFields: types.ProjectColumnImport) => `
    { columnName: "${mutationFields.columnName}", position: ${mutationFields.position} 
    ${mutationFields.issues ? `, issues: ${mutationFields.issues}` : ''} }
`

/**
 * @description Github Graphql Mutation for InviteEnterpriseAdmin
 * @mutationFields
 ** email string
 ** clientMutationId string
 ** enterpriseId string
 ** invitee string
 ** role "BILLING_MANAGER" | "OWNER"
 * @fields Invitation
 */

export const InviteEnterpriseAdmin = (mutationFields: types.InviteEnterpriseAdminInput, invitation?: string) => `
    mutation InviteEnterpriseAdminInput {
        inviteEnterpriseAdmin (input:{email: "${mutationFields.email}", enterpriseId: "${mutationFields.enterpriseId}", 
            invitee: "${mutationFields.invitee}", role: ${mutationFields.role} ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
            ${invitation}
        }
    }
`

/**
 * @description Github Graphql Mutation for IpAllowListEntryOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "ALLOW_LIST_VALUE" | "CREATED_AT"
 */

export const IpAllowListEntryOrder = (mutationFields: types.IpAllowListEntryOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for IssueCommentOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "UPDATED_AT"
 */

export const IssueCommentOrder = (mutationFields: types.IssueCommentOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for IssueFilters
 * @mutationFields
 ** assignee string | "*"
 ** createdBy string
 ** labels string[]
 ** mentioned boolean
 ** milestone string
 ** since Date
 ** states "CLOSED" | "OPEN"
 ** viewerSubscribed boolean
 */

export const IssueFilters = (mutationFields: types.IssueFilters) => `
    { assignee: "${mutationFields.assignee}", createdBy: "${mutationFields.createdBy}", labels: ${mutationFields.labels}, mentioned: "${mutationFields.mentioned}", milestone: "${mutationFields.milestone}",
    since: "${mutationFields.since}", states: ${mutationFields.states}, viewerSubscribed: ${mutationFields.viewerSubscribed} }
`

/**
 * @description Github Graphql Mutation for IssueOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "COMMENTS" | "CREATED_AT" | "UPDATED_AT"
 */

export const IssueOrder = (mutationFields: types.IssueOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for LabelOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "COMMENTS" | "CREATED_AT" | "UPDATED_AT"
 */

export const LabelOrder = (mutationFields: types.LabelOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for LanguageOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "SIZE"
 */

export const LanguageOrder = (mutationFields: types.LabelOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for LinkRepositoryToProject
 * @mutationFields
 ** clientMutationId string
 ** projectId string
 ** repositoryId string
 * @fields
 ** Repository
 ** Project
 */

export const LinkRepositoryToProject = (mutationFields: types.LinkRepositoryToProjectInput, repository?: string) => `
    mutation LinkRepositoryToProjectInput {
        linkRepositoryToProject (input:{projectId: "${mutationFields.projectId}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${repository}
        }
    }
`

/**
 * @description Github Graphql Mutation for LockLockable
 * @mutationFields
 ** clientMutationId string
 ** lockableId string
 ** lockReason "OFF_TOPIC" | "RESOLVED" | "SPAM" | "TOO_HEATED"
 * @fields
 ** Actor
 ** lockedRecord { Lockable }
 */

export const LockLockable = (mutationFields: types.LockLockableInput, fields?: string) => `
    mutation LockLockableInput {
        lockLockable (input:{lockableId: "${mutationFields.lockableId}", lockReason: ${mutationFields.lockReason} ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${fields}
        }
    }
`

/**
 * @description Github Graphql Mutation for MarkFileAsViewed
 * @mutationFields
 ** clientMutationId string
 ** path string
 ** pullRequestId string
 * @fields PullRequest
 */

export const MarkFileAsViewed = (mutationFields: types.MarkFileAsViewedInput, pullRequest?: string) => `
    mutation MarkFileAsViewedInput {
        markFileAsViewed (input:{pullRequestId : "${mutationFields.pullRequestId}", path: "${mutationFields.path}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for MarkPullRequestReadyForReview
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 * @fields PullRequest
 */

export const MarkPullRequestReadyForReview = (mutationFields: types.MarkPullRequestReadyForReviewInput, pullRequest?: string) => `
    mutation MarkPullRequestReadyForReviewInput {
        markPullRequestReadyForReview (input:{pullRequestId : "${mutationFields.pullRequestId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for MergeBranch
 * @mutationFields
 ** authorEmail string
 ** base string
 ** clientMutationId string
 ** commitMessage string
 ** head string
 ** repositoryId string
 * @fields { Commit }
 */

export const MergeBranch = (mutationFields: types.MergeBranchInput, commitFields?: string) => `
    mutation MergeBranchInput {
        mergeBranch (input:{authorEmail : "${mutationFields.authorEmail}", base: "${mutationFields.base}", commitMessage: "${mutationFields.commitMessage}", 
        head: "${mutationFields.head}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            mergeCommit { ${commitFields} }
        }
    }
`

/**
 * @description Github Graphql Mutation for MergePullRequest
 * @mutationFields
 ** authorEmail string
 ** clientMutationId string
 ** commitHeadline string
 ** expectedHeadOid GitObjectID
 ** mergeMethod "MERGE" | "REBASE" | "SQUASH"
 ** pullRequestId string
 * @fields
 ** Actor
 ** PullRequest
 */

export const MergePullRequest = (mutationFields: types.MergePullRequestInput, fields?: string) => `
    mutation MergePullRequestInput {
        mergePullRequest (input:{ pullRequestId: "${mutationFields.pullRequestId}" ${mutationFields.authorEmail ? `, authorEmail : "${mutationFields.authorEmail}"` : ''}, commitBody: "${mutationFields.commitBody}", mergeMethod: ${mutationFields.mergeMethod},
        ${mutationFields.expectedHeadOid ? `, expectedHeadOid: "${mutationFields.expectedHeadOid}"` : ''} ${mutationFields.commitHeadline ? `, commitHeadline: "${mutationFields.commitHeadline}"` : ''} 
        ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${fields}
        }
    }
`

/**
 * @description Github Graphql Mutation for MilestoneOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "DUE_DATE" | "NUMBER" | "UPDATED_AT"
 */

export const MilestoneOrder = (mutationFields: types.MilestoneOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for MinimizeComment
 * @mutationFields
 ** classifier: "ABUSE" | "DUPLICATE" | "OFF_TOPIC" | "OUTDATED" | "RESOLVED" | "SPAM"
 ** clientMutationId string
 ** subjectId string
 * @fields { Comment }
 */

export const MinimizeComment = (mutationFields: types.MinimizeCommentInput, comment?: string) => `
    mutation MinimizeCommentInput {
        minimizeComment (input:{classifier : ${mutationFields.classifier}, subjectId: "${mutationFields.subjectId}",
        ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            minimizedComment { ${comment} }
        }
    }
`

/**
 * @description Github Graphql Mutation for MoveProjectCard
 * @mutationFields
 ** afterCardId string | null
 ** cardId string
 ** clientMutationId string
 ** commitHeadline string
 ** columnId string
 */

export const MoveProjectCard = (mutationFields: types.MoveProjectCardInput) => `
    mutation MoveProjectCardInput {
        moveProjectCard (input:{${mutationFields.afterCardId ? `afterCardId : "${mutationFields.afterCardId}"` : ''}, cardId: "${mutationFields.cardId}", 
        columnId: "${mutationFields.columnId}", ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for MoveProjectColumn
 * @mutationFields
 ** afterColumnId string
 ** clientMutationId string
 ** columnId string
 */

export const MoveProjectColumn = (mutationFields: types.MoveProjectColumnInput) => `
    mutation MoveProjectColumnInput {
        moveProjectColumn (input:{columnId : "${mutationFields.columnId}", ${mutationFields.afterColumnId ? `afterColumnId: "${mutationFields.afterColumnId}"` : ''},
        ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for OrganizationOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "LOGIN"
 */

export const OrganizationOrder = (mutationFields: types.OrganizationOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for PackageFileOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const PackageFileOrder = (mutationFields: types.PackageFileOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for PackageOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const PackageOrder = (mutationFields: types.PackageOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for PackageVersionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const PackageVersionOrder = (mutationFields: types.PackageVersionOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for PinIssue
 * @mutationFields
 ** clientMutationId string
 ** issueId string
 * @fields Issue
 */

export const PinIssue = (mutationFields: types.PinIssueInput, issue?: string) => `
    mutation PinIssueInput {
        pinIssue (input:{issueId: "${mutationFields.issueId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for ProjectCardImport
 * @mutationFields
 ** clientMutationId string
 ** repository string
 * @fields ProjectCard
 */

export const ProjectCardImport = (mutationFields: types.ProjectCardImport, projectCard?: string) => `
    mutation ProjectCardImport {
        projectCardImport (input:{repository: "${mutationFields.repository}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${projectCard}
        }
    }
`

/**
 * @description Github Graphql Mutation for ProjectOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "NAME" | "UPDATED_AT"
 */

export const ProjectOrder = (mutationFields: types.ProjectOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for PullRequestOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "UPDATED_AT"
 */

export const PullRequestOrder = (mutationFields: types.PullRequestOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for ReactionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const ReactionOrder = (mutationFields: types.ReactionOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for RefOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "ALPHABETICAL" | "TAG_COMMIT_DATE"
 */

export const RefOrder = (mutationFields: types.RefOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for RefUpdate
 * @mutationFields
 ** afterOid GitObjectID
 ** beforeOid GitObjectID
 ** name GitRefname
 ** force boolean
 */

export const RefUpdate = (mutationFields: types.RefUpdate) => `
    { afterOid: "${mutationFields.afterOid}", beforeOid: "${mutationFields.beforeOid}", name: "${mutationFields.name}", force: ${mutationFields.force} }
`

/**
 * @description Github Graphql Mutation for RegenerateEnterpriseIdentityProviderRecoveryCodesInput
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 * @fields IdentityProvider
 */

export const RegenerateEnterpriseIdentityProviderRecoveryCodes = (mutationFields: types.RegenerateEnterpriseIdentityProviderRecoveryCodesInput, identityProvider?: string) => `
    mutation RegenerateEnterpriseIdentityProviderRecoveryCodesInput {
        regenerateEnterpriseIdentityProviderRecoveryCodes (input:{enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${identityProvider}
        }
    }
`

/**
 * @description Github Graphql Mutation for RegenerateVerifiableDomainTokenInput
 * @mutationFields
 ** clientMutationId string
 ** id string
 */

export const RegenerateVerifiableDomainToken = (mutationFields: types.DefautFields) => `
    mutation RegenerateVerifiableDomainTokenInput {
        regenerateVerifiableDomainToken (input:{id: "${mutationFields.id}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            verificationToken
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveAssigneesFromAssignable
 * @mutationFields
 ** clientMutationId string
 ** assigneeIds string[]
 ** assignableId string
 * @fields Assignable
 */

export const RemoveAssigneesFromAssignable = (mutationFields: types.RemoveAssigneesFromAssignableInput, assignable?: string) => `
    mutation RemoveAssigneesFromAssignableInput {
        removeAssigneesFromAssignable (input:{assigneeIds: [${mutationFields.assigneeIds}], assignableId: "${mutationFields.assignableId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${assignable}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveEnterpriseAdmin
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 ** login string
 * @fields
 ** admin { User }
 ** Enterprise
 ** message
 ** viewer { User }
 */

export const RemoveEnterpriseAdmin = (mutationFields: types.RemoveEnterpriseAdminInput, fields?: string) => `
    mutation RemoveEnterpriseAdminInput {
        removeEnterpriseAdmin (input:{login: "${mutationFields.login}", enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${fields}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveEnterpriseIdentityProvider
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 * @fields
 ** User
 ** Organization
 ** Enterprise
 */

export const RemoveEnterpriseIdentityProvider = (mutationFields: types.RemoveEnterpriseIdentityProviderInput, fields?: string) => `
    mutation RemoveEnterpriseIdentityProviderInput {
        removeEnterpriseIdentityProvider (input:{enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${fields}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveEnterpriseOrganization
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 ** organizationId  string
 * @fields
 ** Enterprise
 ** Organization
 ** viewer { User }
 */

export const RemoveEnterpriseOrganization = (mutationFields: types.RemoveEnterpriseOrganizationInput, assignable?: string) => `
    mutation RemoveEnterpriseOrganizationInput {
        removeEnterpriseOrganization (input:{organizationId: "${mutationFields.organizationId}", enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${assignable}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveEnterpriseAdminInput
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 ** login string
 */

export const RemoveEnterpriseSupportEntitlement = (mutationFields: types.RemoveEnterpriseAdminInput) => `
    mutation RemoveEnterpriseSupportEntitlementInput {
        removeEnterpriseSupportEntitlement (input:{login: "${mutationFields.login}", enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveLabelsFromLabelableInput
 * @mutationFields
 ** clientMutationId string
 ** labelableId string
 ** labelIds string[]
 * @fields Labelable
 */

export const RemoveLabelsFromLabelable = (mutationFields: types.LabelsToLabelableInput, labelable?: string) => `
 mutation RemoveLabelsFromLabelableInput {
    removeLabelsFromLabelable (input:{labelableId: "${mutationFields.labelableId}", labelIds: [${mutationFields.labelIds}] ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
         ${labelable}
     }
 }
`

/**
 * @description Github Graphql Mutation for RemoveOutsideCollaboratorInput
 * @mutationFields
 ** clientMutationId string
 ** organizationId string
 ** userId string
 * @fields { User }
 */

export const RemoveOutsideCollaborator = (mutationFields: types.RemoveOutsideCollaboratorInput, userFields?: string) => `
    mutation RemoveOutsideCollaboratorInput {
        removeOutsideCollaborator (input:{userId: "${mutationFields.userId}", organizationId: "${mutationFields.organizationId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            removedUser { ${userFields} }
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveReactionInput
 * @mutationFields
 ** content "CONFUSED" | "EYES" | "HEART" | "HOORAY" | "LAUGH" | "ROCKET" | "THUMBS_DOWN" | "THUMBS_UP"
 ** clientMutationId string
 ** subjectId string
 * @fields
 ** Reaction
 ** Subject
 */

export const RemoveReaction = (mutationFields: types.RemoveReactionInput, reaction?: string) => `
    mutation RemoveReactionInput {
        removeReaction (input:{content: ${mutationFields.content}, subjectId: "${mutationFields.subjectId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${reaction}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveStar
 * @mutationFields
 ** clientMutationId string
 ** starrableId string
 * @fields Starrable
 */

export const RemoveStar = (mutationFields: types.RemoveStarInput, starrable?: string) => `
    mutation RemoveStarInput {
        removeStar (input:{starrableId: "${mutationFields.starrableId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${starrable}
        }
    }
`

/**
 * @description Github Graphql Mutation for ReopenIssue
 * @mutationFields
 ** clientMutationId string
 ** issueId string
 * @fields Issue
 */

export const ReopenIssue = (mutationFields: types.ReopenIssueInput, issue?: string) => `
    mutation ReopenIssueInput {
        reopenIssue (input:{issueId: "${mutationFields.issueId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for ReopenPullRequest
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 * @fields PullRequest
 */

export const ReopenPullRequest = (mutationFields: types.ReopenPullRequestInput, pullRequest?: string) => `
    mutation ReopenPullRequestInput {
        reopenPullRequest (input:{pullRequestId: "${mutationFields.pullRequestId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for RepositoryInvitationOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "INVITEE_LOGIN"
 */

export const RepositoryInvitationOrder = (mutationFields: types.RepositoryInvitationOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for RepositoryOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "NAME" | "PUSHED_AT" | "STARGAZERS" | "UPDATED_AT"
 */

export const RepositoryOrder = (mutationFields: types.RepositoryOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for RequestReviews
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 ** teamIds string[]
 ** union boolean
 ** userIds string[]
 * @fields
 ** Actor
 ** PullRequest
 ** requestedReviewersEdge UserEdge
 */

export const RequestReviews = (mutationFields: types.RequestReviewsInput, fields?: string) => `
    mutation RequestReviewsInput {
        requestReviews (input:{pullRequestId: "${mutationFields.pullRequestId}", union: ${mutationFields.union}, userIds: [${mutationFields.userIds}]
        ${mutationFields.teamIds ? `, teamIds: ${mutationFields.teamIds}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${fields}
        }
    }
`

/**
 * @description Github Graphql Mutation for RerequestCheckSuiteInput
 * @mutationFields
 ** clientMutationId string
 ** checkSuiteId string
 ** repositoryId string
 * @fields CheckSuite
 */

export const RerequestCheckSuite = (mutationFields: types.RerequestCheckSuiteInput, checkSuite?: string) => `
    mutation RerequestCheckSuiteInput {
        rerequestCheckSuite (input:{checkSuiteId: "${mutationFields.checkSuiteId}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${checkSuite}
        }
    }
`

/**
 * @description Github Graphql Mutation for RerequestCheckSuite
 * @mutationFields
 ** clientMutationId string
 ** threadId string
 * @fields { PullRequestReviewThread }
 */

export const ResolveReviewThread = (mutationFields: types.ResolveReviewThreadInput, pullRequestReviewThreadFields?: string) => `
    mutation ResolveReviewThreadInput {
        resolveReviewThread (input:{threadId: "${mutationFields.threadId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            thread{ ${pullRequestReviewThreadFields} }
        }
    }
`

/**
 * @description Github Graphql Mutation for SavedReplyOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "UPDATED_AT"
 */

export const SavedReplyOrder = (mutationFields: types.SavedReplyOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for SecurityAdvisoryIdentifierFilter
 * @mutationFields
 ** type "CVE" | "GHSA"
 ** value string
 */

export const SecurityAdvisoryIdentifierFilter = (mutationFields: types.SecurityAdvisoryIdentifierFilter) => `
    { type: ${mutationFields.type}, direction: ${mutationFields.value} }
`

/**
 * @description Github Graphql Mutation for SecurityAdvisoryOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "UPDATED_AT" | "PUBLISHED_AT"
 */

export const SecurityAdvisoryOrder = (mutationFields: types.SecurityAdvisoryOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for SetEnterpriseIdentityProvider
 * @mutationFields
 ** clientMutationId string
 ** digestMethod: "SHA1" | "SHA256" | "SHA384" | "SHA512"
 ** enterpriseId string
 ** idpCertificate string
 ** issuer string
 ** signatureMethod "RSA_SHA1" | "RSA_SHA256" | "RSA_SHA384" | "RSA_SHA512"
 ** ssoUrl string
 * @fields EnterpriseIdentityProvider
 */

export const SetEnterpriseIdentityProvider = (mutationFields: types.SetEnterpriseIdentityProviderInput, enterpriseIdentityProvider?: string) => `
    mutation SetEnterpriseIdentityProviderInput {
        setEnterpriseIdentityProvider (input:{digestMethod: ${mutationFields.digestMethod}, enterpriseId: "${mutationFields.enterpriseId}", ${mutationFields.idpCertificate ? `, idpCertificate: "${mutationFields.idpCertificate}"` : ''},
        signatureMethod: ${mutationFields.signatureMethod} issuer: "${mutationFields.issuer}", ${mutationFields.ssoUrl ? `, ssoUrl: "${mutationFields.ssoUrl}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterpriseIdentityProvider}
        }
    }
`

/**
 * @description Github Graphql Mutation for SetOrganizationInteractionLimitInput
 * @mutationFields
 ** clientMutationId string
 ** expiry "ONE_DAY" | "ONE_MONTH" | "ONE_WEEK" | "SIX_MONTHS" | "THREE_DAYS"
 ** limit "COLLABORATORS_ONLY" | "CONTRIBUTORS_ONLY" | "EXISTING_USERS" | "NO_LIMIT"
 ** organizationId string
 * @fields OrganizationInteractionLimit
 */

export const SetOrganizationInteractionLimit = (mutationFields: types.SetInteractionLimitInput, organizationInteractionLimit?: string) => `
    mutation SetOrganizationInteractionLimitInput {
        setOrganizationInteractionLimit (input:{expiry: ${mutationFields.expiry}, limit: ${mutationFields.limit}, organizationId: "${mutationFields.organizationId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${organizationInteractionLimit}
        }
    }
`

/**
 * @description Github Graphql Mutation for SetRepositoryInteractionLimitInput
 * @mutationFields
 ** clientMutationId string
 ** expiry "ONE_DAY" | "ONE_MONTH" | "ONE_WEEK" | "SIX_MONTHS" | "THREE_DAYS"
 ** limit "COLLABORATORS_ONLY" | "CONTRIBUTORS_ONLY" | "EXISTING_USERS" | "NO_LIMIT"
 ** repositoryId string
 * @fields RepositoryInteractionLimit
 */

export const SetRepositoryInteractionLimit = (mutationFields: types.SetInteractionLimitInput, organizationInteractionLimit?: string) => `
    mutation SetRepositoryInteractionLimitInput {
        setRepositoryInteractionLimit (input:{expiry: ${mutationFields.expiry}, limit: ${mutationFields.limit}, repositoryId: "${mutationFields.repositoryId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${organizationInteractionLimit}
        }
    }
`

/**
 * @description Github Graphql Mutation for SetUserInteractionLimitInput
 * @mutationFields
 ** clientMutationId string
 ** expiry "ONE_DAY" | "ONE_MONTH" | "ONE_WEEK" | "SIX_MONTHS" | "THREE_DAYS"
 ** limit "COLLABORATORS_ONLY" | "CONTRIBUTORS_ONLY" | "EXISTING_USERS" | "NO_LIMIT"
 ** userId string
 * @fields User
 */

export const SetUserInteractionLimit = (mutationFields: types.SetInteractionLimitInput, user?: string) => `
    mutation SetUserInteractionLimitInput {
        setUserInteractionLimit (input:{expiry: ${mutationFields.expiry}, limit: ${mutationFields.limit}, userId: "${mutationFields.userId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${user}
        }
    }
`

/**
 * @description Github Graphql Mutation for SponsorableOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "LOGIN"
 */

export const SponsorableOrder = (mutationFields: types.SponsorableOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for SponsorsTierOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "MONTHLY_PRICE_IN_CENTS"
 */

export const SponsorsTierOrder = (mutationFields: types.SponsorsTierOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for SponsorshipOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const SponsorshipOrder = (mutationFields: types.SponsorsTierOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for StarOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "STARRED_AT"
 */

export const StarOrder = (mutationFields: types.StarOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for SubmitPullRequestReview
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** event "APPROVE" | "COMMENT" | "DISMISS" | "REQUEST_CHANGES"
 ** pullRequestId string
 ** pullRequestReviewId string
 * @fields PullRequestReview
 */

export const SubmitPullRequestReview = (mutationFields: types.SubmitPullRequestReviewInput, pullRequestReview?: string) => `
    mutation SubmitPullRequestReviewInput {
        submitPullRequestReview (input:{body: "${mutationFields.body}", event: ${mutationFields.event}, pullRequestId: "${mutationFields.pullRequestId}", 
        pullRequestReviewId: "${mutationFields.pullRequestReviewId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${pullRequestReview}
        }
    }
`

/**
 * @description Github Graphql Mutation for TeamDiscussionCommentOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "NUMBER"
 */

export const TeamDiscussionCommentOrder = (mutationFields: types.TeamDiscussionCommentOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for TeamDiscussionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const TeamDiscussionOrder = (mutationFields: types.TeamDiscussionOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for TeamMemberOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "LOGIN"
 */

export const TeamMemberOrder = (mutationFields: types.TeamMemberOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for TeamOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "NAME"
 */

export const TeamOrder = (mutationFields: types.TeamOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for TeamRepositoryOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "NAME"
 */

export const TeamRepositoryOrder = (mutationFields: types.TeamRepositoryOrder) => `
    { field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''} }
`

/**
 * @description Github Graphql Mutation for TransferIssue
 * @mutationFields
 ** issueId string
 ** clientMutationId string
 ** repositoryId string
 * @fields Issue
 */

export const TransferIssue = (mutationFields: types.TransferIssueInput, issue?: string) => `
    mutation TransferIssueInput {
        transferIssue (input:{issueId: "${mutationFields.issueId}", repositoryId: "${mutationFields.repositoryId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnarchiveRepository
 * @mutationFields
 ** clientMutationId string
 ** repositoryId string
 * @fields Repository
 */

export const UnarchiveRepository = (mutationFields: types.UnarchiveRepositoryInput, repository?: string) => `
    mutation UnarchiveRepositoryInput {
        unarchiveRepository (input:{repositoryId: "${mutationFields.repositoryId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${repository}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnfollowUser
 * @mutationFields
 ** clientMutationId string
 ** userId string
 * @fields User
 */

export const UnfollowUser = (mutationFields: types.UnfollowUserInput, user?: string) => `
    mutation UnfollowUserInput {
        unfollowUser (input:{userId: "${mutationFields.userId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${user}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnlinkRepositoryFromProject
 * @mutationFields
 ** clientMutationId string
 ** projectId string
 ** repositoryId string
 * @fields
 ** Project
 ** Repository
 */

export const UnlinkRepositoryFromProject = (mutationFields: types.UnlinkRepositoryFromProjectInput, project?: string) => `
    mutation UnlinkRepositoryFromProjectInput {
        unlinkRepositoryFromProject (input:{projectId: "${mutationFields.projectId}", repositoryId: "${mutationFields.repositoryId}"
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnlockLockable
 * @mutationFields
 ** clientMutationId string
 ** lockableId string
 * @fields { Lockable }
 */

export const UnlockLockable = (mutationFields: types.UnlockLockableInput, lockable?: string) => `
    mutation UnlockLockableInput {
        unlockLockable (input:{lockableId : "${mutationFields.lockableId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            unlockedRecord { ${lockable} }
        }
    }
`

/**
 * @description Github Graphql Mutation for UnmarkFileAsViewed
 * @mutationFields
 ** clientMutationId string
 ** path string
 ** pullRequestId string
 * @fields PullRequest
 */

export const UnmarkFileAsViewed = (mutationFields: types.UnmarkFileAsViewedInput, pullRequest?: string) => `
    mutation UnmarkFileAsViewedInput {  
        unmarkFileAsViewed (input:{pullRequestId: "${mutationFields.pullRequestId}", path: "${mutationFields.path}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnmarkIssueAsDuplicate
 * @mutationFields
 ** canonicalId string
 ** path string
 ** duplicateId string
 * @fields onIssue
 */

export const UnmarkIssueAsDuplicate = (mutationFields: types.UnmarkIssueAsDuplicateInput, onIssue?: string) => `
    mutation UnmarkIssueAsDuplicateInput {  
        unmarkIssueAsDuplicate (input:{canonicalId: "${mutationFields.canonicalId}", duplicateId: "${mutationFields.duplicateId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            duplicate { ${onIssue} }
        }
    }
`

/**
 * @description Github Graphql Mutation for UnminimizeComment
 * @mutationFields
 ** clientMutationId string
 ** subjectId string
 * @fields onComment
 */

export const UnminimizeComment = (mutationFields: types.UnminimizeCommentInput, comment?: string) => `
    mutation UnminimizeCommentInput {  
        unminimizeComment (input:{subjectId : "${mutationFields.subjectId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            unminimizedComment { ${comment} }
        }
    }
`

/**
 * @description Github Graphql Mutation for UnpinIssue
 * @mutationFields
 ** clientMutationId string
 ** issueId string
 * @fields Issue
 */

export const UnpinIssue = (mutationFields: types.UnpinIssueInput, issue?: string) => `
    mutation UnpinIssueInput {  
        unpinIssue (input:{issueId: "${mutationFields.issueId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnresolveReviewThread
 * @mutationFields
 ** clientMutationId string
 ** threadId string
 * @fields { PullRequestReviewThread }
 */

export const UnresolveReviewThread = (mutationFields: types.UnresolveReviewThreadInput, pullRequestReviewThread?: string) => `
    mutation UnresolveReviewThreadInput {  
        unresolveReviewThread (input:{threadId: "${mutationFields.threadId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            thread { ${pullRequestReviewThread} }
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateBranchProtectionRule
 * @mutationFields
 ** allowsDeletions boolean
 ** allowsForcePushes boolean
 ** clientMutationId string
 ** dismissesStaleReviews boolean
 ** isAdminEnforced boolean
 ** pattern string
 ** pushActorIds string
 ** repositoryId string
 ** requiredApprovingReviewCount number
 ** requiredStatusCheckContexts string[]
 ** requiresApprovingReviews boolean
 ** requiresCodeOwnerReviews boolean
 ** requiresCommitSignatures boolean
 ** requiresLinearHistory boolean
 ** requiresStatusChecks boolean
 ** requiresStrictStatusChecks boolean
 ** restrictsPushes boolean
 ** restrictsReviewDismissals boolean
 ** reviewDismissalActorIds string[]
 * @fields BranchProtectionRule
 */

export const UpdateBranchProtectionRule = (mutationFields: types.CreateBranchProtectionRuleInput, branchProtectionRule?: string) => `
 mutation UpdateBranchProtectionRuleInput {
    updateBranchProtectionRule(input:{branchProtectionRuleId: "${mutationFields.branchProtectionRuleId}" ${mutationFields.allowsDeletions !== undefined ? `, allowsDeletions: ${mutationFields.allowsDeletions}` : ''} ${mutationFields.allowsForcePushes !== undefined ? `, allowsForcePushes: ${mutationFields.allowsForcePushes}` : ''}
        ${mutationFields.dismissesStaleReviews !== undefined ? `, dismissesStaleReviews: ${mutationFields.dismissesStaleReviews}` : ''} ${mutationFields.isAdminEnforced !== undefined ? `, isAdminEnforced: ${mutationFields.isAdminEnforced}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
             ${mutationFields.pattern ? `, pattern: "${mutationFields.pattern}"` : ''} ${mutationFields.pushActorIds ? `, pushActorIds: ${mutationFields.pushActorIds}` : ''} 
             ${mutationFields.requiredApprovingReviewCount ? `, requiredApprovingReviewCount: ${mutationFields.requiredApprovingReviewCount}` : ''} ${mutationFields.requiredStatusCheckContexts ? `, requiredStatusCheckContexts: [ ${mutationFields.requiredStatusCheckContexts} ]` : ''}
             ${mutationFields.requiresApprovingReviews !== undefined ? `, requiresApprovingReviews: ${mutationFields.requiresApprovingReviews}` : ''} ${mutationFields.requiresCodeOwnerReviews !== undefined ? `, requiresCodeOwnerReviews: ${mutationFields.requiresCodeOwnerReviews}` : ''} 
             ${mutationFields.requiresCommitSignatures !== undefined ? `, requiresCommitSignatures: ${mutationFields.requiresCommitSignatures}` : ''} ${mutationFields.requiresLinearHistory !== undefined ? `, requiresLinearHistory : ${mutationFields.requiresLinearHistory}` : ''}
             ${mutationFields.requiresStatusChecks !== undefined ? `, requiresStatusChecks: ${mutationFields.requiresStatusChecks}` : ''} ${mutationFields.requiresStrictStatusChecks !== undefined ? `, requiresStrictStatusChecks: ${mutationFields.requiresStrictStatusChecks}` : ''} 
             ${mutationFields.restrictsPushes !== undefined ? `, restrictsPushes: ${mutationFields.restrictsPushes}` : ''} ${mutationFields.restrictsReviewDismissals !== undefined ? `, restrictsReviewDismissals: ${mutationFields.restrictsReviewDismissals}` : ''} 
             ${mutationFields.reviewDismissalActorIds ? `, reviewDismissalActorIds: [ ${mutationFields.reviewDismissalActorIds} ]` : ''}}){
         ${branchProtectionRule}
     }
 }
`

/**
 * @description Github Graphql Mutation for UpdateCheckRun
 * @mutationFields
 ** actions CheckRunAction[]
 ** clientMutationId string
 ** completedAt DateTime
 ** conclusion CheckConclusionState
 ** detailsUrl string
 ** externalId string
 ** headSha GitObjectID
 ** name string
 ** output CheckRunOutput
 ** repositoryId string
 ** startedAt DateTime
 ** status RequestableCheckStatusState
 * @fields ChechRun
 */

export const UpdateCheckRun = (mutationFields: types.CreateCheckRunInput, checkRun?: string) => `
 mutation UpdateCheckRunInput {
    updateCheckRun (input:{checkRunId: "${mutationFields.checkRunId}" ${mutationFields.actions ? `, actions: [ ${mutationFields.actions} ]` : ''} ${mutationFields.completedAt ? `, completedAt: "${mutationFields.completedAt}"` : ''} 
        ${mutationFields.conclusion ? `conclusion: ${mutationFields.conclusion}` : ''} ${mutationFields.detailsUrl ? `, detailsUrl : "${mutationFields.detailsUrl}"` : ''} ${mutationFields.externalId ? `, externalId: "${mutationFields.externalId}"` : ''}
             ${mutationFields.headSha ? `, headSha: "${mutationFields.headSha}"` : ''} ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.output ? `, output: "${mutationFields.output}"` : ''}
             ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''} ${mutationFields.startedAt ? `, startedAt: "${mutationFields.startedAt}"` : ''}
             ${mutationFields.status ? `, status: ${mutationFields.status}` : ''} }){
         ${checkRun}
     }
 }
`

/**
 * @description Github Graphql Mutation for UpdateCheckSuitePreferences
 * @mutationFields
 ** autoTriggerPreferences CheckSuiteAutoTriggerPreference[]
 ** repositoryId string
 * @fields Repository
 */

export const UpdateCheckSuitePreferences = (mutationFields: types.UpdateCheckSuitePreferencesInput, repository?: string) => `
    mutation UpdateCheckSuitePreferencesInput {  
        updateCheckSuitePreferences (input:{repositoryId : "${mutationFields.repositoryId}", autoTriggerPreferences : [ ${mutationFields.autoTriggerPreferences} ]
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${repository}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseAdministratorRole
 * @mutationFields
 ** enterpriseId string
 ** login string
 ** role "BILLING_MANAGER" | "OWNER"
 */

export const UpdateEnterpriseAdministratorRole = (mutationFields: types.UpdateEnterpriseAdministratorRoleInput) => `
    mutation UpdateEnterpriseAdministratorRoleInput {  
        updateEnterpriseAdministratorRole (input:{enterpriseId: "${mutationFields.enterpriseId}", login: "${mutationFields.login}", role: ${mutationFields.role}
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseAllowPrivateRepositoryForkingSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 */

export const UpdateEnterpriseAllowPrivateRepositoryForkingSetting = (mutationFields: types.UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput) => `
    mutation UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput {  
        updateEnterpriseAllowPrivateRepositoryForkingSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseDefaultRepositoryPermissionSetting
 * @mutationFields
 ** enterpriseId string
 ** login string
 ** settingValue "ADMIN" | "NONE" | "NO_POLICY" | "READ" | "WRITE"
 * @fields Enterprise
 */

export const UpdateEnterpriseDefaultRepositoryPermissionSetting = (mutationFields: types.UpdateEnterpriseDefaultRepositoryPermissionSettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseDefaultRepositoryPermissionSettingInput {  
        updateEnterpriseDefaultRepositoryPermissionSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting
 * @mutationFields
 ** enterpriseId string
 ** login string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput {  
        updateEnterpriseMembersCanChangeRepositoryVisibilitySetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanCreateRepositoriesSetting
 * @mutationFields
 ** enterpriseId string
 ** membersCanCreateInternalRepositories boolean
 ** membersCanCreatePrivateRepositories boolean
 ** membersCanCreatePublicRepositories boolean
 ** membersCanCreateRepositoriesPolicyEnabled boolean
 ** settingValue "ALL" | "DISABLED" | "NO_POLICY" | "PRIVATE" | "PUBLIC"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanCreateRepositoriesSetting = (mutationFields: types.UpdateEnterpriseMembersCanCreateRepositoriesSettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanCreateRepositoriesSettingInput {  
        updateEnterpriseMembersCanCreateRepositoriesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue}, ${mutationFields.membersCanCreateInternalRepositories ? `, membersCanCreateInternalRepositories: "${mutationFields.membersCanCreateInternalRepositories}"` : ''}
        ${mutationFields.membersCanCreatePrivateRepositories ? `, membersCanCreatePrivateRepositories: "${mutationFields.membersCanCreatePrivateRepositories}"` : ''} ${mutationFields.membersCanCreatePublicRepositories ? `, membersCanCreatePublicRepositories: "${mutationFields.membersCanCreatePublicRepositories}"` : ''}
        ${mutationFields.membersCanCreateRepositoriesPolicyEnabled ? `, membersCanCreateRepositoriesPolicyEnabled: "${mutationFields.membersCanCreateRepositoriesPolicyEnabled}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanDeleteIssuesSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanDeleteIssuesSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanDeleteIssuesSettingInput {  
        updateEnterpriseMembersCanDeleteIssuesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanDeleteIssuesSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanDeleteRepositoriesSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput {  
        updateEnterpriseMembersCanDeleteRepositoriesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanInviteCollaboratorsSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanInviteCollaboratorsSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput {  
        updateEnterpriseMembersCanInviteCollaboratorsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanMakePurchasesSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanMakePurchasesSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanMakePurchasesSettingInput {  
        updateEnterpriseMembersCanMakePurchasesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting {  
        updateEnterpriseMembersCanUpdateProtectedBranchesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanViewDependencyInsightsSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanViewDependencyInsightsSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput {  
        updateEnterpriseMembersCanViewDependencyInsightsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseOrganizationProjectsSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseOrganizationProjectsSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseOrganizationProjectsSettingInput {  
        updateEnterpriseOrganizationProjectsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseProfile
 * @mutationFields
 ** description string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseProfile = (mutationFields: types.UpdateEnterpriseProfileInput, enterprise?: string) => `
    mutation UpdateEnterpriseProfileInput {  
        updateEnterpriseProfile (input:{ enterpriseId: "${mutationFields.enterpriseId}", location: "${mutationFields.location}",
            name: "${mutationFields.name}", ${mutationFields.description ? `, description: "${mutationFields.description}"` : ''}
            ${mutationFields.websiteUrl ? `, websiteUrl: "${mutationFields.websiteUrl}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseRepositoryProjectsSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseRepositoryProjectsSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseRepositoryProjectsSettingInput {  
        updateEnterpriseRepositoryProjectsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseTwoFactorAuthenticationRequiredSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseTwoFactorAuthenticationRequiredSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseTwoFactorAuthenticationRequiredSetting {  
        updateEnterpriseTwoFactorAuthenticationRequiredSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseTeamDiscussionsSetting
 * @mutationFields
 ** enterpriseId string
 ** settingValue "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseTeamDiscussionsSetting = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseTeamDiscussionsSettingInput {  
        updateEnterpriseTeamDiscussionsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
            message
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateIpAllowListEnabledSetting
 * @mutationFields
 ** ownerId string
 ** clientMutationId string
 ** settingValue "ENABLED" | "NO_POLICY"
 * @fields { IpAllowListOwner }
 */

export const UpdateIpAllowListEnabledSetting = (mutationFields: types.UpdateIpAllowListEnabledSettingInput, ipAllowListOwnerFields?: string) => `
    mutation UpdateIpAllowListEnabledSettingInput {  
        updateIpAllowListEnabledSetting (input:{ownerId: "${mutationFields.ownerId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            owner { ${ipAllowListOwnerFields} }
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateIpAllowListEntry
 * @mutationFields
 ** allowListValue string
 ** clientMutationId string
 ** ipAllowListEntryId string
 ** isActive boolean
 ** name string
 * @fields IpAllowListEntry
 */

export const UpdateIpAllowListEntry = (mutationFields: types.UpdateIpAllowListEntryInput, ipAllowListEntry?: string) => `
    mutation UpdateIpAllowListEntryInput {  
        updateIpAllowListEntry (input:{ipAllowListEntryId: "${mutationFields.ipAllowListEntryId}", name: "${mutationFields.name}", isActive: ${mutationFields.isActive}
        ${mutationFields.allowListValue ? `, allowListValue: "${mutationFields.allowListValue}"` : ''}      
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${ipAllowListEntry}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateIssueComment
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** id string
 * @fields IssueComment
 */

export const UpdateIssueComment = (mutationFields: types.UpdateIssueCommentInput, issueComment?: string) => `
    mutation UpdateIssueCommentInput {  
        updateIssueComment (input:{body: "${mutationFields.body}", id: "${mutationFields.id}",
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issueComment}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateIssue
 * @mutationFields
 ** assigneeIds string[]
 ** body string
 ** clientMutationId string
 ** id string
 ** issueTemplate string
 ** labelIds string[]
 ** milestoneId string
 ** projectIds string[]
 ** repositoryId string
 ** state "CLOSED" | "OPEN"
 ** title string
 * @fields
 ** Actor
 ** Issue
 */

export const UpdateIssue = (mutationFields: types.UpdateIssueInput, fields?: string) => `
    mutation UpdateIssueInput {
        updateIssue (input:{id:"${mutationFields.id}" ${mutationFields.body ? `, body:"${mutationFields.body}"` : ''} ${mutationFields.title ? `, title:"${mutationFields.title}"` : ''}
            ${mutationFields.assigneeIds ? `, assigneeIds: [ ${mutationFields.assigneeIds} ]` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
            ${mutationFields.milestoneId ? `, milestoneId: "${mutationFields.milestoneId}"` : ''} ${mutationFields.labelIds ? `, labelIds: [ ${mutationFields.labelIds} ]` : ''} 
            ${mutationFields.projectIds ? `, projectIds: [ ${mutationFields.projectIds} ]` : ''} ${mutationFields.state ? `, state: [ ${mutationFields.state} ]` : ''} }){
            ${fields}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateLabel
 * @mutationFields
 ** name string
 ** clientMutationId string
 ** color string
 ** description string
 ** id string
 * @fields Label
 */

export const UpdateLabel = (mutationFields: types.UpdateLabelInput, label?: string) => `
    mutation UpdateLabelInput {
        updateLabel (input:{id: "${mutationFields.id}" ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.color ? `, color: ${mutationFields.color}` : ''} 
        ${mutationFields.description ? `, description:"${mutationFields.description}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${label}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateNotificationRestrictionSetting
 * @mutationFields
 ** ownerId string
 ** clientMutationId string
 ** settingValue "ENABLED" | "DISABLED"
 * @fields { VerifiableDomainOwner }
 */

export const UpdateNotificationRestrictionSetting = (mutationFields: types.UpdateIpAllowListEnabledSettingInput, verifiableDomainOwner?: string) => `
    mutation UpdateNotificationRestrictionSettingInput {  
        updateNotificationRestrictionSetting (input:{ownerId: "${mutationFields.ownerId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            owner { ${verifiableDomainOwner} }
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateProjectCard
 * @mutationFields
 ** isArchived boolean
 ** note string
 ** projectCardId string
 * @fields Enterprise
 */

export const UpdateProjectCard = (mutationFields: types.UpdateProjectCardInput, enterprise?: string) => `
    mutation UpdateProjectCardInput {  
        updateProjectCard (input:{note: "${mutationFields.note}" projectCardId: "${mutationFields.projectCardId}" ${mutationFields.isArchived ? `, isArchived: ${mutationFields.isArchived}` : ''}
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateProjectColumn
 * @mutationFields
 ** clientMutationId string
 ** contentId string
 ** name string
 ** projectColumnId string
 * @fields ProjectColumn
 */

export const UpdateProjectColumn = (mutationFields: types.AddProjectColumnInput, projectColumn?: string) => `
    mutation UpdateProjectColumnInput {
        updateProjectColumn (input:{name: "${mutationFields.name}", projectColumnId: "${mutationFields.projectColumnId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${projectColumn}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateProject
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** name string
 ** public boolean
 ** projectId string
 ** state "CLOSED" | "OPEN"
 * @fields Project
 */

export const UpdateProject = (mutationFields: types.UpdateProjectInput, project?: string) => `
    mutation UpdateProjectInput {
        updateProject (input:{ projectId: "${mutationFields.projectId}" ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.body ? `, body: "${mutationFields.body}"` : ''}
        ${mutationFields.public ? `, public: ${mutationFields.public}` : ''} ${mutationFields.state ? `, state: ${mutationFields.state}` : ''} 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdatePullRequest
 * @mutationFields
 ** assigneeIds string[]
 ** baseRefName string
 ** body string
 ** clientMutationId string
 ** draft boolean
 ** headRefName string
 ** maintainerCanModify boolean
 ** repositoryId string
 ** title string
 * @fields
 ** Actor
 ** PullRequest
 */

export const UpdatePullRequest = (mutationFields: types.UpdatePullRequestInput, fields?: string) => `
 mutation UpdatePullRequestInput {
    updatePullRequest (input:{ pullRequestId: "${mutationFields.pullRequestId}" ${mutationFields.body ? `, body: "${mutationFields.body}"` : ''} ${mutationFields.baseRefName ? `, baseRefName: "${mutationFields.baseRefName}"` : ''}
     ${mutationFields.projectIds ? `, projectIds: [ ${mutationFields.projectIds} ]` : ''} ${mutationFields.assigneeIds ? `, assigneeIds: [ ${mutationFields.assigneeIds} ]` : ''} 
     ${mutationFields.maintainerCanModify ? `, maintainerCanModify: ${mutationFields.maintainerCanModify}` : ''} ${mutationFields.labelIds ? `, labelIds: [ ${mutationFields.labelIds} ]` : ''} 
        ${mutationFields.milestoneId ? `, milestoneId: "${mutationFields.milestoneId}"` : ''}  ${mutationFields.title ? `, title: "${mutationFields.title}"` : ''} 
        ${mutationFields.state ? `, state: ${mutationFields.state}` : ''}
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${fields}
    }
 }
`

/**
 * @description Github Graphql Mutation for UpdatePullRequestReviewComment
 * @mutationFields
 ** body string
 ** pullRequestReviewCommentId string
 * @fields PullRequestReviewComment
 */

export const UpdatePullRequestReviewComment = (mutationFields: types.UpdatePullRequestReviewCommentInput, pullRequestReviewComment?: string) => `
    mutation UpdatePullRequestReviewCommentInput {
        updatePullRequestReviewComment (input:{ body: "${mutationFields.body}", pullRequestReviewCommentId: "${mutationFields.pullRequestReviewCommentId}", 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequestReviewComment}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdatePullRequestReview
 * @mutationFields
 ** body string
 ** pullRequestReviewId string
 * @fields PullRequestReview
 */

export const UpdatePullRequestReview = (mutationFields: types.UpdatePullRequestReviewInput, pullRequestReview?: string) => `
    mutation UpdatePullRequestReviewInput {
        updatePullRequestReview (input:{ body: "${mutationFields.body}", pullRequestReviewId: "${mutationFields.pullRequestReviewId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequestReview}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateRef
 * @mutationFields
 ** force boolean
 ** oid GitObjectID
 ** refId string
 * @fields Ref
 */

export const UpdateRef = (mutationFields: types.UpdateRefInput, ref?: string) => `
    mutation UpdateRefInput {
        updateRef (input:{ refId: "${mutationFields.refId}" ${mutationFields.force !== undefined ? `, force: ${mutationFields.force}` : ''} 
        ${mutationFields.oid ? `oid: "${mutationFields.oid}"` : ''}  
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${ref}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateRefs
 * @mutationFields
 ** refUpdates RefUpdate[]
 ** repositoryId string
 * @fields Refs
 */

export const UpdateRefs = (mutationFields: types.UpdateRefsInput, refs?: string) => `
    mutation UpdateRefsInput {
        updateRefs (input:{ refUpdates: ${mutationFields.refUpdates}, repositoryId: "${mutationFields.repositoryId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            clientMutationId
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateRepository
 * @mutationFields
 ** clientMutationId string
 ** description string
 ** hasIssuesEnabled boolean
 ** hasWikiEnabled boolean
 ** hasProjectsEnabled boolean
 ** homepageUrl string
 ** name string
 ** ownerId string
 ** repositoryId
 ** template boolean
 * @fields Repository
 */

export const UpdateRepository = (mutationFields: types.UpdateRepositoryInput, repository?: string) => `
 mutation UpdateRepositoryInput {
    updateRepository (input:{repositoryId:"${mutationFields.repositoryId}" ${mutationFields.description ? `, description:"${mutationFields.description}"` : ''} ${mutationFields.name ? `, name:"${mutationFields.name}"` : ''} 
    ${mutationFields.hasIssuesEnabled ? `, hasIssuesEnabled: ${mutationFields.hasIssuesEnabled}` : ''} ${mutationFields.hasWikiEnabled ? `, hasWikiEnabled: ${mutationFields.hasWikiEnabled}` : ''} 
    ${mutationFields.hasProjectsEnabled ? `, hasProjectsEnabled: ${mutationFields.hasProjectsEnabled}` : ''}, ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
         ${mutationFields.homepageUrl ? `, homepageUrl: "${mutationFields.homepageUrl}"` : ''} ${mutationFields.template ? `, template: ${mutationFields.template}` : ''} }){
         ${repository}
     }
 }
`

/**
 * @description Github Graphql Mutation for UpdateSubscription
 * @mutationFields
 ** state "IGNORED" | "SUBSCRIBED" | "UNSUBSCRIBED"
 ** subscribableId string
 * @fields
 ** onCommit
 ** onIssue
 ** onPullRequest
 ** onRepository
 ** onTeam
 ** onTeamDiscussion
 */

export const UpdateSubscription = (mutationFields: types.UpdateSubscriptionInput, subscription?: string) => `
    mutation UpdateSubscriptionInput {
        updateSubscription (input:{ state: ${mutationFields.state}, subscribableId: "${mutationFields.subscribableId}"
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            subscribable { ${subscription} }
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateTeamDiscussionComment
 * @mutationFields
 ** body string
 ** bodyVersion string
 ** id string
 * @fields TeamDiscussionComment
 */

export const UpdateTeamDiscussionComment = (mutationFields: types.UpdateTeamDiscussionCommentInput, teamDiscussionComment?: string) => `
    mutation UpdateTeamDiscussionCommentInput {
        updateTeamDiscussionComment (input:{ id: "${mutationFields.id}", body: "${mutationFields.body}" ${mutationFields.bodyVersion ? `, bodyVersion: "${mutationFields.bodyVersion}"` : ''} 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${teamDiscussionComment}
        }
    }mutationFields.title
`

/**
 * @description Github Graphql Mutation for UpdateTeamDiscussion
 * @mutationFields
 ** body string
 ** bodyVersion string
 ** id string
 ** pinned boolean
 ** title string
 * @fields TeamDiscussion
 */

export const UpdateTeamDiscussion = (mutationFields: types.UpdateTeamDiscussionInput, teamDiscussion?: string) => `
    mutation UpdateTeamDiscussionInput {
        updateTeamDiscussion (input:{ id: "${mutationFields.id}", body: "${mutationFields.body}" ${mutationFields.bodyVersion ? `, bodyVersion: "${mutationFields.bodyVersion}"` : ''}
        ${mutationFields.pinned ? `, pinned: ${mutationFields.pinned}` : ''} ${mutationFields.title ? `, title: "${mutationFields.title}"` : ''} 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${teamDiscussion}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateTeamReviewAssignment
 * @mutationFields
 ** algorithm "LOAD_BALANCE" | "ROUND_ROBIN"
 ** enabled boolean
 ** excludedTeamMemberIds string[]
 ** id string
 ** notifyTeam boolean
 ** teamMemberCount number
 * @fields Team
 */

export const UpdateTeamReviewAssignment = (mutationFields: types.UpdateTeamReviewAssignmentInput, team?: string) => `
    mutation UpdateTeamReviewAssignmentInput {
        updateTeamReviewAssignment (input:{ id: "${mutationFields.id}", ${mutationFields.algorithm ? `, algorithm: ${mutationFields.algorithm}` : ''} ${mutationFields.enabled ? `, enabled: ${mutationFields.enabled}` : ''} 
        ${mutationFields.excludedTeamMemberIds ? `, excludedTeamMemberIds: [ ${mutationFields.excludedTeamMemberIds} ]` : ''} 
        ${mutationFields.notifyTeam ? `, notifyTeam: ${mutationFields.notifyTeam}` : ''} ${mutationFields.teamMemberCount ? `, teamMemberCount: ${mutationFields.teamMemberCount}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${team}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateTopics
 * @mutationFields
 ** repositoryId string
 ** topicNames string[]
 * @fields Repository
 */

export const UpdateTopics = (mutationFields: types.UpdateTopicsInput, repository?: string) => `
    mutation UpdateTopicsInput {
        updateTopics (input:{ repositoryId: "${mutationFields.repositoryId}", topicNames: [ ${mutationFields.topicNames} ],
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${repository}
            invalidTopicNames
        }
    }
`

/**
 * @description Github Graphql Mutation for UserStatusOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "UPDATED_AT"
 */

export const UserStatusOrder = (mutationFields: types.UserStatusOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for VerifiableDomainOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "DOMAIN"
 */

export const VerifiableDomainOrder = (mutationFields: types.VerifiableDomainOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for VerifyVerifiableDomain
 * @mutationFields
 ** clientMutationId string
 ** id string
 * @fields VerifiableDomain
 */

export const VerifyVerifiableDomain = (mutationFields: types.DefautFields, verifiableDomain?: string) => `
    mutation VerifyVerifiableDomainInput {
        verifyVerifiableDomain (input:{ id: "${mutationFields.id}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${verifiableDomain}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateDeployment
 * @mutationFields
 ** autoMerge boolean
 ** clientMutationId string
 ** description string
 ** environment string
 ** payload string
 ** refId string
 ** repositoryId string
 ** requiredContexts string[]
 ** task string
 * @fields Deployment
 */

export const CreateDeployment = (mutationFields: types.CreateDeploymentInput, deployment?: string) => `
    mutation CreateDeploymentInput {
        createDeployment (input:{ repositoryId: "${mutationFields.repositoryId}", ${mutationFields.autoMerge !== undefined ? `, autoMerge: ${mutationFields.autoMerge}` : ''} ${mutationFields.description ? `, description: "${mutationFields.description}"` : ''}  
        ${mutationFields.environment ? `, environment: "${mutationFields.environment}"` : ''} ${mutationFields.refId ? `, refId: "${mutationFields.refId}"` : ''} ${mutationFields.requiredContexts ? `, requiredContexts: ${mutationFields.requiredContexts}` : ''}
        ${mutationFields.task ? `, task: "${mutationFields.task}"` : ''} ${mutationFields.payload ? `, payload: "${mutationFields.payload}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${deployment}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateDeploymentStatus
 * @mutationFields
 ** autoInactive boolean
 ** clientMutationId string
 ** deploymentId string
 ** description string
 ** environment string
 ** environmentUrl string
 ** logUrl string
 ** state "ERROR" | "FAILURE" | "INACTIVE" | "IN_PROGRESS" | "PENDING" | "QUEUED" | "SUCCESS" | "WAITING"
 * @fields Deployment
 */

export const CreateDeploymentStatus = (mutationFields: types.CreateDeploymentStatusInput, deployment?: string) => `
    mutation CreateDeploymentStatusInput {
        createDeploymentStatus (input:{deploymentId: "${mutationFields.deploymentId}" ${mutationFields.autoInactive !== undefined ? `, autoInactive: ${mutationFields.autoInactive}` : ''} ${mutationFields.description ? `, description: "${mutationFields.description}"` : ''}
        ${mutationFields.environment ? `, environment: "${mutationFields.environment}"` : ''} ${mutationFields.environmentUrl ? `, environmentUrl: "${mutationFields.environmentUrl}"` : ''}
        ${mutationFields.logUrl ? `, logUrl: "${mutationFields.logUrl}"` : ''} ${mutationFields.state ? `, state: ${mutationFields.state}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${deployment}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateLabel
 * @mutationFields
 ** name string
 ** clientMutationId string
 ** color string
 ** description string
 ** id string
 * @fields Label
 */

export const CreateLabel = (mutationFields: types.CreateLabelInput, label?: string) => `
    mutation CreateLabelInput {
        createLabel (input:{name:"${mutationFields.name}", color:"${mutationFields.color}", description:"${mutationFields.description}" 
            ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${label}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteLabel
 * @mutationFields
 ** id string
 */

export const DeleteLabel = (mutationFields: types.DefautFields) => `
    mutation DeleteLabelInput {
        deleteLabel (input:{id:"${mutationFields.id}" }){
            clientMutationId
        }
    }
`
