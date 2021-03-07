/**
 * @description Github Graphql User
 * @defaultVariable id name
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
 *          RelevantOrganisations
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
 * Organisations
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
 * StarredRepositories
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
    relevantTeams(after: ${after}, before: ${before}, first: ${first}, last: ${last}) {
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

 export const RelevantOrganisations = (after:string = '', before:string = '', first:number = 10, last:number = 10, node:string = '',
 edge:string = '', pageInfo: string = '') => `
    relevantOrganisations(after: ${after}, before: ${before}, first: ${first}, last: ${last}) {
        ${edge}
        ${node}
        ${pageInfo}
        totalcount
    }
 `