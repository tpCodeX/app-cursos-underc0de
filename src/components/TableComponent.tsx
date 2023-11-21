import { iCurso, iCursoDB } from "@/libs/Helpers"

const TableComponent = (data: { data: iCursoDB[] }) => {

  const cursos = data.data
  console.log(cursos)


  return (
    <div className="w-[1500px] min-h-[1000px] bg-indigo-950 m-auto mt-10 rounded-2xl overflow-hidden">
      <div className="flex text-left p-5 justify-between text-4xl bg-indigo-800 ">
        <p className="block w-[150px] px-5">ID</p>
        <p className="block w-full " >Nombre</p>
        <p className="block w-[400px] px-20">Enlace</p>
      </div>
      {cursos?.map((curso) => {
        return (
          <div className="flex justify-between p-10 text-left text-2xl h-[100px]">
            <p className="block w-[150px]">{curso.id}</p>
            <p className="block w-full  " >{curso.nombre}</p>
            <div className="w-[400px]">
              <a href={curso.enlace} target="_blank" className="">
              <div className="m-auto bg-green-600 w-1/2 text-center rounded-xl text-3xl py-2 cursor-pointer hover:underline hover:scale-110 transition-all">
                Descargar
              </div>
              </a>
              
            </div>
          </div>)
      })}

    </div>
  )
}

export default TableComponent