/**
 * @description Github Graphql VulnerabilityAlerts
 * @defaultVariables totalCount first = 10 orderBy = "CREATE_AT",direction = "ASC" packageType "NPM"
 * @queryArguments 
 * direction "ASC" | "DESC"
 * field "CREATED_AT"
 * packageType "NPM" | "RUBYGEMS" | "MAVEN" | "DOCKER" | "DEBIAN" | "NUGET" | "PYPI"
 * repositoryId string
 * after String
 * names string,
 * before String
 * first number
 * last number
 * orderBy "CREATE_AT"
 * direction "ASC" 
 * @queryVariables 
 * edges {
 *      cursor
 *      node {
 *         Package
 *      }
 *  }
 * nodes {
 * createdAt
 * dismissReason
 * dismissedAt
 * dismisser {
 *      User
 * }
 * id
 * repository {
 *      Repository
 * }
 * securityAdvisory {
 *      SecurityAdvisory
 * }
 * securityVulnerability {
 *      Vulnerability
 * }
 * vulnerableManifestFilename
 * vulnerableManifestPath
 * vulnerableRequirements
 * viewerHasReacted
 * }
*/

export const VulnerabilityAlerts = (first: number = 10, after: string = "", before: string = "", last: number, fields: string = "") => `
    vulnerabilityAlerts( first: ${first} ${after ? `, after: ${after} `:""} ${before ? `, before: ${before} `:""} ${last ? `, last: ${last}`:""}) {
        ${fields}
        totalCount
    }
`

/**
 * @description Github Graphql SecurityAdvisory
 * @defaultVariables databaseId description
 * @queryVariables 
 * cvss {
 *      score
 *      vectorString
 * }
 * CWES
 * databaseId
 * description
 * ghsaId
 * id
 * identifiers {
 *      type
 *      value
 * }
 * notificationsPermalink
 * origin
 * permalink
 * publishedAt
 * references {
 *      url
 * }
 * severity
 * summary
 *      updatedAt
 * }
 * updatedAt
 * vulnerabilities {
 *      Vulnerabilities
 * }
 * withdrawnAt
 */


export const SecurityAdvisory = (fields: string = "") => `
    advisory {
        databaseId
        description
        ${fields}
    }    
`

/**
 * @description Github Graphql Vulnerabilities
 * @defaultVariables totalCount field = "UPDATED_AT" direction = "ASC" first = 10 ecosystem = "NPM" severities = "LOW"
 * @queryArguments 
 * ecosystem "NPM" | "RUBYGEMS" | "MAVEN" | "COMPOSER" | "NUGET" | "PIP"
 * severities "LOW" | "MODERATE" | "HIGH" | "CRITICAL"
 * after string
 * before string
 * first number
 * last number
 * @queryVariables
 * Vulnerability
 */

export const Vulnerabilities = (first: number = 10, fields: string = "", severities?: string, ecosystem?: string, after?: string, before?: string, last?: number, orderBy: string = "UPDATED_AT", direction: string = "ASC") => `
    vulnerabilities(first: ${first} ${ecosystem ? `, ecosystem: ${ecosystem}`:""} ${severities ? `, severities: ${severities}`:""} ${after ? `, after: ${after}`:""} ${before ? `, before: ${before}`:""} ${last ? `, last:${last}`:""}, 
    orderBy: {field: ${orderBy}, direction: ${direction}}) {
        edges {
            cursor
            node {
                ${fields}
            }
        }
        nodes {
            ${fields}
        }
        totalCount
    }
`

/**
 * @description Github Graphql Vulnerability
 * @defaultVariables severity
 * @queryVariables 
 * advisory {
 *      SecurityAdvisory
 * }
 * firstPatchedVersion {
 *      identifier
 * }
 * package {
 *      ecosystem
 *      name
 * }
 * severity
 * updatedAt
 * vulnerableVersionRange
 */

export const Vulnerability = (fields: string = "") => `
    severity
    ${fields}        
`

/**
 * @description Github Graphql CWES  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * @queryVariables
 * cweId
 * description
 * id
 * name
 * }
*/
 
export const CWES = (first: number = 10, fields: string = "", after?: string, before?: string, last?: number) => `
    cwes(first: ${first} ${after?`, after`:""} ${before ? `, before: ${before} `: ""} ${last ? `, last: ${last}`:""}) { 
        edges {
            cursor
            node {
                ${fields}
            }
        }
        nodes {
            ${fields}
        }
        totalCount
    }
`

/**
 * @description Github Graphql Watches  
 * @defaultVariables totalCount first = 10
 * @queryArguments 
 * after String
 * before String
 * first number
 * last number
 * @queryVariables 
 * User
*/

export const Watchers = (first: number = 10, fields: string = "", pageInfo?:string,after?: string, before?: string, last?: number) => `
    watchers(first: ${first}  ${before ? `, before: ${before} `:""}${after?`, after: `: ""}  ${last ? `, last: ${last}`:""}) {
        edges {
            cursor
            node {
                ${fields}
            }
        }
        nodes {
            ${fields}
        }
        ${pageInfo? pageInfo:""}
        totalCount
        viewerHasReacted
    }
`
