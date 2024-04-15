"use client";

const Filter = ({list,priceRangeHandler,price,setPrice,setChecklist,checklist}) => {
  const checklistHandler = (e)=>{
    let newChecklist = [];
    if(e.target.checked){
      newChecklist.push(e.target.value)
      console.log(newChecklist)
      setChecklist(newChecklist);
      console.log(checklist)
      return;
    }
    newChecklist = newChecklist.filter((i) => i !== e.target.value);
    setChecklist(newChecklist);
  }
  return (
    <div className="w-full flex flex-col gap-4 border border-red-500 rounded-md p-4">
      <div className="flex gap-2  flex-col">
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="  font-bold">
            Price :{" "}
          </label>
          <input
            type="range"
            className="w-full h-4 outline-none  accent-red-500  transition-colors duration-200 ease-in-out"
            name="price"
            id="price"
            defaultValue={price}
            onChange={(e)=>{setPrice(e.target.value)}}
            min={100}
            max={5000}
          />
          <span className="font-semibold">&#8377; {price}</span>
        </div>
        <button
        onClick={priceRangeHandler}
        className="p-2 px-6 font-semibold bg-green-500 text-white rounded-sm cursor-pointer">
          Search
        </button>
      </div>
      {/* <div className="flex flex-col gap-2">
        <h3 className=" font-semibold">Filter by Facilities : </h3>
        <div className="flex-col flex gap-2">
            {
              list?.map((item,idx)=> <div key={idx} className="flex gap-2">
              <input 
              value={item}
              onChange={checklistHandler}
              className="accent-green-500" type="checkbox" id={item} />
              <label className="font-semibold text-sm text-gray-600" htmlFor={item}> {item}</label>
            </div>)   
            }

        </div>
      </div> */}
    </div>
  );
};

export default Filter;
