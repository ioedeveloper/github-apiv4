
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
    organization: OrganizationInfo
    organizationVerifiedDomainEmails: (login: string) => {

    };
    organizations: OrganizationInfo[];
    packages: {
        edges: [{
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
    size: string;
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
    viewerCanAdminister:boolean;
    viewerCanCreateProjects: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdateTopics:boolean;
    viewerDefaultCommitEmail: string;
    viewerDefaultMergeMethod: string;
    viewerHasStarred: boolean;
    viewerPermission: string;
    viewerPossibleCommitEmails: [];
    viewerSubscription: string;
    vulnerabilityAlerts: VulnerabilityAlerts;

}
export declare interface License {
    body: string;
    conditions: {
        description: string;
        key: string;
        label: string;
    }[]
    description: string;
    featured: boolean;
    hidden: boolean;
    id: number;
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
                    createdViaEmail: string;
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
    content: Source;
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
    organization: Organization;
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
    viewerSubscription: boolean;
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
    organization: OrganizationInfo
    user: User;
    bannequin: Mannequin;
    bot: Bot;

}


export declare interface EnterpriseUserAccount {
    avatarUrl: string;
    createdAt: string;
    enterprise: Enterprise;
    id: number;
    login: string;
    name: string;
    organization: OrganizationInfo;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Enterprise {

}

export declare interface Organization {
    organization: OrganizationInfo;
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
    content: string;
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
    content: string;
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
    version: string;
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
    version: Version;
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
    name: number;
    sponsorsListing: SponsorsListing;
    updatedAt: string;
}

export declare interface Sponsor {
    organization: OrganizationInfo;
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
    id: string;
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
    screenshotUrls: string;
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

export declare interface MarketplaceListings{
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
    id: number;
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
