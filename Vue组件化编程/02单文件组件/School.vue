<template lang="">
	<div class="demo">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">button</button>
	</div>
</template>
<script>
	//全写
	// const school = Vue.extend({
	// 	data() {
	// 		return {
	// 		name: 'azSchool',
	// 		address: 'qwer'
	// 		}
	// 	},
	// 	methods: {
	// 		showName() {
	// 		alert(this.x)
	// 		}
	// 	}
	// })
	// //暴露模块的方式 => 默认暴露
	// export default school

	//简写方式
	export default {
		name:'School',
		data() {
			return {
			name: 'azSchool',
			address: 'qwer'
			}
		},
		methods: {
			showName() {
			alert(this.name)
			}
		}
	}
</script>
<style lang="">
    .demo{
			background-color: white;
		}
</style>