import api from "./api";

export const viewSet = {
    retrieve: async (id: string, type: string) => {
        return (await api.get({url: `/${type}/${id}/`}))
    },
    list: async (type: string) => {
        return (await api.get({url: `/${type}/`}))
    },
    update: async (id: string, type: string, data: object) => {
        return (await api.put({url: `/${type}/${id}/`, data}))
    },
    partial_update: async (id: string, type: string, data: object) => {
        return (await api.patch({url: `/${type}/${id}/`, data}))
    },
    create: async (type: string, data: object) => {
        return (await api.post({url: `/${type}/`, data}))
    },
    remove: async (id: string, type: string) => {
        return (await api.delete({url: `/${type}/${id}/`}))
    }
}