import { defineField, defineType } from "sanity";

export default defineType({
  name: "terms",
  title: "Terns and Conditions",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Terms and Conditions",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: "publishedAt",
    //   title: "Published",
    //   type: "date",
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
