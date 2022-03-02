export default {
  title: "Text Content",
  name: "textcontent",
  type: "document",
  fields: [
    {
      name: "aboutHome",
      title: "About Me Homepage Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aboutPage",
      title: "About Me Page Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "illustrationIntro",
      title: "Illustration Page Intro Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "aboutHome",
    },
  },
};
