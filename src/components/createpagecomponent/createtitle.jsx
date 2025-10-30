function Createtitle ({white ="Create",grad="Notes"}){
    return(
          <div className="flex gap-2 pt-2.5 justify-center ">
        <span className="text-white text-5xl">
            {white}
        </span>
        <span className="font-darkmode  text-6xl  bg-linear-to-r from-red-700 to-blue-300 bg-clip-text text-transparent">{grad}</span>
        </div>
    )
}
export default Createtitle