module.exports = {
  ford: {
    output: {
      mode: "tags-split",
      target: "src/fordConnect.ts",
      schemas: "src/model",
      client: "react-query",
      mock: true,
    },
    input: {
      target: "./ford.yml",
    },
  },
};
