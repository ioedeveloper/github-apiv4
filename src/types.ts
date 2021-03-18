/**
 * @description Github Graphql API response type for Viewer query
 */
export declare interface Viewer {
    viewer: UserInfo;
}

export declare interface UserInfo {
    id: string;
    email: string;
    login: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    databaseId: string;
    companyHTML: string;
    projectsUrl: string | null;
    location: string | null;
    company: string | null;
    avatarUrl: string | null;
    bio: string | null;
    websiteUrl: string | null;
    isHireable: boolean;
    isDeveloperProgramMember: boolean;
    anyPinnableItems: boolean;
    isSiteAdmin: boolean;
    viewerCanFollow: boolean;
    viewerIsFollowing: boolean;
    viewerCanCreateProjects: boolean;
    isEmployee: boolean;
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isViewer: boolean;
    viewerCanChangePinnedItems: boolean;
    pinnedItemsRemaining: number;
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
    repository: null | RepositoryInfo;
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

export declare interface ViewerFollowers {
    viewer: {
        followers: {
            edges: [{
                node: UserInfo;
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
            pageInfo: {
                endCursor: string | null;
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                startCursor: string | null;
            }
            totalCount: number;
        };
    };
}

export declare interface UserIssues {
    user: {
        issues: {
            edges: [{
                cursor: string;
                node: {
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
                };
            }];
            pageInfo: {
                endCursor: string | null;
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                startCursor: string | null;
            }
            totalCount: number;
        };
    };
}


export declare interface SecurityVulnerabilities {
    securityVulnerabilities: {
        edges: {
            cursor: string | null;
            node: [{
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
            }];
        }
        nodes: [{
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
        }];
        totalCount: number;
    }
}

export declare interface SecurityAdvisory {
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
    references: {
        url: string;
    }
    severity: string;
    summary: string;
    updatedAt: string;
    vulnerabilities: SecurityVulnerabilities[]
    withdrawnAt: string;
}
export declare interface CWES {
    edges: [{
        cursor: string;
        node: [{
            cweId: string;
            description: string;
            id: string;
            name: string
        }]
    }]
    nodes: [{
        cweId: string;
        description: string;
        id: string;
        name: string
    }]
}
