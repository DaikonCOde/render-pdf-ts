import { Cell, Row } from "../../components/row_and_cell";
import { Img } from "../../components/image_wrap";
import Separator from "../../components/separator";

export function Cabecera() {
  return (
    <>
      <Row top>
        <Cell width={20}>
          <Img src="/flow.png" />
        </Cell>
        <Cell width={50}>
          <Row
            height_head_cell={28}
            border={false}
            global_style_head={{ backgroundColor: "transparent" }}
          >
            <Cell
              width={100}
              br_cell={false}
              label="CONSORCIO TECNOMIN PENTATECH"
              hide_content
              style_head={{ fontSize: 9, textAlign: "center" }}
            />
          </Row>
          <Row
            border={false}
            global_style_head={{ backgroundColor: "transparent" }}
          >
            <Cell
              br_cell={false}
              width={100}
              label={`FLASH REPORT \n ACCIDENTE DE TRABAJO 001`}
              style_head={{ fontSize: 9, textAlign: "center" }}
              hide_content
              bb_head={false}
            />
          </Row>
        </Cell>

        <Cell width={30}>
          <Row
            global_style_head={{
              backgroundColor: "transparent",
              textAlign: "left",
            }}
            style_row={{ borderLeft: "none" }}
            br_cell={false}
          >
            <Cell
              width={100}
              label="Código"
              value="asd"
              inline
              width_content={50}
              width_head={50}
            />
          </Row>
          <Row
            br_cell={false}
            style_row={{ borderLeft: "none" }}
            global_style_head={{
              backgroundColor: "transparent",
              textAlign: "left",
            }}
          >
            <Cell
              width={100}
              label="Revisión"
              value="01"
              inline
              width_content={50}
              width_head={50}
            />
          </Row>
          <Row
            br_cell={false}
            style_row={{ borderLeft: "none" }}
            global_style_head={{
              backgroundColor: "transparent",
              textAlign: "left",
            }}
          >
            <Cell
              width={100}
              label="Área"
              value="Proyectos"
              inline
              width_content={50}
              width_head={50}
            />
          </Row>
          <Row
            br_cell={false}
            border={false}
            global_style_head={{
              backgroundColor: "transparent",
              textAlign: "left",
            }}
          >
            <Cell
              width={100}
              label="Páginas"
              inline
              width_content={50}
              width_head={50}
              page_indicator
            />
          </Row>
        </Cell>
      </Row>

      <Separator margin={8} />
    </>
  );
}
