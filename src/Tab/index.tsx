import React from "react";

function Tab({
  label,
  onClick,
  selected,
}: {
  label: string;
  onClick: Function;
  selected: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-2 px-1 py-3 text-red-500 
      hover:text-green-700 hover:bg-green-100 rounded-sm duration-300 ease-in cursor-pointer ${
        selected && "bg-green-200"
      }`}
      onClick={() => onClick()}
    >
      <p>{label}</p>
    </div>
  );
}

export default Tab;
