import { useContext } from "react"
import { LanguageContext } from "../App"


export default function Details() {
  const lang = useContext(LanguageContext)
  return(
    <section>
      <h3>{lang["details.header"]}</h3>
      <p>{lang["details.text"]}</p>
    </section>
  )
}