<script>
	import { isLoggedIn } from '../stores';
</script>

<section>
	<h1>Welcome to TLK Alumn</h1>
	{#if !$isLoggedIn}
		<h2>Click för att registrera</h2>
		<button><a href="/register">Registera</a> </button>
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
