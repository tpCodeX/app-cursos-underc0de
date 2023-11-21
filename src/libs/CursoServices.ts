import { PrismaClient } from "@prisma/client";
import { iCurso } from "./Helpers";

export class CursoServices {
  constructor() {
    this.client = new PrismaClient();
  }
  private client: PrismaClient;

  async findCursos() {
    try {
      const cursos = await this.client.cursos.findMany();
      return cursos as iCurso[];
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  async registerCursos(cursos: iCurso[]) {
    try {
      cursos?.map(async (curso)=>{
        await this.client.cursos.create({
          data: curso
        });
      })
      } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
