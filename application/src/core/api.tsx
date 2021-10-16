import $ from 'jquery'
import {BASE_HTTP_URL} from "../share";
import store from "./store";

export const baseApi = {
    dispatch: (e: any) => {
    },
    ajaxJSON: async (settings: JQueryAjaxSettings) => {
        let response;
        try {
            response = await $.ajax({
                ...settings,
                crossDomain: true,
                dataType: 'json',
                url: BASE_HTTP_URL + settings.url,
                contentType: 'application/json',
                data: JSON.stringify(settings.data)
            });
        } catch (e: any) {
            store.dispatch({
                type: 'logger/set/error',
                payload: {
                    detail: e.responseJSON ? e.responseJSON['detail'] : 'Server error',
                    status: e.status || 500,
                    protocol: 'http',
                    timestamp: Date.now()
                },
            })
            throw e
        }
        store.dispatch({
            type: 'logger/unset/error',
            payload: null,
        })
        return response
    }
}

export const api = {
    ...baseApi,
    get: async (settings: JQueryAjaxSettings) => {
        return await api.ajaxJSON({
            ...settings,
            type: 'GET',
        })
    },
    post: async (settings: JQueryAjaxSettings) => {
        return await api.ajaxJSON({
            ...settings,
            type: 'POST',
        })
    },
    put: async (settings: JQueryAjaxSettings) => {
        return await api.ajaxJSON({
            ...settings,
            type: 'PUT',
        })
    },
    patch: async (settings: JQueryAjaxSettings) => {
        return await api.ajaxJSON({
            ...settings,
            type: 'PATCH',
        })
    },
    delete: async (settings: JQueryAjaxSettings) => {
        return await api.ajaxJSON({
            ...settings,
            type: 'DELETE',
        })
    }
}


export default api