<template>
    <div class="sign-in">
        <div class="login-container" :class="{ shake: shakeError }">
            <a-card class="login-card">
                <div class="logo">
                </div>
                <p class="description">Программа удаленной оставки заявления на справки</p>
                <a-tabs default-active-key="1">
                    <a-tab-pane key="1" tab="Авторизация">
                        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
                            <a-form-item name="login"
                                :validate-status="errors.login ? 'error' : ''"
                                :help="errors.login"
                                :rules="[{ required: true, message: 'Введите логин!' }]">
                                <a-input v-model:value="formState.login">
                                    <template #prefix>
                                        <UserOutlined class="site-form-item-icon" />
                                    </template>
                                </a-input>
                            </a-form-item>

                            <a-form-item name="password"
                                :validate-status="errors.password ? 'error' : ''"
                                :help="errors.password"
                                :rules="[{ required: true, message: 'Введите пароль!' }]">
                                <a-input-password v-model:value="formState.password">
                                    <template #prefix>
                                        <LockOutlined class="site-form-item-icon" />
                                    </template>
                                </a-input-password>
                            </a-form-item>
                            <a-form-item>
                                <a-button type="primary" html-type="submit" class="login-button">Войти</a-button>
                            </a-form-item>
                        </a-form>
                    </a-tab-pane>
                </a-tabs>
            </a-card>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from 'axios';

const store = useStore();
const router = useRouter();

const formState = reactive({
    login: '',
    password: '',
});

const errors = reactive({
    login: '',
    password: ''
});

const shakeError = ref(false);

const onFinish = async (values) => {
    // Сброс ошибок
    errors.login = '';
    errors.password = '';

    try {
        // Проверяем, если введены ADMIN и ADMIN
        if (values.login === 'ADMIN' && values.password === 'ADMIN') {
            const adminUser = {
                id: 0,
                email: "mukr@gmail.com",
                firstName: "admin",
                lastName: "admin",
                roles: "ADMIN",
                password: "ADMIN"
            };
            // Сохраняем фиксированные данные администратора
            localStorage.setItem('userInfo', JSON.stringify(adminUser));

            // Переход на главную страницу
            router.push("/adminPage");
        } else {
            // Диспатчим действие в store для других пользователей
            const response = await store.dispatch("auth/logins", values);

            // Проверяем, что ответ — это объект
            if (typeof response === 'object' && response !== null) {
                // Сохраняем ответ в localStorage
                localStorage.setItem('userInfo', JSON.stringify(response.res.data));

                // Переход на главную страницу
                router.push("/");
            } else {
                throw new Error('Некорректный ответ от сервера');
            }
        }
    } catch (error) {
        // Обработка ошибок
        const errorMsg = (error.response &&
                          error.response.data &&
                          error.response.data.message) ||
                          error.message ||
                          error.toString();
        message.error(errorMsg);
        errors.password = 'Неправильный логин или пароль';
        triggerShake();
        clearForm();
    }
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const triggerShake = () => {
    shakeError.value = true;
    setTimeout(() => {
        shakeError.value = false;
    }, 500);
};

const clearForm = () => {
    formState.login = '';
    formState.password = '';
};

const disabled = computed(() => {
    return (formState.login && formState.password);
});
</script>


<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-card {
    width: 400px;
    padding: 20px;
}

.description {
    text-align: center;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.45);
}

.forgot-password {
    float: right;
}

.login-button {
    width: 100%;
}

.social-login {
    text-align: center;
    margin-top: 20px;
}

.social-login span {
    margin-right: 10px;
}

.social-login .anticon {
    margin: 0 5px;
}

.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}
</style>
