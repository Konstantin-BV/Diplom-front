<template>
  <div class="Main_class">
    <div class="Main_div_con4">
      <Tasks
        v-for="(item, id) in children"
        v-bind="item"
        :key="id"
        class="Main_div_con5"
      />
    </div>
  </div>
</template>

<script>
import Tasks from "../components/Tasks.vue";
export default {
  components: { Tasks },
  data: () => ({
    open: false,
    form_item: {
      name_item: "dd",
      id_item: 1,
      children_item: [],
    },
    children: [
      {
        task_id: 1,
        name: "Владимир Фёдорович Степанов",
        task_title: "Установить 1С",
        status_id: 1,
        time: "18.05.2023",
        children: [
          {
            task_id: 1,
            status_id: 2,
            task_title:
              "Перед началом установки убедитесь, что у вас есть все необходимые системные требования для запуска программы 1С. Уточните эти требования на официальном сайте 1С или в документации, поставляемой с программным продуктом.",
            condition: 0,
          },
          {
            task_id: 2,
            status_id: 1,
            task_title:
              "Перейдите на официальный сайт 1С или на сайт вашего поставщика программного обеспечения, который предлагает продукты 1С. Обычно на сайте есть разделы для загрузки программных продуктов. Найдите соответствующую версию 1С, которую вы хотите скачать, и следуйте инструкциям для скачивания.",
            condition: 0,
            ask: [
              {
                id: 1,
                time: "18.05.2023 22:00",
                name: "Владимир Фёдорович Степанов",
                id_user: 1,
                ask: "Не получается зайти на сайт, на другие сайты заходит",
              },
              {
                id: 1,
                time: "18.05.2023 22:11",
                name: "Валентин Васильевич Романов",
                id_user: 2,
                ask: "Подождите некоторое время и попробуйте снова",
              },
            ],
          },
          {
            task_id: 3,
            status_id: 0,
            task_title:
              "После завершения скачивания дважды щелкните на загруженном файле установки программы 1С. Запустится процесс установки, и вам будут представлены различные опции и настройки, которые вы можете настроить в соответствии с вашими потребностями. Следуйте инструкциям на экране и выберите необходимые",
            condition: 0,
          },
          {
            task_id: 2,
            status_id: 0,
            task_title:
              "При установке программы 1С вам могут потребоваться лицензионные ключи или файлы лицензий. Убедитесь, что у вас есть соответствующие лицензии или обратитесь к поставщику программного обеспечения для получения необходимой информации и файлов лицензий. В процессе установки вас могут попросить ввести ключ или указать путь к файлу лицензии.",
            condition: 0,
          },
          {
            task_id: 2,
            status_id: 0,
            ask_title:
              "После завершения настройки параметров установки и ввода необходимых лицензий процесс установки программы 1С будет завершен. Обычно будет предложено перезагрузить компьютер для применения изменений.",
            condition: 0,
          },
        ],
      },
      {
        task_id: 2,
        name: "Василиса Ярославовна Петрова",
        task_title: "Настроить 1С",
        status_id: 2,
        time: "18.05.2023",
        children: [
          {
            status_id: 2,
            task_id: 1,
            task_title: "шаг 1",
          },
          {
            status_id: 2,
            task_id: 2,
            task_title: "шаг 2",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
.Main_class {
  display: flex;
  flex-direction: row;
  justify-self: start;
  width: 100%;
}

.Main_div_con5 {
  display: flex;
  justify-self: start;
  flex-direction: column;
  margin: 30px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 20px;
}

.Main_div_conn2 {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;
  border: 1px solid black;
  height: 700px;
}

.Main_div_con4 {
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 700px;
  width: 100%;
}
</style>
