<template>
  <div id="content">
    <div class="box">
      <ul class="minbox">
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.img_url_min" alt="" srcset="">
        </li>
      </ul>
      <ol class="maxbox">
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.img_url_max" alt="" srcset="">
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      list: [{
        img_url_min: require('@/assets/images/3D/01.jpg'),
        img_url_max: require('@/assets/images/3D/1.jpg')
      },
      {
        img_url_min: require('@/assets/images/3D/02.jpg'),
        img_url_max: require('@/assets/images/3D/2.jpg')
      },
      {
        img_url_min: require('@/assets/images/3D/03.jpg'),
        img_url_max: require('@/assets/images/3D/3.jpg')
      },
      {
        img_url_min: require('@/assets/images/3D/04.jpg'),
        img_url_max: require('@/assets/images/3D/4.jpg')
      },
      {
        img_url_min: require('@/assets/images/3D/05.jpg'),
        img_url_max: require('@/assets/images/3D/5.jpg')
      },
      {
        img_url_min: require('@/assets/images/3D/06.jpg'),
        img_url_max: require('@/assets/images/3D/6.jpg')
      }]
    }
  },
  // 事件
  methods: {},
  // 计算属性
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
li {
  list-style: none;
}
.box
  width 200px
  height 200px
  background-size cover
  background-repeat no-repeat
  background-attachment fixed
  position absolute
  top 50%
  margin-left 36%
  margin-top -100px
  -webkit-transform-style preserve-3d
  -webkit-transform rotateX(13deg)
  -webkit-animation move 5s linear infinite
  img
    width 100%
  .minbox
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50px;
    top: 30px;
    -webkit-transform-style: preserve-3d;
    li
      width: 100px;
      height: 100px;
      position: absolute;
      left: 0;
      top: 0;
    li:nth-child(1)
      -webkit-transform: translateZ(50px);
    li:nth-child(2)
      -webkit-transform: rotateX(180deg) translateZ(50px);
    li:nth-child(3)
      -webkit-transform: rotateX(-90deg) translateZ(50px);
    li:nth-child(4)
      -webkit-transform: rotateX(90deg) translateZ(50px);
    li:nth-child(5)
      -webkit-transform: rotateY(-90deg) translateZ(50px);
    li:nth-child(6)
      -webkit-transform: rotateY(90deg) translateZ(50px);
  .maxbox
    width: 800px;
    height: 400px;
    position: absolute;
    left: 0;
    top: -20px;
    -webkit-transform-style: preserve-3d;
    li
      width: 200px;
      height: 200px;
      background: #fff;
      border: 1px solid #ccc;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.2;
      -webkit-transition: all 1s ease;
    // li:nth-child(1)
    //   -webkit-transform: translateZ(50px);
    // li:nth-child(2)
    //   -webkit-transform: translateZ(50px);
    // li:nth-child(3)
    //   -webkit-transform: rotateX(-90deg) translateZ(50px);
    // li:nth-child(4)
    //   -webkit-transform: rotateX(90deg) translateZ(50px);
    // li:nth-child(5)
    //   -webkit-transform: rotateY(-90deg) translateZ(50px);
    // li:nth-child(6)
    //   -webkit-transform: rotateY(90deg) translateZ(50px);
    li:nth-child(1)
      -webkit-transform: translateZ(100px);
    li:nth-child(2)
      -webkit-transform: rotateX(180deg) translateZ(100px);
    li:nth-child(3)
      -webkit-transform: rotateX(-90deg) translateZ(100px);
    li:nth-child(4)
      -webkit-transform: rotateX(90deg) translateZ(100px);
    li:nth-child(5)
      -webkit-transform: rotateY(-90deg) translateZ(100px);
    li:nth-child(6)
      -webkit-transform: rotateY(90deg) translateZ(100px);
.box:hover ol li:nth-child(1) {
  -webkit-transform: translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(2) {
  -webkit-transform: rotateX(180deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(3) {
  -webkit-transform: rotateX(-90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(4) {
  -webkit-transform: rotateX(90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(5) {
  -webkit-transform: rotateY(-90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(6) {
  -webkit-transform: rotateY(90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
@keyframes move {
  0% {
    -webkit-transform: rotateX(13deg) rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateX(13deg) rotateY(360deg);
  }
}
</style>
