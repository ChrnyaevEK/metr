import api from "./Api";

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