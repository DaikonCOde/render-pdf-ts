import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";

export function Responsables() {
  return (
    <>
      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{
          borderStyle: "solid",
          textAlign: "center",
          backgroundColor: "#c5d9f1",
        }}
        global_style_wrap={{ borderStyle: "solid" }}
      >
        <Cell width={25} label="CARGO" hide_content bb_head={false} />
        <Cell
          width={40}
          label="NOMBRES Y APELLIDOS"
          hide_content
          bb_head={false}
        />
        <Cell width={22.5} label="FIRMA" hide_content bb_head={false} />
        <Cell width={12.5} label="FECHA" hide_content bb_head={false} />
      </Row>

      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid" }}
        global_style_wrap={{ borderStyle: "solid" }}
        height_content_cell={40}
      >
        <Cell width={25} value="CARGO" hide_head />
        <Cell width={40} value="NOMBRES Y APELLIDOS" hide_head />
        <Cell
          width={22.5}
          render_content={() => <Img src="/flow.png" />}
          hide_head
        />
        <Cell width={12.5} value="FECHA" hide_head />
      </Row>
    </>
  );
}
