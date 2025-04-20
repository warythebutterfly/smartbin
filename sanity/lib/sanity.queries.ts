import { groq } from "next-sanity";

const careerFields = groq`
  _id,
  responsibilities,
  yearsOfExperience,
  jobDescription,
  "category": category[]->name,
  jobTitle,
  experienceLevel,
  qualifications,
  howToApply,
  location,
  _createdAt 
`;

const conductFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  description,
  _createdAt
`;

const partnerFields = groq`
  _id,
  name,
  description,
  partnerLogo,
  partnerLogoAlt,
  _createdAt
`;

const teamFields = groq`
  _id,
  name,
  position,
  order,
  avatar,
`;

const landingFields = groq`
  _id,
  heroSection,
  aboutSection,
  visionSection,
  testimonialSection,
  _createdAt
`;

const productFields = groq`
  _id,
  name,
  description,
  productImg,
  order
`;

const privacyFields = groq`
  _id,
  title,
  content,
  _updatedAt,
  _createdAt
`;

const termsFields = groq`
  _id,
  title,
  content,
  _updatedAt,
  _createdAt
`;

const investorFields = groq`
  _id,
  "earnings": earnings {
    year,
    "quartersList": quartersList[] {
      when,
      description,
      "reportUrl": report.asset->url
    }
  },  
  _createdAt 
`;

const newsFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "fontFamily" => {
        _type,
        family
      },
      _type == "link" => {
        _type,
        href
      }
    },
    _type == "image" => {
      ...,
      "url": asset->url,
      caption,
      alt
    }
  },
  "images": images[]{
    "url": asset->url,
    caption,
    alt
  },
  "youtubeLinks": youtubeLinks[],
  _createdAt
`;

export const careersQuery = groq`
  *[_type == 'careers'] {
    ${careerFields}
  }
`;

export const careerDetailsQuery = groq`
  *[_type == 'careers' && _id == $id][0] {
    ${careerFields}
  }
`;

export const categoryQuery = groq`
  *[_type == 'category'] {
    _id,
    name
  }
`;

export const conductsQuery = groq`
  *[_type == 'conducts'] {
    ${conductFields}
  }
`;

export const conductDetailsQuery = groq`
  *[_type == 'conducts' && slug.current == $slug][0] {
    ${conductFields}
  }
`;

export const partnersQuery = groq`
  *[_type == 'partners'] {
    ${partnerFields}
  }
`;

export const teamQuery = groq`
  *[_type == 'team'] | order(order asc, _createdAt desc) {
    ${teamFields}
  }
`;

export const productsQuery = groq`
  *[_type == 'products'] {
    ${productFields}
  }
`;

export const investorsQuery = groq`
  *[_type == 'investors'] {
    ${investorFields}
  }
`;

export const blogQuery = groq`
  *[_type == 'news'] {
    ${newsFields}
  }
`;

export const blogDetailsQuery = groq`
  *[_type == 'news' && slug.current == $slug][0] {
    ${newsFields}
  }
`;

export const privacyQuery = groq`
  *[_type == 'privacy-policy'][0] {
    ${privacyFields}
  }
`;

export const termsQuery = groq`
  *[_type == 'terms'][0] {
    ${termsFields}
  }
`;

export const landingQuery = groq`
  *[_type == 'landing'][0] {
    ${landingFields}
  }
`;

export interface Career {
  _id: string;
  responsibilities: any;
  yearsOfExperience: number;
  jobDescription: string;
  category: string[];
  jobTitle: string;
  experienceLevel: string;
  qualifications: any;
  howToApply: any;
  location: string[];
  _createdAt: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface Conduct {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: any;
  _createdAt: string;
}

export interface Partner {
  _id: string;
  name: string;
  partnerLogo: any;
  partnerLogoAlt: string;
  description: string;
  _createdAt: string;
}

export interface Team {
  _id: string;
  name: string;
  order: string;
  position: any;
  avatar: any;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  productImg: any;
  order: number;
}

interface Earning {
  year: number;
  quartersList: {
    when: "Q1" | "Q2" | "Q3" | "Q4";
    description: string;
    reportUrl: string | null;
  }[];
}

export interface Investor {
  _id: string;
  earnings: Earning;
  _createdAt: string;
}

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  mainImage: any;
  content: any;
  _createdAt: string;
  images: any;
  youtubeLinks: any;
}

export interface PrivacyPolicy {
  _id: string;
  title: string;
  content: any;
  _updatedAt: string;
  _createdAt: string;
}

export interface Terms {
  _id: string;
  title: string;
  content: any;
  _updatedAt: string;
  _createdAt: string;
}

export interface Landing {
  _id: string;
  heroSection: {
    title: string;
    summary: any;
    description: any;
  };
  aboutSection: {
    introHeading: string;
    mainHeading: string;
    subText: string;
  };
  visionSection: {
    vision: any;
    mission: any;
  };
  testimonialSection: {
    fullName: string;
    rating: number;
    picture: any;
    text: any;
  }[];
  _createdAt: string;
}
