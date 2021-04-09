
/**
 * @description Github Graphql Topic
 * @fields
 * 
 * id
 * 
 * name
 * 
 * RelatedTopics
 * 
 * stargazerCount
 * 
 * Stargazers
 * 
 * viewerHasStarred
 */

 export const Topic = (fields:string = "") => `
 topic {
     name
     ${fields}
 }
`

/**
* @description Github Graphql RelatedTopics
* 
* @fields
* id
* 
* name
* 
* RelatedTopics
* 
* stargazerCount
* 
* Stargazers
* 
* viewerHasStarred
*/

export const RelatedTopics = (first: number,fields:string = "") => `
 relatedTopics (first: ${first}) {
     name
     ${fields}
 }
`
