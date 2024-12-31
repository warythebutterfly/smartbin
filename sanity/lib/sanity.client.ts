import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";
import {
  careersQuery,
  Career,
  careerDetailsQuery,
  categoryQuery,
  Category,
  conductsQuery,
  Conduct,
  conductDetailsQuery,
  partnersQuery,
  Partner,
  teamQuery,
  Team,
  Product,
  productsQuery,
  Investor,
  investorsQuery,
  News,
  newsQuery,
  Landing,
  landingQuery,
  PrivacyPolicy,
  privacyQuery,
  Terms,
  termsQuery,
} from "./sanity.queries";
import { createClient, SanityClient } from "next-sanity";

export function getClient(previewToken?: string): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  if (previewToken) {
    return client.withConfig({
      token: previewToken,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}

export const getSanityImageConfig = () => getClient();

export async function getCareersData(client: SanityClient): Promise<Career[]> {
  return await client.fetch(careersQuery);
}

export async function getCareerDetailsData(
  client: SanityClient,
  id: string,
): Promise<Career> {
  return await client.fetch(careerDetailsQuery, { id });
}

export async function getCategoryData(
  client: SanityClient,
): Promise<Category[]> {
  return await client.fetch(categoryQuery);
}

export async function getConductsData(
  client: SanityClient,
): Promise<Conduct[]> {
  return await client.fetch(conductsQuery);
}

export async function getConductDetailsData(
  client: SanityClient,
  slug: string,
): Promise<Conduct> {
  return await client.fetch(conductDetailsQuery, { slug });
}

export async function getPartnersData(
  client: SanityClient,
): Promise<Partner[]> {
  return await client.fetch(partnersQuery);
}

export async function getTeamData(client: SanityClient): Promise<Team[]> {
  return await client.fetch(teamQuery);
}

export async function getProductsData(
  client: SanityClient,
): Promise<Product[]> {
  return await client.fetch(productsQuery);
}

export async function getInvestorsData(
  client: SanityClient,
): Promise<Investor[]> {
  return await client.fetch(investorsQuery);
}

export async function getNewsData(client: SanityClient): Promise<News[]> {
  return await client.fetch(newsQuery);
}

export async function getLandingData(client: SanityClient): Promise<Landing> {
  return await client.fetch(landingQuery);
}

export async function getPrivacyData(
  client: SanityClient,
): Promise<PrivacyPolicy> {
  return await client.fetch(privacyQuery);
}

export async function getTermsData(client: SanityClient): Promise<Terms> {
  return await client.fetch(termsQuery);
}
