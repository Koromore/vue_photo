<template>
  <div id="index">
    <index-content></index-content>
  </div>
</template>

<script>
import IndexContent from './components/content'
export default {
  name: 'Content',
  // 组件注册
  components: {
    IndexContent
  },
  // 数据
  data () {
    return {}
  },
  // 事件
  methods: {},
  // 计算属性
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
