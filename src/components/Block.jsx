
const Block = ({title,icon , para}) => {
  return (
    <div className=" border-r border-gray-200  h-full gap-2 flex items-center px-3">
   <span>{icon}</span>
      <div>
        <h3 className=" font-bold">{title}</h3>
        <p className=" text-gray-500 text-xs line-clamp-1">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Block;