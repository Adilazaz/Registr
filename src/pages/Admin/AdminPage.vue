<template>
    <a-button type="primary" @click="modalAddUser">Добавить пользователя</a-button>
    <a-modal v-model:open="modalAddUserVisible" width="650px" title="Добавить пользователя" @ok="addNewUser">
        <a-input placeholder="Логин" v-model:value="valueEmail" class="createUserInput" />
        <a-input placeholder="Пароль" v-model:value="valuePassword" class="createUserInput" />
        <a-cascader 
            v-model:value="companyIDvalue" 
            :options="companyIdOptions" 
            placeholder="companyID"  
            class="createUserInput cascader"
            @change="handleCompanyChange"
        />
        <a-input placeholder="Имя" v-model:value="valueFirstName" class="createUserInput" />
        <a-input placeholder="Фамилия" v-model:value="valueLastName" class="createUserInput" />
    </a-modal>

    <a-input-search v-model:value="searchValue" placeholder="Введите email для поиска"
        style="width: 200px; margin-left: 10px;" @search="onSearch" />

    <a-table :columns="columns" :data-source="filterUsers()" bordered :pagination="true">
        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'button'">
                <a-button type="primary" size="small" @click="showUserDetails(record.id)">Подробнее</a-button>
            </template>
        </template>
    </a-table>

    <a-modal v-model:open="modalUserVisible" title="Подробная информация о пользователе:" centered width="1000px"
        footer="">
        <UserDetail :reportProcedure="selectedReportProcedure" :userData="userData"
            @submitFormData="handleFormDataFromChild" @delAccConfirm="handleDelAccConfirm" />
    </a-modal>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from "vuex"
import UserDetail from './UserDetail.vue'

const store = useStore()

const modalUserVisible = ref(false);
const modalAddUserVisible = ref(false);
const mockDataUsers = ref([])
const userData = ref(null);
const selectedUserId = ref(null);
const searchValue = ref('')

const modalAddUser = () => {
    modalAddUserVisible.value = true
}

const filterUsers = () => {
    if (!searchValue.value) return mockDataUsers.value;
    return mockDataUsers.value.filter(user =>
        user.email.toLowerCase().includes(searchValue.value.toLowerCase())
    );
};

const onSearch = (value) => {
    searchValue.value = value;
}
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Почта',
        dataIndex: 'email',
    },
    {
        title: 'Имя',
        dataIndex: 'name',
    },
    {
        title: 'Дата создания аккаунта',
        dataIndex: 'createdAt',
    },
    {
        title: 'Подробная информация',
        dataIndex: 'button'
    }
]

const fetchUsersList = async () => {
    try {
        const users = await store.dispatch('users/getUserList')
        mockDataUsers.value = users.map(el => ({
            id: el.id,
            email: el.email,
            name: `${el.firstName} ${el.lastName}`.trim() ? `${el.firstName} ${el.lastName}` : '"empty"',
            createdAt: formatDate(el.createdAt),
        }))
    } catch (error) {
        console.error('Ошибка при получении данных пользователей:', error)
    }
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year}  ${hours}:${minutes}`;
}

const showUserDetails = async (userID) => {
    selectedUserId.value = userID
    modalUserVisible.value = true
    try {
        await store.dispatch('users/getUserDetailList', { userID });
        userData.value = store.state.users.userData;
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
    }
}

onMounted(fetchUsersList)

const valueEmail = ref('')
const valuePassword = ref('')
const valueCompanyId = ref('')
const valueFirstName = ref('')
const valueLastName = ref('')

const companyIdOptions = ref ([])
const companyIDvalue = ref([])

const handleCompanyChange = (value) => {
    valueCompanyId.value = value[0]; 
}
const addNewUser = async () => {
    const createUserData = {
        email: valueEmail.value,
        password: valuePassword.value,
        companyId: valueCompanyId.value,
        firstName: valueFirstName.value,
        lastName: valueLastName.value,
    };

    try {
        const response = await store.dispatch('users/postUserCreate', { createUserData });

        mockDataUsers.value.push({
            id: response.id,
            email: createUserData.email,
            name: `${createUserData.firstName} ${createUserData.lastName}`.trim() ? `${createUserData.firstName} ${createUserData.lastName}` : 'empty',
            createdAt: formatDate(new Date()),
        });

        modalAddUserVisible.value = false;
        resetFormFields();
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
    }
}

const fetchCompanyIdList = async () => {
    try {
        const CompanyId = await store.dispatch('extracts/getDeponentList')
        companyIdOptions.value = CompanyId.map(el => ({
            value: el.DepID,
            label: el.DepName,
        }))
    } catch (error) {
        console.error('Ошибка при получении данных пользователей:', error)
    }
}

onMounted(fetchCompanyIdList)

const resetFormFields = () => {
    valueEmail.value = '';
    valuePassword.value = '';
    valueCompanyId.value = '';
    valueFirstName.value = '';
    valueLastName.value = '';
}

// Обработка удаления пользователя
const handleDelAccConfirm = async () => {
    try {
        await store.dispatch('users/postUserDel', selectedUserId.value);
        const index = mockDataUsers.value.findIndex(user => user.id === selectedUserId.value);
        index > -1 ? mockDataUsers.value.splice(index, 1) : null;
        modalUserVisible.value = false;
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
    }
}

</script>

<style scoped>
.createUserInput {
    margin-top: 10px
}
.cascader{
    width: 100%;
    max-width: 100%;
}
</style>
