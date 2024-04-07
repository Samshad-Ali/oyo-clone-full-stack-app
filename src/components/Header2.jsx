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
        <div className="w-full flex px-10 py-3 bg-gray-100 justify-between">
          {
              List.map((e)=>{
                  return(
                      <span className="text-gray-700 flex items-center gap-1" key={e.name} >{e.name} <MdKeyboardArrowDown/> </span>
                  )
              })
          }
        </div>
      </div>
    );
  };
  
  export default Header2;