/*
 * Generated by orval v5.4.14 🍺
 * Do not edit manually.
 * FordConnect Prod Collection V3.1.2
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'

export const getVehicleCommandsMSW = () => [
rest.post('*/api/fordconnect/vehicles/v1/:vehicleId/unlock', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/fordconnect/vehicles/v1/:vehicleId/unlock/:UnlockcommandId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/fordconnect/vehicles/v1/:vehicleId/lock', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/fordconnect/vehicles/v1/:vehicleId/lock/:LockcommandId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/fordconnect/vehicles/v1/:vehicleId/startEngine', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/fordconnect/vehicles/v1/:vehicleId/startEngine/:StartcommandId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/fordconnect/vehicles/v1/:vehicleId/stopEngine', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/fordconnect/vehicles/v1/:vehicleId/stopEngine/:StopcommandId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/fordconnect/vehicles/v1/:vehicleId/wake', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/fordconnect/vehicles/v1/:vehicleId/wake/:WakecommandId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),]
