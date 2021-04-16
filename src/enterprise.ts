
import { queryVariables } from "."

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