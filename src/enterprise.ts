/**
 * @description Github Graphql CodesOfConduct
 * @fields 
 ** body
 ** id
 ** key
 ** name
 ** resourcePath
 ** url
 */
 export const CodesOfConduct = (fields: string) => `
    codesOfConduct {
        ${fields}
    }
 `

 /**
 * @description Github Graphql CodeOfConduct
 * @fields 
 ** body
 ** id
 ** key
 ** name
 ** resourcePath
 ** url
 */
 export const CodeOfConduct = (key: string,fields: string) => `
    codeOfConduct (key: "${key}") {
        ${fields}
    }
 `