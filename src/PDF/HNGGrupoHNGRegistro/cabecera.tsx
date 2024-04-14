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
          width={55}
          hide_content
          label="REGISTRO DE ACCIDENTES DE TRABAJO"
          height_head_cell={44}
          bb_head={false}
          style_head={{
            fontSize: theme.fontSize + 2,
            backgroundColor: "transparent",
            fontFamily: theme.fontBold,
          }}
        />
        <Cell width={25}>
          <Row style_row={{ borderLeft: "none" }} height_head_cell={14}>
            <Cell
              width={100}
              label="Código:"
              value={"HNG-GI-FM-046"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{
                textAlign: "left",
                backgroundColor: "transparent",
                fontFamily: theme.fontBold,
              }}
              style_content={{ textAlign: "left", fontFamily: theme.fontBold }}
            />
          </Row>
          <Row style_row={{ borderLeft: "none" }} height_head_cell={14}>
            <Cell
              width={100}
              label="Versión:"
              value={"01"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{
                textAlign: "left",
                backgroundColor: "transparent",
                fontFamily: theme.fontBold,
              }}
              style_content={{ textAlign: "left", fontFamily: theme.fontBold }}
            />
          </Row>
          <Row border={false} height_head_cell={14}>
            <Cell
              width={100}
              label="Fecha:"
              value={"18/03/2023"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{
                textAlign: "left",
                backgroundColor: "transparent",
                fontFamily: theme.fontBold,
              }}
              style_content={{ textAlign: "left", fontFamily: theme.fontBold }}
            />
          </Row>
        </Cell>
      </Row>
      <Separator margin={4} />

      <Row style_row={{ width: 150 }} top>
        <Cell
          width={100}
          label="N° DE REGISTRO"
          value={"002-2020"}
          style_head={{ backgroundColor: "black", color: "white" }}
          inline
          width_head={50}
          width_content={50}
        />
      </Row>

      <Separator margin={4} />
    </>
  );
}
