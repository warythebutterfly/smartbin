import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team Members Page",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Name of the team member",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      description: "Position of the team member",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Enter a number to determine the sorting order",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Picture",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      description: "Bio of the team member",
      type: "string",
      // validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
    {
      title: "Newest First",
      name: "newestFirst",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      order: "order",
      createdAt: "_createdAt",
    },
    prepare({ title, order, createdAt }) {
      return {
        title,
        subtitle: `Order: ${order} | Created At: ${createdAt}`,
      };
    },
  },
});
