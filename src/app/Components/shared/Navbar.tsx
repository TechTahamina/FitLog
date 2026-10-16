"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import PlanSavedGroup from "./PlanSavedGroup";
import { usePlan } from "@/Context/WorkoutProvider";
import { usePathname } from "next/navigation";

const activeClass = "bg-[#434e1963] text-[#C2F800] font-medium rounded-full";

const Navbar = () => {
  const { workouts, saveForLater } = usePlan();
  const pathname = usePathname();

  const isWorkouts = pathname === "/" || pathname.startsWith("/workouts");
  const isMyPlan = pathname.startsWith("/my-plan");

  // Close the daisyUI dropdown after a link is clicked
  const closeMenu = () => {
    const el = document.activeElement as HTMLElement | null;
    el?.blur();
  };

  return (
    <nav className="bg-base-100 shadow-sm py-2 sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* Mobile hamburger menu (phones only, below 768px) */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost btn-circle md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/workouts"
                  onClick={closeMenu}
                  className={isWorkouts ? activeClass : ""}
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link
                  href="/my-plan"
                  onClick={closeMenu}
                  className={isMyPlan ? activeClass : ""}
                >
                  My plan
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost text-xl oswald-font">
            <Image src={Logo} alt="Logo" width={30} height={30} className="mr-1" />
            FITLOG
          </Link>
        </div>

        {/* Desktop/tablet menu (768px and up) */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu rounded-full menu-horizontal px-1">
            <li>
              <Link href="/workouts" className={isWorkouts ? activeClass : ""}>
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/my-plan" className={isMyPlan ? activeClass : ""}>
                My plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <PlanSavedGroup
            planCount={workouts.length}
            savedCount={saveForLater.length}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;