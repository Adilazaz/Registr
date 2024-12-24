<template>
    <div>
        <p><strong>ID:</strong> {{ userData?.id }}</p>
        <p><strong>Почта:</strong> {{ userData?.email }}</p>
        <p><strong>Полное имя:</strong> {{ `${userData?.firstName} ${userData?.lastName}`.trim() ?
            `${userData?.firstName} ${userData?.lastName}` : 'empty' }}</p>
        <p><strong>Статус:</strong> {{ userData?.roles[0].title + `, (${userData?.roles[0].description})` }}</p>

        <a-popconfirm class="delAcc" title="Are you sure want to delete your account?" @confirm="delAccConfirm">
            <a>Delete Account</a>
        </a-popconfirm>
        <a-popconfirm class="resetPass" title="Are you sure want to reset your password?" @confirm="resetPassConfirm">
            <a>Reset Pass</a>
        </a-popconfirm>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    userData: Object
})

const emits = defineEmits(['delAccConfirm'])

const delAccConfirm = () => {
    emits('delAccConfirm')
}

const resetPassConfirm = () => {
    
}

</script>

<style scoped>
.resetPass {
    margin-left: 50px;
}
</style>
