import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function PlanAccion() {
  return (
    <>
      <HeadSection label="PLANES DE ACCIÓN" bt={false} />

      <Row
        top
        global_style_head={{
          textAlign: "center",
          backgroundColor: "#c00000",
          color: "white",
        }}
        height_head_cell={35}
      >
        <Cell
          width={30}
          label="¿Qué? - Acciones"
          hide_content
          bb_head={false}
        />
        <Cell
          width={20}
          label="¿Quién? - Responsable"
          hide_content
          bb_head={false}
        />
        <Cell width={15} label="Cuándo? - Plazo" hide_content bb_head={false} />
        <Cell
          width={15}
          label={`Estado de \n Implementación`}
          hide_content
          bb_head={false}
        />
        <Cell
          width={20}
          label={`Comentarios: \n Verificación de la Eficacia de las Acciones Tomadas`}
          hide_content
          bb_head={false}
        />
      </Row>

      <Row global_style_content={{ textAlign: "center" }}>
        <Cell width={30} value="¿Qué? - Acciones" hide_head />
        <Cell width={20} value="¿Quién? - Responsable" hide_head />
        <Cell width={15} value="Cuándo? - Plazo" hide_head />
        <Cell width={15} value={`Estado de \n Implementación`} hide_head />
        <Cell
          width={20}
          value={`Comentarios: \n Verificación de la Eficacia de las Acciones Tomadas`}
          hide_head
        />
      </Row>

      <HeadSection label="EQUIPO DE INVESTIGACIÓN DEL EVENTO" bt={false} />

      <Row
        global_style_head={{
          textAlign: "center",
          backgroundColor: "#c00000",
          color: "white",
        }}
        top
      >
        <Cell
          width={40}
          label="Nombres y Apellidos"
          hide_content
          bb_head={false}
        />
        <Cell width={15} label="DNI" hide_content bb_head={false} />
        <Cell width={25} label={"Cargo"} hide_content bb_head={false} />
        <Cell width={20} label={"Firma"} hide_content bb_head={false} />
      </Row>

      <Row global_style_content={{ textAlign: "center" }}>
        <Cell width={40} value="¿Qué? - Acciones" hide_head />
        <Cell width={15} value="¿Quién? - Responsable" hide_head />
        <Cell width={25} value="Cuándo? - Plazo" hide_head />
        <Cell width={20} value={`Estado de \n Implementación`} hide_head />
      </Row>
    </>
  );
}
