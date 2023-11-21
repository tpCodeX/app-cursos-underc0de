import { useEffect, useState } from "react";


export interface iCurso{
  nombre:string;
  enlace:string;
}

export interface iCursoDB extends iCurso{
  id:string|number;
}



export function useFetchCursos (){


  const [data, setData] = useState([]as iCursoDB[]);
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState<null|string|Error>(null);

  const url=process.env.CURSOS_URL

  
  console.log(url, typeof url)
  const url2='http://localhost:3000/api/cursos'

  useEffect(() => {
    fetch(url2)
      .then((response) => response.json())
      .catch((error) => setError(error))
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data , loading,error };
};

