import { defineField, defineType } from "sanity";

import categoryType from "./category";

export default defineType({
  name: "careers",
  title: "Careers Page",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jobDescription",
      title: "Job Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "experienceLevel",
      title: "Experience Level",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "array",
      of: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "howToApply",
      title: "Apply",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: categoryType.name } }],
      validation: (rule) => rule.required(),
    }),
  ],
});
