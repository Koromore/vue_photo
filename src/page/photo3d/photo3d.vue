<template>
  <div id="photo3d">
    <photo3d-content :imgList=imgList></photo3d-content>
  </div>
</template>

<script>
import Photo3dContent from './components/content'
export default {
  name: 'Photo3d',
  // 组件注册
  components: {
    Photo3dContent
  },
  // 数据
  data () {
    return {
      imgList: ''
    }
  },
  // 事件
  methods: {
    get3Dphoto () {
      this.axios.get('/aoao/api/3dphoto.json')
        .then(this.handleGet3DphotoInfoSucc)
    },
    handleGet3DphotoInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgList = data.list
      }
      // console.log(this.imgList)
    }
  },
  // 计算属性
  computed: {},
  // 生命周期函数实例挂载完成执行
  mounted () {
    this.get3Dphoto()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
