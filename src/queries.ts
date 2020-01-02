/**
 * @description Github Graphql Query for viewer details
 * @type string
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
 * @type string
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
 * @type string
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
 * @type string
 */
export const Branches = `
  query($repositoryOwner: String!, $repositoryName: String!){
    repository(owner: $repositoryOwner, name: $repositoryName){
      refs(refPrefix: "refs/heads/", first: 10){
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
 * @type string
 */
export const BranchContent = `
    query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
        repository(owner: $repositoryOwner, name: $repositoryName){
            ref(qualifiedName: $qualifiedName){
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
 * @type string
 */
export const BranchDirectories = `
    query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
      repository(owner: $repositoryOwner, name: $repositoryName){
          ref(qualifiedName: $qualifiedName){
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
 * @type string
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
 * @type string
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
 * @description Github Graphql Query for branch information
 * @type string
 */
export const Branch = `
  query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
    repository(owner: $repositoryOwner, name: $repositoryName){
      ref(qualifiedName: $qualifiedName){
        id
        name
        prefix
      }
    }
  }
`;
