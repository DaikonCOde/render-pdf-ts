import { Cell, Row } from "../../components/row_and_cell";
import { Img } from "../../components/image_wrap";
import { theme } from "../../components/theme";
import Separator from "../../components/separator";

export function Cabecera() {
  return (
    <>
      <Row top>
        <Cell width={20}>
          <Img src="/flow.png" />
        </Cell>
        <Cell
          hide_content
          bb_head={false}
          style_head={{
            backgroundColor: "transparent",
            fontSize: theme.fontSize + 1,
          }}
          width={60}
          height_head_cell={44}
          label="REGISTRO E INVESTIGACIÓN DE INCIDENTES PELIGROSOS E INCIDENTES"
        />
        <Cell width={20}>
          <Row bl_row={false}>
            <Cell
              width={100}
              label="Código:"
              value="SSOMA-FR-004"
              inline
              width_content={60}
              width_head={40}
              style_head={{
                backgroundColor: "transparent",
              }}
              br_cell={false}
              br_head={false}
            />
          </Row>

          <Row bl_row={false}>
            <Cell
              width={100}
              label="Versión:"
              value="02"
              inline
              width_content={60}
              width_head={40}
              style_head={{
                backgroundColor: "transparent",
              }}
              br_cell={false}
              br_head={false}
            />
          </Row>

          <Row border={false}>
            <Cell
              width={100}
              label="Fecha:"
              value="01-09-2022"
              inline
              width_content={60}
              width_head={40}
              style_head={{
                backgroundColor: "transparent",
              }}
              br_cell={false}
              br_head={false}
            />
          </Row>
        </Cell>
      </Row>

      <Separator margin={4} />
    </>
  );
}
