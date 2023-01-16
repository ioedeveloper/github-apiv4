import { getRequest } from "../utils";
import { queryVariables, types } from "./index";
import { SearchRes, SecurityAdvisoryRes, SecurityVulnerabilitiesQueryRes, ViewerRes } from "./types";

export * from "./user";
export * from "./respository";
export * from "./discussion";
export * from "./nodes";
export * from "./enterprise";
export * from "./organization";



export * from "./user";
export * from "./respository";


/**
 * @description Github Graphql Query for TopicQuery
 * @fields
 ** Topic
 */

export const TopicQuery = (name: string, fields: string) => `
  {
    topic(name: "${name}") {
      ${fields}
    }
  }
`;

/**
 * @description Github Graphql Query for SponsorsListing
 * @queryVariables
 ** slug string
 * @fields
 ** activeGoal {	Goal }
 ** createdAt
 ** fullDescription
 ** fullDescriptionHTML
 ** id
 ** name
 ** shortDescription
 ** slug
 ** Tiers
 */

export const SponsorsListing = (slug: string, fields: string) => `
	{
		sponsorsListing(slug: "${slug}") {
			${fields}
		}
	}

`;




/**
 * @description Github Graphql Query for Repository
 * @queryVariables
 ** name string
 ** owner string
 * @fields
 * Repository
 */
export const RepositoryQuery = (name: string, owner: string, fields: string) => `
    {
      repository(name: "${name}", owner: "${owner}") {
        ${fields}
      }
    }
 `;

/**
 * @description Github Graphql Query for Organization
 * @fields
 ** OrganizationFields
 */

export const OrganisationQuery = (login: string, fields: string) => `
    {
      organization (login: "${login}"){
        ${fields}
      }
    }
`;


/**
 * @description Github Graphql Relay
 * @fields
 ** CodeofConduct
 ** CodesofConduct
 ** Enterprise
 ** EnterpriseAdministratorInvitation
 ** EnterpriseAdministratorInvitationByToken
 ** License
 ** Licenses
 ** MarketplaceCategories
 ** MarketplaceCategory
 ** MarketplaceListing
 ** MarketplaceListings
 ** Meta
 ** Node
 ** Nodes
 ** Organization
 ** RateLimit
 ** Relay
 ** Repository
 ** RepositoryOwner
 ** Resource
 ** Search
 ** SecurityAdvisories
 ** SecurityAdvisory
 ** SecurityVulnerabilities
 ** Sponsorables
 ** SponsorsListing
 ** Topic
 ** User
 ** Viewer
 */

export const Relay = (fields: string = "") => `
  {
    relay {
      ${fields}
    }
  }
`;

/**
 * @description Github Graphql Nodes
 * @fields
 ** onCodeOfConduct
 ** onEnterprise
 ** onEnterpriseUserAccount
 ** onOrganization
 ** onPackage
 ** onPackageVersion
 ** onPackageFile
 ** onRelease
 ** onUser
 ** onProject
 ** onProjectColumn
 ** onProjectCard
 ** onIssue
 ** onUserContentEdit
 ** onLabel
 ** onPullRequest
 ** onReaction
 ** onRepository
 ** onLicense
 ** onBranchProtectionRule
 ** onRef
 ** onPushAllowance
 ** onApp
 ** onTeam
 ** onUserStatus
 ** onTeamDiscussion
 ** onTeamDiscussionComment
 ** onOrganizationInvitation
 ** onReviewDismissalAllowance
 ** onCommitComment
 ** onCommit
 ** onCheckSuite
 ** onCheckRun
 ** onPush
 ** onDeployment
 ** onDeploymentStatus
 ** onStatus
 ** onStatusContext
 ** onStatusCheckRollup
 ** onTree
 ** onDeployKey
 ** onLanguage
 ** onMilestone
 ** onPinnedIssue
 ** onRepositoryTopic
 ** onTopic
 ** onRepositoryVulnerabilityAlert
 ** onSecurityAdvisory
 ** onCWE
 ** onIssueComment
 ** onPullRequestCommit
 ** onPullRequestReview
 ** onPullRequestReviewComment
 ** onReviewRequest
 ** onMannequin
 ** onPullRequestReviewThread
 ** onAssignedEvent
 ** onBot
 ** onBaseRefDeletedEvent
 ** onBaseRefForcePushedEvent
 ** onClosedEvent
 ** onCommitCommentThread
 ** onCrossReferencedEvent
 ** onDemilestonedEvent
 ** onDeployedEvent
 ** onDeploymentEnvironmentChangedEvent
 ** onHeadRefDeletedEvent
 ** onHeadRefForcePushedEvent
 ** onHeadRefRestoredEvent
 ** onLabeledEvent
 ** onLockedEvent
 ** onMergedEvent
 ** onMilestonedEvent
 ** onReferencedEvent
 ** onRenamedTitleEvent
 ** onReopenedEvent
 ** onReviewDismissedEvent
 ** onReviewRequestRemovedEvent
 ** onReviewRequestedEvent
 ** onSubscribedEvent
 ** onUnassignedEvent
 ** onUnlabeledEvent
 ** onUnlockedEvent
 ** onUnsubscribedEvent
 ** onUserBlockedEvent
 ** onAddedToProjectEvent
 ** onAutoMergeDisabledEvent
 ** onAutoMergeEnabledEvent
 ** onAutoRebaseEnabledEvent
 ** onAutoSquashEnabledEvent
 ** onAutomaticBaseChangeFailedEvent
 ** onAutomaticBaseChangeSucceededEvent
 ** onBaseRefChangedEvent
 ** onCommentDeletedEvent
 ** onConnectedEvent
 ** onConvertToDraftEvent
 ** onConvertedNoteToIssueEvent
 ** onDisconnectedEvent
 ** onMarkedAsDuplicateEvent
 ** onMentionedEvent
 ** onMovedColumnsInProjectEvent
 ** onPinnedEvent
 ** onPullRequestCommitCommentThread
 ** onReadyForReviewEvent
 ** onRemovedFromProjectEvent
 ** onTransferredEvent
 ** onUnmarkedAsDuplicateEvent
 ** onUnpinnedEvent
 ** onGist
 ** onGistComment
 ** onSponsorsListing
 ** onSponsorsTier
 ** onSponsorship
 ** onPublicKey
 ** onSavedReply
 ** onReleaseAsset
 ** onMembersCanDeleteReposClearAuditEntry
 ** onMembersCanDeleteReposDisableAuditEntry
 ** onMembersCanDeleteReposEnableAuditEntry
 ** onOauthApplicationCreateAuditEntry
 ** onOrgAddBillingManagerAuditEntry
 ** onOrgAddMemberAuditEntry
 ** onOrgBlockUserAuditEntry
 ** onOrgConfigDisableCollaboratorsOnlyAuditEntry
 ** onOrgConfigEnableCollaboratorsOnlyAuditEntry
 ** onOrgCreateAuditEntry
 ** onOrgDisableOauthAppRestrictionsAuditEntry
 ** onOrgDisableSamlAuditEntry
 ** onOrgDisableTwoFactorRequirementAuditEntry
 ** onOrgEnableOauthAppRestrictionsAuditEntry
 ** onOrgEnableSamlAuditEntry
 ** onOrgEnableTwoFactorRequirementAuditEntry
 ** onOrgInviteMemberAuditEntry
 ** onOrgInviteToBusinessAuditEntry
 ** onOrgOauthAppAccessApprovedAuditEntry
 ** onOrgOauthAppAccessDeniedAuditEntry
 ** onOrgOauthAppAccessRequestedAuditEntry
 ** onOrgRemoveBillingManagerAuditEntry
 ** onOrgRemoveMemberAuditEntry
 ** onOrgRemoveOutsideCollaboratorAuditEntry
 ** onOrgRestoreMemberAuditEntry
 ** onOrgUnblockUserAuditEntry
 ** onOrgUpdateDefaultRepositoryPermissionAuditEntry
 ** onOrgUpdateMemberAuditEntry
 ** onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
 ** onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
 ** onPrivateRepositoryForkingDisableAuditEntry
 ** onPrivateRepositoryForkingEnableAuditEntry
 ** onRepoAccessAuditEntry
 ** onRepoAddMemberAuditEntry
 ** onRepoAddTopicAuditEntry
 ** onRepoArchivedAuditEntry
 ** onRepoChangeMergeSettingAuditEntry
 ** onRepoConfigDisableAnonymousGitAccessAuditEntry
 ** onRepoConfigDisableCollaboratorsOnlyAuditEntry
 ** onRepoConfigDisableContributorsOnlyAuditEntry
 ** onRepoConfigDisableSockpuppetDisallowedAuditEntry
 ** onRepoConfigEnableAnonymousGitAccessAuditEntry
 ** onRepoConfigEnableCollaboratorsOnlyAuditEntry
 ** onRepoConfigEnableContributorsOnlyAuditEntry
 ** onRepoConfigEnableSockpuppetDisallowedAuditEntry
 ** onRepoConfigLockAnonymousGitAccessAuditEntry
 ** onRepoConfigUnlockAnonymousGitAccessAuditEntry
 ** onRepoCreateAuditEntry
 ** onRepoDestroyAuditEntry
 ** onRepoRemoveMemberAuditEntry
 ** onRepoRemoveTopicAuditEntry
 ** onRepositoryVisibilityChangeDisableAuditEntry
 ** onRepositoryVisibilityChangeEnableAuditEntry
 ** onTeamAddMemberAuditEntry
 ** onTeamAddRepositoryAuditEntry
 ** onTeamChangeParentTeamAuditEntry
 ** onTeamRemoveMemberAuditEntry
 ** onTeamRemoveRepositoryAuditEntry
 ** onVerifiableDomain
 ** onIpAllowListEntry
 ** onOrganizationIdentityProvider
 ** onExternalIdentity
 ** onEnterpriseServerInstallation
 ** onEnterpriseServerUserAccount
 ** onEnterpriseServerUserAccountEmail
 ** onEnterpriseServerUserAccountsUpload
 ** onEnterpriseRepositoryInfo
 ** onEnterpriseAdministratorInvitation
 ** onRepositoryInvitation
 ** onEnterpriseIdentityProvider
 ** onMarketplaceCategory
 ** onMarketplaceListing
 ** onBlob
 ** onPackageTag
 ** onTag
 */

export const Nodes = (ids: string, fields: string) => `
  {
    nodes (ids: "${ids}") {
      id
      ${fields}
    }
  }
`;

/**
 * @description Github Graphql RateLimit
 * @fields
 ** cost
 ** limit
 ** nodeCount
 ** remaining
 ** resetAt
 ** used
 */

export const RateLimit = (fields: string, dryRun?: boolean) => `
  {
    rateLimit ${dryRun ? `(dryRun: ${dryRun})` : ""} {
      ${fields}
    }
  }
`;

/**
 * @description Github Graphql Node
 * @fields
 ** onCodeOfConduct
 ** onEnterprise
 ** onEnterpriseUserAccount
 ** onOrganization
 ** onPackage
 ** onPackageVersion
 ** onPackageFile
 ** onRelease
 ** onUser
 ** onProject
 ** onProjectColumn
 ** onProjectCard
 ** onIssue
 ** onUserContentEdit
 ** onLabel
 ** onPullRequest
 ** onReaction
 ** onRepository
 ** onLicense
 ** onBranchProtectionRule
 ** onRef
 ** onPushAllowance
 ** onApp
 ** onTeam
 ** onUserStatus
 ** onTeamDiscussion
 ** onTeamDiscussionComment
 ** onOrganizationInvitation
 ** onReviewDismissalAllowance
 ** onCommitComment
 ** onCommit
 ** onCheckSuite
 ** onCheckRun
 ** onPush
 ** onDeployment
 ** onDeploymentStatus
 ** onStatus
 ** onStatusContext
 ** onStatusCheckRollup
 ** onTree
 ** onDeployKey
 ** onLanguage
 ** onMilestone
 ** onPinnedIssue
 ** onRepositoryTopic
 ** onTopic
 ** onRepositoryVulnerabilityAlert
 ** onSecurityAdvisory
 ** onCWE
 ** onIssueComment
 ** onPullRequestCommit
 ** onPullRequestReview
 ** onPullRequestReviewComment
 ** onReviewRequest
 ** onMannequin
 ** onPullRequestReviewThread
 ** onAssignedEvent
 ** onBot
 ** onBaseRefDeletedEvent
 ** onBaseRefForcePushedEvent
 ** onClosedEvent
 ** onCommitCommentThread
 ** onCrossReferencedEvent
 ** onDemilestonedEvent
 ** onDeployedEvent
 ** onDeploymentEnvironmentChangedEvent
 ** onHeadRefDeletedEvent
 ** onHeadRefForcePushedEvent
 ** onHeadRefRestoredEvent
 ** onLabeledEvent
 ** onLockedEvent
 ** onMergedEvent
 ** onMilestonedEvent
 ** onReferencedEvent
 ** onRenamedTitleEvent
 ** onReopenedEvent
 ** onReviewDismissedEvent
 ** onReviewRequestRemovedEvent
 ** onReviewRequestedEvent
 ** onSubscribedEvent
 ** onUnassignedEvent
 ** onUnlabeledEvent
 ** onUnlockedEvent
 ** onUnsubscribedEvent
 ** onUserBlockedEvent
 ** onAddedToProjectEvent
 ** onAutoMergeDisabledEvent
 ** onAutoMergeEnabledEvent
 ** onAutoRebaseEnabledEvent
 ** onAutoSquashEnabledEvent
 ** onAutomaticBaseChangeFailedEvent
 ** onAutomaticBaseChangeSucceededEvent
 ** onBaseRefChangedEvent
 ** onCommentDeletedEvent
 ** onConnectedEvent
 ** onConvertToDraftEvent
 ** onConvertedNoteToIssueEvent
 ** onDisconnectedEvent
 ** onMarkedAsDuplicateEvent
 ** onMentionedEvent
 ** onMovedColumnsInProjectEvent
 ** onPinnedEvent
 ** onPullRequestCommitCommentThread
 ** onReadyForReviewEvent
 ** onRemovedFromProjectEvent
 ** onTransferredEvent
 ** onUnmarkedAsDuplicateEvent
 ** onUnpinnedEvent
 ** onGist
 ** onGistComment
 ** onSponsorsListing
 ** onSponsorsTier
 ** onSponsorship
 ** onPublicKey
 ** onSavedReply
 ** onReleaseAsset
 ** onMembersCanDeleteReposClearAuditEntry
 ** onMembersCanDeleteReposDisableAuditEntry
 ** onMembersCanDeleteReposEnableAuditEntry
 ** onOauthApplicationCreateAuditEntry
 ** onOrgAddBillingManagerAuditEntry
 ** onOrgAddMemberAuditEntry
 ** onOrgBlockUserAuditEntry
 ** onOrgConfigDisableCollaboratorsOnlyAuditEntry
 ** onOrgConfigEnableCollaboratorsOnlyAuditEntry
 ** onOrgCreateAuditEntry
 ** onOrgDisableOauthAppRestrictionsAuditEntry
 ** onOrgDisableSamlAuditEntry
 ** onOrgDisableTwoFactorRequirementAuditEntry
 ** onOrgEnableOauthAppRestrictionsAuditEntry
 ** onOrgEnableSamlAuditEntry
 ** onOrgEnableTwoFactorRequirementAuditEntry
 ** onOrgInviteMemberAuditEntry
 ** onOrgInviteToBusinessAuditEntry
 ** onOrgOauthAppAccessApprovedAuditEntry
 ** onOrgOauthAppAccessDeniedAuditEntry
 ** onOrgOauthAppAccessRequestedAuditEntry
 ** onOrgRemoveBillingManagerAuditEntry
 ** onOrgRemoveMemberAuditEntry
 ** onOrgRemoveOutsideCollaboratorAuditEntry
 ** onOrgRestoreMemberAuditEntry
 ** onOrgUnblockUserAuditEntry
 ** onOrgUpdateDefaultRepositoryPermissionAuditEntry
 ** onOrgUpdateMemberAuditEntry
 ** onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
 ** onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
 ** onPrivateRepositoryForkingDisableAuditEntry
 ** onPrivateRepositoryForkingEnableAuditEntry
 ** onRepoAccessAuditEntry
 ** onRepoAddMemberAuditEntry
 ** onRepoAddTopicAuditEntry
 ** onRepoArchivedAuditEntry
 ** onRepoChangeMergeSettingAuditEntry
 ** onRepoConfigDisableAnonymousGitAccessAuditEntry
 ** onRepoConfigDisableCollaboratorsOnlyAuditEntry
 ** onRepoConfigDisableContributorsOnlyAuditEntry
 ** onRepoConfigDisableSockpuppetDisallowedAuditEntry
 ** onRepoConfigEnableAnonymousGitAccessAuditEntry
 ** onRepoConfigEnableCollaboratorsOnlyAuditEntry
 ** onRepoConfigEnableContributorsOnlyAuditEntry
 ** onRepoConfigEnableSockpuppetDisallowedAuditEntry
 ** onRepoConfigLockAnonymousGitAccessAuditEntry
 ** onRepoConfigUnlockAnonymousGitAccessAuditEntry
 ** onRepoCreateAuditEntry
 ** onRepoDestroyAuditEntry
 ** onRepoRemoveMemberAuditEntry
 ** onRepoRemoveTopicAuditEntry
 ** onRepositoryVisibilityChangeDisableAuditEntry
 ** onRepositoryVisibilityChangeEnableAuditEntry
 ** onTeamAddMemberAuditEntry
 ** onTeamAddRepositoryAuditEntry
 ** onTeamChangeParentTeamAuditEntry
 ** onTeamRemoveMemberAuditEntry
 ** onTeamRemoveRepositoryAuditEntry
 ** onVerifiableDomain
 ** onIpAllowListEntry
 ** onOrganizationIdentityProvider
 ** onExternalIdentity
 ** onEnterpriseServerInstallation
 ** onEnterpriseServerUserAccount
 ** onEnterpriseServerUserAccountEmail
 ** onEnterpriseServerUserAccountsUpload
 ** onEnterpriseRepositoryInfo
 ** onEnterpriseAdministratorInvitation
 ** onRepositoryInvitation
 ** onEnterpriseIdentityProvider
 ** onMarketplaceCategory
 ** onMarketplaceListing
 ** onBlob
 ** onPackageTag
 ** onTag
 */

export const Node = (id: string, fields: string) => `
  {
    node (id: "${id}") {
      id
      ${fields}
    }
  }
`;

/**
 * @description Github Graphql Query for MarketplaceListings
 * @fields
 ** MarketplaceListings
 */

export const MarketplaceListingsQuery = (fields: string) => `
  {
      ${fields}
  }
`;

/**
 * @description Github Graphql Query for MarketplaceListing
 * @fields
 ** MarketplaceListing
 */

export const MarketplaceListingQuery = (slug: string, fields: string) => `
 {
   marketplaceListing(slug: "${slug}") {
     ${fields}
   }
 }
`;
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

export const MarketplaceCategory = (slug: string, fields: string, useTopicAliases?: boolean) => `
 {
   marketplaceCategory(slug: "${slug}", ${useTopicAliases ? `useTopicAliases: ${useTopicAliases}` : ""}) {
     ${fields}
   }
 }
`;

/**
 * @description Github Graphql Query for MarketplaceCategories
 * @queryVariable
 ** excludeEmpty boolean
 ** excludeSubcategories boolean
 ** includeCategories string
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

export const MarketplaceCategoriesQuery = (params: queryVariables.MarketplaceCategoriesQuery) => `
  {
    marketplaceCategories ${
        params.excludeEmpty || params.excludeSubcategories || params.includeCategories
            ? `(${params.excludeEmpty ? `excludeEmpty: ${params.excludeEmpty},` : ""} ${
                  params.excludeSubcategories ? `excludeSubcategories: ${params.excludeSubcategories},` : ""
              }
    ${params.includeCategories ? `includeCategories: "${params.includeCategories}",` : ""})`
            : ""
    } {
      ${params.fields}
    }
  }
`;
/**
 * @description Github Graphql Query for LicensesQuery
 * @fields
 ** Licenses
 */

export const LicensesQuery = (fields: string) => `
  {
    ${fields}
  }
`;
/**
 * @description Github Graphql Query for LicenseQuery
 * @fields
 * License
 */

export const LicenseQuery = (fields: string) => `
  {
    ${fields}
  }
`;
/**
 * @description Github Graphql Query for CodeOfConduct
 * @fields
 ** CodeOfConduct
 */

export const CodeOfConductQuery = (fields: string) => `
  {
    ${fields}
  }
`;

/**
 * @description Github Graphql Query for EnterpriseAdministratorInvitation
 * @fields
 ** EnterpriseAdministratorInvitation
 */

export const EnterpriseAdministratorInvitationQuery = (fields: string) => `
  {
    ${fields}
  }
 `;

/**
 * @description Github Graphql Query for EnterpriseAdministratorInvitationByToken
 * @fields
 ** EnterpriseAdministratorInvitationByToken
 */

export const EnterpriseAdministratorInvitationByTokenQuery = (fields: string) => `
  {
    ${fields}
  }
 `;

/**
 * @description Github Graphql Query EnterpriseQuery
 * @fields
 ** Enterprise
 */

export const EnterpriseQuery = (fields: string) => `
    {
      ${fields}
    }
 `;

/**
 * @description Github Graphql Query for CodesOfConductQuery
 * @fields
 * CodesOfConduct
 */

export const CodesOfConductQuery = (fields: string) => `
 {
   ${fields}
 }
`;
