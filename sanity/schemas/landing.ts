import { defineField, defineType } from "sanity";

export const heroSectionType = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Main title of the hero section",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "More info about the title",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "Less info about the title",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export const aboutSectionType = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({
      name: "introHeading",
      title: "Intro Heading",
      type: "string",
    }),
    defineField({
      name: "mainHeading",
      title: "Main Heading",
      description: "Main heading of the about section",
      type: "string",
    }),
    defineField({
      name: "subText",
      title: "Sub Text",
      description: "Text beneath the image",
      type: "string",
    }),
  ],
});

export const visionSectionType = defineType({
  name: "visionSection",
  title: "Vision/Mission Section",
  type: "object",
  fields: [
    defineField({
      name: "vision",
      title: "Vision",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
  ],
});

export const testimonials = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});

export default defineType({
  name: "landing",
  title: "Landing Page",
  type: "document",
  fields: [
    defineField(heroSectionType),
    defineField(aboutSectionType),
    defineField(visionSectionType),
    defineField({
      name: "testimonialSection",
      title: "Testimonial Section",
      type: "array",
      of: [defineField(testimonials)],
    }),
  ],
});
