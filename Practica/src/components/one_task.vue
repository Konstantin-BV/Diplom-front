<template>
  <div>
    <div @click="open = !open" class="Text_Name">Шаг №{{ id }}</div>
    <div>
      <div v-if="open">
        <div class="Condition_Text">
          <div class="Radio_Buttons">
            <input type="radio" value="0" v-model="ddd" />
            <label>Не сделано</label>
            <br />
            <input type="radio" value="1" v-model="ddd" />
            <label>Вопрос</label>
            <br />
            <input type="radio" value="2" v-model="ddd" />
            <label>Сделано</label>
          </div>
          <div class="Text_Task">
            {{ main_text }}
          </div>
        </div>
        <div v-if="ddd == 1" class="Ask_Button">
          <input v-model="ask" placeholder="Введите вопрос" class="Text_Ask" />
          <button class="Button_Text_Ask btn btn-outline-dark">
            Отправить вопрос
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center-menu",
  props: {
    main_text: {
      type: String,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    id: {
      type: Number,
      default: null,
      required: true,
    },
    statu: {
      type: Number,
      default: null,
      required: true,
    },
  },
  data: () => ({
    open: false,
    ddd: 1,
    ask: "",
  }),
};
</script>

<style>
.Text_Name {
  font-size: 21pt;
  margin: auto;
}

.Name_Step {
  font-size: 16pt;
  margin-left: 46%;
}

.Main_div {
  margin: 15px;
}

.Radio_Buttons {
  width: 100px;
}

.Condition_Text {
  display: flex;
  flex: row;
}

.Text_Task {
  margin-left: 15px;
  width: 920px;
}

.Ask_Button {
  min-height: 35;
  margin-left: 15px;
  margin-top: 15px;
}

.Text_Ask {
  width: 80%;
  height: 35px;
}

.Button_Text_Ask {
  width: 15%;
  height: 35px;
  margin-left: 10px;
}
</style>
