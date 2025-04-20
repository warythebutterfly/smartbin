import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      //validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "A summary of the post",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content of the post",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Heading 5", value: "h5" },
            { title: "Heading 6", value: "h6" },
            { title: "Normal", value: "normal" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "fontFamily",
                type: "object",
                title: "Font Family",
                fields: [
                  {
                    name: "family",
                    type: "string",
                    title: "Font Family",
                  },
                ],
              },
              {
                name: "link",
                type: "object",
                title: "External Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          type: "object",
          name: "youtube",
          title: "YouTube Embed",
          fields: [
            {
              name: "url",
              type: "url",
              title: "YouTube Video URL",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https"],
                  allowRelative: false,
                  allowCredentials: false,
                }),
            },
          ],
          preview: {
            select: { url: "url" },
            prepare({ url }) {
              return {
                title: "YouTube Embed",
                subtitle: url,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Article Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "youtubeLinks",
      title: "YouTube Links",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
});
