import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Job Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});
