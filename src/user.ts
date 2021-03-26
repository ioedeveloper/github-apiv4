import { queryVariables } from "."
import { BasicFields } from "./variables"

/**
 * @description Github Graphql User
 * @defaultVariables id name
 * @fields anyPinnableItems(type: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM")
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

 *      onGenericHovercardContext

 *      onOrganizationTeamsHovercardContext

 *      onReviewStatusHovercardContext

 *      onViewerHovercardContext

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

 *      message

 *      indicatesLimitedAvailability

 *      id

 *      expiresAt

 *      emojiHTML

 *      emoji

 *      createdAt

 *      updatedAt

 *      User

 *      Oganisation

 *      TopRepositories

 *      twitterUsername

 *      updatedAt

 *      url

 *      viewerCanChangePinnedItems

 *      viewerCanCreateProjects

 *      viewerCanFollow

 *      viewerCanSponsor

 *      viewerIsFollowing

 *      viewerIsSponsoring

 *      Watching

 *      websiteUrl

 */

export const User = (fields: string) => `
   id
   name
   ${fields}
`
/**
* @description Github Graphql onUser
* @defaultVariables teamsUrl message totalTeamCount
* @fields
*   __typename
*   octicon

*   RelevantTeams

*   teamsResourcePath

*/


export const onGenericHovercardContext = (fields: string) => `
    ... on GenericHovercardContext {
        teamsUrl 
        message
        ${fields}
        totalTeamCount
    }
`

/**
* @description Github Graphql onOrganizationTeamsHovercardContext
* @defaultVariables teamsUrl totalTeamCount
* @fields 
* __typename

* teamsResourcePath

* RelevantOrganizations

*/


export const onOrganizationTeamsHovercardContext = (fields: string) => `
 ... on OrganizationTeamsHovercardContext {
    teamsUrl
    ${fields}
    totalTeamCount
 }
`
/**
* @description Github Graphql onReviewStatusHovercardContext
* @defaultVariables message
* @fields
 *  reviewDecision
 * 
 *  octicon
*/


export const onReviewStatusHovercardContext = (fields: string) => `
 ... on User {
    message
    ${fields}
 }
`
/**
* @description Github Graphql onViewerHovercardContext
* @defaultVariables message
* @fields
*  __typename

*  octicon

*  viewer
*/


export const onViewerHovercardContext = (fields: string) => `
 ... on ViewerHovercardContext{
    message
    ${fields}
`
/**
* @description Github Graphql onUser
* @defaultVariables id email
* @fields User
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
* @defaultVariables totalCount
* @queryArguments
* after string 

* before string

* first number

* last number
* @fields Teams

* pageInfo PageInfo
*/

export const RelevantTeams = (params: queryVariables.BasicFields) => `
 relevantTeams(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
         ${params.fields}
       }
    }

    nodes {
       ${params.fields}
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql Followers
* @defaultVariables totalCount
*  @queryArguments 
* after string

* before string

* first number

* last number
* @fields User
*/

export const Followers = (params: queryVariables.BasicFields) => `
   followers(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql Following
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number
* @fields User
* pageInfo PageInfo
*/

export const Following = (params: queryVariables.BasicFields) => `
   following(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `last: ${params.last}` : ""}) {
    edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}
        
    }
   ${params.pageInfo ? params.pageInfo : ""}
   totalCount
 }
`


/**
* @description Github Graphql EnterpriseUserAccount  
* @defaultVariables id name
* @fields avatarUrl

* createdAt

* enterprise {
   Enterprise
* }

* login

* organizations {
   Organizations
* }

* resourcePath

* updatedAt

* url

* user {
   User
* }
*/

export const EnterpriseUserAccount = (fields: string = "") => `
    id
    name
    ${fields}
`

/**
* @description Github Graphql onEnterpriseUserAccount 
* * @fields EnterpriseUserAccount 
*/

export const onEnterpriseUserAccount = (fields: string = "") => `
    ... on EnterpriseUserAccount {
        ${fields}
    }
`

/**
* @description Github Graphql OwnerInfo 
* @fields Admins

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

export const OwnerInfo = (fields?: string) => `
 ownerInfo {
     ${fields}
 }
`

/**
* @description Github Graphql Admins  
* @defaultVariables totalCount
* @queryArguments direction "ASC" | "DESC" 

* orderBy "LOGIN" | "CREATED_AT"

* after string

* before string

* first number

* last number

* query: string


* @fields User

* pageInfo PageInfo 
*/

export const Admins = (params: queryVariables.AdminFields) => `
 members(query: ${params.query} first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
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

* @fields User

* pageInfo PageInfo
*/

export const AffiliatedUsersWithTwoFactorDisabled = (params: queryVariables.BasicFields) => `
 affiliatedUsersWithTwoFactorDisabled(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
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

* @fields Organization

* pageInfo PageInfo
*/

export const AllowPrivateRepositoryForkingSettingOrganizations = (params: queryVariables.BasicFields) => `
 AllowPrivateRepositoryForkingSettingOrganizations(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
   edges {
      cursor
      node {
         ${params.fields}
      }
   }
   nodes {
      ${params.fields}
   }
   ${params.pageInfo ? params.pageInfo : ""}
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

* @fields Organization

* pageInfo PageInfo
*/

export const DefaultRepositoryPermissionSettingOrganizations = (params: queryVariables.BasicFields) => `
 defaultRepositoryPermissionSettingOrganizations(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
   edges {
      cursor
      node {
         ${params.fields}
      }
   }
   nodes {
      ${params.fields}  
   }
   ${params.pageInfo ? params.pageInfo : ""}
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

* @fields 
* UserAccounts

* UserAccountsUploads

* createdAt

* customerName

* hostName

* id

* isConnected

* updatedAt

*/

export const EnterpriseServerInstallations = (params: queryVariables.EnterpriseServerInstallations) => `
 enterpriseServerInstallations(first: ${params.first} ${params.connectedOnly ? `connectedOnly: ${params.connectedOnly}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} 
 ${params.last ? `, last: ${params.last}` : ""}) {
   edges {
      cursor
      node {
         ${params.fields}
      }
   }
   nodes {
      ${params.fields}
   }
   ${params.pageInfo ? params.pageInfo : ""}
   totalCount
`


/**
* @description Github Graphql UserAccounts
* @defaultVariables totalCount first = 10
* @queryArguments 
* after string

* before string

* first number

* last number

* @fields 
* email

* enterpriseServerInstallation

* organization

* createdAt

* id

* isSiteAdmin

* login

* profileName

* remoteCreatedAt

* remoteUserId

* updatedAt

*/

export const UserAccounts = (params: queryVariables.UserAccounts) => `
 userAccounts(first: ${params.first} ${params.connectedOnly ? `, connectedOnly: ` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
      cursor
      node {
         ${params.fields}
      }
    }

    nodes {
      ${params.fields}
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql Emails
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "EMAIL"

* @fields 
* createdAt

* email

* id

* isPrimary

* updatedAt

* UserAccount

*/

export const Emails = (params: queryVariables.Emails) => `
 emails(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql EnterpriseServerInstallation
* @defaultVariables totalCount 
* @arguments direction "ASC" | "DESC" 

* first 10

* @fields
* createdAt
* customerName
* hostName
* id
* isConnected
* UserAccounts
*/

export const EnterpriseServerInstallation = (fields?: string) => `
 enterpriseServerInstallation {
     ${fields}
 }
`

/**
* @description Github Graphql UserAccountsUploads
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "EMAIL"

* direction  "ASC" | "DESC"

* @fields 
* createdAt

* EnterpriseServerInstallation

* id

* name

* syncState

* updatedAt

*/

export const UserAccountsUploads = (params: queryVariables.Emails) => `
 userAccountsUploads(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
    edges {
       cursor
       node {
          ${params.fields}
       }
   	}

   nodes {
       ${params.fields}  
    }
   ${params.pageInfo ? params.pageInfo : ""} 
   totalCount
 }
`

/**
* @description Github Graphql IpAllowListEntries
* @defaultVariables totalCount 
   direction = "ASC" 
   first = 10
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "ALLOW_LIST_VALUE"
* @fields 
* allowListValue

* createdAt

* id

* isActive

* name

* Owner

* updatedAt

*/

export const IpAllowListEntries = (params: queryVariables.IpAllowListEntries) => `
 ipAllowListEntries(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql MembersCanChangeRepositoryVisibilitySettingOrganizations
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value boolean
* @fields  
* Organization
*/

export const MembersCanChangeRepositoryVisibilitySettingOrganizations = (params: queryVariables.Member) => `
 membersCanChangeRepositoryVisibilitySettingOrganizations(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`
/**
* @description Github Graphql MembersCanCreateRepositoriesSettingOrganizations
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value "ALL" | "PRIVATE" | "DISABLED"
* @fields 
* Organization
*/

export const MembersCanCreateRepositoriesSettingOrganizations = (params: queryVariables.MembersCanCreateRepositoriesSettingOrganizations) => `
 membersCanCreateRepositoriesSettingOrganizations(value:${params.value}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql MembersCanDeleteIssuesSettingOrganizations
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value boolean
* @fields  
* Organization
*/

export const MembersCanDeleteIssuesSettingOrganizations = (params: queryVariables.Member) => `
 membersCanDeleteIssuesSettingOrganizations(value: ${params.value}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    totalCount
    ${params.pageInfo ? params.pageInfo : ""}
 }
`

/**
* @description Github Graphql MembersCanDeleteRepositoriesSettingOrganizations
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value boolean
* @fields
* Organization
*/

export const MembersCanDeleteRepositoriesSettingOrganizations = (params: queryVariables.Member) => `
 membersCanDeleteRepositoriesSettingOrganizations(value: ${params.value} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} first: ${params.first} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql MembersCanInviteCollaboratorsSettingOrganizations
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value boolean
* @fields 
* Organization
*/

export const MembersCanInviteCollaboratorsSettingOrganizations = (params: queryVariables.Member) => `
 membersCanInviteCollaboratorsSettingOrganizations(value: ${params.value} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} first: ${params.first} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }
    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql MembersCanUpdateProtectedBranchesSettingOrganizations
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value boolean
* @fields 
* Organization
*/

export const MembersCanUpdateProtectedBranchesSettingOrganizations = (params: queryVariables.Member) => `
 membersCanUpdateProtectedBranchesSettingOrganizations(value: ${params.value}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql MembersCanViewDependencyInsightsSettingOrganizations
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value boolean
* @fields 
* Organization
*/

export const MembersCanViewDependencyInsightsSettingOrganizations = (params: queryVariables.Member) => `
 membersCanViewDependencyInsightsSettingOrganizations(value: ${params.value}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql OrganizationProjectsSettingOrganizations
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT" | "LOGIN"

* value boolean

* @fields 
* Organization
*/

export const OrganizationProjectsSettingOrganizations = (params: queryVariables.Member) => `
 organizationProjectsSettingOrganizations(value: ${params.value}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql OutsideCollaborators
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* login string

* orderBy "CREATED_AT" | "LOGIN"

* query string

* visibility "PRIVATE" | "PUBLIC" | "INTERNAL"
* @fields 
* User
*/

export const OutsideCollaborators = (params: queryVariables.Collaborators) => `
 outsideCollaborators(query: ${params.query}, first: ${params.first} ${params.visibility ? `, visibility: ${params.visibility}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql PendingAdminInvitations
* @defaultVariables totalCount
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

* @fields
* Invitation
* */

export const PendingAdminInvitations = (params: queryVariables.Invitations) => `
 pendingAdminInvitations(query: ${params.query} ${params.visibility ? `, ${params.visibility}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} first: ${params.first} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}
 ${params.role ? `, ${params.role}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
    ${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql PendingCollaboratorInvitations
* @defaultVariables totalCount
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

* @fields
* Invitation
*/

export const PendingCollaboratorInvitations = (params: queryVariables.Collaborators) => `
 pendingCollaboratorInvitations(query: ${params.query}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`


/**
* @description Github Graphql PendingCollaborators
* @defaultVariables totalCount
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

* @fields
* Invitation
*/

export const PendingCollaborators = (params: queryVariables.Invitations) => `
 pendingCollaborators(query: ${params.query}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql PendingMemberInvitations
* @defaultVariables totalCount
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

* @fields
* Invitation
*/

export const PendingMemberInvitations = (params: queryVariables.Invitations) => `
 pendingMemberInvitations(query: ${params.query}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
    totalUniqueUserCount
 }
`

/**
* @description Github Graphql AssignableUsers
* @defaultVariables totalCount
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

* @fields
* User
*/

export const AssignableUsers = (params: queryVariables.AdminFields) => `
 	assignableUsers(query: ${params.query}, ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} first: ${params.first}, ${params.last ? ", last:${params.last}" : ""}) {
		edges {
			cursor
			node {
			   ${params.fields}
			}
		 }
	 
		 nodes {
			${params.fields}  
		 }
		 ${params.pageInfo ? params.pageInfo : ""}
		 totalCount
	  }
 	}
`

/**
* @description Github Graphql onMannequin
* @defaultVariables id email
* @fields avatarUrl
* createdAt

* databaseId

* login

* resourcePath

* updatedAt

* url
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
* @fields avatarUrl

* createdAt

* databaseId

* login

* resourcePath

* updatedAt

* url
*/


export const onBot = (fields?: string) => `
... on Bot {
  id
  email
  ${fields}        
}
`

/**
* @description Github Graphql Owner
* @defaultVariables id
* @fields 
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

export const Owner = (fields?: string) => `
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
* @fields 
* Owner
*/

export const Authors = (params: queryVariables.BasicFields) => `
 authors(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}	
    totalCount
 }
`

/**
* @description Github Graphql Editor
* @defaultVariables id
* @fields 
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

export const Editor = (fields?: string) => `
 	id
 	${fields}        
`



/**
* @description Github Graphql UserContentEdits  
* @defaultVariables totalCount 
   first = 10
* @queryArguments direction "ASC" | "DESC" 

* after string

* before string

* first number

* last number
* 
* @fields 
* createdAt

* deletedAt

* deletedBy {
    Owner
* }
* diff

* editedAt

* editor {
    Owner
* }

* id

* updatedAt
*/



export const UserContentEdits = (params: queryVariables.BasicFields) => `
 userContentEdits(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`


/**
* @description Github Graphql ItemShowcase  
* @defaultVariables totalCount 
   hasPinnedItems
* @queryArguments 
* after string

* before string

* first number

* last number

* @fields 

* onGist

* onRespository	
*/

export const ItemShowcase = (params: queryVariables.BasicFields) => `
   	itemShowcase {
		hasPinnedItems
		items (first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
			edges {
				cursor
				node {
					${params.fields}
				}
			}
			nodes {
				${params.fields}  
			}
			${params.pageInfo ? params.pageInfo : ""}
			totalCount
		}
	}
`
/**
* @description Github Graphql MentionableUsers  
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* query string

* @fields 
*  User
*/

export const MentionableUsers = (params: queryVariables.Query) => `
 mentionableUsers(query: ${params.query}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql Packages  
* @defaultVariables totalCount 

* id

* name

* packageType

* statistics

* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "CREATED_AT"

* names string

* packageType "NPM" | "RUBYGEMS" | "MAVEN" | "DOCKER" | "DEBIAN" | "NUGET" | "PYPI"

* repositoryId string

* @fields 
* LatestVersion

* Repository

* Version

* Versions

*/

export const Packages = (params: queryVariables.Packages) => `
 	packages(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
			id
			name
			packageType
			statistics {
				downloadsTotalCount
			}
          	${params.fields}
       }
    }
    nodes {
		id
        name
        packageType
		statistics {
			downloadsTotalCount
		}
       	${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql Version
* @defaultVariables id statistics
* @fields
* Files

* Package

* plaform

* preRelease

* readme

* Release

* summary

* version
*/

export const Version = (fields: string) => `
	id
	statistics {
		downloadsTotalCount
	}
	${fields}
`

/**
* @description Github Graphql LatestVersion
* @fields Version
*/
export const LatestVersion = (fields: string) => `
	latestVersion {
		${fields}
	}
`

/**
* @description Github Graphql Versions
* @queryArguments 
* after string

* before string

* first number

* last number

* @fields Version

*/
export const Versions = (params: queryVariables.BasicFields) => `
	versions (first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
		edges {
			cursor
			node {
			   ${params.fields}
			}
		 }
	 
		 nodes {
			${params.fields}  
			${params.pageInfo ? params.pageInfo : ""}
		 }
		 totalCount
	}
`



/**
* @description Github Graphql RepositoryProjectsSettingOrganizations
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* query string

* @fields 
* User
*/

export const RepositoryProjectsSettingOrganizations = (value: boolean = false, params: queryVariables.Query) => `
 repositoryProjectsSettingOrganizations(value: ${value}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
	   ${params.pageInfo ? params.pageInfo : ""}
    }
    totalCount
 }
`

/**
* @description Github Graphql PinnableItems
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* types "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM"
* @fields 
* onGist

* onRepository
*/

export const PinnableItems = (params: queryVariables.PinItems) => `
	pinnableItems(${params.types ? `types: ${params.types}` : ""}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
		edges {
			cursor
			node {
				${params.fields}
			}
		}

		nodes {
			${params.fields}  
			${params.pageInfo ? params.pageInfo : ""}
		}
		totalCount
 	}
`

/**
* @description Github Graphql PinnedItems
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* type "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM"
* @fields 
* onGist

* onRepository
*/

export const PinnedItems = (params: queryVariables.PinItems) => `
	pinnedItems(${params.types ? `types: ${params.types}` : ""}, first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
		edges {
			cursor
			node {
				${params.fields}
			}
		}

		nodes {
			${params.fields}  
			${params.pageInfo ? params.pageInfo : ""}
		}
		totalCount
 	}
`

/**
* @description Github Graphql SamlIdentityProvider
* @defaultVariables id
* @fields
* digestMethod

* externalIdentities {
     ExternalIdentities
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
* @fields
* emails {
     primary
     type
     value
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
* @fields
* digestMethod

* externalIdentities {
     guid

     id

     organizationInvitation {
       Invitation
     }

     scimIdentity {

       Identity
     }

     scimIdentity {
       Identity
     }

     user {
       User
     }
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
* @defaultVariables totalCount 
   first = 10
* @queryArguments 
* after string

* before string

* first number

* last number

* @fields 
* ExternalIdenty
*/

export const ExternalIdentities = (params: queryVariables.BasicFields) => `
 externalIdentities(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql SamlIdentityProviderSettingOrganizations
* @defaultVariables totalCount 
   first = 10
* @queryArguments 
* after string

* before string

* first number

* last number

* value "ENFORCED" | "CONFIGURED" | "UNCONFIGURED"
* @fields
* Organization
*/

export const SamlIdentityProviderSettingOrganizations = (value: string, params: queryVariables.BasicFields) => `
 samlIdentityProviderSettingOrganizations(first: ${params.first} ${value ? `, value: ${value}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql SupportEntitlements  
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "LOGIN" | "CREATED_AT"

* direction "ASC" | "DESC"

* @fields
* onEnterpriseUserAccount

* onUser
*/


export const SupportEntitlements = (params: queryVariables.Login) => `
 supportEntitlements( first: ${params.first} ${params.after ? `, ${params.after} ` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`
/**
* @description Github Graphql TeamDiscussionsSettingOrganizations
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "LOGIN" | "CREATED_AT"

* direction "ASC" | "DESC"

* @fields
* Organization
*/


export const TeamDiscussionsSettingOrganizations = (value: boolean = false, params: queryVariables.Login) => `
 teamDiscussionsSettingOrganizations(value: ${value}, first: ${params.first} ${params.after ? `,  ${params.after} ` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
    totalCount
 }
`

/**
* @description Github Graphql TwoFactorRequiredSettingOrganizations
* @defaultVariables totalCount 
* @queryArguments 
* after string

* before string

* first number

* last number

* value boolean

* orderBy "LOGIN" | "CREATED_AT"

* direction "ASC" | "DESC"
* @fields 
* Organization
*/


export const TwoFactorRequiredSettingOrganizations = (value: boolean, params: queryVariables.Login) => `
 twoFactorRequiredSettingOrganizations(value: ${value}, first: ${params.first} ${params.after ? `,  ${params.after} ` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}  
    }
	${params.pageInfo ? params.pageInfo : ""}
   totalCount
 }
`
/**
* @description Github Graphql Contribution
* @queryArguments 
* from string

* organizationID string

* to string

* @fields
* CommitContributionsByRepository

* ContributionCalendar

* contributionYears

* doesEndInCurrentMonth

* earliestRestrictedContributionDate

* endedAt

* firstIssueContribution {
   onCreatedIssueContribution
   onRestrictedContribution
}

* firstPullRequestContribution {
   onCreatedPullRequestContribution
   onRestrictedContribution
}

* firstRepositoryContribution {
   onCreatedRepositoryContribution
   onRestrictedContribution
}

* hasActivityInThePast

* hasAnyContributions

* hasAnyRestrictedContributions

* isSingleDay

* IssueContributions

* IssueContributionsByRepository

* latestRestrictedContributionDate

* mostRecentCollectionWithActivity {
   ContributionsCollection
}

* mostRecentCollectionWithoutActivity {
   ContributionsCollection
}

* popularIssueContribution {

   IssueContribution

}

* popularPullRequestContribution {

   PopularPullRequestContribution

}

* PullRequestContributions

* PullRequestContributionsByRepository

* PullRequestReviewContributions

* PullRequestReviewContributionsByRepository

* RepositoryContributions

* restrictedContributionsCount

* startedAt

* totalCommitContributions

* totalIssueContributions(excludeFirst: boolean, excludePopular: boolean)

* totalPullRequestContributions(excludeFirst: boolean, excludePopular: boolean)

* totalPullRequestReviewContributions

* totalRepositoriesWithContributedCommits

* totalRepositoriesWithContributedIssues(excludeFirst: boolean, excludePopular: boolean)

* totalRepositoriesWithContributedPullRequestReviews

* totalRepositoriesWithContributedPullRequests(excludeFirst: boolean, excludePopular: boolean)

* totalRepositoryContributions(excludeFirst: boolean)

* user {

   User

}
*/

export const Contribution = (fields: string) => `
   ${fields}
`

/**
* @description Github Graphql ContributionsCollection
* @queryArguments 
* maxRepositories number
* @fields
* Contribution
*/
export const ContributionsCollection = (fields: string, from?: string, organizationID?: string, to?: string) => `
   contributionsCollection${from || organizationID || to ? `(${from ? `from: ${from},` : ""} ${organizationID ? `organizationID: ${organizationID},` : ""} ${to ? `$to: ${to},` : ""})` : ""}{
      ${fields}
   }
`

/**
* @description Github Graphql CommitContributionsByRepository
* @queryArguments 
* maxRepositories number
* @fields
* CommitContributionsByRepository

* Contributions

* Repository

* resourcePath

* url
*/

export const CommitContributionsByRepository = (fields: string, maxRepositories?: number) => `
   commitContributionsByRepository${maxRepositories ? `(maxRepositories: ${maxRepositories})` : ""} {
      ${fields}
   }
`

/**
* @description Github Graphql CommitContributionsByRepository
* @queryArguments 
* after string

* before string

* first number

* last number

* orderBy "OCCURRED_AT" | "COMMIT_COUNT"

* direction: "ASC" | "DESC"

* @fields
* commitCount

* isRestricted

* occurredAt

* Repository

* resourcePath

* url

* user {
   User
}
*/

export const Contributions = (params: queryVariables.CommitContributionsByRepository) => `
   contributions(first: ${params.first} ${params.after ? `,  ${params.after} ` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {${params.orderBy ? `field: ${params.orderBy}` : ""} direction: ${params.direction}}) {
      edges {
         cursor
         node {
            ${params.fields}
         }
      }
  
      nodes {
         ${params.fields}
      }
     ${params.pageInfo ? params.pageInfo : ""}
     totalCount  
   }
`
/**
* @description Github Graphql ContributionCalendar
*/

export const ContributionCalendar = () => `
   contributionCalendar {
      colors
      isHalloween
      totalContributions
      months {
         firstDay
         name
         totalWeeks
         year
      }
      weeks {
         contributionDays {
            color
            contributionCount
            contributionLevel
            date
            weekday
         }
         firstDay
      }
   }
`

/**
* @description Github Graphql onCreatedIssueContribution
* @fields IssueContribution
*/

export const onCreatedIssueContribution = (fields: string) => `
   ... on CreatedIssueContribution {
      __typename
      ${fields}
   }
`
/**
* @description Github Graphql IssueContribution
* @fields isRestricted
* issue {
   Issue
}
* occurredAt

* resourcePath

* url

* user {
   User
}
*/

export const IssueContribution = (fields: string) => `
   ${fields}
`

/**
* @description Github Graphql onRestrictedContribution 
* isRestricted

* occurredAt

* resourcePath

* url

* user {
   User
}
*/

export const onRestrictedContribution = (fields: string) => `
   ... on RestrictedContribution  {
      __typename
      ${fields}
   }
`

/**
* @description Github Graphql PopularPullRequestContribution 
* @fields isRestricted

* occurredAt

* pullRequest {
   PullRequest
}
* resourcePath

* url

* user {
   User
}
*/

export const PopularPullRequestContribution = (fields: string) => `
   ${fields}
`

/**
* @description Github Graphql onCreatedPullRequestContribution 
* @fields 
* isRestricted

* occurredAt

* pullRequest {

   PullRequest

}
* resourcePath

* url

* user {
   User
}
*/


export const PullRequestContribution = (fields: string) => `
   ${fields}
`

/**
* @description Github Graphql onCreatedPullRequestContribution 
* @fields PullRequestContribution
*/

export const onCreatedPullRequestContribution = (fields: string) => `
   ... on CreatedPullRequestContribution {
      __typename
      ${fields}
   }
`

/**
* @description Github Graphql CreatedRepositoryContribution
* isRestricted

* occurredAt

* repository {
   Repository
}
* resourcePath

* url

* user {
   User
}
*/

export const onCreatedRepositoryContribution = (fields: string) => `
   ... on onCreatedRepositoryContribution {
      __typename
      ${fields}
   }
`

/**
* @description Github Graphql IssueContributions
* @defaultVariables totalCount
* @queryArguments 
* after string

* before string

* first number

* last number

* excludeFirst boolean

* excludePopular boolean

* direction "ASC" | "DESC"
* @fields 
* isRestricted

* occurredAt

* issue {
   Issue
}
* resourcePath

* url

* user {
   User
}
*/


export const IssueContributions = (params: queryVariables.Contributions) => `
   issueContributions(${params.excludePopular ? `, excludeFirst: ${params.excludeFirst}` : ""} ${params.excludePopular ? `, excludePopular: ${params.excludePopular}` : ""} first: ${params.first} ${params.after ? `,  ${params.after} ` : ""} ${params.before ? `, before: "${params.before}"` : ""} ${params.last ? `, last: ${params.last}` : ""}, orderBy: {direction: ${params.direction}}) {
     edges {
       cursor
       node {
          ${params.fields}
       }
    }

    nodes {
       ${params.fields}
    }
	${params.pageInfo ? params.pageInfo : ""}
   totalCount
 }
`

/**
* @description Github Graphql IssueContributionsByRepository
* @queryArguments 
* maxRepositories number
* @fields
* contributions {
   Contributions
}
* repository {
   Repository
}
*/

export const IssueContributionsByRepository = (params: queryVariables.Contributions) => `
   issueContributionsByRepository ${params.excludePopular || params.excludeFirst || params.maxRepositories ? `(${params.excludePopular ? `, excludePopular: ${params.excludePopular}` : ""} ${params.excludeFirst ? `, ${params.excludeFirst}` : ""} ${params.maxRepositories ? `, maxRepositories: ${params.maxRepositories}` : ""})` : ""} {
      ${params.fields}
   }
`

/**
* @description Github Graphql JoinedGitHubContribution
* isRestricted

* occurredAt

* resourcePath

* url

* user {
   User
}
*/

export const JoinedGitHubContribution = (fields: string) => `
   joinedGitHubContribution {
      ${fields}
   }
`

/**
* @description Github Graphql MostRecentCollectionWithActivity
* Contribution
*/

export const MostRecentCollectionWithActivity = (fields: string) => `
   mostRecentCollectionWithActivity {
      ${fields}
   }
`

/**
* @description Github Graphql MostRecentCollectionWithoutActivity
* Contribution
*/

export const MostRecentCollectionWithoutActivity = (fields: string) => `
   mostRecentCollectionWithActivity {
      ${fields}
   }
`



/**
* @description Github Graphql PullRequestContributions
* @queryArguments direction  = "ASC" | "DESC"

* excludeFirst boolean 

* excludePopular boolean
* @fields PullRequestContribution
*/

export const PullRequestContributions = (params: queryVariables.Contributions) => `
   pullRequestContributions(first: ${params.first} ${params.excludePopular ? `, excludeFirst: ${params.excludeFirst}` : ""} ${params.excludePopular ? `, excludePopular: ${params.excludePopular}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""} 
   ${params.last ? `, ${params.last}` : ""}, orderBy: {direction: ${params.direction}}) {
      edges {
         cursor
         node {
            ${params.fields}
         }
      }
      nodes {
         ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`

/**
* @description Github Graphql PullRequestContributionsByRepository
* @defaultarguments direction = "ASC" 
* @queryArguments direction = "ASC" | "DESC"

* excludeFirst boolean 

* excludePopular boolean

* @fields Contributions Repository
*/

export const PullRequestContributionsByRepository = (params: queryVariables.Contributions) => `
   pullRequestContributionsByRepository ${params.excludePopular || params.maxRepositories || params.excludeFirst ? `(${params.excludePopular ? `, excludeFirst: ${params.excludeFirst}` : ""} ${params.excludePopular ? `, excludePopular: ${params.excludePopular}` : ""} 
      ${params.maxRepositories ? `, ${params.maxRepositories}` : ""})` : ""} {
      ${params.fields}
   }
`


/**
* @description Github Graphql PullRequestReviewContributions
* @defaultVariables totalCount direction = "ASC"
* @queryArguments
* after string 

* before string

* first number

* last number
* @fields
* direction "ASC" | "DESC"

* isRestricted

* occurredAt

* PullRequest

* PullRequestReview

* Repository

* resourcePath

* url

*/

export const PullRequestReviewContributions = (params: queryVariables.CommitContributionsByRepository) => `
   pullRequestReviewContributions(first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}, orderBy: {direction: ${params.direction}}) {
      edges {
         cursor
         node {
            ${params.fields}
         }
      }
      nodes {
         ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`

/**
* @description Github Graphql PullRequestReviewContributionsByRepository
* @defaultarguments maxRepositories number
* @queryArguments 
* @fields Contributions Repository
*/

export const PullRequestReviewContributionsByRepository = (maxRepositories: number, fields: string) => `
   pullRequestReviewContributionsByRepository ${maxRepositories ? `(${maxRepositories}` : ""}{
      ${fields}
   }
`

/**
* @description Github Graphql RepositoryContributions
* @defaultVariables totalCount
* @queryArguments
* after string 

* before string

* first number

* last number

* excludeFirst boolean

* direction "ASC" | "DESC"

* @fields
* isRestricted

* occurredAt

* repository {
   Repository
}
* resourcePath

* url
*/

export const RepositoryContributions = (params: queryVariables.Contributions) => `
   repositoryContributions(first: ${params.first} ${params.excludePopular ? `, excludeFirst: ${params.excludeFirst}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}, orderBy: {direction: ${params.direction}}) {
      edges {
         cursor
         node {
            ${params.fields}
         }
      }
      nodes {
         ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`

/**
* @description Github Graphql Project
* @defaultVariables id name
* @fields
* body string

* bodyHTML string

* closed boolean

* closedAt string

* columns Columns

* createdAt string

* creator Owner

* databaseId number

* id number

* name string

* number number

* owner Owner

* pendingCards Cards

* progress {

   doneCount number

   donePercentage number

   enabled boolean

   inProgressCount number

   inProgressPercentage number

   todoCount: number

   todoPercentage: number

}

* resourcePath string

* state string

* updatedAt string

* url string

*viewerCanUpdate boolean
*/

export const Project = (fields: string) => `
	id
	name
	${fields}
`

/**
* @description Github Graphql UserProject
* @defaultVariables id name
* @queryArgument projectnumber 
* @fields Project
*/
export const UserProject = (projectnumber: number, fields: string) => `
	project (number: ${projectnumber}) {
		id
      	name
		${fields}
	}
`

/**
* @description Github Graphql Projects
* @defaultVariables totalCount direction = "ASC"
* @queryArguments
* after string 

* before string

* first number

* last number

* direction "ASC" | "DESC"

* orderBy "UPDATED_AT" | "CREATED_AT" | "NAME"

* search string

* states "OPEN" | "CLOSED"

* @fields
* Project
*/

export const Projects = (params: queryVariables.Projects) => `
   projects (first: ${params.first} ${params.excludePopular ? `, excludeFirst: ${params.excludeFirst}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}, orderBy: {field: ${params.orderBy},direction: ${params.direction}}) {
      edges {
         cursor
         node {
            ${params.fields}
         }
      }
      nodes {
         ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`
/**
* @description Github Graphql PublicKeys
* @defaultVariables totalCount direction = "ASC"
* @queryArguments
* after string 

* before string

* first number

* last number

* @fields
* accessedAt

* createdAt

* fingerprint

* id

* isReadOnly

* key

* updatedAt
*/

export const PublicKeys = (params: BasicFields) => `
	publicKeys (first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}) {
      edges {
         cursor
         node {
			id
            ${params.fields}
         }
      }
      nodes {
		id
        ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`

/**
* @description Github Graphql RepositoriesContributedTo
* @defaultVariables totalCount name 
* @queryArguments
* after string 

* before string

* first number

* last number

* contributionTypes "COMMIT" | "ISSUE" | "PULL_REQUEST" | "REPOSITORY" | "PULL_REQUEST_REVIEW"

* includeUserRepositories boolean

* isLocked boolean

* privacy "PUBLIC" | "PRIVATE"
* @fields
* Repository
*/

export const RepositoriesContributedTo = (params: BasicFields) => `
	repositoriesContributedTo (first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""}) {
      edges {
         cursor
         node {
			id
			name
            ${params.fields}
         }
      }
      nodes {
		id
		name
        ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`

/**
* @description Github Graphql SavedReplies
* @defaultVariables totalCount title
* @queryArguments
* after string 

* before string

* first number

* last number

* orderBy "UPDATED_AT"
* @fields
* Reply
*/

export const SavedReplies = (params: queryVariables.SavedReplies) => `
	savedReplies (first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""},orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
      edges {
         cursor
         node {
			id
			title
            ${params.fields}
         }
      }
      nodes {
		id
		title
        ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`

/**
* @description Github Graphql StarredRepositories
* @defaultVariables totalCount 
* @queryArguments
* after string 

* before string

* first number

* last number

* orderBy "STARRED_AT"

* ownedByViewer boolean

* isOverLimit boolean

* @fields
* Repository
*/

export const StarredRepositories = (params: queryVariables.StarredRepositories) => `
	starredRepositories (first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""},orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
      edges {
         cursor
         node {
			id
			name
            ${params.fields}
         }
      }
      nodes {
		id
		name
        ${params.fields}
      }
	  isOverLimit
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`

/**
* @description Github Graphql Status
* @defaultVariables id message
* @fields
* createdAt

* emoji

* emojiHTML

* expiresAt

* id
     
* indicatesLimitedAvailability

* Organization

* updatedAt

* user {
   User
}
*/

export const Status = (fields: string) => `
	id
	message
	${fields}
`


/**
* @description Github Graphql TopRepositories
* @defaultVariables totalCount 
* @queryArguments
* after string 

* before string

* first number

* last number

* orderBy "CREATED_AT" | "UPDATED_AT" | "PUSHED_AT" | "NAME" | "STARGAZERS"

* since string

* @fields
* Repository
*/

export const TopRepositories = (params: queryVariables.TopRepositories) => `
	topRepositories (first: ${params.first} ${params.since ? `, since: "${params.since}"` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""},orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
      edges {
         cursor
         node {
			id
			name
            ${params.fields}
         }
      }
      nodes {
		id
		name
        ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`
/**
* @description Github Graphql Watching
* @defaultVariables totalCount 
* @queryArguments
* after string 

* before string

* first number

* last number

* orderBy "CREATED_AT" | "UPDATED_AT" | "PUSHED_AT" | "NAME" | "STARGAZERS"

* isLocked boolean

* ownerAffiliations "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"

* privacy "PUBLIC" | "PRIVATE"

* @fields
* Repository
*/

export const Watching = (params: queryVariables.Watching) => `
	watching (first: ${params.first} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}  ${params.last ? `, last: ${params.last}` : ""},orderBy: {field: ${params.orderBy}, direction: ${params.direction}}
   ${params.privacy ? `, privacy: "${params.privacy}"` : ""} ${params.isLocked ? `, isLocked: "${params.isLocked}"` : ""} ${params.ownerAffiliations ? `, ownerAffiliations: "${params.ownerAffiliations}"` : ""}) {
      edges {
         cursor
         node {
			id
			name
            ${params.fields}
         }
      }
      nodes {
		id
		name
        ${params.fields}
      }
      ${params.pageInfo ? params.pageInfo : ""}
      totalCount
   }
`
