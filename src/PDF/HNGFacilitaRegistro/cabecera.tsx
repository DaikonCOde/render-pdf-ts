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
          hide_content
          label="REGISTRO E INVESTIGACIÓN DE ACCIDENTES DE TRABAJO"
          height_head_cell={44}
          bb_head={false}
          style_head={{
            fontSize: theme.fontSize + 2,
            backgroundColor: "transparent",
            fontFamily: theme.fontBold,
          }}
        />
        <Cell width={20}>
          <Row style_row={{ borderLeft: "none" }} height_head_cell={14}>
            <Cell
              width={100}
              label="CÓDIGO:"
              value={"F-SST-06"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{ fontFamily: theme.fontBold }}
              style_content={{ fontFamily: theme.fontBold }}
            />
          </Row>
          <Row style_row={{ borderLeft: "none" }} height_head_cell={14}>
            <Cell
              width={100}
              label="VESRIÓN:"
              value={"01"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{ fontFamily: theme.fontBold }}
              style_content={{ fontFamily: theme.fontBold }}
            />
          </Row>
          <Row border={false} height_head_cell={14}>
            <Cell
              width={100}
              label="FECHA:"
              value={"18/08/2019"}
              inline
              width_head={50}
              width_content={50}
              br_cell={false}
              style_head={{ fontFamily: theme.fontBold }}
              style_content={{ fontFamily: theme.fontBold }}
            />
          </Row>
        </Cell>
      </Row>

      <Separator margin={4} />
    </>
  );
}
