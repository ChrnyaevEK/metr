import $ from 'jquery'
import {BASE_API_URL, getCookie} from "../share";
import store from "./store";

export const baseApi = {
    csrfToken: getCookie('csrftoken'),
    ajaxJSON: async (settings: JQueryAjaxSettings) => {
        let response;
        try {
            response = await $.ajax({
                ...settings,
                headers: {'X-CSRFToken': baseApi.csrfToken},
                crossDomain: true,
                dataType: 'json',
                url: BASE_API_URL + settings.url,
                contentType: 'application/json',
                data: JSON.stringify(settings.data)
            });
        } catch (e: any) {
            console.error(e)
            store.dispatch({
                type: 'logger/set/error',
                payload: {
                    detail: e.responseJSON?.detail || 'Server error occurred...',
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