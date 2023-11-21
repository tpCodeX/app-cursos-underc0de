import { iCurso } from '@/libs/Helpers'
import file from '@/libs/cursosUnderc0de.json'
import { NextResponse } from 'next/server'
import {CursoServices} from '@/libs/CursoServices'



export async function GET() {
    
    const cursoServices=new CursoServices();
    const data=cursoServices.findCursos()
   
    return NextResponse.json(data)
};

export async function POST() {
    return NextResponse.json({"respuesta":"XD"})
}