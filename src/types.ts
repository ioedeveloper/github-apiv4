
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
    contributionsCollection: ContributionsCollection;
    createdAt: string;
    databaseId: number;
    email: string;
    followers: Followers;
    following: Following;
    gist: Gist;
    gistComments: GistComments;
    gists: Gists;
    hasSponsorsListing: boolean;
    hovercard: HoverCard;
    id: number;
    interactionAbility: {
        expiresAt: string;
        limit: number;
        origin: string;
    }
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isEmployee: boolean;
    isSponsoredBy: boolean;
    isSponsoringViewer: boolean;
    isHireable: boolean;
    isViewer: boolean;
    issueComments: IssueComments;
    issues: Issues;
    itemShowcase: {
        hasPinnedItems: boolean;
        items: {
            edges: {
                node: UserItems
            }[];
            nodes: UserItems[];
            pageInfo: PageInfo;
            totalCount: number;
        }
    }
    location: string;
    login: string;
    name: string;
    organization: Organization
    organizationVerifiedDomainEmails: string[];
    organizations: Organizations;
    packages: Packages;
    pinnableItems: {
        edges: {
            cursor: string;
            node: UserItems
        }[]
        nodes: UserItems[];
        pageInfo: PageInfo;
        totalCount: number
    };
    pinnedItems: {
        edges: {
            cursor: string;
            node: UserItems
        }[]
        nodes: UserItems[]
        pageInfo: PageInfo;
        totalCount: number
    };
    pinnedItemsRemaining: number;
    url: string;
    project: Project;
    projects: {
        edges: {
            cursor: string;
            node: Project;
        }[]
        nodes: Project[];
        pageInfo: PageInfo;
        totalCount: number
    }
    projectsResourcePath: string;
    projectsUrl: string;
    publicKeys: {
        edges: {
            cursor: string;
            node: {
                accessedAt: string
                createdAt: string
                fingerprint: string
                id: number;
                isReadOnly: boolean
                key: string
                updatedAt: string
            };
        }[]
        nodes: {
            accessedAt: string
            createdAt: string
            fingerprint: string
            id: number;
            isReadOnly: boolean
            key: string
            updatedAt: string
        }[]
        pageInfo: PageInfo;
        totalCount: number;
    }
    pullRequests: {
        edges: {
            cursor: string,
            node: PullRequest
        }[]
        nodes: PullRequest[]
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
    sponsorshipForViewerAsSponsor: SponsorShip;
    sponsorshipsAsMaintainer: {
        edges: {
            cursor: string;
            node: SponsorShip;
        }[]
        nodes: SponsorShip[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    sponsorshipsAsSponsor: {
        edges: {
            cursor: string;
            node: SponsorShip;
        }[]
        nodes: SponsorShip[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    starredRepositories: {
        edges: {
            cursor: string;
            node: RepositoryInfo;
        }[]
        nodes: RepositoryInfo[];
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
        organization: Organization;
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
    defaultBranchRef: Ref;
    deleteBranchOnMerge: boolean;
    deployKeys: DeployKeys;
    deployments: Deployments;
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
    interactionAbility: {
        expiresAt: string;
        limit: number;
        origin: string;
    }
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
    isUserConfigurationRepository: boolean;
    issue: Issue;
    issueOrPullRequest: Source;
    issueTemplates: {
        about: string;
        body: string;
        name: string;
        title: string;
    }[]
    issues: Issues;
    label: Label;
    labels: Labels;
    languages: Langueges;
    latestRelease: Release;
    licenseInfo: License;
    lockReason: string;
    mentionableUsers: Collaborators
    mergeCommitAllowed: boolean;
    milestone: Milestone;
    milestones: Milestones;
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
    viewerHasStarred: boolean;
    viewerPermission: string;
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
    relatedTopics: Topic;
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
    abbreviatedOid: string;
    additions: number;
    associatedPullRequests: PullRequests;
    author: Owner;
    authoredByCommitter: boolean;
    authoredDate: string;
    authors: Authors;
    blame: {
        ranges: BlameRange[];
    }
    changedFiles: number;
    checkSuites: CheckSuites;
    comments: Comments;
    commitResourcePath: string;
    commitUrl: string;
    committedDate: string;
    committedViaWeb: string;
    committer: {
        avatarUrl: string;
        date: string;
        email: string;
        name: string;
        user: UserInfo;
    }
    deletions: number;
    deployments: Deployments;
    file: File;
    history: History;
    id: number;
    message: string;
    messageBody: string;
    messageBodyHTML: string;
    messageHeadline: string;
    messageHeadlineHTML: string;
    oid: string;
    onBehalfOf: Organization;
    parents: Commits;
    pushedDate: string;
    repository: RepositoryInfo;
    status: CommitStatus;
    statusCheckRollup: StatusCheckRollup;
    submodules: Submodules;
    tarballUrl: string;
    tree: Tree;
    treeResourcePath: string;
    treeUrl: string;
    url: string;
    viewerCanSubscribe: boolean;
    viewerSubscription: string;
    zipballUrl: string;
}

export declare interface BlameRange {
    age: number;
    commit: Commit;
    endingLine: number;
    startingLine: number;
}

export declare interface Languege {
    color: string;
    id: number;
    name: string;
}

export declare interface Langueges {
    edges: {
        node: Languege;
        cursor: string;
    }[];
    nodes: Languege[];
    pageInfo: PageInfo;
    totalCount: number;
    totalSize: number;
}

export declare interface Commits {
    edges: {
        node: {
            commit: Commit;
            id: number;
            pullRequest: PullRequest;
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
    name: string;
    id: number;
    body: string;
    key: string;
    resourcePath: string;
    url: string;
}

export declare interface Followers {
    edges: {
        node: UserInfo;
        cursor: string;
    }[];
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Following {
    edges: {
        node: UserInfo;
        cursor: string;
    }[];
    nodes: UserInfo[]
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
    assignees: Assignees;
    author: Owner;
    authorAssociation: string;
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
    editor: Owner;
    hovercard: HoverCard;
    id: number;
    includesCreatedEdit: boolean;
    isPinned: boolean;
    isReadByViewer: boolean;
    labels: Labels;
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
        octicon: string
        relevantOrganizations: RelevantOrganizations;
        relevantTeams: RelevantTeams;
        reviewDecision: string;
        __typename: string;
        teamsResourcePath: string;
        teamsUrl: string;
        totalOrganizationCount: number;
        totalTeamCount: number;
        viewer: UserInfo
    }[]
}
export declare interface Team {
    ancestors: Team[]
    avatarUrl: string;
    childTeams: Team[]
    combinedSlug: string;
    createdAt: string;
    databaseId: number;
    description: string;

}

export declare interface Discussion {
    author: Owner;
    authorAssociation: string;
    body: string;
    bodyHTML: string;
    bodyText: string;
    bodyVersion: string;
    comments: Comments
    commentsResourcePath: string;
    commentsUrl: string;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Owner;
    id: number;
    includesCreatedEdit: boolean;
    isPinned: boolean;
    isPrivate: boolean;
    lastEditedAt: string;
    number: number;
    publishedAt: string;
    reactionGroups: ReactionGroup[];
}

export declare interface Owner extends EnterpriseUserAccount, Organization, UserInfo, Mannequin, Bot {
    avatarUrl: string;
    login: string;
    resourcePath: string;
    url: string;
}


export declare interface EnterpriseUserAccount {
    avatarUrl: string;
    createdAt: string;
    enterprise: Enterprise;
    id: number;
    login: string;
    name: string;
    organization: Organization;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Enterprise {

}

export declare interface Organization {

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
    subject: Subject;
    users: Users;
    viewerHasReacted: boolean;
}

export declare interface Reaction {
    content: string;
    createdAt: string;
    databaseId: number
    id: number;
    reactable: Reactable;
}

export declare interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
}

export declare interface PullRequest {
    activeLockReason: string;
    additions: number;
    assignees: Assignees;
    author: Owner;
    authorAssociation: string;
    autoMergeRequest: AutoMergeRequest;
    baseRef: Ref;
    baseRefName: string;
    baseRefOid: string;
    baseRepository: RepositoryInfo;
    body: string;
    bodyHTML: string;
    bodyText: string;
    changedFiles: number;
    checksResourcePath: string;
    checksUrl: string;
    closed: boolean;
    closedAt: string;
    comments: Comments;
    commits: Commits;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    deletions: number;
    editor: Owner;
    files: Files;
    headRef: Ref;
    headRefName: string;
    headRefOid: string;
    headRepository: RepositoryInfo;
    headRepositoryOwner: HeadRepositoryOwner;
    hoverCard: HoverCard;
    id: number;
    includesCreatedEdit: boolean;
    isCrossRepository: boolean;
    isReadByViewer: boolean;
    isDraft: boolean;
    labels: Labels;
    lastEditedAt: string;
    latestOpinionatedReviews: Reviews;
    latestReviews: Reviews;
    locked: boolean;
    maintainerCanModify: boolean;
    mergeCommit: Commit;
    mergeable: string;
    merged: boolean;
    mergedAt: string;
    mergedBy: Owner;
    milestone: Milestone;
    number: number;
    participants: Users;
    permalink: string;
    potentialMergeCommit: Commit;
    projectCards: ProjectCards;
    repository: RepositoryInfo;
    reactions: Reactions;
    reactionGroups: ReactionGroups[];
    resourcePath: string;
    revertResourcePath: string;
    revertUrl: string;
    reviewDecision: string;
    reviewRequest: ReviewRequests;
    reviewThreads: PullRequestReviews;
    reviews: Reviews;
    state: string;
    suggestedReviewers: {
        isAuthor: boolean;
        isCommenter: boolean;
        reviewer: UserInfo;
    }
    timeline: Timeline;
    timelineItems: TimelineItems;
    title: string;
    updatedAt: string;
    url: string
    userContentEdits: UserContentEdits;
    viewerCanApplySuggestion: boolean;
    viewerCanDeleteHeadRef: boolean;
    viewerCanDisableAutoMerge: boolean;
    viewerCanEnableAutoMerge: boolean;
    viewerCanReact: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: string[];
    viewerDidAuthor: boolean;
    viewerLatestReview: PullRequestReview;
    viewerLatestReviewRequest: ReviewRequest;
    viewerMergeBodyText: string;
    viewerMergeHeadlineText: string;
    viewerSubscription: string;
}

export declare interface CommitComment {

}


export declare interface PullRequestReview extends Review {

}


export declare interface PullRequestReviewComment {

}

export declare interface Forks {
    edges: {
        cursor: string;
        node: RepositoryInfo;
    }[]
    nodes: RepositoryInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Gist {
    comments: Comments;
    createdAt: string;
    description: string;
    files: File[];
    forks: Forks;
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
                node: SponsorShip;
            }[]
            nodes: SponsorShip[];
            pageInfo: PageInfo;
        };

    }
    createdAt: string;
    description: string;
    descriptionHTML: string;
    id: number;
    monthlyPriceInCents: number;
    monthlyPriceInDollars: number;
    name: number;
    sponsorsListing: SponsorsListing;
    updatedAt: string;
}

export declare interface Sponsor {
    organization: Organization;
    user: User;
}
export declare interface SponsorShip {
    createdAt: string;
    id: number;
    maintainer: User;
    privacyLevel: string;
    sponsor: User
    sponsorEntity: Sponsor
    sponsorable: {
        hasSponsorsListing: boolean;
        isSponsoredBy: string;
        isSponsoringViewer: boolean;
        sponsorsListing: SponsorsListing;
        sponsorshipForViewerAsSponsor: SponsorShip;
        sponsorshipsAsMaintainer: {
            edges: {
                cursor: string;
                node: SponsorShip;
            }[];
            nodes: SponsorShip[];
            pageInfo: PageInfo;
            totalCount: number;
        }
        sponsorshipsAsSponsor: {
            edges: {
                cursor: string;
                node: SponsorShip;
            }[];
            nodes: SponsorShip[];
            pageInfo: PageInfo;
            totalCount: number;
        }
        viewerCanSponsor: boolean;
        viewerIsSponsoring: boolean;
        organizatio: Organization;
        user: User;
    }
    tier: Tier
}

export declare interface SponsorsListing {
    activeGoal: Goal;
    createdAt: string;
    fullDescription: string;
    fullDescriptionHTML: string;
    id: number;
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
    files: File[];
    forks: Forks;
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
    createdViaEmail: string;
    databaseId: number;
    editor: Owner;
    gist: Gist;
    id: number;
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
    id: number;
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
    id: number;
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
    content: string;
    createdAt: string;
    databaseId: number;
    id: number;
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
    content: string;
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
    id: number;
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
    id: number;
    name: string;
    project: Project;
    purpose: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}
export declare interface Card {
    column: Column;
    content: CardItems;
    createdAt: string;
    creator: Owner;
    databaseId: number;
    id: number
    isArchived: boolean;
    note: string;
    project: Project;
    resourcePath: string;
    state: string;
    updatedAt: string;
    url: string;
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
    id: number;
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
    id: number;
    oid: string;
    repository: RepositoryInfo;
}

export declare interface Tree {
    abbreviatedOid: string;
    commitResourcePath: string;
    commitUrl: string;
    id: number;
    entries: Entries[]
    oid: string;
    repository: RepositoryInfo;
}

export declare interface Blob {
    abbreviatedOid: string;
    byteSize: number;
    commitResourcePath: string;
    commitUrl: string;
    id: number;
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
    id: number;
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
    id: number;
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
    status: string;
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
export declare interface App {
    createdAt: string;
    databaseId: number;
    description: string;
    id: number;
    logoBackgroundColor: string;
    logoUrl: string;
    name: string;
    slug: string;
    updatedAt: string;
    url: string;
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
    id: number;
    isRequired: boolean;
    name: string;
    permalink: string;
    repository: RepositoryInfo;
    resourcePath: string;
    startedAt: string;
    status: string;
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
    content: string;
    createdAt: string;
    subject: Subject;
    user: UserInfo;
    viewerHasReacted: boolean;
};
export declare interface Deployment {
    commit: Commit;
    commitOid: string;
    createdAt: string;
    creator: string;
    databaseId: number;
    description: string;
    environment: string;
    id: number;
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
    id: number;
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
    id: number;
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
    id: number;
    state: string;
}

export declare interface StatusCheckRollup {
    commit: Commit;
    contexts: Statuses
    id: number;
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

export declare interface HeadRepositoryOwner extends UserInfo, Organization {
    avatarUrl: string;
    id: number;
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
    id: number;
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
    id: number;
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
    id: number;
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
    id: number;
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
    id: number;
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
    actor: Owner;
    createdAt: string;
    disabler: UserInfo;
    id: number;
    pullRequest: PullRequest;
    reason: string;
    reasonCode: string;
}

export declare interface AutoMergeEnabledEvent {
    actor: Owner;
    createdAt: string;
    disabler: UserInfo;
    id: number;
    pullRequest: PullRequest;
    reason: string;
    reasonCode: string;
}

export declare interface AutoRebaseEnabledEvent {
    actor: Owner;
    createdAt: string;
    enabler: UserInfo;
    id: number;
    pullRequest: PullRequest;
}

export declare interface AutoSquashEnabledEvent {
    actor: Owner;
    createdAt: string;
    enabler: UserInfo;
    id: number;
    pullRequest: PullRequest;
}

export declare interface AutomaticBaseChangeFailedEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    pullRequest: PullRequest;
    newBase: string;
    oldBase: string;
}

export declare interface BaseRefChangedEvent {
    actor: Owner;
    createdAt: string;
    currentRefName: string;
    databaseId: number;
    id: number;
    previousRefName: string;
    pullRequest: PullRequest;

}

export declare interface BaseRefDeletedEvent {
    actor: Owner;
    id: number;
    baseRefName: string
    createdAt: string;
    pullRequest: PullRequest;
}

export declare interface BaseRefForcePushedEvent {
    actor: Owner;
    afterCommit: Commit;
    beforeCommit: Commit;
    createdAt: string;
    id: number;
    ref: Ref;
    pullRequest: PullRequest;
}

export declare interface CommentDeletedEvent {
    actor: Owner;
    createdAt: string;
    databaseId: number;
    deletedCommentAuthor: Owner;
    id: number;
}

export declare interface ConnectedEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    isCrossRepository: boolean;
    source: Source;
    subject: Source;
}

export declare interface ConvertToDraftEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    pullRequest: PullRequest;
    resourcePath: string;
    url: string;
}

export declare interface ConvertedNoteToIssueEvent {
    actor: Owner;
    createdAt: string
    databaseId: number;
    id: number;
}

export declare interface CrossReferencedEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    isCrossRepository: boolean;
    referencedAt: string;
    resourcePath: string;
    source: Source;
    target: Source;
    url: string;
    willCloseTarget: boolean;
}

export declare interface DisconnectedEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    isCrossRepository: boolean;
    source: Source;
    subject: Source;
}

export declare interface AutomaticBaseChangeSucceededEvent {
    actor: Owner;
    createdAt: string;
    id: number;
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
    actor: Owner;
    createdAt: string;
    databaseId: number;
    id: number;
}

export declare interface AssignedEvent {
    actor: Owner
    assignable: Assignable
    assignee: Assignee;
    createdAt: string;
    id: number;
    user: UserInfo
}



export declare interface AssignedEvent {
    actor: Owner
    createdAt: string;
    assignable: Assignable;
    assignee: Assignee;
    id: number;
}

export declare interface BaseRefDeletedEvent {
    id: number;
    baseRefName: string;
    actor: Owner
    createdAt: string;
    pullRequest: PullRequest
}


export declare interface BaseRefForcePushedEvent {
    id: number;
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
    actor: Owner;
    closable: Closable;
    closer: Closer;
    createdAt: string;
    id: number;
    resourcePath: string;
    url: string;
}

export declare interface CommitCommentThread {
    comments: Comments
    commit: Commit
    id: number;
    path: string;
    position: number;
    repository: RepositoryInfo
}
export declare interface Source extends Issues, PullRequest {

}

export declare interface CrossReferencedEvent {
    id: number;
    actor: Owner
    createdAt: string;
    isCrossRepository: boolean;
    referencedAt: string;
    resourcePath: string;
    source: Source
    target: Source;
    url: string;
    willCloseTarget: boolean;
}

export declare interface DemilestonedEvent {
    id: number;
    actor: Owner;
    createdAt: string;
    milestoneTitle: string;
    subject: Source
}
export declare interface DeployedEvent {
    id: number;
    actor: Owner;
    createdAt: string;
    databaseId: number;
    deployment: Deployment
    pullRequest: PullRequest
    ref: Ref
}

export declare interface DeploymentEnvironmentChangedEvent {
    id: number;
    actor: Owner;
    createdAt: string
    deploymentStatus: {
        createdAt: string
        creator: Owner
        deployment: Deployment
        description: string
        environmentUrl: string;
        id: number
        logurl: string
        state: string
        updatedAt: string
    }
    pullRequest: PullRequest
}

export declare interface HeadRefDeletedEvent {
    id: number;
    actor: Owner
    createdAt: string
    headRefName: string;
    headRef: Ref;
    pullRequest: PullRequest
}

export declare interface HeadRefForcePushedEvent {
    actor: Owner
    afterCommit: Commit
    beforeCommit: Commit
    id: number
    pullRequest: PullRequest
    ref: Ref
}

export declare interface HeadRefRestoredEvent {
    actor: Owner
    createdAt: string;
    id: number
    pullRequest: PullRequest
}

export declare interface MarkedAsDuplicateEvent {
    actor: Owner;
    canonical: Source;
    createdAt: string;
    duplicate: Source;
    id: number;
    isCrossRepository: boolean;
}

export declare interface MentionedEvent {
    actor: Owner;
    createdAt: string;
    databaseId: number
    id: number;
}

export declare interface MovedColumnsInProjectEvent {
    actor: Owner;
    createdAt: string;
    databaseId: number;
    id: number;
}

export declare interface PinnedEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    issue: Issue;
}

export declare interface PullRequestCommit {
    commit: Commit;
    id: number;
    pullRequest: PullRequest;
    resourcePath: string;
    url: string;
}

export declare interface PullRequestCommitCommentThread {
    comments: Comments;
    commit: Commit;
    id: number;
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
    actor: Owner;
    createdAt: string;
    id: number;
    pullRequest: PullRequest;
}

export declare interface RemovedFromProjectEvent {
    actor: Owner;
    createdAt: string;
    databaseId: number;
    id: number;
}

export declare interface TransferredEvent {
    id: number;
    actor: Owner;
    createdAt: string;
    fromRepository: RepositoryInfo;
    issue: Issue;
}

export declare interface UnmarkedAsDuplicateEvent {
    actor: Owner;
    canonical: Source;
    createdAt: string;
    duplicate: Source;
    id: number;
    isCrossRepository: boolean;
}

export declare interface UnpinnedEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    issue: Issue;
}

export declare interface UnsubscribedEvent {
    subscribable: Subscribable;
    actor: Owner;
    createdAt: string;
    id: number;
}

export declare interface Labelable extends Labels, Issue, PullRequest {

}

export declare interface LabeledEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    label: Label
    labelable: Labelable
}

export declare interface LockedEvent {
    createdAt: string
    creator: Owner;
    id: number;
    lockReason: string;
    lockable: Lockable;
}


export declare interface MergedEvent {
    actor: Owner;
    commit: Commit;
    createdAt: string;
    id: number;
    mergeRef: Ref
    mergeName: string;
    pullRequest: PullRequest
    resourcePath: string
    url: string
}
export declare interface MilestonedEvent {
    id: number;
    actor: Owner;
    createdAt: string;
    milestoneTitle: string;

    subject: Source;
}
export declare interface ReferencedEvent {
    actor: Owner;
    commit: Commit
    commitRepository: RepositoryInfo
    createdAt: string
    id: number
    isCrossRepository: boolean;
    isDirectReference: boolean
    subject: Source;
}

export declare interface RenamedTitleEvent {
    actor: Owner;
    createdAt: string
    id: number
    currentTitle: string;
    subject: Source;
    previousTitle: string;
}

export declare interface ReopenedEvent {
    actor: Owner
    id: number
    createdAt: string
    closable: Closable
}



export declare interface ReviewDismissedEvent {
    actor: Owner
    createdAt: string
    databaseId: number;
    dismissalMessage: string;
    dismissalMessageHTML: string;
    id: number;
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
    actor: Owner
    createdAt: string
    id: number
    pullRequest: PullRequest
    requestedReviewer: PullRequestReviewer;
}

export declare interface ReviewRequestedEvent {
    actor: Owner
    createdAt: string
    id: number
    pullRequest: PullRequest
    requestedReviewer: PullRequestReviewer;
}
export declare interface Subscribable extends Issue, PullRequest, RepositoryInfo, Team, TeamDiscussion, Commit {
    id: number;
    viewerCanSubscribe: boolean;
    viewerSubscription: string;
}
export declare interface SubscribedEvent {
    actor: Owner;
    createdAt: string;
    id: number;
    subscribable: Subscribable;
}
export declare interface Assignable extends Assignee, Issue, PullRequest {

}
export declare interface Assignee extends Bot, Mannequin, Organization, UserInfo {

}
export declare interface UnassignedEvent {
    id: number
    actor: Owner;
    assignable: Assignable;
    assignee: Assignee
    createdAt: string
    user: UserInfo;
}

export declare interface UnlabeledEvent {
    actor: Owner
    createdAt: string
    id: number
    label: Label;
    labelable: Labelable
}
export declare interface Lockable extends Issue, PullRequest {
    activeLockReason: string;
    locked: boolean;
}
export declare interface UnlockedEvent {
    actor: Owner;
    createdAt: string;
    id: number
    lockable: Lockable
}


export declare interface UserBlockedEvent {
    actor: Owner;
    blockDuration: number;
    createdAt: string;
    id: number
    subject: Source
}

export declare interface PullRequestReviewThread extends PullRequestReview {

}
