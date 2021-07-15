/*
 * Generated by orval v5.4.14 🍺
 * Do not edit manually.
 * FordConnect Prod Collection V3.1.2
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw";

export const getVehicleInformationMSW = () => [
  rest.post(
    "*/api/fordconnect/vehicles/v1/:vehicleId/status",
    (req, res, ctx) => {
      return res(ctx.delay(1000), ctx.status(200, "Mocked status"));
    }
  ),
  rest.get("*/api/fordconnect/vehicles/v1/:vehicleId", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, "Mocked status"));
  }),
];