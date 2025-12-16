<template>
	<div class="min-h-screen bg-pink-50">
		<Header></Header>
		<div class="min-h-screen">
			<Library :category="$route.params.slug" />
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts"></script>
