import api from "./api";

class ReferenceService {
    referencePost(data, path) {
        return new Promise(resolve => {
            return resolve({ status: 201, data: data })
        })
        // return api.post(`/reference/${path}`, data);

    }
}

export default new ReferenceService();