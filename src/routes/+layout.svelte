<script lang="ts">
	import { isLoggedIn } from '../stores.ts';
</script>

<nav>
	<a href="/">
		<div id="tlk_logo">
			<img id="tlk_logo__image" alt="TLKs logo" src="/tlk_logo.png" />
			<span id="tlk_logo__text">TLKs Alumn Nätverk</span>
		</div>
	</a>

	{#if $isLoggedIn}
		<div id="link_container">
			<a href="/">Home</a>
			<a href="/address">Ändra Uppgifter</a>
			<a href="/people">Alumner</a>
		</div>
	{:else}
		<span id="login">Logga in</span>
	{/if}
</nav>

<slot />

<style lang="scss">
	// GLOBAL CSS GOES HERE
	:global(body) {
		margin: 0;
	}

	:global(a) {
		font-variant: petite-caps;
		padding: 0 1em;
		text-decoration: none;
		color: black;
	}

	// NAVBAR CSS GOES HERE
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: rgb(201, 200, 226);
		background: linear-gradient(90deg, rgba(201, 200, 226, 1) 0%, rgba(127, 127, 227, 1) 100%);
		padding: 0.5em 1em;

		#tlk_logo {
			display: flex;
			justify-content: center;
			align-items: center;
			&__image {
				width: 4em;
				margin-right: 1em;
			}
			&__text {
				font-size: xx-large;
				font-weight: 700;
				font-variant: petite-caps;
			}
		}
		#login {
		}
		#link_container {
			display: flex;
		}
	}
</style>
