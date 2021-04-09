<template>
  <div class="notf">
    <div class="text_notf">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
      required: true,
    },
  },
}
</script>
<style scoped>
div.notf {
  width: 300px;
  height: 66px;
  font-weight: bold;
  position: fixed;
  bottom: 0%;
  right: 0;
  margin: 2%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 0 20px;
  background: #fff;
  color: red;
  box-shadow: rgba(0, 0, 0, 0.205) 0 0 5px 1px;
  cursor: pointer;
}
</style>
