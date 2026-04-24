import { strToUnderscored } from "./utils";

export const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getAllIngredients = async () => {
	const res = await fetch(`${BASE_URL}/list.php?i=list`, {
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error("Failed to fetch");

	return res.json();
};

export async function getMealsByIngredient(name: string) {
	const res = await fetch(`${BASE_URL}/filter.php?i=${strToUnderscored(name)}`);

	if (!res.ok) throw new Error("Failed to fetch");

	return res.json();
}

export async function getMealById(id: string) {
	const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

	if (!res.ok) throw new Error("Failed to fetch");

	return res.json();
}

export async function getMealByName(name: string) {
	const res = await fetch(`${BASE_URL}/search.php?s=${name}`);

	if (!res.ok) throw new Error("Failed to fetch");

	return res.json();
}
