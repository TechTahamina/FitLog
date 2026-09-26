import Image from "next/image";
import Logo from "@/assets/logo.png";
import PlanSavedGroup from "./PlanSavedGroup";


const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm py-2 sticky top-0 z-50">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="bg-[#434e1963] text-[#C2F800] font-md rounded-full">Workouts</a>
              </li>
              <li>
               <a>My plan</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl oswald-font  ">
            <Image src={Logo} alt="Logo" width={30} height={30} className="mr-1" />
             FITLOG
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="bg-[#434e1963] text-[#C2F800] font-md rounded-full">Workouts</a>
            </li>
            <li>
              <a>My plan</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
           <PlanSavedGroup planCount={0} savedCount={0} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
