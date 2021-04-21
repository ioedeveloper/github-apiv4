import { PageInfo } from './types'

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
    orderBy?: "LOGIN" | "CREATED_AT";
    direction?: "ASC" | "DESC";
}

export declare interface EnterpriseServerInstallations extends BasicFields {
    connectedOnly?: boolean;
}

export declare interface UserAccounts extends BasicFields {
    connectedOnly?: boolean;
}

export declare interface Emails extends BasicFields {
    orderBy?: "EMAIL";
    direction?: "ASC" | "DESC";
}

export declare interface IpAllowListEntries extends BasicFields {
    orderBy?: "CREATED_AT" | "ALLOW_LIST_VALUE";
    direction?: "ASC" | "DESC";
}

export declare interface Member extends BasicFields {
    orderBy?: "CREATED_AT" | "LOGIN";
    direction?: "ASC" | "DESC";
    value?: boolean;
}

export declare interface MembersCanCreateRepositoriesSettingOrganizations extends BasicFields {
    orderBy?: "CREATED_AT" | "LOGIN";
    direction?: "ASC" | "DESC";
    value?: "ALL" | "PRIVATE" | "DISABLED";
}

export declare interface Collaborators extends BasicFields {
    login?: string;
    orderBy?: "CREATED_AT" | "LOGIN" | "INVITEE_LOGIN";
    direction?: "ASC" | "DESC";
    query?: string;
    visibility?: "PRIVATE" | "PUBLIC" | "INTERNAL";
}

export declare interface Invitations extends BasicFields {
    login?: string;
    orderBy?: "CREATED_AT" | "LOGIN" | "INVITEE_LOGIN";
    direction?: "ASC" | "DESC";
    query?: string;
    role?: "OWNER" | "BILLING_MANAGER";
    visibility?: "PUBLIC" | "PRIVATE";
}

export declare interface AssignableUsers extends BasicFields {
    affiliations?: "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER";
    ownerAffiliations?: "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER";
    isFork?: boolean;
    isLocked?: boolean;
    privacy?: "PUBLIC" | "PRIVATE";
}

export declare interface Query extends BasicFields {
    query: string;
}

export declare interface Packages extends BasicFields {
    repositoryId?: string;
    packageType?: 'NPM' | 'RUBYGEMS' | 'MAVEN' | 'DOCKER' | 'DEBIAN' | 'NUGET' | 'PYPI';
    names?: string;
    orderBy?: "CREATED_AT";
}

export declare interface PinItems extends BasicFields {
    types?: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM";
}

export declare interface Login extends BasicFields {
    orderBy?: "LOGIN" | "CREATED_AT";
    direction?: "ASC" | "DESC";
}

export declare interface CommitContributionsByRepository extends BasicFields {
    orderBy?: "OCCURRED_AT" | "COMMIT_COUNT";
    direction?: "ASC" | "DESC";
}

export declare interface Contributions extends BasicFields {
    excludeFirst?: boolean;
    excludePopular?: boolean;
    direction?: "ASC" | "DESC";
    maxRepositories?: number;

}

export declare interface Projects extends BasicFields {
    excludeFirst?: boolean;
    excludePopular?: boolean;
    direction?: "ASC" | "DESC"
    orderBy?: "UPDATED_AT" | "CREATED_AT" | "NAME"
    states?: "OPEN" | "CLOSED"
}

export declare interface SavedReplies extends BasicFields {
    orderBy?: "UPDATED_AT";
    direction?: "ASC" | "DESC"
}

export declare interface StarredRepositories extends BasicFields {
    orderBy?: "STARRED_AT";
    direction?: "ASC" | "DESC";
    isOverLimit?: boolean;
    ownedByViewer?: boolean
}

export declare interface TopRepositories extends BasicFields {
    direction?: "ASC" | "DESC";
    orderBy: "CREATED_AT" | "UPDATED_AT" | "PUSHED_AT" | "NAME" | "STARGAZERS";
    since: string;
}

export declare interface Watching extends BasicFields {
    direction?: "ASC" | "DESC";
    ownerAffiliations: "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER";
    orderBy: "CREATED_AT" | "UPDATED_AT" | "PUSHED_AT" | "NAME" | "STARGAZERS";
    isLocked: boolean;
    privacy: "PUBLIC" | "PRIVATE";
}
export declare interface Repository {
    repositoryOwner: string;
    repositoryName: string;
}
export declare interface RepositoryContent {
    repositoryOwner: string;
    repositoryName: string;
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

export declare interface Repositories {
    username: string;
    affiliations?: string;
    after?: string;
    before?: string;
    first?: number;
    isFork?: boolean;
    isLocked?: boolean;
    last?: number;
    orderBy?: string;
    privacy?: string;
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
