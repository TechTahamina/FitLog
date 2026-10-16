import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 text-center bg-[#161a20] p-6 rounded-2xl">
     <div className=" bg-base-100 p-20 rounded-2xl">
         <h1 className="oswald-font text-7xl font-bold text-[#CCFF00]">404</h1>
      <p className="text-xl font-semibold">Page not found</p>
      <p className="text-[#8A92A0] my-3">
        The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="btn rounded-full bg-[#CCFF00] text-black">
        Back to Home
      </Link>
     </div>
    </div>
  );
}