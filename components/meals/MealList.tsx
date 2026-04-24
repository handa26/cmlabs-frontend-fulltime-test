import MealCard from "./MealCard";

const MealList = ({ meals }: { meals: any[] }) => {
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{meals.map((meal: any) => (
					<MealCard
						key={meal.idMeal}
						name={meal.strMeal}
						thumbnailUrl={meal.strMealThumb}
						id={meal.idMeal}
					/>
				))}
			</div>
		</div>
	);
};

export default MealList;
