export declare interface Viewer {
    viewer: {
        login?: string;
    };
}

export declare interface FileEntries {
    name: string;
    type: string;
    child: {
        entries: FileEntries[];
    };
}

export declare interface RepositoryContentDefaultBranch {
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

export declare interface RepositoryDirectoriesDefaultBranch {
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
