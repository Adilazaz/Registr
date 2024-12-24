<template>
  <!-- Модальное окно -->
  <a-modal 
    v-model:open="open" 
    :title="selectedName" 
    centered 
    @ok="handleOk"
    :ok-button-props="{ disabled: !checked }"
  >
  <p>Отправить заявление для справки полученя {{ selectedName }}</p>
  <a-checkbox v-model:checked="checked">Подтверждаю</a-checkbox>
  </a-modal>

  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-if="column.dataIndex === 'btn'">
        <a-button type="primary" @click="handleGenerate(record)">
          {{ text }}
        </a-button>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'

// Переменные состояния
const open = ref(false);
const selectedKey = ref(null);  
const selectedName = ref('');  
const checked = ref(false);
const userData = ref(JSON.parse(localStorage.getItem('userInfo')))
const store = useStore()


// Определение столбцов
const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
  },
  {
    title: 'Название',
    dataIndex: 'name',
  },
  {
    title: 'Действие',
    dataIndex: 'btn',
  },
];

// Данные справок
const data = [
  { key: '1', name: 'Справка для военкомата', btn: 'Сформировать' },
  { key: '2', name: 'Справка по месту требования', btn: 'Сформировать' },
  { key: '3', name: 'Справка для работы ', btn: 'Сформировать' },
];

// Открытие модалки и передача данных
const handleGenerate = (record) => {
  selectedKey.value = record.key;   // Сохраняем key выбранной справки
  selectedName.value = record.name; // Сохраняем название для заголовка
  open.value = true;                // Открываем модалку
};

const handleOk = async (selectedKey) => {
  try {
    await store.dispatch('reference/postReference', {Reference: selectedKey, user: userData.value.id});
    
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
  open.value = false;
};
</script>

<style scoped></style>
