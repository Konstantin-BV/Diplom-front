<template>
  <div class="h-100 w-100 row">
    <div class="d_i_v">
      <img class="header__logo" src="../assets/12.svg" />
      <div>
        <label for="inputEmail4" class="form-label">{{ id_item }}</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Введите имя"
          v-model="name"
        />
      </div>
      <button class="butt btn btn-outline-dark btn-sm" @click="register">
        Создать
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor

    id_item: {
      type: Number,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      id: null,
    };
  },
  methods: {
    register: function () {
      let data = {
        form: {
          title: this.name,
          company_id: String(this.$store.state.Company.id),
        },
        form2: {
          title: this.name,
          company_id: String(this.$store.state.Company.id),
          parent_id: this.id_item,
        },
      };
      console.log(this.$store.getters.getToken);
      console.log(data);
      if (this.id_item == null) {
        this.$store
          .dispatch("CreateDiportament", data.form)
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
      } else {
        this.$store
          .dispatch("CreateDiportament", data.form2)
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped>
.header__logo {
  border: none;
  background: transparent;
  font-size: 16px;
  height: 80px;
  cursor: pointer;
}

.d_i_v {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-left: 15px;
}

.inp {
  width: 300px;
  align-self: center;
  margin-top: 30px;
  height: 30px;
}

.butt {
  width: 300px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 30px;
}
</style>
