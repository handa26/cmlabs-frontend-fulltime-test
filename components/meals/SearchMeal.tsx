"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

const SearchMeal = () => {
	const router = useRouter();
	const [query, setQuery] = useState("");

	const handleSearch = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && query.trim()) {
			router.push(`/search/${encodeURIComponent(query.trim())}`);
		}
	};

	return (
		<div className="w-full max-w-xl mx-auto px-4">
			<InputGroup className="h-14 bg-white/95 backdrop-blur-sm border-2 border-transparent focus-within:border-[#f15025] transition-all rounded-full overflow-hidden shadow-2xl">
				<InputGroupInput
					placeholder="Search for a meal..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleSearch}
					className="text-lg px-6 h-full border-none focus-visible:ring-0 text-black placeholder: dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-200"
				/>

				<InputGroupAddon className="pr-4 bg-transparent border-none">
					<div className="p-2 bg-[#f15025] rounded-full text-white cursor-pointer hover:bg-[#d4431f] transition-colors">
						<Search size={20} />
					</div>
				</InputGroupAddon>
			</InputGroup>

			<div className="mt-4 flex gap-2 justify-center text-xs text-white/80">
				<span>Try:</span>
				{["Pasta", "Chicken", "Vegan"].map((item) => (
					<button
						key={item}
						onClick={() => router.push(`/search/${item}`)}
						className="hover:text-[#f15025] underline underline-offset-2 cursor-pointer"
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};

export default SearchMeal;
