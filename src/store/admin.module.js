import adminService from '../services/admin.service'


export const admin = {
    namespaced: true,
    actions: {

        async postAdmin({ commit }, { data, path }) {
            try {
                const response = await adminService.adminPost(data, path);
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
