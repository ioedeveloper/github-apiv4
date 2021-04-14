/**
 * @description Github Graphql API response type for Viewer query
 */
export declare interface Viewer {
    viewer: UserInfo; // eslint-disable-line 
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
        edges: [{
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
        edges: [{
            cursor: string,
            node: PullRequest
        }]
        nodes: [PullRequest]
        pageInfo: PageInfo;
        totalCount: number;
    }
    repositories: Repositories;
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
    repository: RepositoryInfo;
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
        totalCount: number;
    }
    status: {
        createdAt: string;
        emoji: string;
        emojiHTML: string;
        expiresAt: string;
        id: string;
        indicatesLimitedAvailability: boolean;
        message: string;
        organization: OrganizationInfo;
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
    twitterUsername: string;
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
        text?: Blob;
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
    databaseId: number;
    description: string;
    descriptionHTML: string;
    diskUsage: number;
    forkCount: number;
    hasIssuesEnabled: boolean;
    hasProjectsEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageUrl: string;
    id: number;
    isArchived: boolean;
    isDisabled: boolean;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    isTemplate: boolean;
    lockReason: string;
    mergeCommitAllowed: boolean;
    mirrorUrl: string;
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
            id: number;
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
        id: number;
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
    nodes: [UserInfo];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Following {
    edges: [{
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
            }] | [];
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
    id: number;
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

export declare interface Owner {
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
    reactionGroup: ReactionGroup;
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
    closestLesserValueTier: Tier;
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
    id: number;
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


export declare interface Actor extends Bot, User, OrganizationInfo {

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
    organization: OrganizationInfo;
    operationType: string;
    organizationName: string;
    organizationResourcePath: string;
    organizationUrl: string;
    user: User;
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
    organization: OrganizationInfo;
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
    id: number;
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
    id: number;
    indicatesLimitedAvailability: boolean;
    message: string;
    organization: OrganizationInfo;
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
    id: string;
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
    id: number;
    invitationType: string;
    invitee: UserInfo;
    inviter: UserInfo;
    organization: Organization;
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

export declare interface Comments {
    edges: {
        cursor: string;
        node: Discussion;
    }[]
    nodes: Discussion[];
    pageInfo: PageInfo;
    totalCount: number
}

export declare interface ReactionGroups {

}

export declare interface Reactions {

}

export declare interface UserContentEdits {

}
