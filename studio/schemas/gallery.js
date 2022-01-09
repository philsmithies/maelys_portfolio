export default {
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    {
      name: "images",
      type: "array", // supports drag'n'drop of multiple files
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
  /* More types here! */
};
