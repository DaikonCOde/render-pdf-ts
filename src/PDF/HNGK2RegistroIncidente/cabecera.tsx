import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import Separator from "../../components/separator";
import { theme } from "../../components/theme";

export function Cabecera() {
  return (
    <>
      <Row top>
        <Cell
          width={20}
          hide_head
          render_content={() => <Img src="/flow.png" />}
        />
        <Cell
          width={60}
          label={`FORMATO`}
          height_head_cell={15}
          height_content_cell={28}
          value={"REGISTRO DE INCIDENTES PELIGROSOS E INCIDENTES"}
          style_head={{
            backgroundColor: "transparent",
          }}
          style_content={{
            fontFamily: theme.fontBold,
            fontSize: theme.fontSize + 2,
          }}
        />
        <Cell width={20}>
          <Row style_row={{ borderLeft: "none" }} height_head_cell={14}>
            <Cell
              width={100}
              label="Codigo:"
              value={"GI-SGI-FM-76"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{
                backgroundColor: "transparent",
              }}
              style_content={{ textAlign: "left" }}
            />
          </Row>
          <Row style_row={{ borderLeft: "none" }} height_head_cell={14}>
            <Cell
              width={100}
              label="Version:"
              value={"01"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{
                backgroundColor: "transparent",
              }}
              style_content={{ textAlign: "left" }}
            />
          </Row>
          <Row border={false} height_head_cell={14}>
            <Cell
              width={100}
              label="Fecha:"
              value={"20-07-20"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{
                backgroundColor: "transparent",
              }}
              style_content={{ textAlign: "left" }}
            />
          </Row>
        </Cell>
      </Row>

      <Separator margin={4} />
    </>
  );
}
