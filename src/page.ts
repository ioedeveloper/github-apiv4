/**
 * @description Github Graphql PageInfo
 * @defaultVariables totalcount
 * @queryVariables endCursor
 * hasNextPage
 * hasPreviousPage 
 * startCursor
 */

 export const PageInfo = (fields:string) => `
 pageInfo {
    ${fields}
  }
 `