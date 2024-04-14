import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function Descripcion() {
  return (
    <>
      <Row
        style_row={{
          marginTop: 10,
          borderLeft: "none",
          borderRight: "none",
        }}
        top
      >
        <Cell
          width={100}
          label="Descripción del Evento:"
          style_head={{ textAlign: "left" }}
          render_content={() => <Textarea value={"asdasd"} />}
          bb_head={false}
          br_cell={false}
        />
      </Row>

      <HeadSection
        label="Descripción de la Pérdida"
        bb
        style_wrap={{ marginBottom: 10 }}
      />

      <Row variant="square" bt_content head_bold={false}>
        <Cell
          width={50}
          label="Gravedad:"
          value={"asdasd"}
          inline
          width_head={60}
          width_content={40}
        />
        <Cell
          width={50}
          label="Grado de incidente con tiempo perdido:"
          value={"asdasd"}
          inline
          width_head={60}
          width_content={40}
        />
      </Row>
      <Row variant="square" head_bold={false}>
        <Cell
          width={50}
          label="N° de días de descanso médico:"
          value={"asdasd"}
          inline
          width_head={60}
          width_content={40}
        />
        <Cell
          width={50}
          label="N° de trabajadores afectado:"
          value={"asdasd"}
          inline
          width_head={60}
          width_content={40}
        />
      </Row>

      <HeadSection
        label="Datos del Supervisor"
        bb
        style_wrap={{ marginBottom: 10 }}
      />

      <Row
        variant="square"
        head_bold={false}
        bt_content
        global_style_head={{ textAlign: "left" }}
        br_content
      >
        <Cell width={65} label="Nombres y Apellidos:" value={"asdasd"} />
        <Cell width={5} hide_content hide_head />

        <Cell width={30} label="DNI/CE/Pasaporte:" value={"asdasd"} />
      </Row>
    </>
  );
}
