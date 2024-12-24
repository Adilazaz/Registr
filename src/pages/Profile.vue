<template>
  <div class="profile-container">
    <a-card class="profile-card" title="Профиль">
      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-item label="Имя">
          <a-input placeholder="Введите ваше имя" />
        </a-form-item>
        <a-form-item label="Телефон">
          <a-input placeholder="Введите ваш номер телефона" />
        </a-form-item>
        <a-form-item label="Почта">
          <a-input placeholder="Введите вашу почту" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4, span: 14 }">
          <a-button type="primary">Сохранить</a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <a-card class="profile-card" title="Изменение пароля">
      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-item label="Текущий пароль">
          <a-input-password placeholder="Введите текущий пароль" />
        </a-form-item>
        <a-form-item label="Новый пароль">
          <a-input-password placeholder="Введите новый пароль" />
        </a-form-item>
        <a-form-item label="Повторите новый пароль">
          <a-input-password placeholder="Повторите новый пароль" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4, span: 14 }">
          <a-button type="primary">Изменить пароль</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 5px;
}

.profile-card {
  width: 100%;
}

@media (min-width: 1600px) {
  .profile-container {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px;
  }

  .profile-card {
    max-width: 48%;
  }
}
</style>
