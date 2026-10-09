import Link from "next/link";

interface CounterItemProps {
  label: string;
  count: number;
  highlight?: boolean;
  href: string; // add this
}

const CounterItem = ({ label, count, highlight, href }: CounterItemProps) => {
  return (
    <Link href={href} className="flex items-center gap-1 hover:opacity-80 transition">
      <span className="text-sm">{label}</span>
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
          highlight ? "bg-lime-400 text-black" : "bg-base-300 text-base-content"
        }`}
      >
        {count}
      </span>
    </Link>
  );
};

export default CounterItem;