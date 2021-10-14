import $ from 'jquery'
import AjaxSettings = JQuery.AjaxSettings;

const baseApi = {
    ajaxJSON: async (settings: AjaxSettings) => {
        return $.ajax({
            ...settings,
            contentType: 'application/json',
            data: JSON.stringify(settings.data)
        });
    }
}

export const api = {
    ...baseApi,
    get: async (settings: AjaxSettings) => {
        return api.ajaxJSON({
            ...settings,
            type: 'GET',
        })
    },
    post: async (settings: AjaxSettings) => {
        return api.ajaxJSON({
            ...settings,
            type: 'POST',
        })
    },
    put: async (settings: AjaxSettings) => {
        return api.ajaxJSON({
            ...settings,
            type: 'PUT',
        })
    },
    patch: async (settings: AjaxSettings) => {
        return api.ajaxJSON({
            ...settings,
            type: 'PATCH',
        })
    },
    delete: async (settings: AjaxSettings) => {
        return api.ajaxJSON({
            ...settings,
            type: 'DELETE',
        })
    }
}


export default api