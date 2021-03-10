/**
 * @description Github Graphql TeamRemoveRepositoryAuditEntry  
 * @defaultVariables cursor totalCount
 * @queryVariables avatarUrl
 *  id
 *  name
 *  avatarUrl
 *  billingInfo {
 *      assetPacks
 *      allLicensableUsersCount
 *      availableSeats
 *      totalLicenses
 *      totalAvailableLicenses
 *      storageUsagePercentage
 *      storageUsage
 *      storageQuota
 *      seats
 *      bandwidthUsagePercentage
 *      bandwidthUsage
 *      bandwidthQuota
 *  }
 *  createdAt
 *  databaseId
 *  description
 *  descriptionHTML
 *  location
 *  Members 
 *  name
 *  Organization
*}
*/

export const Enterprise = (fields:string = '') => `
    ... on Enterprise {
        id
        name
        ${fields}        
    }
`

/**
 * @description Github Graphql EnterpriseUserAccount
 * @defaultVariables id name
 * @queryVariables avatarUrl
 * createdAt
 * Enterprise
 * login
 * Organizations
 * resourcePath
 * updatedAt
 * url
 * User
 */


export const EnterpriseUserAccount = (fields:string = '') => `
    id
    name
    ${fields}
`

    /**
     * @description Github Graphql onEnterpriseUserAccount
     * @defaultVariables id email
     * @queryVariables EnterpriseUserAccount
     */


 export const onEnterpriseUserAccount = (fields: string) => `
 ... on EnterpriseUserAccount {
     id
     email
     ${fields}
 }
`


