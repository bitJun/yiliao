<template>
  <div class="login-bg">
    <div>
      <img src="@/assets/images/bg-login-head.png" class="login-bg-head" />
      <img src="@/assets/images/bg-login-foot.png" class="login-bg-foot" />
    </div>
    <div class="login-main layui-container">
      <div class="layui-row">
        <div class=" layui-col-xs12 login-header">
          <span class="login-title">北京协和医院手术室清洁系统</span>
        </div>
      </div>
      <div class="login-container">
        <lay-row style="width: 100%">
          <lay-col md="12" class="login-side">
            <img src="@/assets/images/bg-login-body.png" class="w-full" />
          </lay-col>
          <lay-col md="12">
            <div class="login-content">
              <lay-tab v-model="current1">
                <lay-tab-item title="账号登录" id="1">
                  <div style="padding: 30px 0">
                    <div style="margin-bottom: 10px;">
                      <lay-input
                        prefix-icon="layui-icon-friends"
                        v-model="loginForm.account"
                        type="text"
                        aria-placeholder="请输入用户名"
                      ></lay-input>
                    </div>  
                    <div style="margin-bottom: 10px;">
                      <lay-input
                        prefix-icon="layui-icon-password"
                        v-model="loginForm.password"
                        type="password"
                        aria-placeholder="请输入密码"
                      ></lay-input>
                    </div>
                    <div style="margin-bottom: 10px;">
                      <lay-input
                        prefix-icon="layui-icon-password"
                        v-model="loginForm.code"
                        type="text"
                        aria-placeholder="请输入验证码"
                      >
                        <template #suffix>
                          <img
                            class="login-code"
                            :src="state.codeImg"
                            @click="getImg()"
                          />
                        </template>
                      </lay-input>
                    </div>
                    <div style="margin-bottom: 10px;">
                      <a class="forgetpwd">忘记密码</a>
                    </div>
                  </div>
                  <lay-button
                    type="primary"
                    style="width: 100%"
                    @click="loginSubmit()"
                  >
                    立即登录
                  </lay-button>
                </lay-tab-item>
                <lay-tab-item title="免密登录" id="2">
                  <div style="padding: 30px 0">
                    <div style="margin-bottom: 10px;">
                      <lay-input
                        prefix-icon="layui-icon-friends"
                        v-model="loginForm.account"
                        type="text"
                        aria-placeholder="请输入用户名"
                      ></lay-input>
                    </div>  
                    <div style="margin-bottom: 10px;">
                      <lay-input
                        prefix-icon="layui-icon-password"
                        v-model="loginForm.password"
                        type="text"
                        aria-placeholder="请输入短信验证码"
                      >
                        <template #suffix>
                          <lay-button type="primary" style="width: 106px">发送验证码</lay-button>
                        </template>
                      </lay-input>
                    </div>
                  </div>
                  <lay-button type="primary" style="width: 100%">立即登录</lay-button>
                </lay-tab-item>
              </lay-tab>
            </div>
          </lay-col>
        </lay-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { login } from '../../api/module/user';
import { defineComponent, reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '../../store/user';
import { layer } from "@layui/layer-vue";
import {
  getCodeImg,
  login
} from '@/apis/login';
import { setToken } from '@/utils/auth';
import md5 from 'md5';
const current1 = ref("1");
const router = useRouter();
const userStore = useUserStore();
const method = ref("1");
const remember = ref(false);
const loginForm = reactive({account:"admin",password:"admin123", code: "", uuid: ''});
const state = reactive({
  codeImg: '',
  uuid: ''
})
onMounted(()=>{
  getImg();
})
// const loginSubmit = async () => {
//   router.push('/');
//   let params = {...loginForm};
//   params["password"] = md5(params["password"]);
//   let { data, code, msg } = await login(loginForm);
//   if (code == 200) {
//     layer.msg(msg, { icon: 1 }, async () => {
//       userStore.token = data.token;
//       await userStore.loadMenus();
//       await userStore.loadPermissions();
//       router.push('/');
//     })
//   } else {
//     layer.msg(msg, { icon: 2 })
//   }
// }
const getImg = () => {
  getCodeImg()
    .then(res=>{
      state.codeImg = "data:image/gif;base64," + res.img;
      console.log('state.codeImg', state.codeImg)
      loginForm.uuid = res.uuid;
    })
}
const loginSubmit = () => {
  let params = {...loginForm};
  params["password"] = md5(params["password"]);
  login(loginForm.account, loginForm.password, loginForm.code, loginForm.uuid)
    .then(res=>{
      if (res.code == 200) {
        setToken(res.token);
        router.push('/');
      }
    })
    .catch(err=>{
      getImg();
    })
}
</script>
<style>
  body {
    background: #189577;
  }
</style>
<style lang="less" scoped>
  @import './index.less';
</style>
