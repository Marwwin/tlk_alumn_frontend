export type Person = {
	firstName: string;
	lastName: string;
	positions?: Array<{
		title: string;
		startYear: number;
		endYear: number;
	}>;
};
