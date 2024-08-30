"use client"

interface FilterButtonProps {
  label: string;
  count: number;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  count,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
          flex items-center justify-between p-2 rounded-lg
          transition-colors duration-200 ease-in-out
          ${
            isSelected
              ? "bg-blue-100 text-primary"
              : "bg-white text-textGray border border-gray-300 hover:bg-gray-100"
          }
        `}
    >
      <span className="text-sm font-medium mr-2">{label}</span>
      <span
        className={`
          px-[6px] py-1 rounded-[3px] text-xs font-semibold
          ${isSelected ? "bg-primary text-white" : "bg-[#F3F8FF] text-primary"}
        `}
      >
        {count}
      </span>
    </button>
  );
};

export default FilterButton;
