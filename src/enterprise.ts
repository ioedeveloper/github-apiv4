import { queryVariables } from ".";

/**
 * @description Github Graphql Enterprise
 * @queryVariable 
 ** invitationToken string
 ** slug string
 * @fields
 ** avatarUrl
 ** BillingInfo
 ** createdAt
 ** databaseId
 ** description
 ** descriptionHTML
 ** id
 ** location
 ** Members
 ** name
 ** Organizations 
 ** OwnerInfo
 ** resourcePath
 ** slug
 ** url
 ** UserAccounts
 ** viewerIsAdmin
 ** websiteUrl
 */
 export const Enterprise = (params: queryVariables.Enterprise) => `
    enterprise ${params.invitationToken || params.slug ? `(${params.invitationToken?`invitationToken: "${params.invitationToken}"`:""} ${params.slug?`slug: "${params.slug}"`:""})`:""} {
        ${params.fields}
    }
 `

 /**
 * @description Github Graphql BillingInfo
 * @fields
 ** allLicensableUsersCount
 ** assetPacks
 ** availableSeats
 ** bandwidthQuota
 ** bandwidthUsage
 ** bandwidthUsagePercentage
 ** seats
 ** storageQuota
 ** storageUsage
 ** storageUsagePercentage
 ** totalAvailableLicenses
 ** totalLicenses
*/

export const BillingInfo = (fields: string) => `
    billingInfo {
        ${fields}
    }
`