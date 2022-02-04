<template>
  <ul class="vue-simple-menu">
    <li
      v-for="item in menu"
      :key="item.id"
      class="vue-simple-menu__item"
      :class="{
        'vue-simple-menu__item_expand': item.expand,
        expanded: item.expanded,
      }"
    >
      <span
        class="vue-simple-menu__title"
        @click="expandTrigger(item)"
        :class="{ 'vue-simple-menu__title_not_expand': !item.expand }"
        >{{ item.name }}</span
      >

      <div v-if="item.children" class="vue-simple-menu__child">
        <CollapseItem :menu="item.children"></CollapseItem>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CollapseItem",
  props: {
    menu: {
      required: true,
      type: Array,
    },
  },
  methods: {
    /* Show/Hide sub items */
    expandTrigger(item) {
      if (item.expand) item.expanded = !item.expanded;
    },
  },
};
</script>

<style scoped lang="scss">
.vue-simple-menu {
  line-height: 1.2;
  padding: 20px 0 0 0;
  grid-area: items;
  margin-left: -10px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.vue-simple-menu__title {
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: block;
  color: black;
  cursor: pointer;
}

.vue-simple-menu__item {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-bottom: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
}

.vue-simple-menu__child {
  padding-left: 10px;
}

.vue-simple-menu__title_not_expand:before {
  content: "•";
  margin: auto;
  position: relative;
  left: -25px;
  color: black;
  transition: transform 0.3s ease;
}

.vue-simple-menu__item_expand {
  /* Change dropdown icon */
  & > .vue-simple-menu__title:before {
    content: "▶";
    margin: auto;
    position: relative;
    left: -25px;
    color: black;
    transition: transform 0.3s ease;
  }

  &.expanded > .vue-simple-menu__title:before {
    content: "▼";
  }

  /* Show/Hide sub items */
  & > .vue-simple-menu__child {
    display: none;
  }

  &.expanded > .vue-simple-menu__child {
    display: block;
  }
}
</style>
