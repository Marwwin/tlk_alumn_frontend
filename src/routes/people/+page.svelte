<script lang="ts">
  import PersonCard from "../../lib/PersonCard.svelte";
  import { persons } from "../../stores";

  let name: string = "";
  let title: string = "";
  let year: number | null = null;

  function compareStrings(a: string, b: string) {
    return a.toLowerCase().includes(b.toLowerCase());
  }

  $: filteredPersons = $persons.filter((p) => {
    const positions = p.positions || [];

    return (
      compareStrings(p.firstName + " " + p.lastName, name) &&
      positions.some((pos) => compareStrings(pos.title, title)) &&
      (!year ||
        (year &&
          Math.min(...positions.map((pos) => pos.startYear)) <= year &&
          Math.max(...positions.map((pos) => pos.endYear)) >= year))
    );
  });
</script>

<section id="persons_container">
  <label
    >Sök med namn
    <input type="text" bind:value={name} name="name" id="name" />
  </label>

  <label
    >Sök med titel <input type="text" bind:value={title} name="" id="" /></label
  >

  <label>Sök med årtal <input type="number" bind:value={year} /></label>
  <h1>Alumner</h1>
  {#if filteredPersons}
    {#each filteredPersons as person}
      <PersonCard {person} />
    {/each}
  {/if}
</section>

<style lang="scss">
  #persons_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
