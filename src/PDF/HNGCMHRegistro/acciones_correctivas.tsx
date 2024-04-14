import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function AccionesCorrectivas() {
  return (
    <>
      <HeadSection label="8. ACCIONES CORRECTIVAS" />

      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid", textAlign: "center" }}
        global_style_wrap={{ borderStyle: "solid" }}
        top
      >
        <Cell
          width={30}
          label="ACCIÓN CORRECTIVA / PREVENTIVA"
          hide_content
          bb_head={false}
        />
        <Cell width={35} label="TAREA" hide_content bb_head={false} />
        <Cell width={22.5} label="RESPONSABLE" hide_content bb_head={false} />
        <Cell width={12.5} label="PLAZO" hide_content bb_head={false} />
      </Row>
      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid", textAlign: "center" }}
        global_style_wrap={{ borderStyle: "solid" }}
      >
        <Cell width={30} value="ACCIÓN CORRECTIVA / PREVENTIVA" hide_head />
        <Cell width={35} value="TAREA" hide_head />
        <Cell width={22.5} value="RESPONSABLE" hide_head />
        <Cell width={12.5} value="PLAZO" hide_head />
      </Row>
    </>
  );
}
