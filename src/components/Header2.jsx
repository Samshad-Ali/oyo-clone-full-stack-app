import { MdKeyboardArrowDown } from "react-icons/md";

const Header2 = () => {
    const List = [
      {
        name: "Banglore",
      },
      {
        name:"Goa"
      },
      {
        name: "Culcutta",
      },
      {
        name: "Mumbai",
      },
      {
        name: "Delhi",
      },
      {
        name: "Hyderabad",
      },
    ];
    return (
      <div>
        <div className=" flex flex-wrap gap-4 px-2 justify-center lg:px-10 py-3 bg-gray-100 md:justify-between">
          {
              List.map((e)=>{
                  return(
                      <span className="text-gray-700 rounded-md px-2 bg-white  flex items-center gap-1" key={e.name} >{e.name} <MdKeyboardArrowDown/> </span>
                  )
              })
          }
        </div>
      </div>
    );
  };
  
  export default Header2;