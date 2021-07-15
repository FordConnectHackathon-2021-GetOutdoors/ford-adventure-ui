/**
 * Example config for `yarn example:advanced`
 */

module.exports = {
  ford: {
    output: {
      mode: "tags-split",
      target: "endpoints/VehicleStatusFromSpec.ts",
      schemas: "model",
      client: "react-query",
      mock: true,
    },
    input: {
      target: "./VehicleStatus.openapi.yml",
    },
  },
};
