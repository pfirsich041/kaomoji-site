<template>
	<div>
		<Header></Header>
		<main class="bg-pink-50 min-h-screen">
			<div class="contact-container">
				<h1 class="title">Contact 🎀</h1>
				<p class="subtitle">お問い合わせ・リクエストはこちらから</p>

				<form
					name="contact"
					@submit.prevent="handleSubmit"
					class="contact-form"
				>
					<input type="hidden" name="form-name" value="contact" />

					<div class="form-item">
						<label for="name">Name</label>
						<input
							v-model="formData.name"
							type="text"
							name="name"
							id="name"
							placeholder="おなまえ"
							required
						/>
					</div>

					<div class="form-item">
						<label for="email">Email</label>
						<input
							v-model="formData.email"
							type="email"
							name="email"
							id="email"
							placeholder="mail@example.com"
							required
						/>
					</div>

					<div class="form-item">
						<label for="message">Message</label>
						<textarea
							v-model="formData.message"
							name="message"
							id="message"
							rows="5"
							placeholder="メッセージや追加してほしい顔文字のリクエストなど"
							required
						></textarea>
					</div>

					<button type="submit" class="submit-btn">送信</button>
				</form>
			</div>
		</main>
		<Footer></Footer>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// フォームの入力データを管理
const formData = ref({
	name: '',
	email: '',
	message: '',
});

// Netlifyが受け取れる形式（URLエンコード）に変換する関数
const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

// 送信処理
const handleSubmit = async () => {
	try {
		await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				...formData.value,
			}),
		});

		// 送信が完了したら、自作のthanksページへ遷移
		router.push('/complete');
	} catch (error) {
		console.error(error);
		alert('送信に失敗しました。時間をおいて再度お試しください 😭');
	}
};
</script>

<style scoped>
.contact-container {
	max-width: 500px;
	margin: 0 auto;
	padding: 60px 20px;
	text-align: center;
	font-family: 'Hiragino Maru Gothic ProN', sans-serif;
}

.title {
	color: #ffb7c5;
	font-size: 1.8rem;
	margin-bottom: 10px;
}

.subtitle {
	color: #888;
	font-size: 0.9rem;
	margin-bottom: 30px;
}

.contact-form {
	display: flex;
	flex-direction: column;
	gap: 20px;
	text-align: left;
}

.form-item {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.form-item label {
	font-weight: bold;
	color: #666;
	font-size: 0.9rem;
}

input,
textarea {
	padding: 12px;
	border: 2px solid #ffe4e8;
	border-radius: 12px;
	background-color: #fffafb;
	font-size: 1rem;
	outline: none;
	transition: border-color 0.3s;
}

input:focus,
textarea:focus {
	border-color: #ffb7c5;
}

.submit-btn {
	margin-top: 10px;
	padding: 15px;
	background-color: #ffb7c5;
	color: white;
	border: none;
	border-radius: 25px;
	font-size: 1.1rem;
	font-weight: bold;
	cursor: pointer;
	transition:
		transform 0.2s,
		background-color 0.3s;
}

.submit-btn:hover {
	background-color: #ff9fb1;
	transform: scale(1.02);
}
</style>
