<script setup></script>

<template>
  <div class="SubHeader">
    <div class="SubHeader__sub-header">
      <div class="SubHeader__sub-header_image">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg"
        />
      </div>
      <div class="SubHeader__sub-header_title">
        <div class="SubHeader__sub-header_title_text">
          Учите языки бесплатно, весело и эффективно!
        </div>
        <div class="SubHeader__sub-header_title_button_enter">Начать</div>
        <div class="SubHeader__sub-header_title_button_again-enter">
          У меня уже есть аккаунт
        </div>
      </div>
    </div>
    <div class="SubHeader__language-selection">
      <div
        class="SubHeader__language-selection_item"
        v-for="item in language_array"
        :key="item.id"
      >
        <img class="SubHeader__language-selection_item_image" :src="item.img" />
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content1",
  data: () => ({
    language_array: [
      {
        id: "1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/640px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
        text: "Английский",
      },
      {
        id: "2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/250px-Flag_of_Spain.svg.png",
        text: "Испанскй",
      },
      {
        id: "3",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/250px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png",
        text: "Французкий",
      },
      {
        id: "4",
        img: "https://www.flagistrany.ru/data/flags/ultra/de.png",
        text: "Немецкий",
      },
    ],
  }),
};
</script>

<style scoped>
.SubHeader__sub-header {
  display: flex;
  background: #235390;
  background-image: url(https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg);
  height: 700px;
  align-items: center;
  justify-content: center;
}
.SubHeader__sub-header_title {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 720px;
}
.SubHeader__sub-header_title_text {
  text-align: center;
  color: white;
  font: 40px sans-serif;
  font-weight: bold;
}
.SubHeader__sub-header_title_button_enter {
  display: flex;
  font-family: Bradley Hand, cursive;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 70px;
  border-radius: 20px;
  background: rgb(5, 232, 5);
  color: white;
  margin: 11px 16px;
  font: 26px sans-serif;
  font-weight: bold;
}
.SubHeader__sub-header_title_button_again-enter {
  display: flex;
  font-family: Bradley Hand, cursive;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 70px;
  border-radius: 20px;
  background: #235390;
  color: white;
  margin: 11px 16px;
  font: 26px sans-serif;
  border: 6px solid #0a4a82;
  font-weight: bold;
}
.SubHeader__language-selection {
  display: flex;
  background: #0a4a82;
  height: 80px;
  align-items: center;
  justify-content: center;
}
.SubHeader__language-selection_item {
  display: flex;
  color: white;
  margin: 10px;
  font: 20px sans-serif;
  font-weight: bold;
}
.SubHeader__language-selection_item_image {
  margin: 0 10px 0 0;
  height: 28px;
  width: 36px;
}
</style>
