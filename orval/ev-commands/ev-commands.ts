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
  useMutation,
  UseQueryOptions,
  UseMutationOptions
} from 'react-query'

type AsyncReturnType<
T extends (...args: any) => Promise<any>,
U = unknown
> = T extends (...args: any) => Promise<infer R> ? (U extends R ? U : R) : any;


export const postApiFordconnectVehiclesV1VehicleIdStartCharge = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/fordconnect/vehicles/v1/${vehicleId}/startCharge`,
      undefined,options
    );
  }



    export const usePostApiFordconnectVehiclesV1VehicleIdStartCharge = <TData = AsyncReturnType<typeof postApiFordconnectVehiclesV1VehicleIdStartCharge,AxiosResponse<unknown>>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{vehicleId: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<TData, TError, {vehicleId: string}, TContext>((props) => {
        const {vehicleId} = props || {};

        return  postApiFordconnectVehiclesV1VehicleIdStartCharge<TData>(vehicleId,axiosOptions)
      }, mutationOptions)
    }
    export const postApiFordconnectVehiclesV1VehicleIdStopCharge = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/fordconnect/vehicles/v1/${vehicleId}/stopCharge`,
      undefined,options
    );
  }



    export const usePostApiFordconnectVehiclesV1VehicleIdStopCharge = <TData = AsyncReturnType<typeof postApiFordconnectVehiclesV1VehicleIdStopCharge,AxiosResponse<unknown>>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{vehicleId: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<TData, TError, {vehicleId: string}, TContext>((props) => {
        const {vehicleId} = props || {};

        return  postApiFordconnectVehiclesV1VehicleIdStopCharge<TData>(vehicleId,axiosOptions)
      }, mutationOptions)
    }
    export const getApiFordconnectVehiclesV1VehicleIdChargeSchedules = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/chargeSchedules`,options
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdChargeSchedulesQueryKey = (vehicleId: string,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/chargeSchedules`]

    
export const useGetApiFordconnectVehiclesV1VehicleIdChargeSchedules = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdChargeSchedules, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdChargeSchedulesQueryKey(vehicleId);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdChargeSchedules<TQueryFnData>(vehicleId, axiosOptions), {enabled: !!(vehicleId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const getApiFordconnectVehiclesV1VehicleIdDepartureTimes = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/departureTimes`,options
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdDepartureTimesQueryKey = (vehicleId: string,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/departureTimes`]

    
export const useGetApiFordconnectVehiclesV1VehicleIdDepartureTimes = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdDepartureTimes, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdDepartureTimesQueryKey(vehicleId);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdDepartureTimes<TQueryFnData>(vehicleId, axiosOptions), {enabled: !!(vehicleId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

