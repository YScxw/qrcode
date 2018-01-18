<template>
  <div>
    <group title="qrcode demo">
      <div>
        <el-tag>交易账号</el-tag>
        <el-select size="small" allow-create filterable v-model="jyzh" placeholder="请输入交易账号">
          <el-option v-for="list in list1" :key="list" :value="list"/>
        </el-select>
      </div>
      <div>
        <el-tag>交易金额</el-tag>
        <el-select size="small" allow-create filterable v-model="jyje" placeholder="请输入交易金额">
          <el-option v-for="list in list2" :key="list" :value="list"/>
        </el-select>
      </div>
      <x-button @click.native="btnclick()" type="primary">生成二维码</x-button> 
    </group>
    <div style="text-align:center">
        <qrcode :size="200" style="margin-top:100px" v-if="qrcode" :value="qrcode" type="img"></qrcode>
    </div>
  </div>
</template>

<script>
import {Qrcode, Group, XButton} from 'vux'

export default {
  components: {
    Group,
    XButton,
    Qrcode
  },
  data () {
    return {
      jyzh: '',
      jyje: '',
      qrcode: '',
      show1: false,
      show2: false,
      list1: ['6216613000002552975', '6216613001232552975', '6216613234002552975', '6252613000002552975', '6212313000002552975'],
      list2: ['100', '200', '300', '400', '500']
    }
  },
  methods: {
    btnclick() {
        if(!this.jyzh){
          this.$vux.alert.show({
            title: 'Waring',
            content: '交易账号不能为空',
          })
          setTimeout(() => {
            this.$vux.alert.hide()
          }, 1000)
          return
        }

        if(!this.jyje){
          this.$vux.alert.show({
            title: 'Waring',
            content: '交易金额不能为空',
          })
          setTimeout(() => {
            this.$vux.alert.hide()
          }, 1000)
          return
        }

        this.qrcode = this.jyzh +'|' + this.jyje
    }
  }
}
</script>

<style>
</style>
