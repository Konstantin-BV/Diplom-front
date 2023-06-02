<script setup>
import Header from "../components/SubHeader.vue";
</script>

<template>
  <div>
    <Header />
    <div>
      <div class="w-100 content_main h-40">
        <div class="left_text">
          На нашем сайты вы можете зарегистрировать сових сотрудников и
          разделить их на отделы и подотделы. Назначте администраторов и они
          будут раздовать задания по безопасности устройств ваших сотрудников.
          Таким образрм администраторы могут легко раздавать задания своим
          сотрудникам или сразу целым отделам своей компании. Никаких сторонних
          приложений, собирающих данные, устанавливать не надо. Всю информацию
          предоставят ваши сотрудники,
        </div>
        <div class="">
          <img style="max-height: 300px" src="../assets/Works2.svg" />
        </div>
      </div>
    </div>
    <div>
      <div class="w-100 content_main h-40">
        <div class="">
          <img style="max-height: 300px" src="../assets/Steps.svg" />
        </div>
        <div class="left_text">
          Каждое задание рассписано на лёгкие и понятные шаги. Таким образом,
          что даже далёкий от настройки оборудования люди смогут выполнить
          задачи, просто поэтапно следуя инструкции. Администратор со своего
          аккаунта, видит какие шаги сотрудник успел сделать, а какие нет.
        </div>
      </div>
    </div>
    <div class="w-100 content_main h-40">
      <div class="left_text">
        Выданные задания дублируются в файлах, которые могут скачать сотрудники
        компании. Таким образом они могут выполнять задания в свободное время и
        без подключения интернета.
      </div>
      <div class="">
        <img style="max-height: 300px" src="../assets/file.svg" />
      </div>
    </div>
    <div class="w-100 content_main h-40" style="margin-bottom: 40px">
      <div class="">
        <img style="max-height: 300px" src="../assets/ask.svg" />
      </div>
      <div class="left_text">
        Если у сотрудника всё же есть проблемы по выполнению, под каждым шагом
        можно оставить вопрос, который увидит администратор, выдавший задание.
        Благодаря чему администратор легко ответит на вопросы любого сотрудника
        и поможет с выполнением задания.
      </div>
    </div>
  </div>
</template>

<style scoped>
.content_main {
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 40px;
  display: flex;
  flex: row;
}

.left_text {
  color: black;
  font: 20px sans-serif;
  line-height: 2;
  margin: 20px;
  width: 50%;
}
</style>
