import { defineField, defineType } from "sanity";

export const quartersType = defineType({
  name: "quarters",
  title: "Quarters",
  type: "document",
  fields: [
    defineField({
      name: "when",
      title: "When",
      type: "string",
      options: {
        list: [
          { title: "Q1", value: "Q1" },
          { title: "Q2", value: "Q2" },
          { title: "Q3", value: "Q3" },
          { title: "Q4", value: "Q4" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      title: "Report",
      name: "report",
      type: "file",
    }),
  ],
});

export const earningsType = defineType({
  name: "earnings",
  title: "Earnings",
  type: "object",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "quartersList",
      title: "Quarters",
      type: "array",
      of: [defineField(quartersType)],
    }),
  ],
});

export default defineType({
  name: "investors",
  title: "Investors Page",
  type: "document",
  fields: [
    // defineField({
    //   name: "hasEarnings",
    //   title: "Display Earnings",
    //   type: "boolean",
    //   validation: (rule) => rule.required(),
    // }),
    defineField(earningsType),
    // defineField({
    //   name: "listOfEarnings",
    //   title: "Earnings",
    //   type: "array",
    //   of: [defineField(earningsType)],
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: "hasCorporateNews",
    //   title: "Is Corporate News Available?",
    //   type: "boolean",
    //   validation: (rule) => rule.required(),
    // }),
  ],
});
