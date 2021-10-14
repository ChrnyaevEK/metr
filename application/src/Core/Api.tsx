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

export const viewSet = {
    retrieve: async (id: string, type: string) => {
        return (await api.get({url: `/${type}/${id}`})).responseJSON
    },
    list: async (type: string) => {
        return (await api.get({url: `/${type}`})).responseJSON
    },
    update: async (id: string, type: string, data: object) => {
        return (await api.put({url: `/${type}/${id}`, data})).responseJSON
    },
    partial_update: async (id: string, type: string, data: object) => {
        return (await api.patch({url: `/${type}/${id}`, data})).responseJSON
    },
    create: async (type: string, data: object) => {
        return (await api.post({url: `/${type}`, data})).responseJSON
    },
    remove: async (id: string, type: string) => {
        return (await api.delete({url: `/${type}/${id}`})).responseJSON
    }
}

export default {
    api,
    viewSet
}