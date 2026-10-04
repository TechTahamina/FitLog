import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <section className=" bg-black py-5 mt-6 ">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <Link
            href="/"
            className="btn btn-ghost text-xl oswald-font  "
          >
            <Image
              src={Logo}
              alt="Logo"
              width={30}
              height={30}
              className="mr-1"
            />
            FITLOG
          </Link>
        </div>

        <div>
          
          <p className=" text-xs text-[#6B7280]">
            © {new Date().getFullYear()} FitLog — Workout Library. Train hard,
            log honest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
