import Link from "next/link";

type MealType = {
	thumbnailUrl: string;
	name: string;
	id: string;
};

const MealCard = ({ name, thumbnailUrl, id }: MealType) => {
	return (
		<Link href={`/meals/${id}`} className="border rounded-2xl overflow-hidden shadow-sm hover:border-[#f15025] hover:shadow-md transition-all">
			<img src={thumbnailUrl} alt={name} className="w-full h-48 object-cover" />
			<div className="p-4">
				<h3 className="font-bold text-lg leading-tight text-gradient">
					{name}
				</h3>
			</div>
		</Link>
	);
};

export default MealCard;
