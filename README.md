# Github-APIv4
<!-- [START badges] -->
![travis build](https://api.travis-ci.org/ioedeveloper/github-apiv4.svg?branch=master)
[![npm version](https://badge.fury.io/js/github-apiv4.svg)](https://badge.fury.io/js/github-apiv4)
<!-- [END badges] -->

###### [API](https://ioedeveloper.github.io/github-apiv4/) | [Contribute](#contribute) | [FAQ](#faq)
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
const githubApiv4 = require('github-apiv4');
const fetch = require('isomorphic-fetch');
const accessCode = 'YOUR_GITHUB_ACCESS_CODE';

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { 
      'Content-Type': 'application/json',
      'Authorization': `bearer ${accessCode}`
  },
  body: JSON.stringify({ query: githubApiv4.queries.Viewer }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));
  // res.data is of type githubApiv4.types.Viewer
```

Execute script on the command line

```bash
node exampleJS.js
```

**Typescript Example - query Viewer:**

Save file as **exampleTS.ts**
```ts
import * as githubApiv4 from 'github-apiv4';
import * as fetch from 'isomorphic-fetch';

const accessCode = 'YOUR_GITHUB_ACCESS_CODE';

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { 
      'Content-Type': 'application/json',
      'Authorization': `bearer ${accessCode}`
  },
  body: JSON.stringify({ query: githubApiv4.queries.Viewer }),
})
  .then(res => res.json())
  .then(res => {
      if((res.data as githubApiv4.types.Viewer).viewer){
        console.log(res.data)
        // res.data is of type githubApiv4.types.Viewer
      }else{
        console.log('Type Mismatch!');
      }
  })
```

Execute script on the command line

```bash
tsc exampleTS.ts
node exampleTS.js
```

**Apollo Client Example - query Repository:**

Save file as **apolloClient.ts**
```ts
import * as githubApiV4 from 'github-apiv4';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { fetch } from 'cross-fetch';
import gql from "graphql-tag";

const accessCode = 'YOUR_GITHUB_ACCESS_CODE';
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: new HttpLink({ uri: 'https://api.github.com/graphql', fetch }),
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
    repositoryName: 'github-apiv4',
    repositoryOwner: 'community'
};

// query with apollo-client
client.query({
    query: gql`${githubApiV4.queries.Repository}`,
    variables: queryVariables,
    context: {
        headers: {
            Authorization: `bearer ${accessCode}`
        }
    }
}).then(res=>{
    if(res.data as githubApiV4.types.Repository){
        console.log(res.data);
    }else{
        console.log('Type Mismatch!');
    }
});
```

Execute script on the command line

```bash
tsc apolloClient.ts
node apolloClient.js
```
# Resources

- [API Documentation](#api)
- [Examples](#examples)

# Contribute
### Contributing to Github-APIv4

Check out [contributing guide](https://github.com/ioedeveloper/github-apiv4/blob/master/CONTRIBUTING.md) to get an overview of github-apiv4 development.

# FAQ
### Questions?
- [bugtracker](https://github.com/ioedeveloper/github-apiv4/issues)

