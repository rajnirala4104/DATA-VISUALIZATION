import React, { Fragment, useState } from 'react'
import DropDownIcon from '../icons';
import { setSelectedValueObject } from '../interface';

interface FilterProps {
   title: string,
   options?: string[],
   setSelectedObject: React.Dispatch<React.SetStateAction<setSelectedValueObject[] | undefined>>
}

const FilterDropdown: React.FC<FilterProps> = (props) => {

   const [dropDownToggel, setDropDownToggel] = useState<boolean>(false);

   const handlerSetData = (value: string) => {
      props.setSelectedObject([{ key: props.title, value: value }])
      setDropDownToggel(false)
   }

   return (
      <Fragment>
         <button data-ripple-light="true" onClick={() => setDropDownToggel(!dropDownToggel)} data-popover-target="menu"
            className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex justify-end items-center">
            {props.title}
            <DropDownIcon classes='ml-2' />
         </button>
         <ul
            onBlur={() => setDropDownToggel(false)}
            role="menu" data-popover="menu" data-popover-placement="bottom"
            className={`absolute z-10 mt-2 min-w-[180px] h-[60vh] ${dropDownToggel ? "block" : "hidden"} overflow-y-auto transition transition-duration-300 rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none`}
         >
            {props.options?.map((data, index) => (
               <li key={index} role="menuitem"
                  onBlur={() => setDropDownToggel(false)}
                  className="hover:bg-slate-200 block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  onClick={() => handlerSetData(data)}
               >
                  {data}
               </li>
            ))}
         </ul>

      </Fragment >
   )
}

export default FilterDropdown