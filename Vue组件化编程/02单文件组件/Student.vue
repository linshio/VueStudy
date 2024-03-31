<template lang="">
	<div class="demo">
		<h2>姓名：{{name}}</h2>
		<h2>年龄：{{age}}</h2>
		<button @click="showName">button</button>
	</div>
</template>
<script>
//简写方式
export default {
	name: 'Student',
	data() {
		return {
			name: 'az', 
			age: 22
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