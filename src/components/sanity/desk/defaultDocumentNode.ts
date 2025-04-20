import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe, {
  IframeOptions,
  defineUrlResolver,
} from "sanity-plugin-iframe-pane";
import { PREVIEW_MODE_ROUTE, previewSecretId } from "~/sanity/lib";

const urlResolver = defineUrlResolver({
  base: PREVIEW_MODE_ROUTE,
});
const iframeOptions = {
  url: urlResolver,
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions;

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  switch (schemaType) {
    // Category schema is used in the `careers page`
    case "category":
      return null;

    // Blog schema is used in the `investors page`
    case "blog":
      return null;

    case schemaType:
      return S.document().views([
        S.view.form(),
        S.view.component(Iframe).options(iframeOptions).title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
