<template>
  <li :class="[isFolder ? 'folder' : 'file']">
    <label :class="{ open: open }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">{{ isFolder ? model.children.length : "" }}</span>
    </label>
    <ul v-show="open" v-if="isFolder" :class="{ open: open }">
      <item
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      >
      </item>
      <li class="add" @click="addChild"><label>Add New Item</label></li>
    </ul>
  </li>
</template>
