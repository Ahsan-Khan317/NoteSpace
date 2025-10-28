function Heading({size,text, color="text-white",sm ="not-sm:text-4xl "}){
    return(
        <h1 className={` ${size} ${color} ${sm} font-bold not-sm:pt-3 `}>{text}</h1>
    )
}
export default Heading