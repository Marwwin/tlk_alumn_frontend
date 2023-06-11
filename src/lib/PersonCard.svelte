<script lang="ts">
	import type { Person } from './types';

	export let person: Person;
</script>

<div>
	{#if person}
		<div id="person_container">
			<h2>{person.firstName} {person.lastName}</h2>
			{#if person.positions}
				{#each person.positions as position}
					<ul>
						<li>
							<h4>Post: {position.title} ({position.startYear} - {position.endYear})</h4>
						</li>
					</ul>
				{/each}
			{/if}
		</div>
	{/if}
  </div>

<style lang="scss">
	#person_container {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		width: 30em;
		border-radius: 20px;
		border: 1px black solid;
    margin:1em;
    padding: 1em;

    ul{
      margin:0;
    }

		li {
			list-style-type: none;
		}
	}
</style>
