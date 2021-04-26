import { queryVariables } from '.'

/**
 * @description Github Graphql Organization
 * @fields
 **  anyPinnableItems (type: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM")
 ** AuditLog
 ** avatarUrl
 ** createdAt
 ** databaseId
 ** description
 ** descriptionHTML
 ** Domains
 ** email
 ** hasSponsorsListing
 ** id
 ** interactionAbility { expiresAt limit origin }
** ipAllowListEnabledSetting
** isSponsoredBy (accountLogin: "")
** isSponsoringViewer
** isVerified
** ItemShocase
** name
** location
** login
** MemberStatuses
** MembersWithRole
** newTeamResourcePath
** newTeamUrl
** notificationDeliveryRestrictionEnabledSetting
** organizationBillingEmail
** Packages
** PendingMembers
** OrganizationPinnableItems
** OrganizationPinnedItems
** Project
** Projects
** projectsResourcePath
** projectsUrl
** Repositories
** Repository
** SamlIdentityProvider
** OrgSponsorsListing
** SponsorshipForViewerAsSponsor
** team { Team }
** Teams
** teamsResourcePath
** teamsUrl
** twitterUsername
** updatedAt
** url
** viewerCanAdminister
** viewerCanChangePinnedItems
** viewerCanCreateProjects
** viewerCanCreateRepositories
** viewerCanCreateTeams
** viewerCanSponsor
** viewerIsAMember
** viewerIsSponsoring
** websiteUrl
*/

export const Organization = (fields: string, login?: string) => `
    organization ${login ? `(login: "${login}")` : ''} {
        name
        ${fields}
    }
`

/** @description Github Graphql AuditLog
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** orderBy "CREATED_AT"
** query string
@fields
** onMembersCanDeleteReposDisableAuditEntry
** onMembersCanDeleteReposClearAuditEntry
** onOauthApplicationCreateAuditEntry
** onOrgAddMemberAuditEntry
** onOrgAddBillingManagerAuditEntry
** onOrgBlockUserAuditEntry
** onOrgConfigDisableCollaboratorsOnlyAuditEntry
** onOrgConfigEnableCollaboratorsOnlyAuditEntry
** onOrgConfigEnableCollaboratorsOnlyAuditEntry
** onOrgCreateAuditEntry
** onOrgDisableOauthAppRestrictionsAuditEntry
** onOrgDisableSamlAuditEntry
** onOrgEnableOauthAppRestrictionsAuditEntry
** onOrgEnableSamlAuditEntry
** onOrgEnableTwoFactorRequirementAuditEntry
** onOrgInviteMemberAuditEntry
** onOrgInviteToBusinessAuditEntry
** onOrgOauthAppAccessApprovedAuditEntry
** onOrgOauthAppAccessDeniedAuditEntry
** onOrgOauthAppAccessRequestedAuditEntry
** onOrgRemoveBillingManagerAuditEntry
** onOrgRemoveMemberAuditEntry
** onOrgRemoveOutsideCollaboratorAuditEntry
** onOrgRestoreMemberAuditEntry
** onOrgUnblockUserAuditEntry
** onOrgUpdateDefaultRepositoryPermissionAuditEntry
** onOrgUpdateMemberAuditEntry
** onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
** onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
** onPrivateRepositoryForkingDisableAuditEntry
** onPrivateRepositoryForkingEnableAuditEntry
** onRepoAccessAuditEntry
** onRepoAddMemberAuditEntry
** onRepoAddTopicAuditEntry
** onRepoChangeMergeSettingAuditEntry
** onRepoConfigDisableAnonymousGitAccessAuditEntry
** onRepoConfigDisableCollaboratorsOnlyAuditEntry
** onRepoConfigDisableContributorsOnlyAuditEntry
** onRepoConfigDisableSockpuppetDisallowedAuditEntry
** onRepoConfigEnableAnonymousGitAccessAuditEntry
** onRepoConfigEnableCollaboratorsOnlyAuditEntry
** onRepoConfigEnableContributorsOnlyAuditEntry
** onRepoConfigEnableSockpuppetDisallowedAuditEntry
** onRepoConfigUnlockAnonymousGitAccessAuditEntry
** onRepoCreateAuditEntry
** onRepoDestroyAuditEntry
** onRepoRemoveTopicAuditEntry
** onRepositoryVisibilityChangeDisableAuditEntry
** onRepositoryVisibilityChangeEnableAuditEntry
** onTeamAddMemberAuditEntry
** onTeamAddRepositoryAuditEntry
** onTeamChangeParentTeamAuditEntry
** onTeamRemoveMemberAuditEntry
** onTeamRemoveRepositoryAuditEntry
*/

export const AuditLog = (params: queryVariables.AuditLog) => `
    auditLog (${params.query ? `query: "${params.query}"` : ''} ${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql AuditLog
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** isVerified boolean
** orderBy "DOMAIN" | "CREATED_AT"
** query string
@fields
** createdAt
** databaseId
** dnsHostName
** domain
** hasFoundHostName
** hasFoundVerificationToken
** id
** isRequiredForPolicyEnforcement
** isVerified
** owner { onEnterprise onOrganization }
** punycodeEncodedDomain
** tokenExpirationTime
** updatedAt
** verificationToken
*/

export const Domains = (params: queryVariables.Domains) => `
    domains (${params.query ? `query: "${params.query}"` : ''} ${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
        ${params.isVerified ? `isVerified: "${params.isVerified}"` : ''} ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql IpAllowListEntries
* @defaultVariables totalCount
* @queryArguments
*** after string
** before string
** first number
** last number
** orderBy "ALLOW_LIST_VALUE" | "CREATED_AT"
** @fields
** allowListValue
** createdAt
** id
** isActive
** name
** owner { onEnterprise onOrganization }
** updatedAt
*/

export const IpAllowListEntries = (params: queryVariables.IpAllowListEntries) => `
    ipAllowListEntries (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
        ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql Items
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
@fields
** onGist
** onRepository
*/

export const Items = (params: queryVariables.BasicFields) => `
    items (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql MemberStatuses
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
@fields
** createdAt
** emoji
** emojiHTML
** expiresAt
** id
** indicatesLimitedAvailability
** message
** Organization
** updatedAt
** User
*/

export const MemberStatuses = (params: queryVariables.MemberStatuses) => `
    memberStatuses (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`
/** @description Github Graphql MembersWithRole
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
@fields
** User
*/

export const MembersWithRole = (params: queryVariables.BasicFields) => `
    membersWithRole (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql PendingMembers
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
* @fields
**  User
*/

export const PendingMembers = (params: queryVariables.BasicFields) => `
    pendingMembers (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`
/** @description Github Graphql PinnableItems
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
 @fields
** onGist
** onRepository
*/

export const OrganizationPinnableItems = (params: queryVariables.Item) => `
    pinnableItems (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql PinnedItems
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
 @fields
** onGist
** onRepository
*/

export const OrganizationPinnedItems = (params: queryVariables.Item) => `
    pinnedItems (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.types ? `, types: ${params.types}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql SamlIdentity
* @fields
** emails { primary type value }
** familyName
** givenName
** groups
** nameId
** username
*/

export const SamlIdentity = (fields: string = '') => `
    samlIdentity {
        givenName
        ${fields}
    }
`

/** @description Github Graphql ScimIdentity
* @fields
** emails { primary type value }
** familyName
** givenName
** groups
** nameId
** username
*/

export const ScimIdentity = (fields: string = '') => `
    scimIdentity {
        givenName
        ${fields}
    }
`

/** @description Github Graphql SponsorshipForViewerAsSponsor
* @fields
** createdAt
** id
** maintainer { User }
** privacyLevel
** sponsor { User }
** sponsorEntity { onOrganization onUser }
** Sponsorable
** tier { Tier }
** tierSelectedAt
*/

export const SponsorshipForViewerAsSponsor = (fields: string = '') => `
    sponsorshipForViewerAsSponsor {
        ${fields}
    }
`

/** @description Github Graphql
* @fields
** hasSponsorsListing
** isSponsoredBy(accountLogin: "")
** isSponsoringViewer
*/
export const Sponsorable = (fields: string = '') => `
    sponsorable {
        ${fields}
    }
`

/** @description Github Graphql SponsorshipsAsMaintainer
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** includePrivate boolean
* @fields
** createdAt
** id
** isOneTimePayment
** maintainer { User }
** privacyLevel
** sponsor { User }
** sponsorEntity { onOrganization onuser }
** Sponsorable
** tier { Tier }
** tierSelectedAt
*/

export const SponsorshipsAsMaintainer = (params: queryVariables.Sponsorships) => `
    sponsorshipsAsMaintainer (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.includePrivate ? `,includePrivate: ${params.includePrivate}` : ''} ) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount

    }
`

/** @description Github Graphql Tier
* @fields
** AdminInfo
** ClosestLesserValueTier
** createdAt
** description
** descriptionHTML
** id
** isCustomAmount
** isOneTime
** monthlyPriceInCents
** monthlyPriceInDollars
** name
** SponsorsListing
** updatedAt
*/

export const Tier = (fields: string = '') => `
    tier {
        ${fields}
    }
`

/** @description Github Graphql AdminInfo
** @fields Sponsorships
*/

export const AdminInfo = (fields: string = '') => `
    adminInfo {
        ${fields}
    }
`

/** @description Github Graphql Sponsorships
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** includePrivate boolean
* @fields
** createdAt
** id
** isOneTimePayment
** maintainer { User }
** privacyLevel
** sponsor { User }
** sponsorEntity { onOrganization onuser }
** Sponsorable
** tier { Tier }
** tierSelectedAt
*/

export const Sponsorships = (params: queryVariables.Sponsorships) => `
    sponsorships (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.includePrivate ? `,includePrivate: ${params.includePrivate}` : ''} ) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount

    }
`

/** @description Github Graphql ClosestLesserValueTier
* @fields
** AdminInfo
** ClosestLesserValueTier
** createdAt
** description
** descriptionHTML
** id
** isCustomAmount
** isOneTime
** monthlyPriceInCents
** monthlyPriceInDollars
** name
** SponsorsListing
** updatedAt
*/

export const ClosestLesserValueTier = (fields: string = '') => `
    closestLesserValueTier {
        ${fields}
    }
`
/** @description Github Graphql SponsorsListing
* @fields
** activeGoal { Goal }
** createdAt
** fullDescription
** fullDescriptionHTML
** id
** name
** shortDescription
** slug
** Tiers
*/

export const OrgSponsorsListing = (fields: string = '', slug?: string) => `
    sponsorsListing ${slug ? `(slug: "${slug}")` : ''} {
        ${fields}
    }
`

/** @description Github Graphql Goal
* @fields
** description
** kind
** percentComplete
** targetValue
** title

*/

export const Goal = (fields: string = '') => `
    goal {
        ${fields}
    }
`

/** @description Github Graphql Tiers
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** orderBy "CREATED_AT" | "MONTHLY_PRICE_IN_CENTS"
* @fields
** Tier
*/

export const Tiers = (params: queryVariables.Tiers) => `
    tiers (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount

    }
`

/** @description Github Graphql Team
** @fields
** Ancestors
** avatarUrl
** ChildTeams
** combinedSlug
** createdAt
** databaseId
** description
** Discussion
** Discussions
** discussionsResourcePath
** discussionsUrl
** editTeamResourcePath
** editTeamUrl
** id
** Invitations
** MemberStatuses
** Members
** membersResourcePath
** membersUrl
** name
** newTeamResourcePath
** newTeamUrl
** organization { Organization }
** parentTeam { Team }
** privacy
** Repositories
** privacy
** repositoriesResourcePath
** repositoriesUrl
** resourcePath
** slug
** teamsResourcePath
** teamsUrl
** updatedAt
** url
** viewerCanAdminister
** viewerCanSubscribe
** viewerSubscription
*/

export const Team = (slug: string, fields: string = '') => `
    team (slug: "${slug}") {
        ${fields}
    }
`

/** @description Github Graphql Ancestors
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
@fields
** Team
*/

export const Ancestors = (params: queryVariables.BasicFields) => `
    ancestors (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount

    }
`

/** @description Github Graphql ChildTeams
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** immediateOnly boolean
** userLogins string
* @fields
** Team
*/

export const ChildTeams = (params: queryVariables.ChildTeams) => `
    childTeams (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.immediateOnly ? `,immediateOnly: ${params.immediateOnly}` : ''} ${params.userLogins ? `, userLogins: ${params.userLogins}` : ''}   
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''} ) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql Invitation
* @fields
** createdAt
** email
** id
** invitationType
** invitee { User }
** inviter { User }
** organization { Organization }
** role
*/

export const Invitation = (slug: string, fields: string = '') => `
    invitation (slug: "${slug}") {
        ${fields}
    }
`

/** @description Github Graphql Invitations
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
* @fields
** Invitation
*/

export const Invitations = (params: queryVariables.BasicFields) => `
    invitations (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount

    }
`
/** @description Github Graphql Members
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** membership "IMMEDIATE" | "CHILD_TEAM" | "ALL"
** query string
** role "MAINTAINER" | "MEMBER"
* @fields
** User
*/

export const Members = (params: queryVariables.Members) => `
    members (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.membership ? `, membership: ${params.membership}` : ''} ${params.query ? `, query: ${params.query}` : ''} ${params.role ? `, role: ${params.role}` : ''}
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount
    }
`

/** @description Github Graphql Teams
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** membership "IMMEDIATE" | "CHILD_TEAM" | "ALL"
** query string
** role "MAINTAINER" | "MEMBER"
* @fields
** Team
*/

export const Teams = (params: queryVariables.Teams) => `
    teams (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.ldapMapped ? `, ldapMapped: ${params.ldapMapped}` : ''} ${params.query ? `, query: ${params.query}` : ''} ${params.role ? `, role: ${params.role}` : ''} ${params.privacy ? `, privacy: ${params.privacy}` : ''}
    ${params.role ? `, role: ${params.role}` : ''} ${params.rootTeamsOnly ? `, rootTeamsOnly: ${params.rootTeamsOnly}` : ''}${params.userLogins ? `, userLogins: ${params.userLogins}` : ''}
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount

    }
`

/** @description Github Graphql ItemShowcase
* @fields
** hasPinnedItems
** Items
*/
export const OrgItemShowcase = (fields: string) => `
    itemShowcase {
        ${fields}
    }
`

/** @description Github Graphql SponsorshipsAsSponsor
* @defaultVariables totalCount
* @queryArguments
** after string
** before string
** first number
** last number
** query string
* @fields
** createdAt
** id
** maintainer { User }
** privacyLevel
** sponsor { User }
** sponsorEntity { onOrganization onUser }
** Sponsorable
** tier { Tier }
** tierSelectedAt
*/

export const SponsorshipsAsSponsor = (params: queryVariables.SponsorshipsAsSponsor) => `
    sponsorshipsAsSponsor (${params.after ? `, after: "${params.after}"` : ''} ${params.before ? `, before: "${params.before}"` : ''} ${params.first ? `first: ${params.first}` : ''} ${params.last ? `, last: ${params.last}` : ''}
    ${params.orderBy || params.direction ? `, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ''}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}  
        }
        ${params.pageInfo ? params.pageInfo : ''}
        totalCount

    }
`
