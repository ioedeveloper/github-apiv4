/**
 * @description Github Graphql Organization
 * @defaultVariables id, email
 * @queryVariables anyPinnableItems(type: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM")
 * AuditLog
 * avatarUrl
 * createdAt
 * databaseId
 * description
 * descriptionHTML
 * Domains
 * email
 * hasSponsorsListing
 * interactionAbility {
 *      expiresAt
 *      limit
 *      origin
 * }
 * ipAllowListEnabledSetting
 * IpAllowListEntries
 * isSponsoredBy(accountLogin: string)
 * isSponsoringViewer
 * isVerified
 * itemShowcase {
 *      Items
 *      hasPinnedItems
 * }
 * location
 * login
 * MemberStatuses
 * MembersWithRole
 * name
 * newTeamResourcePath
 * newTeamUrl
 * notificationDeliveryRestrictionEnabledSetting
 * organizationBillingEmail
 * Packages
 * PendingMembers
 * PinnableItems
 * PinnedItems
 * pinnedItemsRemaining
 * Project
 * Projects
 * projectsResourcePath
 * projectsUrl
 * Repositories
 * Repository
 * requiresTwoFactorAuthentication
 * resourcePath
 * samlIdentityProvider {
 *      digestMethod
 *      ExternalIdentities
 *      id
 *      idpCertificate
 *      issuer
 *      organization {
 *          Organization
 *      }
 *      signatureMethod
 *      ssoUrl
 * }
 * sponsorsListing {
 *      activeGoal {
 *          description
 *          kind
 *          percentComplete
 *          targetValue
 *          title
 *      }
 *      createdAt
 *      fullDescription
 *      fullDescriptionHTML
 *      id
 *      name
 *      shortDescription
 *      slug
 * }
 * sponsorshipForViewerAsSponsor{
 *      Sponsor
 * }
 * SponsorshipsAsMaintainer
 * SponsorshipsAsSponsor
 * team {
 *      Team
 * }
 * Teams
 * teamsResourcePath
 * teamsUrl
 * twitterUsername
 * updatedAt
 * url
 * viewerCanAdminister
 * viewerCanChangePinnedItems
 * viewerCanCreateProjects
 * viewerCanCreateRepositories
 * viewerCanCreateTeams
 * viewerCanSponsor
 * viewerIsAMember
 * viewerIsSponsoring
 * websiteUrl
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
 * @description Github Graphql Organizations
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
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

export const Organizations = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    organizations(first: ${first} ${after && `, after: ${after} `} ${before && `, before: ${before}`}, ${last && `, last: ${last}`}) {
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

export const OnMembersCanDeleteReposClearAuditEntry = (fields: string = "") => `
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

export const MembersCanDeleteReposDisableAuditEntry = (fields: string = "") => `
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

export const MembersCanDeleteReposEnableAuditEntry = (fields: string = "") => `
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

export const OauthApplicationCreateAuditEntry = (fields: string = "") => `
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

export const OrgAddBillingManagerAuditEntry = (fields: string = "") => `
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

export const OrgAddMemberAuditEntry = (fields: string = "") => `
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

export const OrgBlockUserAuditEntry = (fields: string = "") => `
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

export const OrgConfigDisableCollaboratorsOnlyAuditEntry = (fields: string = "") => `
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

export const OrgConfigEnableCollaboratorsOnly = (fields: string = "") => `
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

export const OrgCreateAuditEntry = (fields: string = "") => `
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

export const OrgDisableOauthAppRestrictionsAuditEntry = (fields: string = "") => `
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

export const OrgDisableTwoFactorRequirementAuditEntry = (fields: string = "") => `
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

export const OrgEnableOauthAppRestrictionsAuditEntry = (fields: string = "") => `
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

export const OrgEnableSamlAuditEntry = (fields: string = "") => `
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

export const OrgEnableTwoFactorRequirementAuditEntry = (fields: string = "") => `
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
 *      Invitation
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

export const OrgInviteMemberAuditEntry = (fields: string = "") => `
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

export const OrgDisableSamlAuditEntry = (fields: string = "") => `
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

export const OrgOauthAppAccessApprovedAuditEntry = (fields: string = "") => `
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

export const OrgOauthAppAccessDeniedAuditEntry = (fields: string = "") => `
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

export const OrgOauthAppAccessRequestedAuditEntry = (fields: string = "") => `
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

export const OrgRemoveBillingManagerAuditEntry = (fields: string = "") => `
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

export const OrgRemoveMemberAuditEntry = (fields: string = "") => `
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

export const OrgRemoveOutsideCollaboratorAuditEntry = (fields: string = "") => `
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

export const OrgRestoreMemberAuditEntry = (fields: string = "") => `
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

export const OrgUnblockUserAuditEntry = (fields: string = "") => `
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

export const OrgUpdateDefaultRepositoryPermissionAuditEntry = (fields: string = "") => `
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

export const OrgUpdateMemberAuditEntry = (fields: string = "") => `
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

export const canInviteOutsideCollaboratorsToRepositories = (fields: string = "") => `
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

export const PrivateRepositoryForkingDisableAuditEntry = (fields: string = "") => `
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

export const PrivateRepositoryForkingEnableAuditEntry = (fields: string = "") => `
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

export const RepoAccessAuditEntry = (fields: string = "") => `
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

export const RepoAddMemberAuditEntry = (fields: string = "") => `
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

export const RepoAddTopicAuditEntry = (fields: string = "") => `
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

export const RepoArchivedAuditEntry = (fields: string = "") => `
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

export const RepoChangeMergeSettingAuditEntry = (fields: string = "") => `
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

export const RepoConfigDisableAnonymousGitAccessAuditEntry = (fields: string = "") => `
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

export const RepoConfigDisableCollaboratorsOnlyAuditEntry = (fields: string = "") => `
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

export const RepoConfigDisableSockpuppetDisallowedAuditEntry = (fields: string = "") => `
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

export const RepoConfigEnableAnonymousGitAccessAuditEntry = (fields: string = "") => `
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

export const RepoConfigEnableCollaboratorsOnlyAuditEntry = (fields: string = "") => `
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

export const RepoConfigEnableContributorsOnlyAuditEntry = (fields: string = "") => `
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

export const RepoConfigEnableSockpuppetDisallowedAuditEntry = (fields: string = "") => `
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

export const RepoConfigLockAnonymousGitAccessAuditEntry = (fields: string = "") => `
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

export const RepoConfigUnlockAnonymousGitAccessAuditEntry = (fields: string = "") => `
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

export const RepoCreateAuditEntry = (fields: string = "") => `
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

export const RepoDestroyAuditEntry = (fields: string = "") => `
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

export const RepositoryVisibilityChangeDisableAuditEntry = (fields: string = "") => `
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

export const RepoRemoveMemberAuditEntry = (fields: string = "") => `
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

export const RepoRemoveTopicAuditEntry = (fields: string = "") => `
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

export const RepoConfigDisableContributorsOnlyAuditEntry = (fields: string = "") => `
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

export const RepositoryVisibilityChangeEnableAuditEntry = (fields: string = "") => `
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

export const TeamAddMemberAuditEntry = (fields: string = "") => `
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

export const TeamAddRepositoryAuditEntry = (fields: string = "") => `
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

export const TeamChangeParentTeamAuditEntry = (fields: string = "") => `
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

export const TeamRemoveMemberAuditEntry = (fields: string = "") => `
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

export const TeamRemoveRepositoryAuditEntry = (fields: string = "") => `
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

export const OrganizationNode = (fields: string) => `
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
 * after string
 * before string
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

export const Domains = (isVerified: boolean = true, first: number = 10, fields: string = "", orderBy: string = "DOMAIN", direction: string = "ASC", after: string = "", last: number) => `
    domains(first: ${first}, isVerified: ${isVerified} ${after && `, after: ${after}`} ${last && `, last: ${last} `}, orderBy: {field: ${orderBy}, direction: ${direction}}){
        ${fields}
    }
`

/**
 * @description Github Graphql Members  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC"  first = 10
 * @queryArguments 
 * query string
 * direction "ASC" | "DESC" 
 * orderBy "LOGIN" | "CREATED_AT" 
 * after string
 * before string 
 * deployment: "CLOUD" | "SERVER"
 * first number
 * last number
 * organizationLogins: string
 * query: string
 * role: "MEMBER" | "OWNER" 
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

export const Members = (query: string = "", first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", direction: string = "ASC", organizationLogins: string = "", role: string = "", deployment: string, after: string = "", before: string = "", last: number) => `
    members( query: ${query}, first: ${first}, orderBy: {field: ${orderBy}, direction: ${direction}} ${deployment && `,deployment: ${deployment}`}, ${organizationLogins && `organizationLogins: ${organizationLogins}`} ${role && `, role: ${role}`} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
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
 * childTeams {
 *      ChildTeams
 * }
 * combinedSlug
 * createdAt
 * databaseId
 * description
 * discussion {
 *      Discussion
 * }
 * discussions {
 *     Discussions
 * }
 * discussionsResourcePath
 * discussionsUrl
 * editTeamResourcePath
 * editTeamUrl
 * id
 * invitations {
 *      Invitations
 * }
 * memberStatuses {
 *      MemberStatuses
 * }
 * members {
 *      Members
 * }
 * membersResourcePath
 * membersUrl
 * name
 * newTeamResourcePath
 * newTeamUrl
 * organization {
 *      Organization
 * }
 * parentTeam {
 *      Team
 * }
 * privacy
 * repositories {
 *     Repositories
 * }
 * repositoriesResourcePath
 * repositoriesUrl
 * resourcePath
 * slug
 * teamsResourcePath
 * teamsUrl
 * updatedAt
 * url
 * viewerCanAdminister
 * viewerCanSubscribe
 * viewerSubscription
 */


export const Team = (fields: string = "") => `
     id
     name
     ${fields}
`


/**
 * @description Github Graphql Teams  
 * @defaultVariables totalCount orderBy = "NAME" direction = "ASC" role = "MEMBER" first = 10 ldapMapped = false
 * @queryArguments 
 * query string
 * direction "ASC" | "DESC" 
 * orderBy "NAME"
 * after string
 * before string
 * first number
 * last number
 * privacy "SECRET" | "VISIBLE"
 * query string
 * role "ADMIN" | "MEMBER"
 * rootTeamsOnly boolean
 * userLogins string
 * role "ADMIN" | "MEMBER"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Team
 *      }
 *      role
 *      nodes {
 *          Team
 *      }
 *  }
*   PageInfo
* }
*/

export const Teams = (query: string = "", first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", direction: string = "ASC", ldapMapped: boolean, privacy: string = "VISIBLE", role: string = "MEMBER", rootTeamsOnly: boolean, userLogins: string = "", after: string = "", before: string = "",
    last: number) => `
    teams(query: ${query}, first: ${first} ${ldapMapped && `, ldapMapped: ${ldapMapped}`} ${privacy && `, privacy: ${privacy}`} ${role && `, role: ${role}`} ${rootTeamsOnly && `, rootTeamsOnly: ${rootTeamsOnly}`} ${userLogins && `, userLogins: ${userLogins}`} 
    ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`},
     orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql onTeam
 * @defaultVariables id
 * @queryVariables 
 * Team
 */


export const onTeam = (fields: string = "") => `
 ... on Team {
     id
     ${fields}        
 }
`

/**
 * @description Github Graphql Ancestors
 * @defaultVariables id
 * @queryVariables 
 * after string
 * before string
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


export const PushAllowances = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    ancestors(first: ${first} ${after && `after: ${after}`} ${before && `, before: ${before}`}  ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MatchingRefs  
 * @defaultVariables totalCount orderBy = NAME direction = "ASC" first = 10
 * @queryArguments direction "ASC" | "DESC" 
 * after string
 * before string
 * first number
 * last number
 * immediateOnly boolean
 * userLogins string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *         Team
 *      }
 *  }
 *  nodes {
 *       Teams
 *       PageInfo
 *       totalCount
 *   }
 * }
*/

export const ChildTeams = (first: number = 10, fields: string = "", orderBy: string = "NAME", direction: string = "ASC", immediateOnly: boolean, userLogins: string = "", after: string = "", before: string = "", last: number) => `
    childTeams(first:${first} ${immediateOnly && `immediateOnly: ${immediateOnly}`} ${userLogins && `, userLogins: ${userLogins}`} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {orderBy: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql RelevantOrganizations
 * @defaultVariables id
 * @queryVariables 
 * after string
 * before string
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


export const RelevantOrganizations = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    relevantOrganizations( first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before} `} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MemberStatus
 * @defaultVariables id
 * @queryVariables 
 * createdAt
 * emoji
 * emojiHTML
 * expiresAt
 * indicatesLimitedAvailability
 * message
 * organization {
 *      Organization
 * }
 * updatedAt
 * user {
 *      User
 * }
 */

export const MemberStatus = (fields: string = "") => `
     id
     ${fields}        
`

/**
 * @description Github Graphql Statuses  
 * @defaultVariables totalCount first = 10 field= "CREATED_AT" directions = "ASC"
 * @queryArguments 
 * field "UPDATED_AT"
 * directions "ASC" | "DESC"
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          MemberStatus
 *      }
 *      nodes {
 *          MemberStatus
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const MemberStatuses = (first: number = 10, fields: string = "", directions: string = "ASC", orderBy: string = "UPDATED_AT", after: string = "", before: string = "", last: number) => `
    memberStatuses(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions},}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql IpAllowListEntries
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10
 * @queryArguments direction "ASC" | "DESC" 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "ALLOW_LIST_VALUE"
 * direction "ASC" | "DESC"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          allowListValue
 *          createdAt
 *          id
 *          isActive
 *          name
 *          owner {
 *              onEnterprise
 *              onOrganization
 *          }
 *      }
 *  }
 *  nodes {
 *      allowListValue
 *      createdAt
 *      id
 *      isActive
 *      name
 *      owner {
 *          onEnterprise
 *          onOrganization
 *      }
 *      updatedAt
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const IpAllowListEntries = (first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", direction: string = "ASC", after: string = "", before: string = "", last: number) => `
    ipAllowListEntries(first: ${first} ${after && `, after: ${after} `} ${before && `, before: ${before} `} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${direction}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Items
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "SIZE""
 * direction "ASC" | "DESC"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          onGist
 *          onRepository
 *      }
 *  }
 *  nodes {
 *      onGist
 *      onRepository
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const Items = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    labels(${after && `, after: ${after} `}${before && `, before: ${before} `}, first: ${first}${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersWithRole
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          User
 *      }
 *  }
 *  nodes {
 *      User
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const MembersWithRole = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    membersWithRole(first: ${first} ${after && `, after: ${after} `} ${before && `, before: ${before} `} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql PendingMembers
 * @defaultVariables totalCount first = 10
 * @queryArguments
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          User
 *      }
 *  }
 *  nodes {
 *      User
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const PendingMembers = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    pendingMembers(first: ${first} ${after && `, after: ${after} `} ${before && `, before: ${before} `} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql PinnableItems
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * types "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          onGist
 *          onRepository
 *      }
 *  }
 *  nodes {
 *      onGist
 *      onRepository
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const PinnableItems = (first: number = 10, fields: string = "", types: string = "ORGANIZATION", after: string = "", before: string = "", last: number) => `
    pinnableItems(${types && `, type: ${types}`} ${after && `, after: ${after} `} ${before && `, before: ${before} `} ${first && `first: ${first}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql PinnedItems
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * types "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          onGist
 *          onRepository
 *      }
 *  }
 *  nodes {
 *      onGist
 *      onRepository
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const PinnedItems = (first: number = 10, fields: string = "", types: string = "ORGANIZATION", after: string = "", before: string = "", last: number) => `
    pinnedItems(first: ${first} ${types && `, type: ${types}`} ${after && `, after: ${after} `} ${before && `, before: ${before} `} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql ExternalIdentities
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          guid
 *          organizationInvitation {
 *              Invitation
 *          }
 *          samlIdentity {
 *              emails {
 *                  primary
 *                  type
 *                  value
 *              }
 *              familyName
 *              givenName
 *              groups
 *              nameId
 *              username
 *          }
 *          scimIdentity {
 *              emails {
 *                  primary
 *                  type
 *                  value
 *              }
 *              familyName
 *              givenName
 *              groups
 *              username
 *          }
 *          user{
 *              User
 *          }
 *      }
 *  }
 *  nodes {
 *      guid
 *      organizationInvitation {
 *          Invitation
 *      }
 *      samlIdentity {
 *          emails {
 *              primary
 *              type
 *              value
 *          }
 *          familyName
 *          givenName
 *          groups
 *          nameId
 *          username
 *      }
 *      scimIdentity {
 *          emails {
 *              primary
 *              type
 *              value
 *          }
 *          familyName
 *          givenName
 *          groups
 *          username
 *      }
 *      user{
 *          User
 *      }
 *      PageInfo
 *      totalCount
 *   }
 * }
*/

export const ExternalIdentities = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    externalIdentities(first: ${first} ${after && `, after: ${after} `} ${before && `, before: ${before} `} ${last && `, last: ${last}`}) {
        id
        ${fields}
        totalCount
    }
`



/**
 * @description Github Graphql Sponsorable
 * @defaultVariables id
 * @queryVariables 
 * hasSponsorsListing
 * isSponsoredBy(accountLogin: string)
 * isSponsoringViewer
 * sponsorsListing {
 *      activeGoal {
 *          description
 *          kind
 *          percentComplete
 *          targetValue
 *          title
 *      }
 *      createdAt
 *      fullDescription
 *      fullDescriptionHTML
 *      id
 *      name
 *      shortDescription
 *      slug
 * }
 * sponsorshipForViewerAsSponsor {
 *      Sponsor
 * }
 * SponsorshipsAsMaintainer
 * SponsorshipsAsSponsor
 * viewerCanSponsor
 * viewerIsSponsoring
 * onOrganazation
 * onUser
 */

export const Sponsorable = (fields: string = "") => `
    id
    ${fields}        
`

/**
 * @description Github Graphql Tier
 * @defaultVariables id name
 * @queryVariables 
 * adminInfo {
 *      Sponsorships
 * }
 * createdAt
 * description
 * descriptionHTML
 * monthlyPriceInCents
 * monthlyPriceInDollars
 * SponsorsListing
 * updatedAt
 */

export const Tier = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
 * @description Github Graphql Goals
 * @defaultVariables title percentComplete
 * @queryVariables 
 * description
 * kind
 * targetValue
 * title
 */

export const Goals = (fields: string = "") => `
    title
    percentComplete
    ${fields}
`

/**
 * @description Github Graphql SponsorsListing
 * @defaultVariables id name
 * @queryVariables 
 * activeGoal {
 *      Goal
 * }
 * createdAt
 * fullDescription
 * fullDescriptionHTML
 * id
 * name
 * shortDescription
 * slug
 * Tiers
 */

export const SponsorsListing = (fields: string = "") => `
    id
    name
    ${fields}
`



/**
 * @description Github Graphql Tiers  
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "MONTHLY_PRICE_IN_CENTS"
 * direction "ASC" | "DESC"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Tier
 *      }
 *      role
 *      nodes {
 *          Tier
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const Tiers = (first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", direction: string = "ASC", after: string = "", before: string = "", last: number) => `
    tiers(first: ${first} ${after && `, after: ${after} `} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
    }
        totalCount
`

/**
 * @description Github Graphql Sponsor
 * @queryVariables 
 * createdAt
 * id
 * maintainer {
 *      User
 *  }
 * privacyLevel
 * sponsorable {
 *      Sponsorable
 * }
 * sponsorEntity {
 *      onOrganization
 *      onUser
 * }
 * sponsor {
 *      User
 * }
 * tier {
 *      Tier
 * }
*/

export const Sponsor = (fields: string = "") => `
    id
    ${fields}        
`

/**
 * @description Github Graphql SponsorshipsAsMaintainer 
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT"
 * direction "ASC" | "DESC"
 * includePrivate boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Sponsor
 *      }
 *      role
 *      nodes {
 *          Sponsor
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const SponsorshipsAsMaintainer = (first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", direction: string = "ASC", includePrivate: boolean, after: string = "", before: string = "", last: number) => `
    sponsorshipsAsMaintainer(first: ${first}, ${includePrivate && `, includePrivate: ${includePrivate}`} ${after && `, after: ${after} `} ${before && `, before: ${before}`} ${last && `, last: ${last}`},
    orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
    }
    totalCount
`

/**
 * @description Github Graphql sponsorshipsAsSponsor 
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 includePrivate = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT"
 * direction "ASC" | "DESC"
 * includePrivate boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Sponsor
 *      }
 *      role
 *      nodes {
 *          Sponsor
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const SponsorshipsAsSponsor = (includePrivate: boolean, after: string = "", before: string = "", first: number = 10, last: number, orderBy: string = "CREATED_AT", direction: string = "ASC", fields: string = "") => `
    sponsorshipsAsSponsor(first: ${first}, ${includePrivate && `includePrivate: ${includePrivate}`} ${after && `, after: ${after} `} ${before && `, before: ${before}`} ${last && `, last: ${last}`},
    orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
    }
    totalCount
`

