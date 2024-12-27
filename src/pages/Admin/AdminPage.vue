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
  const users = ref(
  [
  {
    id: 1,
    idReference: 45,
    email: 'random1@mail.com',
    group: 'ИТС 3-20 (4-курс)',
    firstName: 'Егор',
    lastName: 'Васильев',
    surName: 'Николаевич'
  },
  {
    id: 2,
    idReference: 50,
    email: 'student2@mail.com',
    group: 'ПМ 1-19 (2-курс)',
    firstName: 'Максим',
    lastName: 'Козлов',
    surName: 'Дмитриевич'
  },
  {
    id: 3,
    idReference: 46,
    email: 'test3@mail.com',
    group: 'ИС 4-21 (3-курс)',
    firstName: 'Анна',
    lastName: 'Семенова',
    surName: 'Сергеевна'
  },
  {
    id: 4,
    idReference: 47,
    email: 'example4@mail.com',
    group: 'ЭКО 2-22 (1-курс)',
    firstName: 'Ольга',
    lastName: 'Попова',
    surName: 'Андреевна'
  },
  {
    id: 5,
    idReference: 49,
    email: 'info5@mail.com',
    group: 'ПИ 3-23 (1-курс)',
    firstName: 'Дмитрий',
    lastName: 'Иванов',
    surName: 'Павлович'
  },
  {
    id: 6,
    idReference: 52,
    email: 'random6@mail.com',
    group: 'ЭЭ 4-20 (3-курс)',
    firstName: 'Сергей',
    lastName: 'Федоров',
    surName: 'Викторович'
  },
  {
    id: 7,
    idReference: 51,
    email: 'user7@mail.com',
    group: 'МЭ 1-21 (2-курс)',
    firstName: 'Артём',
    lastName: 'Павлов',
    surName: 'Владимирович'
  },
  {
    id: 8,
    idReference: 48,
    email: 'student8@mail.com',
    group: 'ЭКО 3-19 (4-курс)',
    firstName: 'Екатерина',
    lastName: 'Смирнова',
    surName: 'Алексеевна'
  },
  {
    id: 9,
    idReference: 53,
    email: 'test9@mail.com',
    group: 'ЭЭ 2-23 (1-курс)',
    firstName: 'Татьяна',
    lastName: 'Кузнецова',
    surName: 'Игоревна'
  },
  {
    id: 10,
    idReference: 54,
    email: 'example10@mail.com',
    group: 'ПИ 2-22 (2-курс)',
    firstName: 'Ирина',
    lastName: 'Михайлова',
    surName: 'Романовна'
  }
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
  