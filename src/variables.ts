import { PageInfo } from "./types";

export declare interface BasicFields {
    first: number;
    last?: number;
    after?: string;
    before?: string;
    fields?: string;
    pageInfo?: PageInfo;
}

export declare interface AuditLog extends BasicFields {
    query?: string;
    orderBy?: "CREATED_AT";
    direction?: "ASC" | "DESC";
}

export declare interface Domains extends BasicFields {
    query?: string;
    orderBy?: "DOMAIN" | "CREATED_AT";
    direction?: "ASC" | "DESC";
    isVerified?: boolean;
}

export declare interface IpAllowListEntries extends BasicFields {
    orderBy?: "ALLOW_LIST_VALUE" | "CREATED_AT";
    direction?: "ASC" | "DESC";
}

export declare interface MemberStatuses extends BasicFields {
    orderBy?: "UPDATED_AT";
    direction?: "ASC" | "DESC";
}

export declare interface Item extends BasicFields {
    types?: "REPOSITORY" | "GIST" | "ISSUE" | "PROJECT" | "PULL_REQUEST" | "USER" | "ORGANIZATION" | "TEAM" 
}

export declare interface Sponsorships extends BasicFields {
    orderBy?: "CREATED_AT";
    direction?: "ASC" | "DESC";
    includePrivate?: boolean;
}


export declare interface Tiers extends BasicFields {
    orderBy?: "CREATED_AT" | "MONTHLY_PRICE_IN_CENTS";
    direction?: "ASC" | "DESC";
}

export declare interface ChildTeams extends BasicFields {
    immediateOnly?: boolean;
    orderBy?: "NAME";
    direction?: "ASC" | "DESC";
    userLogins?: string; 
}

export declare interface Comments extends BasicFields {
    fromComment?: number;
    orderBy?: "NUMBER";
    direction?: "ASC" | "DESC";
}

export declare interface Discussions extends BasicFields {
    orderBy?: "CREATED_AT";
    direction?: "ASC" | "DESC";
    isPinned?: boolean;
}

export declare interface SponsorshipsAsSponsor extends BasicFields {
    orderBy?: "CREATED_AT";
    direction?: "ASC" | "DESC";
}

export declare interface Members extends BasicFields {
    orderBy?: "LOGIN" | "IMMEDIATE";
    direction?: "ASC" | "DESC";
    membership?: "IMMEDIATE" | "CHILD_TEAM" | "ALL";
    query?: string;
    role?: "MAINTAINER" | "MEMBER";
}

export declare interface Teams extends BasicFields {
    orderBy?: "NAME";
    direction?: "ASC" | "DESC";
    ldapMapped?: boolean;
    privacy?: "SECRET" | "VISIBLE";
    query?: string;
    role?: "ADMIN" | "MEMBER";
    rootTeamsOnly?: boolean;
    userLogins?: string;
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
