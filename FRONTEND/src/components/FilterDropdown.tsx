import React, { Fragment, useState } from 'react'
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
      <Fragment >
         <div onMouseLeave={() => setDropDownToggel(false)} className="relative inline-block text-left ">
            <div>
               <button
                  onClick={() => setDropDownToggel(!dropDownToggel)}
                  type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  {props.title}
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
               </button>
            </div>

            <div className={`absolute left-0 ${dropDownToggel ? "block" : "hidden"} z-50 mt-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-[30rem] overflow-y-auto`}
               id="menu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
               <ul className="py-1" role="none">
                  {props.options?.map((data, index) => (
                     <li
                        key={index}
                        className="block cursor-pointer hover:bg-slate-200 px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-0"
                        onClick={() => handlerSetData(data)}
                        onBlur={() => setDropDownToggel(false)}
                     >
                        {data}
                     </li>
                  ))}
               </ul>
            </div>
         </div>

      </Fragment >
   )
}

export default FilterDropdown