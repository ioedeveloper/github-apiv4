/**
 * @description Github Graphql User
 * @defaultVariables id name
 * @queryVariables anyPinnableItems(type: 'REPOSITORY' | 'GIST' | 'ISSUE' | 'PROJECT' | 'PULL_REQUEST' | 'USER' | 'ORGANIZATION' | 'TEAM')
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
 * hovercard(primarySubjectId: '') {
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
 *          RelevantOrganization
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
 * isSponsoredBy(accountLogin: '')
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
 * node
 * edge
 * PageInfo
 */

 export const RelevantTeams = (after:string = '', before:string = '', first:number = 10, last:number = 10, node:string = '',
 edge:string = '', pageInfo: string = '') => `
    relevantTeams(${after ? `, after: ${after}`: ''} ${before ? `, before: ${before}`: ''} first: ${first}, last: ${last}) {
        ${edge}
        ${node}
        ${pageInfo}
        totalcount
    }
 `
/**
 * @description Github Graphql RelevantOrganisation
 * @defaultVariables totalcount
 * @queryVariables after 
 * befor
 * first
 * last
 * node
 * edge
 * PageInfo
 */

 export const RelevantOrganization = (after:string = '', before:string = '', first:number = 10, last:number = 10, node:string = '',
 edge:string = '', pageInfo: string = '') => `
    relevantOrganization(${after ? `, after: ${after}`: ''} ${before ? `, before: ${before}`: ''} first: ${first}, last: ${last}) {
        ${edge}
        ${node}
        ${pageInfo}
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

export const EnterpriseUserAccount = (fields:string = '') => `
    id
    name
    ${fields}
`

 /**
 * @description Github Graphql onEnterpriseUserAccount 
 * * @queryVariables EnterpriseUserAccount 
 */

export const onEnterpriseUserAccount = (fields:string = '') => `
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

export const OwnerInfo = (fields:string = '') => `
    ownerInfo {
        ${fields}
    }
`

/**
 * @description Github Graphql Admins  
 * @defaultVariables totalCount query = "" orderBy = CREATED_AT direction = "ASC" role = MEMBER first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
 * orderBy 'LOGIN' | 'CREATED_AT'
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

export const Admins = (query:string = "",after:string = '', before: string = '', first:number = 10, last:number = 0, orderBy:string = 'CREATED_AT', direction:string = 'ASC',fields:string = '') => `
    members(query: ${query}${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}, orderBy: {field: ${orderBy}, direction: ${direction}}) {
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

export const AffiliatedUsersWithTwoFactorDisabled = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    affiliatedUsersWithTwoFactorDisabled(after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
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

export const AllowPrivateRepositoryForkingSettingOrganizations = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    AllowPrivateRepositoryForkingSettingOrganizations(after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
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

export const DefaultRepositoryPermissionSettingOrganizations = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    defaultRepositoryPermissionSettingOrganizations(after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql EnterpriseServerInstallations  
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10
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

export const EnterpriseServerInstallations = (connectedOnly:boolean = false,after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    enterpriseServerInstallations(connectedOnly: ${connectedOnly} ${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql UserAccounts
 * @defaultVariables totalCount orderBy = CREATED_AT direction = "ASC" first = 10
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

export const UserAccounts = (connectedOnly:boolean = false,after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    userAccounts(connectedOnly: ${connectedOnly}${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql Emails
 * @defaultVariables totalCount field = "EMAIL" direction = "ASC" first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "EMAIL"
 * @queryVariables 
 *  edges {
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

export const Emails = (after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "EMAIL", directions:string = "ASC",fields:string = '') => `
    emails(after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql EnterpriseServerInstallation
 * @defaultVariables totalCount field = "EMAIL" direction = "ASC" first = 10
 * @queryVariables
 * createdAt
 * customerName
 * hostName
 * id
 * isConnected
 * UserAccounts
 */

 export const EnterpriseServerInstallation = (fields:string = '') => `
    enterpriseServerInstallation {
        ${fields}
    }
`

/**
 * @description Github Graphql UserAccountsUploads
 * @defaultVariables totalCount field = "EMAIL" direction = "ASC" first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "EMAIL"
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

 export const UserAccountsUploads = (after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    userAccountsUploads(after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql IpAllowListEntries
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "ALLOW_LIST_VALUE"
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

 export const IpAllowListEntries = (after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    ipAllowListEntries(after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanChangeRepositoryVisibilitySettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const MembersCanChangeRepositoryVisibilitySettingOrganizations = (after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    membersCanChangeRepositoryVisibilitySettingOrganizations(after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`
/**
 * @description Github Graphql MembersCanCreateRepositoriesSettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const MembersCanCreateRepositoriesSettingOrganizations = (value:string = "ALL",after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    membersCanCreateRepositoriesSettingOrganizations(value:${value}${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanDeleteIssuesSettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const MembersCanDeleteIssuesSettingOrganizations = (value:boolean = false,after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    membersCanDeleteIssuesSettingOrganizations(value: ${value}${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanDeleteRepositoriesSettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const MembersCanDeleteRepositoriesSettingOrganizations = (value:boolean = false, after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    membersCanDeleteRepositoriesSettingOrganizations(value: ${value}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanInviteCollaboratorsSettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const MembersCanInviteCollaboratorsSettingOrganizations = (value:boolean = false, after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    membersCanInviteCollaboratorsSettingOrganizations(value: ${value}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanUpdateProtectedBranchesSettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const MembersCanUpdateProtectedBranchesSettingOrganizations = (value:boolean = false, after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    membersCanUpdateProtectedBranchesSettingOrganizations(value: ${value}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql MembersCanViewDependencyInsightsSettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const MembersCanViewDependencyInsightsSettingOrganizations = (value:boolean = false, after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    membersCanViewDependencyInsightsSettingOrganizations(value: ${value}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql OrganizationProjectsSettingOrganizations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * field "CREATED_AT" | "LOGIN"
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

 export const OrganizationProjectsSettingOrganizations = (value:boolean = false, after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    organizationProjectsSettingOrganizations(value: ${value}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql OutsideCollaborators
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * field "CREATED_AT" | "LOGIN"
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

 export const OutsideCollaborators = (query:string = "", visibility:string = "PUBLIC", after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    outsideCollaborators(query: ${query},visibility = ${visibility}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql PendingAdminInvitations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * field "CREATED_AT" | "LOGIN"
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

 export const PendingAdminInvitations = (query:string = "", visibility:string = "PUBLIC", after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    pendingAdminInvitations(query: ${query},visibility = ${visibility}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql PendingCollaboratorInvitations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * field "CREATED_AT" | "INVITEE_LOGIN"
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

 export const PendingCollaboratorInvitations = (query:string = "", after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    pendingCollaboratorInvitations(query: ${query}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`


/**
 * @description Github Graphql PendingCollaborators
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * field "CREATED_AT" | "INVITEE_LOGIN"
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

 export const PendingCollaborators = (query:string = "", after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    pendingCollaborators(query: ${query}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql PendingMemberInvitations
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false visibility = "PUBLIC"
 * @queryArguments 
 * after string
 * before string
 * first number
 * last number
 * login string
 * field "CREATED_AT" | "INVITEE_LOGIN"
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

 export const PendingMemberInvitations = (query:string = "", after:string = '', before: string = '', first:number = 10, last:number = 0,field:string = "CREATED_AT", directions:string = "ASC",fields:string = '') => `
    pendingMemberInvitations(query: ${query}, after: ${after} ${before?`, before: ${before}`:''} , first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${field}, direction: ${directions}}) {
        ${fields}
        totalCount
        totalUniqueUserCount
    }
`

/**
 * @description Github Graphql AssignableUsers
 * @defaultVariables totalCount field = "CREATED_AT" direction = "ASC" first = 10 value = false affiliations "OWNER" isFork = false isLocked = false privacy = "PUBLIC"
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

 export const AssignableUsers = (query: string = "", after: string = "",before: string = "",first: number = 10,last?: number, fields:string = "") => `
    assignableUsers(query: ${query}, ${after ? `, after: ${after}`: ''} ${before ? `, before: ${before}`: ''} first: ${first}, ${last? ', last=${last}': ''}) {
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


export const onMannequin = (fields:string = '') => `
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


 export const onBot = (fields:string = '') => `
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

 export const Author = (fields:string = '') => `
     id
     ${fields}        
`

/**
 * @description Github Graphql Author  
 * @defaultVariables totalCount first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
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

export const Authors = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    authors(after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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

 export const Editor = (fields:string = '') => `
    id
    ${fields}        
`

/**
 * @description Github Graphql UserContentEdits  
 * @defaultVariables totalCount first = 10
 * @queryArguments direction 'ASC' | 'DESC' 
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

export const UserContentEdits = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    userContentEdits(after: ${after} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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

export const MentionableUsers = (query:string = "",after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    mentionableUsers(query: ${query}${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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

export const RepositoryProjectsSettingOrganizations = (value:boolean = false,after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    repositoryProjectsSettingOrganizations(value: ${value}${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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

export const ExternalIdentities = (after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    externalIdentities(${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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

export const SamlIdentityProviderSettingOrganizations = (value:string = "ENFORCED",after:string = '', before: string = '', first:number = 10, last:number = 0,fields:string = '') => `
    samlIdentityProviderSettingOrganizations(value:${value},${after?`, after: ${after}`:''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''}) {
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


export const SupportEntitlements = (after:string = '', before: string = '', first:number = 10, last:number = 0,orderBy:string = "DUE_DATE", direction: "ASC",fields:string = '') => `
    supportEntitlements(${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${orderBy}, direction: ${direction}}) {
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


export const TeamDiscussionsSettingOrganizations = (value:boolean = false,after:string = '', before: string = '', first:number = 10, last:number = 0,orderBy:string = "DUE_DATE", direction: "ASC",fields:string = '') => `
    teamDiscussionsSettingOrganizations(value: ${value},${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${orderBy}, direction: ${direction}}) {
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


export const TwoFactorRequiredSettingOrganizations = (value:boolean = false,after:string = '', before: string = '', first:number = 10, last:number = 0,orderBy:string = "DUE_DATE", direction: "ASC",fields:string = '') => `
    twoFactorRequiredSettingOrganizations(value: ${value},${after ? `, after: ${after} ` : ''} ${before?`, before: ${before}`:''}, first: ${first} ${last?`, last: ${last}`:''},orderBy: {field: ${orderBy}, direction: ${direction}}) {
        ${fields}
        totalCount
    }
`
