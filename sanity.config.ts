import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import {
  PREVIEW_MODE_ROUTE,
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "./sanity/lib/sanity.api";
import { defaultDocumentNode } from "@/components/sanity";
import { previewUrl } from "sanity-plugin-iframe-pane/preview-url";

const title = "# CMS";
const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  basePath: "/studio",
  title: title,
  projectId: projectId as string,
  dataset: dataset as string,
  schema: {
    types: schemaTypes,
  },
  plugins: isDev
    ? [
        deskTool({
          defaultDocumentNode,
        }),
        // Add the "Open preview" action
        previewUrl({
          base: PREVIEW_MODE_ROUTE,
          urlSecretId: previewSecretId,
          // matchTypes: [postType.name, settingsType.name],
          matchTypes: schemaTypes.map((schema) => schema.name),
        }),
        visionTool({ defaultApiVersion: apiVersion }),
      ]
    : [deskTool({ defaultDocumentNode })],
});
