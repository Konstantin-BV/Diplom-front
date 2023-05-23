<template>
  <div>
    <div class="Text_Name">
      <label for="inputEmail4" class="form-label"
        >Введите название задания</label
      >
      <input
        type="email"
        class="form-control"
        id="inputEmail4"
        placeholder="Введите название"
        v-model="form.tiile"
      />
    </div>
    <div>
      <div>
        <div v-for="(item, id) in form.children" :key="id" class="Main_div">
          <div class="Name_Step">Шаг №{{ id + 1 }}</div>
          <div class="Condition_Text">
            <div class="Text_Task">
              <label for="inputEmail4" class="form-label"
                >Введите пояснения к шагу</label
              >
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                style="width: 130%"
                placeholder="Введите пароль"
                v-model="item.tiile"
              />
            </div>
          </div>
        </div>
        <div class="Ask_Button">
          <button
            @click="AddChildren()"
            class="Button_Text_Ask btn btn-outline-dark"
            style="width: 97%"
          >
            Создать новый шаг
          </button>
        </div>
      </div>
    </div>
    <button
      @click="asdzzzz()"
      class="Button_Text_Ask btn btn-outline-dark"
      style="width: 97%; margin: 15px;"
    >
      Сохранить задание
    </button>
  </div>
</template>

<script>
export default {
  name: "center-menu",
  props: {
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
    condition: {
      type: Number,
      default: null,
      required: true,
    },
  },
  data: () => ({
    open: false,
    ask: "",
    count: 0,
    title: "1qw",
    form: {
      title: "",
      children: [],
    },
  }),

  methods: {
    AddChildren() {
      this.form.children.push({ id: this.count++ });
    },
    asdzzzz() {
      console.log(this.form);
    },
  },
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
