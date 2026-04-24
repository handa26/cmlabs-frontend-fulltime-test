import { Globe, PlayCircle, Utensils } from "lucide-react";

import BackButton from "@/components/BackButton";

import { getMealById } from "@/lib/api";

const getIngredients = (meal: any) => {
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		const name = meal[`strIngredient${i}`];
		const measure = meal[`strMeasure${i}`];
		if (name && name.trim()) {
			ingredients.push({ name, measure });
		}
	}
	return ingredients;
};

const MealDetaiPage = async ({
	params,
}: {
	params: Promise<{ id: string }>;
}) => {
	const { id } = await params;

	const data = await getMealById(id);
	const meal = data.meals?.[0] || [];

	if (!meal) return <div className="text-center py-20">Meal not found.</div>;

	const ingredients = getIngredients(meal);

	return (
		<div className="container max-w-6xl py-8 space-y-8">
			<BackButton />

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
				{/* LEFT */}
				<div className="lg:col-span-5 space-y-6">
					<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f15025]">
						<img
							src={meal.strMealThumb}
							alt={meal.strMeal}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="bg-card border rounded-2xl p-6 space-y-4">
						<h1 className="text-3xl font-extrabold leading-tight text-gradient">
							{meal.strMeal}
						</h1>

						<div className="flex flex-wrap gap-4 text-sm font-medium">
							<div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
								<Globe size={14} /> {meal.strArea}
							</div>
							<div className="flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-[#f15025] rounded-full border border-orange-100">
								<Utensils size={14} /> {meal.strCategory}
							</div>
						</div>
					</div>

					{/* Ingredients */}
					<div className="bg-secondary/30 rounded-2xl p-6 border border-dashed">
						<h3 className="font-bold text-lg mb-4 text-gradient">Ingredients</h3>
						<ul className="space-y-3">
							{ingredients.map((item, idx) => (
								<li
									key={idx}
									className="flex justify-between text-sm border-b border-black/5 pb-2 last:border-0"
								>
									<span className="font-medium text-foreground">
										{item.name}
									</span>
									<span className="text-muted-foreground italic">
										{item.measure}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* RIGHT */}
				<div className="lg:col-span-7 space-y-8">
					<div className="space-y-4">
						<h2 className="text-2xl font-bold flex items-center gap-2 text-gradient">
							Instructions
						</h2>
						<div className="prose prose-orange max-w-none">
							{meal.strInstructions.split("\r\n").map(
								(step: string, i: number) =>
									step.trim() && (
										<p
											key={i}
											className="text-muted-foreground leading-relaxed mb-4"
										>
											{step}
										</p>
									),
							)}
						</div>
					</div>

					{/* Video Section */}
					{meal.strYoutube && (
						<div className="space-y-4">
							<h2 className="text-2xl font-bold flex items-center gap-2 text-gradient">
								<PlayCircle className="text-red-600" /> Video Tutorial
							</h2>
							<div className="aspect-video rounded-2xl overflow-hidden shadow-lg border">
								<iframe
									className="w-full h-full"
									src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default MealDetaiPage;
