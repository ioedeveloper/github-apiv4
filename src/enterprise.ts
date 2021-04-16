/**
 * @description Github Graphql Licenses
 * @fields
 ** body
 ** conditions {
     * description
     * key
     * label
 ** }
 ** description
 ** featured
 ** hidden
 ** id
 ** implementation
 ** key
 ** limitations {
    * description
    * key
    * label
 ** }
 ** name
 ** nickname
 ** permissions {
    * description
    * key
    * label
 ** }
 ** pseudoLicense
 ** spdxId
 ** url
*/

export const Licenses = (fields: string) => `
  licenses {
      ${fields}
  }
`

/**
 * @description Github Graphql License
 * @fields
 ** body
 ** conditions {
     * description
     * key
     * label
 ** }
 ** description
 ** featured
 ** hidden
 ** id
 ** implementation
 ** key
 ** limitations {
    * description
    * key
    * label
 ** }
 ** name
 ** nickname
 ** permissions {
    * description
    * key
    * label
 ** }
 ** pseudoLicense
 ** spdxId
 ** url
*/

export const License = (key: string,fields: string) => `
    license(key: "${key}") {
      ${fields}
  }
`