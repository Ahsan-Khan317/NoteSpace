function Title({properties="not-sm:text-7xl  "}){
return(
    <div className="relative flex flex-1  ">
        <span className={`absolute font-Grinched ${properties} not-sm:left-0 text-9xl tracking-wider top-3 left-24 text-white  `}>Organize</span>
        <span className={`absolute  font-Grinched ${properties} text-9xl top-32 not-sm:top-16 left-20  text-white -rotate-6  `}>your</span>
        <span className={`absolute  font-Grinched ${properties} not-sm:left-1 not-sm:-rotate-12 not-sm:top-28 text-8xl top-40 left-64  text-white rotate-[30px]`}>Thoughts</span>
        <span className={`absolute font-darkmode ${properties} not-sm:left-0 not-sm:top-56 text-9xl top-72 left-24 tracking-wide z-30  bg-gradient-to-r from-red-700 to-blue-300 bg-clip-text text-transparent`}>Beautifully</span>
    </div>
)
}
export default Title