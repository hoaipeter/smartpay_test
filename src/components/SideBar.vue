<template>
  <div id="sidebar">
    <CollapseItem :menu="list" />
  </div>
</template>

<script>
import CollapseItem from "@/components/CollapseItem";
import BACKEND_DATA from "@/data";

export default {
  name: "SideBar",
  components: {
    CollapseItem,
  },
  props: {
    source: {
      type: Array,
      default: () => BACKEND_DATA,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    if (this.source) {
      this.list = this.generateBranch(this.source);
    }
  },
  watch: {
    source() {
      this.list = this.generateBranch(this.source);
    },
  },
  methods: {
    /**
     * generateBranch - recursive function for generate menu branch
     *
     * @param  {array} menuBranch branch menu for precessing
     * @return {array} complete menu data
     */
    generateBranch(menuBranch) {
      return menuBranch.reduce((acc, item) => {
        let menuItem = { ...item };

        if (menuItem.children)
          menuItem.children = this.generateBranch(menuItem.children);

        if (menuItem.children && !menuItem.uri) {
          menuItem.expand = true;
          menuItem.expanded =
            typeof menuItem.expanded === "boolean" ? menuItem.expanded : false;
        }
        return acc.concat(menuItem);
      }, []);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

#sidebar {
  background: linear-gradient(#2595ec, #64dd17);
  top: 0;
  left: 0;
  width: 275px;
  height: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: 45px 200px;
  grid-template-areas: ". items . ";
  font-weight: bold;
  overflow: auto;
}
</style>
