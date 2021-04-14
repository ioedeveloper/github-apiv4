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

export const onCreatedIssueContribution = (fields: string) => `
   ... on CreatedIssueContribution {
      __typename
      ${fields}
   }
`

/**
* @description Github Graphql onRestrictedContribution 
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
* @description Github Graphql onOrgConfigDisableCollaboratorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgConfigDisableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on OrgConfigDisableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgConfigEnableCollaboratorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const OrgConfigEnableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on OrgConfigEnableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgCreateAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* billingPlan

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgCreateAuditEntry = (fields?: string) => `
    ... on OrgCreateAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgDisableOauthAppRestrictionsAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgDisableOauthAppRestrictionsAuditEntry = (fields?: string) => `
    ... on OrgDisableOauthAppRestrictionsAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgDisableSamlAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* digestMethodUrl
          
* issuerUrl
          
* singleSignOnUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgDisableSamlAuditEntry = (fields?: string) => `
    ... on OrgDisableSamlAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgDisableSamlAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* digestMethodUrl
          
* issuerUrl
          
* singleSignOnUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgDisableTwoFactorRequirementAuditEntry = (fields?: string) => `
    ... on OrgDisableTwoFactorRequirementAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgEnableOauthAppRestrictionsAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* digestMethodUrl
          
* issuerUrl
          
* singleSignOnUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgEnableOauthAppRestrictionsAuditEntry = (fields?: string) => `
    ... on OrgEnableOauthAppRestrictionsAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgEnableSamlAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* digestMethodUrl
          
* issuerUrl
          
* singleSignOnUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* signatureMethodUrl
          
* singleSignOnUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgEnableSamlAuditEntry = (fields?: string) => `
    ... on OrgEnableSamlAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgEnableTwoFactorRequirementAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgEnableTwoFactorRequirementAuditEntry = (fields?: string) => `
    ... on OrgEnableTwoFactorRequirementAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgInviteMemberAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* email

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgInviteMemberAuditEntry = (fields?: string) => `
    ... on OrgInviteMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgInviteToBusinessAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* enterpriseResourcePath
          
* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgInviteToBusinessAuditEntry = (fields?: string) => `
    ... on OrgInviteToBusinessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgOauthAppAccessApprovedAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* oauthApplicationName
          
* oauthApplicationResourcePath
          
* oauthApplicationUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgOauthAppAccessApprovedAuditEntry = (fields?: string) => `
    ... on OrgOauthAppAccessApprovedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgOauthAppAccessDeniedAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* oauthApplicationName
          
* oauthApplicationResourcePath
          
* oauthApplicationUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgOauthAppAccessDeniedAuditEntry = (fields?: string) => `
    ... on OrgOauthAppAccessDeniedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgOauthAppAccessRequestedAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* oauthApplicationName
          
* oauthApplicationResourcePath
          
* oauthApplicationUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgOauthAppAccessRequestedAuditEntry = (fields?: string) => `
    ... on OrgOauthAppAccessRequestedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRemoveBillingManagerAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRemoveBillingManagerAuditEntry = (fields?: string) => `
    ... on OrgRemoveBillingManagerAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRemoveMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* membershipTypes

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* reason

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRemoveMemberAuditEntry = (fields?: string) => `
    ... on OrgRemoveMemberAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onOrgRemoveOutsideCollaboratorAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* membershipTypes

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* reason

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRemoveOutsideCollaboratorAuditEntry = (fields?: string) => `
    ... on OrgRemoveOutsideCollaboratorAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRestoreMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* membershipTypes

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* restoredCustomEmailRoutingsCount
          
* restoredIssueAssignmentsCount
          
* restoredMemberships {
    onOrgRestoreMemberMembershipOrganizationAuditEntryData

    onOrgRestoreMemberMembershipRepositoryAuditEntryData
     
    onOrgRestoreMemberMembershipTeamAuditEntryData
}
          
* restoredMembershipsCount
          
* restoredRepositoriesCount
          
* restoredRepositoryStarsCount
          
* restoredRepositoryWatchesCount

* user {
}
User

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRestoreMemberAuditEntry = (fields?: string) => `
    ... on OrgRestoreMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRestoreMemberMembershipOrganizationAuditEntryData
* @fields
* Repository
*
* organizationName

* organizationResourcePath

* organizationUrl
*/

export const onOrgRestoreMemberMembershipOrganizationAuditEntryData = (fields?: string) => `
    ... on OrgRestoreMemberMembershipOrganizationAuditEntryData {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onOrgRestoreMemberMembershipOrganizationAuditEntryData
* @fields
* Repository
*
* organizationName

* organizationResourcePath

* organizationUrl
*/

export const onOrgRestoreMemberMembershipRepositoryAuditEntryData = (fields?: string) => `
    ... on OrgRestoreMemberMembershipRepositoryAuditEntryData {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRestoreMemberMembershipTeamAuditEntryData
* @fields
* Team
*
* teamName

* teamResourcePath

* teamUrl
*/

export const onOrgRestoreMemberMembershipTeamAuditEntryData = (fields?: string) => `
    ... on OrgRestoreMemberMembershipTeamAuditEntryData {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgUnblockUserAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* blockedUser {
    User
}

* blockedUserName

* blockedUserResourcePath
          
* blockedUserUrl

* createdAt

* operationType
    
* Organization
    
* organizationName
 
* organizationResourcePath
    
* organizationUrl

* permission

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgUnblockUserAuditEntry = (fields?: string) => `
    ... on OrgUnblockUserAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgUpdateDefaultRepositoryPermissionAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* operationType
    
* Organization
    
* organizationName
 
* organizationResourcePath
    
* organizationUrl

* permission

* permissionWas

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const OrgUpdateDefaultRepositoryPermissionAuditEntry = (fields?: string) => `
    ... on OrgUpdateDefaultRepositoryPermissionAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgUpdateMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* operationType
    
* Organization
    
* organizationName
 
* organizationResourcePath
    
* organizationUrl

* permission

* permissionWas

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgUpdateMemberAuditEntry = (fields?: string) => `
    ... on OrgUpdateMemberAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* canCreateRepositories

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onOrgUpdateMemberRepositoryCreationPermissionAuditEntry = (fields?: string) => `
    ... on OrgUpdateMemberRepositoryCreationPermissionAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* canInviteOutsideCollaboratorsToRepositories

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry = (fields?: string) => `
    ... on OrgUpdateMemberRepositoryInvitationPermissionAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPrivateRepositoryForkingDisableAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* enterpriseResourcePath

* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onPrivateRepositoryForkingDisableAuditEntry = (fields?: string) => `
    ... on PrivateRepositoryForkingDisableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPrivateRepositoryForkingEnableAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* enterpriseResourcePath

* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onPrivateRepositoryForkingEnableAuditEntry = (fields?: string) => `
    ... on PrivateRepositoryForkingEnableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoAccessAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoAccessAuditEntry = (fields?: string) => `
    ... on RepoAccessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoAddMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoAddMemberAuditEntry = (fields?: string) => `
    ... on RepoAddMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoAddTopicAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* Topic

* topicName
*/

export const onRepoAddTopicAuditEntry = (fields?: string) => `
    ... on RepoAddTopicAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoArchivedAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoArchivedAuditEntry = (fields?: string) => `
    ... on RepoArchivedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoChangeMergeSettingAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* isEnabled
          
* mergeType

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoChangeMergeSettingAuditEntry = (fields?: string) => `
    ... on RepoChangeMergeSettingAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoConfigDisableAnonymousGitAccessAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigDisableAnonymousGitAccessAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableAnonymousGitAccessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoConfigDisableCollaboratorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigDisableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onRepoConfigDisableContributorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigDisableContributorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableContributorsOnlyAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigDisableSockpuppetDisallowedAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigDisableSockpuppetDisallowedAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableSockpuppetDisallowedAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableAnonymousGitAccessAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigEnableAnonymousGitAccessAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableAnonymousGitAccessAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableCollaboratorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigEnableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableContributorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigEnableContributorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableContributorsOnlyAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableSockpuppetDisallowedAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigEnableSockpuppetDisallowedAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableSockpuppetDisallowedAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigUnlockAnonymousGitAccessAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigUnlockAnonymousGitAccessAuditEntry = (fields?: string) => `
    ... on RepoConfigUnlockAnonymousGitAccessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoCreateAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* forkParentName
          
* forkSourceName

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoCreateAuditEntry = (fields?: string) => `
    ... on RepoCreateAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoDestroyAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoDestroyAuditEntry = (fields?: string) => `
    ... on RepoDestroyAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoRemoveMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoRemoveMemberAuditEntry = (fields?: string) => `
    ... on RepoRemoveMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoRemoveTopicAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoRemoveTopicAuditEntry = (fields?: string) => `
    ... on RepoRemoveTopicAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepositoryVisibilityChangeDisableAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* enterpriseResourcePath
          
* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onRepositoryVisibilityChangeDisableAuditEntry = (fields?: string) => `
    ... on RepositoryVisibilityChangeDisableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepositoryVisibilityChangeEnableAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* enterpriseResourcePath
          
* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onRepositoryVisibilityChangeEnableAuditEntry = (fields?: string) => `
    ... on RepositoryVisibilityChangeEnableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTeamAddMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamAddMemberAuditEntry = (fields?: string) => `
    ... on TeamAddMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTeamAddRepositoryAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamAddRepositoryAuditEntry = (fields?: string) => `
    ... on TeamAddRepositoryAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onTeamChangeParentTeamAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* parentTeam {
    Team
}

* parentTeamName
          
* parentTeamNameWas
          
* parentTeamResourcePath
          
* parentTeamUrl

* parentTeamWas {
    Team
}
* parentTeamWasResourcePath

* parentTeamWasUrl
*
* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamChangeParentTeamAuditEntry = (fields?: string) => `
    ... on TeamChangeParentTeamAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTeamRemoveMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamRemoveMemberAuditEntry = (fields?: string) => `
    ... on TeamRemoveMemberAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onTeamRemoveRepositoryAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamRemoveRepositoryAuditEntry = (fields?: string) => `
    ... on TeamRemoveRepositoryAuditEntry {
        id
        ${fields}
    }
`
