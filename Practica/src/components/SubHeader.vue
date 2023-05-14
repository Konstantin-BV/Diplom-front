<script setup></script>

<template>
  <div class="SubHeader">
    <div class="SubHeader__sub-header">
      <div class="SubHeader__sub-header_title">
        <div class="SubHeader__sub-header_title_text">
          Как наш сайт поможет вашей компании
        </div>
        <div class="SubHeader__icons">
          <div class="SubHeader__icon_button" style="border-radius: 40px">
            <button
              class="btn btn-light SubHeader__icon"
              type="button"
              style="border-radius: 60px; height: 80px; width: 80px"
            >
              <img style="height: 40px" src="../assets/tv.svg" />
            </button>
            <div class="text">Лёгкая раздача заданий</div>
          </div>
          <div class="SubHeader__icon_button" style="border-radius: 40px">
            <button
              class="btn btn-light SubHeader__icon"
              type="button"
              style="border-radius: 60px; height: 80px; width: 80px"
            >
              <img style="height: 40px" src="../assets/card-checklist.svg" />
            </button>
            <div class="text">Пошаговые выполнение заданий</div>
          </div>
          <div class="SubHeader__icon_button" style="border-radius: 40px">
            <button
              class="btn btn-light SubHeader__icon"
              type="button"
              style="border-radius: 60px; height: 80px; width: 80px"
            >
              <img style="height: 40px" src="../assets/folder.svg" />
            </button>
            <div class="text">Рассылка файлов с заданиями</div>
          </div>
          <div class="SubHeader__icon_button" style="border-radius: 40px">
            <button
              class="btn btn-light SubHeader__icon"
              type="button"
              style="border-radius: 60px; height: 80px; width: 80px"
            >
              <img style="height: 40px" src="../assets/chat-left-dots.svg" />
            </button>
            <div class="text">Лёгкое общение</div>
          </div>
          <!-- <button
            class="btn btn-light me-2 SubHeader__icon col"
            style="border-radius: 40px; height: 60px; width: 60px"
            type="button"
          >
            <img style="height: 30px" src="../assets/tv.svg" />
          </button>
          <button
            class="btn btn-light me-2 SubHeader__icon col"
            style="border-radius: 40px; height: 60px; width: 60px"
            type="button"
          >
            <img style="height: 30px" src="../assets/chat-left-dots.svg" />
          </button>
          <button
            class="btn btn-light me-2 SubHeader__icon col"
            style="border-radius: 40px; height: 60px; width: 60px"
            type="button"
          >
            <img style="height: 30px" src="../assets/folder.svg" />
          </button> -->

          <!-- <div class="SubHeader__sub-header_title_button_enter">Начать</div>
          <div class="SubHeader__sub-header_title_button_again-enter">
            У меня уже есть аккаунт card-checklist
          </div> -->
        </div>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(https://images.wallpaperscraft.ru/image/single/noutbuk_kod_programmirovanie_212332_1920x1080.jpg);
  height: 700px;
  align-items: center;
  justify-content: center;
}
.SubHeader__sub-header_title {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.SubHeader__icons {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px;
}

.SubHeader__sub-header_title_text {
  text-align: center;
  color: white;
  font: 40px sans-serif;
  font-weight: bold;
}
.SubHeader__icon {
  margin-right: 0;
  margin-left: 0;
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
  font: 20px sans-serif;
  font-weight: bold;
}
.SubHeader__language-selection_item_image {
  margin: 0 10px 0 0;
  height: 28px;
  width: 36px;
}
.SubHeader__icon_button {
  margin: auto;
  margin-top: 0;
  text-align: center;
  width: 80px;
}
.SubHeader__icon_button .text {
  opacity: 0;
}

.SubHeader__icon_button:hover .text {
  opacity: 1;
  color: white;
  line-height: 1.5;
  font: 16px sans-serif;
  font-weight: bold;
}
</style>
