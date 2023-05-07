import { ICheckinRequest } from "../../model/auto-attendant/ICheckinRequest";
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
    },
    async PostFormExperience(request: ICheckinRequest) {
        return api
          .post(`/`, request, {
            headers: {
            //   Authorization: "Bearer " + authLocalStorageService.get(),
            },
          })
          .then((response) => {
            return response.data;
          })
    
          .catch((err) => {
            return err?.response;
          });
      }
}