import { Utensils } from "lucide-react";

import MealList from "@/components/meals/MealList";

import { getMealByName } from "@/lib/api";

const SearchResultsPage = async ({
	params,
}: {
	params: Promise<{ query: string }>;
}) => {
	const { query } = await params;
	const decodedName = decodeURIComponent(query);

	const data = await getMealByName(decodedName);
	const meals = data.meals || [];

	console.log(meals);

	return (
		<div className="container py-8">
			<h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
				<Utensils className="text-[#f15025]" />
				Meals using "<span className="text-gradient">{decodedName}</span>"
			</h1>

			{meals.length > 0 ? (
				<MealList meals={meals} />
			) : (
				<div className="text-center py-20">
					<p className="text-muted-foreground text-lg">
						No Meals found for "
						<span className="text-gradient">{decodedName}</span>". Try a
						different ingredient!
					</p>
				</div>
			)}
		</div>
	);
};

export default SearchResultsPage;
