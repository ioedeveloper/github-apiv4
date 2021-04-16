import { queryVariables } from "."

/**
 * @description Github Graphql Query for EnterpriseAdministratorInvitationByToken
 * @queryVariable 
 **  invitationToken string
 * @fields
 ** Invitation
 */
 export const EnterpriseAdministratorInvitationByToken = (invitationToken: string, fields: string ) => `
  enterpriseAdministratorInvitationByToken (invitationToken: "${invitationToken}") {
        ${fields}
    }
 `

 /**
 * @description Github Graphql Query for EnterpriseAdministratorInvitation
 * @queryVariable 
 **  invitationToken string
 * @fields
 ** Invitation
 */
 export const EnterpriseAdministratorInvitation = (params: queryVariables.EnterpriseAdministratorInvitation) => `
    enterpriseAdministratorInvitation (${params.enterpriseSlug? `enterpriseSlug: "${params.enterpriseSlug}",`:""} ${params.role? `role:${params.role}`:""}
    ${params.userLogin? `userLogin: ${params.userLogin}`: ""}) {
        ${params.fields}
    }
 `