import React from "react";
import { CHECKBOX_FILTER_PROPS } from "../../types/types";

const CheckboxFilter: React.FC<CHECKBOX_FILTER_PROPS> = ({
  id,
  label,
  isChecked,
  count,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <input
          id={id}
          className="text-favorite w-[25px] h-[25px] rounded-[8px] bg-favorite"
          type="checkbox"
          checked={isChecked}
          onClick={onClick}
          readOnly
        />
        <label
          htmlFor={id}
          className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]"
        >
          {label}
        </label>
      </div>
      {count !== undefined && (
        <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
          {count}
        </div>
      )}
    </div>
  );
};

export default CheckboxFilter;
