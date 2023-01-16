import { queryVariables } from ".";
import { getRequest } from "../utils";
import { CodeOfConductRes, CodesOfConductRes, EnterpriseAdministratorInvitationByTokenRes, EnterpriseAdministratorInvitationRes, EnterpriseRes, LicenseRes, LicensesRes, MarketplaceCategoriesRes, MarketplaceCategoryRes, MarketplaceListingsRes, MetaRes, OrganizationRes, RepositoryRes, RepositoryOwnerRes, SearchRes, ResourceRes, SecurityAdvisoryRes, SecurityVulnerabilitiesQueryRes, SecurityAdvisoriesRes, SponsorablesRes, TopicQuery, UserRes, ViewerRes } from "./types";
import { EnterpriseAdministratorInvitationQuery, MarketplaceCategoriesQuery, MarketplaceCategoryQuery, MarketplaceListingsQuery, SearchQuery, SecurityAdvisoriesFieldsQuery, SponsorablesQuery, VulnerabilitiesQuery } from "./variables";

export class GetRepo {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }
    /**
     * @description Github Graphql Repository
     * @defaultVariables id name
     * @fields
     ** AssignableUsers
     ** BranchProtectionRules
     ** CodeOfConduct
     ** Collaborators
     ** CommitComments
     ** contactLinks { about name url }
     ** createdAt
     ** databaseId
     ** defaultBranchRef { Ref }
     ** deleteBranchOnMerge
     ** DeployKeys
     ** Deployment
     ** hasIssuesEnabled
     ** description
     ** descriptionHTML
     ** diskUsage
     ** forkCount
     ** fork { Repositories }
     ** fundingLinks { platform url }
     ** hasIssuesEnabled
     ** hasProjectsEnabled
     ** hasWikiEnabled
     ** homepageUrl
     ** id
     ** interactionAbility { expiresAt limit origin }
     ** isArchived
     ** isBlankIssuesEnabled
     ** isDisabled
     ** isEmpty
     ** isFork
     ** isInOrganization
     ** isLocked
     ** isMirror
     ** isPrivate
     ** isSecurityPolicyEnabled
     ** isTemplate
     ** isUserConfigurationRepository
     ** Issue
     ** issueOrPullRequest(number: number) { onIssue onPullRequest }
     ** issueTemplates { about body name title }
     ** Issues
     ** Label
     ** Labels
     ** Languages
     ** LatestRelease
     ** LicenseInfo
     ** lockReason
     ** MentionableUsers
     ** mergeCommitAllowed
     ** Milestone
     ** Milestones
     ** mirrorUrl
     ** name
     ** nameWithOwner
     ** RepoObject
     ** openGraphImageUrl
     ** owner { Owner }
     ** Packages
     ** parent { Repository }
     ** pinnedIssues { Issues }
     ** primaryLanguage { color id name }
     ** Project
     ** Projects
     ** projectsResourcePath
     ** projectsUrl
     ** PullRequest
     ** PullRequests
     ** pushedAt
     ** rebaseMergeAllowed
     ** Ref
     ** Refs
     ** Release
     ** Releases
     ** Topics
     ** resourcePath
     ** securityPolicyUrl
     ** shortDescriptionHTML
     ** squashMergeAllowed
     ** sshUrl
     ** stargazerCount
     ** Stargazers
     ** Submodules
     ** tempCloneToken
     ** templateRepository { Repository }
     ** updatedAt
     ** url
     ** usesCustomOpenGraphImage
     ** viewerCanAdminister
     ** viewerCanCreateProjects
     ** viewerCanSubscribe
     ** viewerCanUpdateTopics
     ** viewerDefaultCommitEmail
     ** viewerDefaultMergeMethod
     ** viewerHasStarred
     ** viewerPermission
     ** viewerPossibleCommitEmails
     ** viewerSubscription
     ** VulnerabilityAlerts
     ** Watchers
     */
    get(fields: string = "", name?: string, owner?: string): Promise<RepositoryRes> {
        const query = `
        repository ${name || owner ? `(${name ? `name: "${name}"` : ""} ${owner ? `, owner: "${owner}"` : ""})` : ""} {
            id
            ${fields}
        }    
        `;
        return getRequest(this._key, query);
    }
}

export class GetSearch {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Query for Search
     * @defaultVariables totalCount
     * @queryVariables
     ** after string
     ** before string
     ** first number
     ** last number
     ** query string
     * @fields
     ** onApp
     ** onIssue
     ** onMarketplaceListing
     ** onOrganization
     ** onPullRequest
     ** onRepository
     ** onUser
     ** type "ISSUE" | "REPOSITORY" | "USER"
     ** codeCount
     ** issueCount
     ** repositoryCount
     ** userCount
     ** wikiCount
     */

    get(params: SearchQuery): Promise<SearchRes> {
        const query = `{
      search(query: "${params.query}", first: ${params.first} ${params.type ? `, type: ${params.type}` : ""} ${
            params.after ? `, after: ${params.after}` : ""
        } ${params.before ? `, before: ${params.before}` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
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
        codeCount
        issueCount
        repositoryCount
        userCount
        wikiCount
      }
     }`;
        return getRequest(this._key, query);
    }
}

export class GetCodesOfConduct {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

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
    get(fields: string): Promise<CodesOfConductRes> {
        const query = `{
		codesOfConduct {
			${fields}
		}
	}`;
        return getRequest(this._key, query);
    }
}

export class GetCodeOfConduct {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

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

    get(fields: string, key?: string): Promise<CodeOfConductRes> {
        const query = `{
			codeOfConduct ${key ? `(key: "${key}")` : ""} {
				${fields}
			}
		}
	 `;

        return getRequest(this._key, query);
    }
}

export class GetLicense {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

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

    get(key: string, fields: string): Promise<LicenseRes> {
        const query = `{
			 license(key: "${key}") {
			${fields}
			}
		}
	  `;
        return getRequest(this._key, query);
    }
}

export class GetLicenses{
	_key: string;

    constructor(key: string) {
        this._key = key;
    }

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
	get(fields: string): Promise<LicensesRes>{

		const query = `
		{
			licenses {
			${fields}
			}
		}
	  `
		return getRequest(this._key, query)
	}
}

export class GetEnterprise {
	_key: string;

    constructor(key: string) {
        this._key = key;
    }

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
	get(fields: string, invitationToken?: string, slug?: string):Promise<EnterpriseRes> {
		const query = `{
			enterprise ${invitationToken || slug ? `(${invitationToken ? `invitationToken: "${invitationToken}"` : ''} ${slug ? `slug: "${slug}"` : ''})` : ''} {
				${fields}
			}
		}
		`
		return getRequest(this._key, query)
	}
} 


export class GetEnterpriseAdministratorInvitation{
	_key: string;

    constructor(key: string) {
        this._key = key;
    }

	/**
	* @description Github Graphql Query for EnterpriseAdministratorInvitation
	* @queryVariable invitationToken string
	* @fields
	** Invitation
	*/
	get(params: EnterpriseAdministratorInvitationQuery):Promise<EnterpriseAdministratorInvitationRes>{
		const query = `{
		enterpriseAdministratorInvitation (${params.enterpriseSlug ? `enterpriseSlug: "${params.enterpriseSlug}",` : ''} ${params.role ? `role:${params.role}` : ''}
			${params.userLogin ? `userLogin: ${params.userLogin}` : ''}) {
				${params.fields}
			}
		}
	 `
	 return getRequest(this._key, query)
	}
}

export class GetEnterpriseAdministratorInvitationByToken {
	_key: string;

    constructor(key: string) {
        this._key = key;
    }


	/**
	 * @description Github Graphql Query for EnterpriseAdministratorInvitationByToken
	 * @queryVariable
	 **  invitationToken string
	* @fields
	** Invitation
	*/

	get(invitationToken: string, fields: string): Promise<EnterpriseAdministratorInvitationByTokenRes>{
		const query = `{
			enterpriseAdministratorInvitationByToken (invitationToken: "${invitationToken}") {
				${fields}
			}
		}
	 `
		return getRequest(this._key, query)
	}
}

export class GetMarketplaceCategories{
	_key: string;

    constructor(key: string) {
        this._key = key;
    }

	/**
	* @description Github Graphql Query for MarketplaceCategories
	* @queryVariable
	** slug string
	** useTopicAliases boolean
	** excludeEmpty boolean
	** excludeEmpty boolean
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

	get(params: MarketplaceCategoriesQuery):Promise<MarketplaceCategoriesRes> {
		const query = `{
				marketplaceCategories ${params.excludeEmpty || params.excludeSubcategories || params.includeCategories
					? `(${params.excludeEmpty ? `excludeEmpty: ${params.excludeEmpty},` : ''} ${params.excludeSubcategories ? `excludeSubcategories: ${params.excludeSubcategories},` : ''}
				${params.includeCategories ? `includeCategories: "${params.includeCategories}",` : ''})`
					: ''} {
					${params.fields}
				}
			}
		`
		return getRequest(this._key, query)
		
	 }
	
}

export class GetMarketplaceCategory{
	_key: string;

    constructor(key: string) {
        this._key = key;
    }

	/**
	* @description Github Graphql Query for MarketplaceCategory
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

	get(params: MarketplaceCategoryQuery): Promise<MarketplaceCategoryRes> {
		const query = `{
			marketplaceCategory (slug: "${params.slug}", useTopicAliases: ${params.useTopicAliases}) {
					${params.fields}
				}
			}
		`
		return getRequest(this._key, query)
		
	 }
	
} 


export class GetMarketplaceListings{
	_key: string;

    constructor(key: string) {
        this._key = key;
    }	

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

	get(params: MarketplaceListingsQuery): Promise<MarketplaceListingsRes> {
		const query = `{
			marketplaceListings(${params.first ? ` first: ${params.first} ` : ''} ${params.after ? `, after: "${params.after}" ` : ''} ${params.before ? `, before: "${params.before}" ` : ''} ${params.last ? `last: ${params.last}` : ''}
			${params.adminId ? `, adminId: "${params.adminId}"` : ''} ${params.allStates ? `, allStates: ${params.allStates}` : ''} ${params.categorySlug ? `, categorySlug: "${params.categorySlug}"` : ''}
			${params.organizationId ? `, organizationId: "${params.organizationId}"` : ''} ${params.organizationId ? `, organizationId: "${params.organizationId}"` : ''} ${params.primaryCategoryOnly ? `, primaryCategoryOnly: ${params.primaryCategoryOnly}` : ''}
			${params.slugs ? `, slugs: ${params.slugs}` : ''} ${params.useTopicAliases ? `, useTopicAliases: ${params.useTopicAliases}` : ''} ${params.viewerCanAdmin ? `, viewerCanAdmin: ${params.viewerCanAdmin}` : ''} ${params.withFreeTrialsOnly ? `, withFreeTrialsOnly: ${params.withFreeTrialsOnly}` : ''}) {
				edges {
					cursor
					node {
						${params.fields}
					}
				}
			
				nodes {
					${params.fields}  
				}
				${params.pageInfo ? params.pageInfo : ''}
				totalCount
			}
		}
	`
	return getRequest(this._key, query)
	}
}

export class GetMarketplaceListing{
	_key: string;

    constructor(key: string) {
        this._key = key;
    }

	/**
		* @description Github Graphql MarketplaceListing
		* @queryArguments
		* slug string
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
	get(params: MarketplaceCategoryQuery): Promise<MarketplaceCategoryRes>{
		const query = `{
			marketplaceListing (slug: "${params.slug}") {
				name
				id
				${params.fields}
			}
		}
		`
		return getRequest(this._key, query)
	}
}

export class GetMeta {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Query Meta
     * @fields
     ** gitHubServicesSha
     ** gitIpAddresses
     ** hookIpAddresses
     ** importerIpAddresses
     ** isPasswordAuthenticationVerifiable
     ** pagesIpAddresses
     */
    get(fields: string): Promise<MetaRes> {
        const query = `
    {
      meta {
        ${fields}
      }
    }
  `;
        return getRequest(this._key, query);
    }
}

export class GetOrganization{
    _key: string;

    constructor(key: string) {
        this._key = key;
    }
    /**
     * @description Github Graphql Organization
     * @fields
     ** anyPinnableItems (type: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM")
    ** AuditLog
    ** avatarUrl
    ** createdAt
    ** databaseId
    ** description
    ** descriptionHTML
    ** Domains
    ** email
    ** hasSponsorsListing
    ** id
    ** interactionAbility { expiresAt limit origin }
    ** ipAllowListEnabledSetting
    ** isSponsoredBy (accountLogin: "")
    ** isSponsoringViewer
    ** isVerified
    ** ItemShocase
    ** name
    ** location
    ** login
    ** MemberStatuses
    ** MembersWithRole
    ** newTeamResourcePath
    ** newTeamUrl
    ** notificationDeliveryRestrictionEnabledSetting
    ** organizationBillingEmail
    ** Packages
    ** PendingMembers
    ** OrganizationPinnableItems
    ** OrganizationPinnedItems
    ** Project
    ** Projects
    ** projectsResourcePath
    ** projectsUrl
    ** Repositories
    ** Repository
    ** SamlIdentityProvider
    ** OrgSponsorsListing
    ** SponsorshipForViewerAsSponsor
    ** team { Team }
    ** Teams
    ** teamsResourcePath
    ** teamsUrl
    ** twitterUsername
    ** updatedAt
    ** url
    ** viewerCanAdminister
    ** viewerCanChangePinnedItems
    ** viewerCanCreateProjects
    ** viewerCanCreateRepositories
    ** viewerCanCreateTeams
    ** viewerCanSponsor
    ** viewerIsAMember
    ** viewerIsSponsoring
    ** websiteUrl
    */

    get(fields: string, login?: string): Promise<OrganizationRes>{
        const query = `{
            organization ${login ? `(login: "${login}")` : ''} {
                name
                ${fields}
            }
        }
    `
        return getRequest(this._key, query)
    }
}

export class GetRepositoryOwner {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Query for RepositoryOwner
     * @queryVariables login string
     * @fields
     ** onOrganization onUser
     ** Repository
     ** Repositories
     ** avatarUrl
     ** id
     ** login
     ** resourcePath
     ** url
     */
    get(login: string, fields: string): Promise<RepositoryOwnerRes> {
        const query = `
    {
      repositoryOwner (login: "${login}") {
       ${fields}
      }
   }
 `;
        return getRequest(this._key, query);
    }
}


export class GetResource {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Query for Resource
     * @fields
     ** url
     ** resourcePath
     ** onOrganization
     ** onRelease
     ** onUser
     ** onIssue
     ** onPullRequest
     ** onRepository
     ** onTeamDiscussion
     ** onTeamDiscussionComment
     ** onCommit
     ** onCheckRun
     ** onMillestone
     ** onRepositoryTopic
     ** onPullRequestCommit
     ** onMannequin
     ** onBot
     ** onClosedEvent
     ** onCrossReferencedEvent
     ** onMergedEvent
     ** onReviewDismissedEvent
     ** onConvertToDraftEvent
     ** onReadyForReviewEvent
     ** onGist
     */

    get(url: string, fields: string): Promise<ResourceRes> {
        const query = `
    {
     resource(url: "${url}") {
       ${fields}
     }
    }
  `;
        return getRequest(this._key, query);
    }
}


export class GetSecurityAdvisories {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }
    /**
     * @description Github Graphql SecurityAdvisories
     * @queryVariables
     ** type "CVE" | "GHSA"
     ** value string
     ** orderBy "PUBLISHED_AT" | "UPDATED_AT"
     ** publishedSince string
     ** updatedSince string
     * @fields
     ** SecurityAdvisory
     */

    get(params: SecurityAdvisoriesFieldsQuery): Promise<SecurityAdvisoriesRes> {
        const query = `
{
securityAdvisories(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${
            params.before ? `, after: "${params.before}" ` : ""
        } ${params.last ? `, last: ${params.last}` : ""}
${params.publishedSince ? `, publishedSince: "${params.publishedSince}" ` : ""} ${
            params.updatedSince ? `, updatedSince: "${params.updatedSince}" ` : ""
        } 
${params.value || params.type ? `, identifier: {type: ${params.type}, value: "${params.value}"}` : ""}) {
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
`;
        return getRequest(this._key, query);
    }
}

export class GetSecurityAdvisory {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }
    /**
     * @description Github Graphql Query for SecurityAdvisory
     * @field
     ** SecurityAdvisory
     */

    get(ghsaId: string, fields: string): Promise<SecurityAdvisoryRes> {
        const query = `
  {
  securityAdvisory (ghsaId: "${ghsaId}") {
    ${fields}
  }
}
`;
        return getRequest(this._key, query);
    }
}

export class GetSecurityVulnerabilities {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }
    /**
     * @description Github Graphql Query for SecurityVulnerabilities
     * @queryArguments
     ** ecosystem "NPM" | "RUBYGEMS" | "MAVEN" | "COMPOSER" | "NUGET" | "PIP"
     ** severities "LOW" | "MODERATE" | "HIGH" | "CRITICAL"
     ** after string
     ** before string
     ** first number
     ** last number
     * @queryVariables
     ** @fields
     ** Vulnerability
     */

    get(params: VulnerabilitiesQuery): Promise<SecurityVulnerabilitiesQueryRes> {
        const query = `
    {
      securityVulnerabilities(${params.first ? `first: ${params.first}` : ""} ${
            params.last ? `last: ${params.last}` : ""
        } ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}, 
      ${
          params.orderBy || params.direction
              ? `orderBy: {field: ${params.orderBy}, direction: ${params.direction}}`
              : ""
      }) {
          edges {
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
    
  `;
        return getRequest(this._key, query);
    }
}

export class GetSponsorables {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Query for Sponsorables
     * @queryVariables
     ** dependencyEcosystem "RUBYGEMS" | "NPM" | "PIP" | "MAVEN" | "NUGET" | "COMPOSER"
     ** onlyDependencies boolean
     ** orgLoginForDependencies string
     ** orderBy "LOGIN"
     ** direction "ASC" | "DESC"
     * @fields
     ** onOrganization
     ** onUser
     */
    get(params: SponsorablesQuery): Promise<SponsorablesRes> {
        const query = `
  {
   sponsorables(${params.first ? `first: ${params.first}` : ""} ${params.last ? `last: ${params.last}` : ""} ${
            params.dependencyEcosystem ? `, dependencyEcosystem: ${params.dependencyEcosystem}` : ""
        } ${params.onlyDependencies ? `, ${params.onlyDependencies}` : ""} ${params.after ? `, ${params.after}` : ""} ${
            params.before ? `, ${params.before}` : ""
        }
   ${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy} direction: ${params.direction}}` : ""} 
   ${params.orgLoginForDependencies ? `, "${params.orgLoginForDependencies}"` : ""}) {
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
`;
        return getRequest(this._key, query);
    }
}

export class GetTopic {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Topic
     * @defaultVariables
     * @fields
     ** id
     ** name
     ** RelatedTopics
     ** stargazerCount
     ** Stargazers
     ** viewerHasStarred
     */
    get(fields: string, name?: string):Promise<TopicQuery> {
        const query = `{
            topic (name: "${name}") {
                ${fields}
            }
        }
       `;

       return getRequest(this._key, query)

    }
}

export class GetUser {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Query for Github User
     * @queryVariable
     **  login username
     * @fields
     **  User
     */

    get(login: string, fields: string): Promise<UserRes> {
        const query = `
    {
      user (login: "${login}") {
        ${fields}
      }
    }
    `;
        return getRequest(this._key, query);
    }
}

export class GetViewer {
    _key: string;

    constructor(key: string) {
        this._key = key;
    }

    /**
     * @description Github Graphql Query for viewer details
     * @description Github Graphql Query for Viewer
     * @fields
     ** User
     */

    get(fields: string): Promise<ViewerRes> {
        const query = `
    query {
      viewer {
        ${fields}
      }
    }
`;
        return getRequest(this._key, query);
    }
}
