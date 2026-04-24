import { Utensils } from "lucide-react";

import MealList from "@/components/meals/MealList";

import { getMealsByIngredient } from "@/lib/api";

export default async function IngredientSearchPage({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const { name } = await params;
	const decodedName = decodeURIComponent(name);

	const data = await getMealsByIngredient(decodedName);
	const meals = data.meals || [];

	return (
		<div className="container py-8">
			<h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
				<Utensils className="text-[#f15025]" />
				Ingredient using "<span className="text-gradient">{decodedName}</span>"
			</h1>

			{meals.length > 0 ? (
				<MealList meals={meals} />
			) : (
				<div className="text-center py-20">
					<p className="text-muted-foreground text-lg">
						No ingredient found for "<span className="text-gradient">{decodedName}</span>". Try a different ingredient!
					</p>
				</div>
			)}
		</div>
	);
}
