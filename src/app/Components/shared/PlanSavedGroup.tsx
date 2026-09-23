import CounterItem from "./PlanSavedCounter";

interface PlanSavedGroupProps {
  planCount: number;
  savedCount: number;
}

const PlanSavedGroup = ({ planCount, savedCount }: PlanSavedGroupProps) => {
  return (
    <div className="flex items-center gap-6 mr-4">
      <CounterItem label="Plan" count={planCount} highlight />
      <CounterItem label="Saved" count={savedCount} />
    </div>
  );
};

export default PlanSavedGroup;
