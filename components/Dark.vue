<template>
  <div class="Dark" :style="{ background: Bl }" @click="A()">
    <div :style="{ marginLeft: ml }" @click="A()">
      <span class="D" @click="A()">
        <svg
          v-if="Dark"
          :style="{ transform: Rotate }"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9275 3.30422C7.0525 3.83505 3.25 7.97338 3.25 13C3.25 15.5859 4.27723 18.0659 6.10571 19.8943C7.93419 21.7228 10.4141 22.75 13 22.75C18.0158 22.75 22.1542 18.9584 22.6958 14.0834C22.7933 13.2275 21.8508 12.545 21.0275 13.0542C20.1431 13.6187 19.1233 13.9351 18.0748 13.9703C17.0262 14.0056 15.9874 13.7583 15.0672 13.2544C14.1469 12.7506 13.379 12.0086 12.8438 11.1062C12.3087 10.2039 12.0258 9.17421 12.025 8.12505C12.025 6.97672 12.3608 5.89338 12.935 4.99422C13.4225 4.26838 12.8917 3.22838 11.9275 3.30422Z"
            fill="white"
          />
        </svg>
        <svg
          v-else
          :style="{ transform: Rotate }"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5556 1.44444C11.5556 1.44444 11.5556 0 13 0C14.4444 0 14.4444 1.44444 14.4444 1.44444V2.88889C14.4444 2.88889 14.4444 4.33333 13 4.33333C11.5556 4.33333 11.5556 2.88889 11.5556 2.88889V1.44444ZM24.5556 11.5556C24.5556 11.5556 26 11.5556 26 13C26 14.4444 24.5556 14.4444 24.5556 14.4444H23.1111C23.1111 14.4444 21.6667 14.4444 21.6667 13C21.6667 11.5556 23.1111 11.5556 23.1111 11.5556H24.5556ZM2.88889 11.5556C2.88889 11.5556 4.33333 11.5556 4.33333 13C4.33333 14.4444 2.88889 14.4444 2.88889 14.4444H1.44444C1.44444 14.4444 0 14.4444 0 13C0 11.5556 1.44444 11.5556 1.44444 11.5556H2.88889ZM6.58739 5.26717C6.58739 5.26717 7.60861 6.28839 6.58739 7.30961C5.56617 8.33083 4.54494 7.30961 4.54494 7.30961L3.523 6.28911C3.523 6.28911 2.50178 5.26789 3.523 4.24594C4.54494 3.22472 5.56617 4.24594 5.56617 4.24594L6.58739 5.26717ZM21.7541 20.4338C21.7541 20.4338 22.7753 21.4551 21.7541 22.4763C20.7328 23.4975 19.7116 22.4763 19.7116 22.4763L18.6904 21.4551C18.6904 21.4551 17.6692 20.4338 18.6904 19.4126C19.7116 18.3914 20.7328 19.4126 20.7328 19.4126L21.7541 20.4338ZM21.4558 7.30961C21.4558 7.30961 20.4346 8.33083 19.4133 7.30961C18.3921 6.28839 19.4133 5.26717 19.4133 5.26717L20.4346 4.24594C20.4346 4.24594 21.4558 3.22472 22.477 4.24594C23.4982 5.26717 22.477 6.28839 22.477 6.28839L21.4558 7.30961ZM6.28911 22.4763C6.28911 22.4763 5.26789 23.4975 4.24667 22.4763C3.22544 21.4551 4.24667 20.4338 4.24667 20.4338L5.26789 19.4126C5.26789 19.4126 6.28911 18.3914 7.31033 19.4126C8.33156 20.4338 7.31033 21.4551 7.31033 21.4551L6.28911 22.4763ZM11.5556 23.1111C11.5556 23.1111 11.5556 21.6667 13 21.6667C14.4444 21.6667 14.4444 23.1111 14.4444 23.1111V24.5556C14.4444 24.5556 14.4444 26 13 26C11.5556 26 11.5556 24.5556 11.5556 24.5556V23.1111Z"
            fill="#FDCA40"
          />
          <path
            d="M13.0005 20.2223C16.9893 20.2223 20.2228 16.9888 20.2228 13.0001C20.2228 9.01133 16.9893 5.77783 13.0005 5.77783C9.01182 5.77783 5.77832 9.01133 5.77832 13.0001C5.77832 16.9888 9.01182 20.2223 13.0005 20.2223Z"
            fill="#FDCA40"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      ml: '0%',
      Bl: '#ff9999',
    }
  },
  computed: {
    ...mapState({
      Dark: (state) => state.Colors.Dark_mode,
    }),
  },
  created() {
    if (this.Dark) {
      this.ml = '65%'
      this.Bl = '#000'
      this.Rotate = 'rotate(180deg)'
    } else {
      this.ml = '0%'
      this.Bl = '#fff'
      this.Rotate = 'rotate(-180deg)'
    }
  },
  methods: {
    ...mapMutations({
      Dark_on: 'Colors/Dark_on',
      Light_on: 'Colors/Light_on',
    }),

    A() {
      if (this.Dark) {
        this.Light_on()
        this.ml = '0%'
        this.Bl = '#fff'
        this.Rotate = 'rotate(360deg)'
      } else {
        this.Dark_on()
        this.ml = '65%'
        this.Bl = '#000'
        this.Rotate = 'rotate(-360deg)'
      }
    },
  },
}
</script>
<style scoped>
.Dark {
  width: 120px;
  height: 42px;
  padding: 1px;
  border-radius: 20px;
  display: flex;
  transition: ease 0.7s;
  cursor: pointer;
  box-shadow: 0 0 11px 1px #0000007a;
}
.Dark div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.7s;
  cursor: pointer;
}
.Dark div span {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.7s;
  cursor: pointer;
}
.Dark div span svg {
  transition: ease 0.7s;
  cursor: pointer;
  width: 100%;
}
.Dark .D {
  transition: ease 1s;
  border-radius: 50%;
  cursor: pointer;
}
</style>
