interface CounterItemProps {
  label: string;
  count: number;
  highlight?: boolean;
}

const CounterItem = ({ label, count, highlight }: CounterItemProps) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm">{label}</span>
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
          highlight ? "bg-lime-400 text-black" : "bg-base-300 text-base-content"
        }`}
      >
        {count}
      </span>
    </div>
  );
};

export default CounterItem;
