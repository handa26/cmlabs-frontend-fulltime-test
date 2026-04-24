"use client";

import { useEffect, useState } from "react";

import IngredientCard from "./IngredientCard";
import SearchIngredient from "./SearchIngredient";

import { getAllIngredients } from "@/lib/api";

export type IngredientType = {
	idIngredient?: string;
	strIngredient: string;
	strDescription?: string;
	strThumb?: string;
};

const IngredientList = () => {
	const [ingredients, setIngredients] = useState<IngredientType[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchRecommended() {
			try {
				const data = await getAllIngredients();

				setIngredients(data.meals?.slice(0, 12) || []);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		}

		fetchRecommended();
	}, []);

	if (loading)
		return <p className="animate-pulse mt-10 text-center">Loading ingredients...</p>;

	return (
		<div className="mt-8">
			<div className="flex items-center flex-col gap-2 md:flex-row md:gap-0 justify-between my-5">
				<h2 className="text-xl font-bold text-gradient">
					Popular Ingredients
				</h2>
				<SearchIngredient />
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
				{ingredients.map((item) => (
					<IngredientCard
						key={item.idIngredient}
						name={item.strIngredient}
					/>
				))}
			</div>
		</div>
	);
};

export default IngredientList;
