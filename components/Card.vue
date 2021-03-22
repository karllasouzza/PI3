<template>
  <div class="card" :style="{ background: background, color: color }">
    <div class="User">
      <div class="userImg" :style="{ 'background-image': userImage }"></div>
      <div class="iUser">
        <span class="userName">{{ userName }}</span>
        <span class="postTime">{{ postTime }}</span>
      </div>
    </div>
    <span class="txt">{{ cardText }}</span>
    <div class="btn">
      <div>
        <span class="counter"><Love /></span>{{ cntLove }}
      </div>
      <div>
        <span class="counter"><Favorite /></span>{{ cntFav }}
      </div>
      <div>
        <span class="counter"><Comment /></span>{{ cntCmt }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // user
    userImage: {
      type: String,
      default: null,
      required: true,
    },
    userName: {
      type: String,
      default: null,
      required: true,
    },
    // post
    postTime: {
      type: String,
      default: null,
      required: true,
    },
    cardText: {
      type: String,
      default: null,
      required: true,
    },
    // contadores
    cntCmt: {
      type: Number,
      default: null,
      required: true,
    },
    cntFav: {
      type: Number,
      default: null,
      required: true,
    },
    cntLove: {
      type: Number,
      default: null,
      required: true,
    },
    // cores
    color: {
      type: String,
      default: null,
      required: true,
    },
    background: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.card {
  min-width: 330px;
  min-height: 180px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 0 20px 0 20px;
  margin: auto 10px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.11);
}
.User {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.userImg {
  width: 50px;
  height: 100%;
  border-radius: 0 10px 0 10px;
  background: darkgreen;
}
.iUser {
  width: 81%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
span.userName {
  width: 100%;
  height: 55%;
  font-weight: bold;
  display: flex;
  align-items: center;
}
span.postTime {
  width: 100%;
  height: 45%;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.txt {
  width: 100%;
  min-height: 130px;
  max-height: 130px;
  overflow: auto;
  margin: 4% 0;
}
.txt::-webkit-scrollbar {
  width: 14px;
  background: transparent;
}
.txt::-webkit-scrollbar-thumb {
  background: #004b23de;
  cursor: pointer;
  border-radius: 0 10px 0 10px;
}
.btn {
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.btn > div {
  width: 38px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
}
</style>
