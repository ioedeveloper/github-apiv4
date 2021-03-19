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

import { queryVariables } from "."

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
 * cwes(last: number, first: number, before: string, after: string) {
 *  totalCount
 *      nodes {
 *      cweId
 *      description
 *      id
 *      name
 * }
 * edges {
 *      cursor
 *      node {
 *          cweId
 *          description
 *          id
 *          name
 *      }
 * }
 * }
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

export const Vulnerabilities = (params: queryVariables.VulnerabilitiesFields) => `
    vulnerabilities(first: ${params.first} ${params.ecosystem ? `, ecosystem: ${params.ecosystem}`:""} ${params.severities ? `, severities: ${params.severities}`:""} ${params.after ? `, after: ${params.after}`:""} ${params.before ? `, after: "${params.before}"`:""} ${params.last ? `, last:${params.last}`:""}, 
    orderBy: {field: ${params.orderBy}, direction: ${params.direction}}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}
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
 
export const CWES = (params: queryVariables.BasicFields) => `
    cwes(first: ${params.first} ${params.after?`, after`:""} ${params.before ? `, after: "${params.before}" `: ""} ${params.last ? `, last: ${params.last}`:""}) { 
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}
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

export const Watchers = (params: queryVariables.BasicFields) => `
    watchers(first: ${params.first}  ${params.before ? `, after: "${params.before}" `:""} ${params.after?`, after: ${params.after}`: ""}  ${params.last ? `, last: ${params.last}`:""}) {
        edges {
            cursor
            node {
                ${params.fields}
            }
        }
        nodes {
            ${params.fields}
        }
        ${params.pageInfo? params.pageInfo:""}
        totalCount
        viewerHasReacted
    }
`

