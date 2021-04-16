import { PageInfo } from "./types";

export declare interface BasicFields {
    first: number;
    last?: number;
    after?: string;
    before?: string;
    fields?: string;
    pageInfo?: PageInfo;
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

export declare interface Repository {
    repositoryOwner?: string;
    repositoryName?: string;
}
export declare interface RepositoryContent {
    repositoryOwner?: string;
    repositoryName?: string;
}

export declare interface CustomFields {
    dependencyEcosystem?: "RUBYGEMS" | "NPM" | "PIP" | "MAVEN" | "NUGET" | "COMPOSER"
    onlyDependencies?: boolean;
    orgLoginForDependencies?: string;
}

export declare interface VulnerabilitiesFields extends BasicFields {
    orderBy?: "UPDATED_AT";
    ecosystem?: "NPM" | "RUBYGEMS" | "MAVEN" | "COMPOSER" | "NUGET" | "PIP";
    severities?: "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
    direction?: "DESC" | "ASC"
}


export declare interface SecurityAdvisoriesFields extends BasicFields {
    type?: "CVE" | "GHSA"
    value?: string;
    orderBy?: "PUBLISHED_AT" | "UPDATED_AT"
    publishedSince?: string;
    updatedSince?: string;
}

export declare interface Reactions extends BasicFields {
    content?: string;
    orderBy?: "CREATED_AT";
    direction?: "ASC" | "DESC";
}

export declare interface LatestOpinionatedReviews extends BasicFields {
    writersOnly?: boolean;
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
