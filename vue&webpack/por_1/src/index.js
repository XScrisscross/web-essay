import $ from "jquery";
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'black')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info)

// -----------------------------------------------
import Vue from 'vue'
// 导入单文件组件
import App from './components/App.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})