# Github-APIv4

<!-- [START badges] --> "
[![npm version](https://badge.fury.io/js/github-apiv4.svg)](https://badge.fury.io/js/github-apiv4)


<!-- [END badges] -->

###### [API](https://github-apiv4.netlify.com/) | [Contribute](#contribute) | [FAQ](#faq)

> Github-APIv4 is a Node library that provides a list of Github graphql (APIv4) queries and their respective return types.

<!-- [START getstarted] -->

## Getting Started

### Installation

To use Github-APIv4, run:

```bash
npm i github-apiv4
# or "yarn add github-apiv4"
```

### Usage

**Javascript Example - query Viewer:**

Save file as **exampleJS.js**

```js
const githubApiv4 = require("github-apiv4");
const fetch = require("isomorphic-fetch");
const accessCode = "YOUR_GITHUB_ACCESS_CODE";

//Make the quest here

fetch("https://api.github.com/graphql", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		Authorization: `bearer ${accessCode}`,
	},
	body: JSON.stringify({ query: githubApiv4.queries.Viewer }),
})
	.then((res) => res.json())
	.then((res) => console.log(res.data));
```

Github API response (res.data is) of type [githubApiv4.types.Viewer](https://github-apiv4.netlify.com/interfaces/_types_.viewer.html)

Execute script on the command line

```bash
node exampleJS.js
```

**Typescript Example - query Viewer:**

Save file as **exampleJS.js**

```js
const { githubApiv4 } = "github-apiv4",
	{ fetch } = require("isomorphic-fetch");

const accessCode = "YOUR_GITHUB_ACCESS_CODE";
const query = queries.Viewer(`bio ${queries.Following({ first: 10, fields: "login" })}`);

//Make the request here using your HTTP client of choice
fetch("https://api.github.com/graphql", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		Authorization: `bearer ${accessCode}`,
	},
	body: JSON.stringify({ query: query }),
})
	.then((res) =>
		res.json().then((res) => {
			//Check if the response has a data
			if (res.data) {
        //The return type is a typeof Viewer
				const response = res.data;

				console.log(response.viewer.bio);
				console.log(response.viewer.following);
			} else {
				//Show the error

				console.log("An error occurred", res);
				console.log(query);
			}
		})
	)
	.catch((err) => console.log(err));
```

**Typescript Example - query Viewer:**

Save file as **exampleTS.ts**

```ts
import * as githubApiv4 from "github-apiv4";
import * as fetch from "isomorphic-fetch";

const accessCode = "YOUR_GITHUB_ACCESS_CODE";
const query = queries.Viewer(`bio ${queries.Following({ first: 10, fields: "login" })}`);

//Make the request here using your HTTP client of choice
fetch("https://api.github.com/graphql", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		Authorization: `bearer ${accessCode}`,
	},
	body: JSON.stringify({ query: query }),
})
	.then((res) =>
		res.json().then((res) => {
			//Check if the response has a data
			if (res.data) {
				//The return type is a typeof Viewer
				const response: types.Viewer = res.data;

				console.log(response.viewer.bio);
				console.log(response.viewer.following);
			} else {
				//Show the error

				console.log("An error occurred", res);
				console.log(query);
			}
		})
	)
	.catch((err) => console.log(err));
```

**JavaScript Example - query Repository:**

Save file as **repositoryJS.js**

```js
const { githubApiv4 } = require("github-apiv4"),
	{ fetch } = require("isomorphic-fetch");

const accessCode = "YOUR_GITHUB_ACCESS_CODE";

//Assign Quaries to variables to help you not repeat yours
const user = queries.User("bio");
const commitCommentField = `
  body ${queries.Author("login")}
  ${queries.ReactionGroups("createdAt")}  
  ${queries.Reactions({ first: 10, fields: `${queries.Reactable("id")}` })} 
  ${queries.UserContentEdits({ first: 10, fields: "createdAt" })} 
`;

//This creates the fields that will be used for the request
//Create as many Queries as you want and you can chain them
const fields = `
  ${queries.AssignableUsers({ first: 10, fields: "bio name" })} 
  ${queries.BranchProtectionRules({ first: 10, fields: "allowsDeletions" })} 
  ${queries.CodeOfConduct("id url body")}
  ${queries.Collaborators({ first: 10, fields: "name url login", affiliation: "OUTSIDE" })}
  ${queries.CommitComments({ first: 10, fields: commitCommentField })}
  contactLinks {name}
  defaultBranchRef{id name}
  ${queries.DeployKeys({ first: 10, fields: "id title " })}
  ${queries.Deployments({ first: 10, fields: "environment description" })}
  ${queries.Forks({ first: 10, fields: "description createdAt id" })}
  ${queries.Issue("22", "id body createdAt")}
  ${queries.Label("severe: new feature", "description")}
  ${queries.Labels({ first: 10, fields: "description" })}
  ${queries.Languages({ first: 10, fields: "color name" })}
  ${queries.LatestRelease("description")}
  ${queries.LicenseInfo("body")}
  ${queries.MentionableUsers({ first: 10, fields: "login" })} 
  ${queries.Milestones({ first: 10, fields: "description" })}
  ${queries.Milestone(3, "description")} 
  ${queries.Packages({ first: 10, fields: "name" })}
  ${queries.PinnedIssues({ first: 10, fields: "databaseId" })}
  ${queries.Projects({ first: 10, fields: "number body" })}
  ${queries.Project(14, "body number")} 
  ${queries.Refs({ refPrefix: "refs/", first: 10, fields: "prefix name" })}
  ${queries.Ref("refs/heads/dwds-integration", "name ")}
  ${queries.Releases({ first: 10, fields: "name" })}
  ${queries.Release("v0.4.0", "name description")}
  ${queries.RepositoryTopics({ first: 10, fields: `${queries.Topic(`name ${queries.RelatedTopics(10, "name")}`)}` })}
  ${queries.Stargazers({ first: 10, fields: "login" })}
  ${queries.Submodules({ first: 10, fields: "name" })}
  ${queries.VulnerabilityAlerts({ first: 10, fields: "createdAt" })}
  ${queries.Watchers({ first: 10, fields: "login" })}  
`;

//This passes the fields to the RepositoryQuery Query
const query = queries.RepositoryQuery("fundhillapi", "Sectur1", fields);

//Make the request here using your HTTP client of choice
fetch("https://api.github.com/graphql", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		Authorization: `bearer ${accessCode}`,
	},
	body: JSON.stringify({ query: query }),
})
	.then((res) =>
		res.json().then((res) => {
			//Check if the response has a data
			if (res.data) {
        //The return type is a typeof Repository
				const response = res.data;

				console.log(response.repository.assignableUsers.nodes[4].name);
				console.log(response.repository.branchProtectionRules);
				console.log(response.repository.codeOfConduct.body);
				console.log(response.repository.collaborators.nodes[0].login);
				console.log(response.repository.commitComments.nodes[9].author);
				console.log(response.repository.commitComments.nodes[9].reactionGroups);
				console.log(response.repository.commitComments.nodes[9].reactions.nodes);
				console.log(response.repository.commitComments.nodes[9].userContentEdits.nodes);
				console.log(response.repository.contactLinks[0]);
				console.log(response.repository.defaultBranchRef);
				console.log(response.repository.deployments.nodes[0].description);
				console.log(response.repository.forks.nodes);
				console.log(response.repository.issue.body);
				console.log(response.repository.label);
				console.log(response.repository.labels);
				console.log(response.repository.languages.nodes[5].name);
				console.log(response.repository.latestRelease);
				console.log(response.repository.licenseInfo);
				console.log(response.repository.mentionableUsers);
				console.log(response.repository.milestones.nodes[4].description);
				console.log(response.repository.milestone.description);
				console.log(response.repository.packages);
				console.log(response.repository.projects.nodes);
				console.log(response.repository.project);
				console.log(response.repository.refs.nodes[5]);
				console.log(response.repository.ref);
				console.log(response.repository.releases.nodes);
				console.log(response.repository.release);
				console.log(response.repository.repositoryTopics.nodes[2].topic.relatedTopics[5].name);
				console.log(response.repository.stargazers);
				console.log(response.repository.submodules.nodes);
				console.log(response.repository.vulnerabilityAlerts);
			} else {
				//There can be more that one error in a Query so you can loop through them
				for (let error of res.errors) {
					console.log(error.message, error.locations);
				}

				console.log("An error occurred", res);
			}
		})
	)
	.catch((err) => console.log(err));
```

**Typescript Example - query Repository:**

Save file as **repositoryTS.ts**

```ts
import * as githubApiv4 from "github-apiv4";
import * as fetch from "isomorphic-fetch";

const accessCode = "YOUR_GITHUB_ACCESS_CODE";

//Assign Quaries to variables to help you not repeat yours
const user = queries.User("bio");
const commitCommentField = `
  body ${queries.Author("login")}
  ${queries.ReactionGroups("createdAt")}  
  ${queries.Reactions({ first: 10, fields: `${queries.Reactable("id")}` })} 
  ${queries.UserContentEdits({ first: 10, fields: "createdAt" })} 
`;

//This creates the fields that will be used for the request
//Create as many Queries as you want and you can chain them
const fields = `
  ${queries.AssignableUsers({ first: 10, fields: "bio name" })} 
  ${queries.BranchProtectionRules({ first: 10, fields: "allowsDeletions" })} 
  ${queries.CodeOfConduct("id url body")}
  ${queries.Collaborators({ first: 10, fields: "name url login", affiliation: "OUTSIDE" })}
  ${queries.CommitComments({ first: 10, fields: commitCommentField })}
  contactLinks {name}
  defaultBranchRef{id name}
  ${queries.DeployKeys({ first: 10, fields: "id title " })}
  ${queries.Deployments({ first: 10, fields: "environment description" })}
  ${queries.Forks({ first: 10, fields: "description createdAt id" })}
  ${queries.Issue("22", "id body createdAt")}
  ${queries.Label("severe: new feature", "description")}
  ${queries.Labels({ first: 10, fields: "description" })}
  ${queries.Languages({ first: 10, fields: "color name" })}
  ${queries.LatestRelease("description")}
  ${queries.LicenseInfo("body")}
  ${queries.MentionableUsers({ first: 10, fields: "login" })} 
  ${queries.Milestones({ first: 10, fields: "description" })}
  ${queries.Milestone(3, "description")} 
  ${queries.Packages({ first: 10, fields: "name" })}
  ${queries.PinnedIssues({ first: 10, fields: "databaseId" })}
  ${queries.Projects({ first: 10, fields: "number body" })}
  ${queries.Project(14, "body number")} 
  ${queries.Refs({ refPrefix: "refs/", first: 10, fields: "prefix name" })}
  ${queries.Ref("refs/heads/dwds-integration", "name ")}
  ${queries.Releases({ first: 10, fields: "name" })}
  ${queries.Release("v0.4.0", "name description")}
  ${queries.RepositoryTopics({ first: 10, fields: `${queries.Topic(`name ${queries.RelatedTopics(10, "name")}`)}` })}
  ${queries.Stargazers({ first: 10, fields: "login" })}
  ${queries.Submodules({ first: 10, fields: "name" })}
  ${queries.VulnerabilityAlerts({ first: 10, fields: "createdAt" })}
  ${queries.Watchers({ first: 10, fields: "login" })}  
`;

//This passes the fields to the RepositoryQuery Query
const query = queries.RepositoryQuery("fundhillapi", "Sectur1", fields);

//Make the request here using your HTTP client of choice
fetch("https://api.github.com/graphql", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		Authorization: `bearer ${accessCode}`,
	},
	body: JSON.stringify({ query: query }),
})
	.then((res) =>
		res.json().then((res) => {
			//Check if the response has a data
			if (res.data) {
				//This creates a response variable with the typeof Repository
				const response: types.Repository = res.data;

				console.log(response.repository.assignableUsers.nodes[4].name);
				console.log(response.repository.branchProtectionRules);
				console.log(response.repository.codeOfConduct.body);
				console.log(response.repository.collaborators.nodes[0].login);
				console.log(response.repository.commitComments.nodes[9].author);
				console.log(response.repository.commitComments.nodes[9].reactionGroups);
				console.log(response.repository.commitComments.nodes[9].reactions.nodes);
				console.log(response.repository.commitComments.nodes[9].userContentEdits.nodes);
				console.log(response.repository.contactLinks[0]);
				console.log(response.repository.defaultBranchRef);
				console.log(response.repository.deployments.nodes[0].description);
				console.log(response.repository.forks.nodes);
				console.log(response.repository.issue.body);
				console.log(response.repository.label);
				console.log(response.repository.labels);
				console.log(response.repository.languages.nodes[5].name);
				console.log(response.repository.latestRelease);
				console.log(response.repository.licenseInfo);
				console.log(response.repository.mentionableUsers);
				console.log(response.repository.milestones.nodes[4].description);
				console.log(response.repository.milestone.description);
				console.log(response.repository.packages);
				console.log(response.repository.projects.nodes);
				console.log(response.repository.project);
				console.log(response.repository.refs.nodes[5]);
				console.log(response.repository.ref);
				console.log(response.repository.releases.nodes);
				console.log(response.repository.release);
				console.log(response.repository.repositoryTopics.nodes[2].topic.relatedTopics[5].name);
				console.log(response.repository.stargazers);
				console.log(response.repository.submodules.nodes);
				console.log(response.repository.vulnerabilityAlerts);
			} else {
				//There can be more that one error in a Query so you can loop through them
				for (let error of res.errors) {
					console.log(error.message, error.locations);
				}
				console.log("An error occurred", res);
			}
		})
	)
	.catch((err) => console.log(err));
```

**Typescript Example - creating a PullRequest:**

Save file as **createPullrequest.js**

```js
const { types } = require("github-apiv4"),
  fetch = require("isomorphic-fetch"),
  { mutation } = require("./mutations")

//This assigns the mutation to the mutation variable
const mutation = mutations.CreatePullRequest({baseRefName:"master", body:"Merge Mutation with Master", headRefName:"Awesome", title:"Mutations", repositoryId:"MDEwOlJlcG9zaXRvcnkzNzAzNDg4NDU=",},queries.PullRequest("title body id")),

//Make the request here using your HTTP client of choice
fetch('https://api.github.com/graphql', {
  method: 'POST', "headers": {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${accessCode}`,
    "Accept": "application/vnd.github.update-refs-preview+json " + "application/vnd.github.hawkgirl-preview+json " +
      "application/vnd.github.starfox-preview+json " + "application/vnd.github.merge-info-preview+json " +
      "application/vnd.github.corsair-preview+json " + "application/vnd.github.flash-preview+json " +
      "application/vnd.github.bane-preview+json " + "application/vnd.github.package-deletes-preview+json " +
      "application/vnd.github.slothette-preview+json " + "application/vnd.github.stone-crop-preview+json"
  },
  body: JSON.stringify({ query: mutation }),
}).then(res => res.json().then(res => {
  //Check if the response has a data
  if (res.data) {
    //The return type is a typeof PullRequest
    const response:types.CreatePullRequest = res.data; 

    if(res.errors) console.log(res.errors)

    console.log(data.createPullRequest.pullRequest)
  } else {
    //There can be more that one error in a Query so you can loop through them
    console.log("An error occurred", res)
  }
}))
  .catch(err => console.log(err));

```

**Typescript Example - creating a PullRequesr:**

Save file as **createPullrequest.ts**

```ts
import { types } from "github-apiv4"
import fetch from "isomorphic-fetch";
import { mutation } from "./mutations"

//This assigns the mutation
const mutation = mutations.CreatePullRequest({baseRefName:"master", body:"Merge Mutation with Master", headRefName:"Awesome", title:"Mutations", repositoryId:"MDEwOlJlcG9zaXRvcnkzNzAzNDg4NDU=",},queries.PullRequest("title body id")),

fetch('https://api.github.com/graphql', {
  method: 'POST', "headers": {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${accessCode}`,
    "Accept": "application/vnd.github.update-refs-preview+json " + "application/vnd.github.hawkgirl-preview+json " +
      "application/vnd.github.starfox-preview+json " + "application/vnd.github.merge-info-preview+json " +
      "application/vnd.github.corsair-preview+json " + "application/vnd.github.flash-preview+json " +
      "application/vnd.github.bane-preview+json " + "application/vnd.github.package-deletes-preview+json " +
      "application/vnd.github.slothette-preview+json " + "application/vnd.github.stone-crop-preview+json"
  },
  body: JSON.stringify({ query: mutation }),
}).then(res => res.json().then(res => {
  //Check if the response has a data

  if (res.data) {
    //There can be more that one error in a Query so you can loop through them
    if(res.errors)console.log(res.errors)

    //This creates a response variable with the typeof PullRequest
    const data: types.CreatePullRequest = res.data

    console.log(data.createPullRequest.pullRequest)
  } else {
    //There can be more that one error in a Query so you can loop through them
    console.log("An error occurred", res)
  }
}))
  .catch(err => console.log(err));

```

Save file as **createProject.js**

```js
const { types } = require("github-apiv4"),
 { fetch } = require("isomorphic-fetch"),
 { mutation } = ("./mutations")

//This creates the mutation
const mutation = mutations.mutations.CreateProject({name: "GitHubv4", ownerId:"MDQ6VXNlcjIyODE3NDky",body:"This is the test project for Githubv4", repositoryIds:[`"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU="`]}, queries.Project("body url")),

//Make the request here using your HTTP client of choice
fetch('https://api.github.com/graphql', {
  method: 'POST', "headers": {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${accessCode}`,
    "Accept": "application/vnd.github.update-refs-preview+json " + "application/vnd.github.hawkgirl-preview+json " +
      "application/vnd.github.starfox-preview+json " + "application/vnd.github.merge-info-preview+json " +
      "application/vnd.github.corsair-preview+json " + "application/vnd.github.flash-preview+json " +
      "application/vnd.github.bane-preview+json " + "application/vnd.github.package-deletes-preview+json " +
      "application/vnd.github.slothette-preview+json " + "application/vnd.github.stone-crop-preview+json"
  },
  body: JSON.stringify({ query: mutation }),
}).then(res => res.json().then(res => {
  //Check if the response has a data
  if (res.data) {
    //The return type is a typeof CreateProject
    const response = res.data;

    //There can be more that one error in a Query so you can loop through them
    if(res.errors)console.log(res.errors)

    console.log(data.CreateProject.project)
  } else {
    console.log("An error occurred", res)
  }
}))
  .catch(err => console.log(err));

```

**Typescript Example - creating a Project:**

Save file as **createProject.ts**

```ts
import { types } from "github-apiv4"
import fetch from "isomorphic-fetch";
import { mutation } from "./mutations"

//This creates the mutation
const mutation = mutations.mutations.CreateProject({name: "GitHubv4", ownerId:"MDQ6VXNlcjIyODE3NDky",body:"This is the test project for Githubv4", repositoryIds:[`"MDEwOlJlcG9zaXRvcnkzNjgxMzc4NjU="`]}, queries.Project("body url")),

//Make the request here using your HTTP client of choice
fetch('https://api.github.com/graphql', {
  method: 'POST', "headers": {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${accessCode}`,
    "Accept": "application/vnd.github.update-refs-preview+json " + "application/vnd.github.hawkgirl-preview+json " +
      "application/vnd.github.starfox-preview+json " + "application/vnd.github.merge-info-preview+json " +
      "application/vnd.github.corsair-preview+json " + "application/vnd.github.flash-preview+json " +
      "application/vnd.github.bane-preview+json " + "application/vnd.github.package-deletes-preview+json " +
      "application/vnd.github.slothette-preview+json " + "application/vnd.github.stone-crop-preview+json"
  },
  body: JSON.stringify({ query: mutation }),
}).then(res => res.json().then(res => {
  //Check if the response has a data
  if (res.data) {
    
    //There can be more that one error in a Query so you can loop through them
    if(res.errors)console.log(res.errors)

    //This creates a response variable with the typeof CreateProject
    const data: types.CreateProject = res.data
    
    console.log(data.CreateProject.project)
  } else {
    console.log("An error occurred", res)
  }
}))
  .catch(err => console.log(err));

```

Github API response (res.data is) of type [githubApiv4.types.Viewer](https://github-apiv4.netlify.com/interfaces/_types_.viewer.html)

Execute script on the command line

```bash
tsc exampleTS.ts
node exampleTS.js
```

**Apollo Client Example - query Repository:**

Save file as **apolloClient.ts**

```ts
import * as githubApiV4 from "github-apiv4";
import { HttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache, IntrospectionFragmentMatcher, NormalizedCacheObject } from "apollo-cache-inmemory";
import { fetch } from "cross-fetch";
import gql from "graphql-tag";

const accessCode = "YOUR_GITHUB_ACCESS_CODE";
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	link: new HttpLink({ uri: "https://api.github.com/graphql", fetch }),
	cache: new InMemoryCache({
		fragmentMatcher: new IntrospectionFragmentMatcher({
			introspectionQueryResultData: {
				__schema: {
					types: [],
				},
			},
		}),
	}),
});

// query variables used in repository query (githubApiV4.queryVariables.Repository)
const queryVariables: githubApiV4.queryVariables.Repository = {
	repositoryName: "github-apiv4",
	repositoryOwner: "community",
};

// query with apollo-client
client
	.query({
		query: gql`
			${githubApiV4.queries.Repository}
		`,
		variables: queryVariables,
		context: {
			headers: {
				Authorization: `bearer ${accessCode}`,
			},
		},
	})
	.then((res) => {
		if (res.data as githubApiV4.types.Repository) {
			console.log(res.data);
		} else {
			console.log("Type Mismatch!");
		}
	});
```

Github API response (res.data is) of type [githubApiv4.types.Repository](https://github-apiv4.netlify.com/interfaces/_types_.repository.html)

Execute script on the command line

```bash
tsc apolloClient.ts
node apolloClient.js
```

# Resources

-   [API Documentation](https://github-apiv4.netlify.com/)
-   [Examples](https://github.com/Sectur1/github-test)

# Contribute

### Contributing to Github-APIv4

Check out [contributing guide](https://github.com/ioedeveloper/github-apiv4/blob/master/CONTRIBUTING.md) to get an overview of github-apiv4 development.

# FAQ

### Questions?

-   [bugtracker](https://github.com/ioedeveloper/github-apiv4/issues)
