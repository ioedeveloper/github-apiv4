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
