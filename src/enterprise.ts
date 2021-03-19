/**
* @description Github Graphql Query for Search
* @defaultVariables totalCount
* @fields 
* app App
    
* name 

* companyUrl 

* configurationResourcePath 
    
* configurationUrl 
    
* documentationUrl 
    
* extendedDescription 
    
* extendedDescriptionHTML 
    
* fullDescription 
    
* fullDescriptionHTML 
    
* hasPublishedFreeTrialPlans 
    
* hasTermsOfService 
    
* hasVerifiedOwner 
    
* howItWorks 
    
* howItWorksHTML 
    
* id 
    
* installationUrl 

* installedForViewer 
    
* isArchived 
    
* isDraft 

* isPaid 

* isPublic 

* isRejected 
  
* isUnverified 
  
* isUnverifiedPending 
  
* isVerificationPendingFromDraft 
  
* isVerificationPendingFromUnverified 
  
* isVerified 

* logoBackgroundColor 
    
* logoUrl 
  
* normalizedShortDescription 
  
* pricingUrl 
  
* primaryCategory {
  
    description 
  
    howItWorks 
  
    id 
  
    name 
  
    primaryListingCount 
  
    resourcePath 
  
    secondaryListingCount 
  
    slug 
  
    url 
    
* }
    
* privacyPolicyUrl 
    
* resourcePath 
  
* screenshotUrls 
  
* secondaryCategory {
  
* description 
        
* howItWorks 
  
* id 
  
* name 
  
* primaryListingCount 
  
* resourcePath 
  
* secondaryListingCount 
  
* slug 
        url 
* }
    
* shortDescription 
  
* slug 
  
* statusUrl 
  
* supportEmail 
  
* supportUrl 
  
* termsOfServiceUrl 
  
* url 
  
* viewerCanAddPlans 
  
* viewerCanApprove 
  
* viewerCanDelist 
  
* viewerCanEdit 
  
* viewerCanEditCategories 
  
* viewerCanEditPlans 
  
* viewerCanRedraft 
  
* viewerCanReject 
  
* viewerCanRequestApproval 
  
* viewerHasPurchased 
  
* viewerHasPurchasedForAllOrganizations 
  
* viewerIsListingAdmin 
*/

export const MarketplaceListing = (fields: string ) => `
    name
    id
    ${fields}
`
/**
* @description Github Graphql Query for Search
* @fields MarketplaceListing
*/

export const onMarketplaceListing = (fields: string ) => `
    ... on MarketplaceListing {
        ${fields}
    }
`