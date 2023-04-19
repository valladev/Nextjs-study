import { useState, useEffect } from "react"

export default function questao() {
   const [questao, setQuestao] = useState(null)

   useEffect(() => {
      fetch("http://localhost:3000/api/questao/123")
         .then(resp => resp.json())
         .then(setQuestao)
   }, [])

   function renderQuestao() {
      if (questao) {
         return questao.respostas.map((resp, i) => {
            return <li key={i}>{resp}</li>
         })
      }
      return false
   }

   return (
      <div>
         <h1>Questão 1</h1>
         <div>
            <span>{questao?.id} - {questao?.enunciado}</span>
            <ul>
               {renderQuestao()}
            </ul>
         </div>
      </div>
   )
};
