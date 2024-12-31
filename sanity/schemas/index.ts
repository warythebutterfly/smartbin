import categoryType from "./category";
import careersType from "./careers";
import partnersType from "./partners";
import conductsType from "./conducts";
import teamType from "./team";
import productType from "./product";
import investorsType from "./investors";
import newsType from "./news";
import landingType, {
  aboutSectionType,
  heroSectionType,
  visionSectionType,
} from "./landing";
import privacyType from "./privacy";
import termsType from "./terms";

export const schemaTypes = [
  careersType,
  categoryType,
  partnersType,
  conductsType,
  teamType,
  productType,
  investorsType,
  newsType,

  // Landing page
  heroSectionType,
  aboutSectionType,
  visionSectionType,
  landingType,
  privacyType,
  termsType,
];
