import { defineField, defineType } from "sanity";

export default defineType({
  name: "partners",
  title: "Partners Page",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Partner Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "partnerLogo",
      title: "Partner Logo",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "partnerLogoAlt",
      title: "Partner Logo Alt",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Partner Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
