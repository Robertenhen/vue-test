<template>
  <div>
    <button @click="getStudentInfo">获取学生信息</button>
    <button @click="getCarInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "MyApp",
  data() { 
    return {
      urlStudent: '/api/students',
      urlCar: '/foo/cars'
    }
  },
  methods: {
    getStudentInfo() { 
      axios.get(this.urlStudent).then(
        response => {
            console.log('请求成功了', response.data);
         },
        err => {
            console.log('请求失败了', err.message);
         }
      );
    },
    getCarInfo() { 
      axios.get(this.urlCar).then(
        response => { 
          console.log('请求成功了', response.data);
        },
        err => { 
          console.log('请求失败了', err.message);
        }
      );
    }
  }
}
</script>

<style>

</style>