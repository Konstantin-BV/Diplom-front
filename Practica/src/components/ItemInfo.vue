<template>
  <div>
    <div class="row row-cols-col2 overflow-hidden">
      <img class="im col-6" src="../assets/comp.svg" />
      <div class="Name_comp col-6">{{ name_item }}</div>
    </div>
    <div class="row row-cols-col2 overflow-hidden">
      <div class="info_div col1">
        <div>Можно задать</div>
        <div class="info_div1">
          <div class="info_chexkbox" v-for="(item, id) in order" :key="id">
            <input
              type="checkbox"
              id="item.id"
              value="item.name"
              v-model="item.check"
            />
            <label for="item.name"> {{ item.name }} </label>
          </div>
        </div>
      </div>
      <div class="info_div">
        <div>Информация</div>
        <div class="info_div1">
          <div class="info_chexkbox">
            <div>
              Отдел кадров - это подразделение в организации, которое занимается
              управлением человеческими ресурсами, включая найм, обучение,
              развитие и увольнение сотрудников. Отдел кадров отвечает за
              создание и поддержание эффективной системы управления персоналом,
              которая включает в себя такие аспекты, как подбор, адаптация,
              оценка и мотивация сотрудников.
            </div>
          </div>
        </div>
      </div>
    </div>
    <button style="width: 44%; margin-left: 1%" class="btn btn-outline-dark">
      Задать
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    name_item: {
      type: String,
      default: null,
    },
    children_item: {
      type: Array,
      default: null,
      required: true,
    },

    id_item: {
      type: Number,
      default: null,
      required: true,
    },
  },
  data: () => ({
    open: false,
    order: [
      {
        id: 1,
        name: "Скачать и установить 1С",
        check: false,
      },
      {
        id: 2,
        name: "Подключится к серверу компании",
        check: false,
      },
      {
        id: 3,
        name: "Настроить 1С",
        check: false,
      },
    ],
    CheckOrder: [],
  }),
};
</script>

<style scoped>
.Main_Info {
  display: flex;
  flex: row;
  margin: 30px;
  align-items: center;
}
.info_div {
  width: 50%;
  display: flex;
  flex: column;
  flex-direction: column;
}

.info_checkbox {
  display: flex;
  flex: column;
  flex-direction: column;
}

.info_div1 {
  margin: 5px;
  display: flex;
  flex: column;
  border: 1px solid black;
  height: 300px;
  flex-direction: column;
}

.im {
  height: 180px;
  width: 240px;
}
.Name_comp {
  margin: 30px;
  font-size: 21pt;
  margin: auto;
}
</style>
