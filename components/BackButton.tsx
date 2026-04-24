"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { Button } from "./ui/button";

const BackButton = () => {
	const router = useRouter();

	return (
		<Button
			variant="ghost"
			className="hover:text-[#f15025] transition-colors cursor-pointer"
			onClick={() => router.back()}
		>
			<ChevronLeft size={16} /> Go Back
		</Button>
	);
};

export default BackButton;
