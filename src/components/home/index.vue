<template>
  <div>
    <div>
      <el-menu :default-active="0" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <template v-for="(item, index) in topMenu">
          <el-menu-item :index="index" v-bind:key="item.tableId">{{item.nodeName}}</el-menu-item>
        </template>
      </el-menu>
    </div>
    <div style="width: 200px">
      <el-menu
        default-active="-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="(item, index) in leftMenu">
          <el-submenu :index="index" v-bind:key="item.tableId">
            <template slot="title">
              <span>{{item.nodeName}}</span>
            </template>
            <template v-for="(childItem, childIndex) in item.childList">
              <el-menu-item :index="childIndex" v-bind:key="childItem.tableId">{{childItem.nodeName}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>

export default {
  'name': 'index',
  'data' () {
    return {
      'topMenu': [],
      'leftMenu': []
    }
  },
  'methods': {
    'handleSelect' (key, keyPath) {
      this.getLeftTree(this.topMenu[key].tableId)
    },
    'getMenuTree' (parentId) {
      this.$store.dispatch('getMenuTree', parentId).then((data) => {
        if (data && data.code === 200) {
          this.topMenu = data.data
          if (this.topMenu && this.topMenu.length > 0) {
            this.getLeftTree(this.topMenu[0].tableId)
          }
        }
      }
      ).catch(() => {

      }
      )
    },
    'getLeftTree' (parentId) {
      this.$store.dispatch('getMenuTree', parentId).then((data) => {
        if (data && data.code === 200) {
          this.leftMenu = data.data
        }
      }
      ).catch(() => {

      }
      )
    }
  },
  'mounted' () {
    this.getMenuTree(0)
  }
}
</script>
