import { GetCodeOfConduct, GetCodesOfConduct, GetEnterprise, GetEnterpriseAdministratorInvitation, GetEnterpriseAdministratorInvitationByToken, GetLicense, GetLicenses, GetMarketplaceCategories, GetMarketplaceCategory, GetMarketplaceListing, GetMarketplaceListings, GetMeta, GetOrganization, GetRepo, GetRepositoryOwner, GetResource, GetSearch, GetSecurityAdvisories, GetSecurityAdvisory, GetSecurityVulnerabilities, GetSponsorables, GetTopic, GetUser, GetViewer, Repo } from "./src/nodequeries";

export default class Github {
    /**
     * Your GitHub app access key
     */
    _key: string;

    Repository: GetRepo;
    Search: GetSearch;
    CodesOfConduct: GetCodesOfConduct
    CodeOfConduct:GetCodeOfConduct
    License:GetLicense
    Licenses: GetLicenses
    Enterprise: GetEnterprise
    EnterpriseAdministratorInvitation: GetEnterpriseAdministratorInvitation
    EnterpriseAdministratorInvitationByToken: GetEnterpriseAdministratorInvitationByToken
    MarketplaceCategories: GetMarketplaceCategories
    MarketplaceCategory: GetMarketplaceCategory
    MarketplaceListings: GetMarketplaceListings
    MarketplaceListing: GetMarketplaceListing
    Meta: GetMeta
    Organization: GetOrganization
    RepositoryOwner: GetRepositoryOwner
    Resource: GetResource
    SecurityAdvisories: GetSecurityAdvisories
    SecurityAdvisory: GetSecurityAdvisory
    SecurityVulnerabilities: GetSecurityVulnerabilities
    Sponsorables: GetSponsorables
    Topic: GetTopic
    User: GetUser
    Viewer: GetViewer

    constructor(key?: string) {
        this._key = key || "";
        this.Repository = new GetRepo(this._key);
        this.Search = new GetSearch(this._key);
        this.CodesOfConduct = new GetCodesOfConduct(this._key)
        this.CodeOfConduct = new GetCodeOfConduct(this._key)
        this.License= new GetLicense(this._key)
        this.Licenses= new GetLicenses(this._key)
        this.Enterprise = new GetEnterprise(this._key)
        this.EnterpriseAdministratorInvitation = new GetEnterpriseAdministratorInvitation(this._key)
        this.EnterpriseAdministratorInvitationByToken = new GetEnterpriseAdministratorInvitationByToken(this._key)
        this.MarketplaceCategories = new GetMarketplaceCategories(this._key)
        this.MarketplaceCategory = new GetMarketplaceCategory(this._key)
        this.MarketplaceListings = new GetMarketplaceListings(this._key)
        this.MarketplaceListing = new GetMarketplaceListing(this._key)
        this.Meta = new GetMeta(this._key)
        this.Organization = new GetOrganization(this._key)
        this.RepositoryOwner = new GetRepositoryOwner(this._key)
        this.Resource = new GetResource(this._key)
        this.SecurityAdvisories = new GetSecurityAdvisories(this._key)
        this.SecurityAdvisory = new GetSecurityAdvisory(this._key)
        this.SecurityVulnerabilities = new GetSecurityVulnerabilities(this._key)
        this.Sponsorables = new GetSponsorables(this._key)
        this.Topic = new GetTopic(this._key)
        this.User = new GetUser(this._key)
        this.Viewer = new GetViewer(this._key)
    }
}