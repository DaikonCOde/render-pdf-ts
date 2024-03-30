import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function DatosReportante() {
  return (
    <>
      <HeadSection label="3. DATOS DEL REPORTANTE / ACCIDENTADO / TESTIGOS" />

      <Row>
        <Cell width={15} label="Tipo" hide_content bb_head={false} />
        <Cell width={10} label="DNI" hide_content bb_head={false} />
        <Cell
          width={25}
          label="Nombres y Apellidos"
          hide_content
          bb_head={false}
        />
        <Cell width={10} label="Edad" hide_content bb_head={false} />
        <Cell
          width={20}
          label="Puesto de Trabajo"
          hide_content
          bb_head={false}
        />
        <Cell width={20} label="Empresa" hide_content bb_head={false} />
      </Row>

      <Row global_style_content={{ textAlign: "center" }}>
        <Cell width={15} value="Tipo" hide_head />
        <Cell width={10} value="DNI" hide_head />
        <Cell width={25} value="Nombres y Apellidos" hide_head />
        <Cell width={10} value="Edad" hide_head />
        <Cell width={20} value="Puesto de Trabajo" hide_head />
        <Cell width={20} value="Empresa" hide_head />
      </Row>

      <HeadSection label="4. DATOS DEL EQUIPO O PROPIEDAD DAÑADO O INVOLUCRADO (En caso exista) " />

      <Row>
        <Cell width={15} label="Código" hide_content bb_head={false} />
        <Cell
          width={35}
          label="Descripción de Equipo"
          hide_content
          bb_head={false}
        />
        <Cell
          width={35}
          label="Descripción del Daño (si hubiera)"
          hide_content
          bb_head={false}
        />
        <Cell width={15} label="Estado" hide_content bb_head={false} />
      </Row>

      <Row global_style_content={{ textAlign: "center" }}>
        <Cell width={15} value="Código" hide_head />
        <Cell width={35} value="Descripción de Equipo" hide_head />
        <Cell width={35} value="Decripción del Daño (si hubiera)" hide_head />
        <Cell width={15} value="Estado" hide_head />
      </Row>

      <HeadSection label="5. DESCRIPCIÓN DEL INCIDENTE / ACCIDENTE" />
      <Row global_style_content={{ textAlign: "center" }}>
        <Cell
          width={100}
          hide_head
          render_content={() => <Textarea value="asdasd" />}
        />
      </Row>
    </>
  );
}
