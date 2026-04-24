import SearchMeal from "../meals/SearchMeal";

const Hero = () => {
	return (
		<div className="relative overflow-hidden space-y-6 text-center py-32 my-4 rounded-3xl bg-black/50 bg-[url(/foods.jpg)] bg-cover bg-center bg-blend-multiply border border-white/10 shadow-xl">
      <div className="max-w-2xl mx-auto space-y-4 px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Smarter Cooking <br /> 
          <span className="text-gradient">Starts Here</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-medium">
          Browse ingredients, explore recipes, and cook with confidence.
        </p>

        <div className="pt-4">
          <SearchMeal />
        </div>
      </div>
    </div>
	);
};

export default Hero;
