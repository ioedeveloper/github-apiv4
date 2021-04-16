
export declare interface Viewer {
    viewer: UserInfo;
}

export declare interface UserInfo {
    anyPinnableItems: boolean;
    avatarUrl: string;
    bio: string;
    bioHTML: string;
    commitComments: UserCommitContents;
    company: string;
    companyHTML: string;
    contributionCollection: any;
    createdAt: string;
    databaseId: number;
    email: string;
    followers: Followers;
    following: Following;
    gist: Commit;
    gistComments: Comments;
    gists: Commit[];
    hasSponsorsListing: boolean;
    hovercard: HoverCard;
    id: number;
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isEmployee: boolean;
    isSponsoredBy: boolean;
    isSponsoringViewer: boolean;
    isHireable: boolean;
    isViewer: boolean;
    isssueComments: Comments;
    issues: Issue[]
    itemShowcase: {
        hasPinnedItems: boolean;
        items: Items;
    }
    location: string;
    login: string;
    name: string;
    organization: OrganizationInfo | string;
    organizationVerifiedDomainEmails: string[];
    organizations: Organizations;
    packages: Packages;
    pinnableItems: ItemShowcase
    pinnedItems: ItemShowcase;
    pinnedItemsRemaining: number;
    url: string;
    project: Project;
    projects: {
        edges: {
            cursor: string;
            node: Package;
        }];
        nodes: [Package];
        pageInfo: PageInfo;
        totalCount: number;
    }
    pinnableItems: Items;
    pinnedItems: Items;
    pinnedItemsRemaining: number;
    url: string;
    project: Project;
    projects: Projects;
    projectsResourcePath: string;
    projectsUrl: string;
    publicKeys: {
        edges: {
            cursor: string;
            node: {
                accessedAt: string
                createdAt: string
                fingerprint: string
                id: string;
                isReadOnly: boolean
                key: string
                updatedAt: string
            };
        }]
        nodes: [{
            accessedAt: string
            createdAt: string
            fingerprint: string
            id: string;
            isReadOnly: boolean
            key: string
            updatedAt: string
        }]
        pageInfo: PageInfo;
        totalCount: number;
    }
    pullRequests: {
        edges: {
            cursor: string,
            node: PullRequest
        }]
        nodes: [PullRequest]
        pageInfo: PageInfo;
        totalCount: number;
    }
    repositories: Repositories;
    repositoriesContributedTo: {
        edges: {
            cursor: string,
            node: RepositoryInfo
        }[]
        nodes: RepositoryInfo[]
        pageInfo: PageInfo;
        totalCount: number;
        totalDiskUsage: number;
    }
    repository: RepositoryInfo;
    resourcePath: string;
    savedReplies: {
        edges: {
            cursor: string,
            node: Reply
        }[]
        nodes: Reply[]
        pageInfo: PageInfo;
        totalCount: number;
    }
    sponsorsListing: SponsorsListing;
    sponsorshipForViewerAsSponsor: SponsorshipForViewerAsSponsor;
    sponsorshipsAsMaintainer: SponsorshipsAsMaintainer
    sponsorshipsAsSponsor: SponsorshipsAsSponsor;
    starredRepositories: {
        edges: {
            cursor: string;
            node: RepositoryInfo;
        }[]
        nodes: Repository[];
        pageInfo: PageInfo;
        isOverLimit: boolean;
        totalCount: number;
    }
    status: {
        createdAt: string;
        emoji: string;
        emojiHTML: string;
        expiresAt: string;
        id: number;
        indicatesLimitedAvailability: boolean;
        message: string;
        organization: OrganizationInfo;
        updatedAt: string;
        user: User
    }
    topRepositories: {
        edges: {
            cursor: string;
            node: RepositoryInfo;
        }[]
        nodes: RepositoryInfo[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    twitterUsername: string;
    updatedAt: string;
    viewerCanChangePinnedItems: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanFollow: boolean
    viewerCanSponsor: boolean
    viewerIsFollowing: boolean
    viewerIsSponsoring: boolean
    watching: {
        edges: {
            cursor: string;
            node: RepositoryInfo;
        }[]
        nodes: RepositoryInfo[];
        pageInfo: PageInfo;
        totalCount: number;
    };
    websiteUrl: string;
}

export declare interface FileEntries {
    name: string;
    type: string;
    child?: {
        entries: [];
    };
}

export declare interface FileEntriesContent {
    name: string;
    type: string;
    child: {
        text?: Blob;
        entries?: FileEntriesContent[];
    };
}

export declare interface File {
    extension: string;
    isGenerated: boolean;
    mode: number;
    name: string;
    object: Target;
    oid: string;
    path: string;
    repository: RepositoryInfo;
    submodule: {
        branch: string;
        gitUrl: string;
        name: string;
        path: string;
        subprojectCommitOid: string;
    }
    type: string;
    encodedName: string;
    encoding: string;
    isImage: boolean;
    isTruncated: boolean;
    language: {
        color: string
        id: number;
        name: string;
    }
    size: number;
    text: string;
}

export declare interface RepositoryInfoContent {
    repository: null | {
        defaultBranchRef: {
            target: {
                files: {
                    entries: FileEntriesContent[];
                };
            };
        };
    };
}

export declare interface RepositoryInfoDirectories {
    repository: null | {
        defaultBranchRef: {
            target: {
                files: {
                    entries: FileEntries[];
                };
            };
        };
    };
}

export declare interface Branches {
    repository: null | {
        branches: null | {
            edges: {
                node: {
                    id: number;
                    name: string;
                    prefix: string;
                };
                cursor: string;
            }[];
            pageInfo: {
                endCursor: string;
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
            }
            totalCount: number;
        };
    };
}

export declare interface BranchContent {
    repository: null | {
        branch: null | {
            target: {
                files: {
                    entries: FileEntriesContent[];
                };
            };
        };
    };
}

export declare interface BranchDirectories {
    repository: null | {
        branch: null | {
            target: {
                files: {
                    entries: FileEntries[];
                };
            };
        };
    };
}
export declare interface Repository {
    repository: RepositoryInfo
}
export declare interface RepositoryInfo {
    assignableUsers: AssignableUsers;
    branchProtectionRules: BranchProtectionRules;
    codeOfConduct: CodeOfConduct;
    collaborators: Collaborators;
    commitComments: CommitComments;
    contactLinks: {
        about: string;
        name: string;
        url: string
    }[]
    createdAt: string;
    databaseId: number;
    description: string;
    descriptionHTML: string;
    diskUsage: number;
    forkCount: number;
    forks: Forks;
    fundingLinks: {
        platform: string;
        url: string
    }[]
    hasIssuesEnabled: boolean;
    hasProjectsEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageUrl: string;
    id: number;
    isArchived: boolean;
    isBlankIssuesEnabled: boolean;
    isEmpty: boolean;
    isDisabled: boolean;
    isInOrganization: boolean;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    isSecurityPolicyEnabled: boolean;
    isTemplate: boolean;
    lockReason: string;
    mergeCommitAllowed: boolean;
    mirrorUrl: string;
    name: string;
    nameWithOwner: string;
    openGraphImageUrl: string;
    owner: Owner;
    packages: Packages;
    parent: RepositoryInfo;
    pinnedIssues: PinnedIssues;
    primaryLanguage: {
        color: string;
        id: string;
        name: string;
    }
    project: Project;
    projects: Projects;
    projectsResourcePath: string;
    projectsUrl: string;
    pullRequest: PullRequest;
    pullRequests: PullRequests;
    pushedAt: string;
    rebaseMergeAllowed: boolean;
    ref: Ref;
    refs: Refs;
    release: Release;
    releases: Releases;
    repositoryTopics: Topics;
    resourcePath: string;
    securityPolicyUrl: string;
    shortDescriptionHTML: string;
    squashMergeAllowed: boolean;
    sshUrl: string;
    stargazerCount: number;
    stargazers: Stargazers;
    submodules: Submodules;
    tempCloneToken: string;
    updatedAt: string;
    url: string;
    usesCustomOpenGraphImage: boolean;
    viewerCanAdminister: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdateTopics: boolean;
    viewerDefaultCommitEmail: string;
    viewerDefaultMergeMethod: string;
    viewerHasStarred: boolean;
    viewerPermission: string;
    viewerPossibleCommitEmails: [];
    viewerSubscription: string;
    vulnerabilityAlerts: VulnerabilityAlerts;

}
export declare interface Collaborators {
    edges: {
        node: UserInfo;
        cursor: string;
    }[];
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface VulnerabilityAlert {
    createdAt: string;
    dismissReason: string;
    dismissedAt: string;
    dismisser: UserInfo;
    id: number;
    repository: RepositoryInfo;
    securityAdvisory: SecurityAdvisory;
    securityVulnerability: Vulnerability;
    vulnerableManifestFilename: string;
    vulnerableManifestPath: string;
    vulnerableRequirements: string;
}

export declare interface VulnerabilityAlerts {
    edges: {
        node: VulnerabilityAlert;
        cursor: string;
    }[];
    nodes: VulnerabilityAlert[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface SecurityAdvisory {
    cvss: {
        score: number;
        vectorString: string;
    }
    cwes: CWES;
    databaseId: number;
    description: string;
    ghsaId: string;
    id: number;
    identifiers: {
        type: string;
        value: string;
    }[]
    notificationsPermalink: string;
    origin: string;
    permalink: string;
    publishedAt: string;
    references: {
        url: string;
    }[]
    severity: string;
    summary: string;
    updatedAt: string;
    vulnerabilities: Vulnerabilities;
    withdrawnAt: string;
}

export declare interface Vulnerability {
    advisory: SecurityAdvisory;
    firstPatchedVersion: {
        identifier: string;
    }
    package: {
        ecosystem: string;
        name: string;
    }
    severity: string;
    updatedAt: string;
    vulnerableVersionRange: string;
}

export declare interface Vulnerabilities {
    edges: {
        node: Vulnerability;
        cursor: string;
    }[];
    nodes: Vulnerability;
    pageInfo: PageInfo;
    totalCount: number;
}
export declare interface CWE {
    cweId: string;
    description: string;
    id: number | string;
    name: string;
}

export declare interface CWES {
    edges: {
        node: {
            cweId: string;
            description: string;
            id: number;
            name: string;
        };
        cursor: string;
    }[];
    nodes: {
        cweId: string;
        description: string;
        id: number;
        name: string;
    }[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Topic {
    id: number;
    name: string;
    relatedTopics: Topic[];
    stargazerCount: number;
    stargazers: Stargazers;
    viewerHasStarred: boolean;
}

export declare interface Topics {
    edges: {
        node: {
            id: number;
            resourcePath: string;
            topic: Topic;
            url: string;
        };
        cursor: string;
    }[];
    nodes: {
        id: number;
        resourcePath: string;
        topic: Topic;
        url: string;
    }[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface CommitComments {
    edges: {
        node: Comment;
        cursor: string;
    }[];
    nodes: Comment[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Watchers {
    edges: {
        node: UserInfo;
        cursor: string;
    }[];
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}
export declare interface CommitDirectories {
    repository: null | {
        commit: null | {
            files: {
                entries: FileEntries[];
            };
        };
    };
}

export declare interface CommitContent {
    repository: null | {
        commit: null | {
            files: {
                entries: FileEntriesContent[];
            };
        };
    };
}

export declare interface Branch {
    associatedPullRequests: PullRequests;
    branchProtectionRule: BranchProtectionRule;
    id: number;
    name: string;
    prefix: string;
    refUpdateRule: RefUpdateRule;
    repository: RepositoryInfo;
    target: Target;
}

export declare interface Commit {
    repository: null | {
        commit: null | {
            authoredByCommitter: boolean;
            authoredDate: string;
            changedFiles: number;
            commitUrl: string;
            committedDate: string;
            committedViaWeb: boolean;
            deletions: number;
            id: number;
            message: string;
            messageBody: string;
            messageBodyHTML: string;
            messageHeadline: string;
            messageHeadlineHTML: string;
            oid: string;
            pushedDate: string;
            resourcePath: string;
            url: string;
        };
        cursor: string;
    }[];
    nodes: {
        commit: Commit;
        id: number;
        pullRequest: PullRequest;
        resourcePath: string;
        url: string;
    }[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface CodeOfConduct {
    codeOfConduct: null | {
        name: string;
        id: number;
        body: string;
        key: string;
        resourcePath: string;
        url: string;
    };
}

export declare interface Followers {
    edges: {
        node: UserInfo;
        cursor: string;
    }];
    nodes: [UserInfo];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Following {
    edges: {
        node: UserInfo;
        cursor: string;
    }];
    nodes: [UserInfo]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface User {
    user: UserInfo;
}

export declare interface Repositories {
    edges: {
        node: RepositoryInfo;
        cursor: string;
    }[];
    nodes: RepositoryInfo[]
    pageInfo: {
        endCursor: string;
        hasNextPage: string;
        hasPreviousPage: string;
        startCursor: string;
    }
    totalCount: number;
}

export declare interface Author {
    avatarUrl: string;
    login: string;
    resourcePath: string;
    url: string;
    user: UserInfo;
}

export declare interface Authors {
    edges: {
        cursor: string;
        node: Author;
    }[],
    nodes: Author[]
    pageInfo: PageInfo;
    totalCount: number;
}
export declare interface UserCommitContents {
    user: {
        commitComments: {
            edges: {
                cursor: string;
                node: {
                    author: Author;
                    authorAssociation: string;
                    body: string;
                    bodyHTML: string;
                    bodyText: string;
                    createdAt: string;
                    createdViaEmail: boolean;
                    databaseId: number;
                    editor: Author;
                    id: number;
                    includesCreatedEdit: boolean;
                    isMinimized: boolean;
                    lastEditedAt: string;
                    minimizedReason: string;
                    path: string;
                    position: number;
                    publishedAt: string;
                    resourcePath: string;
                    updatedAt: string;
                    url: string;
                    viewerCanDelete: boolean;
                    viewerCanMinimize: boolean;
                    viewerCanReact: boolean;
                    viewerCanUpdate: boolean;
                    viewerCannotUpdateReasons: string[];
                }
            }[] | [];
            pageInfo: PageInfo;
            totalCount: number;
        };
    };
}

export declare interface Issue {
    activeLockReason: string;
    author: Author;
    body: string;
    bodyHTML: string;
    bodyResourcePath: string;
    bodyText: string;
    bodyUrl: string;
    closed: boolean;
    closedAt: string;
    comments: Comments;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Author;
    hovercard: [{
        message: string;
        octicon: string;
    }];
    id: number;
    includesCreatedEdit: boolean;
    lastEditedAt: string;
    locked: boolean;
    milestone: Milestone;
    number: number;
    participants: {
        edges: {
            cursor: string;
            node: UserInfo;
        }[]
        nodes: UserInfo[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    projectCards: ProjectCards;
    publishedAt: string;
    reactionGroups: ReactionGroups[];
    repository: RepositoryInfo;
    resourcePath: string;
    state: string;
    timeline: Timeline;
    timelineItems: TimelineItems;
    title: string;
    updatedAt: string;
    url: string;
    userContentEdits: UserContentEdits;
    viewerCanReact: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: string[];
    viewerDidAuthor: boolean;
    viewerSubscription: string;
}

export declare interface Issues {
    edges: {
        cursor: string;
        node: Issue;
    }[];
    nodes: Issue[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface PinnedIssues {
    edges: {
        cursor: string;
        node: Issue;
    }[];
    nodes: Issue[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface ProjectCard {
    column: Column;
    content: Content;
    createdAt: string;
    creator: Owner;
    databaseId: number;
    id: number;
    isArchived: boolean;
    note: string;
    project: Project;
    resourcePath: string;
    state: string
    updatedAt: string;
    url: string;
}

export declare interface ProjectCards {
    edges: {
        cursor: string;
        node: ProjectCard;
    }[]
    nodes: ProjectCard[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface HoverCard {
    contexts: {
        message: string;
        GenericHovercardContext: {
            message: string;
            octicon: string;
        }
        OrganizationInfoTeamsHovercardContext: {
            message: string;
            octicon: string;
            relevantTeams: Team[]
        }
    }
}
export declare interface Team {
    ancestors: Teams;
    avatarUrl: string;
    childTeams: Teams
    combinedSlug: string;
    createdAt: string;
    databaseId: number;
    description: string;
    discussion: Discussion;
    discussions: Discussions;
    discussionsResourcePath: string;
    discussionsUrl: string;
    editTeamResourcePath: string;
    editTeamUrl: string;
    id: number;
    invitations: Invitations;
    memberStatuses: MemberStatuses;
    members: Members;
    membersResourcePath: string;
    membersUrl: string;
    name: string;
    newTeamResourcePath: string;
    newTeamUrl: string;
    organization: OrganizationInfo | string;
    parentTeam: Team;
    privacy: string;
    repositories: Repositories;
    repositoriesResourcePath: string;
    repositoriesUrl: string;
    resourcePath: string;
    slug: string;
    teamsResourcePath: string;
    teamsUrl: string;
    updatedAt: string;
    url: string;
    viewerCanAdminister: boolean;
    viewerCanSubscribe: boolean;
    viewerSubscription: string;
}

export declare interface Discussion {
    author: Owner;
    authorAssociation: string;
    body: string;
    bodyHTML: string;
    bodyText: string;
    bodyVersion: string;
    comments: Comments;
    commentsResourcePath: string;
    commentsUrl: string;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    discussion: Discussion;
    editor: Owner;
    id: number;
    includesCreatedEdit: boolean;
    isPinned: boolean;
    isPrivate: boolean;
    lastEditedAt: string;
    number: number;
    publishedAt: string;
    reactionGroups: ReactionGroups;
    reactions: Reactions;
    team: Team;
    title: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
    userContentEdits: UserContentEdits;
    viewerCanDelete: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: boolean;
    viewerDidAuthor: boolean;
}

export declare interface Owner extends EnterpriseUserAccount, Organization, UserInfo, Mannequin, Bot {
    avatarUrl: string;
    login: string;
    resourcePath: string;
    url: string;
    enterpriseUserAccount: EnterpriseUserAccount;
    organization: OrganizationInfo | string;
    user: UserInfo;
    mannequin: Mannequin;
    bot: Bot;

}


export declare interface EnterpriseUserAccount {
    avatarUrl: string;
    createdAt: string;
    enterprise: Enterprise;
    id: number;
    login: string;
    name: string;
    organization: OrganizationInfo | string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Enterprise {
    avatarUrl: string;
    createdAt: string;
    billingInfo: BillingInfo;
    databaseId: number;
    description: string;
    descriptionHTML: string;
    id: string | number;
    location: string;
    members: Members;
    name: string;
    organizations: Organizations;
    ownerInfo: Owner;
    resourcePath: string;
    slug: string;
    url: string;
    userAccounts: UserAccounts | EnterpriseUserAccounts;
    viewerIsAdmin: string;
    websiteUrl: string;

}

declare interface UserAccounts {
    avatarUrl: string;
    createdAt: string;
    enterprise: Enterprise;
    id: string;
    login: string;
    name: string;
    organizations: Organizations;
    resourcePath: string;
    updatedAt: string;
    url: string;
    user: UserInfo;
}

export declare interface Organization {
    organization: OrganizationInfo;
}

export declare interface RateLimit {
    rateLimit: RateLimit;
}

export declare interface OrganizationInfo {
    anyPinnableItems: boolean;
    auditLog: AuditLog;
    avatarUrl: string;
    createdAt: string;
    databaseId: number;
    description: string;
    descriptionHTML: string;
    domains: Domains;
    email: string;
    hasSponsorsListing: boolean;
    id: number;
    interactionAbility: {
        expiresAt: string;
        limit: number;
        origin: string;
    }
    ipAllowListEnabledSetting: string;
    isSponsoredBy: boolean;
    isSponsoringViewer: boolean;
    isVerified: boolean;
    itemShowcase: {
        hasPinnedItems: boolean;
        items: Items;
    }
    location: string;
    login: string;
    memberStatuses: MemberStatuses;
    membersWithRole: MembersWithRole;
    name: string;
    newTeamResourcePath: string;
    newTeamUrl: string;
    notificationDeliveryRestrictionEnabledSetting: string;
    organizationBillingEmail: string;
    pendingMembers: PendingMembers;
    pinnableItems: Items;
    pinnedItems: Items;
    pinnedItemsRemaining: number;
    project: Project;
    projects: Projects;
    projectsResourcePath: string;
    projectsUrl: string;
    repositories: Repositories;
    repository: RepositoryInfo;
    requiresTwoFactorAuthentication: boolean;
    resourcePath: string;
    samlIdentityProvider: SamlIdentityProvider;
    sponsorsListing: SponsorsListing;
    sponsorshipForViewerAsSponsor: SponsorshipForViewerAsSponsor;
    sponsorshipsAsMaintainer: SponsorshipsAsMaintainer;
    sponsorshipsAsSponsor: SponsorshipsAsSponsor;
    team: Team;
    teams: Teams;
    teamsResourcePath: string;
    teamsUrl: string;
    twitterUsername: string;
    updatedAt: string;
    url: string;
    viewerCanAdminister: boolean;
    viewerCanChangePinnedItems: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanCreateRepositories: boolean;
    viewerCanCreateTeams: boolean;
    viewerCanSponsor: boolean;
    viewerIsAMember: boolean;
    viewerIsSponsoring: boolean;
    websiteUrl: string;
}

export declare interface Mannequin {
    avatarUrl: string;
    createdAt: string;
    databaseId: number;
    email: string;
    id: number;
    login: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Bot {
    avatarUrl: string;
    createdAt: string;
    databaseId: number;
    id: number;
    login: string;
    resourcePath: string
    updatedAt: string;
    url: string;
}

export declare interface ReactionGroup {
    content: Content;
    createdAt: string;
    reactionGroups: ReactionGroup[]
    viewerCanReact: boolean;
    issue: Issue;
    pullRequest: PullRequest;
    teamDiscussion: Discussion;
    teamDiscussionComment: Discussion;
    commitComment: CommitComment;
    issueComment: IssueComment;
    pullRequestReview: PullRequestReview;
    pullRequestReviewComment: PullRequestReviewComment;
    users: User[]
    viewerHasReacted: boolean
}

export declare interface Reaction {
    content: Content;
    createdAt: string;
    databaseId: string
    id: number;
    reactable: string;
}

export declare interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
}

export declare interface PullRequest {
}

export declare interface CommitComment {

}

export declare interface IssueComment {

}

export declare interface PullRequestReview {

}

export declare interface PullRequestReviewComment {

}

export declare interface Fork {

}

export declare interface Gist {
    comments: Comments;
    createdAt: string;
    description: string;
    files: File[];
    forks: Fork[];
    id: number;
    isFork: boolean;
    isPublic: boolean;
    name: string;
    owner: Owner;
    pushedAt: string;
    resourcePath: string;
    stargazerCount: number;
    stargazers: Stargazers;
    updatedAt: string;
    url: string;
    viewerHasStarred: boolean;
}

export declare interface GistComments {
    edges: {
        cursor: string;
        node: Comment;
    }[]
    nodes: Comment[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Stargazers {
    edges: {
        cursor: string;
        node: UserInfo;
    }[]
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Release {
    creator: Owner;
    createdAt: string;
    description: string;
    descriptionHTML: string;
    id: number;
    isDraft: boolean;
    isLatest: boolean;
    isPrerelease: boolean;
    name: string;
    publishedAt: string;
    releaseAssets: ReleaseAssets;
    repository: RepositoryInfo;
    resourcePath: string;
    shortDescriptionHTML: string;
    tag: Ref;
    tagCommit: Commit;
    tagName: string;
    updatedAt: string;
    url: string;
}

export declare interface ReleaseAsset {
    contentType: string;
    createdAt: string;
    downloadCount: number;
    downloadUrl: string;
    id: number;
    name: string;
    release: Release;
    size: number;
    updatedAt: string;
    uploadedBy: UserInfo;
    url: string;
}

export declare interface ReleaseAssets {
    edges: {
        cursor: string;
        node: ReleaseAsset;
    }[]
    nodes: ReleaseAsset[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Releases {
    edges: {
        cursor: string;
        node: Release;
    }[]
    nodes: Release[];
    pageInfo: PageInfo;
    totalCount: number;
}
export declare interface Version {
    files: File[];
    id: number;
    package: Package;
    platform: string;
    preRelease: boolean;
    readme: string;
    release: Release;
    statistics: {
        downloadsTotalCount: number;
    }
    summary: string;
    version: string | Version;
}

export declare interface Package {
    id: number;
    latestVersion: Version;
    name: string;
    packageType: string;
    repository: RepositoryInfo
    statistics: {
        downloadsTotalCount: number;
    };
    version: Version| string;
    versions: {
        edges: {
            node: Version
        }[]
        nodes: Version[]
        pageInfo: PageInfo;
        totalCount: number;
    }
}
export declare interface Packages {
    edges: {
        node: Package;
    }[]
    nodes: Package[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Project {
    body: string;
    bodyHTML: string;
    closed: boolean;
    closedAt: string;
    columns: Columns;
    createdAt: string;
    creator: Owner;
    databaseId: number;
    id: number;
    name: string;
    number: number;
    owner: Owner;
    pendingCards: Cards;
    progress: {
        doneCount: number;
        donePercentage: number;
        enabled: boolean;
        inProgressCount: number;
        inProgressPercentage: number;
        todoCount: number;
        todoPercentage: number;
    }
    resourcePath: string;
    state: string;
    updatedAt: string;
    url: string;
    viewerCanUpdate: boolean;
}

export declare interface Projects {
    edges: {
        cursor: string;
        node: Project;
    }[];
    nodes: Project[];
    pageInfo: PageInfo;
    totalCount: number;
}
export declare interface Reply {
    body: string;
    bodyHTML: string;
    databaseId: number;
    id: number;
    title: string;
    user: Owner

}

export declare interface Goal {
    description: string;
    kind: string;
    percentComplete: number;
    targetValue: number;
    title: string;
}

export declare interface Tier {
    adminInfo: {
        sponsorShips: {
            edges: {
                cursor: string;
                node: Sponsorships;
            }[]
            nodes: Sponsorships[];
            pageInfo: PageInfo;
        };

    }
    createdAt: string;
    description: string;
    descriptionHTML: string;
    id: number;
    isCustomAmount: boolean;
    monthlyPriceInCents: number;
    monthlyPriceInDollars: number;
    name: string;
    sponsorsListing: SponsorsListing;
    updatedAt: string;
}

export declare interface Sponsor {
    organization: OrganizationInfo | string;
    user: User;
}
export declare interface SponsorShip {
    createdAt: string;
    id: string;
    maintainer: User;
    privacyLevel: string;
    sponsor: User
    sponsorEntity: Sponsor
    sponsorable: {
        hasSponsorsListing: boolean;
        isSponsoredBy: string;
        isSponsoringViewer: boolean;
        sponsorsListing: SponsorsListing;
        sponsorshipForViewerAsSponsor: SponsorshipForViewerAsSponsor;
        sponsorshipsAsMaintainer: SponsorshipsAsSponsor;
        sponsorshipsAsSponsor: SponsorshipsAsSponsor;
        viewerCanSponsor: boolean;
        viewerIsSponsoring: boolean;
        organizatio: OrganizationInfo;
        user: User;
    }
    tier: Tier
}
export declare interface UserIssues {
    user: {
        issues: {
            edges: [{
                cursor: string;
                node: {
                    activeLockReason: string;
                    author: Author;
                    body: string;
                    bodyHTML: string;
                    bodyText: string;
                    closed: boolean;
                    closedAt: string;
                    createdAt: string;
                    createdViaEmail: boolean;
                    databaseId: number;
                    editor: Author;
                    hovercard: [{
                        message: string;
                        octicon: string;
                    }];
                    id: string;
                    includesCreatedEdit: boolean;
                    lastEditedAt: string;
                    locked: boolean;
                    number: number;
                    publishedAt: string;
                    resourcePath: string;
                    state: string;
                    title: string;
                    updatedAt: string;
                    url: string;
                    viewerCanReact: boolean;
                    viewerCanSubscribe: boolean;
                    viewerCanUpdate: boolean;
                    viewerCannotUpdateReasons: string[];
                    viewerDidAuthor: boolean;
                    viewerSubscription: string;
                };
            }];
            pageInfo: {
                endCursor: string;
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                startCursor: string;
            }
            totalCount: number;
        };
    };
}

export declare interface SponsorsListing {
    sponsorsListing: SponsorsListing;
}

export declare interface Tiers {

}

export declare interface Sponsorables {
    sponsorables: {
        edges: [{
            cursor: string;
            node: Sponsorable;
        }]
        nodes: Sponsorable[];
        totalCount: number;
    }
}

export declare interface Sponsorable extends OrganizationInfo, UserInfo {

}


export declare interface SponsorsListing {
    activeGoal: Goal;
    createdAt: string;
    fullDescription: string;
    fullDescriptionHTML: string;
    id: string;
    name: string
    shortDescription: string;
    slug: string;
    tiers: {
        edges: {
            cursor: string;
            node: Tier;
        }[];
        nodes: Tier[];
        pageInfo: PageInfo;
        totalCount: number;
    }
}

export declare interface RelevantTeams {
    edges: {
        cursor: string;
        node: Team;
    }[];
    nodes: Team[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface RelevantOrganizations {
    edges: {
        cursor: string;
        node: Organization;
    }[];
    nodes: Organization[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface ContributionsCollection {
    commitContributionsByRepository: {
        contributions: Contributions;
        repository: RepositoryInfo;
        resourcePath: string;
        url: string;
    }[]
    contributionCalendar: ContributionCalendar;
    contributionYears: number[];
    doesEndInCurrentMonth: boolean;
    earliestRestrictedContributionDate: string;
    endedAt: string;
    firstIssueContribution: {};
    firstPullRequestContribution: {}
    firstRepositoryContribution: {}
    hasActivityInThePast: boolean;
    hasAnyContributions: boolean;
    hasAnyRestrictedContributions: boolean;
    isSingleDay: boolean;
    issueContributions: {
        edges: {
            cursor: string;
            node: {
                isRestricted: boolean;
                issue: Issue;
                occurredAt: string;
                resourcePath: string;
                url: string;
            };
        }[];
        nodes: {
            isRestricted: boolean;
            issue: Issue;
            occurredAt: string;
            resourcePath: string;
            url: string;
        }[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    issueContributionsByRepository: {
        contributions: Contributions;
        repository: RepositoryInfo;
    }[]
    joinedGitHubContribution: {
        isRestricted: boolean;
        occurredAt: string;
        resourcePath: string;
        url: string;
        user: UserInfo;
    }
    latestRestrictedContributionDate: string
    mostRecentCollectionWithActivity: ContributionsCollection;
    mostRecentCollectionWithoutActivity: ContributionsCollection;
    popularIssueContribution: IssueContribution;
    popularPullRequestContribution: PullRequestContribution;
    pullRequestContributions: PullRequestContributions;
    pullRequestContributionsByRepository: PullRequestContributionsByRepository[];
    pullRequestReviewContributions: PullRequestReviewContributions;
    pullRequestReviewContributionsByRepository: PullRequestReviewContributionsByRepository[];
    repositoryContributions: RepositoryInfoContributions;
    restrictedContributionsCount: number;
    startedAt: string;
    totalCommitContributions: number;
    totalIssueContributions: number;
    totalPullRequestContributions: number;
    totalPullRequestReviewContributions: number;
    totalRepositoriesWithContributedCommits: number;
    totalRepositoriesWithContributedIssues: number;
    totalRepositoriesWithContributedPullRequestReviews: number;
    totalRepositoriesWithContributedPullRequests: number;
    totalRepositoryContributions: number;
    user: UserInfo;
}

export declare interface IssueContribution {
    isRestricted: boolean;
    issue: Issue;
    occurredAt: string;
    resourcePath: string;
    url: string;
    user: UserInfo;
}

export declare interface PullRequestContribution {
    isRestricted: boolean;
    occurredAt: string;
    pullRequest: PullRequest;
    resourcePath: string;
    url: string;
    user: UserInfo;
}

export declare interface PullRequestContributions {
    edges: {
        cursor: string;
        node: PullRequestContribution;
    }[];
    nodes: PullRequestContribution[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface PullRequestContributionsByRepository {
    contributions: Contributions;
    repository: RepositoryInfo;
}

export declare interface PullRequestReviewContribution {
    isRestricted: boolean;
    occurredAt: string;
    pullRequest: PullRequest;
    pullRequestReview: PullRequestReview;
    repository: RepositoryInfo;
    resourcePath: string;
    url: string;
    user: UserInfo;
}

export declare interface PullRequestReviewContributions {
    edges: {
        cursor: string;
        node: PullRequestReviewContribution;
    }[];
    nodes: PullRequestReviewContribution[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface PullRequestReviewContributionsByRepository {
    contribution: Contribution;
    repository: RepositoryInfo;
}

export declare interface RepositoryInfoContributions {
    edges: {
        cursor: string;
        node: Contribution;
    }[];
    nodes: Contribution[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Contributions {
    edges: {
        cursor: string;
        node: Contribution;
    }[];
    nodes: Contribution[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Contribution {
    commitCount: number;
    isRestricted: boolean;
    occurredAt: string;
    repository: RepositoryInfo;
    resourcePath: string;
    url: string;
    user: UserInfo;
}

export declare interface ContributionCalendar {
    colors: string[];
    isHalloween: boolean;
    months: {
        firstDay: string;
        name: string;
        totalWeeks: number;
        year: number;
    }[]
    totalContributions: number;
    weeks: {
        contributionDays: {
            color: string;
            contributionCount: number;
            contributionLevel: string;
            date: string;
            weekday: number;
        }[]
        firstDay: string;
    }[]
}

export declare interface Gist {
    comments: Comments;
    createdAt: string;
    description: string;
    files: Files;
    forks: Forks;
    id: number | string;
    isFork: boolean;
    isPublic: boolean;
    name: string;
    owner: Owner;
    pushedAt: string;
    resourcePath: string;
    stargazerCount: number;
    stargazers: Stargazers;
    updatedAt: string;
    url: string;
    viewerHasStarred: boolean;
}

export declare interface Gists {
    edges: {
        cursor: string;
        node: Gist;
    }[];
    nodes: Gist[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Comment {
    author: Owner;
    authorAssociation: string;
    body: string;
    bodyHTML: string;
    bodyText: string;
    commit: Commit;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Owner;
    gist: Gist;
    id: number | string;
    includesCreatedEdit: boolean;
    isMinimized: boolean;
    issue: Issue;
    lastEditedAt: string;
    minimizedReason: string;
    path: string;
    position: number;
    publishedAt: string;
    pullRequest: PullRequest;
    reactionGroup: ReactionGroup;
    reactionGroups: ReactionGroups[];
    reactions: Reactions;
    repository: RepositoryInfo;
    resourcePath: string;
    updatedAt: string;
    url: string;
    userContentEdits: UserContentEdits;
    viewerCanDelete: boolean;
    viewerCanMinimize: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: string[];
    viewerDidAuthor: boolean;
}

export declare interface Comments {
    edges: {
        cursor: string;
        node: Comment[];
    }[];
    nodes: Comment[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface ContentEdit {
    createdAt: string;
    deletedAt: string;
    deletedBy: Owner;
    diff: string;
    editedAt: string;
    editor: Owner;
    id: number | string;
    updatedAt: string;

}

export declare interface UserContentEdits {
    edges: {
        cursor: string;
        node: ContentEdit;
    }[];
    nodes: ContentEdit[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface IssueComment {
    author: Owner;
    authorAssociation: string;
    body: string;
    bodyHTML: string;
    bodyText: string;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Owner;
    id: number | string;
    includesCreatedEdit: boolean;
    isMinimized: boolean;
    issue: Issue;
    lastEditedAt: string;
    minimizedReason: string;
    publishedAt: string;
    pullRequest: PullRequest;
    reactionGroups: ReactionGroups[];
    reactions: Reactions;
}

export declare interface IssueComments {
    edges: {
        cursor: string;
        node: IssueComment;
    }[];
    nodes: IssueComment[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Reaction {
    content: Content;
    createdAt: string;
    databaseId: number;
    id: number | string;
    reactable: Reactable;
    user: UserInfo;
}

export declare interface Reactions {
    edges: {
        cursor: string;
        node: Reaction;
    }[],
    nodes: Reaction[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Reactable {
    content: Content;
    createdAt: string;
    subject: Subject;
    users: Users;
    viewerHasReacted: boolean;
}

export declare interface Users {
    edges: {
        cursor: string;
        node: UserInfo;
    }[];
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface TeamDiscussion {

}

export declare interface TeamDiscussionComment {

}

declare interface Subject extends PullRequest, Issue, TeamDiscussion, TeamDiscussionComment, CommitComment, IssueComment, PullRequestReview, PullRequestReviewComment {
    databaseId: number;
    id: number | string;
    reactionGroups: ReactionGroups[];
    reactions: Reactions
    viewerCanReact: boolean;
}


export declare interface Organizations {
    edges: {
        cursor: string;
        node: Organization;
    }[];
    nodes: Organization[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Columns {
    edges: {
        cursor: string;
        node: Column;
    }[];
    nodes: Column[];
    pageInfo: PageInfo;
    totalCount: number;

}

export declare interface Cards {
    edges: {
        cursor: string;
        node: Card;
    }[];
    nodes: Card[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface UserItems extends Gist, RepositoryInfo {

}

export declare interface CardItems extends Issue, PullRequest {

}

export declare interface Column {
    cards: Cards;
    createdAt: string;
    databaseid: number
    id: number | string;
    name: string;
    project: Project;
    purpose: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Card {
    column: Column;
    content: Content;
    createdAt: string;
    creator: Owner;
    databaseId: number;
    id: number | string
    isArchived: boolean;
    note: string;
    project: Project;
    resourcePath: string;
    state: string;
    updatedAt: string;
    url: string;
}

export declare interface TopicQuery {
    topic: Topic

}

export declare interface SecurityVulnerabilities {
    securityVulnerabilities: {
        edges: {
            cursor: string;
            node: Vulnerability[];
        }
        nodes: Vulnerability[];
        totalCount: number;
    }
}

export declare interface SecurityVulnerabilitiesQuery {
    securityVulnerabilities: {
        edges: {
            cursor: string;
            node: Vulnerability[];
        }
        nodes: Vulnerability[];
        totalCount: number;
    }
}

export declare interface Advisory {
    cvss: {
        score: string;
        vectorString: string;
    }
    cwes: CWES;
    databaseId: string;
    description: string;
    ghsaId: string;
    id: string;
    identifiers: [{
        type: string;
        value: string;
    }]
    notificationsPermalink: string;
    origin: string;
    permalink: string;
    publishedAt: string;
    references: [{
        url: string;
    }]
    severity: string;
    summary: string;
    updatedAt: string;
    vulnerabilities: {
        edges: {
            cursor: string;
            node: Vulnerability[]
        };
        nodes: Vulnerability[];
        totalCount: number;
    }
    withdrawnAt: string;
}

export declare interface SecurityAdvisory {
    securityAdvisory: SecurityAdvisory;
}

export declare interface SecurityAdvisories {
    securityAdvisories: {
        edges: {
            cursor: string;
            node: Advisory
        }[]
        nodes: Advisory[]
        totalCount: number;
    }
}

export declare interface Search {
    search: {
        edges: [{
            cursor: string;
            node: SearchType;
        }];
        nodes: SearchType[];
        codeCount: number;
        issueCount: number;
        repositoryCount: number;
        userCount: number;
        wikiCount: number;
    }
}

export declare interface SearchType extends App, Issue, MarketplaceListing, OrganizationInfo, PullRequest, RepositoryInfo, UserInfo {

}

export declare interface App {
    createdAt: string;
    databaseId: number;
    description: string;
    id: number | string;
    logoBackgroundColor: string;
    logoUrl: string;
    name: string;
    slug: string;
    updatedAt: string;
    url: string;
}

export declare interface Resource extends OrganizationInfo, Release, UserInfo, Issue, PullRequest, Repository, TeamDiscussion, TeamDiscussion, Commit, CheckRun, Milestone, Topic, Comment, Mannequin, Bot, ClosedEvent, CrossReferencedEvent, MergedEvent, CrossReferencedEvent,
    MergedEvent, ReviewDismissedEvent, ConvertToDraftEvent, ReadyForReviewEvent, Gist {
    resource: {
        url: string;
        resourcePath: string;
    }
}

export declare interface RepositoryOwner {
    repositoryOwner: RepositoryOwnerItem;
}

declare interface RepositoryOwnerItem extends UserInfo, OrganizationInfo {
    avatarUrl: string;
    id: number | string;
    resourcePath: string;
    url: string;
    login: string;
    repository: RepositoryInfo;
    repositories: Repositories;
}

export declare interface AssignableUsers {
    edges: {
        cursor: string;
        node: UserInfo;
    }[],
    nodes: UserInfo[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface BranchProtectionRule {
    allowsDeletions: boolean;
    allowsForcePushes: boolean;
    branchProtectionRuleConflicts: BranchProtectionRuleConflicts;
}

export declare interface BranchProtectionRules {
    edges: {
        cursor: string;
        node: BranchProtectionRule;
    }[],
    nodes: BranchProtectionRule[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface BranchProtectionRuleConflicts {
    edges: {
        cursor: string;
        node: BranchProtectionRule;
    }[],
    nodes: BranchProtectionRule[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface BranchProtectionRuleConflict {
    branchProtectionRule: BranchProtectionRule;
    conflictingBranchProtectionRule: BranchProtectionRule;
    ref: Ref;
}

export declare interface Ref {
    associatedPullRequests: PullRequests;
    branchProtectionRule: BranchProtectionRule;
    id: number | string;
    name: string;
    prefix: string;
    refUpdateRule: RefUpdateRule;
    repository: RepositoryInfo;
    target: Target;
}

export declare interface Refs {
    edges: {
        cursor: string;
        node: Ref;
    }[],
    nodes: Ref[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface PullRequests {
    edges: {
        cursor: string;
        node: PullRequest;
    }[],
    nodes: PullRequest[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Assignees {
    edges: {
        cursor: string;
        node: UserInfo;
    }[],
    nodes: UserInfo[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface AutoMergeRequest {
    authorEmail: string;
    commitBody: string;
    commitHeadline: string;
    enabledAt: string;
    enabledBy: Owner;
    mergeMethod: string;
    pullRequest: PullRequest;
}

export declare interface Target extends Commit, Tree, Blob, Tag {
    abbreviatedOid: string;
    commitResourcePath: string;
    commitUrl: string;
    id: number | string;
    oid: string;
    repository: RepositoryInfo;
}

export declare interface Tree {
    abbreviatedOid: string;
    commitResourcePath: string;
    commitUrl: string;
    id: number | string;
    entries: Entries[]
    oid: string;
    repository: RepositoryInfo;
}

export declare interface Blob {
    abbreviatedOid: string;
    byteSize: number;
    commitResourcePath: string;
    commitUrl: string;
    id: number | string;
    isBinary: boolean;
    isTruncated: boolean;
    oid: string;
    repository: RepositoryInfo;
    text: string;
}

export declare interface Entries {
    extension: string;
    isGenerated: boolean;
    mode: number;
    name: string;
    object: Target;
    oid: string;
    path: string;
    repository: RepositoryInfo;
    submodule: {
        branch: string;
        gitUrl: string;
        name: string;
        path: string;
        subprojectCommitOid: string;
    }
    type: string;
}

export declare interface Tag {
    abbreviatedOid: string;
    commitResourcePath: string;
    commitUrl: string;
    id: number | string;
    message: string;
    name: string;
    oid: string;
    repository: RepositoryInfo;
    tagger: {
        avatarUrl: string;
        date: string;
        email: string;
        name: string
        user: UserInfo;
        target: Target;
    }
}

export declare interface CheckSuite {
    app: App;
    branch: Branch;
    checkRun: CheckRuns;
    commit: Commit;
    conclusion: string;
    createdAt: string
    databaseId: number
    id: number | string;
    matchingPullRequests: PullRequests;
    push: {
        nextSha: string;
        permalink: string;
        previousSha: string;
        pusher: UserInfo;
        repository: RepositoryInfo;
    }
    repository: RepositoryInfo;
    resourcePath: string;
    status: StatusType;
    updatedAt: string;
    url: string;
}

export declare interface CheckSuites {
    edges: {
        cursor: string;
        node: CheckSuite;
    }[],
    nodes: CheckSuite[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface RefUpdateRule {
    allowsDeletions: boolean;
    allowsForcePushes: boolean;
    pattern: string;
    requiredApprovingReviewCount: number;
    requiredStatusCheckContexts: string;
    requiresCodeOwnerReviews: boolean;
    requiresLinearHistory: boolean;
    requiresSignatures: boolean;
    viewerAllowedToDismissReviews: boolean;
    viewerCanPush: boolean;
}

export declare interface Annotation {
    annotationLevel: string;
    blobUrl: string;
    databaseId: number;
    location: {
        end: {
            column: number;
            line: number;
        }
        start: {
            column: number;
            line: number;
        }
    }
    message: string;
    path: string
    rawDetails: string;
    title: string;
}

export declare interface Annotations {
    edges: {
        cursor: string;
        node: Annotation;
    }[],
    nodes: Annotation[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface CheckRun {
    annotations: Annotations;
    checkSuite: CheckSuite;
    completedAt: string;
    conclusion: string;
    databaseId: number;
    detailsUrl: string;
    externalId: string;
    id: number | string;
    isRequired: boolean;
    name: string;
    permalink: string;
    repository: RepositoryInfo;
    resourcePath: string;
    startedAt: string;
    status: StatusType;
    summary: string;
    text: string;
    title: string;
    url: string;
}

export declare interface CheckRuns {
    edges: {
        cursor: string;
        node: CheckRun;
    }[],
    nodes: CheckRun[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface ReactionGroups {
    content: Content;
    createdAt: string;
    subject: Subject;
    user: UserInfo;
    viewerHasReacted: boolean;
}

export declare interface Deployment {
    commit: Commit;
    commitOid: string;
    createdAt: string;
    creator: Owner;
    databaseId: number;
    description: string;
    environment: string;
    id: number | string;
    latestEnvironment: string;
    latestStatus: Status;
    originalEnvironment: string;
    payload: string;
    ref: Ref;
    repository: RepositoryInfo;
    state: string;
    statuses: Statuses
    task: string;
    updatedAt: string;
}

export declare interface DeployKey {
    createdAt: string;
    id: number | string;
    key: string;
    readOnly: boolean;
    title: string;
    verified: boolean;
}

export declare interface DeployKeys {
    edges: {
        cursor: string;
        node: DeployKey;
    }[],
    nodes: DeployKey[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Deployments {
    edges: {
        cursor: string;
        node: Deployment;
    }[],
    nodes: Deployment[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Status {
    createdAt: string;
    creator: Owner;
    avatarUrl: string;
    commit: Commit;
    updatedAt: string;
    isRequired: boolean;
    state: string;
    logUrl: string;
    id: number | string;
    environmentUrl: string;
    description: string;
    deployment: Deployment;
}

export declare interface Statuses {
    edges: {
        cursor: string;
        node: Status;
    }[],
    nodes: Status[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface History {
    edges: {
        cursor: string;
        node: Commit;
    }[],
    nodes: Commit[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface CombinedContext extends CheckRun, Status {

}

export declare interface CombinedContexts {
    edges: {
        cursor: string;
        node: CombinedContext;
    }[],
    nodes: CombinedContext[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface CommitStatus {
    combinedContexts: CombinedContexts;
    commit: Commit;
    context: Status;
    contexts: Status[]
    id: number | string;
    state: string;
}

export declare interface StatusCheckRollup {
    commit: Commit;
    contexts: Statuses
    id: number | string;
    state: string;
}

export declare interface Submodule {
    branch: string;
    gitUrl: string;
    name: string;
    path: string;
    subprojectCommitOid: string;
}

export declare interface Submodules {
    edges: {
        cursor: string;
        node: Submodule;
    }[],
    nodes: Submodule[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Files {
    edges: {
        cursor: string;
        node: File;
    }[],
    nodes: File[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface HeadRepositoryOwner extends UserInfo, OrganizationInfo {
    avatarUrl: string;
    id: number | string;
    login: string;
    repositories: Repositories;
    repository: RepositoryInfo;
    resourcePath: string;
    url: string;
}

export declare interface Label {
    color: string;
    createdAt: string;
    description: string;
    id: number | string;
    isDefault: boolean;
    issues: Issues;
    name: string;
    pullRequests: PullRequests;
    repository: RepositoryInfo;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Labels {
    edges: {
        cursor: string;
        node: Label;
    }[],
    nodes: Label[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Review {
    author: Owner;
    authorAssociation: string;
    body: string;
    bodyHTML: string;
    bodyText: string;
    comments: Comments
    commit: Commit;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Owner;
    id: number | string;
    includesCreatedEdit: boolean;
    lastEditedAt: string;
    onBehalfOf: Organization;
    minimizedReason: string;
    path: string;
    position: number;
    publishedAt: string;
    pullRequest: PullRequest;
    reactionGroup: ReactionGroup;
    reactionGroups: ReactionGroups[];
    reactions: Reactions;
    repository: RepositoryInfo;
    resourcePath: string;
    state: string;
    submittedAt: string;
    updatedAt: string;
    url: string;
    userContentEdits: UserContentEdits;
    viewerCanDelete: boolean;
    viewerCanMinimize: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: string[];
    viewerDidAuthor: boolean;
}

export declare interface Reviews {
    edges: {
        cursor: string;
        node: Review;
    }[],
    nodes: Review[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Teams {
    edges: {
        cursor: string;
        node: Team;
    }[],
    nodes: Team[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Milestone {
    closed: boolean;
    closedAt: string;
    createdAt: string;
    creator: Owner;
    description: string;
    dueOn: string;
    id: number | string;
    issues: Issues;
    number: number;
    progressPercentage: number;
    pullRequests: PullRequests;
    repository: RepositoryInfo;
    resourcePath: string;
    state: string;
    title: string;
    updatedAt: string;
    url: string;
}

export declare interface Milestones {
    edges: {
        cursor: string;
        node: Milestone;
    }[],
    nodes: Milestone[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface ReviewRequest {
    asCodeOwner: boolean;
    databaseId: number;
    id: number | string;
    pullRequest: PullRequest;
    requestedReviewer: RequestedReviewer
}

export declare interface ReviewRequests {
    edges: {
        cursor: string;
        node: ReviewRequest;
    }[],
    nodes: ReviewRequest[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface RequestedReviewer extends Mannequin, Team, UserInfo {

}

export declare interface PullRequestReview {
    comment: Comments;
    diffSide: string;
    id: number | string;
    isCollapsed: boolean;
    isOutdated: boolean;
    isResolved: boolean;
    line: number;
    originalLine: number;
    originalStartLine: number;
    path: string;
    pullRequest: PullRequest;
    repository: RepositoryInfo;
    resolvedBy: UserInfo;
    startDiffSide: string;
    startLine: number;
    viewerCanReply: boolean;
    viewerCanResolve: boolean;
    viewerCanUnresolve: boolean;
}

export declare interface PullRequestReviews {
    edges: {
        cursor: string;
        node: PullRequestReview;
    }[],
    nodes: PullRequestReview[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface TimelineItem extends AddedToProjectEvent, AssignedEvent, AutoMergeDisabledEvent, AutoMergeEnabledEvent, AutoRebaseEnabledEvent, AutoSquashEnabledEvent, AutomaticBaseChangeFailedEvent, AutomaticBaseChangeSucceededEvent, BaseRefChangedEvent, BaseRefDeletedEvent, BaseRefForcePushedEvent, ClosedEvent,
    CommentDeletedEvent, ConnectedEvent, ConvertToDraftEvent, ConvertedNoteToIssueEvent, CrossReferencedEvent, DemilestonedEvent, DeployedEvent, DeploymentEnvironmentChangedEvent, DisconnectedEvent, HeadRefDeletedEvent, HeadRefDeletedEvent, HeadRefForcePushedEvent, HeadRefRestoredEvent, IssueComment, LabeledEvent, LockedEvent,
    MarkedAsDuplicateEvent, MentionedEvent, MilestonedEvent, MovedColumnsInProjectEvent, PinnedEvent, PullRequestCommit, PullRequestCommitCommentThread, PullRequestReview, PullRequestReviewThread, PullRequestRevisionMarker, ReadyForReviewEvent, ReferencedEvent, RemovedFromProjectEvent, RenamedTitleEvent, ReopenedEvent, ReviewDismissedEvent,
    ReviewDismissedEvent, ReopenedEvent, ReviewDismissedEvent, ReviewRequestRemovedEvent, ReviewRequestedEvent, SubscribedEvent, TransferredEvent, UnassignedEvent, UnlabeledEvent, UnlockedEvent, UnmarkedAsDuplicateEvent, UnpinnedEvent, UnsubscribedEvent, UserBlockedEvent {
}

export declare interface TimelineItems {
    edges: {
        cursor: string;
        node: TimelineItem;
    }[],
    nodes: TimelineItem[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Timeline extends AssignedEvent, BaseRefDeletedEvent, BaseRefForcePushedEvent, ClosedEvent, Commit, CommitCommentThread, CrossReferencedEvent, DemilestonedEvent, DeployedEvent, DeploymentEnvironmentChangedEvent, HeadRefDeletedEvent, HeadRefForcePushedEvent, HeadRefRestoredEvent, IssueComment,
    LabeledEvent, LockedEvent, MilestonedEvent, PullRequestReview, PullRequestReviewComment, PullRequestReviewThread, ReferencedEvent, RenamedTitleEvent, ReopenedEvent, ReviewDismissedEvent, ReviewRequestRemovedEvent, ReviewRequestedEvent, SubscribedEvent, UnassignedEvent, UnlabeledEvent, UnlockedEvent, UserBlockedEvent {

}

export declare interface AutoMergeDisabledEvent {
    actor: Actor;
    createdAt: string;
    disabler: UserInfo;
    id: number | string;
    pullRequest: PullRequest;
    reason: string;
    reasonCode: string;
}

export declare interface AutoMergeEnabledEvent {
    actor: Actor;
    createdAt: string;
    disabler: UserInfo;
    id: number | string;
    pullRequest: PullRequest;
    reason: string;
    reasonCode: string;
}

export declare interface AutoRebaseEnabledEvent {
    actor: Actor;
    createdAt: string;
    enabler: UserInfo;
    id: number | string;
    pullRequest: PullRequest;
}

export declare interface AutoSquashEnabledEvent {
    actor: Actor;
    createdAt: string;
    enabler: UserInfo;
    id: number | string;
    pullRequest: PullRequest;
}

export declare interface AutomaticBaseChangeFailedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    pullRequest: PullRequest;
    newBase: string;
    oldBase: string;
}

export declare interface BaseRefChangedEvent {
    actor: Actor;
    createdAt: string;
    currentRefName: string;
    databaseId: number;
    id: number | string;
    previousRefName: string;
    pullRequest: PullRequest;

}

export declare interface BaseRefDeletedEvent {
    actor: Actor;
    id: number | string;
    baseRefName: string
    createdAt: string;
    pullRequest: PullRequest;
}

export declare interface BaseRefForcePushedEvent {
    actor: Actor;
    afterCommit: Commit;
    beforeCommit: Commit;
    createdAt: string;
    id: number | string;
    ref: Ref;
    pullRequest: PullRequest;
}

export declare interface CommentDeletedEvent {
    actor: Actor;
    createdAt: string;
    databaseId: number;
    deletedCommentAuthor: Owner;
    id: number | string;
}

export declare interface ConnectedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    isCrossRepository: boolean;
    source: Source;
    subject: Source;
}

export declare interface ConvertToDraftEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    pullRequest: PullRequest;
    resourcePath: string;
    url: string;
}

export declare interface ConvertedNoteToIssueEvent {
    actor: Actor;
    createdAt: string
    databaseId: number;
    id: number | string;
}

export declare interface CrossReferencedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    isCrossRepository: boolean;
    referencedAt: string;
    resourcePath: string;
    source: Source;
    target: Target;
    url: string;
    willCloseTarget: boolean;
}

export declare interface DisconnectedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    isCrossRepository: boolean;
    source: Source;
    subject: Source;
}

export declare interface AutomaticBaseChangeSucceededEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    pullRequest: PullRequest;
    newBase: string;
    oldBase: string;
}

export declare interface Timeline {
    edges: {
        cursor: string;
        node: Timeline;
    }[],
    nodes: Timeline[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface AddedToProjectEvent {
    actor: Actor;
    createdAt: string;
    databaseId: number;
    id: number | string;
}

export declare interface AssignedEvent {
    actor: Actor;
    assignable: Assignable
    assignee: Assignee;
    createdAt: string;
    id: number | string;
    user: UserInfo
}

export declare interface AssignedEvent {
    actor: Actor;
    createdAt: string;
    assignable: Assignable;
    assignee: Assignee;
    id: number | string;
}

export declare interface BaseRefDeletedEvent {
    id: number | string;
    baseRefName: string;
    actor: Actor;
    createdAt: string;
    pullRequest: PullRequest
}

export declare interface BaseRefForcePushedEvent {
    id: number | string;
    afterCommit: Commit;
    beforeCommit: Commit
    createdAt: string;
    pullRequest: PullRequest
    ref: Ref
}

declare interface Closer extends Commit, PullRequest {

}

declare interface Closable extends Project, Issue, PullRequest, Milestone {
    closed: boolean;
    closedAt: string;
}

export declare interface ClosedEvent {
    actor: Actor;
    closable: Closable;
    closer: Closer;
    createdAt: string;
    id: number | string;
    resourcePath: string;
    url: string;
}

export declare interface CommitCommentThread {
    comments: Comments
    commit: Commit
    id: number | string;
    path: string;
    position: number;
    repository: RepositoryInfo
}

export declare interface Source extends Issues, PullRequest {

}

export declare interface CrossReferencedEvent {
    id: number | string;
    actor: Actor;
    createdAt: string;
    isCrossRepository: boolean;
    referencedAt: string;
    resourcePath: string;
    source: Source
    target: Target;
    url: string;
    willCloseTarget: boolean;
}

export declare interface DemilestonedEvent {
    id: number | string;
    actor: Actor;
    createdAt: string;
    milestoneTitle: string;
    subject: Source
}

export declare interface DeployedEvent {
    id: number | string;
    actor: Actor;
    createdAt: string;
    databaseId: number;
    deployment: Deployment
    pullRequest: PullRequest
    ref: Ref
}

export declare interface DeploymentEnvironmentChangedEvent {
    id: number | string;
    actor: Actor;
    createdAt: string
    deploymentStatus: {
        createdAt: string
        creator: Owner
        deployment: Deployment
        description: string
        environmentUrl: string;
        id: number | string
        logurl: string
        state: string
        updatedAt: string
    }
    pullRequest: PullRequest
}

export declare interface HeadRefDeletedEvent {
    id: number | string;
    actor: Actor;
    createdAt: string
    headRefName: string;
    headRef: Ref;
    pullRequest: PullRequest
}

export declare interface HeadRefForcePushedEvent {
    actor: Actor;
    afterCommit: Commit
    beforeCommit: Commit
    id: number | string
    pullRequest: PullRequest
    ref: Ref
}

export declare interface HeadRefRestoredEvent {
    actor: Actor;
    createdAt: string;
    id: number | string
    pullRequest: PullRequest
}

export declare interface MarkedAsDuplicateEvent {
    actor: Actor;
    canonical: Source;
    createdAt: string;
    duplicate: Source;
    id: number | string;
    isCrossRepository: boolean;
}

export declare interface MentionedEvent {
    actor: Actor;
    createdAt: string;
    databaseId: number
    id: number | string;
}

export declare interface MovedColumnsInProjectEvent {
    actor: Actor;
    createdAt: string;
    databaseId: number;
    id: number | string;
}

export declare interface PinnedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    issue: Issue;
}

export declare interface PullRequestCommit {
    commit: Commit;
    id: number | string;
    pullRequest: PullRequest;
    resourcePath: string;
    url: string;
}

export declare interface PullRequestCommitCommentThread {
    comments: Comments;
    commit: Commit;
    id: number | string;
    path: string;
    position: number;
    pullRequest: PullRequest;
    repository: RepositoryInfo;
}

export declare interface PullRequestRevisionMarker {
    __typename: string;
    createdAt: string;
    lastSeenCommit: Commit;
    pullRequest: PullRequest;
}

export declare interface ReadyForReviewEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    pullRequest: PullRequest;
}

export declare interface RemovedFromProjectEvent {
    actor: Actor;
    createdAt: string;
    databaseId: number;
    id: number | string;
}

export declare interface TransferredEvent {
    id: number | string;
    actor: Actor;
    createdAt: string;
    fromRepository: RepositoryInfo;
    issue: Issue;
}

export declare interface UnmarkedAsDuplicateEvent {
    actor: Actor;
    canonical: Source;
    createdAt: string;
    duplicate: Source;
    id: number | string;
    isCrossRepository: boolean;
}

export declare interface UnpinnedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    issue: Issue;
}

export declare interface UnsubscribedEvent {
    subscribable: Subscribable;
    actor: Actor;
    createdAt: string;
    id: number | string;
}

export declare interface Labelable extends Labels, Issue, PullRequest {

}

export declare interface LabeledEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    label: Label
    labelable: Labelable
}

export declare interface LockedEvent {
    createdAt: string
    creator: Owner;
    id: number | string;
    lockReason: string;
    lockable: Lockable;
}

export declare interface MergedEvent {
    actor: Actor;
    commit: Commit;
    createdAt: string;
    id: number | string;
    mergeRef: Ref
    mergeName: string;
    pullRequest: PullRequest
    resourcePath: string
    url: string
}

export declare interface MilestonedEvent {
    id: number | string;
    actor: Actor;
    createdAt: string;
    milestoneTitle: string;

    subject: Source;
}

export declare interface ReferencedEvent {
    actor: Actor;
    commit: Commit
    commitRepository: RepositoryInfo
    createdAt: string
    id: number | string
    isCrossRepository: boolean;
    isDirectReference: boolean
    subject: Source;
}

export declare interface RenamedTitleEvent {
    actor: Actor;
    createdAt: string
    id: number | string
    currentTitle: string;
    subject: Source;
    previousTitle: string;
}

export declare interface ReopenedEvent {
    actor: Actor;
    id: number | string
    createdAt: string
    closable: Closable
}

export declare interface ReviewDismissedEvent {
    actor: Actor;
    createdAt: string
    databaseId: number;
    dismissalMessage: string;
    dismissalMessageHTML: string;
    id: number | string;
    previousReviewstate: string
    pullRequest: PullRequest
    pullRequestCommit: PullRequestCommit;
    resourcePath: string
    review: Review
    url: string

}

export declare interface PullRequestReviewer extends Mannequin, UserInfo, Team {

}

export declare interface ReviewRequestRemovedEvent {
    actor: Actor;
    createdAt: string
    id: number | string
    pullRequest: PullRequest
    requestedReviewer: PullRequestReviewer;
}

export declare interface ReviewRequestedEvent {
    actor: Actor;
    createdAt: string
    id: number | string
    pullRequest: PullRequest
    requestedReviewer: PullRequestReviewer;
}

export declare interface Subscribable extends Issue, PullRequest, RepositoryInfo, Team, TeamDiscussion, Commit {
    id: number | string;
    viewerCanSubscribe: boolean;
    viewerSubscription: string;
}

export declare interface SubscribedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string;
    subscribable: Subscribable;
}

export declare interface Assignable extends Assignee, Issue, PullRequest {

}

export declare interface Assignee extends Bot, Mannequin, OrganizationInfo, UserInfo {

}

export declare interface UnassignedEvent {
    id: number | string
    actor: Actor;
    assignable: Assignable;
    assignee: Assignee
    createdAt: string
    user: UserInfo;
}

export declare interface UnlabeledEvent {
    actor: Actor;
    createdAt: string
    id: number | string
    label: Label;
    labelable: Labelable
}

export declare interface Lockable extends Issue, PullRequest {
    activeLockReason: string;
    locked: boolean;
}

export declare interface UnlockedEvent {
    actor: Actor;
    createdAt: string;
    id: number | string
    lockable: Lockable
}

export declare interface UserBlockedEvent {
    actor: Actor;
    blockDuration: number;
    createdAt: string;
    id: number | string
    subject: Source
}

export declare interface PullRequestReviewThread extends PullRequestReview {

}

type StatusType = string | CommitStatus | {
    createdAt: string;
    emoji: string;
    emojiHTML: string;
    expiresAt: string;
    id: number | string;
    indicatesLimitedAvailability: boolean;
    message: string;
    organization: OrganizationInfo | string;
    updatedAt: string;
    user: UserInfo
}

export declare interface Relay {
    codeofConduct: CodeOfConduct;
    codesofConduct: CodeOfConduct[];
    enterprise: Enterprise;
    enterpriseAdministratorInvitation: EnterpriseAdministratorInvitation;
    enterpriseAdministratorInvitationByToken: EnterpriseAdministratorInvitationByToken
    license: License;
    licenses: License[];
    marketplaceCategories: MarketplaceCategory[];
    marketplaceCategory: MarketplaceCategory;
    marketplaceListing: MarketplaceListing;
    marketplaceListings: MarketplaceListings;
    meta: Meta;
    node: Node;
    nodes: Nodes;
    organization: OrganizationInfo | string;
    rateLimit: RateLimit;
    message: string;
    updatedAt: string;
    user: UserInfo
}

export declare interface MarketplaceCategory {
    app: App;
    companyUrl: string;
    configurationResourcePath: string;
    configurationUrl: string;
    documentationUrl: string;
    extendedDescription: string;
    extendedDescriptionHTML: string;
    fullDescription: string;
    fullDescriptionHTML: string;
    hasPublishedFreeTrialPlans: boolean;
    hasTermsOfService: boolean;
    hasVerifiedOwner: boolean;
    howItWorks: string;
    howItWorksHTML: string;
    id: number | string;
    installationUrl: string;
    installedForViewer: boolean;
    isArchived: boolean;
    isDraft: boolean;
    isPaid: boolean;
    isPublic: boolean;
    isRejected: boolean;
    isUnverified: boolean;
    isUnverifiedPending: boolean;
    isVerificationPendingFromDraft: boolean;
    isVerificationPendingFromUnverified: boolean;
    isVerified: boolean;
    logoBackgroundColor: string;
    logoUrl: string;
    name: string;
    normalizedShortDescription: string;
    pricingUrl: string;
    primaryCategory: Category
    privacyPolicyUrl: string;
    resourcePath: string;
    screenshotUrls: string[];
    secondaryCategory: Category
    shortDescription: string;
    slug: string;
    statusUrl: string;
    supportEmail: string;
    supportUrl: string;
    termsOfServiceUrl: string;
    url: string;
    viewerCanAddPlans: boolean;
    viewerCanApprove: boolean;
    viewerCanDelist: boolean;
    viewerCanEdit: boolean;
    viewerCanEditCategories: boolean;
    viewerCanEditPlans: boolean;
    viewerCanRedraft: boolean;
    viewerCanReject: boolean;
    viewerCanRequestApproval: boolean;
    viewerHasPurchased: boolean;
    viewerHasPurchasedForAllOrganizations: boolean;
    viewerIsListingAdmin: boolean;
}

export declare interface MarketplaceListings {
    edges: {
        cursor: string;
        node: MarketplaceListing;
    }[];
    nodes: MarketplaceListing[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Relay {
    codeofConduct: CodeOfConduct;
    codesofConduct: CodeOfConduct[];
    enterprise: Enterprise;
    enterpriseAdministratorInvitation: EnterpriseAdministratorInvitation;
    enterpriseAdministratorInvitationByToken: EnterpriseAdministratorInvitationByToken
    license: License;
    licenses: License[];
    relay: Relay;
    repository: Repository;
    repositoryOwner: RepositoryOwner;
    resource: Resource;
    search: Search;
    securityAdvisories: SecurityAdvisories;
    securityAdvisory: SecurityAdvisory;
    securityVulnerabilities: SecurityVulnerabilities;
    sponsorables: Sponsorables;
    sponsorsListing: SponsorsListing;
    topic: Topic;
    user: UserInfo;
    viewer: Viewer;
}

export declare interface RateLimit {
    cost: number;
    limit: number;
    nodeCount: number;
    remaining: number;
    resetAt: string;
    used: number;
}


export declare interface Actor extends Bot, User, OrganizationInfo, App, Team, Enterprise {

}

export declare interface MemberNodeFields {
    id: number;
    action: string;
    actor: Actor;
    actorIp: string;
    actorLocation: {
        city: string;
        country: string;
        countryCode: string;
        region: string;
        regionCode: string;
    }
    actorLogin: string;
    actorResourcePath: string;
    actorUrl: string;
    createdAt: string;
    enterpriseResourcePath: string;
    enterpriseSlug: string;
    enterpriseUrl: string;
    organization: OrganizationInfo | string;
    operationType: string;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
    user: UserInfo;
    userLogin: string;
    userResourcePath: string;
    userUrl: string;
}

export declare interface onMembersCanDeleteReposDisableAuditEntry extends MemberNodeFields {

}

export declare interface onMembersCanDeleteReposClearAuditEntry extends MemberNodeFields {

}

export declare interface onMembersCanDeleteReposEnableAuditEntry extends MemberNodeFields {

}

export declare interface onOauthApplicationCreateAuditEntry extends MemberNodeFields {
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
    rateLimit: number;
    state: string;
}

export declare interface onOrgAddBillingManagerAuditEntry extends MemberNodeFields {
    invitationEmail: string;
    organization: OrganizationInfo | string;
}

export declare interface onOrgAddMemberAuditEntry extends MemberNodeFields {
    permission: string;
}

export declare interface onOrgBlockUserAuditEntry extends MemberNodeFields {
    blockedUser: UserInfo;
    blockedUserName: string;
    blockedUserResourcePath: string;
    blockedUserUrl: string;
}

export declare interface onOrgConfigDisableCollaboratorsOnlyAuditEntry extends MemberNodeFields {

}

export declare interface onOrgConfigEnableCollaboratorsOnlyAuditEntry extends MemberNodeFields {

}

export declare interface onOrgCreateAuditEntry extends MemberNodeFields {
    billingPlan: string;
}


export declare interface onOrgDisableOauthAppRestrictionsAuditEntry extends MemberNodeFields {

}

export declare interface onOrgDisableSamlAuditEntry extends MemberNodeFields {
    digestMethodUrl: string;
    issuerUrl: string;
    signatureMethodUrl: string;
    singleSignOnUrl: string;
}

export declare interface onOrgEnableOauthAppRestrictionsAuditEntry extends MemberNodeFields {

}

export declare interface onOrgEnableSamlAuditEntry extends MemberNodeFields {
    digestMethodUrl: string;
    issuerUrl: string;
    signatureMethodUrl: string;
    singleSignOnUrl: string;
}

export declare interface onOrgEnableTwoFactorRequirementAuditEntry extends MemberNodeFields {

}

export declare interface onOrgInviteMemberAuditEntry extends MemberNodeFields {

}

export declare interface onOrgInviteToBusinessAuditEntry extends MemberNodeFields {

}

export declare interface onOrgOauthAppAccessApprovedAuditEntry extends MemberNodeFields {
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
}

export declare interface onOrgOauthAppAccessDeniedAuditEntry extends MemberNodeFields {
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
}


export declare interface onOrgOauthAppAccessRequestedAuditEntry extends MemberNodeFields {
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
}

export declare interface onOrgRemoveBillingManagerAuditEntry extends MemberNodeFields {

}

export declare interface onOrgRemoveMemberAuditEntry extends MemberNodeFields {
    membershipTypes: []
    reason: string;
}

export declare interface onOrgRemoveOutsideCollaboratorAuditEntry extends MemberNodeFields {
    membershipTypes: []
    reason: string;
}

export declare interface onOrgRestoreMemberAuditEntry extends MemberNodeFields {
    restoredCustomEmailRoutingsCount: number;
    restoredIssueAssignmentsCount: number;
    restoredMemberships: RestoredMemberships;
    restoredMembershipsCount: number;
    restoredRepositoriesCount: number;
    restoredRepositoryStarsCount: number;
    restoredRepositoryWatchesCount: number;
}

export declare interface RestoredMemberships extends onOrgRestoreMemberMembershipOrganizationInfoAuditEntryData, onOrgRestoreMemberMembershipRepositoryAuditEntryData,
    onOrgRestoreMemberMembershipTeamAuditEntryData {

}

export declare interface onOrgRestoreMemberMembershipTeamAuditEntryData {
    team: Team;
    teamName: string;
    teamResourcePath: string;
}

export declare interface onOrgRestoreMemberMembershipRepositoryAuditEntryData {
    repository: Repository;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
}

export declare interface onOrgRestoreMemberMembershipOrganizationInfoAuditEntryData {
    repository: Repository;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
}

export declare interface onOrgBlockUserAuditEntry extends MemberNodeFields {
    blockedUser: UserInfo;
    blockedUserName: string;
    blockedUserResourcePath: string;
    blockedUserUrl: string;
}

export declare interface onOrgAddMemberAuditEntry extends MemberNodeFields {
    permission: string;
    permissionWas: string;
}

export declare interface onOrgUpdateMemberAuditEntry extends MemberNodeFields {
    permission: string;
    permissionWas: string;
}

export declare interface onOrgUpdateMemberRepositoryCreationPermissionAuditEntry extends MemberNodeFields {
    canCreateRepositories: boolean;
    visibility: string;
}

export declare interface onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry extends MemberNodeFields {
    canInviteOutsideCollaboratorsToRepositories: boolean;
}

export declare interface onPrivateRepositoryForkingDisableAuditEntry extends MemberNodeFields {
    repository: Repository;
    repositoryName: string;
    repositoryResourcePath: string;
    repositoryUrl: string;
}

export declare interface onPrivateRepositoryForkingEnableAuditEntry extends MemberNodeFields {
    repository: Repository;
    repositoryName: string;
    repositoryResourcePath: string;
    repositoryUrl: string;
}

export declare interface onRepoAccessAuditEntry extends MemberNodeFields {
    visibility: string;
}

export declare interface onRepoAddMemberAuditEntry extends MemberNodeFields {
    visibility: string;
}

export declare interface onRepoAddTopicAuditEntry extends MemberNodeFields {
    repository: Repository;
    repositoryName: string;
    repositoryResourcePath: string;
    repositoryUrl: string;
    topic: Topic;
    topicName: string;
}

export declare interface Topic {

}

export declare interface onRepoArchivedAuditEntry extends MemberNodeFields {

}

export declare interface onRepoChangeMergeSettingAuditEntry extends MemberNodeFields {
    isEnabled: boolean;
    mergeType: string;
}

export declare interface onRepoConfigDisableAnonymousGitAccessAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigDisableCollaboratorsOnlyAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigDisableSockpuppetDisallowedAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigEnableAnonymousGitAccessAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigEnableCollaboratorsOnlyAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigEnableContributorsOnlyAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigEnableSockpuppetDisallowedAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigUnlockAnonymousGitAccessAuditEntry extends MemberNodeFields {

}

export declare interface onRepoCreateAuditEntry extends MemberNodeFields {
    forkParentName: string;
    forkSourceName: string;
    visibility: string;
}

export declare interface onRepoDestroyAuditEntry extends MemberNodeFields {
    visibility: string;
}

export declare interface onRepoRemoveMemberAuditEntry extends MemberNodeFields {

}

export declare interface onRepoRemoveTopicAuditEntry extends MemberNodeFields {

}

export declare interface onRepositoryVisibilityChangeDisableAuditEntry extends MemberNodeFields {

}

export declare interface onRepositoryVisibilityChangeEnableAuditEntry extends MemberNodeFields {

}

export declare interface onTeamAddMemberAuditEntry extends MemberNodeFields {
    isLdapMapped: boolean;
    team: Team;
    teamName: string;
    teamResourcePath: string;
    teamUrl: string;
}

export declare interface onTeamAddRepositoryAuditEntry extends MemberNodeFields {
    isLdapMapped: boolean;
    team: Team;
    teamName: string;
    teamResourcePath: string;
    teamUrl: string;
}

export declare interface onTeamChangeParentTeamAuditEntry extends MemberNodeFields {
    isLdapMapped: boolean;
    parentTeam: Team;
    parentTeamName: string;
    parentTeamNameWas: string;
    parentTeamResourcePath: string;
    parentTeamUrl: string;
    parentTeamWas: Team;
    parentTeamWasResourcePath: string;
    parentTeamWasUrl: string;
    team: Team;
    teamName: string;
    teamResourcePath: string;
    teamUrl: string;
}

export declare interface onTeamRemoveMemberAuditEntry extends MemberNodeFields {
    isLdapMapped: boolean;
    team: Team;
    teamName: string;
    teamResourcePath: string;
    teamUrl: string;
}

export declare interface onTeamRemoveRepositoryAuditEntry extends MemberNodeFields {
    isLdapMapped: boolean;
    team: Team;
    teamName: string;
    teamResourcePath: string;
    teamUrl: string;
}

export declare interface onOrgUnblockUserAuditEntry extends MemberNodeFields {

}

export declare interface onOrgUpdateDefaultRepositoryPermissionAuditEntry extends MemberNodeFields {

}

export declare interface onRepoConfigDisableContributorsOnlyAuditEntry extends MemberNodeFields {

}


export declare interface AuditLogNode extends onMembersCanDeleteReposDisableAuditEntry, onMembersCanDeleteReposClearAuditEntry, onOauthApplicationCreateAuditEntry, onOrgAddMemberAuditEntry, onOrgAddBillingManagerAuditEntry,
    onOrgBlockUserAuditEntry, onOrgConfigDisableCollaboratorsOnlyAuditEntry, onOrgConfigEnableCollaboratorsOnlyAuditEntry, onOrgConfigEnableCollaboratorsOnlyAuditEntry, onOrgCreateAuditEntry, onOrgDisableOauthAppRestrictionsAuditEntry,
    onOrgDisableSamlAuditEntry, onOrgEnableOauthAppRestrictionsAuditEntry, onOrgEnableSamlAuditEntry, onOrgEnableTwoFactorRequirementAuditEntry, onOrgInviteMemberAuditEntry, onOrgInviteToBusinessAuditEntry, onOrgOauthAppAccessApprovedAuditEntry,
    onOrgOauthAppAccessDeniedAuditEntry, onOrgOauthAppAccessRequestedAuditEntry, onOrgRemoveBillingManagerAuditEntry, onOrgRemoveMemberAuditEntry, onOrgRemoveOutsideCollaboratorAuditEntry, onOrgRestoreMemberAuditEntry, onOrgUnblockUserAuditEntry,
    onOrgUpdateDefaultRepositoryPermissionAuditEntry, onOrgUpdateMemberAuditEntry, onOrgUpdateMemberRepositoryCreationPermissionAuditEntry, onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry, onPrivateRepositoryForkingDisableAuditEntry,
    onPrivateRepositoryForkingEnableAuditEntry, onRepoAccessAuditEntry, onRepoAddMemberAuditEntry, onRepoAddTopicAuditEntry, onRepoChangeMergeSettingAuditEntry, onRepoConfigDisableAnonymousGitAccessAuditEntry, onRepoConfigDisableCollaboratorsOnlyAuditEntry,
    onRepoConfigDisableContributorsOnlyAuditEntry, onRepoConfigDisableSockpuppetDisallowedAuditEntry, onRepoConfigEnableAnonymousGitAccessAuditEntry, onRepoConfigEnableCollaboratorsOnlyAuditEntry, onRepoConfigEnableContributorsOnlyAuditEntry, onRepoConfigEnableSockpuppetDisallowedAuditEntry,
    onRepoConfigUnlockAnonymousGitAccessAuditEntry, onRepoCreateAuditEntry, onRepoDestroyAuditEntry, onRepoRemoveTopicAuditEntry, onRepositoryVisibilityChangeDisableAuditEntry, onRepositoryVisibilityChangeEnableAuditEntry, onTeamAddMemberAuditEntry,
    onTeamAddRepositoryAuditEntry, onTeamChangeParentTeamAuditEntry, onTeamRemoveMemberAuditEntry, onTeamRemoveRepositoryAuditEntry {

}

export declare interface AuditLog {
    edges: {
        cursor: string;
        node: AuditLogNode;
    }[];
    nodes: AuditLogNode[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Domain {
    createdAt: string;
    databaseId: number;
    dnsHostName: string;
    domain: string;
    hasFoundHostName: string;
    hasFoundVerificationToken: string;
    id: number | string;
    isRequiredForPolicyEnforcement: boolean;
    isVerified: boolean;
    owner: Owner;
    punycodeEncodedDomain: string;
    tokenExpirationTime: string;
    updatedAt: string;
    verificationToken: string;
}

export declare interface Domains {
    edges: {
        cursor: string;
        node: Domain;
    }[];
    nodes: Domain[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Item extends Gist, Repository {

}

export declare interface Items {
    edges: {
        cursor: string;
        node: Item;
    }[];
    nodes: Item[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface MemberStatus {
    createdAt: string;
    emoji: string;
    emojiHTML: string;
    expiresAt: string;
    id: number|string;
    indicatesLimitedAvailability: boolean;
    message: string;
    organization: OrganizationInfo | string;
    updatedAt: string;
    user: UserInfo;
}

export declare interface MemberStatuses {
    edges: {
        cursor: string;
        node: MemberStatus;
    }[];
    nodes: MemberStatus[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface MembersWithRole {
    edges: {
        cursor: string;
        node: UserInfo;
    }[];
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface PendingMembers {
    edges: {
        cursor: string;
        node: UserInfo;
    }[];
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface OrganizationItem extends Gist, RepositoryInfo {

}

export declare interface SamlIdentity {
    emails: {
        primary: boolean;
        type: string;
        value: string;
    }[];
    familyName: string;
    givenName: string;
    groups: string[]
    nameId: string;
    username: string;
}

export declare interface ScimIdentity {
    emails: {
        primary: boolean;
        type: string;
        value: string;
    }[];
    familyName: string;
    givenName: string;
    groups: string[]
    nameId: string;
    username: string;
}

export declare interface ExternalIdentity {
    guid: string;
    id: string| number;
    organizationInvitation: Invitation;
    samlIdentity: SamlIdentity;
    scimIdentity: ScimIdentity;
    user: UserInfo;
}

export declare interface ExternalIdentities {
    edges: {
        cursor: string;
        node: ExternalIdentity;
    }[];
    nodes: ExternalIdentity[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface SamlIdentityProvider {
    digestMethod: string;
    id: string;
    idpCertificate: string;
    issuer: string;
    organizaiton: OrganizationInfo;
    signatureMethod: string;
    ssoUrl: string;
}

export declare interface SponsorshipForViewerAsSponsor {
    createdAt: string;
    id: string;
    isOneTimePayment: boolean;
    maintainer: UserInfo;
    privacyLevel: string;
    sponsor: UserInfo;
    sponsorEntity: SponsorEntity;
    sponsorable: Sponsorable;
    tier: Tier;
    tierSelectedAt: string;
}

export declare interface SponsorEntity extends OrganizationInfo, UserInfo {

}

export declare interface Projects {
    edges: {
        cursor: string;
        node: Project;
    }[]
    nodes: Project[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface Sponsorable {
    hasSponsorsListing: boolean;
    isSponsoredBy: boolean;
    isSponsoringViewer: boolean;
    sponsorsListing: SponsorsListing;
    sponsorshipForViewerAsSponsor: SponsorshipForViewerAsSponsor;
    sponsorshipsAsMaintainer: SponsorshipsAsMaintainer;

}

export declare interface Sponsorships {
    createdAt: string;
    id: string;
    isOneTimePayment: boolean;
    maintainer: UserInfo;
    privacyLevel: string;
    sponsor: UserInfo;
    sponsorEntity: SponsorEntity;
    sponsorable: Sponsorable;
    tier: Tier;
    tierSelectedAt: string;
}


export declare interface SponsorshipsAsMaintainer {
    edges: {
        cursor: string;
        node: Sponsorships;
    }[]
    nodes: Sponsorships[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface SponsorshipsAsSponsor {
    edges: {
        cursor: string;
        node: Sponsorships;
    }[]
    nodes: Sponsorships[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface Teams {
    edges: {
        cursor: string;
        node: Team;
    }[]
    nodes: Team[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface Discussions {
    edges: {
        cursor: string;
        node: Discussion;
    }[]
    nodes: Discussion[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface Invitation {
    createdAt: string;
    email: string;
    id: number|string;
    invitationType: string;
    invitee: UserInfo;
    inviter: UserInfo;
    organization: OrganizationInfo | string;
    role: string;
}

export declare interface Invitations {
    edges: {
        cursor: string;
        node: Invitation;
    }[]
    nodes: Invitation[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface Members {
    edges: {
        cursor: string;
        node: UserInfo;
    }[]
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface ReactionGroups {

}

export declare interface Reactions {

}

export declare interface UserContentEdits {

}

type ItemShowcase = {
    edges: {
        node: UserItems
    }[];
    nodes: UserItems[];
    pageInfo: PageInfo;
    totalCount: number;
} | Items

export declare interface SecurityVulnerability {
    advisory: SecurityAdvisory;
    firstPatchedVersion: { identifier: string }
    vulnerableVersionRange: string;
    updatedAt: string;
    severity: string;
    package: {
        ecosystem: string;
        name: string;
    }
}

declare interface MembersReposType {
    action: string;
    actor: Actor;
    actorIp: string;
    actorLocation: {
        city: string;
        country: string;
        countryCode: string;
        region: string;
        regionCode: string;
    }
    actorLogin: string;
    actorResourcePath: string;
    actorUrl: string;
    applicationUrl: string;
    callbackUrl: string;
    createdAt: string;
    id: string | number;
    operationType: string;
    organization: OrganizationInfo | string;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
    user: UserInfo;
    userLogin: string;
    userResourcePath: string;
    userUrl: string;
}

export declare interface NodeTypes extends CodeOfConduct, Enterprise, EnterpriseUserAccount, OrganizationInfo, Package, PackageVersion, PackageFile, Release, User, Project, ProjectColunm, ProjectCard, Issue, UserContentEdits, Label, PullRequest,
    Reaction, Repository, License, BranchProtectionRule, Ref, PushAllowance, App, Team, UserStatus, TeamDiscussion, TeamDiscussionComment, OrganizationInvitation, ReviewDismissalAllowance, CommitComment, Commit, CheckSuite, CheckRun, Push, Deployment,
    DeploymentStatus, Status, StatusContext, StatusCheckRollup, Tree, DeployKey, Language, Milestone, PinnedIssue, RepositoryTopic, Topic, RepositoryVulnerabilityAlert, SecurityAdvisory, CWE, IssueComment, PullRequestCommit, PullRequestReview,
    PullRequestReviewComment, ReviewRequest, Mannequin, PullRequestReviewThread, AssignedEvent, Bot, BaseRefDeletedEvent, BaseRefForcePushedEvent, ClosedEvent, CommitCommentThread, CrossReferencedEvent, DemilestonedEvent, DeployedEvent, DeploymentEnvironmentChangedEvent,
    HeadRefDeletedEvent, HeadRefForcePushedEvent, HeadRefRestoredEvent, LabeledEvent, LockedEvent, MergedEvent, MilestonedEvent, ReferencedEvent, RenamedTitleEvent, ReopenedEvent, ReviewDismissedEvent, ReviewRequestRemovedEvent, ReviewRequestedEvent,
    SubscribedEvent, UnassignedEvent, UnlabeledEvent, UnlockedEvent, UnsubscribedEvent, UserBlockedEvent, AddedToProjectEvent, AutoMergeDisabledEvent, AutoMergeEnabledEvent, AutoRebaseEnabledEvent, AutoSquashEnabledEvent, AutomaticBaseChangeFailedEvent, AutomaticBaseChangeSucceededEvent,
    BaseRefChangedEvent, CommentDeletedEvent, ConnectedEvent, ConvertToDraftEvent, ConvertedNoteToIssueEvent, DisconnectedEvent, MarkedAsDuplicateEvent, MentionedEvent, MovedColumnsInProjectEvent, PinnedEvent, PullRequestCommitCommentThread, ReadyForReviewEvent,
    RemovedFromProjectEvent, TransferredEvent, UnmarkedAsDuplicateEvent, UnpinnedEvent, Gist, GistComment, SponsorsListing, SponsorsTier, Sponsorship, PublicKey, SavedReply, ReleaseAsset, MembersCanDeleteReposClearAuditEntry, MembersCanDeleteReposDisableAuditEntry, MembersCanDeleteReposEnableAuditEntry,
    OauthApplicationCreateAuditEntry, OrgAddBillingManagerAuditEntry, OrgAddMemberAuditEntry, OrgBlockUserAuditEntry, OrgConfigDisableCollaboratorsOnlyAuditEntry, OrgConfigEnableCollaboratorsOnlyAuditEntry, OrgCreateAuditEntry, OrgDisableOauthAppRestrictionsAuditEntry, OrgDisableSamlAuditEntry,
    OrgDisableTwoFactorRequirementAuditEntry, OrgEnableOauthAppRestrictionsAuditEntry, OrgEnableSamlAuditEntry, OrgEnableTwoFactorRequirementAuditEntry, OrgInviteMemberAuditEntry, OrgInviteToBusinessAuditEntry, OrgOauthAppAccessApprovedAuditEntry, OrgOauthAppAccessDeniedAuditEntry,
    OrgOauthAppAccessRequestedAuditEntry, OrgRemoveBillingManagerAuditEntry, OrgRemoveMemberAuditEntry, OrgRemoveOutsideCollaboratorAuditEntry, OrgRestoreMemberAuditEntry, OrgUnblockUserAuditEntry, OrgUpdateDefaultRepositoryPermissionAuditEntry, OrgUpdateMemberAuditEntry, OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
    OrgUpdateMemberRepositoryInvitationPermissionAuditEntry, PrivateRepositoryForkingDisableAuditEntry, PrivateRepositoryForkingEnableAuditEntry, RepoAddTopicAuditEntry, RepoChangeMergeSettingAuditEntry,
    RepoCreateAuditEntry, TeamAddMemberAuditEntry, TeamChangeParentTeamAuditEntry, VerifiableDomain, IpAllowListEntry, OrganizationIdentityProvider, ExternalIdentity, EnterpriseServerInstallation, EnterpriseServerUserAccount, EnterpriseServerUserAccountEmail,
    EnterpriseServerUserAccountsUpload, EnterpriseRepositoryInfo, EnterpriseAdministratorInvitation, RepositoryInvitation, EnterpriseIdentityProvider, MarketplaceCategory, MarketplaceListing, Blob, PackageTag, Tag {

}

export declare interface PackageTag {
    id: string | number;
    name: string;
    version: Version | string;
}

export declare interface EnterpriseIdentityProvider {
    enterprise: Enterprise;
    externalIdentities: ExternalIdentities;
    id: string | number;
    digestMethod: string;
    idpCertificate: string;
    issuer: string;
    recoveryCodes: string[];
    signatureMethod: string;
    ssoUrl: string;
}

export declare interface RepositoryInvitation {
    id: string | number;
    invitee: UserInfo;
    inviteer: UserInfo;
    email: string;
    permalink: string;
    permission: string;
    repository: RepositoryInfo;
}

export declare interface EnterpriseRepositoryInfo {
    name: string;
    isPrivate: boolean;
    nameWithOwner: string;
    id: number | string;
}

export declare interface EnterpriseServerUserAccountsUpload {
    enterprise: Enterprise;
    enterpriseServerInstallation: EnterpriseServerInstallation;
    id: string | number;
    name: string;
    createdAt: string;
    syncState: string;
    updatedAt: string;
}

export declare interface EnterpriseServerUserAccountEmail {
    createdAt: string;
    email: string;
    id: string | number;
    isPrimary: boolean;
    updatedAt: string;
    userAccount: EnterpriseUserAccountNode;
}

export declare interface EnterpriseServerUserAccount extends MembersReposType {
    createdAt: string;
    emails: Emails;
    enterpriseServerInstallation: EnterpriseServerInstallation;
    id: string | number;
    isSiteAdmin: boolean;
    login: string;
    profileName: string;
    remoteCreatedAt: string;
    remoteUserId: number;
    updatedAt: string;
}

export declare interface EnterpriseServerInstallation {
    createdAt: string;
    customerName: string;
    hostName: string;
    id: string | number;
    isConnected: boolean;
    updatedAt: string;
    userAccounts:UserAccounts| EnterpriseUserAccounts;
    userAccountsUploads: UserAccountsUploads;
}

export declare interface OrganizationIdentityProvider {
    digestMethod: string;
    externalIdentities: ExternalIdentities;
    id: string | number;
    idpCertificate: string;
    issuer: string;
    signatureMethod: string;
    ssoUrl: string;
    organization: OrganizationInfo | string;
}

export declare interface IpAllowListEntry {
    allowListValue: string;
    createdAt: string;
    id: string | number;
    isActive: boolean;
    name: string;
    owner: Owner;
    updatedAt: string;
}

export declare interface VerifiableDomain extends MembersReposType {
    databaseId: number;
    dnsHostName: string;
    domain: string;
    hasFoundHostName: boolean;
    hasFoundVerificationToken: boolean;
    id: string | number;
    isRequiredForPolicyEnforcement: boolean;
    isVerified: boolean;
    owner: Owner;
    punycodeEncodedDomain: string;
    tokenExpirationTime: string;
    updatedAt: string;
    verificationToken: string;
}

export declare interface TeamChangeParentTeamAuditEntry extends MembersReposType {
    isLdapMapped: boolean;
    parentTeam: Team;
    parentTeamName: string;
    parentTeamNameWas: string;
    parentTeamResourcePath: string;
    parentTeamUrl: string;
    parentTeamWas: Team;
    parentTeamWasUrl: string;
    team: Team;
    teamName: string;
    teamResourcePath: string;
    teamUrl: string;
}

export declare interface TeamAddMemberAuditEntry extends MembersReposType {
    isLdapMapped: boolean;
    team: Team;
    teamName: string;
    teamResourcePath: string;
    teamUrl: string;
}

export declare interface RepoCreateAuditEntry extends MembersReposType {
    forkParentName: string;
    forkSourceName: string;
}

export declare interface RepoChangeMergeSettingAuditEntry extends MembersReposType {
    isEnabled: boolean;
    mergeType: string;
}

export declare interface RepoAddTopicAuditEntry extends MembersReposType {
    topic: Topic;
    topicName: string;
}

export declare interface PrivateRepositoryForkingEnableAuditEntry extends MembersReposType {
    enterpriseResourcePath: string;
    enterpriseSlug: string;
    enterpriseUrl: string;
}

export declare interface PrivateRepositoryForkingDisableAuditEntry extends MembersReposType {
    enterpriseResourcePath: string;
    enterpriseSlug: string;
    enterpriseUrl: string;
}

export declare interface OrgUpdateMemberRepositoryInvitationPermissionAuditEntry extends MembersReposType {
    canInviteOutsideCollaboratorsToRepositories: boolean;
}

export declare interface OrgUpdateMemberRepositoryCreationPermissionAuditEntry extends MembersReposType {
    canCreateRepositories: boolean;
    visibility: string;
}

export declare interface OrgUpdateMemberAuditEntry extends MembersReposType {
    permission: string;
    permissionWas: string;
}

export declare interface OrgUpdateDefaultRepositoryPermissionAuditEntry extends MembersReposType {
    permission: string;
    permissionWas: string;
}

export declare interface OrgUnblockUserAuditEntry extends MembersReposType {
    blockedUserName: string;
    blockedUserResourcePath: string;
    blockedUserUrl: string;
    blockedUser: UserInfo;
}

export declare interface OrgRestoreMemberAuditEntry extends MembersReposType {
    restoredCustomEmailRoutingsCount: number;
    restoredIssueAssignmentsCount: number;
    restoredMemberships: RestoredMemberships;
    restoredMembershipsCount: number;
    restoredRepositoriesCount: number;
    restoredRepositoryStarsCount: number;
    restoredRepositoryWatchesCount: number;
}

export declare interface OrgRemoveMemberAuditEntry extends MembersReposType {
    membershipTypes: string[];
    reason: string;
}

export declare interface OrgRemoveOutsideCollaboratorAuditEntry extends MembersReposType {
    membershipTypes: string[];
    reason: string;
}

export declare interface OrgRemoveBillingManagerAuditEntry extends MembersReposType {
    membershipTypes: string[];
    reason: string;
}

export declare interface OrgRemoveBillingManagerAuditEntry extends MembersReposType {
    reason: string;
}

export declare interface OrgOauthAppAccessRequestedAuditEntry extends MembersReposType {
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
}

export declare interface OrgOauthAppAccessDeniedAuditEntry extends MembersReposType {
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
}

export declare interface OrgOauthAppAccessApprovedAuditEntry extends MembersReposType {
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
}

export declare interface OrgInviteToBusinessAuditEntry extends MembersReposType {
    enterpriseResourcePath: string;
    enterpriseSlug: string;
    enterpriseUrl: string;
}

export declare interface OrgInviteMemberAuditEntry extends MembersReposType {
    email: string;
}

export declare interface OrgEnableTwoFactorRequirementAuditEntry extends MembersReposType {

}

export declare interface OrgEnableOauthAppRestrictionsAuditEntry extends MembersReposType {

}

export declare interface OrgEnableSamlAuditEntry extends MembersReposType {
    digestMethodUrl: string;
    issuerUrl: string;
    singleSignOnUrl: string;
    signatureMethodUrl: string;
}

export declare interface OrgEnableOauthAppRestrictionsAuditEntry extends MembersReposType {

}

export declare interface OrgDisableTwoFactorRequirementAuditEntry extends MembersReposType {

}

export declare interface OrgDisableSamlAuditEntry extends MembersReposType {
    digestMethodUrl: string;
    issuerUrl: string;
    signatureMethodUrl: string;
    singleSignOnUrl: string;
}

export declare interface OrgDisableOauthAppRestrictionsAuditEntry extends MembersReposType {

}

export declare interface OrgCreateAuditEntry extends MembersReposType {
    billingPlan: string;
}

export declare interface OrgConfigEnableCollaboratorsOnlyAuditEntry extends MembersReposType {

}

export declare interface OrgConfigDisableCollaboratorsOnlyAuditEntry extends MembersReposType {

}

export declare interface OrgAddBillingManagerAuditEntry extends MembersReposType {
    invitationEmail: string;
}

export declare interface OrgAddMemberAuditEntry extends MembersReposType {
    permission: string;
}

export declare interface OrgBlockUserAuditEntry extends MembersReposType {
    blockedUser: UserInfo;
    blockedUserName: string;
    blockedUserResourcePath: string;
    blockedUserUrl: string;
}

export declare interface MembersCanDeleteReposClearAuditEntry extends MembersReposType {
    enterpriseResourcePath: string;
    enterpriseSlug: string;
    enterpriseUrl: string;
}

export declare interface MembersCanDeleteReposDisableAuditEntry extends MembersReposType {
    enterpriseResourcePath: string;
    enterpriseSlug: string;
    enterpriseUrl: string;
}

export declare interface MembersCanDeleteReposEnableAuditEntry extends MembersReposType {
    enterpriseResourcePath: string;
    enterpriseSlug: string;
    enterpriseUrl: string;
}

export declare interface SavedReply {
    id: string | number;
    body: string;
    bodyHTML: string;
    databaseId: number;
    title: string;
    user: UserInfo;
}

export declare interface PublicKey {
    accessedAt: string;
    createdAt: string;
    fingerprint: string;
    id: string | number;
    isReadOnly: boolean;
    key: string;
    updatedAt: string;
}

export declare interface Sponsorship {
    createdAt: string;
    id: string | number;
    isOneTimePayment: boolean;
    maintainer: UserInfo;
    privacyLevel: string;
    sponsor: UserInfo;
    sponsorEntity: Actor;
    sponsorable: Sponsorable;
    tier: Tier;
    tierSelectedAt: string;
}


export declare interface SponsorsTier extends Tier {

}

export declare interface GistComment extends Comment {

}

export declare interface OauthApplicationCreateAuditEntry {
    action: string;
    actor: Actor;
    actorIp: string;
    actorLocation: {
        city: string;
        country: string;
        countryCode: string;
        region: string;
        regionCode: string;
    }
    actorLogin: string;
    actorResourcePath: string;
    actorUrl: string;
    applicationUrl: string;
    callbackUrl: string;
    createdAt: string;
    id: string | number;
    oauthApplicationName: string;
    oauthApplicationResourcePath: string;
    oauthApplicationUrl: string;
    operationType: string;
    organization: OrganizationInfo | string;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
    rateLimit: number;
    state: string;
    user: UserInfo;
    userLogin: string;
    userResourcePath: string;
    userUrl: string;
}

export declare interface RepositoryVulnerabilityAlert {
    id: string | number;
    createdAt: string;
    dismissReason: string;
    dismissedAt: string;
    dismisser: UserInfo;
    repository: RepositoryInfo;
    securityAdvisory: SecurityAdvisory;
    securityVulnerability: SecurityVulnerability;
    vulnerableManifestFilename: string;
    vulnerableManifestPath: string;
    vulnerableRequirements: string;
}

export declare interface RepositoryTopic {
    id: string | number;
    resourcePath: string;
    topic: Topic;
    url: string;
}

export declare interface PinnedIssue {
    id: string | number;
    databaseId: number;
    issue: Issue;
    pinnedBy: Owner;
    repository: RepositoryInfo;
}

export declare interface Language {
    id: string | number;
    name: string;
    color: string;
}

export declare interface StatusContext {
    avatarUrl: string;
    commit: Commit;
    context: string;
    createdAt: string;
    creator: Owner;
    description: string;
    id: string | number;
    isRequired: boolean;
    state: string;
    targetUrl: string;
}

export declare interface DeploymentStatus {
    createdAt: string;
    creator: Owner;
    description: string;
    deployment: Deployment;
    environmentUrl: string;
    id: string | number;
    logUrl: string;
    state: string;
    updatedAt: string;
}
export declare interface ReviewDismissalAllowance {
    actor: Actor;
    branchProtectionRule: BranchProtectionRule;
    id: string | number;
}

export declare interface Push {
    id: string | number;
    nextSha: string;
    permalink: string;
    previousSha: string;
    pusher: UserInfo;
    repository: RepositoryInfo;
}
export declare interface ProjectColunm {
    cards: Cards;
    createdAt: string;
    databaseId: number;
    id: string | number;
    name: string;
    project: Project;
    purpose: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface PackageVersion {
    files: Files;
    id: number | string;
    package: Package;
    platform: string;
    preRelease: boolean;
    readme: string;
    release: Release;
    statistics: { downloadsTotalCount: number }
    summary: string;
    version: string | Version;
}

export declare interface PackageFile {
    id: string | number;
    name: string;
    packageVersion: Package;
    md5: string;
    sha1: string;
    sha256: string;
    size: number;
    updatedAt: string;
    url: string;
}

export declare interface PushAllowance {
    actor: Actor;
    branchProtectionRule: BranchProtectionRule;
    id: number | string;
}

export declare interface UserStatus {
    createdAt: string;
    emoji: string;
    emojiHTML: string;
    expiresAt: string;
    id: string | number;
    indicatesLimitedAvailability: boolean;
    organization: OrganizationInfo | string;
    message: string;
    updatedAt: string;
    user: UserInfo;
}

export declare interface OrganizationInvitation {
    createdAt: string;
    email: string;
    id: string | number;
    invitationType: string;
    inviter: UserInfo;
    invitee: UserInfo;
    organization: OrganizationInfo | string;
    role: string;
}

export declare interface Node {
    node: NodeTypes;
}

export declare interface Nodes {
    nodes: NodeTypes;
}

export declare interface Meta {
    meta: {
        gitHubServicesSha: string;
        gitIpAddresses: string[];
        hookIpAddresses: string[];
        importerIpAddresses: string[];
        isPasswordAuthenticationVerifiable: boolean;
        pagesIpAddresses: string[];
    }
}

export declare interface MarketplaceListing {
    app: App;
    companyUrl: string;
    configurationResourcePath: string;
    configurationUrl: string;
    documentationUrl: string;
    extendedDescription: string;
    extendedDescriptionHTML: string;
    fullDescription: string;
    fullDescriptionHTML: string;
    hasPublishedFreeTrialPlans: boolean;
    hasTermsOfService: boolean;
    hasVerifiedOwner: boolean;
    howItWorks: string;
    howItWorksHTML: string;
    id: number | string;
    installationUrl: string;
    installedForViewer: boolean;
    isArchived: boolean;
    isDraft: boolean;
    isPaid: boolean;
    isPublic: boolean;
    isRejected: boolean;
    isUnverified: boolean;
    isUnverifiedPending: boolean;
    isVerificationPendingFromDraft: boolean;
    isVerificationPendingFromUnverified: boolean;
    isVerified: boolean;
    logoBackgroundColor: string;
    logoUrl: string;
    name: string;
    normalizedShortDescription: string;
    pricingUrl: string;
    primaryCategory: Category;
    privacyPolicyUrl: string;
    resourcePath: string;
    screenshotUrls: string[];
    secondaryCategory: Category;
    shortDescription: string;
    slug: string;
    statusUrl: string;
    supportEmail: string;
    supportUrl: string;
    termsOfServiceUrl: string;
    url: string;
    viewerCanAddPlans: boolean;
    viewerCanApprove: boolean;
    viewerCanDelist: boolean;
    viewerCanEdit: boolean;
    viewerCanEditCategories: boolean;
    viewerCanEditPlans: boolean;
    viewerCanRedraft: boolean;
    viewerCanReject: boolean;
    viewerCanRequestApproval: boolean;
    viewerHasPurchased: boolean;
    viewerHasPurchasedForAllOrganizations: boolean;
    viewerIsListingAdmin: boolean;
}

export declare interface MarketplaceListingsQuery {
    marketplaceListings: MarketplaceListings;
}

export declare interface MarketplaceListings {
    edges: {
        cursor: string;
        node: MarketplaceListing;
    }[];
    nodes: MarketplaceListing[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface MarketplaceListingQuery {
    marketplaceListing: MarketplaceListing;
}

export declare interface App {

}

export declare interface Category {
    description: string;
    howItWorks: string;
    id: number|string;
    name: string;
    primaryListingCount: number;
    resourcePath: string;
    secondaryListingCount: number;
    slug: string;
    url: string;
}

export declare interface MarketplaceCategoryQuery {
    marketplaceCategory: Category;
}

export declare interface MarketplaceCategoriesQuery {
    marketplaceCategories: Category[];
}
export declare interface License {
    body: string;
    conditions: {
        description: string;
        key: string;
        label: string;
    }[]
    description: string;
    featured: string;
    hidden: string;
    id: string | number;
    implementation: string;
    key: string;
    limitations: {
        description: string;
        key: string;
        label: string;
    }[]
    name: string;
    nickname: string;
    permissions: {
        description: string;
        key: string;
        label: string;
    }[]
    pseudoLicense: string;
    spdxId: string;
    url: string;
}

export declare interface LicensesQuery {
    licenses: License[]
}

export declare interface LicenseQuery {
    license: License
}

export declare interface EnterpriseAdministratorInvitation {
    enterpriseAdministratorInvitation: Invitation
}

export declare interface EnterpriseAdministratorInvitationByToken {
    enterpriseAdministratorInvitationByToken: Invitation
}
export declare interface EnterpriseQuery {
    enterprise: Enterprise;
}

export declare interface BillingInfo {
    allLicensableUsersCount: number;
    assetPacks: number;
    availableSeats: number;
    bandwidthQuota: number;
    bandwidthUsage: number;
    bandwidthUsagePercentage: number;
    seats: number;
    storageQuota: number;
    storageUsage: number;
    storageUsagePercentage: number;
    totalAvailableLicenses: number;
    totalLicenses: number;
}

export declare interface CodeOfConduct {
    body: string;
    id: number | string;
    key: string;
    name: string;
    resourcePath: string;
    url: string;
}

export declare interface CodeOfConductQuery {
    codeOfConduct: CodeOfConduct;
}

export declare interface CodesOfConductQuery {
    codesOfConduct: CodeOfConduct[];
}

export declare interface Email {
    createdAt: string;
    email: string;
    id: string | number;
    isPrimary: boolean;
    updatedAt: string;
    userAccount: EnterpriseUserAccountNode;
}

export declare interface Emails {
    edges: {
        cursor: string;
        node: Email;
    }[];
    nodes: Email[];
    pageInfo: PageInfo;
    totalCount: number;
}

declare interface EnterpriseUserAccountNode {
    createdAt: string;
    emails: Emails;
    enterpriseServerInstallation: EnterpriseServerInstallation;
    userAccount: EnterpriseUserAccountNode;
    userAccountsUploads: UserAccountsUploads;
    id: string | number;
    isSiteAdmin: boolean;
    login: string;
    profileName: string;
    remoteCreatedAt: string;
    remoteUserId: number;
    updatedAt: string;
}

export declare interface EnterpriseUserAccounts {
    edges: {
        cursor: string;
        node: EnterpriseUserAccountNode;
    }[];
    nodes: EnterpriseUserAccountNode[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface UserAccountsUpload {
    createdAt: string;
    enterprise: Enterprise;
    enterpriseServerInstallation: EnterpriseServerInstallation;
    name: string;
    syncState: string;
    updatedAt: string;
}

export declare interface UserAccountsUploads {
    edges: {
        cursor: string;
        node: UserAccountsUpload;
    }[];
    nodes: UserAccountsUpload[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface EnterpriseServerInstallation {
    createdAt: string;
    customerName: string;
    hostName: string;
    id: string | number;
    isConnected: boolean;
    updatedAt: string;
    userAccount: EnterpriseUserAccountNode;
    userAccountsUploads: UserAccountsUploads;
}

type Content = string | CardItems | Source 