import { Cell, Row } from "../../components/row_and_cell";
import { Img } from "../../components/image_wrap";

export function Cabecera() {
  return (
    <>
      <Row
        top
        bb_head={false}
        global_style_head={{ backgroundColor: "transparent", fontSize: 10 }}
        height_head_cell={40}
      >
        <Cell width={20}>
          <Img />
        </Cell>
        <Cell
          width={60}
          label="REPORTE DE INCIDENTE / ACCIDENTE"
          hide_content
        />
        <Cell width={20} label="PG22-F-01" />
      </Row>
      <Row>
        <Cell
          width={100}
          hide_head
          value={`Este reporte debe ser presentado dentro de las 12 horas de ocurrido el evento al área de Seguridad. \n En caso el evento cause lesiones a más de un trabajador, debe consignarse un registro por cada trabajador.`}
          style_content={{ fontSize: 7, color: "black", textAlign: "center" }}
        />
      </Row>
    </>
  );
}
