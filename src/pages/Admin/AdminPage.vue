<template>
    <div>
      <a-input-search
        v-model:value="searchQuery"
        placeholder="Поиск по группам"
        style="margin-bottom: 16px; width: 300px"
      />
  
      <a-table :columns="columns" :data-source="filteredUsers" bordered :pagination="true">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'button'">
            <a-button type="primary" size="small" @click="executeUser(record.id)">Исполнить</a-button>
          </template>
        </template>
      </a-table>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { message, Modal } from 'ant-design-vue';
  
  // Данные пользователей
  const users = ref([
    {
      id: 1,
      idReference: 34,
      email: 'primer@gmail.com',
      group: 'ПКС 1-22 (3-курс)',
      firstName: 'Иван',
      lastName: 'Петров',
      surName: 'Иванович'
    },
    {
      id: 2,
      idReference: 35,
      email: 'example@gmail.com',
      group: 'ПКС 2-21 (2-курс)',
      firstName: 'Алексей',
      lastName: 'Сидоров',
      surName: 'Александрович'
    },
    {
      id: 1,
      idReference: 34,
      email: 'primer@gmail.com',
      group: 'ПКС 1-22 (3-курс)',
      firstName: 'Иван',
      lastName: 'Петров',
      surName: 'Иванович'
    },
    {
      id: 2,
      idReference: 35,
      email: 'example@gmail.com',
      group: 'ПКС 2-21 (2-курс)',
      firstName: 'Алексей',
      lastName: 'Сидоров',
      surName: 'Александрович'
    },
    {
      id: 1,
      idReference: 34,
      email: 'primer@gmail.com',
      group: 'ПКС 1-22 (3-курс)',
      firstName: 'Иван',
      lastName: 'Петров',
      surName: 'Иванович'
    },
    {
      id: 2,
      idReference: 35,
      email: 'example@gmail.com',
      group: 'ПКС 2-21 (2-курс)',
      firstName: 'Алексей',
      lastName: 'Сидоров',
      surName: 'Александрович'
    },
    {
      id: 1,
      idReference: 34,
      email: 'primer@gmail.com',
      group: 'ПКС 1-22 (3-курс)',
      firstName: 'Иван',
      lastName: 'Петров',
      surName: 'Иванович'
    },
    {
      id: 2,
      idReference: 35,
      email: 'example@gmail.com',
      group: 'ПКС 2-21 (2-курс)',
      firstName: 'Алексей',
      lastName: 'Сидоров',
      surName: 'Александрович'
    },
  ]);
  
  const searchQuery = ref('');
  
  // Фильтрация по группам
  const filteredUsers = computed(() => {
    return users.value.filter(user =>
      user.group.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  const columns = [
    { title: 'ID студента', dataIndex: 'id' },
    { title: 'ID справки', dataIndex: 'idReference' },
    { title: 'Почта', dataIndex: 'email' },
    { title: 'Группа (курс)', dataIndex: 'group' },
    { title: 'Фамилия', dataIndex: 'lastName' },
    { title: 'Имя', dataIndex: 'firstName' },
    { title: 'Отчество', dataIndex: 'surName' },
    { title: 'Действие', dataIndex: 'button' }
  ];
  
  // Удаление пользователя
  const executeUser = id => {
    Modal.confirm({
      title: 'Подтверждение',
      content: 'Вы уверены, что хотите исполнить эту запись?',
      onOk() {
        users.value = users.value.filter(user => user.id !== id);
        message.success('Запись исполнена и удалена');
      }
    });
  };
  </script>
  
  <style scoped>
  </style>
  