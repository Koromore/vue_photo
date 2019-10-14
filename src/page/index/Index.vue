<template>
  <div id="index">
    <!-- <index-content :photoList=photoList></index-content> -->
    <index-book></index-book>
  </div>
</template>

<script>
import IndexContent from './components/content'
import IndexBook from './components/book'
export default {
  name: 'Content',
  // 组件注册
  components: {
    IndexContent,
    IndexBook
  },
  // 数据
  data () {
    return {
      photoList: ''
    }
  },
  // 事件
  methods: {
    getPhotoList () {
      this.axios.get('/aoao/api/index.json')
        .then(this.handleGetPhotoListInfoSucc)
    },
    handleGetPhotoListInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.photoList = data.list
      }
      // console.log(this.photoList)
    }
  },
  // 计算属性
  computed: {},
  // 生命周期函数实例挂载完成执行
  mounted () {
    this.getPhotoList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
