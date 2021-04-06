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
