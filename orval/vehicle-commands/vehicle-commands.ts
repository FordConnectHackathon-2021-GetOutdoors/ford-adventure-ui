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


export const postApiFordconnectVehiclesV1VehicleIdUnlock = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/fordconnect/vehicles/v1/${vehicleId}/unlock`,
      undefined,options
    );
  }



    export const usePostApiFordconnectVehiclesV1VehicleIdUnlock = <TData = AsyncReturnType<typeof postApiFordconnectVehiclesV1VehicleIdUnlock,AxiosResponse<unknown>>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{vehicleId: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<TData, TError, {vehicleId: string}, TContext>((props) => {
        const {vehicleId} = props || {};

        return  postApiFordconnectVehiclesV1VehicleIdUnlock<TData>(vehicleId,axiosOptions)
      }, mutationOptions)
    }
    export const getApiFordconnectVehiclesV1VehicleIdUnlockUnlockcommandId = <TData = AxiosResponse<unknown>>(
    vehicleId: string,
    UnlockcommandId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/unlock/${UnlockcommandId}`,options
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdUnlockUnlockcommandIdQueryKey = (vehicleId: string,
    UnlockcommandId: string,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/unlock/${UnlockcommandId}`]

    
export const useGetApiFordconnectVehiclesV1VehicleIdUnlockUnlockcommandId = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdUnlockUnlockcommandId, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string,
    UnlockcommandId: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdUnlockUnlockcommandIdQueryKey(vehicleId,UnlockcommandId);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdUnlockUnlockcommandId<TQueryFnData>(vehicleId,UnlockcommandId, axiosOptions), {enabled: !!(vehicleId && UnlockcommandId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const postApiFordconnectVehiclesV1VehicleIdLock = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/fordconnect/vehicles/v1/${vehicleId}/lock`,
      undefined,options
    );
  }



    export const usePostApiFordconnectVehiclesV1VehicleIdLock = <TData = AsyncReturnType<typeof postApiFordconnectVehiclesV1VehicleIdLock,AxiosResponse<unknown>>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{vehicleId: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<TData, TError, {vehicleId: string}, TContext>((props) => {
        const {vehicleId} = props || {};

        return  postApiFordconnectVehiclesV1VehicleIdLock<TData>(vehicleId,axiosOptions)
      }, mutationOptions)
    }
    export const getApiFordconnectVehiclesV1VehicleIdLockLockcommandId = <TData = AxiosResponse<unknown>>(
    vehicleId: string,
    LockcommandId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/lock/${LockcommandId}`,options
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdLockLockcommandIdQueryKey = (vehicleId: string,
    LockcommandId: string,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/lock/${LockcommandId}`]

    
export const useGetApiFordconnectVehiclesV1VehicleIdLockLockcommandId = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdLockLockcommandId, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string,
    LockcommandId: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdLockLockcommandIdQueryKey(vehicleId,LockcommandId);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdLockLockcommandId<TQueryFnData>(vehicleId,LockcommandId, axiosOptions), {enabled: !!(vehicleId && LockcommandId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const postApiFordconnectVehiclesV1VehicleIdStartEngine = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/fordconnect/vehicles/v1/${vehicleId}/startEngine`,
      undefined,options
    );
  }



    export const usePostApiFordconnectVehiclesV1VehicleIdStartEngine = <TData = AsyncReturnType<typeof postApiFordconnectVehiclesV1VehicleIdStartEngine,AxiosResponse<unknown>>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{vehicleId: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<TData, TError, {vehicleId: string}, TContext>((props) => {
        const {vehicleId} = props || {};

        return  postApiFordconnectVehiclesV1VehicleIdStartEngine<TData>(vehicleId,axiosOptions)
      }, mutationOptions)
    }
    export const getApiFordconnectVehiclesV1VehicleIdStartEngineStartcommandId = <TData = AxiosResponse<unknown>>(
    vehicleId: string,
    StartcommandId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/startEngine/${StartcommandId}`,options
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdStartEngineStartcommandIdQueryKey = (vehicleId: string,
    StartcommandId: string,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/startEngine/${StartcommandId}`]

    
export const useGetApiFordconnectVehiclesV1VehicleIdStartEngineStartcommandId = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdStartEngineStartcommandId, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string,
    StartcommandId: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdStartEngineStartcommandIdQueryKey(vehicleId,StartcommandId);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdStartEngineStartcommandId<TQueryFnData>(vehicleId,StartcommandId, axiosOptions), {enabled: !!(vehicleId && StartcommandId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const postApiFordconnectVehiclesV1VehicleIdStopEngine = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/fordconnect/vehicles/v1/${vehicleId}/stopEngine`,
      undefined,options
    );
  }



    export const usePostApiFordconnectVehiclesV1VehicleIdStopEngine = <TData = AsyncReturnType<typeof postApiFordconnectVehiclesV1VehicleIdStopEngine,AxiosResponse<unknown>>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{vehicleId: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<TData, TError, {vehicleId: string}, TContext>((props) => {
        const {vehicleId} = props || {};

        return  postApiFordconnectVehiclesV1VehicleIdStopEngine<TData>(vehicleId,axiosOptions)
      }, mutationOptions)
    }
    export const getApiFordconnectVehiclesV1VehicleIdStopEngineStopcommandId = <TData = AxiosResponse<unknown>>(
    vehicleId: string,
    StopcommandId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/stopEngine/${StopcommandId}`,options
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdStopEngineStopcommandIdQueryKey = (vehicleId: string,
    StopcommandId: string,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/stopEngine/${StopcommandId}`]

    
export const useGetApiFordconnectVehiclesV1VehicleIdStopEngineStopcommandId = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdStopEngineStopcommandId, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string,
    StopcommandId: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdStopEngineStopcommandIdQueryKey(vehicleId,StopcommandId);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdStopEngineStopcommandId<TQueryFnData>(vehicleId,StopcommandId, axiosOptions), {enabled: !!(vehicleId && StopcommandId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

export const postApiFordconnectVehiclesV1VehicleIdWake = <TData = AxiosResponse<unknown>>(
    vehicleId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/fordconnect/vehicles/v1/${vehicleId}/wake`,
      undefined,options
    );
  }



    export const usePostApiFordconnectVehiclesV1VehicleIdWake = <TData = AsyncReturnType<typeof postApiFordconnectVehiclesV1VehicleIdWake,AxiosResponse<unknown>>,
    TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<TData, TError,{vehicleId: string}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options || {}

      return useMutation<TData, TError, {vehicleId: string}, TContext>((props) => {
        const {vehicleId} = props || {};

        return  postApiFordconnectVehiclesV1VehicleIdWake<TData>(vehicleId,axiosOptions)
      }, mutationOptions)
    }
    export const getApiFordconnectVehiclesV1VehicleIdWakeWakecommandId = <TData = AxiosResponse<unknown>>(
    vehicleId: string,
    WakecommandId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/fordconnect/vehicles/v1/${vehicleId}/wake/${WakecommandId}`,options
    );
  }


export const getGetApiFordconnectVehiclesV1VehicleIdWakeWakecommandIdQueryKey = (vehicleId: string,
    WakecommandId: string,) => [`/api/fordconnect/vehicles/v1/${vehicleId}/wake/${WakecommandId}`]

    
export const useGetApiFordconnectVehiclesV1VehicleIdWakeWakecommandId = <TQueryFnData = AsyncReturnType<typeof getApiFordconnectVehiclesV1VehicleIdWakeWakecommandId, AxiosResponse<unknown>>, TError = unknown, TData = TQueryFnData>(
 vehicleId: string,
    WakecommandId: string, options?: { query?:UseQueryOptions<TQueryFnData, TError, TData>, axios?: AxiosRequestConfig}

  ) => {

  const {query: queryOptions, axios: axiosOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetApiFordconnectVehiclesV1VehicleIdWakeWakecommandIdQueryKey(vehicleId,WakecommandId);

  const query = useQuery<TQueryFnData, TError, TData>(queryKey, () => getApiFordconnectVehiclesV1VehicleIdWakeWakecommandId<TQueryFnData>(vehicleId,WakecommandId, axiosOptions), {enabled: !!(vehicleId && WakecommandId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

