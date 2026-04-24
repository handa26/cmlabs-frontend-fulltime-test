"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

const SearchIngredient = () => {
	const router = useRouter();
	const params = useParams();
	const [query, setQuery] = useState("");

	useEffect(() => {
    if (params?.name) {
      setQuery(decodeURIComponent(params.name as string));
    }
  }, [params?.name]);

	const handleSearch = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && query.trim()) {
			router.push(`/ingredients/${encodeURIComponent(query.trim())}`);
		}
	};

	return (
		<InputGroup className="max-w-xs">
			<InputGroupInput
				placeholder="Find meals by ingredient..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={handleSearch}
			/>
			
			<InputGroupAddon>
				<Search />
			</InputGroupAddon>
		</InputGroup>
	);
};

export default SearchIngredient;
