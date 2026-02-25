<template>
	<Header></Header>
	<div class="bg-pink-50">
		<div class="thanks-container">
			<div class="icon-wrapper">
				<span class="sparkle">✨</span>
				<span class="main-icon">💌</span>
				<span class="sparkle">✨</span>
			</div>

			<h1 class="title">Thank You!</h1>
			<p class="message">メッセージを送信しました 🎀</p>

			<div class="next-step">
				<p>リクエストの場合は、追加されるのを<br />楽しみにしていてね 🧸</p>
			</div>

			<router-link to="/" class="back-btn"> ホームに戻る </router-link>
		</div>
	</div>
	<Footer></Footer>
</template>

<style scoped>
.thanks-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 70vh;
	padding: 20px;
	text-align: center;
	font-family: 'Hiragino Maru Gothic ProN', sans-serif;
}

.icon-wrapper {
	font-size: 3rem;
	margin-bottom: 20px;
	position: relative;
}

.sparkle {
	font-size: 1.5rem;
	animation: blink 1.5s infinite;
}

@keyframes blink {
	0%,
	100% {
		opacity: 0.3;
		transform: scale(0.8);
	}
	50% {
		opacity: 1;
		transform: scale(1.2);
	}
}

.title {
	color: #ffb7c5;
	font-size: 2rem;
	margin-bottom: 15px;
}

.message {
	color: #666;
	line-height: 1.6;
	margin-bottom: 30px;
}

.next-step {
	background-color: #fffafb;
	border: 1px dashed #ffb7c5;
	padding: 15px 25px;
	border-radius: 15px;
	margin-bottom: 40px;
	font-size: 0.9rem;
	color: #888;
}

.back-btn {
	display: inline-block;
	padding: 12px 35px;
	background-color: #ffb7c5;
	color: white;
	text-decoration: none;
	border-radius: 25px;
	font-weight: bold;
	transition: all 0.3s ease;
	box-shadow: 0 4px 10px rgba(255, 183, 197, 0.3);
}

.back-btn:hover {
	background-color: #ff9fb1;
	transform: translateY(-2px);
	box-shadow: 0 6px 15px rgba(255, 183, 197, 0.4);
}
</style>
