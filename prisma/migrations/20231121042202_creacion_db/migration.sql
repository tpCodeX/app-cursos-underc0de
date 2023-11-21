-- CreateTable
CREATE TABLE "Cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "enlace" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cursos_nombre_key" ON "Cursos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Cursos_enlace_key" ON "Cursos"("enlace");
