<template>
  <div class="jobs">
   <h1> 404 Not Found</h1>
   <p> Please click home, or work > profile or search > choose user </p>
  </div>
</template>

<script>
export default {
  name: 'Jobs',
  mounted () {
  	console.log('sa', this.$route.name)
  }
}
</script>
<style scoped>
	.jobs{
		margin-top: 15%;
		color: #777;
	}
</style>
