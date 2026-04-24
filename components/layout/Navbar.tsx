import Link from "next/link"
import { UtensilsCrossed } from 'lucide-react';

import SearchIngredient from "../home/SearchIngredient";
import ModeToggle from "../ModeToggle";

const Navbar = () => {
  return (
    <nav className="py-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* LEFT */}
      <Link href="/" className="flex items-center gap-1.5">
        <p className="font-extrabold text-2xl text-gradient">DishDash</p>
        <UtensilsCrossed className="text-[#f7af31] h-8 w-8" />
      </Link>

      {/* MIDDLE */}
      <div className="hidden md:block">
        <SearchIngredient />
      </div>

      {/* RIGHT */}
      <ModeToggle />
    </nav>
  )
}

export default Navbar