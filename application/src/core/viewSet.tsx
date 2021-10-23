import api from "./api";

function queryParamsToString(query?: { [key: string]: string }) {
    if (!query) return ''
    let q = []
    for (let [k, v] of Object.entries(query)) {
        q.push(`${k}=${v}`)
    }
    return '?' + q.join('&')
}

export const viewSet = {
    retrieve: async (id: string, type: string, query?: { [key: string]: string }) => {
        return (await api.get({url: `/${type}/${id}/` + queryParamsToString(query)}))
    },
    list: async (type: string, query?: { [key: string]: string }) => {
        return (await api.get({url: `/${type}/` + queryParamsToString(query)}))
    },
    update: async (id: string, type: string, data: object, query?: { [key: string]: string }) => {
        return (await api.put({url: `/${type}/${id}/` + queryParamsToString(query), data}))
    },
    partial_update: async (id: string, type: string, data: object, query?: { [key: string]: string }) => {
        return (await api.patch({url: `/${type}/${id}/` + queryParamsToString(query), data}))
    },
    create: async (type: string, data: object, query?: { [key: string]: string }) => {
        return (await api.post({url: `/${type}/` + queryParamsToString(query), data}))
    },
    remove: async (id: string, type: string, query?: { [key: string]: string }) => {
        return (await api.delete({url: `/${type}/${id}/` + queryParamsToString(query)}))
    }
}