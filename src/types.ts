export declare interface ViewerRes {
    viewer: UserInfo;
}

export declare interface UserInfo {
    anyPinnableItems: boolean;
    avatarUrl: string;
    bio: string;
    bioHTML: string;
    commitComments: CommitComments;
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
    id: number | string;
    interactionAbility: {
        expiresAt: string;
        limit: number;
        origin: string;
    }
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isSiteAdmin: boolean;
    isEmployee: boolean;
    isSponsoredBy: boolean;
    isSponsoringViewer: boolean;
    isHireable: boolean;
    isViewer: boolean;
    issueComments: IssueComments;
    issues: Issues;
    itemShowcase: {
        hasPinnedItems: boolean;
        items: ItemShowcase
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
                id: number | string;
                isReadOnly: boolean
                key: string
                updatedAt: string
            };
        }[]
        nodes: {
            accessedAt: string
            createdAt: string
            fingerprint: string
            id: number | string;
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
    sponsorshipForViewerAsSponsor: SponsorshipForViewerAsSponsor;
    sponsorshipsAsMaintainer: SponsorshipsAsMaintainer;
    sponsorshipsAsSponsor: SponsorshipsAsSponsor;
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
    status: StatusType;
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
        id: number | string;
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
                    id: number | string;
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

export declare interface RepositoryRes {
    repository: RepositoryInfo
}

export declare interface RepositoryInfo {
    assignableUsers: AssignableUsers;
    branchProtectionRules: BranchProtectionRules;
    codeOfConduct: CodeOfConductType;
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
    id: number | string;
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
    id: number | string;
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
    id: number | string;
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
            id: number | string;
            name: string;
        };
        cursor: string;
    }[];
    nodes: {
        cweId: string;
        description: string;
        id: number | string;
        name: string;
    }[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Topic {
    id: number | string;
    name: string;
    relatedTopics: Topic[];
    stargazerCount: number;
    stargazers: Stargazers;
    viewerHasStarred: boolean;
}

export declare interface Topics {
    edges: {
        node: {
            id: number | string;
            resourcePath: string;
            topic: Topic;
            url: string;
        };
        cursor: string;
    }[];
    nodes: {
        id: number | string;
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
    id: number | string;
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
    id: number | string;
    message: string;
    messageBody: string;
    messageBodyHTML: string;
    messageHeadline: string;
    messageHeadlineHTML: string;
    oid: string;
    onBehalfOf: OnBehalfOf;
    parents: Commits;
    pushedDate: string;
    repository: RepositoryInfo;
    status: StatusType;
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
    id: number | string;
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
            id: number | string;
            pullRequest: PullRequest;
            resourcePath: string;
            url: string;
        };
        cursor: string;
    }[];
    nodes: {
        commit: Commit;
        id: number | string;
        pullRequest: PullRequest;
        resourcePath: string;
        url: string;
    }[];
    pageInfo: PageInfo;
    totalCount: number;
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

export declare interface UserRes {
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
                    id: number | string;
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
            }[];
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
    id: number | string;
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
    reactionGroups: ReactionGroups;
    repository: RepositoryInfo;
    resourcePath: string;
    state: string;
    timeline: Timelines;
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
    id: number | string;
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

export declare interface OrganizationHoverCard {
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
    id: number | string;
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
    id: number | string;
    discussion: Discussion;
    editor: Owner;
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

export declare interface Owner {
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
    id: number | string;
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

export declare interface OrganizationRes {
    organization: OrganizationInfo;
}

export declare interface RateLimitQuery {
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
    id: number | string;
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
        items: ItemShowcase;
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
    pinnableItems: ItemShowcase;
    pinnedItems: ItemShowcase;
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
    id: number | string;
    login: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Bot {
    avatarUrl: string;
    createdAt: string;
    databaseId: number;
    id: number | string;
    login: string;
    resourcePath: string
    updatedAt: string;
    url: string;
}

export declare interface ReactionGroup {
    content: Content;
    createdAt: string;
    subject: Subject;
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
    users: UserRes[]
    viewerHasReacted: boolean
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
    id: number | string;
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
    reactionGroups: ReactionGroups;
    resourcePath: string;
    revertResourcePath: string;
    revertUrl: string;
    reviewDecision: string;
    reviewRequests: ReviewRequests;
    reviewThreads: PullRequestReviews;
    reviews: Reviews;
    state: string;
    suggestedReviewers: {
        isAuthor: boolean;
        isCommenter: boolean;
        reviewer: UserInfo;
    }[]
    timeline: Timelines;
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
    id: number | string;
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
    id: number | string;
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
    id: number | string;
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
    id: number | string;
    latestVersion: Version;
    name: string;
    packageType: string;
    repository: RepositoryInfo
    statistics: {
        downloadsTotalCount: number;
    };
    version: Version | string;
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
    id: number | string;
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
    id: number | string;
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
    id: number | string;
    closestLesserValueTier: Tier;
    createdAt: string;
    description: string;
    descriptionHTML: string;
    isCustomAmount: boolean;
    monthlyPriceInCents: number;
    monthlyPriceInDollars: number;
    name: string;
    sponsorsListing: SponsorsListing;
    updatedAt: string;
}

export declare interface Sponsor {
    organization: OrganizationInfo | string;
    user: UserRes;
}
export declare interface SponsorShip {
    createdAt: string;
    id: number | string;
    maintainer: UserRes;
    privacyLevel: string;
    sponsor: UserRes
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
        user: UserRes;
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

export declare interface SponsorsListingQuery {
    sponsorsListing: SponsorsListing;
}

export declare interface Tiers {

}

export declare interface SponsorablesRes {
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
    id: number | string;
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
        node: OrganizationRes;
    }[];
    nodes: OrganizationRes[];
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
    reactionGroups: ReactionGroups;
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
    reactionGroups: ReactionGroups;
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
    reactionGroups: ReactionGroups;
    reactions: Reactions
    viewerCanReact: boolean;
}

export declare interface Organizations {
    edges: {
        cursor: string;
        node: OrganizationRes;
    }[];
    nodes: OrganizationRes[];
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

export declare interface SecurityVulnerabilitiesQueryRes {
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

export declare interface SecurityAdvisoryRes {
    securityAdvisory: SecurityAdvisory;
}

export declare interface SecurityAdvisoriesRes {
    securityAdvisories: {
        edges: {
            cursor: string;
            node: Advisory
        }[]
        nodes: Advisory[]
        totalCount: number;
    }
}

export declare interface SearchRes {
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

export declare interface ResourceRes extends OrganizationInfo, Release, UserInfo, Issue, PullRequest, RepositoryRes, TeamDiscussion, TeamDiscussion, Commit, CheckRun, Milestone, Topic, Comment, Mannequin, Bot, ClosedEvent, CrossReferencedEvent, MergedEvent, CrossReferencedEvent,
    MergedEvent, ReviewDismissedEvent, ConvertToDraftEvent, ReadyForReviewEvent, Gist {
    resource: {
        url: string;
        resourcePath: string;
    }
}

export declare interface RepositoryOwnerRes {
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
    onBehalfOf: OnBehalfOf;
    minimizedReason: string;
    path: string;
    position: number;
    publishedAt: string;
    pullRequest: PullRequest;
    reactionGroup: ReactionGroup;
    reactionGroups: ReactionGroups;
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
    author: Owner;
    authorAssociation: string;
    authorCanPushToRepository: boolean;
    body: string;
    bodyHTML: string;
    bodyText: string;
    comments: Comments;
    commit: Commit;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Owner;
    id: number | string;
    includesCreatedEdit: boolean;
    lastEditedAt: string;
    onBehalfOf: OnBehalfOf;
    publishedAt: string;
    pullRequest: PullRequest;
    reactionGroups: ReactionGroups;
    reactions: Reactions;
    repository: RepositoryInfo;
    resourcePath: string;
    state: string;
    submittedAt: string;
    updatedAt: string;
    url: string;
    userContentEdits: UserContentEdits;
    viewerCanDelete: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: string[];
    viewerDidAuthor: boolean;
    viewerCanReact: boolean;
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

export declare interface OnBehalfOf {
    edges: {
        cursor: string;
        node: Team;
    }[],
    nodes: Team[]
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

export declare interface Timelines {
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

export declare interface BaseRefDeletedEvent {
    id: number | string;
    baseRefName: string;
    actor: Actor;
    createdAt: string;
    pullRequest: PullRequest
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
    codeofConduct: CodeOfConductType;
    codesofConduct: CodeOfConductType[];
    enterprise: Enterprise;
    enterpriseAdministratorInvitation: EnterpriseAdministratorInvitationRes;
    enterpriseAdministratorInvitationByToken: EnterpriseAdministratorInvitationByTokenRes
    license: License;
    licenses: License[];
    relay: Relay;
    repository: RepositoryRes;
    repositoryOwner: RepositoryOwnerRes;
    resource: ResourceRes;
    search: SearchRes;
    securityAdvisories: SecurityAdvisoriesRes;
    securityAdvisory: SecurityAdvisory;
    securityVulnerabilities: SecurityVulnerabilities;
    sponsorables: SponsorablesRes;
    sponsorsListing: SponsorsListing;
    topic: Topic;
    user: UserInfo;
    viewer: ViewerRes;
    marketplaceCategories: MarketplaceCategory[];
    marketplaceCategory: MarketplaceCategory;
    marketplaceListing: MarketplaceListing;
    marketplaceListings: MarketplaceListings;
    meta: MetaRes;
    node: Node;
    nodes: Nodes;
    organization: OrganizationInfo | string;
    rateLimit: RateLimit;
    message: string;
    updatedAt: string;
}

export declare interface RateLimit {
    cost: number;
    limit: number;
    nodeCount: number;
    remaining: number;
    resetAt: string;
    used: number;
}

export declare interface Actor extends Bot, UserRes, OrganizationInfo, App, Team, Enterprise {

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

export declare interface onOrgBlockUserAuditEntry extends MemberNodeFields {
    blockedUser: UserInfo;
    blockedUserName: string;
    blockedUserResourcePath: string;
    blockedUserUrl: string;
    permission: string;
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
    repository: RepositoryRes;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
}

export declare interface onOrgRestoreMemberMembershipOrganizationInfoAuditEntryData {
    repository: RepositoryRes;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
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
    repository: RepositoryRes;
    repositoryName: string;
    repositoryResourcePath: string;
    repositoryUrl: string;
}

export declare interface onPrivateRepositoryForkingEnableAuditEntry extends MemberNodeFields {
    repository: RepositoryRes;
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
    repository: RepositoryRes;
    repositoryName: string;
    repositoryResourcePath: string;
    repositoryUrl: string;
    topic: Topic;
    topicName: string;
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

export declare interface Item extends Gist, RepositoryRes {

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
    id: number | string;
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
    id: string | number;
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
    id: number | string;
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

export declare interface NodeTypes extends CodeOfConductType, Enterprise, EnterpriseUserAccount, OrganizationInfo, Package, PackageVersion, PackageFile, Release, UserRes, Project, ProjectColunm, ProjectCard, Issue, UserContentEdits, Label, PullRequest,
    Reaction, RepositoryRes, License, BranchProtectionRule, Ref, PushAllowance, App, Team, UserStatus, TeamDiscussion, TeamDiscussionComment, OrganizationInvitation, ReviewDismissalAllowance, CommitComment, Commit, CheckSuite, CheckRun, Push, Deployment,
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
    EnterpriseServerUserAccountsUpload, EnterpriseRepositoryInfo, EnterpriseAdministratorInvitationRes, RepositoryInvitation, EnterpriseIdentityProvider, MarketplaceCategory, MarketplaceListing, Blob, PackageTag, Tag {

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
    userAccounts: UserAccounts | EnterpriseUserAccounts;
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

export declare interface MetaRes {
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

export declare interface MarketplaceListingsRes {
    marketplaceListings: MarketplaceListings;
}

export declare interface MarketplaceListingQuery {
    marketplaceListing: MarketplaceListing;
}

export declare interface Category {
    description: string;
    howItWorks: string;
    id: number | string;
    name: string;
    primaryListingCount: number;
    resourcePath: string;
    secondaryListingCount: number;
    slug: string;
    url: string;
}

export declare interface MarketplaceCategoryRes {
    marketplaceCategory: Category;
}

export declare interface MarketplaceCategoriesRes {
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

export declare interface LicensesRes {
    licenses: License[]
}

export declare interface LicenseRes {
    license: License
}

export declare interface EnterpriseAdministratorInvitationRes {
    enterpriseAdministratorInvitation: Invitation
}

export declare interface EnterpriseAdministratorInvitationByTokenRes {
    enterpriseAdministratorInvitationByToken: Invitation
}
export declare interface EnterpriseRes {
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

export declare interface CodeOfConductType {
    body: string;
    id: number | string;
    key: string;
    name: string;
    resourcePath: string;
    url: string;
}

export declare interface CodeOfConductRes {
    codeOfConduct: CodeOfConductType;
}

export declare interface CodesOfConductRes {
    codesOfConduct: CodeOfConductType[];
    errors?: ErrorType[]
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

type Content = string | CardItems | Source

export declare interface Starrable extends Topic, RepositoryInfo, Gist {

}

export declare interface ContentAttachment {
    body: string;
    contentReference: string;
    databaseId: number;
    title: string;
}

export declare interface DefautFields {
    clientMutationId?: string;
    id?: string;
}

export declare interface IssueMutation extends DefautFields {
    assigneeIds?: string[]
    body: string;
    issueTemplate?: string;
    labelIds?: string[]
    milestoneId?: string;
    projectIds?: string[],
    repositoryId: string;
    issueState?: 'CLOSED' | 'OPEN'
    title: string;
}

export declare interface UpdateIssueInput extends DefautFields {
    assigneeIds?: string[]
    body?: string;
    labelIds?: string[]
    milestoneId?: string;
    projectIds?: string[],
    state?: 'CLOSED' | 'OPEN'
    title?: string;
}

export declare interface AcceptEnterpriseAdministratorInvitationInput extends DefautFields {
    invitationId: string;
}

export declare interface AcceptTopicSuggestionInput extends DefautFields {
    clientMutationId?: string;
    name: string;
    repositoryId: string;
}

export declare interface AddAssigneesToAssignableInput extends DefautFields {
    assignableId: string;
    assigneeIds?: string[];
    clientMutationId?: string;
}

export declare interface AddCommentInput extends DefautFields {
    body: string;
    subjectId: string;
}

export declare interface AddEnterpriseSupportEntitlementInput extends DefautFields {
    enterpriseId: string;
    login: string;
}

export declare interface LabelsToLabelableInput extends DefautFields {
    labelIds: string[];
    labelableId: string;
}

export declare interface AddProjectColumnInput extends DefautFields {
    name: string;
    projectId?: string;
    projectColumnId?: string;
}

export declare interface AddProjectCardInput extends DefautFields {
    contentId?: string;
    note?: string;
    projectColumnId: string;
}

export declare interface AddPullRequestReviewCommentInput extends DefautFields {
    body: string;
    commitOID?: string;
    inReplyTo?: string;
    path?: string;
    position?: number;
    pullRequestId: string;
    pullRequestReviewId?: string;
}

export declare interface AddPullRequestReviewInput extends DefautFields {
    body: string;
    comments?: string[]
    commitOID?: string;
    event: 'APPROVE' | 'COMMENT' | 'DISMISS' | 'REQUEST_CHANGES';
    path?: string;
    position?: number;
    pullRequestId: string;
    threads?: string;
}

export declare interface DraftPullRequestReviewComment {
    body: string;
    path: string;
    position: number;
}

export declare interface DraftPullRequestReviewThread {
    body: string;
    line: number;
    side: 'LEFT' | 'RIGHT';
    startLine?: number;
    path: string;
    startSide: 'LEFT' | 'RIGHT';
}

export declare interface EnablePullRequestAutoMergeInput extends DefautFields {
    authorEmail: string;
    commitBody: string;
    commitHeadline: string;
    mergeMethod: 'MERGE' | 'REBASE' | 'SQUASH';
    pullRequestId: string;
}

export declare interface EnterpriseAdministratorInvitationOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface EnterpriseMemberOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'LOGIN';
}

export declare interface EnterpriseServerInstallationOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'CUSTOMER_NAME' | 'HOST_NAME';
}

export declare interface EnterpriseServerUserAccountEmailOrder {
    direction: 'ASC' | 'DESC';
    field: 'EMAIL';
}

export declare interface EnterpriseServerUserAccountOrder {
    direction: 'ASC' | 'DESC';
    field: 'LOGIN' | 'REMOTE_CREATED_AT';
}

export declare interface EnterpriseServerUserAccountsUploadOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface GistOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'PUSHED_AT' | 'UPDATED_AT';
}

export declare interface AddPullRequestReviewThreadInput extends DefautFields {
    body: string;
    line?: number;
    pullRequestId: string;
    pullRequestReviewId?: string;
    side?: string;
    startLine?: number;
    path?: string;
    position?: number;
    startSide?: 'LEFT' | 'RIGHT';
}

export declare interface AddReactionInput extends DefautFields {
    content: 'CONFUSED' | 'EYES' | 'HEART' | 'HOORAY' | 'LAUGH' | 'ROCKET' | 'THUMBS_DOWN' | 'THUMBS_UP'
    subjectId: string;
}

export declare interface AddStarInput extends DefautFields {
    starrableId: string;
}

export declare interface AddVerifiableDomainInput extends DefautFields {
    domain: string;
    ownerId: string;
}

export declare interface ApproveVerifiableDomainInput extends DefautFields {
    domain: string;
}

export declare interface ArchiveRepositoryInput extends DefautFields {
    repositoryId: string;
}

export declare interface AuditLogOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface CancelEnterpriseAdminInvitationInput extends DefautFields {
    invitationId: string;
}

export declare interface ChangeUserStatusInput extends DefautFields {
    emoji: string;
    expiresAt?: string;
    limitedAvailability?: boolean;
    message: string;
    organizationId: string;
}

export declare interface CheckAnnotationData {
    annotationLevel: 'FAILURE' | 'NOTICE' | 'WARNING';
    location: string;
    message: string;
    path: string;
    rawDetails: string;
    title: string;
}

export declare interface CheckAnnotationRange {
    endColumn: number;
    endLine: number;
    startColumn: number;
    startLine: number;
}

export declare interface CheckRunAction {
    description: string;
    identifier: string;
    label: string;
}

export declare interface CheckRunFilter {
    appId: number;
    checkName: string;
    checkType: 'ALL' | 'LATEST';
    status: 'COMPLETED' | 'IN_PROGRESS' | 'QUEUED' | 'REQUESTED' | 'WAITING'
}

export declare interface CheckRunOutput {
    annotations: string;
    images: string;
    summary: string;
    text: string;
    title: string;
}

export declare interface CheckRunOutputImage {
    alt: string;
    caption: string;
    imageUrl: string;
}

export declare interface CheckSuiteAutoTriggerPreference {
    appId: string;
    setting: boolean;
}

export declare interface CheckSuiteFilter {
    appId: string;
    checkName: string;
}

export declare interface ClearLabelsFromLabelableInput extends DefautFields {

    labelableId: string;
}

export declare interface CloneProjectInput extends DefautFields {
    body?: string;
    includeWorkflows: boolean;
    name?: string;
    public?: boolean;
    sourceId: string;
    targetOwnerId: string;
}

export declare interface CloneTemplateRepositoryInput extends DefautFields {
    description?: string;
    includeAllBranches?: boolean;
    name: string;
    ownerId?: string;
    repositoryId: string;
    visibility: 'INTERNAL' | 'PRIVATE' | 'PUBLIC';
}

export declare interface CloseIssueInput extends DefautFields {
    issueId: string;
}

export declare interface ClosePullRequestInput extends DefautFields {
    pullRequestId: string;
}

export declare interface CommitAuthor {
    emails: string[];
    id: string;
}

export declare interface Direction {
    direction: 'ASC' | 'DESC';
}

export declare interface CommitContributionOrder extends Direction {
    field: 'COMMIT_COUNT' | 'OCCURRED_AT';
}

export declare interface ConvertProjectCardNoteToIssueInput extends DefautFields {
    body: string;
    projectCardId: string;
    repositoryId: string;
    title: string;
}

export declare interface ConvertPullRequestToDraftInput extends DefautFields {
    pullRequestId: string;
}

export declare interface CreateBranchProtectionRuleInput extends DefautFields {
    allowsDeletions?: boolean;
    allowsForcePushes?: boolean;
    branchProtectionRuleId?: string;
    dismissesStaleReviews?: boolean;
    isAdminEnforced?: boolean;
    pattern: string;
    pushActorIds?: string[];
    repositoryId?: string;
    requiredApprovingReviewCount?: number;
    requiredStatusCheckContexts?: string[];
    requiresApprovingReviews?: boolean;
    requiresCodeOwnerReviews?: boolean;
    requiresCommitSignatures?: boolean;
    requiresLinearHistory?: boolean;
    requiresStatusChecks?: boolean;
    requiresStrictStatusChecks?: boolean;
    restrictsPushes?: boolean;
    restrictsReviewDismissals?: boolean;
    reviewDismissalActorIds?: string[];
}

export declare interface CreateCheckRunInput extends DefautFields {
    actions?: string[];
    checkRunId?: string;
    completedAt?: string;
    conclusion?: 'ACTION_REQUIRED' | 'CANCELLED' | 'FAILURE' | 'NEUTRAL' | 'SKIPPED' | 'STALE' | 'STARTUP_FAILURE' | 'SUCCESS' | 'TIMED_OUT';
    detailsUrl?: string;
    externalId?: string;
    headSha?: string;
    name?: string;
    output?: string;
    repositoryId: string;
    startedAt?: string;
    status?: 'COMPLETED' | 'IN_PROGRESS' | 'QUEUED' | 'WAITING';
}

export declare interface CreateCheckSuiteInput extends DefautFields {
    headSha: string;
    repositoryId: string;
}

export declare interface CreateContentAttachmentInput extends DefautFields {
    body: string;
    contentReferenceId: string;
    title: string;
}

export declare interface CreateEnterpriseOrganizationInput extends DefautFields {
    adminLogins: string[];
    billingEmail: string;
    enterpriseId: string;
    login: string;
    profileName: string;
}

export declare interface CreateIpAllowListEntryInput extends DefautFields {
    allowListValue: string;
    isActive: boolean;
    name: string;
    ownerId: string;
}

export declare interface CreateProjectInput extends DefautFields {
    body: string;
    name: string;
    ownerId: string;
    repositoryIds: string[];
    template?: 'AUTOMATED_KANBAN_V2' | 'AUTOMATED_REVIEWS_KANBAN' | 'BASIC_KANBAN' | 'BUG_TRIAGE';
}

export declare interface UpdateProjectInput extends DefautFields {
    body?: string;
    name?: string;
    projectId: string;
    public?: boolean;
    state?: 'OPEN' | 'CLOSE'
}

export declare interface CreatePullRequestInput extends DefautFields {
    baseRefName: string;
    body: string;
    draft?: boolean;
    headRefName: string;
    maintainerCanModify?: boolean;
    repositoryId: string;
    title: string;
}

export declare interface CreateRefInput extends DefautFields {
    name: string;
    oid: string;
    repositoryId: string;
}

export declare interface CreateRepositoryInput extends DefautFields {
    description: string;
    hasIssuesEnabled?: boolean;
    hasWikiEnabled?: boolean;
    homepageUrl?: string;
    name: string;
    ownerId?: string;
    teamId?: string;
    template?: boolean;
    visibility: 'INTERNAL' | 'PRIVATE' | 'PUBLIC';
}

export declare interface CreateTeamDiscussionCommentInput extends DefautFields {
    body: string;
    discussionId: string;
}

export declare interface CreateTeamDiscussionInput extends DefautFields {
    body: string;
    private: boolean;
    teamId: string;
    title: string;
}

export declare interface DeclineTopicSuggestionInput extends DefautFields {
    name: string;
    reason: 'NOT_RELEVANT' | 'PERSONAL_PREFERENCE' | 'TOO_GENERAL' | 'TOO_SPECIFIC';
    repositoryId: string;
}

export declare interface DeleteBranchProtectionRuleInput extends DefautFields {
    branchProtectionRuleId: string;
}

export declare interface DeleteDeploymentInput extends DefautFields {
    id: string;
}

export declare interface DeleteIpAllowListEntryInput extends DefautFields {
    ipAllowListEntryId: string;
}

export declare interface DeleteIssueInput extends DefautFields {
    issueId: string;
}

export declare interface DeleteProjectColumnInput extends DefautFields {
    columnId: string;
}

export declare interface DeleteProjectCardInput extends DefautFields {
    cardId: string;
}

export declare interface DeleteProjectInput extends DefautFields {
    projectId: string;
}

export declare interface DeletePullRequestReviewInput extends DefautFields {
    pullRequestReviewId: string;
}

export declare interface DeleteRefInput extends DefautFields {
    refId: string;
}

export declare interface DeploymentOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT'
}

export declare interface DisablePullRequestAutoMergeInput extends DefautFields {
    pullRequestId: string;
}

export declare interface DismissPullRequestReviewInput extends DefautFields {
    pullRequestReviewId: string;
    message: string;
}

export declare interface FollowUserInput extends DefautFields {
    userId: string;
}

export declare interface ImportProjectInput extends DefautFields {
    body: string;
    columnImports: string[];
    name: string;
    ownerName: string;
    public: boolean;
}

export declare interface InviteEnterpriseAdminInput extends DefautFields {
    email: string;
    enterpriseId: string;
    invitee: string;
    role: 'BILLING_MANAGER' | 'OWNER';
}

export declare interface IpAllowListEntryOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'ALLOW_LIST_VALUE';
}

export declare interface IssueCommentOrder {
    direction: 'ASC' | 'DESC';
    field: 'UPDATED_AT';
}

export declare interface IssueFilters extends DefautFields {
    assignee: string | '*';
    createdBy: string;
    labels: string[]
    mentioned: string;
    milestone: string;
    since: string;
    states: 'CLOSED' | 'OPEN';
    viewerSubscribed: boolean;
}

export declare interface IssueOrder {
    direction: 'ASC' | 'DESC';
    field: 'COMMENTS' | 'CREATED_AT' | 'UPDATED_AT';
}

export declare interface LabelOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'NAME';
}

export declare interface LanguageOrder {
    direction: 'ASC' | 'DESC';
    field: 'SIZE';
}

export declare interface LockLockableInput extends DefautFields {
    lockReason: 'OFF_TOPIC' | 'RESOLVED' | 'SPAM' | 'TOO_HEATED';
    lockableId: string;
}

export declare interface MarkFileAsViewedInput extends DefautFields {
    path: string;
    pullRequestId: string;
}

export declare interface LinkRepositoryToProjectInput extends DefautFields {
    projectId: string;
    repositoryId: string;
}

export declare interface MarkPullRequestReadyForReviewInput extends DefautFields {
    pullRequestId: string;
}

export declare interface MergeBranchInput extends DefautFields {
    authorEmail: string;
    base: string;
    commitMessage: string;
    head: string;
    repositoryId: string;
}

export declare interface MergePullRequestInput extends DefautFields {
    authorEmail?: string;
    commitBody: string;
    commitHeadline?: string;
    expectedHeadOid?: string;
    mergeMethod: 'MERGE' | 'REBASE' | 'SQUASH';
    pullRequestId: string;
}

export declare interface MilestoneOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'DUE_DATE' | 'NUMBER' | 'UPDATED_AT';
}

export declare interface MinimizeCommentInput extends DefautFields {
    classifier: 'ABUSE' | 'DUPLICATE' | 'OFF_TOPIC' | 'OUTDATED' | 'RESOLVED' | 'SPAM';
    subjectId: string;
}

export declare interface MoveProjectCardInput extends DefautFields {
    afterCardId: string | null;
    cardId: string;
    columnId: string;
}

export declare interface MoveProjectColumnInput extends DefautFields {
    afterColumnId?: string;
    columnId: string;
}

export declare interface OrganizationOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'LOGIN';
}

export declare interface PackageFileOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface PackageOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface PackageVersionOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface PinIssueInput extends DefautFields {
    issueId: string;
}

export declare interface ProjectCardImport extends DefautFields {
    repository: string;
}

export declare interface ProjectColumnImport {
    columnName: string;
    issues?: string[];
    position: number;
}

export declare interface ProjectOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'NAME' | 'UPDATED_AT';
}

export declare interface PullRequestOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'UPDATED_AT';
}

export declare interface ReactionOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface RefOrder {
    direction: 'ASC' | 'DESC';
    field: 'ALPHABETICAL' | 'TAG_COMMIT_DATE';
}

export declare interface RefUpdate {
    afterOid: string;
    beforeOid: string;
    name: string;
    force: boolean;
}

export declare interface RegenerateEnterpriseIdentityProviderRecoveryCodesInput extends DefautFields {
    enterpriseId: string;
}

export declare interface RemoveAssigneesFromAssignableInput extends DefautFields {
    assignableId: string;
    assigneeIds: string[]
}

export declare interface RemoveEnterpriseAdminInput extends DefautFields {
    enterpriseId: string;
    login: string
}

export declare interface RemoveEnterpriseIdentityProviderInput extends DefautFields {
    enterpriseId: string;
}

export declare interface RemoveEnterpriseOrganizationInput extends DefautFields {
    enterpriseId: string;
    organizationId: string;
}

export declare interface RemoveOutsideCollaboratorInput extends DefautFields {
    organizationId: string;
    userId: string;
}

export declare interface RemoveReactionInput extends DefautFields {
    content: 'CONFUSED' | 'EYES' | 'HEART' | 'HOORAY' | 'LAUGH' | 'ROCKET' | 'THUMBS_DOWN' | 'THUMBS_UP';
    subjectId: string;
}

export declare interface RemoveStarInput extends DefautFields {
    starrableId: string;
}

export declare interface ReopenIssueInput extends DefautFields {
    issueId: string;
}

export declare interface ReopenPullRequestInput extends DefautFields {
    pullRequestId: string;
}

export declare interface RepositoryInvitationOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'INVITEE_LOGIN';
}

export declare interface RepositoryOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'NAME' | 'PUSHED_AT' | 'STARGAZERS' | 'UPDATED_AT';
}

export declare interface RequestReviewsInput extends DefautFields {
    pullRequestId: string;
    teamIds?: string[]
    union: boolean;
    userIds: string[]
}

export declare interface RerequestCheckSuiteInput extends DefautFields {
    checkSuiteId: string;
    repositoryId: string
}

export declare interface ResolveReviewThreadInput extends DefautFields {
    threadId: string;
}

export declare interface SavedReplyOrder {
    direction: 'ASC' | 'DESC';
    field: 'UPDATED_AT';
}

export declare interface SecurityAdvisoryIdentifierFilter {
    type: 'CVE' | 'GHSA';
    value: string;
}

export declare interface SecurityAdvisoryOrder {
    direction: 'ASC' | 'DESC';
    field: 'UPDATED_AT' | 'PUBLISHED_AT';
}

export declare interface SetEnterpriseIdentityProviderInput extends DefautFields {
    digestMethod: 'SHA1' | 'SHA256' | 'SHA384' | 'SHA512';
    enterpriseId: string;
    idpCertificate: string
    issuer: string;
    signatureMethod: 'RSA_SHA1' | 'RSA_SHA256' | 'RSA_SHA384' | 'RSA_SHA512'
    ssoUrl: string;
}

export declare interface SetInteractionLimitInput extends DefautFields {
    expiry: 'ONE_DAY' | 'ONE_MONTH' | 'ONE_WEEK' | 'SIX_MONTHS' | 'THREE_DAYS';
    limit: 'COLLABORATORS_ONLY' | 'CONTRIBUTORS_ONLY' | 'EXISTING_USERS' | 'NO_LIMIT';
    organizationId?: string;
    repositoryId?: string;
    userId?: string;
}

export declare interface SponsorableOrder {
    direction: 'ASC' | 'DESC';
    field: 'LOGIN';
}

export declare interface SponsorsTierOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'MONTHLY_PRICE_IN_CENTS';
}

export declare interface SponsorshipOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface StarOrder {
    direction: 'ASC' | 'DESC';
    field: 'STARRED_AT';
}

export declare interface SubmitPullRequestReviewInput extends DefautFields {
    body: string;
    event: 'APPROVE' | 'COMMENT' | 'DISMISS' | 'REQUEST_CHANGES';
    pullRequestId: string;
    pullRequestReviewId: string;
}

export declare interface TeamDiscussionCommentOrder {
    direction: 'ASC' | 'DESC';
    field: 'NUMBER';
}

export declare interface TeamDiscussionOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT';
}

export declare interface TeamMemberOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'LOGIN';
}

export declare interface TeamOrder {
    direction: 'ASC' | 'DESC';
    field: 'NAME';
}

export declare interface TeamRepositoryOrder {
    direction: 'ASC' | 'DESC';
    field: 'CREATED_AT' | 'NAME' | 'PERMISSION' | 'PUSHED_AT' | 'STARGAZERS' | 'UPDATED_AT';
}

export declare interface TransferIssueInput extends DefautFields {
    issueId: string;
    repositoryId: string;
}

export declare interface UnarchiveRepositoryInput extends DefautFields {
    repositoryId: string;
}

export declare interface UnfollowUserInput extends DefautFields {
    userId: string;
}

export declare interface UnlinkRepositoryFromProjectInput extends DefautFields {
    projectId: string;
    repositoryId: string;
}

export declare interface UnlockLockableInput extends DefautFields {
    lockableId: string;
}

export declare interface UnmarkFileAsViewedInput extends DefautFields {
    path: string;
    pullRequestId: string;
}

export declare interface UnmarkIssueAsDuplicateInput extends DefautFields {
    canonicalId: string;
    duplicateId: string;
}

export declare interface UnminimizeCommentInput extends DefautFields {
    subjectId: string;
}

export declare interface UnpinIssueInput extends DefautFields {
    issueId: string;
}

export declare interface UnresolveReviewThreadInput extends DefautFields {
    threadId: string;
}

export declare interface UpdateCheckSuitePreferencesInput extends DefautFields {
    autoTriggerPreferences: string[];
    repositoryId: string;
}

export declare interface UpdateEnterpriseAdministratorRoleInput extends DefautFields {
    enterpriseId: string;
    login: string;
    role: 'BILLING_MANAGER' | 'OWNER';
}

export declare interface UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput extends DefautFields {
    enterpriseId: string;
    settingValue: 'DISABLED' | 'ENABLED' | 'NO_POLICY';
}

export declare interface UpdateEnterpriseDefaultRepositoryPermissionSettingInput extends DefautFields {
    enterpriseId: string;
    settingValue: 'ADMIN' | 'NONE' | 'NO_POLICY' | 'READ' | 'WRITE';
}

export declare interface VisibilitySettingInput extends DefautFields {
    enterpriseId: string;
    settingValue: 'DISABLED' | 'ENABLED' | 'NO_POLICY';
}

export declare interface UpdateEnterpriseMembersCanCreateRepositoriesSettingInput extends DefautFields {
    enterpriseId: string;
    membersCanCreateInternalRepositories?: boolean;
    membersCanCreatePrivateRepositories?: boolean;
    membersCanCreatePublicRepositories?: boolean;
    membersCanCreateRepositoriesPolicyEnabled?: boolean;
    settingValue: 'ALL' | 'DISABLED' | 'NO_POLICY' | 'PRIVATE' | 'PUBLIC';
}

export declare interface UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput extends DefautFields {
    enterpriseId: string;
    settingValue: 'DISABLED' | 'ENABLED' | 'NO_POLICY';
}

export declare interface UpdateEnterpriseProfileInput extends DefautFields {
    description: string;
    enterpriseId: string;
    location: string;
    name: string;
    websiteUrl: string;
}

export declare interface UpdateIpAllowListEnabledSettingInput extends DefautFields {
    ownerId: string;
    settingValue: 'DISABLED' | 'ENABLED';
}

export declare interface UpdateIpAllowListEntryInput extends DefautFields {
    allowListValue?: string;
    ipAllowListEntryId: string;
    isActive: boolean;
    name: string;
}

export declare interface UpdateIssueCommentInput extends DefautFields {
    id: string;
    body: string;
}

export declare interface UpdateLabelInput extends DefautFields {
    color?: string;
    description?: string;
    name?: string;
}

export declare interface UpdateProjectCardInput extends DefautFields {
    isArchived?: boolean;
    note: string;
    projectCardId?: string;
}

export declare interface UpdatePullRequestInput extends DefautFields {
    assigneeIds?: string[];
    baseRefName?: string;
    body?: string;
    labelIds?: string[];
    maintainerCanModify?: boolean
    milestoneId?: string;
    projectIds?: string[];
    pullRequestId?: string;
    state?: 'CLOSED' | 'OPEN';
    title?: string;
}

export declare interface UpdatePullRequestReviewCommentInput extends DefautFields {
    body: string;
    pullRequestReviewCommentId: string;
}

export declare interface UpdatePullRequestReviewInput extends DefautFields {
    body: string;
    pullRequestReviewId: string;
}

export declare interface UpdateRefInput extends DefautFields {
    force?: boolean;
    oid: string;
    refId: string;
}

export declare interface UpdateRefsInput extends DefautFields {
    refUpdates: string[];
    repositoryId: string;
}

export declare interface UpdateRepositoryInput extends DefautFields {
    hasProjectsEnabled?: boolean;
    repositoryId: string;
    description: string;
    hasIssuesEnabled?: boolean;
    hasWikiEnabled?: boolean;
    homepageUrl?: string;
    name?: string;
    template?: boolean;
}

export declare interface UpdateSubscriptionInput extends DefautFields {
    state: 'IGNORED' | 'SUBSCRIBED' | 'UNSUBSCRIBED';
    subscribableId: string;
}

export declare interface UpdateTeamDiscussionCommentInput extends DefautFields {
    body: string;
    bodyVersion?: string;
}

export declare interface UpdateTeamDiscussionInput extends DefautFields {
    body: string;
    bodyVersion?: string;
    pinned?: boolean;
    title?: string;
}

export declare interface UpdateTeamReviewAssignmentInput extends DefautFields {
    algorithm?: 'LOAD_BALANCE' | 'ROUND_ROBIN';
    enabled?: boolean;
    excludedTeamMemberIds?: string[];
    notifyTeam?: boolean;
    teamMemberCount?: number;
}

export declare interface UpdateTopicsInput extends DefautFields {
    repositoryId: string;
    topicNames: string[];
}

export declare interface UserStatusOrder {
    direction: 'ASC' | 'DESC';
    field: 'UPDATED_AT';
}

export declare interface VerifiableDomainOrder {
    direction: 'ASC' | 'DESC';
    field: 'UPDATED_AT';
}

export declare interface CreateDeploymentInput extends DefautFields {
    autoMerge?: boolean;
    description?: string;
    environment: string;
    payload?: string;
    refId?: string;
    repositoryId: string;
    requiredContexts?: string[];
    task?: string;
}

export declare interface CreateDeploymentStatusInput extends DefautFields {
    autoInactive?: boolean;
    deploymentId: string;
    description?: string;
    environment?: string;
    environmentUrl?: string;
    logUrl?: string;
    state: 'ERROR' | 'FAILURE' | 'INACTIVE' | 'IN_PROGRESS' | 'PENDING' | 'QUEUED' | 'SUCCESS' | 'WAITING';
}

export declare interface CreateLabelInput extends DefautFields {
    color: string;
    description: string;
    name: string;
    repositoryId: string;
}

export declare interface ProjectOwner extends UserInfo, OrganizationInfo {

}

export declare interface IpAllowListOwner extends OrganizationInfo, Enterprise {

}

export declare interface DeletePackageVersionInput extends DefautFields {
    packageVersionId: string;
}

export declare interface AcceptEnterpriseAdministratorInvitation {
    acceptEnterpriseAdministratorInvitation: {
        invitation: Invitation;
        clientMutationId: string;
    };
}

export declare interface AcceptTopicSuggestion {
    acceptTopicSuggestion: {
        topic: Topic;
        clientMutationId: string;
    };
}

export declare interface AddAssigneesToAssignable {
    addAssigneesToAssignable: {
        assignable: Assignable;
        clientMutationId: string;

    };
}

export declare interface AddComment {
    addComment: {
        subject: Subject;
        clientMutationId: string;
    }
}

export declare interface AddEnterpriseSupportEntitlement {
    addEnterpriseSupportEntitlement: {
        enterprise: Enterprise;
        clientMutationId: string;
    }
}

export declare interface AddLabelsToLabelable {
    addLabelsToLabelable: {
        labelable: Labelable;
        clientMutationId: string;
    }
}

export declare interface AddProjectCard {
    addProjectCard: {
        clientMutationId: string;
        projectCard: ProjectCard;
    }
}

export declare interface AddPullRequestReviewComment {
    addPullRequestReviewComment: {
        clientMutationId: string;
        comment: Comment;
    }
}

export declare interface AddPullRequestReview {
    addPullRequestReview: {
        pullRequestReview: PullRequestReview;
    }
}

export declare interface AddPullRequestReviewThread {
    addPullRequestReviewThread: {
        clientMutationId: string;
        thread: PullRequestReviewThread;
    }
}

export declare interface AddReaction {
    AddReaction: {
        clientMutationId: string;
        reaction: Reaction;
    }
}

export declare interface AddProjectColumn {
    addProjectColumn: {
        clientMutationId: string;
        project: Project;
    }
}

export declare interface AddStar {
    addStar: {
        clientMutationId: string;
        star: Starrable;
    }
}

export declare interface AddVerifiableDomain {
    addVerifiableDomain: {
        clientMutationId: string;
        domain: Domain;
    }
}

export declare interface ApproveVerifiableDomain {
    approveVerifiableDomain: {
        clientMutationId: string;
        domain: Domain;
    }
}

export declare interface ArchiveRepository {
    archiveRepository: {
        clientMutationId: string;
        repository: RepositoryInfo;
    }
}

export declare interface CancelEnterpriseAdminInvitation {
    cancelEnterpriseAdminInvitation: {
        clientMutationId: string;
        invitation: Invitation;
    }
}

export declare interface ChangeUserStatus extends DefautFields {
    changeUserStatus: {
        clientMutationId: string;
        status: Status;
    }
}

export declare interface ClearLabelsFromLabelable extends DefautFields {
    clearLabelsFromLabelable: {
        clientMutationId: string;
        labelable: Labelable;
    }
}

export declare interface CloneProject {
    cloneProject: {
        clientMutationId: string;
        project: Project;
    }
}

export declare interface CloneTemplateRepository {
    cloneTemplateRepository: {
        clientMutationId: string;
        templateRepository: RepositoryInfo;
    }
}

export declare interface CloseIssue {
    closeIssue: {
        clientMutationId: string;
        issue: Issue;
    }
}

export declare interface ClosePullRequest {
    closePullRequest: {
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface ConvertProjectCardNoteToIssue {
    convertProjectCardNoteToIssue: {
        clientMutationId: string;
        projectCard: ProjectCard;
    }
}

export declare interface ConvertPullRequestToDraft {
    convertPullRequestToDraft: {
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface CreateBranchProtectionRule {
    createBranchProtectionRule: {
        clientMutationId: string;
        branchProtectionRule: BranchProtectionRule;
    }
}

export declare interface CreateCheckRun {
    createCheckRun: {
        clientMutationId: string;
        checkRun: CheckRun;
    }
}

export declare interface CreateCheckSuite {
    createCheckSuite: {
        clientMutationId: string;
        checkSuite: CheckSuite;
    }
}

export declare interface CreateContentAttachment {
    createContentAttachment: {
        clientMutationId: string;
        contentAttachment: ContentAttachment;
    }
}

export declare interface CreateEnterpriseOrganization {
    createEnterpriseOrganization: {
        clientMutationId: string;
        organization: OrganizationRes;
    }
}

export declare interface CreateIpAllowListEntry {
    createIpAllowListEntry: {
        clientMutationId: string;
        ipAllowListEntry: IpAllowListEntry;
    }
}

export declare interface CreateIssue {
    createIssue: {
        issue: Issue
    }
}

export declare interface CreateProject {
    createProject: {
        clientMutationId: string;
        project: Project;
    }
}

export declare interface CreatePullRequest {
    createPullRequest: {
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface CreateRef {
    createRef: {
        clientMutationId: string;
        ref: Ref;
    }
}

export declare interface CreateRepository {
    createRepository: {
        clientMutationId: string;
        repository: RepositoryInfo;
    }
}

export declare interface CreateTeamDiscussionComment {
    createTeamDiscussionComment: {
        clientMutationId: string;
        teamDiscussionComment: TeamDiscussionComment;
    }
}

export declare interface CreateTeamDiscussion {
    createTeamDiscussion: {
        clientMutationId: string;
        teamDiscussion: TeamDiscussion;
    }
}

export declare interface DeclineTopicSuggestion {
    declineTopicSuggestion: {
        clientMutationId: string;
        topic: Topic;
    }
}

export declare interface DeleteBranchProtectionRule {
    deleteBranchProtectionRule: {
        clientMutationId: string;
    };
}

export declare interface DeleteDeployment {
    deleteDeployment: {
        clientMutationId: string;
    };
}

export declare interface DeleteIpAllowListEntry {
    deleteIpAllowListEntry: {
        clientMutationId: string;
        ipAllowListEntry: IpAllowListEntry;
    }
}

export declare interface DeleteIssueComment {
    deleteIssueComment: {
        clientMutationId: string;
    }
}

export declare interface DeleteIssue {
    deleteIssue: {
        clientMutationId: string;
        repository: RepositoryInfo;
    }
}

export declare interface DeletePackageVersion {
    deletePackageVersion: {
        clientMutationId: string;
    }
}

export declare interface DeleteProjectCard {
    deleteProjectCard: {
        clientMutationId: string;
        column: ProjectColunm;
        deletedCardId: string;
    }
}

export declare interface DeleteProjectColumn {
    deleteProjectColumn: {
        clientMutationId: string;
        deletedColumnId: string;
    }
}

export declare interface DeleteProject {
    deleteProject: {
        clientMutationId: string;
        owner: ProjectOwner;
    }
}

export declare interface DeletePullRequestReviewComment {
    deletePullRequestReviewComment: {
        clientMutationId: string;
        pullRequestReview: PullRequestReview;
    }
}

export declare interface DeletePullRequestReview {
    deletePullRequestReview: {
        clientMutationId: string;
        pullRequestReview: PullRequestReview;
    }
}

export declare interface DeleteRef {
    deleteRef: {
        clientMutationId: string;
    }
}

export declare interface DeleteTeamDiscussionComment {
    deleteTeamDiscussionComment: {
        clientMutationId: string;
    }
}

export declare interface DeleteTeamDiscussion {
    deleteTeamDiscussion: {
        clientMutationId: string;
    }
}

export declare interface DeleteVerifiableDomain {
    deleteVerifiableDomain: {
        clientMutationId: string;
    }
}

export declare interface DisablePullRequestAutoMerge {
    disablePullRequestAutoMerge: {
        actor: Actor;
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface DismissPullRequestReview {
    dismissPullRequestReview: {
        clientMutationId: string;
        pullRequestReview: PullRequestReview;
    }
}

export declare interface EnablePullRequestAutoMerge {
    enablePullRequestAutoMerge: {
        actor: Actor;
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface FollowUser {
    followUser: {
        clientMutationId: string;
        user: UserRes;
    }
}

export declare interface ImportProject {
    importProject: {
        clientMutationId: string;
        project: Project;
    }
}

export declare interface InviteEnterpriseAdmin {
    inviteEnterpriseAdmin: {
        clientMutationId: string;
        invitation: Invitation;
    }
}

export declare interface LinkRepositoryToProject {
    linkRepositoryToProject: {
        clientMutationId: string;
        project: Project;
        repository: RepositoryInfo;
    }
}

export declare interface MarkFileAsViewed {
    markFileAsViewed: {
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface MarkPullRequestReadyForReview {
    markPullRequestReadyForReview: {
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface MergeBranch {
    mergeBranch: {
        clientMutationId: string;
        mergeCommit: Commit;
    }
}

export declare interface MergePullRequest {
    mergePullRequest: {
        actor: Actor;
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface MinimizeComment {
    minimizeComment: {
        clientMutationId: string;
        minimizedComment: Comment;
    }
}

export declare interface MoveProjectColumn {
    moveProjectCard: {
        clientMutationId: string;
        cardEdge: any;
    }
}
export declare interface PinIssue {
    pinIssue: {
        clientMutationId: string;
        issue: Issue;
    }
}
export declare interface RegenerateEnterpriseIdentityProviderRecoveryCodes {
    regenerateEnterpriseIdentityProviderRecoveryCodes: {
        clientMutationId: string;
        identityProvider: EnterpriseIdentityProvider;
    }
}
export declare interface RegenerateVerifiableDomainToken {
    regenerateVerifiableDomainToken: {
        clientMutationId: string;
        verificationToken: string;
    }
}
export declare interface RemoveAssigneesFromAssignable {
    removeAssigneesFromAssignable: {
        clientMutationId: string;
        assignable: Assignable;
    }
}
export declare interface RemoveEnterpriseAdmin {
    removeEnterpriseAdmin: {
        clientMutationId: string;
        admin: UserInfo;
        enterprise: Enterprise;
        message: string;
        viewer: UserInfo;
    }
}

export declare interface RemoveEnterpriseIdentityProvider {
    removeEnterpriseIdentityProvider: {
        clientMutationId: string;
        identityProvider: EnterpriseIdentityProvider;
    }
}

export declare interface RemoveEnterpriseOrganization {
    removeEnterpriseOrganization: {
        clientMutationId: string;
        enterprise: Enterprise;
        organization: OrganizationRes;
        viewer: UserInfo;
    }
}

export declare interface RemoveEnterpriseSupportEntitlement {
    removeEnterpriseSupportEntitlement: {
        clientMutationId: string;
        message: string;
    }
}

export declare interface RemoveLabelsFromLabelable {
    removeLabelsFromLabelable: {
        clientMutationId: string;
        labelable: string;
    }
}

export declare interface RemoveOutsideCollaborator {
    removeOutsideCollaborator: {
        clientMutationId: string;
        removedUser: UserInfo;
    }
}

export declare interface RemoveReaction {
    removeReaction: {
        clientMutationId: string;
        reaction: Reaction;
        subject: Subject;
    }
}

export declare interface RemoveStar {
    removeStar: {
        clientMutationId: string;
        starrable: Starrable;
    }
}

export declare interface ReopenIssue {
    reopenIssue: {
        clientMutationId: string;
        issue: Issue;
    }
}

export declare interface ReopenPullRequest {
    reopenPullRequest: {
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}
export declare interface RequestReviews {
    requestReviews: {
        actor: Actor;
        clientMutationId: string;
        pullRequest: PullRequest;
        requestedReviewersEdge: any;
    }
}

export declare interface RerequestCheckSuite {
    rerequestCheckSuite: {
        clientMutationId: string;
        checkSuite: CheckSuite;
    }
}

export declare interface ResolveReviewThread {
    resolveReviewThread: {
        clientMutationId: string;
        thread: PullRequestReviewThread;
    }
}

export declare interface SetEnterpriseIdentityProvider {
    setEnterpriseIdentityProvider: {
        clientMutationId: string;
        identityProvider: EnterpriseIdentityProvider;
    }
}

export declare interface SetOrganizationInteractionLimit {
    setOrganizationInteractionLimit: {
        clientMutationId: string;
        organization: OrganizationInfo;
    }
}
export declare interface setUserInteractionLimit {
    moveProjectCard: {
        clientMutationId: string;
        user: UserInfo;
    }
}
export declare interface SubmitPullRequestReview {
    submitPullRequestReview: {
        clientMutationId: string;
        pullRequestReview: PullRequestReview;
    }
}
export declare interface TransferIssue {
    transferIssue: {
        clientMutationId: string;
        issue: Issue;
    }
}
export declare interface UnarchiveRepository {
    unarchiveRepository: {
        clientMutationId: string;
        repository: RepositoryInfo;
    }
}
export declare interface UnfollowUser {
    unfollowUser: {
        clientMutationId: string;
        user: UserInfo;
    }
}
export declare interface UnlinkRepositoryFromProject {
    unlinkRepositoryFromProject: {
        clientMutationId: string;
        project: Project;
        repository: RepositoryInfo;
    }
}
export declare interface UnlockLockable {
    unlockLockable: {
        actor: Actor;
        clientMutationId: string;
        unlockedRecord: Lockable;
    }
}
export declare interface UnmarkFileAsViewed {
    unmarkFileAsViewed: {
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}
export declare interface UnmarkIssueAsDuplicate {
    unmarkIssueAsDuplicate: {
        clientMutationId: string;
        duplicate: Issue;
    }
}
export declare interface UnminimizeComment {
    unminimizeComment: {
        clientMutationId: string;
        unminimizedComment: Comment;
    }
}
export declare interface UnpinIssue {
    unpinIssue: {
        clientMutationId: string;
        issue: Issue;
    }
}

export declare interface UnresolveReviewThread {
    moveProjectCard: {
        clientMutationId: string;
        thread: PullRequestReviewThread;
    }
}

export declare interface UpdateBranchProtectionRule {
    updateBranchProtectionRule: {
        clientMutationId: string;
        branchProtectionRule: BranchProtectionRule;
    }
}

export declare interface UpdateCheckRun {
    updateCheckRun: {
        clientMutationId: string;
        checkRun: CheckRun;
    }
}

export declare interface UupdateCheckSuitePreferences {
    unpinIssue: {
        clientMutationId: string;
        repository: RepositoryInfo;
    }
}

export declare interface UpdateEnterpriseAdministratorRole {
    updateEnterpriseAdministratorRole: {
        clientMutationId: string;
        message: string;
    }
}

export declare interface UpdateEnterpriseAllowPrivateRepositoryForkingSetting {
    updateEnterpriseAllowPrivateRepositoryForkingSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
    }
}

export declare interface UpdateEnterpriseDefaultRepositoryPermissionSetting {
    updateEnterpriseDefaultRepositoryPermissionSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}

export declare interface UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting {
    updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}
export declare interface UpdateEnterpriseMembersCanCreateRepositoriesSetting {
    updateEnterpriseMembersCanCreateRepositoriesSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}
export declare interface UpdateEnterpriseMembersCanDeleteIssuesSetting {
    updateEnterpriseMembersCanDeleteIssuesSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}
export declare interface UpdateEnterpriseMembersCanDeleteRepositoriesSetting {
    updateEnterpriseMembersCanDeleteRepositoriesSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}
export declare interface UpdateEnterpriseMembersCanInviteCollaboratorsSetting {
    updateEnterpriseMembersCanInviteCollaboratorsSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}
export declare interface UpdateEnterpriseMembersCanMakePurchasesSetting {
    updateEnterpriseMembersCanMakePurchasesSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}
export declare interface UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting {
    updateEnterpriseMembersCanUpdateProtectedBranchesSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}
export declare interface UpdateEnterpriseMembersCanViewDependencyInsightsSetting {
    updateEnterpriseMembersCanViewDependencyInsightsSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}

export declare interface UpdateEnterpriseOrganizationProjectsSetting {
    updateEnterpriseOrganizationProjectsSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}

export declare interface UpdateEnterpriseProfile {
    updateEnterpriseProfile: {
        clientMutationId: string;
        enterprise: Enterprise;
    }
}

export declare interface UpdateEnterpriseRepositoryProjectsSetting {
    updateEnterpriseRepositoryProjectsSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}

export declare interface UpdateEnterpriseTeamDiscussionsSetting {
    updateEnterpriseTeamDiscussionsSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}

export declare interface UpdateEnterpriseTwoFactorAuthenticationRequiredSetting {
    updateEnterpriseTwoFactorAuthenticationRequiredSetting: {
        clientMutationId: string;
        enterprise: Enterprise;
        message: string;
    }
}

export declare interface UpdateIpAllowListEnabledSetting {
    updateIpAllowListEnabledSetting: {
        clientMutationId: string;
        owner: IpAllowListOwner;
    }
}

export declare interface UpdateIpAllowListEntry {
    updateEnterpriseOrganizationProjectsSetting: {
        clientMutationId: string;
        ipAllowListEntry: IpAllowListEntry;
    }
}

export declare interface UpdateIssue {
    updateIssue: {
        clientMutationId: string;
        actor: Actor;
        issue: Issue;
    }
}

export declare interface UpdateIssueComment {
    updateIssueComment: {
        clientMutationId: string;
        issueComment: IssueComment;
    }
}

export declare interface UpdateLabel {
    updateLabel: {
        clientMutationId: string;
        label: Label;
    }
}

export declare interface UpdateNotificationRestrictionSetting {
    updateNotificationRestrictionSetting: {
        clientMutationId: string;
        owner: any;
    }
}

export declare interface UpdateProject {
    updateEnterpriseOrganizationProjectsSetting: {
        clientMutationId: string;
        project: Project;
    }
}

export declare interface UpdateProjectCard {
    updateProjectCard: {
        clientMutationId: string;
        projectCard: ProjectCard;
    }
}

export declare interface UpdateProjectColumn{
    unpinIssue: {
        clientMutationId: string;
        projectColumn: Column;
    }
}

export declare interface UpdatePullRequest {
    updatePullRequest: {
        actor: Actor;
        clientMutationId: string;
        pullRequest: PullRequest;
    }
}

export declare interface UpdatePullRequestReview {
    updatePullRequestReview: {
        clientMutationId: string;
        pullRequestReview: PullRequestReview;
    }
}

export declare interface UpdatePullRequestReviewComment {
    updatePullRequestReviewComment: {
        clientMutationId: string;
        pullRequestReviewComment: PullRequestReviewComment;
    }
}

export declare interface UpdateRef {
    updateRef: {
        clientMutationId: string;
        ref: Ref;
    }
}

export declare interface UpdateRefs {
    updateRefs: {
        clientMutationId: string;
        refs: Refs;
    }
}

export declare interface UpdateRepository {
    updateRepository: {
        clientMutationId: string;
        respository: RepositoryInfo;
    }
}

export declare interface UpdateSubscription {
    updateSubscription: {
        clientMutationId: string;
        subscribable: Subscribable;
    }
}

export declare interface UpdateTeamDiscussion {
    updateTeamDiscussion: {
        clientMutationId: string;
        teamDiscussion: TeamDiscussion;
    }
}

export declare interface UpdateTeamDiscussionComment {
    updateTeamDiscussionComment: {
        clientMutationId: string;
        teamDiscussionComment: TeamDiscussionComment;
    }
}

export declare interface UpdateTeamReviewAssignment {
    updateTeamReviewAssignment: {
        clientMutationId: string;
        team: Team;
    }
}

export declare interface UpdateTopics {
    updateTopics: {
        clientMutationId: string;
        invalidTopicNames: string[];
        repository: RepositoryRes;
    }
}

export declare interface VerifyVerifiableDomain {
    verifyVerifiableDomain: {
        clientMutationId: string;
        domain: Domain;
    }
}

interface ErrorType {
    message: string
    locations: any
}