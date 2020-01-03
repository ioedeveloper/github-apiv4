/**
 * @description Github Graphql API response type for Viewer query
 */
export declare interface Viewer {
    viewer: {
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
    };
}

export declare interface FileEntries {
    name: string;
    type: string;
    child: {
        entries: FileEntries[];
    };
}

export declare interface FileEntriesContent {
    text: Blob;
    name: string;
    type: string;
    child: {
        entries: FileEntriesContent[];
    };
}

export declare interface RepositoryContent {
    repository: {
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
    repository: {
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
    repository: {
        refs: {
            edges: [{
                node: {
                    id: string;
                    name: string;
                    prefix: string;
                };
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
    repository: {
        ref: {
            target: {
                files: {
                    entries: FileEntriesContent[];
                };
            };
        };
    };
}

export declare interface BranchDirectories {
    repository: {
        ref: {
            target: {
                files: {
                    entries: FileEntries[];
                };
            };
        };
    };
}

export declare interface Repository {
    repository: {
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
    };
}

export declare interface CommitDirectories {
    repository: {
        commit: {
            files: {
                entries: FileEntries[];
            };
        };
    };
}

export declare interface CommitContent {
    repository: {
        commit: {
            files: {
                entries: FileEntriesContent[];
            };
        };
    };
}

export declare interface Branch {
    repository: {
        ref: {
            id: string,
            name: string,
            prefix: string,
        };
    };
}

export declare interface Commit {
    repository: {
        commit: {
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
