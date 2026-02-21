<template>
	<footer class="text-gray-600 body-font bg-white">
		<div
			class="container px-5 py-8 my-10 mx-auto flex lg:justify-between md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
		>
			<div class="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
				<NuxtLink
					to="/"
					class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
				>
					<img class="w-10 h-10" src="/images/Logo.png" alt="" />
					<span class="ml-3 text-l">sns cutie archive</span>
				</NuxtLink>
				<p class="mt-2 text-sm text-gray-500">
					SNSへの投稿に使える可愛い顔文字です´ᴗ ·̫ ᴗ`<br />
					クリックでコピーできます⊂( ᴖ ̫ᴖ)⊃ ⊂(ᴖ ̫ᴖ )⊃
				</p>
			</div>
			<div
				class="flex-grow flex flex-wrap lg:justify-end md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
			>
				<div class="lg:w-1/3 md:w-1/2 w-full px-4">
					<h2
						class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
					>
						contents
					</h2>
					<nav class="list-none mb-10">
						<li>
							<NuxtLink to="/" class="text-gray-600 hover:text-gray-800 text-sm"
								>顔文字ライブラリ</NuxtLink
							>
						</li>
						<!-- <li>
            <NuxtLink to="/notes" class="text-gray-600 hover:text-gray-800 text-sm">記事一覧</NuxtLink>
          </li> -->
					</nav>
				</div>
				<div class="lg:w-1/3 md:w-1/2 w-full px-4">
					<h2
						class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
					>
						about
					</h2>
					<nav class="list-none mb-10">
						<li>
							<NuxtLink
								to="/privacy"
								class="text-gray-600 hover:text-gray-800 text-sm"
								>プライバシーポリシー</NuxtLink
							>
						</li>
					</nav>
				</div>
			</div>
		</div>
		<div class="bg-gray-100">
			<div
				class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
			>
				<p class="text-gray-500 text-sm text-center sm:text-left">
					© 2025 sns cutie archive
					<a
						href="https://x.com/snscutiearchive"
						rel="noopener noreferrer"
						class="text-gray-600 ml-1"
						target="_blank"
						>@snscutiearchive</a
					>
				</p>
				<span
					class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
				>
					<a
						href="https://twitter.com/snscutiearchive?ref_src=twsrc%5Etfw"
						class="twitter-follow-button"
						data-show-count="false"
						>Follow @snscutiearchive</a
					>
					<script
						async
						src="https://platform.twitter.com/widgets.js"
						charset="utf-8"
					></script>
				</span>
			</div>
		</div>
	</footer>
</template>
