import { HeadSection } from "../../components/head_section";
import Textarea from "../../components/textarea";

export function Descripcion() {
  return (
    <>
      <HeadSection label="DESCRIPCION DEL ACCIDENTE DE TRABAJO" bt={false} bb />
      <Textarea
        value={`
        Describa solo los hechos, no escriba información subjetiva que no pueda ser comprobada.
        Adjuntar:
        Declaración del afectado sobre el accidente de trabajo
        Declaración de testigos (De ser el caso)
        Procedimiento, Planos, Registros, entre otros que ayuden a la investigación de ser el caso.
      `}
        border
      />

      <Textarea value={"asdasd"} border style={{ minHeight: 125 }} />
    </>
  );
}
