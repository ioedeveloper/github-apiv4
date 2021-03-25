import { PageInfo } from "./types";

export declare interface BasicFields {
    first: number;
    last?: number;
    after?: string;
    before?: string;
    fields?: string;
    pageInfo?: PageInfo;
}
export declare interface BasicFieldsWithOrder {
    first: number;
    last?: number;
    after?: string;
    before?: string;
    orderBy?: string;
    direction?: "ASC" | "DESC";
    fields?: string;
    pageInfo?: string;

}
export declare interface BasicFieldsWithOrderAndQuery {
    first: number;
    last?: number;
    after?: string;
    before?: string;
    orderBy?: string;
    direction?: "ASC" | "DESC";
    query?: string;
    fields: string;
    pageInfo?: string;
}

export declare interface CustomFields {
    first?: number;
    last?: number;
    after?: string;
    before?: string;
    orderBy?: string;
    direction?: "ASC" | "DESC";
    query?: string;
    fields: string;
    pageInfo?: string;
    connectedOnly?: boolean;
    value?: string;
    booleanValue?: boolean;
    visibility?: string;
    excludeFirst?: boolean;
    excludePopular?: boolean;
    maxRepositories?: number;
    repositoryId?: string;
    packageType?: "NPM" | "RUBYGEMS" | "MAVEN" | "DOCKER" | "DEBIAN" | "NUGET" | "PYPI";
    names?: string;
    types?: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM";
    states?: "OPEN" | "CLOSED"
    search?: string;
    contributionTypes?: "COMMIT" | "ISSUE" | "PULL_REQUEST" | "REPOSITORY" | "PULL_REQUEST_REVIEW"
    includeUserRepositories?: boolean;
    isLocked?: boolean;
    privacy?: "PUBLIC" | "PRIVATE";
    ownedByViewer?: boolean;
    ownerAffiliations?: "OWNER" | "COLLABORATOR" | "ORGANIZATION_MEMBER"
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
