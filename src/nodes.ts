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
* @description Github Graphql onEnterpriseUserAccount
* * @queryVariables EnterpriseUserAccount
*/

export const onEnterpriseUserAccount = (fields: string = '') => `
    ... on EnterpriseUserAccount {
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
* @queryVariables avatarUrl
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
* @description Github Graphql onCreatedRepositoryContribution
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
* @description Github Graphql onGenericHovercardContext
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
 ... on ReviewStatusHovercardContext {
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

