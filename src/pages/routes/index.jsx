import router, { useRouter } from "next/router"
import Link from "next/link"

const font = {
   color: "#fff",
}

export default function rotas() {

   function navegacaoSimples(url) {
      router.push(url)      
   }

   function navegacaoComParams() {
      router.push({
         pathname: "/routes/params",
         query: {
            id: 123,
            nome: "João",
         }
      })
   }

   return (
      <div>
         <h1>Rotas Index</h1>
         <ul >
            <Link href={"/routes/params?id=19&nome=Joao"}>
               <li style={font}>Params</li>
            </Link>

            <Link href={"/routes/123/buscar"}>
               <li style={font}>Buscar</li>
            </Link>

            <Link href={"/routes/123/joao"}>
               <li style={font}>Nome</li>
            </Link>
         </ul>
         <div style={{ 
            display: "flex", 
            flexDirection: "column",
            alignItems: "flex-start",
         }}>

            <button onClick={navegacaoComParams}>Com Params</button>
            <button onClick={() => router.push("/routes/123/buscar")}>Buscar</button>
            <button onClick={() => navegacaoSimples("/routes/123/joao")}>Joao</button>
         </div>
      </div>
   )
};
