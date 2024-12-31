import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "next-sanity";
import { isValidSecret } from "sanity-plugin-iframe-pane/is-valid-secret";
import {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  previewSecretId,
} from "~/sanity/lib";

const pageMappings: { [key: string]: string } = {
  "/": "/",
  landing: "/",
  team: "/team",
  investors: "/investors",
  careers: "/careers",
  products: "/products",
  conducts: "/conducts",
  partners: "/partners",
  "privacy-policy": "/privacy-policy",
};

type Keys = keyof typeof pageMappings;
type PathValues = (typeof pageMappings)[Keys];

function redirectToPreview(
  res: NextApiResponse<string | void>,
  Location: PathValues = "/",
): void {
  // Enable Draft Mode by setting the cookies
  res.setDraftMode({ enable: true });
  // Redirect to a preview capable route
  res.writeHead(307, { Location });
  res.end();
}

const _client = createClient({ projectId, dataset, apiVersion, useCdn });

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!req.query.secret) {
    return res.status(401).send("Invalid secret");
  }

  const token = process.env.SANITY_READ_TOKEN;
  if (!token) {
    throw new Error(
      "A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup.",
    );
  }
  const client = _client.withConfig({ token });

  // Ensure the actor attempting to start Draft Mode is allowed to do so
  const validSecret = await isValidSecret(
    client,
    previewSecretId,
    Array.isArray(req.query.secret) ? req.query.secret[0] : req.query.secret,
  );
  if (!validSecret) {
    return res.status(401).send("Invalid secret");
  }

  // If no schema type is provided open preview mode on the frontpage
  if (!req.query.type) {
    return redirectToPreview(res, "/");
  }

  return redirectToPreview(res, pageMappings[req.query.type as Keys]);
}
