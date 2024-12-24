import referenceService from "../services/reference.service";


export const reference = {
    namespaced: true,
    actions: {

        async postReference({ commit }, { data, path }) {
            try {
                const response = await referenceService.referencePost(data, path);
                const { status, data: responseData } = response;
                if (status === 201) {
                    commit('setReportData', responseData);  // Коммитим данные отчета
                    return responseData;
                }
            } catch (error) {
                console.error('Error:', error);
                throw `Load error: ${error}`;
            }
        }
    },

    mutations: {
        loginSuccess(state) {
            state.status.loggedIn = true;
        },
        setReportData(state, data) {
            state.reportData = data;  // Обновляем состояние данными отчета
        },
        loginFailure(state) {
            state.status.loggedIn = false;
        },
    }
};
