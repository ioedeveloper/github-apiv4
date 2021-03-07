/**
 * @description Github Graphql Organisation
 * @defaultVariables id, email
 * @queryVariables anyPinnableItems(type: REPOSITORY | GIST | ISSUE | PROJECT | PULL_REQUEST | USER | ORGANIZATION | TEAM)
 * auditLog(after: string, before: string, first: number, last: number, orderBy{direction: ASC | DESC, field: CREATED_AT}, query: string,
 * cursor, node: {
 *  MembersCanDeleteReposClearAuditEntry
 *  MembersCanDeleteReposDisableAuditEntry
 *  MembersCanDeleteReposEnableAuditEntry
 *  OauthApplicationCreateAuditEntry
 *  OrgAddBillingManagerAuditEntry
 *  OrgAddMemberAuditEntry
 *  OrgBlockUserAuditEntry
 *  OrgConfigDisableCollaboratorsOnlyAuditEntry
 *  OrgConfigEnableCollaboratorsOnlyAuditEntry
 *  OrgCreateAuditEntry
 *  OrgDisableOauthAppRestrictionsAuditEntry
 *  OrgDisableSamlAuditEntry
 *  OrgDisableTwoFactorRequirementAuditEntry
 *  OrgEnableOauthAppRestrictionsAuditEntry
 *  OrgEnableSamlAuditEntry
 *  OrgEnableTwoFactorRequirementAuditEntry
 *  OrgInviteMemberAuditEntry
 *  OrgInviteToBusinessAuditEntry
 *  OrgOauthAppAccessApprovedAuditEntry
 *  OrgOauthAppAccessDeniedAuditEntry
 *  OrgOauthAppAccessRequestedAuditEntry
 *  OrgRemoveBillingManagerAuditEntry
 *  OrgRemoveMemberAuditEntry
 *  OrgRemoveOutsideCollaboratorAuditEntry
 *  OrgRestoreMemberAuditEntry
 *  OrgUnblockUserAuditEntry
 *  OrgUpdateDefaultRepositoryPermissionAuditEntry
 *  OrgUpdateMemberAuditEntry
 *  OrgUpdateMemberRepositoryCreationPermissionAuditEntry
 *  OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
 *  PrivateRepositoryForkingDisableAuditEntry
 *  PrivateRepositoryForkingEnableAuditEntry
 *  RepoAccessAuditEntry
 *  RepoAddMemberAuditEntry
 *  RepoAddTopicAuditEntry
 *  RepoArchivedAuditEntry
 *  RepoChangeMergeSettingAuditEntry
 *  RepoConfigDisableAnonymousGitAccessAuditEntry
 *  RepoConfigDisableCollaboratorsOnlyAuditEntry
 *  RepoConfigDisableContributorsOnlyAuditEntry
 *  RepoConfigDisableSockpuppetDisallowedAuditEntry
 *  RepoConfigEnableAnonymousGitAccessAuditEntry
 *  RepoConfigEnableCollaboratorsOnlyAuditEntry
 *  RepoConfigEnableContributorsOnlyAuditEntry
 *  RepoConfigEnableSockpuppetDisallowedAuditEntry
 *  RepoConfigLockAnonymousGitAccessAuditEntry
 *  RepoConfigUnlockAnonymousGitAccessAuditEntry
 *  RepoCreateAuditEntry
 *  RepoDestroyAuditEntry
 *  RepoRemoveMemberAuditEntry
 *  RepoRemoveTopicAuditEntry
 *  RepositoryVisibilityChangeDisableAuditEntry
 *  RepositoryVisibilityChangeEnableAuditEntry
 *  TeamAddMemberAuditEntry
 *  TeamAddRepositoryAuditEntry
 *  TeamChangeParentTeamAuditEntry
 *  TeamRemoveMemberAuditEntry
 *  TeamRemoveRepositoryAuditEntry
 * })
 * 
 */


export const Organization = (fields: string) => `
    ... on Organization {
    id
    email
    ${fields}
    }
`


/**
 * @description Github Graphql MembersCanDeleteReposClearAuditEntry
 * @defaultVariable id
 * @queryVariables action
 * actor {
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * action
 * actor
 * actorIp
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OnMembersCanDeleteReposClearAuditEntry = (fields:string = '') => `
... on MembersCanDeleteReposClearAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql MembersCanDeleteReposDisableAuditEntry
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * operationType
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 *
 */

export const MembersCanDeleteReposDisableAuditEntry = (fields:string = '') =>`
... on MembersCanDeleteReposDisableAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql MembersCanDeleteReposEnableAuditEntry
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * operationType
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const MembersCanDeleteReposEnableAuditEntry = (fields:string = '') =>`
... on MembersCanDeleteReposEnableAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql OauthApplicationCreateAuditEntry
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * applicationUrl
 * callbackUrl
 * createdAt
 * oauthApplicationName
 * oauthApplicationResourcePath
 * oauthApplicationUrl
 * operationType
 * Organisation
 * operationType
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * rateLimit
 * state
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OauthApplicationCreateAuditEntry = (fields:string = '') =>`
... on OauthApplicationCreateAuditEntry {
    id
    ${fields}
}
`
 
/**
 * @description Github Graphql OrgAddBillingManagerAuditEntry 
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * invitationEmail
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgAddBillingManagerAuditEntry = (fields:string = '') =>`
... on OrgAddBillingManagerAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql OrgAddMemberAuditEntry 
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * permission
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgAddMemberAuditEntry = (fields:string = '') =>`
... on OrgAddMemberAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql OrgBlockUserAuditEntry 
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * blockedUser {
 *  User
 * }
 * blockedUserName
 * blockedUserResourcePath
 * blockedUserUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * permission
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgBlockUserAuditEntry = (fields:string = '') =>`
... on OrgBlockUserAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql OrgConfigDisableCollaboratorsOnlyAuditEntry 
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * permission
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgConfigDisableCollaboratorsOnlyAuditEntry = (fields:string = '') =>`
... on OrgConfigDisableCollaboratorsOnlyAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql OrgConfigEnableCollaboratorsOnly 
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgConfigEnableCollaboratorsOnly = (fields:string = '') =>`
... on OrgConfigEnableCollaboratorsOnly {
    id
    ${fields}
}
`

/**
 * @description Github Graphql OrgCreateAuditEntry 
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgCreateAuditEntry = (fields:string = '') =>`
... on OrgCreateAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql OrgDisableOauthAppRestrictionsAuditEntry  
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgDisableOauthAppRestrictionsAuditEntry  = (fields:string = '') =>`
... on OrgDisableOauthAppRestrictionsAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql OrgDisableTwoFactorRequirementAuditEntry  
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgDisableTwoFactorRequirementAuditEntry  = (fields:string = '') =>`
... on OrgDisableTwoFactorRequirementAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql OrgEnableOauthAppRestrictionsAuditEntry  
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgEnableOauthAppRestrictionsAuditEntry  = (fields:string = '') =>`
... on OrgEnableOauthAppRestrictionsAuditEntry {
    id
    ${fields}
}

`/**
 * @description Github Graphql OrgEnableSamlAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * digestMethodUrl
 * issuerUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgEnableSamlAuditEntry  = (fields:string = '') =>`
... on OrgEnableSamlAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgEnableTwoFactorRequirementAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgEnableTwoFactorRequirementAuditEntry  = (fields:string = '') =>`
... on OrgEnableTwoFactorRequirementAuditEntry {
    id
    ${fields}
}

`/**
 * @description Github Graphql OrgInviteMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * email
 * operationType
 * Organisation
 * organizationInvitation {
 *  createdAt
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
 * }
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgInviteMemberAuditEntry  = (fields:string = '') =>`
... on OrgInviteMemberAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql OrgDisableSamlAuditEntry  
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * digestMethodUrl
 * issuerUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgDisableSamlAuditEntry  = (fields:string = '') =>`
... on OrgDisableSamlAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql OrgOauthAppAccessApprovedAuditEntry  
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * oauthApplicationName
 * oauthApplicationResourcePath
 * oauthApplicationUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgOauthAppAccessApprovedAuditEntry  = (fields:string = '') =>`
... on OrgOauthAppAccessApprovedAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql OrgOauthAppAccessDeniedAuditEntry  
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * oauthApplicationName
 * oauthApplicationResourcePath
 * oauthApplicationUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgOauthAppAccessDeniedAuditEntry  = (fields:string = '') =>`
... on OrgOauthAppAccessDeniedAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgOauthAppAccessRequestedAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * oauthApplicationName
 * oauthApplicationResourcePath
 * oauthApplicationUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgOauthAppAccessRequestedAuditEntry  = (fields:string = '') =>`
... on OrgOauthAppAccessRequestedAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgRemoveBillingManagerAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgRemoveBillingManagerAuditEntry  = (fields:string = '') =>`
... on OrgRemoveBillingManagerAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgRemoveMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * membershipTypes
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * reason
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgRemoveMemberAuditEntry = (fields:string = '') =>`
... on OrgRemoveMemberAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgRemoveOutsideCollaboratorAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * membershipTypes
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * reason
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgRemoveOutsideCollaboratorAuditEntry  = (fields:string = '') =>`
... on OrgRemoveOutsideCollaboratorAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgRestoreMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * restoredIssueAssignmentsCount
 * restoredMemberships {
 *  ... on OrgRestoreMemberMembershipOrganizationAuditEntryData {
 *      Organization
 *      organizationName
 *      organizationResourcePath
 *      organizationUrl
 *  }
 *  ... on OrgRestoreMemberMembershipRepositoryAuditEntryData {
 *      repositoryName
 *      repositoryResourcePath
 *      repositoryUrl
 *  }
 *  ... on OrgRestoreMemberMembershipTeamAuditEntryData {
 *      Team
 *      teamName
 *      teamResourcePath
 *      teamUrl
 *   }
 *  restoredRepositoryWatchesCount
 * }
 * restoredMembershipsCount
 * restoredRepositoriesCount
 * restoredRepositoryStarsCount
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgRestoreMemberAuditEntry  = (fields:string = '') =>`
... on OrgRestoreMemberAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgUnblockUserAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * blockedUser {
 *  User
 * }
 * blockedUserUrl
 * blockedUserResourcePath
 * blockedUserName
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgUnblockUserAuditEntry  = (fields:string = '') =>`
... on OrgUnblockUserAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgUpdateDefaultRepositoryPermissionAuditEntry  
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * permissionWas
 * permission
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgUpdateDefaultRepositoryPermissionAuditEntry = (fields:string = '') =>`
... on OrgUpdateDefaultRepositoryPermissionAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgUpdateMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * permission
 * permissionWas
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const OrgUpdateMemberAuditEntry  = (fields:string = '') =>`
... on OrgUpdateMemberAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql OrgUpdateMemberRepositoryInvitationPermissionAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * canInviteOutsideCollaboratorsToRepositories
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const canInviteOutsideCollaboratorsToRepositories  = (fields:string = '') =>`
... on canInviteOutsideCollaboratorsToRepositories {
    id
    ${fields}
}
`/**
 * @description Github Graphql PrivateRepositoryForkingDisableAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const PrivateRepositoryForkingDisableAuditEntry  = (fields:string = '') => `
... on PrivateRepositoryForkingDisableAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql PrivateRepositoryForkingEnableAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const PrivateRepositoryForkingEnableAuditEntry  = (fields:string = '') =>`
... on PrivateRepositoryForkingEnableAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql RepoAccessAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 * visibility
 */

export const RepoAccessAuditEntry = (fields:string = '') =>`
... on RepoAccessAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql RepoAddMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * User
 * userLogin
 * userResourcePath
 * userUrl
 * visibility
 */

export const RepoAddMemberAuditEntry = (fields:string = '') =>`
... on RepoAddMemberAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql RepoAddTopicAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * Repository
 * repositoryUrl
 * repositoryName
 * repositoryResourcePath
 * Topic
 * topicName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoAddTopicAuditEntry  = (fields:string = '') =>`
... on RepoAddTopicAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoArchivedAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 * visibility
 */

export const RepoArchivedAuditEntry  = (fields:string = '') =>`
... on RepoArchivedAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoChangeMergeSettingAuditEntry
 * @defaultVariable id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * mergeType
 * isEnabled
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoChangeMergeSettingAuditEntry  = (fields:string = '') =>`
... on RepoChangeMergeSettingAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoConfigDisableAnonymousGitAccessAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * mergeType
 * isEnabled
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigDisableAnonymousGitAccessAuditEntry  = (fields:string = '') =>`
... on RepoConfigDisableAnonymousGitAccessAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoConfigDisableCollaboratorsOnlyAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigDisableCollaboratorsOnlyAuditEntry  = (fields:string = '') =>`
... on RepoConfigDisableCollaboratorsOnlyAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql RepoConfigDisableSockpuppetDisallowedAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigDisableSockpuppetDisallowedAuditEntry  = (fields:string = '') =>`
... on RepoConfigDisableSockpuppetDisallowedAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoConfigEnableAnonymousGitAccessAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigEnableAnonymousGitAccessAuditEntry  = (fields:string = '') =>`
... on RepoConfigEnableAnonymousGitAccessAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql RepoConfigEnableCollaboratorsOnlyAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigEnableCollaboratorsOnlyAuditEntry  = (fields:string = '') =>`
... on RepoConfigEnableCollaboratorsOnlyAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoConfigEnableContributorsOnlyAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigEnableContributorsOnlyAuditEntry  = (fields:string = '') =>`
... on RepoConfigEnableContributorsOnlyAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoConfigEnableSockpuppetDisallowedAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigEnableSockpuppetDisallowedAuditEntry = (fields:string = '') =>`
... on RepoConfigEnableSockpuppetDisallowedAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql RepoConfigLockAnonymousGitAccessAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigLockAnonymousGitAccessAuditEntry  = (fields:string = '') =>`
... on RepoConfigLockAnonymousGitAccessAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoConfigUnlockAnonymousGitAccessAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigUnlockAnonymousGitAccessAuditEntry = (fields:string = '') =>`
... on RepoConfigUnlockAnonymousGitAccessAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoCreateAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * forkParentName
 * forkSourceName
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 * visibility
 */

export const RepoCreateAuditEntry  = (fields:string = '') =>`
... on RepoCreateAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoDestroyAuditEntry
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 * visibility
 */

export const RepoDestroyAuditEntry  = (fields:string = '') =>`
... on RepoDestroyAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoConfigDisableContributorsOnlyAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepositoryVisibilityChangeDisableAuditEntry  = (fields:string = '') =>`
... on RepositoryVisibilityChangeDisableAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoRemoveMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 * visibility
 */

export const RepoRemoveMemberAuditEntry  = (fields:string = '') =>`
... on RepoRemoveMemberAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepoRemoveTopicAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * Topic
 * topicName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoRemoveTopicAuditEntry  = (fields:string = '') =>`
... on RepoRemoveTopicAuditEntry {
    id
    ${fields}
}
`/**
 * @description Github Graphql RepoConfigDisableContributorsOnlyAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepoConfigDisableContributorsOnlyAuditEntry  = (fields:string = '') =>`
... on RepoConfigDisableContributorsOnlyAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql RepositoryVisibilityChangeEnableAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * enterpriseResourcePath
 * enterpriseSlug
 * enterpriseUrl
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * singleSignOnUrl
 * signatureMethodUrl
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const RepositoryVisibilityChangeEnableAuditEntry  = (fields:string = '') =>`
... on RepositoryVisibilityChangeEnableAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql TeamAddMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * isLdapMapped
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * Team
 * teamUrl
 * teamResourcePath
 * teamName
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const TeamAddMemberAuditEntry  = (fields:string = '') =>`
... on TeamAddMemberAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql TeamAddRepositoryAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * isLdapMapped
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * Team
 * teamUrl
 * teamResourcePath
 * teamName
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const TeamAddRepositoryAuditEntry  = (fields:string = '') =>`
... on TeamAddRepositoryAuditEntry {
    id
    ${fields}
}
`


/**
 * @description Github Graphql TeamChangeParentTeamAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorLocation {
 *  city
 * actorIp
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * isLdapMapped
 * operationType
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * parentTeam {
 *  Team
 * }
 * parentTeamName
 * parentTeamNameWas
 * parentTeamResourcePath
 * parentTeamUrl
 * parentTeamWas {
 *  Team
 * }
 * parentTeamWasName
 * parentTeamWasNameWas
 * parentTeamWasResourcePath
 * parentTeamUrl
 * Team
 * teamUrl
 * teamResourcePath
 * teamName
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const TeamChangeParentTeamAuditEntry  = (fields:string = '') =>`
... on TeamChangeParentTeamAuditEntry {
    id
    ${fields}
}
`

/**
 * @description Github Graphql TeamRemoveMemberAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * isLdapMapped
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * Team
 * teamUrl
 * teamResourcePath
 * teamName
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const TeamRemoveMemberAuditEntry  = (fields:string = '') =>`
... on TeamRemoveMemberAuditEntry {
    id
    ${fields}
}
`
/**
 * @description Github Graphql TeamRemoveRepositoryAuditEntry  
 * @defaultVariable id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organisation
 *  User
 * }
 * actorIp
 * actorLocation {
 *  city
 *  country
 *  countryCode
 *  region
 *  regionCode
 * }
 * actorLogin
 * actorResourcePath
 * actorUrl
 * createdAt
 * operationType
 * isLdapMapped
 * Organisation
 * organizationName
 * organizationResourcePath
 * organizationUrl
 * Team
 * teamUrl
 * teamResourcePath
 * teamName
 * Repository
 * repositoryUrl
 * repositoryResourcePath
 * repositoryName
 * User
 * userLogin
 * userResourcePath
 * userUrl
 */

export const TeamRemoveRepositoryAuditEntry  = (fields:string = '') =>`
... on TeamRemoveRepositoryAuditEntry {
    id
    ${fields}
}
`
