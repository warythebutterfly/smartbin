import { defineField, defineType } from "sanity";

export default defineType({
  name: "products",
  title: "Products Page",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productImg",
      title: "Product Image",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Product Order",
      description: "The order of arrangement for each product block",
      type: "number",
      options: {
        list: [1, 2],
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
