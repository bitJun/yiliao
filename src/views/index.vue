<template>
  <div class="index_view">
    <!-- admin -->
    <div class="map-container" data-user="admin">
      <div>
        <a class="map-cell bg-linear" href="javascript:;" lay-text="用户管理">
          <i class="app-icon ico60 ico60-patient"></i>
          <span>设备配置</span>
        </a>
        <a class="map-cell bg-linear" href="javascript:;" lay-text="用户管理">
          <i class="app-icon ico60 ico60-patient"></i>
          <span>用户管理</span>
        </a>
        <a class="map-cell bg-linear" href="javascript:;" lay-text="清洁系统">
          <i class="app-icon ico60 ico60-meet"></i>
          <span>清洁系统</span>
        </a>
        <a class="map-cell bg-linear" href="javascript:;" lay-text="示教系统">
          <i class="app-icon ico60 ico60-doctor"></i>
          <span>示教系统</span>
        </a>
        <a class="map-cell bg-linear" href="javascript:;" lay-text="行为管理系统">
          <i class="app-icon ico60 ico60-doctor"></i>
          <span>行为管理系统</span>
        </a>
        <a class="map-cell bg-linear" href="javascript:;" lay-text="操作日志">
          <i class="app-icon ico60 ico60-doctor"></i>
          <span>操作日志</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.index_view {
  background-image: url('../assets/images/bg-home.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 50px);
}
.map-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.map-cell {
  display: inline-flex;
  margin: 30px;
  border: solid 3px white;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  transition: 0.2s;
}
.bg-linear {
  background-image: linear-gradient(#81cfcf, #25c1a5);
}
</style>
