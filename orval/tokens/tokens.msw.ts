/*
 * Generated by orval v5.4.14 🍺
 * Do not edit manually.
 * FordConnect Prod Collection V3.1.2
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'

export const getTokensMSW = () => [
rest.post('*/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/fordconnect/vehicles/v1', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),]
