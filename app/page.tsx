import IngredientList from "@/components/home/IngredientList";
import Hero from "@/components/home/Hero";

const HomePage = () => {
	return (
		<div className="pb-10">
      <Hero />
			<IngredientList />
		</div>
	);
};

export default HomePage;
