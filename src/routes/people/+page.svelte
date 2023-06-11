<script>
	import PersonCard from '../../lib/PersonCard.svelte';
	import { persons } from '../../stores';
</script>

<section id="persons_container">
	{#if $persons}
		{#each $persons as person}
			<PersonCard {person} />
		{/each}
	{/if}
</section>

<style lang="scss">
  #persons_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>