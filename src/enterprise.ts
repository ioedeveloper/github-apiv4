import { queryVariables } from "."


/**
* @description Github Graphql MarketplaceListing
* @defaultVariables totalCount
* @fields 
** app { App }
** name 
** companyUrl 
** configurationResourcePath 
** configurationUrl 
** documentationUrl 
** extendedDescription 
** extendedDescriptionHTML 
** fullDescription 
** fullDescriptionHTML 
** hasPublishedFreeTrialPlans 
** hasTermsOfService 
** hasVerifiedOwner 
** howItWorks 
** howItWorksHTML 
** id 
** installationUrl 
** installedForViewer 
** isArchived 
** isDraft 
** isPaid 
** isPublic 
** isRejected 
** isUnverified 
** isUnverifiedPending 
** isVerificationPendingFromDraft 
** isVerificationPendingFromUnverified 
** isVerified 
** logoBackgroundColor 
** logoUrl 
** normalizedShortDescription 
** pricingUrl 
** primaryCategory { description howItWorks id name  primaryListingCount resourcePath secondaryListingCount slug url  }
** privacyPolicyUrl 
** resourcePath 
** screenshotUrls 
** secondaryCategory { description howItWorks id name  primaryListingCount resourcePath secondaryListingCount slug url  }
** viewerCanAddPlans 
** viewerCanApprove 
** viewerCanDelist 
** viewerCanEdit 
** viewerCanEditCategories 
** viewerCanEditPlans 
** viewerCanRedraft 
** viewerCanReject 
** viewerCanRequestApproval 
** viewerHasPurchased 
** viewerHasPurchasedForAllOrganizations 
** viewerIsListingAdmin 
*/


export const MarketplaceListing = (fields: string) => `
    marketplaceListing {
		name
		id
		${fields}
	}
`

/**
 * @description Github Graphql MarketplaceListings  
 * @defaultVariables totalCount
 * @queryArguments 
 ** after string
 ** before string
 ** first number
 ** last number
 ** adminId string
 ** allStates boolean
 ** categorySlug string 
 ** query string
 ** organizationId string
 ** primaryCategoryOnly boolean
 ** slugs boolean
 ** useTopicAliases boolean
 ** viewerCanAdmin boolean
 ** withFreeTrialsOnly boolean
 * @fields  
 ** App
 ** companyUrl
 ** configurationResourcePath
 ** configurationUrl   
 ** documentationUrl
 ** extendedDescription
 ** extendedDescriptionHTML
 ** fullDescription
 ** fullDescriptionHTML
 ** hasPublishedFreeTrialPlans
 ** hasTermsOfService
 ** hasVerifiedOwner
 ** howItWorks
 ** howItWorksHTML
 ** id
 ** installationUrl
 ** installedForViewer
 ** isArchived
 ** isDraft
 ** isPaid
 ** isPublic
 ** isRejected
 ** isUnverified
 ** isUnverifiedPending
 ** isVerificationPendingFromDraft
 ** isVerificationPendingFromUnverified
 ** isVerified
 ** logoBackgroundColor
 ** logoUrl
 ** name
 ** normalizedShortDescription
 ** pricingUrl
 ** PrimaryCategory
 ** privacyPolicyUrl
 ** resourcePath
 ** screenshotUrls
 ** SecondaryCategory
 ** shortDescription
 ** slug
 ** statusUrl
 ** supportEmail
 ** supportUrl
 ** termsOfServiceUrl
 ** url
 ** viewerCanAddPlans
 ** viewerCanApprove
 ** viewerCanDelist
 ** viewerCanEdit
 ** viewerCanEditCategories
 ** viewerCanEditPlans
 ** viewerCanRedraft
 ** viewerCanReject
 ** viewerCanRequestApproval
 ** viewerHasPurchased
 ** viewerHasPurchasedForAllOrganizations
 ** viewerIsListingAdmin
*/

export const MarketplaceListings = (params: queryVariables.MarketplaceListings) => `
    marketplaceListings(${params.first ? ` first: ${params.first} ` : ""} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, before: "${params.before}" ` : ""} ${params.last ? `last: ${params.last}` : ""}
	${params.adminId ? `, adminId: "${params.adminId}"` : ""} ${params.allStates ? `, allStates: ${params.allStates}` : ""} ${params.categorySlug ? `, categorySlug: "${params.categorySlug}"` : ""}
	${params.organizationId ? `, organizationId: "${params.organizationId}"` : ""} ${params.organizationId ? `, organizationId: "${params.organizationId}"` : ""} ${params.primaryCategoryOnly ? `, primaryCategoryOnly: ${params.primaryCategoryOnly}` : ""}
	${params.slugs ? `, slugs: ${params.slugs}` : ""} ${params.useTopicAliases ? `, useTopicAliases: ${params.useTopicAliases}` : ""} ${params.viewerCanAdmin ? `, viewerCanAdmin: ${params.viewerCanAdmin}` : ""} ${params.withFreeTrialsOnly ? `, withFreeTrialsOnly: ${params.withFreeTrialsOnly}` : ""}) {
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
 * @description Github Graphql PrimaryCategory 
 ** description
 ** howItWorks
 ** id
 ** name
 ** primaryListingCount
 ** resourcePath
 ** secondaryListingCount
 ** slug
 ** url
*/

export const PrimaryCategory = (fields: string = "") => `
	primaryCategory {
		${fields}
	}
`

/**
 * @description Github Graphql SecondaryCategory 
 ** description
 ** howItWorks
 ** id
 ** name
 ** primaryListingCount
 ** resourcePath
 ** secondaryListingCount
 ** slug
 ** url
*/

export const SecondaryCategory = (fields: string = "") => `
	secondaryCategory {
		${fields}
	}
`

/**
* @description Github Graphql Query for MarketplaceCategories
* @queryVariable
** slug string
** useTopicAliases boolean
* @fields
** description
** howItWorks
** id
** name
** primaryListingCount
** resourcePath
** secondaryListingCount
** slug
** url
*/

export const MarketplaceCategories = (params: queryVariables.MarketplaceCategories) => `
	marketplaceCategories ${params.excludeEmpty || params.excludeSubcategories || params.includeCategories ? `(${params.excludeEmpty ? `excludeEmpty: ${params.excludeEmpty},` : ""} ${params.excludeSubcategories ? `excludeSubcategories: ${params.excludeSubcategories},` : ""}
	${params.includeCategories ? `includeCategories: "${params.includeCategories}",` : ""})` : ""} {
		${params.fields}
	}
`
/**
 * @description Github Graphql Licenses
 * @fields
 ** body
 ** conditions { description key label }
 ** description
 ** featured
 ** hidden
 ** id
 ** implementation
 ** key
 ** limitations { description key label }
 ** name
 ** nickname
 ** permissions { description key label }
 ** pseudoLicense
 ** spdxId
 ** url
*/

export const Licenses = (fields: string) => `
  licenses {
      ${fields}
  }
`

/**
 * @description Github Graphql License
 * @fields
 ** body
 ** conditions { description key label }
 ** description
 ** featured
 ** hidden
 ** id
 ** implementation
 ** key
 ** limitations { description key label }
 ** name
 ** nickname
 ** permissions { description key label }
 ** pseudoLicense
 ** spdxId
 ** url
*/

export const License = (key: string, fields: string) => `
    license(key: "${key}") {
      ${fields}
  }
`

/**
 * @description Github Graphql Query for EnterpriseAdministratorInvitationByToken
 * @queryVariable 
 **  invitationToken string
 * @fields
 ** Invitation
 */

export const EnterpriseAdministratorInvitationByToken = (invitationToken: string, fields: string) => `
	enterpriseAdministratorInvitationByToken (invitationToken: "${invitationToken}") {
		${fields}
	}
 `

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
    enterprise ${params.invitationToken || params.slug ? `(${params.invitationToken ? `invitationToken: "${params.invitationToken}"` : ""} ${params.slug ? `slug: "${params.slug}"` : ""})` : ""} {
        ${params.fields}
    }
`

/**
* @description Github Graphql Query for EnterpriseAdministratorInvitation
* @queryVariable invitationToken string
* @fields
** Invitation
*/
export const EnterpriseAdministratorInvitation = (params: queryVariables.EnterpriseAdministratorInvitation) => `
    enterpriseAdministratorInvitation (${params.enterpriseSlug ? `enterpriseSlug: "${params.enterpriseSlug}",` : ""} ${params.role ? `role:${params.role}` : ""}
    ${params.userLogin ? `userLogin: ${params.userLogin}` : ""}) {
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
/**
 * @description Github Graphql CodesOfConduct
 * @fields 
 ** body
 ** id
 ** key
 ** name
 ** resourcePath
 ** url
 */
export const CodesOfConduct = (fields: string) => `
    codesOfConduct {
        ${fields}
    }
 `

/**
* @description Github Graphql CodeOfConduct
* @fields 
** body
** id
** key
** name
** resourcePath
** url
*/

export const CodeOfConduct = (fields: string, key?: string,) => `
    codeOfConduct ${key?`(key: "${key}")`:""} {
        ${fields}
    }
 `
