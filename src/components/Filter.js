import React from "react";

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {filterData.map( (data) => {
            return( <button className={`px-1 border-red-300 text-black hover:bg-opacity-50 bg-white border-2 transition-all duration-300
            ${category === data.title ? "bg-opacity-80" : "bg-opacity-40 border-transparent"} `}
            key={data.id} onClick={() => filterHandler(data.title)} >
                {data.title}
            </button>
        )} )}
        </div>
    )
}

export default Filter;