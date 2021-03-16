const github = require('github-apiv4')

const fetch = require('isomorphic-fetch');

const accessCode = YOUR_ACCESSCODE;
const Invitation = github.discussions.Invitation("email createdAt")

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { 
      'Content-Type': 'application/json',
      'Authorization': `bearer ${accessCode}`
  },
  body: JSON.stringify({ query: github.queries.ENTERPRISEADMINISTRATORINVITATION(ENTERPRISESLUG, ROLE, USERLOGIN, Invitation) }),
}).then(res => res.json().then(res => {
      console.log(res.data)
  }))
  .catch(err => console.log(err));
