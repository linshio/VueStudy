<template>
	<div class="demo">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">button</button>
	</div>
</template>
<script>
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
<style scoped>
    .demo{
			background-color: rgb(12, 226, 8);
		}
</style>