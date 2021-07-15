/*
 * Generated by orval v5.4.14 🍺
 * Do not edit manually.
 * FordConnect Prod Collection V3.1.2
 * OpenAPI spec version: 1.0.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import {
  useQuery,
  UseQueryOptions
} from 'react-query'
import type {
  GetApiFordconnectVehiclesV1VehicleIdImagesThumbnailParams,
  GetApiFordconnectVehiclesV1VehicleIdImagesFullParams
} from '.././model'

type AsyncReturnType<
T extends (...args: any) => Promise<any>,
U = unknown
> = T extends (...args: any) => Promise<infer R> ? (U extends R ? U : R) : any;


export const getApiFordconnectVehiclesV1VehicleIdImagesThumbnail = <TData = AxiosResponse<unknown>>(
    vehicleId: string,
    params?: GetApiFordconnectVehiclesV1VehicleIdImagesThumbnailParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/images/thumbnail`,
      {
        params,
    ...options },
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdImagesThumbnailQueryKey = (vehicleId: string,
    params?: GetApiFordconnectVehiclesV1VehicleIdImagesThumbnailParams,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/images/thumbnail`, ...(params ? [params]: [])]

    
export const useGetApiFordconnectVehiclesV1VehicleIdImagesThumbnail = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdImagesThumbnail, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string,
    params?: GetApiFordconnectVehiclesV1VehicleIdImagesThumbnailParams, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdImagesThumbnailQueryKey(vehicleId,params);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdImagesThumbnail<TQueryFnData>(vehicleId,params, axiosOptions), {enabled: !!(vehicleId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const getApiFordconnectVehiclesV1VehicleIdImagesFull = <TData = AxiosResponse<unknown>>(
    vehicleId: string,
    params?: GetApiFordconnectVehiclesV1VehicleIdImagesFullParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/images/full`,
      {
        params,
    ...options },
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdImagesFullQueryKey = (vehicleId: string,
    params?: GetApiFordconnectVehiclesV1VehicleIdImagesFullParams,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/images/full`, ...(params ? [params]: [])]

    
export const useGetApiFordconnectVehiclesV1VehicleIdImagesFull = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdImagesFull, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string,
    params?: GetApiFordconnectVehiclesV1VehicleIdImagesFullParams, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdImagesFullQueryKey(vehicleId,params);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdImagesFull<TQueryFnData>(vehicleId,params, axiosOptions), {enabled: !!(vehicleId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}
