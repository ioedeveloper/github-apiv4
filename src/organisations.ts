/**
 * @description Github Graphql Organization
 * @defaultVariables id, email
 * @queryVariables anyPinnableItems(type: 'REPOSITORY' | 'GIST' | 'ISSUE' | 'PROJECT' | 'PULL_REQUEST' | 'USER' | 'ORGANIZATION' | 'TEAM')
 * auditLog(after: string, before: string, first: number, last: number, orderBy{direction: ASC | DESC, field: CREATED_AT}, query: string,
 * cursor, 
 * node: {
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
 * }
 * nodes {
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
 * }
 * PageInfo
 * totalCount
 */

 export const Organization = (fields: string) => `
    id
    email
    ${fields}
`
/**
 * @description Github Graphql onOrganization
 * @defaultVariables id name
 * @queryVariables Organization
 */

export const onOrganization = (fields: string) => `
    ... on Organization {
        ${fields}
    }
`
/**
 * @description Github Graphql Organization  
 * @defaultVariables totalCount query = "" orderBy = CREATED_AT direction = "ASC" role = MEMBER first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * orderBy 'LOGIN' | 'CREATED_AT'
 * after String
 * before String
 * first number
 * last number
 * query: String
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      isUnlicensed
 *      node {
 *          Organization
 *      }
 *      nodes {
 *          Organization
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Organizations = (query:string = "",after:string = '', before: string = '',deployment:string, first:number = 10, last:number = 0, orderBy:string = 'CREATED_AT', direction:string = 'ASC',fields:string = '') => `
    members(after: ${after} ${before?`, before: ${before}`:''}, deployment:${deployment} , first: ${first} ${last ?', last: number':''}, orderBy: {field: ${orderBy}, direction: ${direction}}, query: ${query}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanDeleteReposClearAuditEntry
 * @defaultVariables id
 * @queryVariables action
 * actor {
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id name
 * @queryVariables id
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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
 * @defaultVariables id
 * @queryVariables
 * action
 * actor{
 *  Bot
 *  Organization
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
 * Organization
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

/**
 * @description Github Graphql OrganizationNode  
 * @defaultVariables cursor
 * @queryVariables avatarUrl
 * createdAt
 * databaseId
 * description
 * descriptionHTML
 * auditLog
 * Domains
*/

export const OrganizationNode = (fields:string) => `
edges {
    cursor
    node {
        ${fields}
    }
}
`

/**
 * @description Github Graphql Domains  
 * @defaultVariables orderBy = CREATED_AT direction = "ASC" isVerified = true first = 10 field = "DOMAIN"
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * isVerified boolean
 * field "DOMAIN" | CREATED_AT
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          createdAt
 *          databaseId
 *          dnsHostName
 *          domain
 *          hasFoundHostName
 *          hasFoundVerificationToken
 *          id
 *          isRequiredForPolicyEnforcement
 *          owner {
 *              onEnterprise
 *              onOrganization
 *          }
 *          isVerified
 *          punycodeEncodedDomain
 *          tokenExpirationTime
 *          updatedAt
 *          verificationToken
 *      }
 *      role
 *      nodes {
 *          Organization
 *      }
 *  }
*   PageInfo
* }
*/

export const Domains = (after:string = "", first:number = 10, last:number,isVerified:boolean = true, field:string = "DOMAIN", direction:string = "ASC", fields:string) => `
    domains(after: ${after}, first: ${first}, isVerified: ${isVerified} ${last? ',last: ${last}' : ''}, orderBy: {field: ${field}, direction: ${direction}}){
        ${fields}
    }
`

/**
 * @description Github Graphql Members  
 * @defaultVariables totalCount query = "" orderBy = CREATED_AT role = 'MEMBER' direction = "ASC" role = MEMBER first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * orderBy 'LOGIN' | 'CREATED_AT'
 * after String
 * before String
 * deployment: 'CLOUD' | 'Server'
 * first number
 * last number
 * organizationLogins: String
 * query: String
 * role: 'MEMBER' | 'OWNER' 
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      isUnlicensed
 *      node {
 *          onEnterpriseUserAccount
 *          onUser
 *      }
 *  }
 *  nodes {
*       onEnterpriseUserAccount
*       onUser
*       PageInfo
*       totalCount
*   }
*   PageInfo
*   totalCount
* }
*/

export const Members = (query:string = "",after:string = '', before: string = '',deployment:string, first:number = 10, last:number = 0, orderBy:string = 'CREATED_AT', direction:string = 'ASC',organizationLogins:string = '', role:string = 'MEMBER',fields:string = '') => `
    members(after: ${after} ${before?`, before: ${before}`:''}, deployment:${deployment} , first: ${first} ${last ?', last: number':''}, orderBy: {field: ${orderBy}, direction: ${direction}}, organizationLogins: ${organizationLogins}, query: ${query}, role: ${role}) {
        ${fields}
    }
`

/**
 * @description Github Graphql Team
 * @defaultVariables id name
 * @queryVariables 
 * ancestors {
 *      Ancestors
 * }
 * avatarUrl
 * combinedSlug
 * createdAt
 * databaseId
 * description
 */


 export const Team = (fields:string = '') => `
 ... on Team {
     id
     name
     ${fields}
 }
`


/**
 * @description Github Graphql onTeam
 * @defaultVariables id
 * @queryVariables 
 * Team
 */


 export const onTeam = (fields:string = '') => `
 ... on Team {
     id
     ${fields}        
 }
`

/**
 * @description Github Graphql Ancestors
 * @defaultVariables id
 * @queryVariables 
 * after String
 * before String
 * first number
 * last number
 * edges {
 *      cursor
 *      node {
 *          ancestors {
 *              Ancestors
 *          }
 *          avatarUrl
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
    ancestors(after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MatchingRefs  
 * @defaultVariables totalCount orderBy = NAME direction = "ASC" first = 10 immediateOnly = false
 * @queryArguments direction 'ASC' | 'DESC' 
 * after String
 * before String
 * first number
 * last number
 * immediateOnly bool
 * userLogins string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *         Teams 
 *      }
 *  }
 *  nodes {
 *       Teams
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const ChildTeams = (immediateOnly:boolean = false,userLogins:string = "",after: string = '', before: string = '', first: number = 10, last: number = 0,orderBy: string = "NAME",direction:string =  "ASC", fields: string = '') => `
    childTeams(immediateOnly: ${immediateOnly}, userLogins: ${userLogins},after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql RelevantOrganizations
 * @defaultVariables id
 * @queryVariables 
 * after String
 * before String
 * first number
 * last number
 * edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 *  nodes {
 *       Organization
 *       PageInfo
 *       totalCount
 *   }
 * }
 */


 export const RelevantOrganizations = (after: string = '', before: string = '', first: number = 10, last: number = 0, fields: string = '') => `
    relevantOrganizations(after: ${after} ${before ? ', before' : ''}, first: ${first} ${last ? ', last: number' : ''}) {
        ${fields}
        totalCount
    }
`