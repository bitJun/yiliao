<template>
  <lay-config-provider
    :themeVariable="appStore.themeVariable"
    :theme="appStore.theme"
  >
    <lay-layout
      :class="[
        appStore.tab ? 'has-tab' : '',
        appStore.collapse ? 'collapse' : '',
        appStore.greyMode ? 'grey-mode' : '',
      ]"
    >
      <!-- 遮盖层 -->
      <div
        v-if="!appStore.collapse"
        class="layui-layer-shade hidden-sm-and-up"
        @click="collapse"
      ></div>
      <lay-layout style="width: 0px">
        <!-- 布局头部 -->
        <lay-header style="display: flex;height: 70px;">
          <lay-menu class="layui-layout-left">
            <lay-menu-item @click="collapse" style="display: flex;align-items: center;height: 70px;">
              <!-- <lay-icon
                v-if="appStore.collapse"
                type="layui-icon-spread-left"
              ></lay-icon>
              <lay-icon v-else type="layui-icon-shrink-right"></lay-icon> -->
              <img
                src="@/assets/images/logo1.png"
                style="height: 40px;margin: 0 30px 0 30px;"
              />
            </lay-menu-item>
            <!-- <lay-menu-item class="hidden-xs-only" @click="refresh">
              <lay-icon type="layui-icon-refresh-one"></lay-icon>
            </lay-menu-item> -->
            <lay-menu-item
              class="hidden-xs-only"
              v-if="appStore.breadcrumb"
              style="padding: 0px 15px"
            >
              <GlobalBreadcrumb></GlobalBreadcrumb>
            </lay-menu-item>
          </lay-menu>
          <!-- 菜单分组 -->
          <!-- <lay-menu
            v-if="(appStore.subfield && appStore.subfieldPosition == 'head')"
            class="layui-nav-center"
            :selectedKey="mainSelectedKey"
            @changeSelectedKey="changeMainSelectedKey"
          >
            <template v-for="(menu, index) in mainMenus" :key="index">
              <lay-menu-item :id="menu.id" v-if="index < 4">
                <template #title>{{ menu.title }}</template>
              </lay-menu-item>
            </template>
          </lay-menu>
          <lay-dropdown v-if="(appStore.subfield && appStore.subfieldPosition == 'head')" trigger="hover" placement="bottom">
            <lay-icon type="layui-icon-more" style="padding: 0px 15px"></lay-icon>
            <template #content>
              <lay-dropdown-menu>
                <template v-for="(menu, index) in mainMenus">
                  <lay-dropdown-menu-item v-if="index >= 4" @click="changeMainSelectedKey(menu.id)">{{ menu.title }}</lay-dropdown-menu-item>
                </template>
              </lay-dropdown-menu>
            </template>
          </lay-dropdown> -->
          <lay-menu class="layui-layout-right">
            <!-- <lay-menu-item>
              <lay-dropdown updateAtScroll placement="bottom">
                <lay-icon type="layui-icon-notice"></lay-icon>
                <template #content>
                  <lay-tab
                    type="brief"
                    style="margin: 5px"
                    v-model="currentIndex"
                  >
                    <lay-tab-item title="选项一" id="1"
                      ><div style="padding: 20px">选项一</div></lay-tab-item
                    >
                    <lay-tab-item title="选项二" id="2"
                      ><div style="padding: 20px">选项二</div></lay-tab-item
                    >
                    <lay-tab-item title="选项三" id="3"
                      ><div style="padding: 20px">选项三</div></lay-tab-item
                    >
                  </lay-tab>
                </template>
              </lay-dropdown>
            </lay-menu-item> -->
            <!-- <lay-menu-item>
              <lay-icon type="layui-icon-website"></lay-icon>
            </lay-menu-item> -->
            <lay-menu-item>
              <lay-dropdown updateAtScroll placement="bottom">
                <div style="color: #ffffff;font-weight: 500;">
                  <img
                    src="https://pic1.zhimg.com/v2-6648be9504f61a206ec125443a2319d6_qhd.jpg?source=7e7ef6e2"
                    style="width: 30px; height: 30px; border-radius: 100px;"
                  />
                  超级管理员
                </div>
                <template #content>
                  <lay-dropdown-menu>
                    <lay-dropdown-menu-item>
                      <template #default>个人中心</template>
                    </lay-dropdown-menu-item>
                    <lay-dropdown-menu-item>
                      <template #default>修改密码</template>
                    </lay-dropdown-menu-item>
                    <lay-line></lay-line>
                    <lay-dropdown-menu-item @click="logOut">
                      <template #default>退出</template>
                    </lay-dropdown-menu-item>
                  </lay-dropdown-menu>
                </template>
              </lay-dropdown>
            </lay-menu-item>
            <lay-menu-item style="margin: 0 20px">
              {{state.nowTimes.year}}年{{state.nowTimes.month}}月{{state.nowTimes.day}}日
              &nbsp;&nbsp;
              星期{{'日一二三四五六'.charAt(new Date().getDay())}}
              &nbsp;&nbsp;
              {{state.nowTimes.hour}}:{{state.nowTimes.min}}
            </lay-menu-item>
            <lay-menu-item>
              <lay-fullscreen v-slot="{ toggle, isFullscreen }">
                <lay-icon
                  @click="toggle()"
                  :type="
                    isFullscreen
                      ? 'layui-icon-screen-restore'
                      : 'layui-icon-screen-full'
                  "
                ></lay-icon>
              </lay-fullscreen>
            </lay-menu-item>
            <!-- <lay-menu-item @click="changeVisible">
              <lay-icon type="layui-icon-more-vertical"></lay-icon>
            </lay-menu-item> -->
          </lay-menu>
        </lay-header>
        <lay-body>
          <!-- 内容区域 -->
          <global-content></global-content>
          <!-- 多选项卡 -->
          <!-- <div class="display:flex">
            <div>
              <lay-dropdown placement="right-start" updateAtScroll>
                <lay-button type="primary">right-start</lay-button>
                <template #content>
                  <div style="width:300px;height:200px;"></div> 
                </template>
              </lay-dropdown>
            </div>
            <div style="flex: 1">
              <global-tab></global-tab>
            </div>
          </div> -->
          <global-tab></global-tab>
        </lay-body>
        <lay-footer></lay-footer>
      </lay-layout>
    </lay-layout>
    <global-setup v-model="visible"></global-setup>
  </lay-config-provider>
</template>

<script lang="ts">
import { computed, onMounted, ref, reactive } from "vue";
import { useAppStore } from "../store/app";
import { useUserStore } from "../store/user";
import GlobalSetup from "./Global/GlobalSetup.vue";
import GlobalContent from "./Global/GlobalContent.vue";
import GlobalBreadcrumb from "./Global/GlobalBreadcrumb.vue";
import GlobalTab from "./Global/GlobalTab.vue";
import GlobalMenu from "./Global/GlobalMenu.vue";
import GlobalMainMenu from "./global/GlobalMainMenu.vue";
import { useRouter } from "vue-router";
import { useMenu } from "./composable/useMenu";

export default {
  components: {
    GlobalSetup,
    GlobalContent,
    GlobalTab,
    GlobalMenu,
    GlobalBreadcrumb,
    GlobalMainMenu,
  },
  setup() {
    const state = reactive({
      nowTimes:{
        year: 0,
        month: 0,
        day: "00",
        hour: "00",
        min: "00",
        sec: "00"
      },
      setTime:null
    })
    const appStore = useAppStore();
    const userInfoStore = useUserStore();
    const fullscreenRef = ref();
    const visible = ref(false);
    const sideWidth = computed(() =>
      appStore.collapse ? "60px" : (appStore.subfield && appStore.subfieldPosition == 'side') ? "280px" : "220px"
    );
    const router = useRouter();
    const {
      selectedKey,
      openKeys,
      changeOpenKeys,
      changeSelectedKey,
      menus,
      mainMenus,
      mainSelectedKey,
      changeMainSelectedKey,
    } = useMenu();
    onMounted(() => {
      if (document.body.clientWidth < 768) {
        appStore.collapse = true;
      }
      // userInfoStore.loadMenus();
      // userInfoStore.loadPermissions();
      state.setTime = setInterval( ()=>{
        setNowTimes();
      },1000)
    });

    const changeVisible = function () {
      visible.value = !visible.value;
    };

    const currentIndex = ref("1");

    const collapse = function () {
      appStore.collapse = !appStore.collapse;
    };

    const refresh = function () {
      appStore.routerAlive = false;
      setTimeout(function () {
        appStore.routerAlive = true;
      }, 500);
    };

    const logOut = () => {
      const userInfoStore = useUserStore();
      userInfoStore.token = "";
      userInfoStore.userInfo = {};
      router.push("/login");
    };
    const setNowTimes = () => {
      let myDate = new Date();
      state.nowTimes.year = myDate.getFullYear();
      state.nowTimes.month = myDate.getMonth()+1;
      state.nowTimes.day = String(myDate.getDate()<10?'0'+ myDate.getDate(): myDate.getDate()) ;
      state.nowTimes.hour = String(myDate.getHours()<10?"0"+myDate.getHours():myDate.getHours());
      state.nowTimes.min = String(myDate.getMinutes()<10?'0'+myDate.getMinutes():myDate.getMinutes());
      state.nowTimes.sec = String(myDate.getSeconds()<10?'0'+myDate.getSeconds():myDate.getSeconds());
    }
    return {
      sideWidth,
      changeVisible,
      fullscreenRef,
      collapse,
      appStore,
      refresh,
      visible,
      logOut,
      userInfoStore,
      currentIndex,
      selectedKey,
      openKeys,
      changeOpenKeys,
      changeSelectedKey,
      menus,
      mainMenus,
      mainSelectedKey,
      changeMainSelectedKey,
      state
    };
  },
};
</script>

<style>
@media screen and (max-width: 767px) {
  .layui-side {
    position: absolute;
    height: 100vh;
  }
}

/*鼠标经过背景色，增加了improtant，否则设置无效*/
.layui-header .layui-nav-item .layui-icon:hover {
  background: whitesmoke !important;
}
/*面包屑颜色兼容*/
.layui-header .layui-nav-item .layui-breadcrumb a {
  color: #999 !important;
}
.layui-header .layui-nav-item .layui-breadcrumb a:nth-last-child(2) {
  color: #666 !important;
}
/*图标默认颜色修复，指定 .layui-icon 去掉improtant，否则无法设置图标其他颜色*/
.layui-header .layui-nav-item .layui-icon {
  color: #666;
}
/*取消默认a标签的padding:0 20px，否则扩大图标后容器变形*/
.layui-header .layui-nav-item > a {
  padding: 0 !important;
}
/*扩大图标尺寸与所在容器大小一致，默认大小导致鼠标必须点击图标才能触发事件效果*/
.layui-header .layui-nav-item .layui-icon {
  height: 50px;
  padding: 20px;
}
/*增加鼠标经过图标时改变图标颜色，颜色为当前系统主题色*/
.layui-header .layui-nav-item .layui-icon:hover {
  color: var(--global-primary-color) !important;
}
.grey-mode {
  filter: grayscale(1);
}
.side-menu-wrapper {
  width: 100%;
  display: flex;
  height: 100%;
}
.side-menu1 {
  width: 60px;
  flex: 0 0 60px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.light .side-menu1 {
  border-right: 1px solid whitesmoke;
}
.side-menu2 {
  flex: 1;
}
</style>
