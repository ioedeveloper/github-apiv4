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
 * @fields Comment
 */

export const AddComment = (mutationFields: types.AddCommentInput, comment?: string) => `
    mutation AddCommentInput {
        addComment  (input:{body: "${mutationFields.body}" ${mutationFields.subjectId ? `, subjectId: "${mutationFields.subjectId}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
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
 * @description Github Graphql Mutation for AddEnterpriseSupportEntitlement
 * @mutationFields
 ** clientMutationId string
 ** labelIds string[]
 ** labelableId string
 * @fields Labels
 */

export const AddLabelsToLabelable = (mutationFields: types.LabelsToLabelableInput, support?: string) => `
    mutation LabelsToLabelableInput {
        addLabelsToLabelable  (input:{labelableId: "${mutationFields.labelableId}" ${mutationFields.labelIds ? `, labelIds: "${mutationFields.labelIds}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
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
        addProjectCard  (input:{note: "${mutationFields.note}" ${mutationFields.contentId ? `, contentId: "${mutationFields.contentId}"` : ''} ${mutationFields.projectColumnId ? `, projectColumnId: "${mutationFields.projectColumnId}"` : ''}
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${card}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddProjectColumn
 * @mutationFields
 ** clientMutationId string
 ** contentId string
 ** name string
 ** projectColumnId string
 * @fields ProjectCard
 */

export const AddProjectColumn = (mutationFields: types.AddProjectColumnInput, card?: string) => `
 mutation AddProjectColumnInput {
    addProjectColumn  (input:{name: "${mutationFields.name}" ${mutationFields.projectId ? `, projectId: "${mutationFields.projectId}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
         ${card}
     }
 }
`

/**
 * @description Github Graphql Mutation for AddPullRequestReviewCommentInput
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
 * @fields PullRequestReviewComment
 */

export const AddPullRequestReviewComment = (mutationFields: types.AddPullRequestReviewCommentInput, review?: string) => `
    mutation AddPullRequestReviewCommentInput {
        addPullRequestReviewComment  (input:{body: "${mutationFields.body}", pullRequestId:${mutationFields.pullRequestId}, pullRequestReviewId:"${mutationFields.pullRequestReviewId}" 
            ${mutationFields.inReplyTo ? `, inReplyTo: "${mutationFields.inReplyTo}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
            ${mutationFields.path ? `, path: "${mutationFields.path}"` : ''}}){
            ${review}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddPullRequestReviewInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** comments DraftPullRequestReviewComment[]
 ** commitOID ( GitObjectID )
 ** event ( PullRequestReviewEvent )
 ** path string
 ** pullRequestId string
 ** threads DraftPullRequestReviewThread[]
 * @fields PullRequestReview
 */

export const AddPullRequestReview = (mutationFields: types.AddPullRequestReviewInput, review?: string) => `
    mutation AddPullRequestReviewInput {
        addPullRequestReview  (input:{body: "${mutationFields.body}", pullRequestId:${mutationFields.pullRequestId}, comments:"${mutationFields.comments}" 
            ${mutationFields.commitOID ? `, commitOID: "${mutationFields.commitOID}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
            ${mutationFields.event ? `, event: "${mutationFields.event}"` : ''}}){
            ${review}
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
 * @fields PullRequestReviewThread
 */

export const AddPullRequestReviewThread = (mutationFields: types.AddPullRequestReviewThreadInput, review?: string) => `
    mutation AddPullRequestReviewThreadInput {
        addPullRequestReviewThread  (input:{body: "${mutationFields.body}", path:"${mutationFields.path}", position:${mutationFields.position} line:${mutationFields.line} side:${mutationFields.side} startLine:${mutationFields.startLine} 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} ${mutationFields.pullRequestId ? `, pullRequestId: "${mutationFields.pullRequestId}"` : ''} ${mutationFields.pullRequestReviewId ? `, pullRequestReviewId: "${mutationFields.pullRequestReviewId}"` : ''}
        ${mutationFields.startSide ? `, startSide: "${mutationFields.startSide}"` : ''}
        }){
            ${review}
        }
    }
`

/**
 * @description Github Graphql Mutation for AddReactionInput
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
 * @description Github Graphql Mutation for AddStarInput
 * @mutationFields
 ** clientMutationId string
 ** starrableId string
 * @fields Star
 */

export const AddStar = (mutationFields: types.AddStarInput, star?: string) => `
    mutation AddStarInput {
        addStar  (input:{starrableId: "${mutationFields.starrableId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
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
 * @fields Domain
 */

export const ApproveVerifiableDomain = (mutationFields: types.ApproveVerifiableDomainInput, star?: string) => `
    mutation ApproveVerifiableDomainInput {
        approveVerifiableDomain  (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${star}
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for CancelEnterpriseAdminInvitationInput
 * @mutationFields
 ** clientMutationId string
 ** invitationId string
 * @fields AuditLog
 */

export const CancelEnterpriseAdminInvitation = (mutationFields: types.CancelEnterpriseAdminInvitationInput, invitation?: string) => `
    mutation CancelEnterpriseAdminInvitationInput {
        cancelEnterpriseAdminInvitation  (input:{invitationId: "${mutationFields.invitationId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${invitation}
        }
    }
`

/**
 * @description Github Graphql Mutation for ChangeUserStatusInput
 * @mutationFields
 ** clientMutationId string
 ** emoji string
 ** expiresAt string
 ** limitedAvailability boolean
 ** message string
 ** organizationId string
 * @fields Status
 */

export const ChangeUserStatus = (mutationFields: types.ChangeUserStatusInput, issue?: string) => `
    mutation ChangeUserStatusInput {
        changeUserStatus  (input:{message:${mutationFields.message} ${mutationFields.emoji ? `, emoji: "${mutationFields.emoji}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}
            ${mutationFields.expiresAt ? `, expiresAt: ${mutationFields.expiresAt}` : ''} ${mutationFields.limitedAvailability ? `, limitedAvailability: ${mutationFields.limitedAvailability}` : ''} ${mutationFields.organizationId ? `, milestoneId: ${mutationFields.organizationId}"` : ''}}){
            ${issue}
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
 * @fields CheckAnnotation
 */

export const CheckAnnotationData = (mutationFields: types.CheckAnnotationData, issue?: string) => `
    mutation CheckAnnotationData {
        checkAnnotationData (input:{annotationLevel:${mutationFields.annotationLevel} ${mutationFields.location ? `, location: "${mutationFields.location}"` : ''} ${mutationFields.message ? `, message: ${mutationFields.message}` : ''}
            ${mutationFields.path ? `, path: ${mutationFields.path}` : ''} ${mutationFields.rawDetails ? `, rawDetails: ${mutationFields.rawDetails}` : ''} ${mutationFields.title ? `, title: ${mutationFields.title}"` : ''}}){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for CheckAnnotationRange
 * @mutationFields
 ** endColumn number
 ** endLine number
 ** startColumn number
 ** startLine number
 * @fields CheckAnnotation
 */

export const CheckAnnotationRange = (mutationFields: types.CheckAnnotationRange, review?: string) => `
    mutation CheckAnnotationRange {
        checkAnnotationRange  (input:{${mutationFields.startColumn ? `startColumn: ${mutationFields.startColumn}` : ''} ${mutationFields.endColumn ? `, endColumn: ${mutationFields.endColumn}` : ''} ${mutationFields.startLine ? `startLine: ${mutationFields.startLine}` : ''}
        ${mutationFields.endLine ? `, endLine: ${mutationFields.endLine}` : ''}}){
            ${review}
        }
    }
`

/**
 * @description Github Graphql Mutation for CheckRunAction
 * @mutationFields
 ** description string
 ** identifier string
 ** label string
 * @fields CheckRun
 */

export const CheckRunAction = (mutationFields: types.CheckRunAction, checkrun?: string) => `
 mutation CheckRunAction {
    checkRunAction  (input:{${mutationFields.description ? `description: "${mutationFields.description}"` : ''} ${mutationFields.identifier ? `, identifier: "${mutationFields.identifier}"` : ''} ${mutationFields.label ? `label: "${mutationFields.label}"` : ''} }){
         ${checkrun}
     }
 }
`

/**
 * @description Github Graphql Mutation for CheckRunFilter
 * @mutationFields
 ** appId number
 ** checkName string
 ** checkType "ALL" | "LATEST"
 ** status "COMPLETED" | "IN_PROGRESS" | "QUEUED" | "REQUESTED" | "WAITING"
 * @fields CheckRun
 */

export const CheckRunFilter = (mutationFields: types.CheckRunFilter, checkrun?: string) => `
 mutation CheckRunAction {
    checkRunAction  (input:{${mutationFields.appId ? `appId: ${mutationFields.appId}` : ''} ${mutationFields.checkName ? `, checkName: "${mutationFields.checkName}"` : ''} ${mutationFields.checkType ? `, checkType: "${mutationFields.checkType}"` : ''}
    ${mutationFields.status ? `, status: "${mutationFields.status}"` : ''} }){
         ${checkrun}
     }
 }
`

/**
 * @description Github Graphql Mutation for CheckRunOutput
 * @mutationFields
 ** annotations CheckAnnotationData
 ** images CheckRunOutputImage
 ** summary string
 ** text string
 ** title string
 * @fields CheckRun
 */

export const CheckRunOutput = (mutationFields: types.CheckRunOutput, checkrun?: string) => `
 mutation CheckRunOutput {
    checkRunOutput  (input:{ annotations: ${mutationFields.annotations}, images: ${mutationFields.images} summary: "${mutationFields.summary}",
    text: "${mutationFields.text}" title: "${mutationFields.title}"}){
         ${checkrun}
     }
 }
`

/**
 * @description Github Graphql Mutation for CheckRunOutputImage
 * @mutationFields
 ** alt string
 ** caption string
 ** imageUrl string
 * @fields CheckRun
 */

export const CheckRunOutputImage = (mutationFields: types.CheckRunOutputImage, checkrun?: string) => `
 mutation CheckRunOutputImage {
    checkRunOutputImage  (input:{ alt: "${mutationFields.alt}", imageUrl: "${mutationFields.imageUrl}", caption: "${mutationFields.caption}"}){
         ${checkrun}
     }
 }
`

/**
 * @description Github Graphql Mutation for CheckSuiteAutoTriggerPreference
 * @mutationFields
 ** appId string
 ** setting boolean
 * @fields CheckRun
 */

export const CheckSuiteAutoTriggerPreference = (mutationFields: types.CheckSuiteAutoTriggerPreference, checkrun?: string) => `
 mutation CheckSuiteAutoTriggerPreference {
    checkSuiteAutoTriggerPreference  (input:{ appId: "${mutationFields.appId}", setting: ${mutationFields.setting}}){
         ${checkrun}
     }
 }
`

/**
 * @description Github Graphql Mutation for CheckSuiteFilter
 * @mutationFields
 ** appId number
 ** checkName boolean
 * @fields CheckRun
 */

export const CheckSuiteFilter = (mutationFields: types.CheckSuiteFilter, checkrun?: string) => `
 mutation CheckSuiteFilter {
    checkSuiteFilter  (input:{ appId: "${mutationFields.appId}", setting: "${mutationFields.checkName}"}){
         ${checkrun}
     }
 }
`

/**
 * @description Github Graphql Mutation for ClearLabelsFromLabelableInput
 * @mutationFields
 ** clientMutationId string
 ** labelableId string
 * @fields Labelable
 */

export const ClearLabelsFromLabelable = (mutationFields: types.ClearLabelsFromLabelableInput, labelable?: string) => `
 mutation ClearLabelsFromLabelableInput {
    clearLabelsFromLabelable  (input:{ appId: "${mutationFields.labelableId}", ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
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
         ${mutationFields.targetOwnerId ? `, targetOwnerId: ${mutationFields.targetOwnerId}` : ''} ${mutationFields.sourceId ? `, sourceId: ${mutationFields.sourceId}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
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
    cloneTemplateRepository  (input:{description:"${mutationFields.description}", includeAllBranches: ${mutationFields.includeAllBranches} 
         ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.ownerId ? `, ownerId: ${mutationFields.ownerId}` : ''} ${mutationFields.repositoryId ? `, repositoryId: ${mutationFields.repositoryId}` : ''} 
         ${mutationFields.visibility ? `, visibility: "${mutationFields.visibility}"` : ''} }){
         ${repository}
     }
 }
`

/**
 * @description Github Graphql Mutation for CloseIssueInput
 * @mutationFields
 ** clientMutationId string
 ** issueId string
 * @fields Issue
 */

export const CloseIssue = (mutationFields: types.CloseIssueInput, checkrun?: string) => `
 mutation CloseIssueInput {
    closeIssue (input:{ issueId: "${mutationFields.issueId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${checkrun}
     }
 }
`

/**
 * @description Github Graphql Mutation for ClosePullRequestInput
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
 * @fields Issue
 */

export const CommitAuthor = (mutationFields: types.CommitAuthor, checkrun?: string) => `
 mutation CommitAuthor {
    commitAuthor (input:{ emails: ${mutationFields.emails} id: ${mutationFields.id}}){
         ${checkrun}
     }
 }
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
 * @fields Issue
 */

export const ContributionOrder = (mutationFields: types.Direction) => `
    { contributionOrder { direction: ${mutationFields.direction} } }
`

/**
 * @description Github Graphql Mutation for ConvertProjectCardNoteToIssueInput
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
 * @description Github Graphql Mutation for ConvertPullRequestToDraftInput
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
 * @description Github Graphql Mutation for CreateBranchProtectionRuleInput
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
        createBranchProtectionRule (input:{allowsDeletions: ${mutationFields.allowsDeletions}, allowsForcePushes: ${mutationFields.allowsForcePushes}, dismissesStaleReviews: ${mutationFields.dismissesStaleReviews} 
                ${mutationFields.isAdminEnforced ? `, isAdminEnforced: ${mutationFields.isAdminEnforced}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
                ${mutationFields.pattern ? `, pattern: "${mutationFields.pattern}"` : ''} ${mutationFields.pushActorIds ? `, pushActorIds: ${mutationFields.pushActorIds}` : ''} ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''}
                ${mutationFields.requiredApprovingReviewCount ? `, requiredApprovingReviewCount: ${mutationFields.requiredApprovingReviewCount}` : ''} ${mutationFields.requiredStatusCheckContexts ? `, requiredStatusCheckContexts: ${mutationFields.requiredStatusCheckContexts}` : ''}
                ${mutationFields.requiresApprovingReviews ? `, requiresApprovingReviews: ${mutationFields.requiresApprovingReviews}` : ''} ${mutationFields.requiresCodeOwnerReviews ? `, requiresCodeOwnerReviews: ${mutationFields.requiresCodeOwnerReviews}` : ''} 
                ${mutationFields.requiresCommitSignatures ? `, requiresCommitSignatures: ${mutationFields.requiresCommitSignatures}` : ''} ${mutationFields.requiresLinearHistory ? `, requiresLinearHistory : ${mutationFields.requiresLinearHistory}` : ''}
                ${mutationFields.requiresStatusChecks ? `, requiresStatusChecks: ${mutationFields.requiresStatusChecks}` : ''} ${mutationFields.requiresStrictStatusChecks ? `, requiresStrictStatusChecks: ${mutationFields.requiresStrictStatusChecks}` : ''} 
                ${mutationFields.restrictsPushes ? `, restrictsPushes: ${mutationFields.restrictsPushes}` : ''} ${mutationFields.restrictsReviewDismissals ? `, restrictsReviewDismissals: ${mutationFields.restrictsReviewDismissals}` : ''} 
                ${mutationFields.reviewDismissalActorIds ? `, reviewDismissalActorIds: ${mutationFields.reviewDismissalActorIds}` : ''}}){
            ${branchProtectionRule}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateCheckRunInput
 * @mutationFields
 ** actions CheckRunAction[]
 ** clientMutationId string
 ** completedAt Date
 ** conclusion CheckConclusionState
 ** detailsUrl string
 ** externalId string
 ** headSha GitObjectID
 ** name string
 ** output CheckRunOutput
 ** repositoryId string
 ** startedAt Date
 ** status RequestableCheckStatusState
 * @fields CheckRun
 */

export const CreateCheckRun = (mutationFields: types.CreateCheckRunInput, checkRun?: string) => `
 mutation CreateCheckRunInput {
    createCheckRun (input:{actions: ${mutationFields.actions}, completedAt: "${mutationFields.completedAt}", conclusion: ${mutationFields.conclusion} 
             ${mutationFields.detailsUrl ? `, detailsUrl : "${mutationFields.detailsUrl}"` : ''} ${mutationFields.externalId ? `, externalId: "${mutationFields.externalId}"` : ''}
             ${mutationFields.headSha ? `, headSha: "${mutationFields.headSha}"` : ''} ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.output ? `, output: ${mutationFields.output}` : ''}
             ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''} ${mutationFields.startedAt ? `, startedAt: "${mutationFields.startedAt}"` : ''}
             ${mutationFields.status ? `, status: ${mutationFields.status}` : ''} }){
         ${checkRun}
     }
 }
`

/**
 * @description Github Graphql Mutation for CreateCheckSuiteInput
 * @mutationFields
 ** clientMutationId string
 ** headSha string
 ** repositoryId string
 * @fields PullRequest
 */

export const CreateCheckSuite = (mutationFields: types.CreateCheckSuiteInput, repository?: string) => `
 mutation CreateCheckSuiteInput {
    createCheckSuite (input:{ headSha : ${mutationFields.headSha}, repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${repository}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateContentAttachmentInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** contentReferenceId string
 ** title string
 * @fields PullRequest
 */

export const CreateContentAttachment = (mutationFields: types.CreateContentAttachmentInput, repository?: string) => `
 mutation CreateContentAttachmentInput {
    createContentAttachment (input:{ body: "${mutationFields.body}", contentReferenceId: "${mutationFields.contentReferenceId}", title: "${mutationFields.title}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${repository}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateEnterpriseOrganizationInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** contentReferenceId string
 ** title string
 * @fields Organization
 */

export const CreateEnterpriseOrganization = (mutationFields: types.CreateEnterpriseOrganizationInput, repository?: string) => `
 mutation CreateEnterpriseOrganizationInput {
    createEnterpriseOrganization (input:{ adminLogins: ${mutationFields.adminLogins}, billingEmail: "${mutationFields.billingEmail}", enterpriseId: "${mutationFields.enterpriseId}" 
    login: "${mutationFields.login}" profileName: "${mutationFields.profileName}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${repository}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateIpAllowListEntryInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** contentReferenceId string
 ** title string
 * @fields IpAllowList
 */

export const CreateIpAllowListEntry = (mutationFields: types.CreateIpAllowListEntryInput, ipAllowList?: string) => `
 mutation CreateIpAllowListEntryInput {
    createIpAllowListEntry (input:{ allowListValue: ${mutationFields.allowListValue}, isActive: ${mutationFields.isActive}, name: "${mutationFields.name}" 
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
 * @description Github Graphql Mutation for CreateProjectInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** name string
 ** public boolean
 ** state "CLOSED" | "OPEN"
 * @fields Project
 */

export const CreateProjectInput = (mutationFields: types.CreateProjectInput, project?: string) => `
    mutation CreateProjectInput {
        createProject (input:{ body: ${mutationFields.body}, name: "${mutationFields.name}" ${mutationFields.public ? `, public: ${mutationFields.public}` : ''} 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreatePullRequestInput
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

export const CreatePullRequestInput = (mutationFields: types.CreatePullRequestInput, pullRequest?: string) => `
 mutation CreatePullRequestInput {
    createPullRequest (input:{ body: ${mutationFields.body}, baseRefName: ${mutationFields.baseRefName}, draft: ${mutationFields.draft} 
        headRefName: "${mutationFields.headRefName}", maintainerCanModify: ${mutationFields.maintainerCanModify} 
        repositoryId: "${mutationFields.repositoryId}", title: "${mutationFields.title}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${pullRequest}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateRefInput
 * @mutationFields
 ** clientMutationId string
 ** name string
 ** oid GitObjectID!
 ** repositoryId string
 * @fields PullRequest
 */

export const CreateRefInput = (mutationFields: types.CreateRefInput, project?: string) => `
 mutation CreateRefInput {
    createRef (input:{ name: "${mutationFields.name}",  repositoryId: "${mutationFields.repositoryId}", oid: "${mutationFields.oid}", 
    ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${project}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateRepositoryInput
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
 * @fields Issue
 */

export const CreateRepositoryInput = (mutationFields: types.CreateRepositoryInput, issue?: string) => `
 mutation CreateRepositoryInput {
    createRepository (input:{description:"${mutationFields.description}", name:"${mutationFields.name}", hasIssuesEnabled: ${mutationFields.hasIssuesEnabled}, 
         assigneeIds: ${mutationFields.hasWikiEnabled} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
         ${mutationFields.homepageUrl ? `, homepageUrl: "${mutationFields.homepageUrl}"` : ''} ${mutationFields.ownerId ? `, ownerId: "${mutationFields.ownerId}"` : ''}
          ${mutationFields.teamId ? `, teamId: "${mutationFields.teamId}"` : ''} ${mutationFields.template ? `, template: ${mutationFields.template}` : ''} ${mutationFields.visibility ? `, visibility: ${mutationFields.visibility}` : ''} }){
         ${issue}
     }
 }
`

/**
 * @description Github Graphql Mutation for CreateTeamDiscussionCommentInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** discussionId string
 * @fields PullRequest
 */

export const CreateTeamDiscussionCommentInput = (mutationFields: types.CreateTeamDiscussionCommentInput, project?: string) => `
 mutation CreateTeamDiscussionCommentInput {
    createTeamDiscussionComment (input:{ body: "${mutationFields.body}",  discussionId: "${mutationFields.discussionId}" 
    ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${project}
    }
 }
`

/**
 * @description Github Graphql Mutation for CreateTeamDiscussionInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** private boolean
 ** teamId string
 ** title string
 * @fields TeamDiscussion
 */

export const CreateTeamDiscussionInput = (mutationFields: types.CreateTeamDiscussionInput, teamDiscussion?: string) => `
 mutation CreateTeamDiscussionInput {
    createTeamDiscussion (input:{ body: "${mutationFields.body}",  private : ${mutationFields.private}, teamId : "${mutationFields.teamId}", title : "${mutationFields.title}"  
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${teamDiscussion}
    }
 }
`

/**
 * @description Github Graphql Mutation for DeclineTopicSuggestionInput
 * @mutationFields
 ** name string
 ** clientMutationId string
 ** reason "NOT_RELEVANT" | "PERSONAL_PREFERENCE" | "TOO_GENERAL" | "TOO_SPECIFIC"
 ** repositoryId string
 * @fields Topic
 */

export const DeclineTopicSuggestionInput = (mutationFields: types.DeclineTopicSuggestionInput, topic?: string) => `
 mutation DeclineTopicSuggestionInput {
    declineTopicSuggestion (input:{ name: "${mutationFields.name}",  reason : ${mutationFields.reason}, repositoryId: "${mutationFields.repositoryId}"  
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${topic}
    }
 }
`

/**
 * @description Github Graphql Mutation for DeleteBranchProtectionRuleInput
 * @mutationFields
 ** branchProtectionRuleId string
 ** clientMutationId string
 * @fields BranchProtectionRule
 */

export const DeleteBranchProtectionRuleInput = (mutationFields: types.DeleteBranchProtectionRuleInput, branchProtectionRule?: string) => `
    mutation DeleteBranchProtectionRuleInput {
        deleteBranchProtectionRule (input:{branchProtectionRuleId: "${mutationFields.branchProtectionRuleId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${branchProtectionRule}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteDeploymentInput
 * @mutationFields
 ** id string
 ** clientMutationId string
 * @fields Deployment
 */

export const DeleteDeploymentInput = (mutationFields: types.DefautFields, deployment?: string) => `
    mutation DeleteDeploymentInput {
        deleteDeployment (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${deployment}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteIpAllowListEntryInput
 * @mutationFields
 ** ipAllowListEntryId string
 ** clientMutationId string
 * @fields IpAllowList
 */

export const DeleteIpAllowListEntryInput = (mutationFields: types.DeleteIpAllowListEntryInput, ipAllowList?: string) => `
    mutation DeleteIpAllowListEntryInput {
        deleteIpAllowListEntry (input:{ipAllowListEntryId: "${mutationFields.ipAllowListEntryId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${ipAllowList}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteIssueCommentInput
 * @mutationFields
 ** id string
 ** clientMutationId string
 * @fields Comment
 */

export const DeleteIssueCommentInput = (mutationFields: types.DefautFields, deployment?: string) => `
    mutation DeleteDeploymentInput {
        deleteDeployment (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${deployment}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteIssueInput
 * @mutationFields
 ** issueId string
 ** clientMutationId string
 * @fields Issue
 */

export const DeleteIssueInput = (mutationFields: types.DeleteIssueInput, issue?: string) => `
    mutation DeleteIssueInput {
        deleteIssue (input:{issueId: "${mutationFields.issueId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeletePackageVersionInput
 * @mutationFields
 ** id string
 ** clientMutationId string
 * @fields PackageVersion
 */

export const DeletePackageVersionInput = (mutationFields: types.DefautFields, packageVersion?: string) => `
    mutation DeleteDeploymentInput {
        deleteDeployment (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${packageVersion}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteProjectCardInput
 * @mutationFields
 ** projectId string
 ** clientMutationId string
 * @fields ProjectCard
 */

export const DeleteProjectCardInput = (mutationFields: types.DeleteProjectCardInput, projectCard?: string) => `
    mutation DeleteProjectCardInput {
        deleteProjectCard (input:{projectId: "${mutationFields.projectId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${projectCard}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteProjectColumnInput
 * @mutationFields
 ** columnId string
 ** clientMutationId string
 * @fields PackageVersion
 */

export const DeleteProjectColumnInput = (mutationFields: types.DeleteProjectColumnInput, packageVersion?: string) => `
    mutation DeleteProjectColumnInput {
        deleteProjectColumn (input:{columnId : "${mutationFields.columnId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${packageVersion}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteProjectInput
 * @mutationFields
 ** projectId string
 ** clientMutationId string
 * @fields Project
 */

export const DeleteProjectInput = (mutationFields: types.DeleteProjectInput, project?: string) => `
    mutation DeleteProjectInput {
        deleteProjectColumn (input:{projectId : "${mutationFields.projectId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeletePullRequestReviewCommentInput
 * @mutationFields
 ** projectId string
 ** clientMutationId string
 * @fields ProjectColumn
 */

export const DeletePullRequestReviewCommentInput = (mutationFields: types.DefautFields, projectColumn?: string) => `
    mutation DeleteProjectInput {
        deleteProjectColumn (input:{id : "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${projectColumn}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeletePullRequestReviewInput
 * @mutationFields
 ** projectId string
 ** clientMutationId string
 * @fields PullRequestReview
 */

export const DeletePullRequestReviewInput = (mutationFields: types.DeletePullRequestReviewInput, pullRequestReview?: string) => `
    mutation DeletePullRequestReviewInput {
        deletePullRequestReview (input:{pullRequestReviewId: "${mutationFields.pullRequestReviewId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${pullRequestReview}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteRefInput
 * @mutationFields
 ** refId string
 ** clientMutationId string
 * @fields Ref
 */

export const DeleteRefInput = (mutationFields: types.DeleteRefInput, ref?: string) => `
    mutation DeleteRefInput {
        deleteRef (input:{refId: "${mutationFields.refId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${ref}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteTeamDiscussionCommentInput
 * @mutationFields
 ** id string
 ** clientMutationId string
 * @fields TeamDiscussionComment
 */

export const DeleteTeamDiscussionCommentInput = (mutationFields: types.DefautFields, teamDiscussionComment?: string) => `
    mutation DeleteRefInput {
        deleteTeamDiscussionComment (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${teamDiscussionComment}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteTeamDiscussionInput
 * @mutationFields
 ** id string
 ** clientMutationId string
 * @fields TeamDiscussion
 */

export const DeleteTeamDiscussionInput = (mutationFields: types.DefautFields, teamDiscussion?: string) => `
    mutation DeleteTeamDiscussionInput {
        deleteTeamDiscussion (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${teamDiscussion}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteVerifiableDomainInput
 * @mutationFields
 ** id string
 ** clientMutationId string
 * @fields VerifiableDomain
 */

export const DeleteVerifiableDomainInput = (mutationFields: types.DefautFields, verifiableDomain?: string) => `
    mutation DeleteVerifiableDomainInput {
        deleteVerifiableDomain (input:{id: "${mutationFields.id}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${verifiableDomain}
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
 * @description Github Graphql Mutation for DisablePullRequestAutoMergeInput
 * @mutationFields
 ** pullRequestId string
 ** clientMutationId string
 * @fields PullRequest
 */

export const DisablePullRequestAutoMergeInput = (mutationFields: types.DisablePullRequestAutoMergeInput, pullRequest?: string) => `
    mutation DisablePullRequestAutoMergeInput {
        disablePullRequestAutoMerge (input:{pullRequestId: "${mutationFields.pullRequestId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''} }){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for DismissPullRequestReviewInput
 * @mutationFields
 ** pullRequestReviewId string
 ** clientMutationId string
 ** message string
 * @fields PullRequestReview
 */

export const DismissPullRequestReviewInput = (mutationFields: types.DismissPullRequestReviewInput, pullRequest?: string) => `
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
 * @fields PullRequest
 */

export const DraftPullRequestReviewComment = (mutationFields: types.DraftPullRequestReviewComment, review?: string) => `
    mutation DraftPullRequestReviewComment {
        draftPullRequestReviewComment (input:{body : "${mutationFields.body}", path:"${mutationFields.path}", position: ${mutationFields.position} }){
            ${review}
        }
    }
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
 * @fields PullRequestReviewThread
 */

export const DraftPullRequestReviewThread = (mutationFields: types.DraftPullRequestReviewThread, pullRequestReviewThread?: string) => `
    mutation DraftPullRequestReviewThread {
        draftPullRequestReviewThread  (input:{body: "${mutationFields.body}", path: "${mutationFields.path}", line: ${mutationFields.line}, side: ${mutationFields.side} startLine: ${mutationFields.startLine}
        startSide: ${mutationFields.startSide}}){
            ${pullRequestReviewThread}
        }
    }
`

/**
 * @description Github Graphql Mutation for EnablePullRequestAutoMergeInput
 * @mutationFields
 ** authorEmail string
 ** clientMutationId string
 ** commitBody string
 ** commitHeadline string
 ** mergeMethod "MERGE" | "REBASE" | "SQUASH"
 ** pullRequestId string
 * @fields PullRequest
 */

export const EnablePullRequestAutoMergeInput = (mutationFields: types.EnablePullRequestAutoMergeInput, pullRequest?: string) => `
    mutation EnablePullRequestAutoMergeInput {
        enablePullRequestAutoMerge  (input:{${mutationFields.authorEmail ? `, authorEmail: ${mutationFields.authorEmail}` : ''} ${mutationFields.commitBody ? `, commitBody: ${mutationFields.commitBody}` : ''}, ${mutationFields.commitBody ? `, commitBody: ${mutationFields.commitBody}` : ''}, commitHeadline:"${mutationFields.commitHeadline}", 
        ${mutationFields.mergeMethod ? `, mergeMethod: ${mutationFields.mergeMethod}` : ''} ${mutationFields.pullRequestId ? `, pullRequestId: ${mutationFields.pullRequestId}` : ''}}){
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
    {field: ${mutationFields.field}, direction: ${mutationFields.direction}}
`

/**
 * @description Github Graphql Mutation for EnterpriseServerInstallationOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "CUSTOMER_NAME" | "HOST_NAME"
 */

export const EnterpriseServerInstallationOrder = (mutationFields: types.EnterpriseServerInstallationOrder) => `
    {field: ${mutationFields.field}, direction: ${mutationFields.direction}}
`

/**
 * @description Github Graphql Mutation for EnterpriseServerUserAccountEmailOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "EMAIL"
 */

export const EnterpriseServerUserAccountEmailOrder = (mutationFields: types.EnterpriseServerUserAccountEmailOrder) => `
    {field: ${mutationFields.field}, direction: ${mutationFields.direction}}
`

/**
 * @description Github Graphql Mutation for EnterpriseServerUserAccountOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "LOGIN" | "REMOTE_CREATED_AT"
 */

export const EnterpriseServerUserAccountOrder = (mutationFields: types.EnterpriseServerUserAccountOrder) => `
    {field: ${mutationFields.field}, direction: ${mutationFields.direction}}
`

/**
 * @description Github Graphql Mutation for EnterpriseServerUserAccountsUploadOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const EnterpriseServerUserAccountsUploadOrder = (mutationFields: types.EnterpriseServerUserAccountsUploadOrder) => `
    {field: ${mutationFields.field}, direction: ${mutationFields.direction}}
`

/**
 * @description Github Graphql Mutation for FollowUserInput
 * @mutationFields
 ** clientMutationId string
 ** userId string
 * @fields User
 */

export const FollowUserInput = (mutationFields: types.FollowUserInput, user?: string) => `
 mutation FollowUserInput {
    followUser (input:{userId: ${mutationFields.userId} ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
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
    {field: ${mutationFields.field}, direction: ${mutationFields.direction}}
`

/**
 * @description Github Graphql Mutation for ImportProjectInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** columnImports ProjectColumnImport[]
 ** name string
 ** ownerName string
 ** public boolean
 * @fields Project
 */

export const ImportProjectInput = (mutationFields: types.ImportProjectInput, project?: string) => `
    mutation ImportProjectInput {
        importProject (input:{body: ${mutationFields.body}, columnImports: ${mutationFields.columnImports}, 
            name: ${mutationFields.name}, ownerName: ${mutationFields.ownerName}, public: ${mutationFields.public} ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for InviteEnterpriseAdminInput
 * @mutationFields
 ** email string
 ** clientMutationId string
 ** enterpriseId string
 ** invitee string
 ** role "BILLING_MANAGER" | "OWNER"
 * @fields Project
 */

export const InviteEnterpriseAdminInput = (mutationFields: types.InviteEnterpriseAdminInput, invitation?: string) => `
    mutation InviteEnterpriseAdminInput {
        inviteEnterpriseAdmin (input:{email: ${mutationFields.email}, enterpriseId: ${mutationFields.enterpriseId}, 
            invitee: ${mutationFields.invitee}, role: ${mutationFields.role} ${mutationFields.clientMutationId ? `, clientMutationId: ${mutationFields.clientMutationId}` : ''}}){
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for IssueCommentOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "UPDATED_AT"
 */

export const IssueCommentOrder = (mutationFields: types.IssueCommentOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for IssueFilters
 * @mutationFields
 ** assignee string | "*"
 ** createdBy string
 ** labels string[]
 ** mentioned boolean
 ** milestone string
 ** since Date()
 ** states "CLOSED" | "OPEN"
 ** viewerSubscribed boolean
 */

export const IssueFilters = (mutationFields: types.IssueFilters) => `
    {assignee: "${mutationFields.assignee}", createdBy: "${mutationFields.createdBy}", labels: ${mutationFields.labels}, mentioned: "${mutationFields.mentioned}", milestone: "${mutationFields.milestone}",
    since: "${mutationFields.since}", states: ${mutationFields.states}, viewerSubscribed: ${mutationFields.viewerSubscribed}}
`

/**
 * @description Github Graphql Mutation for IssueOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "COMMENTS" | "CREATED_AT" | "UPDATED_AT"
 */

export const IssueOrder = (mutationFields: types.IssueOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for LabelOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "COMMENTS" | "CREATED_AT" | "UPDATED_AT"
 */

export const LabelOrder = (mutationFields: types.LabelOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for LanguageOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "SIZE"
 */

export const LanguageOrder = (mutationFields: types.LabelOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for LinkRepositoryToProjectInput
 * @mutationFields
 ** clientMutationId string
 ** projectId string
 ** repositoryId string
 * @fields Repository
 */

export const LinkRepositoryToProjectInput = (mutationFields: types.LinkRepositoryToProjectInput, repository?: string) => `
    mutation LinkRepositoryToProjectInput {
        linkRepositoryToProject (input:{projectId: "${mutationFields.projectId}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${repository}
        }
    }
`

/**
 * @description Github Graphql Mutation for LockLockableInput
 * @mutationFields
 ** clientMutationId string
 ** projectId string
 ** repositoryId string
 * @fields Lockable
 */

export const LockLockableInput = (mutationFields: types.LockLockableInput, lockable?: string) => `
    mutation LockLockableInput {
        lockLockable (input:{lockableId: "${mutationFields.lockableId}", lockReason: "${mutationFields.lockReason}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${lockable}
        }
    }
`

/**
 * @description Github Graphql Mutation for MarkFileAsViewedInput
 * @mutationFields
 ** clientMutationId string
 ** path string
 ** pullRequestId string
 * @fields Lockable
 */

export const MarkFileAsViewedInput = (mutationFields: types.MarkFileAsViewedInput, lockable?: string) => `
    mutation MarkFileAsViewedInput {
        markFileAsViewed (input:{pullRequestId : "${mutationFields.pullRequestId}", path: "${mutationFields.path}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${lockable}
        }
    }
`

/**
 * @description Github Graphql Mutation for MarkPullRequestReadyForReviewInput
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 * @fields PullRequest
 */

export const MarkPullRequestReadyForReviewInput = (mutationFields: types.MarkPullRequestReadyForReviewInput, pullRequest?: string) => `
    mutation MarkPullRequestReadyForReviewInput {
        markPullRequestReadyForReview (input:{pullRequestId : "${mutationFields.pullRequestId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for MergeBranchInput
 * @mutationFields
 ** authorEmail string
 ** base string
 ** clientMutationId string
 ** commitMessage string
 ** head string
 ** repositoryId string
 * @fields Branch
 */

export const MergeBranchInput = (mutationFields: types.MergeBranchInput, branch?: string) => `
    mutation MergeBranchInput {
        mergeBranch (input:{authorEmail : "${mutationFields.authorEmail}", base: "${mutationFields.base}", commitMessage: "${mutationFields.commitMessage}", 
        head: "${mutationFields.head}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${branch}
        }
    }
`

/**
 * @description Github Graphql Mutation for MergePullRequestInput
 * @mutationFields
 ** authorEmail string
 ** clientMutationId string
 ** commitHeadline string
 ** expectedHeadOid GitObjectID
 ** mergeMethod "MERGE" | "REBASE" | "SQUASH"
 ** pullRequestId string
 * @fields PullRequest
 */

export const MergePullRequestInput = (mutationFields: types.MergePullRequestInput, pullRequest?: string) => `
    mutation MergePullRequestInput {
        mergePullRequest (input:{authorEmail : "${mutationFields.authorEmail}", commitHeadline: "${mutationFields.commitHeadline}", commitBody: "${mutationFields.commitBody}", 
        expectedHeadOid: "${mutationFields.expectedHeadOid}", mergeMethod: ${mutationFields.mergeMethod}, repositoryId: ${mutationFields.repositoryId} ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for MinimizeCommentInput
 * @mutationFields
 ** classifier: "ABUSE" | "DUPLICATE" | "OFF_TOPIC" | "OUTDATED" | "RESOLVED" | "SPAM"
 ** clientMutationId string
 ** subjectId string
 * @fields Comment
 */

export const MinimizeCommentInput = (mutationFields: types.MinimizeCommentInput, comment?: string) => `
    mutation MinimizeCommentInput {
        minimizeComment (input:{classifier : ${mutationFields.classifier}, subjectId: "${mutationFields.subjectId}",
        ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${comment}
        }
    }
`

/**
 * @description Github Graphql Mutation for MoveProjectCardInput
 * @mutationFields
 ** afterCardId string
 ** cardId string
 ** clientMutationId string
 ** commitHeadline string
 ** columnId string
 * @fields ProjectCard
 */

export const MoveProjectCardInput = (mutationFields: types.MoveProjectCardInput, pullRequest?: string) => `
    mutation MoveProjectCardInput {
        moveProjectCard (input:{afterCardId : "${mutationFields.afterCardId}", cardId: "${mutationFields.cardId}", columnId: "${mutationFields.columnId}", 
        ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for MoveProjectColumnInput
 * @mutationFields
 ** afterColumnId string
 ** clientMutationId string
 ** columnId string
 * @fields Column
 */

export const MoveProjectColumnInput = (mutationFields: types.MoveProjectColumnInput, comment?: string) => `
    mutation MoveProjectColumnInput {
        moveProjectColumn (input:{afterColumnId : ${mutationFields.afterColumnId}, : afterColumnId: "${mutationFields.afterColumnId}",
        ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${comment}
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for PackageFileOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const PackageFileOrder = (mutationFields: types.PackageFileOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for PackageOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const PackageOrder = (mutationFields: types.PackageOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for PackageVersionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const PackageVersionOrder = (mutationFields: types.PackageVersionOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for PinIssueInput
 * @mutationFields
 ** afterColumnId string
 ** clientMutationId string
 ** columnId string
 * @fields Issue
 */

export const PinIssueInput = (mutationFields: types.PinIssueInput, issue?: string) => `
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
 * @description Github Graphql Mutation for ProjectColumnImport
 * @mutationFields
 ** columnName string
 ** issues ProjectCardImport[]
 ** position number
 * @fields ProjectCard
 */

export const ProjectColumnImport = (mutationFields: types.ProjectColumnImport, projectCard?: string) => `
    mutation ProjectColumnImport {
        projectColumnImport (input:{columnName: "${mutationFields.columnName}", issues: ${mutationFields.issues} position: ${mutationFields.position} ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for PullRequestOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "UPDATED_AT"
 */

export const PullRequestOrder = (mutationFields: types.PullRequestOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for ReactionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const ReactionOrder = (mutationFields: types.ReactionOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for RefOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "ALPHABETICAL" | "TAG_COMMIT_DATE"
 */

export const RefOrder = (mutationFields: types.RefOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for RefUpdate
 * @mutationFields
 ** afterOid GitObjectID
 ** beforeOid GitObjectID
 ** name GitRefname
 ** force boolean
 * @fields Ref
 */

export const RefUpdate = (mutationFields: types.RefUpdate, ref?: string) => `
    mutation RefUpdate {
        refUpdate (input:{afterOid: "${mutationFields.afterOid}", beforeOid: ${mutationFields.beforeOid}, name: "${mutationFields.name}", force: "${mutationFields.force}"}){
            ${ref}
        }
    }
`

/**
 * @description Github Graphql Mutation for RegenerateEnterpriseIdentityProviderRecoveryCodesInput
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 * @fields Enterprise
 */

export const RegenerateEnterpriseIdentityProviderRecoveryCodesInput = (mutationFields: types.RegenerateEnterpriseIdentityProviderRecoveryCodesInput, enterprise?: string) => `
    mutation RegenerateEnterpriseIdentityProviderRecoveryCodesInput {
        regenerateEnterpriseIdentityProviderRecoveryCodes (input:{enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for RegenerateVerifiableDomainTokenInput
 * @mutationFields
 ** clientMutationId string
 ** id string
 * @fields Domain
 */

export const RegenerateVerifiableDomainTokenInput = (mutationFields: types.DefautFields, domain?: string) => `
    mutation RegenerateVerifiableDomainTokenInput {
        regenerateVerifiableDomainToken (input:{id: "${mutationFields.id}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
            ${domain}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveAssigneesFromAssignableInput
 * @mutationFields
 ** clientMutationId string
 ** assigneeIds string[]
 ** assignableId string
 * @fields Assignable
 */

export const RemoveAssigneesFromAssignableInput = (mutationFields: types.RemoveAssigneesFromAssignableInput, assignable?: string) => `
    mutation RemoveAssigneesFromAssignableInput {
        removeAssigneesFromAssignable (input:{assigneeIds: ${mutationFields.assigneeIds}, assignableId: "${mutationFields.assignableId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
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
 * @fields User
 */

export const RemoveEnterpriseAdminInput = (mutationFields: types.RemoveEnterpriseAdminInput, assignable?: string) => `
    mutation RemoveEnterpriseAdminInput {
        removeEnterpriseAdmin (input:{login: "${mutationFields.login}", enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
            ${assignable}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveEnterpriseIdentityProviderInput
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 * @fields User
 */

export const RemoveEnterpriseIdentityProviderInput = (mutationFields: types.RemoveEnterpriseIdentityProviderInput, enterpriseIdentity?: string) => `
    mutation RemoveEnterpriseIdentityProviderInput {
        removeEnterpriseIdentityProvider (input:{enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
            ${enterpriseIdentity}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveEnterpriseOrganizationInput
 * @mutationFields
 ** clientMutationId string
 ** enterpriseId string
 ** organizationId  string
 * @fields User
 */

export const RemoveEnterpriseOrganizationInput = (mutationFields: types.RemoveEnterpriseOrganizationInput, assignable?: string) => `
    mutation RemoveEnterpriseOrganizationInput {
        removeEnterpriseOrganization (input:{organizationId: "${mutationFields.organizationId}", enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
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
 * @fields EnterpriseSupportEntitlement
 */

export const RemoveEnterpriseSupportEntitlementInput = (mutationFields: types.RemoveEnterpriseAdminInput, enterpriseSupportEntitlement?: string) => `
    mutation RemoveEnterpriseSupportEntitlementInput {
        removeEnterpriseSupportEntitlement (input:{login: "${mutationFields.login}", enterpriseId: "${mutationFields.enterpriseId}" ${mutationFields.clientMutationId ? `clientMutationId: "${mutationFields.clientMutationId}"` : ''}){
            ${enterpriseSupportEntitlement}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveLabelsFromLabelableInput
 * @mutationFields
 ** clientMutationId string
 ** labelIds string[]
 ** labelableId string
 * @fields Labels
 */

export const RemoveLabelsFromLabelableInput = (mutationFields: types.LabelsToLabelableInput, labels?: string) => `
 mutation RemoveLabelsFromLabelableInput {
    removeLabelsFromLabelable (input:{labelableId: "${mutationFields.labelableId}" ${mutationFields.labelIds ? `, labelIds: "${mutationFields.labelIds}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
         ${labels}
     }
 }
`

/**
 * @description Github Graphql Mutation for RemoveOutsideCollaboratorInput
 * @mutationFields
 ** clientMutationId string
 ** organizationId string
 ** userId string
 * @fields User
 */

export const RemoveOutsideCollaboratorInput = (mutationFields: types.RemoveOutsideCollaboratorInput, user?: string) => `
    mutation RemoveOutsideCollaboratorInput {
        removeOutsideCollaborator (input:{userId: "${mutationFields.userId}", organizationId: "${mutationFields.organizationId} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${user}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveReactionInput
 * @mutationFields
 ** content "CONFUSED" | "EYES" | "HEART" | "HOORAY" | "LAUGH" | "ROCKET" | "THUMBS_DOWN" | "THUMBS_UP"
 ** clientMutationId string
 ** subjectId string
 * @fields Reaction
 */

export const RemoveReactionInput = (mutationFields: types.RemoveReactionInput, reaction?: string) => `
    mutation RemoveReactionInput {
        removeReaction (input:{content: ${mutationFields.content}, subjectId: "${mutationFields.subjectId} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${reaction}
        }
    }
`

/**
 * @description Github Graphql Mutation for RemoveStarInput
 * @mutationFields
 ** clientMutationId string
 ** starrableId string
 * @fields Starrable
 */

export const RemoveStarInput = (mutationFields: types.RemoveStarInput, starrable?: string) => `
    mutation RemoveStarInput {
        removeStar (input:{starrableId: "${mutationFields.starrableId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${starrable}
        }
    }
`

/**
 * @description Github Graphql Mutation for ReopenIssueInput
 * @mutationFields
 ** clientMutationId string
 ** issueId string
 * @fields Issue
 */

export const ReopenIssueInput = (mutationFields: types.ReopenIssueInput, issue?: string) => `
    mutation ReopenIssueInput {
        reopenIssue (input:{issueId: "${mutationFields.issueId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for ReopenIssueInput
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 * @fields PullRequest
 */

export const ReopenPullRequestInput = (mutationFields: types.ReopenPullRequestInput, pullRequest?: string) => `
    mutation ReopenPullRequestInput {
        reopenPullRequest (input:{issueId: "${mutationFields.issueId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for RepositoryOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "NAME" | "PUSHED_AT" | "STARGAZERS" | "UPDATED_AT"
 */

export const RepositoryOrder = (mutationFields: types.RepositoryOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for RequestReviewsInput
 * @mutationFields
 ** clientMutationId string
 ** pullRequestId string
 ** teamIds string[]
 ** union boolean
 ** userIds string[]
 * @fields RequestReviews
 */

export const RequestReviewsInput = (mutationFields: types.RequestReviewsInput, requestReview?: string) => `
    mutation RequestReviewsInput {
        requestReviews (input:{pullRequestId: "${mutationFields.pullRequestId}", union: ${mutationFields.union}, userIds: ${mutationFields.union}
        ${mutationFields.teamIds ? `, teamIds: ${mutationFields.teamIds}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${requestReview}
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

export const RerequestCheckSuiteInput = (mutationFields: types.RerequestCheckSuiteInput, checkSuite?: string) => `
    mutation RerequestCheckSuiteInput {
        rerequestCheckSuite (input:{checkSuiteId: "${mutationFields.checkSuiteId}", repositoryId: "${mutationFields.repositoryId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${checkSuite}
        }
    }
`

/**
 * @description Github Graphql Mutation for RerequestCheckSuiteInput
 * @mutationFields
 ** clientMutationId string
 ** threadId string
 * @fields CheckSuite
 */

export const ResolveReviewThreadInput = (mutationFields: types.ResolveReviewThreadInput, checkSuite?: string) => `
    mutation ResolveReviewThreadInput {
        resolveReviewThread (input:{threadId: "${mutationFields.threadId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${checkSuite}
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for SecurityAdvisoryIdentifierFilter
 * @mutationFields
 ** type "CVE" | "GHSA"
 ** value string
 */

export const SecurityAdvisoryIdentifierFilter = (mutationFields: types.SecurityAdvisoryIdentifierFilter) => `
    {type: ${mutationFields.type}, direction: ${mutationFields.value}}
`

/**
 * @description Github Graphql Mutation for SecurityAdvisoryOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "UPDATED_AT" | "PUBLISHED_AT"
 */

export const SecurityAdvisoryOrder = (mutationFields: types.SecurityAdvisoryOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for SetEnterpriseIdentityProviderInput
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

export const SetEnterpriseIdentityProviderInput = (mutationFields: types.SetEnterpriseIdentityProviderInput, enterpriseIdentityProvider?: string) => `
    mutation SetEnterpriseIdentityProviderInput {
        setEnterpriseIdentityProvider (input:{digestMethod: ${mutationFields.digestMethod}, enterpriseId: "${mutationFields.enterpriseId}", idpCertificate: "${mutationFields.idpCertificate}",
        issuer: "${mutationFields.issuer}", ssoUrl: "${mutationFields.ssoUrl}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
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

export const SetOrganizationInteractionLimitInput = (mutationFields: types.SetInteractionLimitInput, organizationInteractionLimit?: string) => `
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

export const SetRepositoryInteractionLimitInput = (mutationFields: types.SetInteractionLimitInput, organizationInteractionLimit?: string) => `
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
 * @fields RepositoryInteractionLimit
 */

export const SetUserInteractionLimitInput = (mutationFields: types.SetInteractionLimitInput, organizationInteractionLimit?: string) => `
    mutation SetUserInteractionLimitInput {
        setUserInteractionLimit (input:{expiry: ${mutationFields.expiry}, limit: ${mutationFields.limit}, userId: "${mutationFields.userId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${organizationInteractionLimit}
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for SponsorsTierOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "MONTHLY_PRICE_IN_CENTS"
 */

export const SponsorsTierOrder = (mutationFields: types.SponsorsTierOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for SponsorshipOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const SponsorshipOrder = (mutationFields: types.SponsorsTierOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for StarOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "STARRED_AT"
 */

export const StarOrder = (mutationFields: types.StarOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for SubmitPullRequestReviewInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** event "APPROVE" | "COMMENT" | "DISMISS" | "REQUEST_CHANGES"
 ** pullRequestId string
 ** pullRequestReviewId string
 * @fields PullRequestReview
 */

export const SubmitPullRequestReviewInput = (mutationFields: types.SubmitPullRequestReviewInput, pullRequestReview?: string) => `
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
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for TeamDiscussionOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT"
 */

export const TeamDiscussionOrder = (mutationFields: types.TeamDiscussionOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for TeamMemberOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "CREATED_AT" | "LOGIN"
 */

export const TeamMemberOrder = (mutationFields: types.TeamMemberOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for TeamOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "NAME"
 */

export const TeamOrder = (mutationFields: types.TeamOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for TeamRepositoryOrder
 * @mutationFields
 ** direction "ASC" | "DESC"
 ** field "NAME"
 */

export const TeamRepositoryOrder = (mutationFields: types.TeamRepositoryOrder) => `
    {field: ${mutationFields.field}, ${mutationFields.direction ? `, direction: ${mutationFields.direction}` : ''}}
`

/**
 * @description Github Graphql Mutation for TransferIssueInput
 * @mutationFields
 ** issueId string
 ** clientMutationId string
 ** repositoryId string
 * @fields Issue
 */

export const TransferIssueInput = (mutationFields: types.TransferIssueInput, issue?: string) => `
    mutation TransferIssueInput {
        transferIssue (input:{issueId: "${mutationFields.issueId}", repositoryId: "${mutationFields.repositoryId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnarchiveRepositoryInput
 * @mutationFields
 ** clientMutationId string
 ** repositoryId string
 * @fields Repository
 */

export const UnarchiveRepositoryInput = (mutationFields: types.UnarchiveRepositoryInput, repository?: string) => `
    mutation UnarchiveRepositoryInput {
        unarchiveRepository (input:{repositoryId: "${mutationFields.repositoryId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${repository}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnfollowUserInput
 * @mutationFields
 ** clientMutationId string
 ** issueId string
 ** repositoryId string
 * @fields User
 */

export const UnfollowUserInput = (mutationFields: types.UnfollowUserInput, user?: string) => `
    mutation UnfollowUserInput {
        unfollowUser (input:{userId: "${mutationFields.userId}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${user}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnlinkRepositoryFromProjectInput
 * @mutationFields
 ** clientMutationId string
 ** projectId string
 ** repositoryId string
 * @fields Project
 */

export const UnlinkRepositoryFromProjectInput = (mutationFields: types.UnlinkRepositoryFromProjectInput, project?: string) => `
    mutation UnlinkRepositoryFromProjectInput {
        unlinkRepositoryFromProject (input:{projectId: "${mutationFields.projectId}", repositoryId: "${mutationFields.repositoryId}"
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnlockLockableInput
 * @mutationFields
 ** clientMutationId string
 ** lockableId string
 * @fields Lockable
 */

export const UnlockLockableInput = (mutationFields: types.UnlockLockableInput, lockable?: string) => `
    mutation UnlockLockableInput {
        unlockLockable (input:{lockableId : "${mutationFields.lockableId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${lockable}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnmarkFileAsViewedInput
 * @mutationFields
 ** clientMutationId string
 ** canonicalId string
 ** duplicateId string
 * @fields PullRequest
 */

export const UnmarkFileAsViewedInput = (mutationFields: types.UnmarkIssueAsDuplicateInput, pullRequest?: string) => `
    mutation UnlockLockableInput {  
        unlockLockable (input:{duplicateId : "${mutationFields.duplicateId}", canonicalId: "${mutationFields.canonicalId}" 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnminimizeCommentInput
 * @mutationFields
 ** clientMutationId string
 ** subjectId string
 * @fields Comment
 */

export const UnminimizeCommentInput = (mutationFields: types.UnminimizeCommentInput, comment?: string) => `
    mutation UnminimizeCommentInput {  
        unminimizeComment (input:{subjectId : "${mutationFields.subjectId}", 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${comment}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnpinIssueInput
 * @mutationFields
 ** clientMutationId string
 ** subjectId string
 * @fields Issue
 */

export const UnpinIssueInput = (mutationFields: types.UnpinIssueInput, issue?: string) => `
    mutation UnpinIssueInput {  
        unpinIssue (input:{issueId: "${mutationFields.issueId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for UnresolveReviewThreadInput
 * @mutationFields
 ** clientMutationId string
 ** threadId string
 * @fields ReviewThread
 */

export const UnresolveReviewThreadInput = (mutationFields: types.UnresolveReviewThreadInput, review?: string) => `
    mutation UnresolveReviewThreadInput {  
        unresolveReviewThread (input:{threadId: "${mutationFields.threadId}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${review}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateBranchProtectionRuleInput
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

export const UpdateBranchProtectionRuleInput = (mutationFields: types.CreateBranchProtectionRuleInput, branchProtectionRule?: string) => `
 mutation UpdateBranchProtectionRuleInput {
    updateBranchProtectionRuleInput(input:{allowsDeletions: ${mutationFields.allowsDeletions}, allowsForcePushes: ${mutationFields.allowsForcePushes}, dismissesStaleReviews: ${mutationFields.dismissesStaleReviews} 
             ${mutationFields.isAdminEnforced ? `, isAdminEnforced: ${mutationFields.isAdminEnforced}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
             ${mutationFields.pattern ? `, pattern: "${mutationFields.pattern}"` : ''} ${mutationFields.pushActorIds ? `, pushActorIds: ${mutationFields.pushActorIds}` : ''} ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''}
             ${mutationFields.requiredApprovingReviewCount ? `, requiredApprovingReviewCount: ${mutationFields.requiredApprovingReviewCount}` : ''} ${mutationFields.requiredStatusCheckContexts ? `, requiredStatusCheckContexts: ${mutationFields.requiredStatusCheckContexts}` : ''}
             ${mutationFields.requiresApprovingReviews ? `, requiresApprovingReviews: ${mutationFields.requiresApprovingReviews}` : ''} ${mutationFields.requiresCodeOwnerReviews ? `, requiresCodeOwnerReviews: ${mutationFields.requiresCodeOwnerReviews}` : ''} 
             ${mutationFields.requiresCommitSignatures ? `, requiresCommitSignatures: ${mutationFields.requiresCommitSignatures}` : ''} ${mutationFields.requiresLinearHistory ? `, requiresLinearHistory : ${mutationFields.requiresLinearHistory}` : ''}
             ${mutationFields.requiresStatusChecks ? `, requiresStatusChecks: ${mutationFields.requiresStatusChecks}` : ''} ${mutationFields.requiresStrictStatusChecks ? `, requiresStrictStatusChecks: ${mutationFields.requiresStrictStatusChecks}` : ''} 
             ${mutationFields.restrictsPushes ? `, restrictsPushes: ${mutationFields.restrictsPushes}` : ''} ${mutationFields.restrictsReviewDismissals ? `, restrictsReviewDismissals: ${mutationFields.restrictsReviewDismissals}` : ''} 
             ${mutationFields.reviewDismissalActorIds ? `, reviewDismissalActorIds: ${mutationFields.reviewDismissalActorIds}` : ''}}){
         ${branchProtectionRule}
     }
 }
`

/**
 * @description Github Graphql Mutation for UpdateCheckRunInput
 * @mutationFields
 ** actions CheckRunAction[]
 ** clientMutationId string
 ** completedAt Date
 ** conclusion CheckConclusionState
 ** detailsUrl string
 ** externalId string
 ** headSha GitObjectID
 ** name string
 ** output CheckRunOutput
 ** repositoryId string
 ** startedAt Date
 ** status RequestableCheckStatusState
 * @fields ChechRun
 */

export const UpdateCheckRunInput = (mutationFields: types.CreateCheckRunInput, checkRun?: string) => `
 mutation UpdateCheckRunInput {
    updateCheckRun (input:{actions: ${mutationFields.actions}, completedAt: "${mutationFields.completedAt}", conclusion: ${mutationFields.conclusion} 
             ${mutationFields.detailsUrl ? `, detailsUrl : "${mutationFields.detailsUrl}"` : ''} ${mutationFields.externalId ? `, externalId: "${mutationFields.externalId}"` : ''}
             ${mutationFields.headSha ? `, headSha: "${mutationFields.headSha}"` : ''} ${mutationFields.name ? `, name: "${mutationFields.name}"` : ''} ${mutationFields.output ? `, output: ${mutationFields.output}` : ''}
             ${mutationFields.repositoryId ? `, repositoryId: "${mutationFields.repositoryId}"` : ''} ${mutationFields.startedAt ? `, startedAt: "${mutationFields.startedAt}"` : ''}
             ${mutationFields.status ? `, status: ${mutationFields.status}` : ''} }){
         ${checkRun}
     }
 }
`

/**
 * @description Github Graphql Mutation for UpdateCheckSuitePreferencesInput
 * @mutationFields
 ** autoTriggerPreferences CheckSuiteAutoTriggerPreference[]
 ** repositoryId string
 * @fields CheckSuite
 */

export const UpdateCheckSuitePreferencesInput = (mutationFields: types.UpdateCheckSuitePreferencesInput, checkSuite?: string) => `
    mutation UpdateCheckSuitePreferencesInput {  
        updateCheckSuitePreferences (input:{repositoryId : "${mutationFields.repositoryId}", autoTriggerPreferences : "${mutationFields.autoTriggerPreferences}"
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${checkSuite}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseAdministratorRoleInput
 * @mutationFields
 ** enterpriseId string
 ** login string
 ** role "BILLING_MANAGER" | "OWNER"
 * @fields Enterprise
 */

export const UpdateEnterpriseAdministratorRoleInput = (mutationFields: types.UpdateEnterpriseAdministratorRoleInput, enterprise?: string) => `
    mutation UpdateEnterpriseAdministratorRoleInput {  
        updateEnterpriseAdministratorRole (input:{enterpriseId: "${mutationFields.enterpriseId}", login: "${mutationFields.login}","${mutationFields.enterpriseId}", role: ${mutationFields.role}
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseAdministratorRoleInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = (mutationFields: types.UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseAdministratorRoleInput {  
        updateEnterpriseAdministratorRole (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseDefaultRepositoryPermissionSettingInput
 * @mutationFields
 ** enterpriseId string
 ** login string
 ** settingValue "ADMIN" | "NONE" | "NO_POLICY" | "READ" | "WRITE"
 * @fields Enterprise
 */

export const UpdateEnterpriseDefaultRepositoryPermissionSettingInput = (mutationFields: types.UpdateEnterpriseDefaultRepositoryPermissionSettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseDefaultRepositoryPermissionSettingInput {  
        updateEnterpriseDefaultRepositoryPermissionSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput
 * @mutationFields
 ** enterpriseId string
 ** login string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput {  
        updateEnterpriseMembersCanChangeRepositoryVisibilitySetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanCreateRepositoriesSettingInput
 * @mutationFields
 ** enterpriseId string
 ** membersCanCreateInternalRepositories boolean
 ** membersCanCreatePrivateRepositories boolean
 ** membersCanCreatePublicRepositories boolean
 ** membersCanCreateRepositoriesPolicyEnabled boolean
 ** settingValue "ALL" | "DISABLED" | "NO_POLICY" | "PRIVATE" | "PUBLIC"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = (mutationFields: types.UpdateEnterpriseMembersCanCreateRepositoriesSettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanCreateRepositoriesSettingInput {  
        updateEnterpriseMembersCanCreateRepositoriesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue}, ${mutationFields.membersCanCreateInternalRepositories ? `, membersCanCreateInternalRepositories: "${mutationFields.membersCanCreateInternalRepositories}"` : ''}
        ${mutationFields.membersCanCreatePrivateRepositories ? `, membersCanCreatePrivateRepositories: "${mutationFields.membersCanCreatePrivateRepositories}"` : ''} ${mutationFields.membersCanCreatePublicRepositories ? `, membersCanCreatePublicRepositories: "${mutationFields.membersCanCreatePublicRepositories}"` : ''}
        ${mutationFields.membersCanCreateRepositoriesPolicyEnabled ? `, membersCanCreateRepositoriesPolicyEnabled: "${mutationFields.membersCanCreateRepositoriesPolicyEnabled}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanDeleteIssuesSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanDeleteIssuesSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanDeleteIssuesSettingInput {  
        updateEnterpriseMembersCanDeleteIssuesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanDeleteIssuesSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput {  
        updateEnterpriseMembersCanDeleteRepositoriesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput {  
        updateEnterpriseMembersCanInviteCollaboratorsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanMakePurchasesSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanMakePurchasesSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanMakePurchasesSettingInput {  
        updateEnterpriseMembersCanMakePurchasesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting {  
        updateEnterpriseMembersCanUpdateProtectedBranchesSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput {  
        updateEnterpriseMembersCanViewDependencyInsightsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseOrganizationProjectsSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseOrganizationProjectsSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseOrganizationProjectsSettingInput {  
        updateEnterpriseOrganizationProjectsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseProfileInput
 * @mutationFields
 ** description string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseProfileInput = (mutationFields: types.UpdateEnterpriseProfileInput, enterprise?: string) => `
    mutation UpdateEnterpriseProfileInput {  
        updateEnterpriseProfile (input:{description: "${mutationFields.description}", enterpriseId: "${mutationFields.enterpriseId}", location: "${mutationFields.location}",
        name: "${mutationFields.name}", websiteUrl: "${mutationFields.websiteUrl}", ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseRepositoryProjectsSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseRepositoryProjectsSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseRepositoryProjectsSettingInput {  
        updateEnterpriseRepositoryProjectsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "DISABLED" | "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseTwoFactorAuthenticationRequiredSetting {  
        updateEnterpriseTwoFactorAuthenticationRequiredSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateEnterpriseTeamDiscussionsSettingInput
 * @mutationFields
 ** enterpriseId string
 ** settingValue "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateEnterpriseTeamDiscussionsSettingInput = (mutationFields: types.VisibilitySettingInput, enterprise?: string) => `
    mutation UpdateEnterpriseTeamDiscussionsSettingInput {  
        updateEnterpriseTeamDiscussionsSetting (input:{enterpriseId: "${mutationFields.enterpriseId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateIpAllowListEnabledSettingInput
 * @mutationFields
 ** ownerId string
 ** clientMutationId string
 ** settingValue "ENABLED" | "NO_POLICY"
 * @fields Enterprise
 */

export const UpdateIpAllowListEnabledSettingInput = (mutationFields: types.UpdateIpAllowListEnabledSettingInput, enterprise?: string) => `
    mutation UpdateIpAllowListEnabledSettingInput {  
        updateIpAllowListEnabledSetting (input:{ownerId: "${mutationFields.ownerId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateIpAllowListEntryInput
 * @mutationFields
 ** allowListValue string
 ** clientMutationId string
 ** ipAllowListEntryId string
 ** isActive boolean
 ** name string
 * @fields Enterprise
 */

export const UpdateIpAllowListEntryInput = (mutationFields: types.UpdateIpAllowListEntryInput, ipAllowListEntry?: string) => `
    mutation UpdateIpAllowListEnabledSettingInput {  
        updateIpAllowListEnabledSetting (input:{allowListValue: "${mutationFields.allowListValue}", ipAllowListEntryId: "${mutationFields.ipAllowListEntryId}",
        isActive: ${mutationFields.isActive}, name: ${mutationFields.name},     
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${ipAllowListEntry}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateIssueCommentInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** id string
 * @fields IssueComment
 */

export const UpdateIssueCommentInput = (mutationFields: types.UpdateIssueCommentInput, issueComment?: string) => `
    mutation UpdateIssueCommentInput {  
        updateIssueComment (input:{body: "${mutationFields.body}", id: ${mutationFields.id},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${issueComment}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateIssue
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
 * @fields Issue
 */

export const UpdateIssueInput = (mutationFields: types.IssueMutation, issue?: string) => `
    mutation UpdateIssueInput {
        updateIssue (input:{body:"${mutationFields.body}", repositoryId:"${mutationFields.repositoryId}", title:"${mutationFields.title}" 
            ${mutationFields.assigneeIds ? `, assigneeIds: ${mutationFields.assigneeIds}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
            ${mutationFields.issueTemplate ? `, issueTemplate: ${mutationFields.issueTemplate}` : ''} ${mutationFields.labelIds ? `, labelIds: "${mutationFields.labelIds}"` : ''} ${mutationFields.milestoneId ? `, milestoneId: "${mutationFields.milestoneId}"` : ''}
            ${mutationFields.projectIds ? `, projectIds: "${mutationFields.projectIds}"` : ''} }){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateLabelInput
 * @mutationFields
 ** name string
 ** clientMutationId string
 ** color string
 ** description string
 ** id string
 * @fields Issue
 */

export const UpdateLabelInput = (mutationFields: types.UpdateLabelInput, issue?: string) => `
    mutation UpdateLabelInput {
        updateLabel (input:{body:"${mutationFields.name}", color:"${mutationFields.color}", description:"${mutationFields.description}" 
            ${mutationFields.id ? `, id: ${mutationFields.id}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateNotificationRestrictionSettingInput
 * @mutationFields
 ** ownerId string
 ** clientMutationId string
 ** settingValue "ENABLED" | "DISABLED"
 * @fields Enterprise
 */

export const UpdateNotificationRestrictionSettingInput = (mutationFields: types.UpdateIpAllowListEnabledSettingInput, enterprise?: string) => `
    mutation UpdateNotificationRestrictionSettingInput {  
        updateNotificationRestrictionSetting (input:{ownerId: "${mutationFields.ownerId}", settingValue: ${mutationFields.settingValue},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateProjectCardInput
 * @mutationFields
 ** isArchived boolean
 ** note string
 ** projectCardId string
 * @fields Enterprise
 */

export const UpdateProjectCardInput = (mutationFields: types.UpdateProjectCardInput, enterprise?: string) => `
    mutation UpdateProjectCardInput {  
        updateProjectCard (input:{note: "${mutationFields.note}", isArchived: ${mutationFields.isArchived}, projectCardId: ${mutationFields.projectCardId},
         ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${enterprise}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateProjectColumnInput
 * @mutationFields
 ** clientMutationId string
 ** contentId string
 ** name string
 ** projectColumnId string
 * @fields ProjectCard
 */

export const UpdateProjectColumnInput = (mutationFields: types.AddProjectColumnInput, card?: string) => `
    mutation UpdateProjectColumnInput {
        updateProjectColumn (input:{name: "${mutationFields.name}" ${mutationFields.projectId ? `, projectId: "${mutationFields.projectId}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}) {
            ${card}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateProjectInput
 * @mutationFields
 ** body string
 ** clientMutationId string
 ** name string
 ** public boolean
 ** projectId string
 ** state "CLOSED" | "OPEN"
 * @fields Project
 */

export const UpdateProjectInput = (mutationFields: types.CreateProjectInput, project?: string) => `
    mutation UpdateProjectInput {
        updateProject (input:{ body: ${mutationFields.body}, name: "${mutationFields.name}" ${mutationFields.public ? `, public: ${mutationFields.public}` : ''} 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${project}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdatePullRequestInput
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
 * @fields PullRequest
 */

export const UpdatePullRequestInput = (mutationFields: types.UpdatePullRequestInput, pullRequest?: string) => `
 mutation UpdatePullRequestInput {
    updatePullRequest (input:{ body: "${mutationFields.body}", baseRefName: "${mutationFields.baseRefName}", projectIds: ${mutationFields.projectIds} 
        assigneeIds: ${mutationFields.assigneeIds}, maintainerCanModify: ${mutationFields.maintainerCanModify}, labelIds: ${mutationFields.labelIds}, 
        milestoneId: "${mutationFields.milestoneId}" pullRequestId: "${mutationFields.pullRequestId}", title: "${mutationFields.title}", state: "${mutationFields.state}"
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
         ${pullRequest}
    }
 }
`

/**
 * @description Github Graphql Mutation for UpdatePullRequestReviewCommentInput
 * @mutationFields
 ** body string
 ** pullRequestReviewCommentId string
 * @fields PullRequest
 */

export const UpdatePullRequestReviewCommentInput = (mutationFields: types.UpdatePullRequestReviewCommentInput, pullRequest?: string) => `
    mutation UpdatePullRequestReviewCommentInput {
        updatePullRequestReviewComment (input:{ body: "${mutationFields.body}", pullRequestReviewCommentId: "${mutationFields.pullRequestReviewCommentId}", 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdatePullRequestReviewInput
 * @mutationFields
 ** body string
 ** pullRequestReviewId string
 * @fields PullRequest
 */

export const UpdatePullRequestReviewInput = (mutationFields: types.UpdatePullRequestReviewInput, pullRequest?: string) => `
    mutation UpdatePullRequestReviewInput {
        updatePullRequestReview (input:{ body: "${mutationFields.body}", pullRequestReviewId : "${mutationFields.pullRequestReviewId}", 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateRefInput
 * @mutationFields
 ** force boolean
 ** oid GitObjectID
 ** refId string
 * @fields PullRequest
 */

export const UpdateRefInput = (mutationFields: types.UpdateRefInput, pullRequest?: string) => `
    mutation UpdateRefInput {
        updateRef (input:{ force: ${mutationFields.force}, oid: "${mutationFields.oid}", refId: "${mutationFields.refId}", 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${pullRequest}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateRefsInput
 * @mutationFields
 ** refUpdates UpdateRefInput[]
 ** repositoryId string
 * @fields Refs
 */

export const UpdateRefsInput = (mutationFields: types.UpdateRefInput, refs?: string) => `
    mutation UpdateRefsInput {
        updateRefs (input:{ force: ${mutationFields.force}, oid: "${mutationFields.oid}", refId: "${mutationFields.refId}", 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${refs}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateRepositoryInput
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

export const UpdateRepositoryInput = (mutationFields: types.UpdateRepositoryInput, repository?: string) => `
 mutation UpdateRepositoryInput {
    updateRepository (input:{description:"${mutationFields.description}", name:"${mutationFields.name}", hasIssuesEnabled: ${mutationFields.hasIssuesEnabled},
        hasProjectsEnabled: ${mutationFields.hasProjectsEnabled}, hasWikiEnabled: ${mutationFields.hasWikiEnabled}, 
        hasWikiEnabled: ${mutationFields.hasWikiEnabled} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}
         ${mutationFields.homepageUrl ? `, homepageUrl: "${mutationFields.homepageUrl}"` : ''}
            ${mutationFields.template ? `, template: ${mutationFields.template}` : ''} }){
         ${repository}
     }
 }
`

/**
 * @description Github Graphql Mutation for UpdateSubscriptionInput
 * @mutationFields
 ** state "IGNORED" | "SUBSCRIBED" | "UNSUBSCRIBED"
 ** subscribableId string
 * @fields Subscription
 */

export const UpdateSubscriptionInput = (mutationFields: types.UpdateSubscriptionInput, subscription?: string) => `
    mutation UpdateSubscriptionInput {
        updateSubscription (input:{ state: ${mutationFields.state}, subscribableId: "${mutationFields.subscribableId}"
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${subscription}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateTeamDiscussionCommentInput
 * @mutationFields
 ** body string
 ** bodyVersion string
 ** id string
 * @fields TeamDiscussionComment
 */

export const UpdateTeamDiscussionCommentInput = (mutationFields: types.UpdateTeamDiscussionCommentInput, teamDiscussionComment?: string) => `
    mutation UpdateTeamDiscussionCommentInput {
        updateTeamDiscussionComment (input:{ id: "${mutationFields.id}", body: "${mutationFields.body}", bodyVersion: "${mutationFields.bodyVersion}", 
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${teamDiscussionComment}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateTeamDiscussionInput
 * @mutationFields
 ** body string
 ** bodyVersion string
 ** id string
 ** pinned boolean
 ** title string
 * @fields TeamDiscussion
 */

export const UpdateTeamDiscussionInput = (mutationFields: types.UpdateTeamDiscussionInput, teamDiscussion?: string) => `
    mutation UpdateTeamDiscussionInput {
        updateTeamDiscussionComment (input:{ id: "${mutationFields.id}", body: "${mutationFields.body}", bodyVersion: "${mutationFields.bodyVersion}",pinned: ${mutationFields.pinned}, 
        title: "${mutationFields.title}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${teamDiscussion}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateTeamReviewAssignmentInput
 * @mutationFields
 ** algorithm "LOAD_BALANCE" | "ROUND_ROBIN"
 ** enabled boolean
 ** excludedTeamMemberIds string[]
 ** id string
 ** notifyTeam boolean
 ** teamMemberCount number
 * @fields TeamDiscussion
 */

export const UpdateTeamReviewAssignmentInput = (mutationFields: types.UpdateTeamReviewAssignmentInput, teamDiscussion?: string) => `
    mutation UpdateTeamReviewAssignmentInput {
        updateTeamReviewAssignment (input:{ id: "${mutationFields.id}", algorithm: ${mutationFields.algorithm}, enabled: ${mutationFields.enabled}, excludedTeamMemberIds: ${mutationFields.excludedTeamMemberIds}, 
        notifyTeam: ${mutationFields.notifyTeam}, teamMemberCount: ${mutationFields.teamMemberCount} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${teamDiscussion}
        }
    }
`

/**
 * @description Github Graphql Mutation for UpdateTopicsInput
 * @mutationFields
 ** repositoryId string
 ** topicNames string[]
 * @fields Topics
 */

export const UpdateTopicsInput = (mutationFields: types.UpdateTopicsInput, teamDiscussion?: string) => `
    mutation UpdateTopicsInput {
        updateTopics (input:{ repositoryId: "${mutationFields.repositoryId}", topicNames: ${mutationFields.topicNames},
        ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${teamDiscussion}
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
 * @description Github Graphql Mutation for VerifyVerifiableDomainInput
 * @mutationFields
 ** clientMutationId string
 ** id string
 * @fields VerifiableDomain
 */

export const VerifyVerifiableDomainInput = (mutationFields: types.DefautFields, verifiableDomain?: string) => `
    mutation VerifyVerifiableDomainInput {
        verifyVerifiableDomain (input:{ id: "${mutationFields.id}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${verifiableDomain}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateDeploymentInput
 * @mutationFields
 ** autoMerge boolean
 ** clientMutationId string
 ** description string
 ** environment string
 ** payload string
 ** refId string
 ** repositoryId string
 ** requiredContexts string
 ** task string
 * @fields Deployment
 */

export const CreateDeploymentInput = (mutationFields: types.CreateDeploymentInput, refs?: string) => `
    mutation CreateDeploymentInput {
        createDeployment (input:{ autoMerge: ${mutationFields.autoMerge}, description: "${mutationFields.description}", environment: "${mutationFields.environment}", 
        refId: "${mutationFields.refId}", repositoryId: "${mutationFields.repositoryId}" requiredContexts: ${mutationFields.requiredContexts}, task: "${mutationFields.task}" 
        ${mutationFields.payload ? `, payload: "${mutationFields.payload}"` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${refs}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateDeploymentStatusInput
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

export const CreateDeploymentStatusInput = (mutationFields: types.CreateDeploymentStatusInput, refs?: string) => `
    mutation CreateDeploymentStatusInput {
        createDeploymentStatus (input:{ autoInactive: ${mutationFields.autoInactive}, description: "${mutationFields.description}", environment: "${mutationFields.environment}", 
        deploymentId: "${mutationFields.deploymentId}", environmentUrl: "${mutationFields.environmentUrl}" logUrl: ${mutationFields.logUrl}, state: ${mutationFields.state} 
       ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${refs}
        }
    }
`

/**
 * @description Github Graphql Mutation for CreateLabelInput
 * @mutationFields
 ** name string
 ** clientMutationId string
 ** color string
 ** description string
 ** id string
 * @fields Issue
 */

export const CreateLabelInput = (mutationFields: types.CreateLabelInput, issue?: string) => `
    mutation CreateLabelInput {
        createLabel (input:{body:"${mutationFields.name}", color:"${mutationFields.color}", description:"${mutationFields.description}" 
            ${mutationFields.repositoryId ? `, repositoryId: ${mutationFields.repositoryId}` : ''} ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${issue}
        }
    }
`

/**
 * @description Github Graphql Mutation for DeleteLabelInput
 * @mutationFields
 ** name string
 ** clientMutationId string
 ** color string
 ** description string
 ** id string
 * @fields Issue
 */

export const DeleteLabelInput = (mutationFields: types.DefautFields, issue?: string) => `
    mutation DeleteLabelInput {
        deleteLabel (input:{id:"${mutationFields.id}" ${mutationFields.clientMutationId ? `, clientMutationId: "${mutationFields.clientMutationId}"` : ''}}){
            ${issue}
        }
    }
`
