export declare interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
}

export declare interface BasicFields {
    first?: number;
    last?: number;
    after?: string;
    before?: string;
    fields?: string;
    pageInfo?: PageInfo;
}

export declare interface AdminFields extends BasicFields {
    query?: string;
    orderBy?: 'LOGIN' | 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
}

export declare interface EnterpriseServerInstallations extends BasicFields {
    connectedOnly?: boolean;
}

export declare interface UserAccounts extends BasicFields {
    connectedOnly?: boolean;
}

export declare interface Emails extends BasicFields {
    orderBy?: 'EMAIL';
    direction?: 'ASC' | 'DESC';
}

export declare interface IpAllowListEntries extends BasicFields {
    orderBy?: 'CREATED_AT' | 'ALLOW_LIST_VALUE';
    direction?: 'ASC' | 'DESC';
}

export declare interface Member extends BasicFields {
    orderBy?: 'CREATED_AT' | 'LOGIN';
    direction?: 'ASC' | 'DESC';
    value?: boolean;
}

export declare interface MembersCanCreateRepositoriesSettingOrganizations extends BasicFields {
    orderBy?: 'CREATED_AT' | 'LOGIN';
    direction?: 'ASC' | 'DESC';
    value?: 'ALL' | 'PRIVATE' | 'DISABLED';
}

export declare interface Collaborators extends BasicFields {
    login?: string;
    orderBy?: 'CREATED_AT' | 'LOGIN' | 'INVITEE_LOGIN';
    direction?: 'ASC' | 'DESC';
    query?: string;
    visibility?: 'PRIVATE' | 'PUBLIC' | 'INTERNAL';
    affiliation?: 'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER';
}

export declare interface Invitations extends BasicFields {
    login?: string;
    orderBy?: 'CREATED_AT' | 'LOGIN' | 'INVITEE_LOGIN';
    direction?: 'ASC' | 'DESC';
    query?: string;
    role?: 'OWNER' | 'BILLING_MANAGER';
    visibility?: 'PUBLIC' | 'PRIVATE';
}

export declare interface AssignableUsers extends BasicFields {
    affiliations?: 'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER';
    ownerAffiliations?: 'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER';
    isFork?: boolean;
    isLocked?: boolean;
    privacy?: 'PUBLIC' | 'PRIVATE';
}

export declare interface Query extends BasicFields {
    query?: string;
}

export declare interface Search extends BasicFields {
    type?: 'ISSUE' | 'REPOSITORY' | 'USER'
    query?: string;
}

export declare interface Packages extends BasicFields {
    repositoryId?: string;
    packageType?: 'NPM' | 'RUBYGEMS' | 'MAVEN' | 'DOCKER' | 'DEBIAN' | 'NUGET' | 'PYPI';
    names?: string;
    orderBy?: 'CREATED_AT';
}

export declare interface PinItems extends BasicFields {
    types?: 'REPOSITORY' | 'GIST' | 'ISSUE' | 'PROJECT' | 'PULL_REQUEST' | 'USER' | 'ORGANIZATION' | 'TEAM';
}

export declare interface Login extends BasicFields {
    orderBy?: 'LOGIN' | 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
}

export declare interface CommitContributionsByRepository extends BasicFields {
    orderBy?: 'OCCURRED_AT' | 'COMMIT_COUNT';
    direction?: 'ASC' | 'DESC';
}

export declare interface Contributions extends BasicFields {
    excludeFirst?: boolean;
    excludePopular?: boolean;
    direction?: 'ASC' | 'DESC';
    maxRepositories?: number;

}

export declare interface Projects extends BasicFields {
    excludeFirst?: boolean;
    excludePopular?: boolean;
    direction?: 'ASC' | 'DESC'
    orderBy?: 'UPDATED_AT' | 'CREATED_AT' | 'NAME'
    states?: 'OPEN' | 'CLOSED'
}

export declare interface SavedReplies extends BasicFields {
    orderBy?: 'UPDATED_AT';
    direction?: 'ASC' | 'DESC'
}

export declare interface StarredRepositories extends BasicFields {
    orderBy?: 'STARRED_AT';
    direction?: 'ASC' | 'DESC';
    isOverLimit?: boolean;
    ownedByViewer?: boolean
}

export declare interface TopRepositories extends BasicFields {
    direction?: 'ASC' | 'DESC';
    orderBy?: 'CREATED_AT' | 'UPDATED_AT' | 'PUSHED_AT' | 'NAME' | 'STARGAZERS';
    since?: string;
}

export declare interface Watching extends BasicFields {
    direction?: 'ASC' | 'DESC';
    ownerAffiliations?: 'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER';
    orderBy?: 'CREATED_AT' | 'UPDATED_AT' | 'PUSHED_AT' | 'NAME' | 'STARGAZERS';
    isLocked?: boolean;
    privacy?: 'PUBLIC' | 'PRIVATE';
}

export declare interface AuditLog extends BasicFields {
    query?: string;
    orderBy?: 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
}

export declare interface Sponsorables extends BasicFields {
    dependencyEcosystem?: 'RUBYGEMS' | 'NPM' | 'PIP' | 'MAVEN' | 'NUGET' | 'COMPOSER'
    onlyDependencies?: boolean;
    orgLoginForDependencies?: string;
    orderBy?: 'LOGIN';
    direction?: 'ASC' | 'DESC'
}

export declare interface Repositories extends BasicFields {
    affiliations?: 'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER';
    ownerAffiliations?: 'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER';
    isFork?: boolean;
    isLocked?: boolean;
    privacy?: 'PUBLIC' | 'PRIVATE';
    orderBy?: 'CREATED_AT'
    direction?: 'ASC' | 'DESC';
}

export declare interface PullRequests extends BasicFields {
    states?: 'OPEN' | 'CLOSED' | 'MERGED';
    baseRefName?: string;
    headRefName?: string;
    labels?: string;
    orderBy?: 'CREATED_AT' | 'UPDATED_AT' | 'COMMENTS';
    direction?: 'ASC' | 'DESC';

}

export declare interface Labels extends BasicFields {
    orderBy?: 'CREATED_AT' | 'NAME'
    direction?: 'ASC' | 'DESC';
}

export declare interface Issues extends BasicFields {
    orderBy?: 'CREATED_AT' | 'UPDATE_AT' | 'COMMENTS'
    direction?: 'ASC' | 'DESC';
    state?: 'OPEN' | 'CLOSED';
    labels?: string;
    filterBy?: { assignee: string, createdBy: string, labels: string, mentioned: string, milestone: string, since: string, states: 'OPEN' | 'CLOSED', viewerSubscribed: boolean }
}

export declare interface Deployments extends BasicFields {
    direction?: 'ASC' | 'DESC';
    orderBy?: 'CREATED_AT';
    environments?: string;
    deployment?: string;
}

export declare interface History extends BasicFields {
    author?: { emails: string, id: string };
    since?: string;
    until?: string;
    path?: string;
}

export declare interface CheckRuns extends BasicFields {
    filterBy?: { appId: number, checkName: string, checkType: 'ALL' | 'LATEST', status: 'QUEUED' | 'IN_PROGRESS' | 'COMPLETED' | 'COMPLETED' | 'WAITING' | 'REQUESTED' }
}

export declare interface Milestones extends BasicFields {
    direction?: 'ASC' | 'DESC';
    orderBy?: 'DUE_DATE' | 'CREATED_AT' | 'UPDATED_AT' | 'NUMBER';
    state?: 'OPEN' | 'CLOSED';
    query?: string
}

export declare interface Timeline extends BasicFields {
    since?: string;
}

export declare interface TimelineItems extends BasicFields {
    since?: string;
    skip?: number;
    itemTypes?: 'PULL_REQUEST_COMMIT' | 'PULL_REQUEST_COMMIT_COMMENT_THREAD' | 'PULL_REQUEST_REVIEW' | 'PULL_REQUEST_REVIEW_THREAD' | 'PULL_REQUEST_REVISION_MARKER' | 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT' | 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT' |
    'AUTO_MERGE_DISABLED_EVENT' | 'AUTO_MERGE_ENABLED_EVENT' | 'AUTO_REBASE_ENABLED_EVENT' | 'AUTO_SQUASH_ENABLED_EVENT' | 'BASE_REF_CHANGED_EVENT' | 'BASE_REF_FORCE_PUSHED_EVENT' | 'BASE_REF_DELETED_EVENT' | 'DEPLOYED_EVENT' | 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT' |
    'HEAD_REF_DELETED_EVENT' | 'HEAD_REF_FORCE_PUSHED_EVENT' | 'HEAD_REF_RESTORED_EVENT' | 'MERGED_EVENT' | 'REVIEW_DISMISSED_EVENT' | 'REVIEW_REQUESTED_EVENT' | 'REVIEW_REQUEST_REMOVED_EVENT' | 'READY_FOR_REVIEW_EVENT' | 'CONVERT_TO_DRAFT_EVENT' |
    'ISSUE_COMMENT' | 'CROSS_REFERENCED_EVENT' | 'ADDED_TO_PROJECT_EVENT' | 'ASSIGNED_EVENT' | 'CLOSED_EVENT' | 'COMMENT_DELETED_EVENT' | 'CONNECTED_EVENT' | 'CONVERTED_NOTE_TO_ISSUE_EVENT' | 'DEMILESTONED_EVENT' | 'DISCONNECTED_EVENT' | 'LABELED_EVENT' |
    'LOCKED_EVENT' | 'MARKED_AS_DUPLICATE_EVENT' | 'MENTIONED_EVENT' | 'MILESTONED_EVENT' | 'MOVED_COLUMNS_IN_PROJECT_EVENT' | 'PINNED_EVENT' | 'REFERENCED_EVENT' | 'REMOVED_FROM_PROJECT_EVENT' | 'RENAMED_TITLE_EVENT' | 'REOPENED_EVENT' | 'SUBSCRIBED_EVENT' | 'TRANSFERRED_EVENT' |
    'UNASSIGNED_EVENT' | 'UNLABELED_EVENT' | 'UNLOCKED_EVENT' | 'USER_BLOCKED_EVENT' | 'UNMARKED_AS_DUPLICATE_EVENT' | 'UNPINNED_EVENT' | 'UNSUBSCRIBED_EVENT'
}

export declare interface Cards extends BasicFields {
    archivedStates?: 'ARCHIVED' | 'NOT_ARCHIVED';
}

export declare interface ReleaseAssets extends BasicFields {
    name?: string;
}

export declare interface VulnerabilityAlerts extends BasicFields {
    direction?: 'ASC' | 'DESC';
    orderBy?: 'CREATED_AT';
    packageType?: 'NPM' | 'RUBYGEMS' | 'MAVEN' | 'DOCKER' | 'DEBIAN' | 'NUGET' | 'PYPI';
    repositoryId?: string;
    names?: string;

}

export declare interface Vulnerabilities extends BasicFields {
    ecosystem?: 'NPM' | 'RUBYGEMS' | 'MAVEN' | 'COMPOSER' | 'NUGET' | 'PIP';
    severities?: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
    orderBy?: 'UPDATED_AT';
    direction?: 'ASC' | 'DESC';

}

export declare interface Refs extends BasicFields {
    direction?: 'ASC' | 'DESC';
    orderBy?: 'TAG_COMMIT_DATE' | 'ALPHABETICAL';
    query?: string;
    refPrefix?: string;
}

export declare interface Releases extends BasicFields {
    orderBy?: 'CREATED_AT' | 'NAME';
    direction?: 'ASC' | 'DESC';

}

export declare interface Stargazers extends BasicFields {
    orderBy?: 'STARRED_AT'
    direction?: 'ASC' | 'DESC';
}

export declare interface Domains extends BasicFields {
    query?: string;
    orderBy?: 'DOMAIN' | 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
    isVerified?: boolean;
}

export declare interface MemberStatuses extends BasicFields {
    orderBy?: 'UPDATED_AT';
    direction?: 'ASC' | 'DESC';
}

export declare interface Item extends BasicFields {
    types?: 'REPOSITORY' | 'GIST' | 'ISSUE' | 'PROJECT' | 'PULL_REQUEST' | 'USER' | 'ORGANIZATION' | 'TEAM'
}

export declare interface Sponsorships extends BasicFields {
    orderBy?: 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
    includePrivate?: boolean;
}

export declare interface Tiers extends BasicFields {
    orderBy?: 'CREATED_AT' | 'MONTHLY_PRICE_IN_CENTS';
    direction?: 'ASC' | 'DESC';
}

export declare interface ChildTeams extends BasicFields {
    immediateOnly?: boolean;
    orderBy?: 'NAME';
    direction?: 'ASC' | 'DESC';
    userLogins?: string;
}

export declare interface Comments extends BasicFields {
    fromComment?: number;
    orderBy?: 'NUMBER';
    direction?: 'ASC' | 'DESC';
}

export declare interface Discussions extends BasicFields {
    orderBy?: 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
    isPinned?: boolean;
}

export declare interface SponsorshipsAsSponsor extends BasicFields {
    orderBy?: 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
}

export declare interface Members extends BasicFields {
    orderBy?: 'LOGIN' | 'IMMEDIATE';
    direction?: 'ASC' | 'DESC';
    membership?: 'IMMEDIATE' | 'CHILD_TEAM' | 'ALL';
    query?: string;
    role?: 'MAINTAINER' | 'MEMBER';
}

export declare interface Teams extends BasicFields {
    orderBy?: 'NAME';
    direction?: 'ASC' | 'DESC';
    ldapMapped?: boolean;
    privacy?: 'SECRET' | 'VISIBLE';
    query?: string;
    role?: 'ADMIN' | 'MEMBER';
    rootTeamsOnly?: boolean;
    userLogins?: string;
}

export declare interface MarketplaceListings extends BasicFields {
    adminId?: string;
    allStates?: boolean;
    categorySlug?: string;
    organizationId?: string;
    primaryCategoryOnly?: boolean;
    slugs?: boolean;
    useTopicAliases?: boolean;
    viewerCanAdmin?: boolean;
    withFreeTrialsOnly?: boolean;
}

export declare interface MarketplaceCategories {
    excludeEmpty?: boolean;
    excludeSubcategories?: boolean;
    includeCategories?: string;
    fields: string
}

export declare interface Repository {
    repositoryOwner?: string;
    repositoryName?: string;
}
export declare interface RepositoryContent {
    repositoryOwner?: string;
    repositoryName?: string;
}

export declare interface CustomFields {
    dependencyEcosystem?: 'RUBYGEMS' | 'NPM' | 'PIP' | 'MAVEN' | 'NUGET' | 'COMPOSER'
    onlyDependencies?: boolean;
    orgLoginForDependencies?: string;
}

export declare interface VulnerabilitiesFields extends BasicFields {
    orderBy?: 'UPDATED_AT';
    ecosystem?: 'NPM' | 'RUBYGEMS' | 'MAVEN' | 'COMPOSER' | 'NUGET' | 'PIP';
    severities?: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
    direction?: 'DESC' | 'ASC'
}

export declare interface SecurityAdvisoriesFields extends BasicFields {
    type?: 'CVE' | 'GHSA'
    value?: string;
    orderBy?: 'PUBLISHED_AT' | 'UPDATED_AT'
    publishedSince?: string;
    updatedSince?: string;
}

export declare interface Reactions extends BasicFields {
    content?: string;
    orderBy?: 'CREATED_AT';
    direction?: 'ASC' | 'DESC';
}

export declare interface LatestOpinionatedReviews extends BasicFields {
    writersOnly?: boolean;
}

export declare interface RepositoryDirectories {
    repositoryOwner: string;
    repositoryName: string;
}

export declare interface Branches {
    repositoryOwner: string;
    repositoryName: string;
    first?: number;
    after?: string;
    before?: string;
    last?: number;
    refPrefix?: string;
}

export declare interface BranchContent {
    repositoryOwner: string;
    repositoryName: string;
    qualifiedName: string;
}

export declare interface BranchDirectories {
    repositoryOwner: string;
    repositoryName: string;
    qualifiedName: string;
}

export declare interface CommitDirectories {
    repositoryOwner: string;
    repositoryName: string;
    expression: string;
}

export declare interface CommitContent {
    repositoryOwner: string;
    repositoryName: string;
    expression: string;
}

export declare interface Branch {
    repositoryOwner: string;
    repositoryName: string;
    qualifiedName: string;
}

export declare interface Commit {
    repositoryOwner: string;
    repositoryName: string;
    expression: string;
}

export declare interface CodeOfConduct {
    key: string;
}

export declare interface ViewerFollowers {
    after?: string;
    before?: string;
    first?: number;
    last?: number;
}

export declare interface User {
    username: string;
}

export declare interface UserCommitComments {
    username: string;
    after?: string;
    before?: string;
    first?: number;
    last?: number;
}

export declare interface UserIssues {
    username: string;
    before?: string;
    after?: string;
    filterBy?: string;
    first?: number;
    last?: number;
    orderBy?: string;
    includeNotificationContexts?: boolean;
}

export declare interface EnterpriseAdministratorInvitation {
    enterpriseSlug?: string;
    role?: 'OWNER' | 'BILLING_MANAGER';
    userLogin?: string;
    fields: string;
}

export declare interface Enterprise{
    invitationToken?: string;
    slug?: string;
    fields: string;
}
