import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";

const customBaseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:5001/api'
})

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi,
    extraOptions: object) => {
    api.dispatch(startLoading());
    await sleep();
    api.dispatch(stopLoading());
    const result = await customBaseQuery(args, api, extraOptions);
    if (result.error) {
        const { status, data } = result.error;
        console.log({ status, data })
    }

    return result;
} 
