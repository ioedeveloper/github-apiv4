/**
 * @description Github Graphql Query for viewer details
 */
export const Viewer = `
    query {
        viewer {
          id
          email
          login
          url
          createdAt
          updatedAt
          databaseId
          location
          companyHTML
          company
          avatarUrl
          bio
          websiteUrl
          isHireable
          isDeveloperProgramMember
          anyPinnableItems
          isSiteAdmin
          isViewer
          viewerCanFollow
          viewerIsFollowing
          viewerCanCreateProjects
          isEmployee
          isBountyHunter
          isCampusExpert
          pinnedItemsRemaining
          projectsUrl
        }
    }
`;

/**
 * @description Github Graphql Query for repository content (files and directories)
 */
export const RepositoryContent = `
    query($repositoryOwner: String!, $repositoryName: String!){
        repository(owner: $repositoryOwner, name: $repositoryName){
            defaultBranchRef{
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Blob{
                                          text
                                        }
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Blob{
                                                text
                                              }
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Blob{
                                                      text
                                                    }
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Blob{
                                                            text
                                                          }
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Blob{
                                                                  text
                                                                }
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Blob{
                                                                        text
                                                                      }
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Blob{
                                                                              text
                                                                            }
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Blob{
                                                                                    text
                                                                                  }
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Blob{
                                                                                          text
                                                                                        }
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

/**
 * @description Github Graphql Query for repository directories only (content excluded)
 */
export const RepositoryDirectories = `
    query($repositoryOwner: String!, $repositoryName: String!){
        repository(owner: $repositoryOwner, name: $repositoryName){
            defaultBranchRef{
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

/**
 * @description Github Graphql Query for list of repository branches
 * @queryVariable first: 10, after: CURSOR
 */
export const Branches = `
  query($repositoryOwner: String!, $repositoryName: String!, $first: Int, $after: String, $before: String, $last: Int, $refPrefix: String = "refs/heads/"){
    repository(owner: $repositoryOwner, name: $repositoryName){
      branches: refs(refPrefix: $refPrefix, first: $first, after: $after, last: $last, before: $before){
        edges{
          node{
            id
            name
            prefix
          }
          cursor
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
    }
  }
`;

/**
 * @description Github Graphql Query for repository branch content (files and directories)
 * @queryVariable qualifiedName: "refs/heads/master"
 */
export const BranchContent = `
    query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
        repository(owner: $repositoryOwner, name: $repositoryName){
            branch: ref(qualifiedName: $qualifiedName){
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Blob{
                                          text
                                        }
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Blob{
                                                text
                                              }
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Blob{
                                                      text
                                                    }
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Blob{
                                                            text
                                                          }
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Blob{
                                                                  text
                                                                }
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Blob{
                                                                        text
                                                                      }
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Blob{
                                                                              text
                                                                            }
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Blob{
                                                                                    text
                                                                                  }
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Blob{
                                                                                          text
                                                                                        }
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

/**
 * @description Github Graphql Query for repository branch directories only (content excluded)
 * @queryVariable qualifiedName: "refs/heads/master"
 */
export const BranchDirectories = `
    query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
      repository(owner: $repositoryOwner, name: $repositoryName){
          branch: ref(qualifiedName: $qualifiedName){
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

/**
 * @description Github Graphql Query for repository details
 * @type string
 */
export const Repository = `
  query($repositoryOwner: String!, $repositoryName: String!){
    repository(owner: $repositoryOwner, name: $repositoryName){
      createdAt
      databaseId
      description
      descriptionHTML
      diskUsage
      forkCount
      hasIssuesEnabled
      hasProjectsEnabled
      hasWikiEnabled
      homepageUrl
      id
      isArchived
      isDisabled
      isFork
      isLocked
      isMirror
      isPrivate
      isTemplate
      lockReason
      mergeCommitAllowed
      mirrorUrl
      name
      nameWithOwner
      openGraphImageUrl
      projectsResourcePath
      projectsUrl
      pushedAt
      rebaseMergeAllowed
      resourcePath
      shortDescriptionHTML
      squashMergeAllowed
      sshUrl
      tempCloneToken
      updatedAt
      url
      usesCustomOpenGraphImage
      viewerCanAdminister
      viewerCanCreateProjects
      viewerCanAdminister
      viewerCanSubscribe
      viewerCanUpdateTopics
      viewerHasStarred
      viewerPermission
      viewerSubscription
    }
  }
`;

/**
 * @description Github Graphql Query for commit content (files and directories)
 * @queryVariable expression: "refs/heads/master" OR commit hash
 */
export const CommitContent = `
query($repositoryOwner: String!, $repositoryName: String!, $expression: String!){
  repository(owner: $repositoryOwner, name: $repositoryName){
    commit: object(expression: $expression){
      ... on Commit{
        files: tree{
            entries{
                name
                type
                child: object{
                    ... on Blob{
                      text
                    }
                    ... on Tree{
                      entries{
                        name
                        type
                        child: object{
                          ... on Blob{
                            text
                          }
                          ... on Tree{
                            entries{
                              name
                              type
                              child: object{
                                ... on Blob{
                                  text
                                }
                                ... on Tree{
                                  entries{
                                    name
                                    type
                                    child: object{
                                      ... on Blob{
                                        text
                                      }
                                      ... on Tree{
                                        entries{
                                          name
                                          type
                                          child: object{
                                            ... on Blob{
                                              text
                                            }
                                            ... on Tree{
                                              entries{
                                                name
                                                type
                                                child: object{
                                                  ... on Blob{
                                                    text
                                                  }
                                                  ... on Tree{
                                                    entries{
                                                      name
                                                      type
                                                      child: object{
                                                        ... on Blob{
                                                          text
                                                        }
                                                        ... on Tree{
                                                          entries{
                                                            name
                                                            type
                                                            child: object{
                                                              ... on Blob{
                                                                text
                                                              }
                                                              ... on Tree{
                                                                entries{
                                                                  name
                                                                  type
                                                                  child: object{
                                                                    ... on Blob{
                                                                      text
                                                                    }
                                                                    ... on Tree{
                                                                      entries{
                                                                        name
                                                                        type
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
        }
        }
    }
    }
  }
}
`;

/**
 * @description Github Graphql Query for commit directories only (content excluded)
 * @queryVariable expression: "refs/heads/master" OR commit hash
 */
export const CommitDirectories = `
  query($repositoryOwner: String!, $repositoryName: String!, $expression: String!){
    repository(owner: $repositoryOwner, name: $repositoryName){
      commit: object(expression: $expression){
        ... on Commit{
          files: tree{
              entries{
                  name
                  type
                  child: object{
                      ... on Tree{
                        entries{
                          name
                          type
                          child: object{
                            ... on Tree{
                              entries{
                                name
                                type
                                child: object{
                                  ... on Tree{
                                    entries{
                                      name
                                      type
                                      child: object{
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
          }
          }
      }
      }
    }
  }
`;

/**
 * @description Github Graphql Query for branch details
 * @queryVariable qualifiedName: "refs/heads/master"
 */
export const Branch = `
  query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
    repository(owner: $repositoryOwner, name: $repositoryName){
      branch: ref(qualifiedName: $qualifiedName){
        id
        name
        prefix
      }
    }
  }
`;

/**
 * @description Github Graphql Query for commit details
 * @queryVariable expression: "refs/heads/master" OR commit hash
 */
export const Commit = `
query($repositoryOwner: String!, $repositoryName: String!, $expression: String!){
  repository(owner: $repositoryOwner, name: $repositoryName){
    commit: object(expression: $expression){
      ... on Commit{
        authoredByCommitter
        authoredDate
        changedFiles
        commitUrl
        committedDate
        committedViaWeb
        deletions
        id
        message
        messageBody
        messageBodyHTML
        messageHeadline
        messageHeadlineHTML
        oid
        pushedDate
        resourcePath
        tarballUrl
        treeResourcePath
        treeUrl
        url
        viewerCanSubscribe
        viewerSubscription
        zipballUrl
      }
    }
  }
}
`;

/**
 * @description Github Graphql Query for code of conduct
 * @queryVariable key: String!
 */
export const CodeOfConduct = `
query($key: String!){
	codeOfConduct(key: $key){
    name
    id
    body
    key
    resourcePath
    url
  }
}
`;

/**
 * @description Github Graphql Query for Viewer Followers
 * @queryVariable after: String! //Cursor , before: String! //Cursor
 */
export const ViewerFollowers = `
  query($after: String, $before: String, $first: Int, $last: Int){
    viewer{
      followers(first: $first, after: $after, before: $before, last: $last){
        edges{
          node{
            id
            email
            login
            url
            createdAt
            updatedAt
            databaseId
            location
            companyHTML
            company
            avatarUrl
            bio
            websiteUrl
            isHireable
            isDeveloperProgramMember
            anyPinnableItems
            isSiteAdmin
            isViewer
            viewerCanFollow
            viewerIsFollowing
            viewerCanCreateProjects
            isEmployee
            isBountyHunter
            isCampusExpert
            pinnedItemsRemaining
            projectsUrl
          }
          cursor
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
    }
  }
`;

/**
 * @description Github Graphql Query for Github User
 * @queryVariable username: String!
 */
export const User = `
  query($username: String!){
    user(login: $username){
      id
      email
      login
      url
      createdAt
      updatedAt
      databaseId
      location
      companyHTML
      company
      avatarUrl
      bio
      websiteUrl
      isHireable
      isDeveloperProgramMember
      anyPinnableItems
      isSiteAdmin
      isViewer
      viewerCanFollow
      viewerIsFollowing
      viewerCanCreateProjects
      isEmployee
      isBountyHunter
      isCampusExpert
      pinnedItemsRemaining
      projectsUrl
    }
  }
`;

/**
 * @description Github Graphql Query for All User Repositories
 * @queryVariable username: String! first: Int!
 */
export const Repositories = `
  query($username: String!, $affiliations: RepositoryAffiliation, $after: String, $before: String, $first: Int, $isFork: Boolean, $isLocked: Boolean, $last: Int, $orderBy: RepositoryOrder, $privacy: RepositoryPrivacy){
    user(login: $username){
      repositories(affiliations: [$affiliations], after: $after, before: $before, first: $first, isFork: $isFork, isLocked: $isLocked, last: $last, orderBy: $orderBy, privacy: $privacy){
        edges{
          cursor
          node{
            createdAt
            databaseId
            description
            descriptionHTML
            diskUsage
            forkCount
            hasIssuesEnabled
            hasProjectsEnabled
            hasWikiEnabled
            homepageUrl
            id
            isArchived
            isDisabled
            isFork
            isLocked
            isMirror
            isPrivate
            isTemplate
            lockReason
            mergeCommitAllowed
            mirrorUrl
            name
            nameWithOwner
            openGraphImageUrl
            projectsResourcePath
            projectsUrl
            pushedAt
            rebaseMergeAllowed
            resourcePath
            shortDescriptionHTML
            squashMergeAllowed
            sshUrl
            tempCloneToken
            updatedAt
            url
            usesCustomOpenGraphImage
            viewerCanAdminister
            viewerCanCreateProjects
            viewerCanAdminister
            viewerCanSubscribe
            viewerCanUpdateTopics
            viewerHasStarred
            viewerPermission
            viewerSubscription
          }
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
        totalDiskUsage
      }
    }
  }
`;

/**
 * @description Github Graphql Query for CommitComments
 * @queryVariable username: String! first: Int!
 */
export const UserCommitComments = `
query($username: String!, $after: String, $before: String, $first: Int, $last: Int){
	user(login: $username){
    commitComments(after: $after, before: $before, first: $first, last: $last){
      edges{
        cursor
        node{
          author{
            avatarUrl
            login
            resourcePath
            url
          }
          authorAssociation
          body
          bodyHTML
          bodyText
          createdAt
          createdViaEmail
          databaseId
          editor{
            avatarUrl
            login
            resourcePath
            url
          }
          id
          includesCreatedEdit
          isMinimized
          lastEditedAt
          minimizedReason
          path
          position
          publishedAt
          resourcePath
          updatedAt
          url
          viewerCanDelete
          viewerCanMinimize
          viewerCanReact
          viewerCanUpdate
          viewerCannotUpdateReasons
        }
      }
      pageInfo{
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
`;

/**
 * @description Github Graphql Query for User Issues
 * @queryVariable username: String! first: Int!
 */
export const UserIssues = `
query($username: String!, $before: String, $after: String, $filterBy: IssueFilters, $first: Int, $last: Int, $orderBy: IssueOrder, $includeNotificationContexts: Boolean = true){
  user(login: $username){
    issues(after: $after, before: $before, filterBy: $filterBy, first: $first, last: $last, orderBy: $orderBy){
      edges{
        cursor
        node{
          activeLockReason
          author{
            avatarUrl
            login
            resourcePath
            url
          }
          body
          bodyHTML
          bodyText
          closed
          closedAt
          createdAt
          createdViaEmail
          databaseId
          editor{
            avatarUrl
            login
            resourcePath
            url
          }
          hovercard(includeNotificationContexts: $includeNotificationContexts){
            contexts{
              message
              octicon
            }
          }
          id
          includesCreatedEdit
          lastEditedAt
          locked
          milestone {
            id
          }
          number
          publishedAt
          reactionGroups {
            createdAt
          }
          resourcePath
          state
          title
          updatedAt
          url
          viewerCanReact
          viewerCanSubscribe
          viewerCanUpdate
          viewerCannotUpdateReasons
          viewerDidAuthor
          viewerSubscription
        }
      }
      pageInfo{
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
`;

 /**
 * @description Github Graphql Query for License
 */

export const License = `
query {
  license(key: "") {
    body
    conditions {
      description
      key
      label
    }
    description
    featured
    hidden
    id
    implementation
    key
    limitations {
      description
      key
      label
    }
    name
    nickname
    permissions {
      description
      key
      label
    }
    pseudoLicense
    spdxId
    url
  }
  licenses {
    body
    conditions {
      description
      key
      label
    }
    description
    featured
    hidden
    id
    implementation
    key
    limitations {
      description
      key
      label
    }
    name
    nickname
    permissions {
      description
      key
      label
    }
    pseudoLicense
    spdxId
    url
  }
}
`

/**
 * @description Github Graphql Query for MarketPlaceCategories
 */
export const MarketPlaceCategories = `
  query {
    marketplaceCategories(excludeEmpty: true, excludeSubcategories: false, includeCategories: $includeCategories) {
      description
      howItWorks
      id
      name
      primaryListingCount
      resourcePath
      secondaryListingCount
      slug
      url
    }
  }
`
/**
 * @description Github Graphql Query for MarketPlaceCategory
 */

export const MarketPlaceCategory = `
  query {
    marketplaceCategories(excludeEmpty: true, excludeSubcategories: false, includeCategories: $includeCategories) {
      description
      howItWorks
      id
      name
      primaryListingCount
      resourcePath
      secondaryListingCount
      slug
      url
    }
  }
`

/**
 * @description Github Graphql Query for RateLimit
 */


export const RateLimit = `
  query {
    rateLimit(dryRun: $dryRun) {
      cost
      limit
      nodeCount
      remaining
      resetAt
      used
    }
  }
`

/**
 * @description Github Graphql Query for Search
 */


export const Search = `
  query {
    search(query: $query, type: $type, first: $first,) {
      edges {
        node {
          ... on User {
            id
            email
            anyPinnableItems(type: $pintype)
            bio
            avatarUrl
            bioHTML
            company
            companyHTML
            createdAt
            databaseId
            hasSponsorsListing
            isBountyHunter
            isCampusExpert
            isDeveloperProgramMember
            isEmployee
            isGitHubStar
            isHireable
            isSiteAdmin
            isSponsoringViewer
            isViewer
            issueComments(first: $first) {
              edges {
                node {
                  id
                  author {
                    avatarUrl
                    login
                  }
                }
                cursor
              }
              totalCount
            }
            followers {
              totalCount
            }
            following {
              totalCount
            }
            gist(name: $gistname) {
              createdAt
              description
              forks {
                totalCount
              }
              id
              isFork
              isPublic
              name
              owner {
                login
                id
                avatarUrl
                url
                resourcePath
                ... on Organization {
                  id
                  email
                }
                ... on User {
                  id
                  email
                }
              }
              pushedAt
              resourcePath
              stargazerCount
              viewerHasStarred
              url
              updatedAt
            }
            location
            login
            name
            pinnedItemsRemaining
            websiteUrl
            viewerIsSponsoring
            viewerIsFollowing
            viewerCanSponsor
            viewerCanFollow
            viewerCanCreateProjects
            viewerCanChangePinnedItems
            url
            updatedAt
            twitterUsername
            resourcePath
            projectsUrl
            projectsResourcePath
            gistComments(first: $first) {
              nodes {
                id
              }
              edges {
                node {
                  id
                }
              }
            }
          }          
        }
        ... on Repository {
          id
          name
          createdAt
          databaseId
          deleteBranchOnMerge
          collaborators(affiliation: $affiliation) {
            totalCount
          }
          description
          diskUsage
          forkCount
          hasIssuesEnabled
          hasProjectsEnabled
          hasWikiEnabled
          homepageUrl
          isArchived
          isBlankIssuesEnabled
          isDisabled
          isEmpty
          isFork
          isInOrganization
          isLocked
          isMirror
          isPrivate
          isSecurityPolicyEnabled
          isTemplate
          isUserConfigurationRepository
          issue(number: $totalnumber) {
            id
            activeLockReason
            author {
              login
              url
              resourcePath
              avatarUrl
              ... on User {
                id
                email
                anyPinnableItems
                avatarUrl
                bio
                bioHTML
                company
                companyHTML
                createdAt
                databaseId
                hasSponsorsListing
                isBountyHunter
                isCampusExpert
                isDeveloperProgramMember
                isEmployee
                isGitHubStar
                isHireable
                isSiteAdmin
                isSponsoringViewer
                isViewer
                location
                login
                name
                pinnedItemsRemaining
                projectsResourcePath
                projectsUrl
                resourcePath
                websiteUrl
                viewerIsSponsoring
                viewerIsFollowing
                viewerCanSponsor
                viewerCanFollow
                viewerCanCreateProjects
                viewerCanChangePinnedItems
                url
                updatedAt
                twitterUsername
              }
              ... on Organization {
                id
                email
                anyPinnableItems
                avatarUrl
                createdAt
                databaseId
                description
                descriptionHTML
                hasSponsorsListing
                ipAllowListEnabledSetting
                isSponsoringViewer
                isVerified
                location
                login
                name
                newTeamResourcePath
                newTeamUrl
                notificationDeliveryRestrictionEnabledSetting
                organizationBillingEmail
                pinnedItemsRemaining
                projectsResourcePath
                projectsUrl
                requiresTwoFactorAuthentication
                resourcePath
                teamsResourcePath
                teamsUrl
                twitterUsername
                updatedAt
                url
                viewerCanAdminister
                viewerCanChangePinnedItems
                viewerCanCreateProjects
                viewerCanCreateRepositories
                viewerCanCreateTeams
                viewerCanSponsor
                viewerIsAMember
                viewerIsSponsoring
                websiteUrl
              }
              ... on Mannequin {
                id
                email
                url
                updatedAt
                resourcePath
                login
                databaseId
                createdAt
                avatarUrl
              }
              ... on Bot {
                id
                url
                updatedAt
                resourcePath
                login
                databaseId
                createdAt
                avatarUrl
              }
            }
            authorAssociation
            body
            bodyHTML
            bodyResourcePath
            bodyText
            bodyUrl
            closed
            closedAt
            createdAt
            createdViaEmail
            databaseId
            editor {
              avatarUrl
              login
              resourcePath
              url
            }
            includesCreatedEdit
            isPinned
            isReadByViewer
            lastEditedAt
            locked
            number
            publishedAt
            resourcePath
            state
            title
            updatedAt
            url
            viewerCanReact
            viewerCanSubscribe
            viewerCanUpdate
            viewerCannotUpdateReasons
            viewerDidAuthor
            viewerSubscription
          }
          issueOrPullRequest(number: $totalnumber)
          lockReason
          mergeCommitAllowed
          mirrorUrl
          nameWithOwner
          openGraphImageUrl
          projectsResourcePath
          projectsUrl
          pushedAt
          rebaseMergeAllowed
          resourcePath
          securityPolicyUrl
          squashMergeAllowed
          sshUrl
          stargazerCount
          tempCloneToken
          updatedAt
          url
          usesCustomOpenGraphImage
          viewerCanAdminister
          viewerCanCreateProjects
          viewerCanSubscribe
          viewerCanUpdateTopics
          viewerDefaultMergeMethod
          viewerDefaultCommitEmail
          viewerHasStarred
          viewerPermission
          viewerPossibleCommitEmails
          viewerSubscription
        }
        ... on PullRequest {
          id
          activeLockReason
          additions
          assignees {
            totalCount
          }
          author {
            avatarUrl
            login
            resourcePath
            url
            ... on EnterpriseUserAccount {
              id
              name
              url
              updatedAt
              resourcePath
              login
              createdAt
              avatarUrl
            }
            ... on Organization {
              id
              email
              websiteUrl
              viewerIsSponsoring
              viewerIsAMember
              viewerCanSponsor
              viewerCanCreateTeams
              viewerCanCreateRepositories
              viewerCanCreateProjects
              viewerCanChangePinnedItems
              viewerCanAdminister
              url
              updatedAt
              twitterUsername
              teamsUrl
              teamsResourcePath
              resourcePath
              requiresTwoFactorAuthentication
              projectsUrl
              projectsResourcePath
              pinnedItemsRemaining
              organizationBillingEmail
              notificationDeliveryRestrictionEnabledSetting
              newTeamUrl
              newTeamResourcePath
              name
              login
              location
              isVerified
              isSponsoringViewer
              isSponsoredBy
              ipAllowListEnabledSetting
              hasSponsorsListing
              descriptionHTML
              description
              databaseId
              createdAt
              avatarUrl
              anyPinnableItems
            }
            ... on User {
              id
              email
              websiteUrl
              viewerIsSponsoring
              viewerIsFollowing
              viewerCanSponsor
              viewerCanFollow
              viewerCanCreateProjects
              viewerCanChangePinnedItems
              url
              updatedAt
              twitterUsername
              resourcePath
              projectsUrl
              projectsResourcePath
              pinnedItemsRemaining
              organizationVerifiedDomainEmails(login: "")
              name
              login
              location
              isViewer
              isSponsoringViewer
              isSponsoredBy(accountLogin: "")
              isSiteAdmin
              isHireable
              isGitHubStar
              isEmployee
              isDeveloperProgramMember
              isCampusExpert
              isBountyHunter
              hasSponsorsListing
              databaseId
              createdAt
              companyHTML
              company
              bioHTML
              bio
              avatarUrl
              anyPinnableItems
            }
            ... on Mannequin {
              id
              email
              avatarUrl
              createdAt
              databaseId
              login
              resourcePath
              updatedAt
              url
            }
            ... on Bot {
              id
              url
              updatedAt
              resourcePath
              login
              databaseId
              createdAt
              avatarUrl
            }
          }
          authorAssociation
          baseRefName
          baseRefOid
          body
          bodyHTML
          bodyText
          changedFiles
          checksResourcePath
          checksUrl
          closed
          closedAt
          createdAt
          createdViaEmail
          databaseId
          deletions
          editor {
            avatarUrl
            login
            resourcePath
            url
            ... on Organization {
              id
              email
              anyPinnableItems
              avatarUrl
              createdAt
              databaseId
              description
              descriptionHTML
              ipAllowListEnabledSetting
              isSponsoringViewer
              isVerified
              location
              login
              name
              newTeamResourcePath
              newTeamUrl
              notificationDeliveryRestrictionEnabledSetting
              organizationBillingEmail
              pinnedItemsRemaining
              projectsResourcePath
              projectsUrl
              requiresTwoFactorAuthentication
              resourcePath
              teamsResourcePath
              teamsUrl
              twitterUsername
              updatedAt
              url
              viewerCanAdminister
              websiteUrl
              viewerIsSponsoring
              viewerIsAMember
              viewerCanSponsor
              viewerCanCreateTeams
              viewerCanCreateRepositories
              viewerCanCreateProjects
              viewerCanChangePinnedItems
            }
            ... on User {
              id
              email
              anyPinnableItems
              avatarUrl
              bio
              bioHTML
              company
              companyHTML
              createdAt
              databaseId
              isBountyHunter
              isCampusExpert
              isDeveloperProgramMember
              isEmployee
              isGitHubStar
              isHireable
              isSiteAdmin
              isSponsoringViewer
              isViewer
              location
              login
              name
              pinnedItemsRemaining
              projectsResourcePath
              projectsUrl
              resourcePath
              twitterUsername
              updatedAt
              url
              viewerCanChangePinnedItems
              viewerCanCreateProjects
              viewerCanFollow
              viewerCanSponsor
              viewerIsFollowing
              viewerIsSponsoring
              websiteUrl
            }
            ... on EnterpriseUserAccount {
              id
              name
              url
              login
              resourcePath
              updatedAt
              createdAt
              avatarUrl
            }
            ... on Mannequin {
              id
              email
              avatarUrl
              createdAt
              databaseId
              login
              resourcePath
              updatedAt
              url
            }
            ... on Bot {
              id
              avatarUrl
              createdAt
              databaseId
              login
              resourcePath
              updatedAt
              url
            }
          }
          headRefName
          headRefOid
          headRepositoryOwner
          includesCreatedEdit
          isCrossRepository
          isDraft
          isReadByViewer
          lastEditedAt
          locked
          maintainerCanModify
          mergeable
          merged
          mergedAt
          mergedBy {
            avatarUrl
            login
            resourcePath
            url
            ... on EnterpriseUserAccount {
              id
              name
              url
              avatarUrl
            }
            ... on Organization {
              id
              email
              organizationBillingEmail
              notificationDeliveryRestrictionEnabledSetting
              newTeamUrl
              name
              newTeamResourcePath
              login
              location
              isVerified
              isSponsoringViewer
              ipAllowListEnabledSetting
              hasSponsorsListing
              description
              databaseId
              createdAt
              avatarUrl
              anyPinnableItems
              pinnedItemsRemaining
              projectsResourcePath
              projectsUrl
              requiresTwoFactorAuthentication
              resourcePath
              teamsResourcePath
              teamsUrl
              twitterUsername
              updatedAt
              url
              viewerCanAdminister
              viewerCanChangePinnedItems
              viewerCanCreateProjects
              viewerCanCreateRepositories
              viewerCanCreateTeams
              viewerCanSponsor
              viewerIsAMember
              viewerIsSponsoring
              websiteUrl
            }
            ... on User {
              id
              email
              anyPinnableItems
              avatarUrl
              bio
              company
              createdAt
              databaseId
              followers {
                totalCount
              }
              following {
                totalCount
              }
              hasSponsorsListing
              isBountyHunter
              isCampusExpert
              isDeveloperProgramMember
              isViewer
              isSponsoringViewer
              isSiteAdmin
              isHireable
              isEmployee
              isGitHubStar
              location
              login
              name
              pinnedItemsRemaining
              projectsResourcePath
              projectsUrl
              resourcePath
              twitterUsername
              updatedAt
              url
              viewerCanChangePinnedItems
              viewerCanCreateProjects
              viewerCanFollow
              viewerCanSponsor
              viewerIsFollowing
              viewerIsSponsoring
              websiteUrl
            }
            ... on Mannequin {
              id
              email
              avatarUrl
              createdAt
              databaseId
              login
              resourcePath
              url
              updatedAt
            }
            ... on Bot {
              id
              url
              updatedAt
              resourcePath
              login
              databaseId
              createdAt
              avatarUrl
            }
          }
          milestone {
            closed
            closedAt
            createdAt
            creator {
              avatarUrl
              login
              resourcePath
              url
              ... on EnterpriseUserAccount {
                id
                name
              }
              ... on Organization {
                id
                email
              }
              ... on User {
                id
                email
              }
              ... on Mannequin {
                id
                email
              }
              ... on Bot {
                id
              }
            }
            description
            dueOn
            id
            number
            progressPercentage
            resourcePath
            state
            title
            updatedAt
            url
          }
          number
          permalink
          publishedAt
          resourcePath
          revertResourcePath
          revertUrl
          reviewDecision
          state
          title
          updatedAt
          url
          viewerSubscription
          viewerDidAuthor
          viewerCannotUpdateReasons
          viewerCanUpdate
          viewerCanSubscribe
          viewerCanReact
          viewerCanEnableAutoMerge
          viewerCanDisableAutoMerge
          viewerCanDeleteHeadRef
          viewerCanApplySuggestion
        }
        ... on Organization {
          id
          email
          anyPinnableItems
          avatarUrl
          createdAt
          databaseId
          description
          descriptionHTML
          hasSponsorsListing
          ipAllowListEnabledSetting
          isSponsoringViewer
          isVerified
          isSponsoredBy(accountLogin: "")
          location
          itemShowcase {
            hasPinnedItems
            items {
              totalCount
            }
          }
          login
          memberStatuses {
            totalCount
          }
          name
          newTeamResourcePath
          newTeamUrl
          notificationDeliveryRestrictionEnabledSetting
          organizationBillingEmail
          pinnedItemsRemaining
          projectsResourcePath
          projectsUrl
          requiresTwoFactorAuthentication
          resourcePath
          teamsResourcePath
          teamsUrl
          twitterUsername
          updatedAt
          url
          viewerCanAdminister
          viewerCanChangePinnedItems
          viewerCanCreateProjects
          viewerCanCreateRepositories
          viewerCanCreateTeams
          viewerCanSponsor
          viewerIsAMember
          viewerIsSponsoring
          websiteUrl
          teams {
            totalCount
          }
          sponsorshipsAsSponsor {
            totalCount
          }
          sponsorshipsAsMaintainer {
            totalCount
          }
          sponsorshipForViewerAsSponsor {
            sponsorable {
              hasSponsorsListing
              isSponsoringViewer
              viewerCanSponsor
              viewerIsSponsoring
              ... on Organization {
                id
                email
                websiteUrl
                viewerIsSponsoring
                viewerIsAMember
                viewerCanSponsor
                viewerCanCreateTeams
                viewerCanCreateRepositories
                viewerCanCreateProjects
                viewerCanChangePinnedItems
                viewerCanAdminister
                url
                updatedAt
                twitterUsername
                teamsUrl
                teamsResourcePath
                resourcePath
                requiresTwoFactorAuthentication
                projectsUrl
                projectsResourcePath
                pinnedItemsRemaining
                organizationBillingEmail
                notificationDeliveryRestrictionEnabledSetting
                newTeamUrl
                newTeamResourcePath
                name
                login
                location
                isVerified
                isSponsoringViewer
                ipAllowListEntries {
                  totalCount
                }
                hasSponsorsListing
                description
                databaseId
                createdAt
                avatarUrl
                anyPinnableItems
              }
              ... on User {
                id
                email
                websiteUrl
                location
                viewerIsSponsoring
                viewerIsFollowing
                viewerCanSponsor
                viewerCanFollow
                viewerCanChangePinnedItems
                viewerCanCreateProjects
                updatedAt
                url
                twitterUsername
                resourcePath
                projectsUrl
                projectsResourcePath
                pinnedItemsRemaining
                name
                login
                isViewer
                isSponsoringViewer
                isSiteAdmin
                isHireable
                isGitHubStar
                isEmployee
                isDeveloperProgramMember
                isCampusExpert
                isBountyHunter
                hasSponsorsListing
                databaseId
                createdAt
                companyHTML
                company
                bio
                avatarUrl
                anyPinnableItems
              }
            }
            privacyLevel
            sponsor {
              websiteUrl
              viewerIsSponsoring
              viewerIsFollowing
              viewerCanSponsor
              viewerCanFollow
              viewerCanChangePinnedItems
              viewerCanCreateProjects
              url
              updatedAt
              twitterUsername
              resourcePath
              projectsUrl
              projectsResourcePath
              pinnedItemsRemaining
              name
              login
              location
              isViewer
              isSponsoringViewer
              isSiteAdmin
              isHireable
              isGitHubStar
              isEmployee
              isDeveloperProgramMember
              isCampusExpert
              isBountyHunter
              id
              hasSponsorsListing
              email
              databaseId
              createdAt
              company
              bio
              anyPinnableItems
            }
            sponsorEntity
            id
            createdAt
          }
        }
        ... on MarketplaceListing {
          id
          name
          app {
            createdAt
            databaseId
            description
            id
            logoBackgroundColor
            logoUrl
            name
            slug
            updatedAt
            url
          }
          companyUrl
          configurationResourcePath
          configurationUrl
          documentationUrl
          extendedDescription
          extendedDescriptionHTML
          fullDescription
          fullDescriptionHTML
          hasPublishedFreeTrialPlans
          hasTermsOfService
          hasVerifiedOwner
          howItWorks
          installationUrl
          installedForViewer
          isArchived
          isDraft
          isPaid
          isPublic
          isRejected
          isUnverified
          isUnverifiedPending
          isVerificationPendingFromDraft
          isVerificationPendingFromUnverified
          isVerified
          logoBackgroundColor
          logoUrl
          normalizedShortDescription
          pricingUrl
          privacyPolicyUrl
          resourcePath
          screenshotUrls
          shortDescription
          slug
          statusUrl
          supportEmail
          supportUrl
          termsOfServiceUrl
          url
          viewerCanAddPlans
          viewerCanApprove
          viewerCanDelist
          viewerIsListingAdmin
          viewerHasPurchasedForAllOrganizations
          viewerHasPurchased
          viewerCanRequestApproval
          viewerCanReject
          viewerCanRedraft
          viewerCanEditPlans
          viewerCanEditCategories
          viewerCanEdit
          secondaryCategory {
            description
            howItWorks
            id
            name
            primaryListingCount
            resourcePath
            secondaryListingCount
            slug
            url
          }
          howItWorksHTML
        }
      }
      ... on Issue {
        id
        activeLockReason
        assignees {
          totalCount
        }
        author {
          avatarUrl
          login
          resourcePath
          url
          ... on EnterpriseUserAccount {
            id
            name
            url
            updatedAt
            resourcePath
            login
            createdAt
            avatarUrl
          }
          ... on Organization {
            id
            email
            avatarUrl
            anyPinnableItems
            createdAt
            databaseId
            description
            descriptionHTML
            domains {
              totalCount
            }
            hasSponsorsListing
            ipAllowListEnabledSetting
            isSponsoringViewer
            isVerified
            location
            login
            membersWithRole {
              totalCount
            }
            memberStatuses {
              totalCount
            }
            name
            newTeamResourcePath
            newTeamUrl
            notificationDeliveryRestrictionEnabledSetting
            organizationBillingEmail
            pinnedItemsRemaining
            projectsResourcePath
            projectsUrl
            requiresTwoFactorAuthentication
            repository
          }
          ... on User {
            id
            email
            avatarUrl
            anyPinnableItems
            bio
            company
            companyHTML
            bioHTML
            createdAt
            databaseId
            followers {
              totalCount
            }
            following {
              totalCount
            }
            gists {
              totalCount
            }
            interactionAbility
            name
            location
            isViewer
            isSponsoringViewer
            isSiteAdmin
            isHireable
            isGitHubStar
            isDeveloperProgramMember
            isEmployee
            isCampusExpert
            isBountyHunter
            pinnedItemsRemaining
            projectsResourcePath
            projectsUrl
            resourcePath
            twitterUsername
            updatedAt
            url
            viewerCanChangePinnedItems
            viewerCanCreateProjects
            viewerCanFollow
            viewerCanSponsor
            viewerIsFollowing
            viewerIsSponsoring
            websiteUrl
          }
          ... on Mannequin {
            id
            email
            url
            updatedAt
            resourcePath
            login
            databaseId
            createdAt
            avatarUrl
          }
          ... on Bot {
            id
            url
            updatedAt
            resourcePath
            login
            databaseId
            createdAt
            avatarUrl
          }
        }
        authorAssociation
        body
        bodyResourcePath
        bodyHTML
        bodyText
        bodyUrl
        closed
        closedAt
        createdAt
        createdViaEmail
        databaseId
        editor {
          avatarUrl
          login
          resourcePath
          url
          ... on EnterpriseUserAccount {
            id
            name
            url
            updatedAt
            resourcePath
            login
            createdAt
            avatarUrl
          }
          ... on Organization {
            id
            email
            websiteUrl
            viewerIsSponsoring
            viewerIsAMember
            viewerCanSponsor
            viewerCanCreateTeams
            viewerCanCreateRepositories
            viewerCanCreateProjects
            viewerCanChangePinnedItems
            viewerCanAdminister
            url
            updatedAt
            twitterUsername
            teamsUrl
            teamsResourcePath
            resourcePath
            requiresTwoFactorAuthentication
            projectsUrl
            projectsResourcePath
            pinnedItemsRemaining
            organizationBillingEmail
            notificationDeliveryRestrictionEnabledSetting
            newTeamUrl
            newTeamResourcePath
            name
            login
            location
            isVerified
            isSponsoringViewer
            ipAllowListEnabledSetting
            hasSponsorsListing
            descriptionHTML
            description
            databaseId
            createdAt
            avatarUrl
            anyPinnableItems
          }
          ... on User {
            id
            email
            websiteUrl
            viewerIsSponsoring
            viewerIsFollowing
            viewerCanSponsor
            viewerCanFollow
            viewerCanCreateProjects
            viewerCanChangePinnedItems
            url
            updatedAt
            twitterUsername
            topRepositories(orderBy: {field: CREATED_AT, direction: ASC}) {
              totalDiskUsage
              totalCount
            }
            status {
              updatedAt
              message
              indicatesLimitedAvailability
              id
              expiresAt
              emojiHTML
              emoji
              createdAt
            }
            starredRepositories {
              totalCount
              isOverLimit
            }
            sponsorshipsAsSponsor {
              totalCount
            }
            sponsorshipsAsMaintainer {
              totalCount
            }
            repositoriesContributedTo {
              totalCount
              totalDiskUsage
            }
            repositories {
              totalDiskUsage
              totalCount
            }
            pullRequests {
              totalCount
            }
            publicKeys {
              totalCount
            }
            projectsUrl
            projectsResourcePath
            pinnedItemsRemaining
            name
            login
            location
            isViewer
            isSponsoringViewer
            isSiteAdmin
            isHireable
            isGitHubStar
            isEmployee
            isDeveloperProgramMember
            isCampusExpert
            isBountyHunter
            hasSponsorsListing
            databaseId
            createdAt
            companyHTML
            company
            bio
            avatarUrl
            anyPinnableItems
          }
          ... on Mannequin {
            id
            email
            url
            updatedAt
            resourcePath
            login
            databaseId
            createdAt
            avatarUrl
          }
          ... on Bot {
            id
            url
            updatedAt
            resourcePath
            login
            databaseId
            createdAt
            avatarUrl
          }
        }
        includesCreatedEdit
        isPinned
        isReadByViewer
        lastEditedAt
        locked
        number
        publishedAt
        resourcePath
        state
        title
        updatedAt
        url
        viewerCanReact
        viewerCanSubscribe
        viewerCanUpdate
        viewerCannotUpdateReasons
        viewerDidAuthor
        viewerSubscription
      }
      ... on MarketplaceListing {
        id
        name
        app {
          createdAt
          databaseId
          description
          id
          logoBackgroundColor
          logoUrl
          name
          slug
          updatedAt
          url
        }
        companyUrl
        configurationResourcePath
        configurationUrl
        documentationUrl
        extendedDescription
        extendedDescriptionHTML
        fullDescription
        fullDescriptionHTML
        hasPublishedFreeTrialPlans
        hasTermsOfService
        hasVerifiedOwner
        howItWorks
        installationUrl
        installedForViewer
        isArchived
        isDraft
        isPaid
        isPublic
        isRejected
        isUnverified
        isUnverifiedPending
        isVerificationPendingFromDraft
        isVerificationPendingFromUnverified
        isVerified
        logoBackgroundColor
        logoUrl
        normalizedShortDescription
        pricingUrl
        privacyPolicyUrl
        resourcePath
        screenshotUrls
        shortDescription
        slug
        statusUrl
        supportEmail
        supportUrl
        termsOfServiceUrl
        url
        viewerCanAddPlans
        viewerCanApprove
        viewerCanDelist
        viewerIsListingAdmin
        viewerHasPurchasedForAllOrganizations
        viewerHasPurchased
        viewerCanRequestApproval
        viewerCanReject
        viewerCanRedraft
        viewerCanEditPlans
        viewerCanEditCategories
        viewerCanEdit
        secondaryCategory {
          description
          howItWorks
          id
          name
          primaryListingCount
          resourcePath
          secondaryListingCount
          slug
          url
        }
        howItWorksHTML
      }
      ... on Organization {
        id
        email
        anyPinnableItems
        avatarUrl
        createdAt
        databaseId
        description
        descriptionHTML
        hasSponsorsListing
        ipAllowListEnabledSetting
        isSponsoringViewer
        isVerified
        location
        itemShowcase {
          hasPinnedItems
          items {
            totalCount
          }
        }
        login
        memberStatuses {
          totalCount
        }
        name
        newTeamResourcePath
        newTeamUrl
        notificationDeliveryRestrictionEnabledSetting
        pinnedItemsRemaining
        projectsResourcePath
        projectsUrl
        teamsResourcePath
        teamsUrl
        twitterUsername
        updatedAt
        url
        viewerCanAdminister
        viewerCanChangePinnedItems
        viewerCanCreateProjects
        viewerCanCreateRepositories
        viewerCanCreateTeams
        viewerCanSponsor
        viewerIsAMember
        viewerIsSponsoring
        websiteUrl
        teams {
          totalCount
        }
        sponsorshipsAsSponsor {
          totalCount
        }
        sponsorshipsAsMaintainer {
          totalCount
        }
        sponsorshipForViewerAsSponsor {
          sponsorable {
            hasSponsorsListing
            isSponsoringViewer
            viewerCanSponsor
            viewerIsSponsoring
            ... on Organization {
              id
              email
              websiteUrl
              viewerIsSponsoring
              viewerIsAMember
              viewerCanSponsor
              viewerCanCreateTeams
              viewerCanCreateRepositories
              viewerCanCreateProjects
              viewerCanChangePinnedItems
              viewerCanAdminister
              url
              updatedAt
              twitterUsername
              teamsUrl
              teamsResourcePath
              resourcePath
              requiresTwoFactorAuthentication
              projectsUrl
              projectsResourcePath
              pinnedItemsRemaining
              organizationBillingEmail
              notificationDeliveryRestrictionEnabledSetting
              newTeamUrl
              newTeamResourcePath
              name
              login
              location
              isVerified
              isSponsoringViewer
              ipAllowListEntries {
                totalCount
              }
              hasSponsorsListing
              description
              databaseId
              createdAt
              avatarUrl
              anyPinnableItems
            }
            ... on User {
              id
              email
              websiteUrl
              location
              viewerIsSponsoring
              viewerIsFollowing
              viewerCanSponsor
              viewerCanFollow
              viewerCanChangePinnedItems
              viewerCanCreateProjects
              updatedAt
              url
              twitterUsername
              resourcePath
              projectsUrl
              projectsResourcePath
              pinnedItemsRemaining
              name
              login
              isViewer
              isSponsoringViewer
              isSiteAdmin
              isHireable
              isGitHubStar
              isEmployee
              isDeveloperProgramMember
              isCampusExpert
              isBountyHunter
              hasSponsorsListing
              databaseId
              createdAt
              companyHTML
              company
              bio
              avatarUrl
              anyPinnableItems
            }
          }
          privacyLevel
          sponsor {
            websiteUrl
            viewerIsSponsoring
            viewerIsFollowing
            viewerCanSponsor
            viewerCanFollow
            viewerCanChangePinnedItems
            viewerCanCreateProjects
            url
            updatedAt
            twitterUsername
            resourcePath
            projectsUrl
            projectsResourcePath
            pinnedItemsRemaining
            name
            login
            location
            isViewer
            isSponsoringViewer
            isSiteAdmin
            isHireable
            isGitHubStar
            isEmployee
            isDeveloperProgramMember
            isCampusExpert
            isBountyHunter
            id
            hasSponsorsListing
            email
            databaseId
            createdAt
            company
            bio
            anyPinnableItems
          }
          sponsorEntity
          id
          createdAt
        }
      }
      ... on Repository {
        id
        name
        createdAt
        databaseId
        deleteBranchOnMerge
        collaborators(affiliation: ALL) {
          totalCount
        }
        description
        diskUsage
        forkCount
        hasIssuesEnabled
        hasProjectsEnabled
        hasWikiEnabled
        homepageUrl
        isArchived
        isBlankIssuesEnabled
        isDisabled
        isEmpty
        isFork
        isInOrganization
        isLocked
        isMirror
        isPrivate
        isSecurityPolicyEnabled
        isTemplate
        isUserConfigurationRepository
        issue(number: 10) {
          id
          activeLockReason
          author {
            login
            url
            resourcePath
            avatarUrl
            ... on User {
              id
              email
              anyPinnableItems
              avatarUrl
              bio
              bioHTML
              company
              companyHTML
              createdAt
              databaseId
              hasSponsorsListing
              isBountyHunter
              isCampusExpert
              isDeveloperProgramMember
              isEmployee
              isGitHubStar
              isHireable
              isSiteAdmin
              isSponsoringViewer
              isViewer
              location
              login
              name
              pinnedItemsRemaining
              projectsResourcePath
              projectsUrl
              resourcePath
              websiteUrl
              viewerIsSponsoring
              viewerIsFollowing
              viewerCanSponsor
              viewerCanFollow
              viewerCanCreateProjects
              viewerCanChangePinnedItems
              url
              updatedAt
              twitterUsername
            }
            ... on EnterpriseUserAccount {
              id
              name
              url
              updatedAt
              resourcePath
              login
              createdAt
              avatarUrl
            }
            ... on Organization {
              id
              email
              anyPinnableItems
              avatarUrl
              createdAt
              databaseId
              description
              descriptionHTML
              hasSponsorsListing
              ipAllowListEnabledSetting
              isSponsoringViewer
              isSponsoredBy(accountLogin: "")
              isVerified
              location
              login
              name
              newTeamResourcePath
              newTeamUrl
              notificationDeliveryRestrictionEnabledSetting
              organizationBillingEmail
              pinnedItemsRemaining
              projectsResourcePath
              projectsUrl
              requiresTwoFactorAuthentication
              resourcePath
              teamsResourcePath
              teamsUrl
              twitterUsername
              updatedAt
              url
              viewerCanAdminister
              viewerCanChangePinnedItems
              viewerCanCreateProjects
              viewerCanCreateRepositories
              viewerCanCreateTeams
              viewerCanSponsor
              viewerIsAMember
              viewerIsSponsoring
              websiteUrl
            }
            ... on Mannequin {
              id
              email
              url
              updatedAt
              resourcePath
              login
              databaseId
              createdAt
              avatarUrl
            }
            ... on Bot {
              id
              url
              updatedAt
              resourcePath
              login
              databaseId
              createdAt
              avatarUrl
            }
          }
          authorAssociation
          body
          bodyHTML
          bodyResourcePath
          bodyText
          bodyUrl
          closed
          closedAt
          createdAt
          createdViaEmail
          databaseId
          editor {
            avatarUrl
            login
            resourcePath
            url
          }
          includesCreatedEdit
          isPinned
          isReadByViewer
          lastEditedAt
          locked
          number
          publishedAt
          resourcePath
          state
          title
          updatedAt
          url
          viewerCanReact
          viewerCanSubscribe
          viewerCanUpdate
          viewerCannotUpdateReasons
          viewerDidAuthor
          viewerSubscription
        }
        issueOrPullRequest(number: 100)
        lockReason
        mergeCommitAllowed
        mirrorUrl
        nameWithOwner
        openGraphImageUrl
        projectsResourcePath
        projectsUrl
        pushedAt
        rebaseMergeAllowed
        resourcePath
        securityPolicyUrl
        squashMergeAllowed
        sshUrl
        stargazerCount
        tempCloneToken
        updatedAt
        url
        usesCustomOpenGraphImage
        viewerCanAdminister
        viewerCanCreateProjects
        viewerCanSubscribe
        viewerCanUpdateTopics
        viewerDefaultMergeMethod
        viewerDefaultCommitEmail
        viewerHasStarred
        viewerPermission
        viewerPossibleCommitEmails
        viewerSubscription
      }
      ... on App {
        id
        name
        createdAt
        databaseId
        description
        logoBackgroundColor
        logoUrl
        slug
        updatedAt
        url
      }

      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      issueCount
      userCount
      repositoryCount
      wikiCount
    }
  }
`

/**
 * @description Github Graphql Query for Sponsorables
 */



export const Sponsorables = `
  query {
    sponsorables(after: $after, before: $before, dependencyEcosystem: $dependencyEcosystem, first: $first, last: $last, onlyDependencies: $onlyDependencies, orderBy: {field: $field, direction: $direction}, orgLoginForDependencies: $orgLoginForDependencies) {
      edges {
        cursor
        node {
          ... on Organization {
            id
            email
          }
          ... on User {
            id
            email
          }
        }
      }
      nodes {
        ... on Organization {
          id
          email
        }
        ... on User {
          id
          email
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }

`

/**
 * @description Github Graphql Query for Topic
 */

export const Topic = `
  query {
    topic(name: $name) {
      id
      name
      stargazerCount
      viewerHasStarred
      stargazers(after: $after, before: $before, first: $first, last: $last, orderBy: {field: STARRED_AT, direction: ASC}) {
        edges {
          cursor
          starredAt
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
      relatedTopics(first: $first) {
        id
        name
        stargazerCount
        viewerHasStarred
      }
    }
  }


`

/**
 * @description Github Graphql Query for codes of conduct
 * @queryVariable key: String!
 */
export const CodesOfConduct = `
query($key: String!){
	codeOfConduct(key: $key){
    name
    id
    body
    key
    resourcePath
    url
  }
}
`;

/**
 * @description Github Graphql MembersCanDeleteReposClearAuditEntry
 * @defaultVariable id
 * @queryVariables  avatarUrl
 * createdAt 
 * databaseId
 * login
 * resourcePath
 * updatedAt
 * url
 */
export const Bot = (fields:string) => `
  ... on Bot {
    id
    ${fields}
  }
`

export function OnUser(fields: string){
  return `
    ... on User {
      id
      email
      ${fields}
    }
  `
}

export function Repo(fields:string, name:string){
  return `
  repository(name: ${name}) {
    ${fields}
    codeOfConduct {
      body
      url
      name
    }
  }
  `
}
export const Owner = (fields: string, user: string = '', organization: string = '', repository: string) => `
  owner {
    ${fields}
    ${user}
    ${organization}
    ${repository}
  }
`
export const Node = (fields: string, owner:string = '') => `
  edges {
    node {
      ${fields}
      ${owner}
    }
  }
  `


/**
 * @description Github Graphql Query for Repository Owner
 * @queryVariables repositoryName: String, privacy: String, first: number
 * @optionalVariable user: User, organisation: Organisation, repository: Repo
 */

export const RepositoryOwner = (repositoryName:string, privacy: string, first:number, node = '', user = '', organization = '', repository = '') => `     
    {
      repositoryOwner(login: ${repositoryName}) {
        id
        avatarUrl
        login
        repositories(first: ${first}, privacy: ${privacy}) {
          ${edge}
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          totalCount
          totalDiskUsage
        }
        resourcePath
        url
        ${repository}
      }
    }

`

/**
 * @description Github Graphql Query for codes of resource
 * @queryVariables url: String, type: String, field: String, direction: String, labelname: String, gistname: String, filepath: String, releaseTagName: String, number: Int, productnumber: Int
 */

export const Resource = `
  query {
    resource(url: $url) {
      resourcePath
      url
      ... on Organization {
        id
        email
        anyPinnableItems(type: $type)
        auditLog {
          totalCount
        }
        avatarUrl
        createdAt
        databaseId
        description
        descriptionHTML
        domains(orderBy: {field: $field, direction: $direction}) {
          totalCount
        }
        hasSponsorsListing
        ipAllowListEnabledSetting
        interactionAbility {
          expiresAt
          limit
          origin
        }
        ipAllowListEntries {
          totalCount
        }
        isSponsoringViewer
        isVerified
        location
        login
        memberStatuses {
          totalCount
        }
        name
        newTeamResourcePath
        newTeamUrl
        notificationDeliveryRestrictionEnabledSetting
        organizationBillingEmail
        packages {
          totalCount
        }
        pendingMembers {
          totalCount
        }
        pinnableItems {
          totalCount
        }
        pinnedItemsRemaining
        project(number: $number) {
          viewerCanUpdate
          url
          updatedAt
          state
          resourcePath
          owner {
            id
            projectsUrl
            projectsResourcePath
            viewerCanCreateProjects
            ... on Organization {
              id
              email
            }
            ... on User {
              id
              email
            }
            ... on Repository {
              id
              name
            }
          }
        }
        projectsResourcePath
        projectsUrl
        requiresTwoFactorAuthentication
        resourcePath
        teamsResourcePath
        teamsUrl
        twitterUsername
        updatedAt
        url
        viewerCanAdminister
        viewerCanChangePinnedItems
        viewerCanCreateProjects
        viewerCanCreateRepositories
        viewerCanCreateTeams
        viewerCanSponsor
        viewerIsAMember
      }
      ... on Release {
        id
        name
        url
        updatedAt
        tagName
        shortDescriptionHTML
        resourcePath
        publishedAt
        isPrerelease
        isLatest
        isDraft
        description
        createdAt
      }
      ... on User {
        id
        email
        anyPinnableItems
        avatarUrl
        bio
        bioHTML
        company
        companyHTML
        createdAt
        databaseId
        hasSponsorsListing
        isBountyHunter
        isCampusExpert
        isDeveloperProgramMember
        isEmployee
        isGitHubStar
        isHireable
        isSiteAdmin
        isSponsoringViewer
        isViewer
        location
        login
        name
        pinnedItemsRemaining
        projectsResourcePath
        projectsUrl
        resourcePath
        twitterUsername
        updatedAt
        url
        viewerCanChangePinnedItems
        viewerCanCreateProjects
        viewerCanFollow
        viewerCanSponsor
        viewerIsFollowing
        viewerIsSponsoring
        websiteUrl
      }
      ... on Issue {
        id
        activeLockReason
        author {
          avatarUrl
          login
          resourcePath
          url
          ... on EnterpriseUserAccount {
            id
            name
          }
          ... on Organization {
            id
            email
          }
          ... on User {
            id
            email
            followers {
              totalCount
            }
            following {
              totalCount
            }
            hasSponsorsListing
            isBountyHunter
            isCampusExpert
            isDeveloperProgramMember
            isEmployee
            isGitHubStar
            isHireable
            isSiteAdmin
            isSponsoringViewer
            isViewer
            issueComments {
              totalCount
            }
            issues {
              totalCount
            }
            location
            login
            name
            pinnedItemsRemaining
            projectsResourcePath
            projectsUrl
            resourcePath
            twitterUsername
            updatedAt
            url
            viewerCanChangePinnedItems
            viewerCanCreateProjects
            viewerCanFollow
            viewerCanSponsor
            viewerIsFollowing
            viewerIsSponsoring
            websiteUrl
          }
          ... on Mannequin {
            id
            email
            avatarUrl
            createdAt
            databaseId
            login
            resourcePath
            updatedAt
            url
          }
          ... on Bot {
            id
            url
            updatedAt
            resourcePath
            login
            databaseId
            createdAt
            avatarUrl
          }
        }
        authorAssociation
        body
        closed
        closedAt
        createdAt
        createdViaEmail
        databaseId
        editor {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
        includesCreatedEdit
        isPinned
        isReadByViewer
        lastEditedAt
        locked
        milestone {
          closed
          closedAt
          createdAt
          creator {
            avatarUrl
            login
            resourcePath
            url
            ... on EnterpriseUserAccount {
              id
              name
            }
            ... on Organization {
              id
              email
            }
            ... on User {
              id
              email
            }
            ... on Mannequin {
              id
              email
            }
            ... on Bot {
              id
            }
          }
          description
          dueOn
          id
          number
          progressPercentage
          resourcePath
          pullRequests {
            totalCount
          }
          repository {
            createdAt
            databaseId
            deleteBranchOnMerge
            description
            descriptionHTML
            diskUsage
            forkCount
            hasIssuesEnabled
            hasProjectsEnabled
            hasWikiEnabled
            homepageUrl
            id
            isArchived
            isBlankIssuesEnabled
            isDisabled
            isEmpty
            isFork
            isInOrganization
            isLocked
            isMirror
            isPrivate
            isSecurityPolicyEnabled
            isTemplate
            isUserConfigurationRepository
            issueOrPullRequest(number: $number) {
              ... on Issue {
                id
                activeLockReason
                author
                authorAssociation
                body
                closed
                closedAt
                createdAt
                databaseId
                createdViaEmail
                editor {
                  avatarUrl
                  login
                  resourcePath
                  url
                  ... on EnterpriseUserAccount {
                    id
                    name
                  }
                  ... on Organization {
                    id
                    email
                  }
                }
              }
              ... on PullRequest {
                id
                activeLockReason
                additions
                author {
                  avatarUrl
                  login
                  resourcePath
                  url
                  ... on EnterpriseUserAccount {
                    id
                    name
                  }
                  ... on User {
                    id
                    email
                  }
                  ... on Organization {
                    id
                    email
                  }
                  ... on Mannequin {
                    id
                    email
                  }
                  ... on Bot {
                    id
                  }
                }
                authorAssociation
                baseRefName
                baseRefOid
                body
                bodyHTML
                bodyText
                changedFiles
                checksResourcePath
                checksUrl
                closed
                closedAt
                createdAt
                createdViaEmail
                databaseId
                deletions
                editor {
                  avatarUrl
                  login
                  resourcePath
                  url
                  ... on EnterpriseUserAccount {
                    id
                    name
                  }
                  ... on Organization {
                    id
                    email
                  }
                  ... on User {
                    id
                    email
                  }
                  ... on Mannequin {
                    id
                    email
                  }
                  ... on Bot {
                    id
                  }
                }
                headRefName
                headRefOid
                headRepositoryOwner {
                  avatarUrl
                  id
                  login
                  resourcePath
                  url
                  ... on Organization {
                    id
                    email
                  }
                  ... on User {
                    id
                    email
                  }
                }
                includesCreatedEdit
                isCrossRepository
                isDraft
                isReadByViewer
                lastEditedAt
                locked
                maintainerCanModify
                mergeable
                merged
                mergedAt
                mergedBy {
                  avatarUrl
                  login
                  resourcePath
                  url
                  ... on EnterpriseUserAccount {
                    id
                    name
                  }
                  ... on Organization {
                    id
                    email
                  }
                  ... on User {
                    id
                    email
                  }
                  ... on Mannequin {
                    id
                    email
                  }
                  ... on Bot {
                    id
                  }
                }
                milestone {
                  closed
                  closedAt
                  createdAt
                  creator {
                    avatarUrl
                    login
                    resourcePath
                    url
                    ... on EnterpriseUserAccount {
                      id
                      name
                    }
                    ... on Organization {
                      id
                      email
                    }
                    ... on User {
                      id
                      email
                    }
                    ... on Mannequin {
                      id
                      email
                    }
                    ... on Bot {
                      id
                    }
                  }
                  description
                  dueOn
                  id
                  issues {
                    totalCount
                  }
                  number
                  progressPercentage
                  pullRequests {
                    totalCount
                  }
                  repository
                }
                number
                participants {
                  totalCount
                }
                permalink
                publishedAt
                resourcePath
                revertResourcePath
                revertUrl
                reviewDecision
                state
                title
                updatedAt
                url
                viewerCanApplySuggestion
                viewerCanDeleteHeadRef
                viewerCanDisableAutoMerge
                viewerCanEnableAutoMerge
                viewerCanReact
                viewerCanSubscribe
                viewerCanUpdate
                viewerCannotUpdateReasons
                viewerDidAuthor
                viewerMergeBodyText
                viewerMergeHeadlineText
                viewerSubscription
              }
            }
            issueTemplates {
              about
              body
              name
              title
            }
            issues {
              totalCount
            }
            label(name: $labelname) {
              url
              updatedAt
              resourcePath
              name
              id
              isDefault
              description
              createdAt
              color
            }
            labels {
              totalCount
            }
            languages {
              totalSize
              totalCount
            }
            latestRelease {
              url
              updatedAt
              tagName
              shortDescriptionHTML
              resourcePath
              publishedAt
              name
              isPrerelease
              isLatest
              isDraft
              id
              descriptionHTML
              description
              createdAt
            }
            lockReason
            mergeCommitAllowed
            mirrorUrl
            name
            nameWithOwner
            openGraphImageUrl
            owner {
              avatarUrl
              id
              login
              resourcePath
              url
              ... on Organization {
                id
                email
              }
              ... on User {
                id
                email
                anyPinnableItems
                bio
                bioHTML
                company
                companyHTML
                createdAt
                databaseId
                followers {
                  totalCount
                }
                following {
                  totalCount
                }
                gist(name: $gistname) {
                  viewerHasStarred
                  url
                  updatedAt
                }
                isBountyHunter
                isCampusExpert
                isDeveloperProgramMember
                isEmployee
                isGitHubStar
                isHireable
                isSiteAdmin
                isSponsoringViewer
                isViewer
                issueComments {
                  totalCount
                }
                issues {
                  totalCount
                }
                itemShowcase
                location
                login
                name
                packages {
                  totalCount
                }
                pinnableItems {
                  totalCount
                }
                pinnedItemsRemaining
                pinnedItems {
                  totalCount
                }
                project(number: $projectnumber) {
                  viewerCanUpdate
                  url
                  updatedAt
                  state
                  resourcePath
                  owner {
                    id
                    projectsResourcePath
                    projectsUrl
                    viewerCanCreateProjects
                    ... on Organization {
                      id
                      email
                    }
                    ... on User {
                      id
                      email
                    }
                    ... on Repository {
                      id
                      name
                    }
                  }
                  number
                }
                projectsResourcePath
                projectsUrl
                resourcePath
                twitterUsername
                updatedAt
                url
                viewerCanChangePinnedItems
                viewerCanCreateProjects
                viewerCanFollow
                viewerCanSponsor
                viewerIsFollowing
                viewerIsSponsoring
                websiteUrl
              }
            }
            projectsResourcePath
            projectsUrl
            pushedAt
            rebaseMergeAllowed
            resourcePath
            securityPolicyUrl
            shortDescriptionHTML
            squashMergeAllowed
            sshUrl
            stargazerCount
            tempCloneToken
            updatedAt
            url
            viewerCanAdminister
            usesCustomOpenGraphImage
            viewerCanCreateProjects
            viewerCanSubscribe
            viewerCanUpdateTopics
            viewerDefaultCommitEmail
            viewerDefaultMergeMethod
            viewerHasStarred
            viewerPermission
            viewerPossibleCommitEmails
            viewerSubscription
          }
          state
          title
          updatedAt
          url
        }
        number
        publishedAt
        resourcePath
        state
        title
        updatedAt
        url
        viewerCanReact
        viewerCanSubscribe
        viewerCanUpdate
        viewerCannotUpdateReasons
        viewerDidAuthor
        viewerSubscription
      }
      ... on PullRequest {
        id
      }
      ... on Repository {
        id
        name
        createdAt
        databaseId
        deleteBranchOnMerge
        assignableUsers {
          totalCount
        }
        branchProtectionRules {
          totalCount
        }
        codeOfConduct {
          url
          resourcePath
          name
          key
          id
          body
        }
        collaborators {
          totalCount
        }
        commitComments {
          totalCount
        }
        contactLinks {
          url
          name
          about
        }
        defaultBranchRef {
          repository {
            createdAt
            databaseId
            deleteBranchOnMerge
            assignableUsers {
              totalCount
            }
            branchProtectionRules {
              totalCount
            }
            codeOfConduct {
              body
              id
              key
              name
              resourcePath
              url
            }
            collaborators {
              totalCount
            }
            commitComments {
              totalCount
            }
            contactLinks {
              url
              name
              about
            }
            defaultBranchRef {
              id
              name
              prefix
              target {
                abbreviatedOid
                commitResourcePath
                commitUrl
                id
                oid
                ... on Commit {
                  id
                  abbreviatedOid
                  additions
                  authoredByCommitter
                  authoredDate
                  changedFiles
                  commitResourcePath
                  commitUrl
                  committedDate
                  committedViaWeb
                  deletions
                  deployments {
                    totalCount
                  }
                  file(path: $filepath) {
                    type
                    path
                    oid
                    object {
                      abbreviatedOid
                      commitResourcePath
                      commitUrl
                      id
                      oid
                      ... on Tag {
                        id
                        name
                      }
                      ... on Blob {
                        id
                      }
                      ... on Tree {
                        id
                      }
                      ... on Commit {
                        id
                      }
                    }
                    name
                    mode
                    isGenerated
                    extension
                  }
                  message
                  messageBody
                  messageBodyHTML
                  messageHeadlineHTML
                  messageHeadline
                  oid
                  onBehalfOf {
                    anyPinnableItems
                    auditLog {
                      totalCount
                    }
                    avatarUrl
                    createdAt
                    databaseId
                    description
                    descriptionHTML
                    domains {
                      totalCount
                    }
                    email
                    hasSponsorsListing
                    id
                    ipAllowListEnabledSetting
                    isSponsoringViewer
                    isVerified
                    location
                    login
                    newTeamResourcePath
                    name
                    newTeamUrl
                    notificationDeliveryRestrictionEnabledSetting
                    organizationBillingEmail
                    packages {
                      totalCount
                    }
                    pendingMembers {
                      totalCount
                    }
                    pinnableItems {
                      totalCount
                    }
                    pinnedItems {
                      totalCount
                    }
                    pinnedItemsRemaining
                    projects {
                      totalCount
                    }
                    projectsResourcePath
                    projectsUrl
                    repositories {
                      totalDiskUsage
                      totalCount
                    }
                    project(number: $productnumber) {
                      body
                      closed
                      closedAt
                      createdAt
                      creator {
                        avatarUrl
                        login
                        resourcePath
                        url
                        ... on EnterpriseUserAccount {
                          id
                          name
                        }
                        ... on Organization {
                          id
                          email
                          anyPinnableItems
                          avatarUrl
                          createdAt
                          databaseId
                          description
                          descriptionHTML
                          hasSponsorsListing
                          ipAllowListEnabledSetting
                          isSponsoringViewer
                          isVerified
                          location
                          login
                          name
                          newTeamResourcePath
                          newTeamUrl
                          notificationDeliveryRestrictionEnabledSetting
                          organizationBillingEmail
                          pinnedItemsRemaining
                          projectsResourcePath
                          projectsUrl
                          requiresTwoFactorAuthentication
                          resourcePath
                          teamsResourcePath
                          teamsUrl
                          twitterUsername
                          updatedAt
                          url
                          viewerCanAdminister
                          viewerCanChangePinnedItems
                          viewerCanCreateProjects
                          viewerCanCreateRepositories
                          viewerCanCreateTeams
                          viewerCanSponsor
                          viewerIsAMember
                          viewerIsSponsoring
                          websiteUrl
                        }
                        ... on User {
                          id
                          email
                        }
                        ... on Mannequin {
                          id
                          email
                          avatarUrl
                          createdAt
                          databaseId
                          login
                          resourcePath
                          updatedAt
                          url
                        }
                        ... on Bot {
                          id
                          url
                          updatedAt
                          resourcePath
                          login
                          databaseId
                          createdAt
                          avatarUrl
                        }
                      }
                      databaseId
                      id
                      name
                      number
                      owner
                      viewerCanUpdate
                      url
                      updatedAt
                      state
                      resourcePath
                    }
                    requiresTwoFactorAuthentication
                    resourcePath
                    samlIdentityProvider {
                      id
                      digestMethod
                      idpCertificate
                      issuer
                      signatureMethod
                      ssoUrl
                      organization {
                        email
                        anyPinnableItems
                        avatarUrl
                        createdAt
                        databaseId
                        description
                        location
                        isSponsoringViewer
                        isVerified
                        login
                        name
                        newTeamUrl
                        newTeamResourcePath
                        notificationDeliveryRestrictionEnabledSetting
                        organizationBillingEmail
                        pinnedItemsRemaining
                        projectsResourcePath
                        projectsUrl
                        requiresTwoFactorAuthentication
                        resourcePath
                        teamsResourcePath
                        teamsUrl
                        twitterUsername
                        updatedAt
                        url
                        viewerCanAdminister
                        viewerCanChangePinnedItems
                        viewerCanCreateProjects
                        viewerCanCreateRepositories
                        viewerCanCreateTeams
                        viewerCanSponsor
                        viewerIsAMember
                        viewerIsSponsoring
                        websiteUrl
                      }
                    }
                    teamsResourcePath
                    teamsUrl
                    twitterUsername
                    url
                    updatedAt
                    viewerCanAdminister
                    viewerCanChangePinnedItems
                    viewerCanCreateProjects
                    viewerCanCreateRepositories
                    viewerCanCreateTeams
                    websiteUrl
                    viewerIsSponsoring
                    viewerIsAMember
                    viewerCanSponsor
                  }
                  pushedDate
                  resourcePath
                  signature {
                    email
                    isValid
                    payload
                    signature
                    state
                    wasSignedByGitHub
                    ... on GpgSignature {
                      keyId
                      signature
                      payload
                      isValid
                      email
                      wasSignedByGitHub
                      state
                    }
                    ... on SmimeSignature {
                      __typename
                      wasSignedByGitHub
                      state
                      signature
                      payload
                      isValid
                      email
                    }
                    ... on UnknownSignature {
                      __typename
                      wasSignedByGitHub
                      state
                      signature
                      payload
                      isValid
                      email
                    }
                  }
                  status {
                    state
                    id
                    combinedContexts {
                      totalCount
                    }
                    context(name: "") {
                      targetUrl
                      state
                      id
                      description
                      creator {
                        ... on Bot {
                          id
                        }
                        ... on Mannequin {
                          id
                          email
                        }
                        ... on User {
                          id
                          email
                        }
                        ... on Organization {
                          id
                          email
                        }
                        ... on EnterpriseUserAccount {
                          id
                          name
                        }
                        url
                        resourcePath
                        login
                        avatarUrl
                      }
                      context
                      createdAt
                      avatarUrl
                    }
                  }
                  tarballUrl
                  treeResourcePath
                  treeUrl
                  url
                  viewerCanSubscribe
                  viewerSubscription
                  zipballUrl
                }
                ... on Tag {
                  id
                  name
                }
                ... on Blob {
                  id
                }
                ... on Tree {
                  id
                }
              }
            }
            description
            descriptionHTML
            diskUsage
            forkCount
            hasIssuesEnabled
            hasProjectsEnabled
            hasWikiEnabled
            homepageUrl
            id
            isArchived
            isBlankIssuesEnabled
            isDisabled
            isEmpty
            isFork
            isInOrganization
            isLocked
            isMirror
            isPrivate
            isSecurityPolicyEnabled
            isTemplate
            isUserConfigurationRepository
            issueOrPullRequest(number: 10) {
              ... on PullRequest {
                id
                activeLockReason
                additions
                author {
                  ... on Bot {
                    id
                  }
                  ... on Mannequin {
                    id
                    email
                  }
                  ... on User {
                    id
                    email
                  }
                  ... on Organization {
                    id
                    email
                    descriptionHTML
                    description
                    databaseId
                    createdAt
                    auditLog
                    anyPinnableItems
                  }
                  ... on EnterpriseUserAccount {
                    id
                    name
                    createdAt
                    avatarUrl
                    url
                    updatedAt
                    resourcePath
                  }
                  url
                  resourcePath
                  login
                  avatarUrl
                }
                body
                checksUrl
                closed
                closedAt
                createdAt
                createdViaEmail
                databaseId
                deletions
                headRefName
                headRefOid
                headRepositoryOwner {
                  avatarUrl
                  id
                  login
                  resourcePath
                  url
                  ... on Organization {
                    id
                    email
                  }
                  repositories {
                    totalDiskUsage
                    totalCount
                  }
                }
                includesCreatedEdit
                isCrossRepository
                isDraft
                isReadByViewer
                lastEditedAt
                locked
                maintainerCanModify
                mergeable
                merged
                mergedAt
                mergedBy {
                  ... on Bot {
                    id
                  }
                  ... on Mannequin {
                    id
                    email
                  }
                  ... on User {
                    id
                    email
                  }
                  ... on Organization {
                    id
                    email
                  }
                  ... on EnterpriseUserAccount {
                    id
                    name
                  }
                  url
                  resourcePath
                  login
                  avatarUrl
                }
                number
                permalink
                publishedAt
                resourcePath
                revertResourcePath
                revertUrl
                reviewDecision
                state
                title
                updatedAt
                url
                viewerCanApplySuggestion
                viewerCanDeleteHeadRef
                viewerCanDisableAutoMerge
                viewerSubscription
                viewerMergeHeadlineText
                viewerMergeBodyText
                viewerDidAuthor
                viewerCannotUpdateReasons
                viewerCanUpdate
                viewerCanSubscribe
                viewerCanReact
                viewerCanEnableAutoMerge
              }
              ... on Issue {
                id
                activeLockReason
                author {
                  avatarUrl
                  login
                  resourcePath
                  url
                  ... on EnterpriseUserAccount {
                    id
                    name
                  }
                  ... on Bot {
                    id
                  }
                  ... on Mannequin {
                    id
                    email
                  }
                  ... on User {
                    id
                    email
                  }
                  ... on Organization {
                    id
                    email
                  }
                }
                closedAt
                closed
                bodyUrl
                bodyText
                bodyResourcePath
                bodyHTML
                body
                authorAssociation
                editor
                databaseId
                createdViaEmail
                createdAt
                isPinned
                includesCreatedEdit
                isReadByViewer
                lastEditedAt
                locked
                number
                publishedAt
                resourcePath
                state
                title
                updatedAt
                url
                viewerCanReact
                viewerCanSubscribe
                viewerCanUpdate
                viewerCannotUpdateReasons
                viewerDidAuthor
                viewerSubscription
              }
            }
            issueTemplates {
              title
              name
              body
              about
            }
            issues {
              totalCount
            }
            labels {
              totalCount
            }
            languages {
              totalSize
              totalCount
            }
            latestRelease {
              url
              updatedAt
              tagName
              shortDescriptionHTML
              resourcePath
              publishedAt
              name
              isPrerelease
              isLatest
              isDraft
              id
              descriptionHTML
              description
              createdAt
            }
            lockReason
            mergeCommitAllowed
            mirrorUrl
            name
            nameWithOwner
            object {
              ... on Tag {
                id
                name
              }
              ... on Blob {
                id
              }
              ... on Tree {
                id
              }
              ... on Commit {
                id
              }
            }
            owner
            openGraphImageUrl
            packages {
              totalCount
            }
            parent {
              homepageUrl
              forkCount
              diskUsage
              deleteBranchOnMerge
              databaseId
              createdAt
              hasIssuesEnabled
              hasProjectsEnabled
              hasWikiEnabled
              id
              isArchived
              isUserConfigurationRepository
              isSecurityPolicyEnabled
              isPrivate
              isTemplate
              isMirror
              isLocked
              isInOrganization
              isFork
              isEmpty
              isDisabled
              isBlankIssuesEnabled
              lockReason
              mergeCommitAllowed
              mirrorUrl
              name
              nameWithOwner
              object
              owner
              projectsResourcePath
              projectsUrl
              pushedAt
              rebaseMergeAllowed
              resourcePath
              securityPolicyUrl
              shortDescriptionHTML
              squashMergeAllowed
              sshUrl
              stargazerCount
              tempCloneToken
              updatedAt
              url
              usesCustomOpenGraphImage
              viewerCanAdminister
              viewerCanCreateProjects
              viewerCanSubscribe
              viewerDefaultCommitEmail
              viewerCanUpdateTopics
              viewerDefaultMergeMethod
              viewerHasStarred
              viewerPermission
              viewerPossibleCommitEmails
              viewerSubscription
            }
            projectsResourcePath
            projectsUrl
            pushedAt
            rebaseMergeAllowed
            resourcePath
            securityPolicyUrl
            shortDescriptionHTML
            squashMergeAllowed
            sshUrl
            stargazerCount
            tempCloneToken
            updatedAt
            url
            usesCustomOpenGraphImage
            viewerCanAdminister
            viewerCanCreateProjects
            viewerCanSubscribe
            viewerCanUpdateTopics
            viewerDefaultCommitEmail
            viewerDefaultMergeMethod
            viewerHasStarred
            viewerPermission
            viewerPossibleCommitEmails
            viewerSubscription
          }
          id
          name
          prefix
          refUpdateRule {
            allowsDeletions
            allowsForcePushes
            pattern
            requiredApprovingReviewCount
            requiredStatusCheckContexts
            requiresLinearHistory
            requiresSignatures
            viewerCanPush
          }
          target {
            abbreviatedOid
            commitResourcePath
            commitUrl
            id
            oid
            ... on Tag {
              id
              name
            }
            ... on Blob {
              id
            }
            ... on Tree {
              id
            }
            ... on Commit {
              id
            }
          }
        }
        forkCount
        diskUsage
        descriptionHTML
        description
        homepageUrl
        hasWikiEnabled
        hasProjectsEnabled
        hasIssuesEnabled
        isArchived
        isBlankIssuesEnabled
        isDisabled
        isEmpty
        isFork
        isInOrganization
        isLocked
        isMirror
        isPrivate
        isSecurityPolicyEnabled
        isTemplate
        isUserConfigurationRepository
        issueTemplates {
          title
          name
          body
          about
        }
        issues {
          totalCount
        }
        labels {
          totalCount
        }
        languages {
          totalSize
          totalCount
        }
        latestRelease {
          url
          updatedAt
          tagName
        }
        lockReason
        mergeCommitAllowed
        mirrorUrl
        owner {
          ... on User {
            id
            email
            createdAt
            databaseId
            company
            companyHTML
            bioHTML
            avatarUrl
            anyPinnableItems
            isViewer
            isSponsoringViewer
            isSiteAdmin
            isHireable
            isGitHubStar
            isEmployee
            isDeveloperProgramMember
            isCampusExpert
            isBountyHunter
            name
            login
            location
            organizations {
              totalCount
            }
            pinnedItemsRemaining
            projectsResourcePath
            projectsUrl
            resourcePath
            twitterUsername
            updatedAt
            url
            viewerCanChangePinnedItems
            viewerCanCreateProjects
            viewerCanFollow
            viewerCanSponsor
            viewerIsFollowing
            viewerIsSponsoring
            websiteUrl
          }
          ... on Organization {
            id
            email
            anyPinnableItems
            avatarUrl
            createdAt
            organizationBillingEmail
            notificationDeliveryRestrictionEnabledSetting
            newTeamResourcePath
            newTeamUrl
            name
            login
            location
            isVerified
            isSponsoringViewer
            ipAllowListEnabledSetting
            hasSponsorsListing
            pinnedItemsRemaining
            projects {
              totalCount
            }
            projectsResourcePath
            projectsUrl
            repositories {
              totalDiskUsage
              totalCount
            }
            resourcePath
            requiresTwoFactorAuthentication
            websiteUrl
            viewerIsSponsoring
            viewerIsAMember
            viewerCanSponsor
            viewerCanCreateTeams
            viewerCanCreateRepositories
            viewerCanCreateProjects
            viewerCanChangePinnedItems
            viewerCanAdminister
            url
            updatedAt
            twitterUsername
            teamsUrl
            teamsResourcePath
          }
          url
          login
          id
          avatarUrl
          resourcePath
        }
        openGraphImageUrl
        object
        nameWithOwner
        projectsResourcePath
        projectsUrl
        pushedAt
        packages {
          totalCount
        }
        pinnedIssues {
          totalCount
        }
        primaryLanguage {
          name
          id
          color
        }
        projects {
          totalCount
        }
        rebaseMergeAllowed
        
        release(tagName: $releaseTagName) {
          publishedAt
          name
          isPrerelease
          isLatest
          isDraft
          id
          description
          createdAt
          url
          updatedAt
          tagName
          resourcePath
        }
        stargazerCount
        sshUrl
        squashMergeAllowed
        securityPolicyUrl
        resourcePath
        tempCloneToken
        updatedAt
        url
        usesCustomOpenGraphImage
        viewerCanAdminister
        viewerCanCreateProjects
        viewerCanSubscribe
        viewerCanUpdateTopics
        viewerDefaultCommitEmail
        viewerDefaultMergeMethod
        viewerHasStarred
        viewerPermission
        viewerPossibleCommitEmails
        viewerSubscription
        vulnerabilityAlerts {
          totalCount
        }
        watchers {
          totalCount
        }
      }
      ... on TeamDiscussion {
        id
        author {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
        body
        authorAssociation
        createdAt
        commentsUrl
        commentsResourcePath
        createdViaEmail
        databaseId
        editor {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
        publishedAt
        number
        lastEditedAt
        isPrivate
        isPinned
        includesCreatedEdit
        resourcePath
        url
        updatedAt
        title
        viewerSubscription
        viewerDidAuthor
        viewerCannotUpdateReasons
        viewerCanUpdate
        viewerCanSubscribe
        viewerCanReact
        viewerCanPin
        viewerCanDelete
      }
      ... on TeamDiscussionComment {
        id
        author {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          avatarUrl
          login
        }
        authorAssociation
        body
        bodyVersion
        createdAt
        createdViaEmail
        databaseId
        editor {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
        includesCreatedEdit
        lastEditedAt
        number
        publishedAt
        resourcePath
        updatedAt
        url
        viewerCanDelete
        viewerCanReact
        viewerCanUpdate
        viewerCannotUpdateReasons
        viewerDidAuthor
      }
      ... on Commit {
        id
        zipballUrl
        viewerSubscription
        viewerCanSubscribe
        url
        treeUrl
        treeResourcePath
        tarballUrl
        signature {
          ... on UnknownSignature {
            __typename
            wasSignedByGitHub
            state
            signature
            payload
            isValid
            email
          }
          ... on SmimeSignature {
            __typename
            wasSignedByGitHub
            state
            signature
            payload
            isValid
            email
          }
          ... on GpgSignature {
            keyId
            wasSignedByGitHub
            state
            signature
            payload
            isValid
            email
          }
          wasSignedByGitHub
          state
          signer {
            avatarUrl
            bio
            company
            email
            databaseId
            createdAt
            id
            hasSponsorsListing
            isViewer
            isSponsoringViewer
            isSiteAdmin
            isHireable
            isGitHubStar
            isEmployee
            isDeveloperProgramMember
            isCampusExpert
            isBountyHunter
            name
            login
            location
            pinnedItemsRemaining
            projectsResourcePath
            projectsUrl
            resourcePath
            twitterUsername
            updatedAt
            url
            viewerCanChangePinnedItems
            viewerCanCreateProjects
            viewerCanFollow
            viewerCanSponsor
            viewerIsFollowing
            viewerIsSponsoring
            websiteUrl
          }
          signature
          payload
          isValid
          email
        }
        resourcePath
        abbreviatedOid
        additions
        authoredByCommitter
        authoredDate
        changedFiles
        commitResourcePath
        commitUrl
        committedDate
        committedViaWeb
        deletions
        oid
        messageHeadlineHTML
        messageHeadline
        messageBodyHTML
        messageBody
        message
      }
      ... on CheckRun {
        id
        name
        url
        title
        text
        summary
        status
        startedAt
        resourcePath
        permalink
        externalId
        detailsUrl
        databaseId
        conclusion
        completedAt
      }
      ... on Milestone {
        id
        url
        updatedAt
        title
        state
        resourcePath
        pullRequests {
          totalCount
        }
        progressPercentage
        number
        dueOn
        description
        creator {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
        createdAt
        closedAt
        closed
      }
      ... on RepositoryTopic {
        id
        url
        resourcePath
        topic {
          viewerHasStarred
          stargazerCount
          name
          id
          stargazers {
            totalCount
          }
        }
      }
      ... on PullRequestCommit {
        id
        url
        resourcePath
      }
      ... on Mannequin {
        id
        email
        url
        updatedAt
        resourcePath
        login
        databaseId
        createdAt
        avatarUrl
      }
      ... on Bot {
        id
        url
        updatedAt
        resourcePath
        login
        databaseId
        createdAt
        avatarUrl
      }
      ... on ClosedEvent {
        id
        url
        resourcePath
        createdAt
        closer
        closable {
          ... on Milestone {
            id
          }
          ... on PullRequest {
            id
          }
          ... on Issue {
            id
          }
          ... on Project {
            id
            name
          }
          closedAt
          closed
        }
        actor {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
      }
      ... on CrossReferencedEvent {
        id
        willCloseTarget
        url
        target
        source
        resourcePath
        referencedAt
        isCrossRepository
        createdAt
        actor {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
            websiteUrl
            url
            twitterUsername
            teamsUrl
            teamsResourcePath
            resourcePath
            requiresTwoFactorAuthentication
            projectsUrl
            projectsResourcePath
            pinnedItemsRemaining
            organizationBillingEmail
          }
        }
      }
      ... on MergedEvent {
        id
        url
        resourcePath
        mergeRefName
        createdAt
      }
      ... on ReviewDismissedEvent {
        id
        url
        resourcePath
        previousReviewState
        dismissalMessageHTML
        dismissalMessage
        databaseId
        createdAt
        actor {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
      }
      ... on ConvertToDraftEvent {
        id
        url
        resourcePath
        createdAt
        actor {
          ... on Bot {
            id
          }
          ... on Mannequin {
            id
            email
          }
          ... on User {
            id
            email
          }
          ... on Organization {
            id
            email
          }
          ... on EnterpriseUserAccount {
            id
            name
          }
          url
          resourcePath
          login
          avatarUrl
        }
      }
      ... on ReadyForReviewEvent {
        id
        url
        resourcePath
        pullRequest {
          activeLockReason
          additions
          body
          checksUrl
          closed
          closedAt
          merged
          mergedAt
          mergedBy {
            avatarUrl
            login
            resourcePath
            url
          }
          permalink
          number
          publishedAt
          resourcePath
          revertResourcePath
          revertUrl
          reviewDecision
          state
          title
          updatedAt
          url
          viewerSubscription
          viewerMergeHeadlineText
          viewerMergeBodyText
          viewerDidAuthor
          viewerCannotUpdateReasons
          viewerCanUpdate
          viewerCanSubscribe
          viewerCanReact
          viewerCanEnableAutoMerge
          viewerCanDisableAutoMerge
          viewerCanDeleteHeadRef
          viewerCanApplySuggestion
        }
      }
      ... on Gist {
        id
        name
        viewerHasStarred
        url
        updatedAt
        stargazers {
          totalCount
        }
        stargazerCount
        pushedAt
        resourcePath
        owner {
          ... on User {
            id
            email
            websiteUrl
            url
            projectsUrl
            projects {
              totalCount
            }
            pinnedItemsRemaining
            name
            login
            location
            isViewer
            isSponsoringViewer
            isSiteAdmin
          }
          ... on Organization {
            id
            email
            websiteUrl
          }
          url
          resourcePath
          repositories {
            totalDiskUsage
            totalCount
          }
          login
          id
          avatarUrl
        }
        isPublic
        isFork
        description
        createdAt
      }
    }
  }
`