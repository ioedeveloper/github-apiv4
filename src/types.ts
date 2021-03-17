/**
 * @description Github Graphql API response type for Viewer query
 */
export declare interface Viewer {
    viewer: UserInfo; // eslint-disable-line
}

export declare interface UserInfo {
    anyPinnableItems: boolean;
    avatarUrl: string | null;
    bio: string | null;
    bioHTML: string | null;
    commitComments: UserCommitContents;
    company: string | null;
    companyHTML: string | null;
    contributionCollection: any;
    createdAt: string;
    databaseId: string;
    email: string;
    followers: Followers;
    following: Following;
    gist: Commit;
    gistComments: Comment[];
    gists: Commit[];
    hasSponsorsListing: boolean;
    hovercard: HoverCard;
    id: string;
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isEmployee: boolean;
    isSponsoredBy: any;
    isSponsoringViewer: any;
    isHireable: boolean;
    isViewer: boolean;
    isssueComments: IssueComment[]
    issues: Issue[]
    itemShowcase: {
        hasPinnedItems: boolean;
        items: {
            edges: [{
                node: [
                    Gist, Repositories
                ]
            }];
            nodes: [
                Gist, Repositories
            ];
            pageInfo: PageInfo;
            totalCount: number;
        }
    }
    location: string;
    login: string;
    name: string;
    organization: Organization
    organizationVerifiedDomainEmails: (login: string) => {

    };
    organizations: Organization[];
    packages: {
        edges: [{
            cursor: string;
            node: Package;
        }];
        nodes: [Package];
        pageInfo: PageInfo;
        totalCount: number;
    }
    pinnableItems: {
        edges: [{
            cursor: string;
            node: [
                Gist, Repositories
            ] 
        }]
        nodes: [
            Gist, Repositories
        ]
        pageInfo: PageInfo;
        totalCount: number
    };
    pinnedItems: {
        edges: [{
            cursor: string;
            node: [
                Gist, Repositories
            ] 
        }]
        nodes: [
            Gist, Repositories
        ]
        pageInfo: PageInfo;
        totalCount: number
    };
    pinnedItemsRemaining: number;
    url: string;
    project: Project;
    projects: {
        edges: [{
            cursor: string;
            node: Project;
        }]
        nodes: Project;
        pageInfo: PageInfo;
        totalCount: number
    }
    projectsResourcePath: string;
    projectsUrl:string;
    publicKeys: {
        edges: [{
            cursor: string;
            node: {
                accessedAt: string
                createdAt: string
                fingerprint: string
                id:string;
                isReadOnly: boolean
                key: string
                updatedAt: string
              };
        }]
        nodes: [{
          accessedAt: string
          createdAt: string
          fingerprint: string
          id:string;
          isReadOnly: boolean
          key: string
          updatedAt: string
        }]
        pageInfo: PageInfo;
        totalCount: number;
    }
    pullRequests: {
        edges: [{
            cursor: string,
            node: PullRequest
        }]
        nodes: [PullRequest]
        pageInfo: PageInfo;
        totalCount: number;
    }
    repositories: {
        edges: [{
            cursor: string,
            node: Repository
        }]
        nodes: [Repository]
        pageInfo: PageInfo;
        totalCount: number;
        totalDiskUsage: number
    }
    repositoriesContributedTo: {
        edges: [{
            cursor: string,
            node: Repository
        }]
        nodes: [Repository]
        pageInfo: PageInfo;
        totalCount: number;
        totalDiskUsage: number;
    }
    repository: Repository;
    resourcePath: string;
    savedReplies: {
        edges: [{
            cursor: string,
            node: Reply
        }]
        nodes: [Reply]
        pageInfo: PageInfo;
        totalCount: number;
    }
    sponsorsListing: SponsorsListing;
    sponsorshipForViewerAsSponsor: SponsorShip;
    sponsorshipsAsMaintainer: {
        edges: [{
            cursor: string;
            node: SponsorShip;
        }]
        nodes: [SponsorShip];
        pageInfo: PageInfo;
        totalCount: number;
    }
    sponsorshipsAsSponsor: {
        edges: [{
            cursor: string;
            node: SponsorShip;
        }]
        nodes: [SponsorShip];
        pageInfo: PageInfo;
        totalCount: number;
    }
    starredRepositories: {
        edges: [{
            cursor: string;
            node: Repository;
        }]
        nodes: [Repository];
        pageInfo: PageInfo;
        totalCount: number;
    }
    status: {
        createdAt: string;
        emoji: string;
        emojiHTML:string;
        expiresAt: string;
        id: string;
        indicatesLimitedAvailability: boolean;
        message: string;
        organization: Organization;
        updatedAt: string;
        user: User
    }
    topRepositories: {
        edges: [{
            cursor: string;
            node: Repository;
        }]
        nodes: [Repository];
        pageInfo: PageInfo;
        totalCount: number;
    }
    twitterUsername:string;
    updatedAt: string;
    watching: {
        edges: [{
            cursor: string;
            node: Repository;
        }]
        nodes: [Repository];
        pageInfo: PageInfo;
        totalCount: number;
    };
    websiteUrl: string;
}

export declare interface FileEntries {
    name: string;
    type: string;
    child?: {
        entries: FileEntries[];
    };
}


export declare interface FileEntriesContent {
    name: string;
    type: string;
    child: {
        text?: Blob | null;
        entries?: FileEntriesContent[];
    };
}

export declare interface File {
    encodedName: string;
    encoding: string;
    extension: string;
    isImage: boolean;
    isTruncated: boolean;
    language: {
        color: string
        id: string;
        name: string;
    }
    name: string;
    size: string;
    text: string;
}

export declare interface RepositoryContent {
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

export declare interface RepositoryDirectories {
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
            edges: [{
                node: {
                    id: string;
                    name: string;
                    prefix: string;
                };
                cursor: string;
            }];
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
    repository: null | RepositoryInfo; //eslint-disable-line
}

export declare interface RepositoryInfo {
    createdAt: string;
    databaseId: string;
    description: string | null;
    descriptionHTML: string;
    diskUsage: number;
    forkCount: number;
    hasIssuesEnabled: boolean;
    hasProjectsEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageUrl: string | null;
    id: string;
    isArchived: boolean;
    isDisabled: boolean;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    isTemplate: boolean;
    lockReason: string | null;
    mergeCommitAllowed: boolean;
    mirrorUrl: string | null;
    name: string;
    nameWithOwner: string;
    openGraphImageUrl: string;
    projectsResourcePath: string;
    projectsUrl: string;
    pushedAt: string;
    rebaseMergeAllowed: boolean;
    resourcePath: string;
    shortDescriptionHTML: string;
    squashMergeAllowed: boolean;
    sshUrl: string;
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
    repository: null | {
        branch: null | {
            id: string,
            name: string,
            prefix: string,
        };
    };
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
            id: string;
            message: string;
            messageBody: string;
            messageBodyHTML: string;
            messageHeadline: string;
            messageHeadlineHTML: string;
            oid: string;
            pushedDate: string;
            resourcePath: string;
            tarballUrl: string;
            treeResourcePath: string;
            treeUrl: string;
            url: string;
            viewerCanSubscribe: boolean;
            viewerSubscription: string;
            zipballUrl: string;
        };
    };
}

export declare interface CodeOfConduct {
    codeOfConduct: null | {
        name: string;
        id: string;
        body: string;
        key: string;
        resourcePath: string;
        url: string;
    };
}

export declare interface Followers {
    edges: [{
        node: UserInfo;
        cursor: string;
    }];
    nodes:[UserInfo];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Following {
    edges: [{
        node: UserInfo;
        cursor: string;
    }];
    nodes:[UserInfo]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface User {
    user: UserInfo;
}

export declare interface Repositories {
    user: {
        repositories: {
            edges: [{
                node: RepositoryInfo;
                cursor: string;
            }];
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

export declare interface Author {
    avatarUrl: string;
    login: string;
    resourcePath: string;
    url: string;
}

export declare interface UserCommitContents {
    user: {
        commitComments: {
            edges: [{
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
                    editor: Author | null;
                    id: string;
                    includesCreatedEdit: boolean;
                    isMinimized: boolean;
                    lastEditedAt: string | null;
                    minimizedReason: string | null;
                    path: string | null;
                    position: number | null;
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
            }] | [];
            pageInfo: PageInfo;
            totalCount: number;
        };
    };
}

export declare interface Issue {
    activeLockReason: string | null;
    author: Author;
    body: string;
    bodyHTML: string;
    bodyText: string;
    closed: boolean;
    closedAt: string;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Author | null;
    hovercard: [{
        message: string;
        octicon: string;
    }];
    id: string;
    includesCreatedEdit: boolean;
    lastEditedAt: string | null;
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
}

export declare interface HoverCard {
    contexts: {
        message: string;
        GenericHovercardContext: {
            message: string;
            octicon: string;
        }
        OrganizationTeamsHovercardContext: {
            message: string;
            octicon: string;
            relevantTeams: Team[]
        }
    }
}

export declare interface Team {
    ancestors: Team[]
    avatarUrl: string;
    childTeams: Team[]
    combinedSlug: string;
    createdAt: string;
    databaseId: string;
    description: string;

}

export declare interface Discussion {
    author: Owner;
    authorAssociation: string;
    body: string;
    bodyHTML: string;
    bodyText: string;
    bodyVersion: string;
    comments: Comment[]
    commentsResourcePath: string;
    commentsUrl: string;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: string;
    editor: Owner;
    id: string;
    includesCreatedEdit: boolean;
    isPinned: boolean;
    isPrivate: boolean;
    lastEditedAt: string;
    number: number;
    publishedAt: string;
    reactionGroups: ReactionGroup[];
}

export declare interface Owner {
    avatarUrl: string;
    login: string;
    resourcePath: string;
    url: string;
    enterpriseUserAccount: EnterpriseUserAccount;
    organization: Organization
    user: User;
    bannequin: Mannequin;
    bot: Bot;

}

export declare interface EnterpriseUserAccount {
    avatarUrl: string;
    createdAt: string;
    enterprise: Enterprise;
    id: string;
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
    databaseId: string;
    email: string;
    id: string;
    login: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Bot {
    avatarUrl: string;
    createdAt: string;
    databaseId: string;
    id: string;
    login: string;
    resourcePath: string
    updatedAt: string;
    url: string;
}

export declare interface ReactionGroup {
    content: string;
    reactionGroup: ReactionGroup;
    createdAt: string;
    reactionGroups: ReactionGroup[]
    viewerCanReact: boolean;
    issue: Issue | null;
    pullRequest: PullRequest | null;
    teamDiscussion: Discussion | null;
    teamDiscussionComment: Discussion | null;
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
    id: string;
    reactable: string;
}

export declare interface PageInfo {
    endCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
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
    comments: Comment[];
    createdAt: string;
    description: string;
    files: File[];
    forks: Fork[];
    id: string;
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

export declare interface Stargazers {
    edges: [{
        cursor: string;
        node: User;
    }]
    nodes: [User];
    starredAt: string;
}
export declare interface Release {

}
export declare interface Version {
    files: File[];
    id: string;
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
    id: string;
    latestVersion: Version;
    name: string;
    packageType: string;
    repository: Repository
    statistics: {
        downloadsTotalCount: number;
    };
    version: Version;
    versions: {
        edges: [{
            node: Version
        }]
        nodes: [Version]
        pageInfo: PageInfo;
        totalCount: number;
    }
}

export declare interface Project {

}

export declare interface Reply {
    body: string;
    bodyHTML: string;
    databaseId: string;
    id: string;
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

export declare interface Tier{
    adminInfo:{
        sponsorShips: {
            edges: [{
                cursor: string;
                node: SponsorShip;
            }]
            nodes: [SponsorShip];
            pageInfo: PageInfo;
        };

    }
    createdAt:string;
    description: string;
    descriptionHTML: string;
    id: string;
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
    createdAt:string;
    id: string;
    maintainer: User;
    privacyLevel: string;
    sponsor: User
    sponsorEntity: Sponsor
    sponsorable: {
        hasSponsorsListing:  boolean;
        isSponsoredBy: string;
        isSponsoringViewer: boolean;
        sponsorsListing: SponsorsListing;
        sponsorshipForViewerAsSponsor: SponsorShip;
        sponsorshipsAsMaintainer: {
            edges: [{
                cursor: string;
                node: SponsorShip;
            }];
            nodes: [SponsorShip];
            pageInfo: PageInfo;
            totalCount: number;
        }
        sponsorshipsAsSponsor: {
            edges: [{
                cursor: string;
                node: SponsorShip;
            }];
            nodes: [SponsorShip];
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

export declare interface SponsorsListing{
    activeGoal: Goal;
    createdAt: string;
    fullDescription:string;
    fullDescriptionHTML:string;
    id: string;
    name: string
    shortDescription: string;
    slug: string;
    tiers: {
        edges: [{
            cursor: string;
            node: Tier;
        }];
        nodes: [Tier];
        pageInfo: PageInfo;
        totalCount: number;
    }
}