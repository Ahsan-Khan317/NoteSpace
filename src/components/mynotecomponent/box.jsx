

function Box ( {title, note, tag, date, color,deletedata,idx}){
    return(
          <div  className="flex-1 flex relative   px-2 py-5 gap-2 items-start">
      
      <div className={`${color} flex flex-col w-full gap-2 pl-2 rounded-2xl border-2 border-white`}>
      
           <button onClick={()=>{deletedata(idx)}} className="absolute top-6 text-red-600 right-3 text-2xl cursor-pointer 
           active:scale-75 transition-transform duration-150 ease-in-out">
            <i className="ri-delete-bin-4-fill"></i></button>
        <span className="w-full text-2xl text-start font-bold text-gray-900">{title}</span>
        <span className="text-start text-xl text-gray-900">{note} <span>...</span></span>
        <span className="flex w-full justify-between  text-black">{tag} <span className="text-gray-900">
            {date}
            </span>  </span>

      </div></div>
    )
}
export default Box