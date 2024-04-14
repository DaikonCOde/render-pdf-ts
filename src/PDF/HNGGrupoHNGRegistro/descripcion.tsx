import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function Descripcion() {
  return (
    <>
      <HeadSection
        style_wrap={{ textAlign: "center" }}
        bt={false}
        bb
        label="DESCRIPCIÓN DEL ACCIDENTE DE TRABAJO"
        numeration="32"
      />
      <Textarea value={"asdasd"} border />

      <Row>
        <Cell
          width={100}
          width_head={15}
          width_content={85}
          label="ADJUNTOS"
          value={` - Informe del Accidente
            - Copia del Descanso médico`}
          inline
          style_content={{ textAlign: "left" }}
        />
      </Row>

      <HeadSection
        style_wrap={{ textAlign: "center", backgroundColor: "black" }}
        bt={false}
        bb
        label="DESCRIPCIÓN DE LAS CAUSAS QUE ORIGINARON EL ACCIDENTE DE TRABAJO"
        numeration="33"
        break_section
      />
      <Row bb_row={false}>
        <Cell
          width={100}
          label="1.- ¿Por qué ocurrió el accidente?"
          value={` - Informe del Accidente`}
          style_content={{ textAlign: "left" }}
          style_head={{ textAlign: "left", backgroundColor: "transparent" }}
          bb_head={false}
        />
      </Row>
      <Row bb_row={false}>
        <Cell
          width={100}
          label="2.- ¿El trabajador contaba con los equipos de seguridad?"
          value={` - Informe del Accidente`}
          style_content={{ textAlign: "left" }}
          style_head={{ textAlign: "left", backgroundColor: "transparent" }}
          bb_head={false}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="3.- ¿Por qué se sujeta a la baranda?"
          value={` - Informe del Accidente`}
          style_content={{ textAlign: "left" }}
          style_head={{ textAlign: "left", backgroundColor: "transparent" }}
          bb_head={false}
        />
      </Row>
    </>
  );
}
