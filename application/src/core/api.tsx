import $ from 'jquery'
import {BASE_HTTP_URL} from "../share";

const baseApi = {
    ajaxJSON: async (settings: JQueryAjaxSettings) => {
        return $.ajax({
            ...settings,
            crossDomain: true,
            dataType: 'json',
            url: BASE_HTTP_URL + settings.url,
            contentType: 'application/json',
            data: JSON.stringify(settings.data)
        });
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