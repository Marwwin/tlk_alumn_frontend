import { writable, type Writable } from "svelte/store";
import type { Person } from "./lib/types";

export const isLoggedIn = writable(true);

export const persons: Writable<Array<Person>> = writable([
  {
    firstName: "Sven",
    lastName: "Svensson",
    positions: [{ title: "FUHRER", startYear: 0, endYear: 2020 }],
  },
  {
    firstName: "Penis",
    lastName: "Penisson",
    positions: [
      { title: "CLUBHÖFVDING", startYear: 1666, endYear: 1999 },
      {
        title: "SOCIALA_UTSKOTTETS_ORDFÖRANDE",
        startYear: 1999,
        endYear: 2020,
      },
    ],
  },
]);
