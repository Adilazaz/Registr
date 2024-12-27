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
            <a-button type="primary" size="small" @click="executeUser(record.id, record.email)">Исполнить</a-button>
          </template>
        </template>
      </a-table>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { message, Modal } from 'ant-design-vue';
  
  // Данные пользователей
  const users = ref(
  [
  {
    id: 1,
    idReference: 45,
    reference: 'Справка для военкомата',
    email: 'random1@mail.com',
    group: 'ПКС 1-22 (4-курс)',
    firstName: 'Нурсултан',
    lastName: 'Темиралиев'
  },
  {
    id: 2,
    idReference: 50,
    reference: 'Справка по месту требования',
    email: 'student2@mail.com',
    group: 'ПКС 1-22 (2-курс)',
    firstName: 'Адиль',
    lastName: 'Сулпукаров'
  },
  {
    id: 3,
    idReference: 46,
    reference: 'Справка для работы',
    email: 'test3@mail.com',
    group: 'ПКС 1-22 (3-курс)',
    firstName: 'Башизова',
    lastName: 'Малика'
  },
  {
    id: 4,
    idReference: 47,
    reference: 'Справка для работы',
    email: 'example4@mail.com',
    group: 'ПКС 1-22 (1-курс)',
    firstName: 'Амангелди',
    lastName: 'Темирбеков'
  },
  {
    id: 5,
    idReference: 49,
    reference: 'Справка по месту требования',
    email: 'info5@mail.com',
    group: 'ПКС 1-22 (1-курс)',
    firstName: 'Самат',
    lastName: 'Дуйшонбеков'
  },
  {
    id: 6,
    idReference: 52,
    reference: 'Справка по месту требования',
    email: 'random6@mail.com',
    group: 'ПКС 1-22 (3-курс)',
    firstName: 'Азамат',
    lastName: 'Сопубеков'
  },
  {
    id: 7,
    idReference: 51,
    reference: 'Справка для военкомата',
    email: 'user7@mail.com',
    group: 'ПКС 1-22 (2-курс)',
    firstName: 'Арген',
    lastName: 'Казаков'
  },
  {
    id: 8,
    idReference: 48,
    reference: 'Справка для работы',
    email: 'student8@mail.com',
    group: 'ПКС 1-22 (4-курс)',
    firstName: 'Айдар',
    lastName: 'Рысбеков'
  },
  {
    id: 9,
    idReference: 53,
    reference: 'Справка для военкомата',
    email: 'test9@mail.com',
    group: 'ПКС 1-22 (1-курс)',
    firstName: 'Адеми',
    lastName: 'Замирбекова'
  },
  {
    id: 10,
    idReference: 54,
    reference: 'Справка для работы',
    email: 'example10@mail.com',
    group: 'ПКС 1-22 (2-курс)',
    firstName: 'Эльмар',
    lastName: 'Тунгучбеков'
  },
  {
    id: 2,
    idReference: 67,
    reference: 'Справка для военкомата',
    email: 'student2@mail.com',
    group: 'ПКС 1-22 (2-курс)',
    firstName: 'Адиль',
    lastName: 'Сулпукаров'
  },
  ]);
  
  const searchQuery = ref('');
  
  const filteredUsers = computed(() => {
    return users.value.filter(user =>
      user.group.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  const columns = [
    { title: 'ID студента', dataIndex: 'id' },
    { title: 'ID справки', dataIndex: 'idReference' },
    { title: 'Справка', dataIndex: 'reference' },
    { title: 'Почта', dataIndex: 'email' },
    { title: 'Группа (курс)', dataIndex: 'group' },
    { title: 'Фамилия', dataIndex: 'lastName' },
    { title: 'Имя', dataIndex: 'firstName' },
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
  