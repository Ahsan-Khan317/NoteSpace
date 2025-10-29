function Click({clicked,props="px-6 py-2 text-5xl font-bold  w-fit  m-auto not-sm:text-3xl not-sm:relative not-sm:bottom-24 ",text="Get Started"}){
    return(
         
        
            <button onClick={clicked}  className={`${props}  bg-gradient-to-r from-blue-300 to-red-700  rounded-2xl font-darkmode shadow-lg shadow-white/30 tracking-wider cursor-pointer active:scale-90 transition-transform ease-in-out duration-200`} >
         {text}
        </button>
       
    )
}
export default Click