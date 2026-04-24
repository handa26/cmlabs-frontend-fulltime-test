import Link from "next/link";

const IngredientCard = ({
  name,
}: {
  name: string;
}) => {
  return (
    <Link
      href={`/ingredients/${name}`}
      className="group p-4 bg-card border rounded-2xl hover:border-[#f15025] hover:shadow-md transition-all flex flex-col items-center gap-3"
    >
      <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
        <img
          src={`https://www.themealdb.com/images/ingredients/${name}.png`}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://www.themealdb.com/images/ingredients/Lime.png";
          }}
        />
      </div>

      <p className="text-sm font-semibold text-center line-clamp-1 text-gradient">
        {name}
      </p>
    </Link>
  );
};

export default IngredientCard;