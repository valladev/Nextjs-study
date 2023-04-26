import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Buscar() {
   const router = useRouter()
   const codigo = router.query.codigo
   const nome = router.query.nome

   return (
      <div>
         <h1>Rotas / {codigo} / {nome}</h1>
         <Link href={"/routes"} passHref>
            <button>Voltar</button>
         </Link>
      </div>
   )
};
