/**
 * @description Github Graphql User 
 * @defaultVariables id name
 * @queryVariables anyPinnableItems(type: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM")
 * avatarUrl
 * bio
 * bioHTML
 * CommitComments
 * company
 * companyHTML
 * ContributionCollection
 * createdAt
 * databaseId
 * email
 * Followers
 * Following
 * Gist
 * GistComments
 * Gists
 * hasSponsorsListing
 * hovercard(primarySubjectId: "") {
 *  contexts {  
 *      message
 *      octicon
 *      ... on GenericHovercardContext {
 *          __typename
 *          message
 *          octicon
 *          RelevantTeams
 *          teamsResourcePath
 *          teamsUrl
 *          totalTeamCount
 *      }
 *      ... on OrganizationTeamsHovercardContext {
 *          __typename
 *          teamsResourcePath
 *          teamsUrl
 *          totalTeamCount
 *          RelevantOrganizations
 *      }
 *      ... on ReviewStatusHovercardContext {
 *          reviewDecision
 *          octicon
 *          message
 *      }
 *      ... on ViewerHovercardContext {
 *          __typename
 *          message
 *          octicon
 *          viewer
 *      }
 *   }
 * interactionAbility {
 *  expiresAt
 *  limit
 *  origin
 * }
 * isBountyHunter
 * isCampusExpert
 * isDeveloperProgramMember
 * isEmployee
 * isGitHubStar
 * isHireable
 * isSiteAdmin
 * isSponsoredBy(accountLogin: "")
 * isSponsoringViewer
 * isViewer
 * IssueComments
 * Issues
 * ItemShowcase
 * location
 * login
 * Organisation
 * organizationVerifiedDomainEmails(login: "")
 * Organization
 * Packages
 * PinnableItems
 * PinnedItemsRemaining  
 * Project
 * Projects
 * projectsResourcePath
 * projectsUrl
 * PublicKeys
 * PullRequests
 * Repositories
 * RepositoriesContributedTo
 * Repo
 * resourcePath
 * SavedReplies
 * SponsorListing
 * SponsorshipForViewerAsSponsor
 * SponsorshipsAsMaintainer
 * SponsorshipsAsSponsor
 * StarredRepositoriesonUser
 * status {
 *  message
 *  indicatesLimitedAvailability
 *  id
 *  expiresAt
 *  emojiHTML
 *  emoji
 *  createdAt
 *  updatedAt
 *  User
 *  Oganisation
 *  TopRepositories
 *  twitterUsername
 *  updatedAt
 *  url
 *  viewerCanChangePinnedItems
 *  viewerCanCreateProjects
 *  viewerCanFollow
 *  viewerCanSponsor
 *  viewerIsFollowing
 *  viewerIsSponsoring
 *  Watching
 *  websiteUrl
 * }
 *}
 */

export const User = (fields: string) => `
    id
    name
    ${fields}
`
/**
 * @description Github Graphql onUser
 * @defaultVariables id email
 * @queryVariables User
 */


export const onUser = (fields: string) => `
    ... on User {
        id
        email
        ${fields}
    }
`

/**
 * @description Github Graphql RelevantTeams
 * @defaultVariables totalcount
 * @queryVariables after 
 * befor
 * first
 * last
 * edges {
 *      cursor
 *      node {
 *         Teams                                                 
 *      }
 *  }
 * nodes {
 *      Teams 
 *      PageInfo
 * }
 */

export const RelevantTeams = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    relevantTeams(${after ? `, ${after && `, after: ${after}`}` : ""} ${before ? `, before: ${before}` : ""} first: ${first}, last: ${last}) {
        ${fields}
        totalcount
    }
 `

/**
* @description Github Graphql EnterpriseUserAccount  
* @defaultVariables id name
* @queryVariables avatarUrl
* createdAt
* enterprise {
*  Enterprise
* }
* login
* organizations {
*  Organizations
* }
* resourcePath
* updatedAt
* url
* user {
*  User
* }
*/

export const EnterpriseUserAccount = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
* @description Github Graphql onEnterpriseUserAccount 
* * @queryVariables EnterpriseUserAccount 
*/

export const onEnterpriseUserAccount = (fields: string = "") => `
    ... on EnterpriseUserAccount {
        ${fields}
    }
`

/**
* @description Github Graphql OwnerInfo 
* @queryVariables Admins
* AffiliatedUsersWithTwoFactorDisabled
* affiliatedUsersWithTwoFactorDisabledExist
* allowPrivateRepositoryForkingSetting
* AllowPrivateRepositoryForkingSettingOrganizations
* defaultRepositoryPermissionSetting
* DefaultRepositoryPermissionSettingOrganizations
* Domains
* EnterpriseServerInstallations
* ipAllowListEnabledSetting
* IpAllowListEntries
* isUpdatingDefaultRepositoryPermission
* isUpdatingTwoFactorRequirement
* membersCanChangeRepositoryVisibilitySetting
* MembersCanChangeRepositoryVisibilitySettingOrganizations
*  membersCanCreateInternalRepositoriesSetting
* membersCanCreatePrivateRepositoriesSetting
* membersCanCreatePublicRepositoriesSetting
* membersCanCreateRepositoriesSetting
* MembersCanCreateRepositoriesSettingOrganizations
* membersCanDeleteIssuesSetting
* MembersCanDeleteIssuesSettingOrganizations
* membersCanDeleteRepositoriesSetting
* MembersCanDeleteRepositoriesSettingOrganizations
* membersCanInviteCollaboratorsSetting
* MembersCanInviteCollaboratorsSettingOrganizations
* membersCanMakePurchasesSetting
* membersCanUpdateProtectedBranchesSetting
* MembersCanUpdateProtectedBranchesSettingOrganizations
* membersCanViewDependencyInsightsSetting
* MembersCanViewDependencyInsightsSettingOrganizations
* notificationDeliveryRestrictionEnabledSetting
* organizationProjectsSetting
* OrganizationProjectsSettingOrganizations
* OutsideCollaborators
* PendingAdminInvitations
* PendingCollaboratorInvitations
* PendingCollaborators
* PendingMemberInvitations
* repositoryProjectsSetting
* RepositoryProjectsSettingOrganizations
* SamlIdentityProvider
* SamlIdentityProviderSettingOrganizations
* SupportEntitlements
* teamDiscussionsSetting
* TeamDiscussionsSettingOrganizations
* twoFactorRequiredSetting
* TwoFactorRequiredSettingOrganizations
*/

export const OwnerInfo = (fields: string = "") => `
    ownerInfo {
        ${fields}
    }
`

/**
 * @description Github Graphql Admins  
 * @defaultVariables totalCount query = "" orderBy = CREATED_AT direction = "ASC" role = MEMBER first = 10
 * @queryArguments direction "ASC" | "DESC" 
 * orderBy "LOGIN" | "CREATED_AT"
 * after string
 * before string
 * first number
 * last number
 * query: string
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          User
 *      }
 *      role
 *      nodes {
 *          User
 *      }
 *  }
*   PageInfo
* }
*/

export const Admins = (query: string = "", first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", direction: string = "ASC", after: string = "", before: string = "", last: number) => `
    members(query: ${query}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql AffiliatedUsersWithTwoFactorDisabled  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          User
 *      }
 *      role
 *      nodes {
 *          User
 *          PageInfo
 *          totalCount
 *      }
 *  }
*   PageInfo
* }
*/

export const AffiliatedUsersWithTwoFactorDisabled = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    affiliatedUsersWithTwoFactorDisabled(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`}, ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql AllowPrivateRepositoryForkingSettingOrganizations  
 * @defaultVariables totalCount query = "" orderBy = CREATED_AT direction = "ASC" role = MEMBER first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organisation
 *      }
 *      role
 *      nodes {
 *          Organisation
 *      }
 *  }
*   PageInfo
* }
*/

export const AllowPrivateRepositoryForkingSettingOrganizations = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    AllowPrivateRepositoryForkingSettingOrganizations(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql DefaultRepositoryPermissionSettingOrganizations  
 * @defaultVariables totalCount query = "" orderBy = CREATED_AT direction = "ASC" role = MEMBER first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organisation
 *      }
 *      role
 *      nodes {
 *          Organisation
 *      }
 *  }
*   PageInfo
* }
*/

export const DefaultRepositoryPermissionSettingOrganizations = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    defaultRepositoryPermissionSettingOrganizations(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql EnterpriseServerInstallations  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * connectedOnly boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          createdAt
 *          customerName
 *          hostName
 *          id
 *          isConnected
 *          updatedAt
 *          userAccounts {
 *              UserAccounts
 *          }
 *          userAccountsUploads {
 *              UserAccountsUploads
 *          }
 *      }
 *  }
 * nodes {
 *       createdAt
 *       customerName
 *       hostName
 *       id
 *       isConnected
 *       updatedAt
 *       userAccounts {
 *          UserAccounts
 *       }
 *       userAccountsUploads {
 *          UserAccountsUploads
 *       }
 *   }
 * PageInfo
* }
*/

export const EnterpriseServerInstallations = (first: number = 10, fields: string = "", connectedOnly: boolean = false, after: string = "", before: string = "", last: number) => `
    enterpriseServerInstallations(first: ${first} ${connectedOnly && `connectedOnly: ${connectedOnly}`} ${after && `, after: ${after}`} ${before && `, before: ${before}`} 
    ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql UserAccounts
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
 *          createdAt
 *          Emails
 *          EnterpriseServerInstallation
 *          id
 *          isSiteAdmin
 *          login
 *          profileName
 *          remoteCreatedAt
 *          remoteUserId
 *          updatedAt
 *      }
 *      role
 *      nodes {
 *          Organisation
 *      }
 *  }
*   PageInfo
* }
*/

export const UserAccounts = (first: number = 10, fields: string = "", connectedOnly: boolean = false, after: string = "", before: string = "", last: number) => `
    userAccounts(first: ${first} ${connectedOnly && `, connectedOnly: `} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Emails
 * @defaultVariables totalCount orderBy = "EMAIL" direction = "ASC" first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "EMAIL"
 * @queryVariables 
 *  edges {orderBy 
 *      cursor
 *      node {
 *          createdAt
 *          email
 *          id
 *          isPrimary
 *          updatedAt
 *          UserAccount
 *      }
 *      nodes {
 *          createdAt
 *          email
 *          id
 *          isPrimary
 *          updatedAt
 *          UserAccount
 *      }
 *      PageInfo
 *      totalCount
 * 
 *  }
 *   PageInfo
 * }
 */

export const Emails = (first: number = 10, fields: string = "", orderBy: string = "EMAIL", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    emails(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql EnterpriseServerInstallation
 * @defaultVariables totalCount orderBy = "EMAIL" direction = "ASC" first = 10
 * @queryVariables
 * createdAt
 * customerName
 * hostName
 * id
 * isConnected
 * UserAccounts
 */

export const EnterpriseServerInstallation = (fields: string = "") => `
    enterpriseServerInstallation {
        ${fields}
    }
`

/**
 * @description Github Graphql UserAccountsUploads
 * @defaultVariables totalCount orderBy = "EMAIL" direction = "ASC" first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "EMAIL"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          createdAt
 *          EnterpriseServerInstallation
 *          id
 *          name
 *          syncState
 *          updatedAt
 *      }
 *      nodes {
 *          createdAt
 *          EnterpriseServerInstallation
 *          id
 *          name
 *          syncState
 *          updatedAt
 *      }
 *      PageInfo
 *      totalCount
 * 
 *  }
 *   PageInfo
 * }
 */

export const UserAccountsUploads = (first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    userAccountsUploads(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql IpAllowListEntries
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "ALLOW_LIST_VALUE"
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
 *              Enterprise 
 *              Organisation    
 *          }
 *          updatedAt
 *      }
 *  }
 * nodes {
 *      allowListValue
 *      createdAt
 *      id
 *      isActive
 *      name
 *      owner {
 *          Enterprise 
 *          Organisation    
 *      }
 *      updatedAt 
 *   }
 *   PageInfo
 * }
 */

export const IpAllowListEntries = (first: number = 10, orderBy: string = "CREATED_AT", directions: string = "ASC", fields: string = "", after: string = "", before: string = "", last: number) => `
    ipAllowListEntries(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanChangeRepositoryVisibilitySettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const MembersCanChangeRepositoryVisibilitySettingOrganizations = (first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    membersCanChangeRepositoryVisibilitySettingOrganizations(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql MembersCanCreateRepositoriesSettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value "ALL" | "PRIVATE" | "DISABLED"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const MembersCanCreateRepositoriesSettingOrganizations = (first: number = 10, value: string = "ALL", fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    membersCanCreateRepositoriesSettingOrganizations(value:${value}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanDeleteIssuesSettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const MembersCanDeleteIssuesSettingOrganizations = (value: boolean = false, first: number = 10,fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    membersCanDeleteIssuesSettingOrganizations(value: ${value}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanDeleteRepositoriesSettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const MembersCanDeleteRepositoriesSettingOrganizations = (value: boolean = false, first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    membersCanDeleteRepositoriesSettingOrganizations(value: ${value}, ${after && `, after: ${after}`} ${before && `, before: ${before}`} , first: ${first} ${last && `, last: ${last}`},orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanInviteCollaboratorsSettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const MembersCanInviteCollaboratorsSettingOrganizations = (value: boolean = false, first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", direction: string = "ASC", after: string = "", before: string = "", last: number) => `
    membersCanInviteCollaboratorsSettingOrganizations(value: ${value}, ${after && `, after: ${after}`} ${before && `, before: ${before}`} , first: ${first} ${last && `, last: ${last}`},orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanUpdateProtectedBranchesSettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const MembersCanUpdateProtectedBranchesSettingOrganizations = (value: boolean = false,first: number = 10, orderBy: string = "CREATED_AT", directions: string = "ASC", fields: string = "", after: string = "", before: string = "", last: number) => `
    membersCanUpdateProtectedBranchesSettingOrganizations(value: ${value}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`},orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanViewDependencyInsightsSettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const MembersCanViewDependencyInsightsSettingOrganizations = (value: boolean = false, first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    membersCanViewDependencyInsightsSettingOrganizations(value: ${value}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql OrganizationProjectsSettingOrganizations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "CREATED_AT" | "LOGIN"
 * value boolean
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Organization
 *      }
 *  }
 * nodes {
 *     Organization
 * }
 * PageInfo
 */

export const OrganizationProjectsSettingOrganizations = (value: boolean = false,first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", after: string = "", before: string = "", last: number) => `
    organizationProjectsSettingOrganizations(value: ${value}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql OutsideCollaborators
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * orderBy "CREATED_AT" | "LOGIN"
 * query string
 * visibility "PRIVATE" | "PUBLIC" | "INTERNAL"
 * @queryVariables 
 *  edges {
 *      cursor
 *      isUnlicensed
 *      node {
 *          User
 *      }
 *      Repositories
 *  }
 * nodes {
 *     User
 *     PageInfo
 *      totalCount
 * }
 * PageInfo
 */

export const OutsideCollaborators = (query: string = "",  fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", first: number = 10, visibility: string = "PUBLIC", after: string = "", before: string = "", last: number) => `
    outsideCollaborators(query: ${query}, first: ${first} ${visibility && `, visibility: ${visibility}`} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql PendingAdminInvitations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * orderBy "CREATED_AT" | "LOGIN"
 * direction "ASC" | "DESC"
 * query string
 * role "OWNER" | "BILLING_MANAGER"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Invitation
 *      }
 *  }
 * nodes {
 *     Invitation
 *     PageInfo
 *     totalCount
 * }
 * PageInfo
 */

export const PendingAdminInvitations = (query: string = "",first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC", visibility: string = "PUBLIC", after: string = "", before: string = "", last: number) => `
    pendingAdminInvitations(query: ${query},visibility = ${visibility}, ${after && `, after: ${after}`} ${before && `, before: ${before}`} , first: ${first} ${last && `, last: ${last}`},orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql PendingCollaboratorInvitations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * orderBy "CREATED_AT" | "INVITEE_LOGIN"
 * direction "ASC" | "DESC"
 * query string
 * role "OWNER" | "BILLING_MANAGER"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Invitation
 *      }
 *  }
 * nodes {
 *     Invitation
 *     PageInfo
 *     totalCount
 * }
 * PageInfo
 */

export const PendingCollaboratorInvitations = (query: string = "", first: number = 10, fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC",  after: string = "", before: string = "", last: number) => `
    pendingCollaboratorInvitations(query: ${query}, ${after && `, after: ${after}`} ${before && `, before: ${before}`} , first: ${first} ${last && `, last: ${last}`},orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql PendingCollaborators
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * orderBy "CREATED_AT" | "INVITEE_LOGIN"
 * direction "ASC" | "DESC"
 * query string
 * role "OWNER" | "BILLING_MANAGER"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Invitation
 *      }
 *  }
 * nodes {
 *     Invitation
 *     PageInfo
 *     totalCount
 * }
 * PageInfo
 */

export const PendingCollaborators = (query: string = "",first: number = 10,fields: string = "",orderBy: string = "CREATED_AT", directions: string = "ASC",  after: string = "", before: string = "",  last: number ) => `
    pendingCollaborators(query: ${query}, ${after && `, after: ${after}`} ${before && `, before: ${before}`} , first: ${first} ${last && `, last: ${last}`},orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql PendingMemberInvitations
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * orderBy "CREATED_AT" | "INVITEE_LOGIN"
 * direction "ASC" | "DESC"
 * query string
 * role "OWNER" | "BILLING_MANAGER"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Invitation
 *      }
 *  }
 * nodes {
 *     Invitation
 *     PageInfo
 *     totalCount
 * }
 * PageInfo
 */

export const PendingMemberInvitations = (query: string = "", fields: string = "", orderBy: string = "CREATED_AT", directions: string = "ASC",first: number = 10,after: string = "", before: string = "",  last: number) => `
    pendingMemberInvitations(query: ${query}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${directions}}) {
        ${fields}
        totalCount
        totalUniqueUserCount
    }
`

/**
 * @description Github Graphql AssignableUsers
 * @defaultVariables totalCount orderBy = "CREATED_AT" direction = "ASC" first = 10 value = false affiliations "OWNER" isFork = false isLocked = false privacy = "PUBLIC"
 * @queryArguments 
 * affiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * ownerAffiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
 * after string
 * before string
 * first number
 * last number
 * isFork boolean
 * isLocked boolean
 * privacy "PUBLIC" | "PRIVATE"
 * @queryVariables
 * edges {
 *      cursor
 *      node {
 *          User
 *      }
 *  }
 * nodes {
 *  User
 *  PageInfo
 *  totalCount
 * }
 */

export const AssignableUsers = (query: string = "",first: number = 10, fields: string = "", after: string = "", before: string = "", last?: number) => `
    assignableUsers(query: ${query}, ${after ? `, ${after && `, after: ${after}`}` : ""} ${before ? `, before: ${before}` : ""} first: ${first}, ${last ? ", last:${last}" : ""}) {
        ${fields}
    }
`

/**
 * @description Github Graphql onMannequin
 * @defaultVariables id email
 * @queryVariables avatarUrl
 * createdAt
 * databaseId
 * login
 * resourcePath
 * updatedAt
 * url
 */


export const onMannequin = (fields: string = "") => `
    ... on Mannequin {
        id
        email
        ${fields}        
    }
`
/**
 * @description Github Graphql onBot
 * @defaultVariables id
 * @queryVariables avatarUrl
 * createdAt
 * databaseId
 * login
 * resourcePath
 * updatedAt
 * url
 */


export const onBot = (fields: string = "") => `
 ... on Bot {
     id
     email
     ${fields}        
 }
`

/**
 * @description Github Graphql Author
 * @defaultVariables id
 * @queryVariables 
 *  avatarUrl
 *  login
 *  resourcePath
 *  url
 *  onEnterpriseUserAccount
 *  onOrganazation
 *  onUser
 *  onMannequin
 *  onBot
 */

export const Author = (fields: string = "") => `
     id
     ${fields}        
`

/**
 * @description Github Graphql Author  
 * @defaultVariables totalCount first = 10
 * @queryArguments direction "ASC" | "DESC" 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          Author
 *      }
 *      nodes {
 *          Author
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const Authors = (first: number = 10,  fields: string = "", after: string = "", before: string = "", last: number) => `
    authors(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Editor
 * @defaultVariables id
 * @queryVariables 
 * avatarUrl
 * login
 * resourcePath
 * url
 * onEnterpriseUserAccount
 * onOrganazation
 * onUser
 * onMannequin
 * onBot
 */

export const Editor = (fields: string = "") => `
    id
    ${fields}        
`

/**
 * @description Github Graphql UserContentEdits  
 * @defaultVariables totalCount first = 10
 * @queryArguments direction "ASC" | "DESC" 
 * after string
 * before string
 * first number
 * last number
 * 
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          createdAt
 *          deletedAt
 *          deletedBy {
 *              Owner
 *          }
 *          diff
 *          editedAt
 *          editor {
 *              Owner
 *          }
 *          id
 *          updatedAt
 *      }
 *      nodes {
 *          createdAt
 *          deletedAt
 *          deletedBy {
 *              Owner
 *          }
 *          diff
 *          editedAt
 *          editor {
 *              Owner
 *          }
 *          id
 *          updatedAt
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const UserContentEdits = (first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    userContentEdits(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MentionableUsers  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * query string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          User
 *      }
 *      nodes {
 *          User
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const MentionableUsers = (query: string = "", first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    mentionableUsers(query: ${query}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql RepositoryProjectsSettingOrganizations
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * query string
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          User
 *      }
 *      nodes {
 *          User
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const RepositoryProjectsSettingOrganizations = (value: boolean = false, first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    repositoryProjectsSettingOrganizations(value: ${value}, first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql SamlIdentityProvider
 * @defaultVariables id
 * @queryVariables
 * digestMethod
 * externalIdentities {
 *      ExternalIdentities
 * }
 * idpCertificate
 * issuer
 * recoveryCodes
 * signatureMethod
 * ssoUrl
 */



export const SamlIdentityProvider = (fields: string) => `
    id
    ${fields}
`

/**
 * @description Github Graphql Identity
 * @defaultVariables givenName
 * @queryVariables
 * emails {
 *      primary
 *      type
 *      value
 * }
 * familyName
 * givenName
 * groups
 * nameId
 * username
 */



export const Identity = (fields: string) => `
    givenName
    ${fields}
`


/**
 * @description Github Graphql ExternalIdenty
 * @defaultVariables id
 * @queryVariables
 * digestMethod
 * externalIdentities {
 *      guid
 *      id
 *      organizationInvitation {
 *          Invitation
 *      }
 *      scimIdentity {
 *          Identity
 *      }
 *      scimIdentity {
 *          Identity
 *      }
 *      user {
 *          User
 *      }
 * }
 * idpCertificate
 * issuer
 * recoveryCodes
 * signatureMethod
 * ssoUrl
 */



export const ExternalIdenty = (fields: string) => `
    id
    ${fields}
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
 *          ExternalIdenty
 *      }
 *      nodes {
 *          ExternalIdenty
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/

export const ExternalIdentities = (first: number = 10, fields: string = "", after: string = "", before: string = "",  last: number) => `
    externalIdentities(first: ${first} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql SamlIdentityProviderSettingOrganizations
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * value "ENFORCED" | "CONFIGURED" | "UNCONFIGURED"
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
* }
*/

export const SamlIdentityProviderSettingOrganizations = (value: string, first: number = 10, fields: string = "", after: string = "", before: string = "", last: number) => `
    samlIdentityProviderSettingOrganizations(first: ${first} ${value && `, value: ${value}`} ${after && `, after: ${after}`} ${before && `, before: ${before}`} ${last && `, last: ${last}`}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql SupportEntitlements  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "LOGIN" | "CREATED_AT"
 * direction "ASC" | "DESC"
 * @queryVariables 
 *  edges {
 *      cursor
 *      node {
 *          onEnterpriseUserAccount
 *          onUser
 *      }
 *      nodes {
 *          onEnterpriseUserAccount
 *          onUser
 *          PageInfo
 *          totalCount
 *      }
 *  }
* }
*/


export const SupportEntitlements = (first: number = 10, fields: string = "", orderBy: string = "DUE_DATE", direction: "ASC", after: string = "", before: string = "", last: number) => `
    supportEntitlements( first: ${first} ${after  &&  `, ${after} `} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql TeamDiscussionsSettingOrganizations
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * orderBy "LOGIN" | "CREATED_AT"
 * direction "ASC" | "DESC"
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
* }
*/


export const TeamDiscussionsSettingOrganizations = (value: boolean = false,fields: string = "",orderBy: string = "DUE_DATE", direction: "ASC", first: number = 10, after: string = "", before: string = "", last: number) => `
    teamDiscussionsSettingOrganizations(value: ${value}, first: ${first} ${after  &&  `,  ${after} `} ${before && `, before: ${before}`} ${last && `, last: ${last}`}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql TwoFactorRequiredSettingOrganizations
 * @defaultVariables totalCount value = false first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * value boolean
 * orderBy "LOGIN" | "CREATED_AT"
 * direction "ASC" | "DESC"
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
* }
*/


export const TwoFactorRequiredSettingOrganizations = (value: boolean = false, first: number = 10, after: string = "", fields: string = "", orderBy: string = "DUE_DATE", direction: "ASC", before: string = "", last: number) => `
    twoFactorRequiredSettingOrganizations(value: ${value},${after  &&  `,  ${after} `} ${before && `, before: ${before}`}, first: ${first} ${last && `, last: ${last}`},orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`
