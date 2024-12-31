import { defineField, defineType } from "sanity";

export default defineType({
  name: "meta",
  title: "Meta",
  description: "SEO Metadata for the webpage",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      description: "Meta title of the page",
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
      description: "Meta description for the page",
    }),
  ],
});
