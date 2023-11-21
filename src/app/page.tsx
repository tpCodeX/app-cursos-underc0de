"use client"
import Image from 'next/image'
import './mainpage.css'
import { useFetchCursos } from '@/libs/Helpers';
import TableComponent from '@/components/TableComponent';
import ErrorMessageComponent from '@/components/ErrorMessageComponent';
export default function Home() {


  const { data, loading, error } = useFetchCursos()

  const cursos=data

  return (
    <main className='fondo-app'>
      <header className=''>
        <div className='text-center'>
          <h1 className='text-5xl text-emerald-700'>Descargá el curso de tu preferencia.</h1>
          <h2 className='text-3xl'>Piratón, como el holandés volador...</h2>
        </div>
      </header>
      <section>
        {cursos? <TableComponent data={...data}/> : <ErrorMessageComponent/> }
      </section>
    </main>
  )
}

{/* {error &&
  <tr className='w-full'>
    <td className='w-full text-center text-2xl text-red-700'>Error: {error.toString()}</td>
  </tr>
}
{loading &&
  <tr className='w-full text-center'>
    <td className='w-full text-2xl text-green-700'> ZºoºZ CargandinG ZºoºZ </td>
  </tr>
}
{data?.map((curso) => {
  return (
    <tr className='w-full flex justify-between'>
      <td className='w-[500px]'>{curso.Nombre}</td>
      <td className='w-[500px]'>{curso.ID}</td>
      <td className='w-[500px]'><a href={curso.Enlace}>Enlace B=D</a></td>
    </tr>
  )
})} */}