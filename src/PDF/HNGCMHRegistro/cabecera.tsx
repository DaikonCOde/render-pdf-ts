import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function Cabecera() {
  return (
    <>
      <Row
        top
        fixed
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid", textAlign: "center" }}
        global_style_wrap={{ borderStyle: "solid" }}
      >
        <Cell
          width={20}
          hide_head
          render_content={() => <Img src="/flow.png" />}
        />
        <Cell
          width={60}
          hide_content
          label="INVESTIGACIÓN DE INCIDENTE / ACCIDENTE"
          height_head_cell={44}
          bb_head={false}
          style_head={{
            backgroundColor: "#1f365e",
            color: "white",
            fontSize: theme.fontSize + 1,
          }}
        />
        <Cell
          width={20}
          height_head_cell={22}
          label="PG22-F-03"
          page_indicator
          variant_pagination="verbose"
          height_content_cell={22}
        />
      </Row>
    </>
  );
}
