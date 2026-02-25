<template>
	<Header></Header>
	<body class="bg-pink-50">
		<div class="contact-container">
			<h1 class="title">Contact 🎀</h1>
			<p class="subtitle">お問い合わせ・リクエストはこちらから</p>

			<form
				name="contact"
				method="POST"
				data-netlify="true"
				netlify-honeypot="bot-field"
				action="/thanks"
				class="contact-form"
			>
				<input type="hidden" name="form-name" value="contact" />
				<p class="hidden">
					<label
						>Don’t fill this out if you’re human: <input name="bot-field"
					/></label>
				</p>

				<div class="form-item">
					<label for="name">Name</label>
					<input
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
	</body>
	<Footer></Footer>
</template>

<style scoped>
body {
	box-sizing: border-box;
}

.contact-container {
	max-width: 500px;
	margin: 0 auto;
	padding: 20px;
	text-align: center;
	font-family: 'Hiragino Maru Gothic ProN', sans-serif;
}

.title {
	color: #ffb7c5; /* サイトに合わせたパステルピンク */
	font-size: 1.8rem;
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

/* ハニーポットを完全に隠す設定 */
.hidden {
	display: none;
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
	font-size: 0.8rem;
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
