import api from "../api"

export const CheckinService = {
    async Get(id: string) {
        return await api
                     .get(`/checkin?id=${id}`)
                     .then((response) => {
                         return response.data;
                     })
                     .catch((err) => {
                         return err?.response;
                     });
    }
}