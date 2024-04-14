import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import Separator from "../../components/separator";
import { theme } from "../../components/theme";

export function Cabecera() {
  return (
    <>
      <Row
        top
        height_content_cell={30}
        height_head_cell={24}
        global_style_content={{ fontFamily: theme.fontBold }}
        global_style_head={{ backgroundColor: "#d9d9d9" }}
        fixed
      >
        <Cell
          width={20}
          hide_head
          render_content={() => <Img src="/flow.png" height={50} />}
        />
        <Cell
          width={30}
          label="Título"
          value={`FORMATO DE REGISTRO DE INCIDENTES \n PELIGROSOS`}
        />
        <Cell width={10} label={`Inicio de \n vigencia`} value={"1/01/2021"} />
        <Cell width={16} label="Código" value={"FO-SGSST-CSST-003"} />
        <Cell
          width={12}
          label="Página"
          page_indicator
          variant_pagination="standar"
          separator_pagination="de"
        />
        <Cell width={12} label="Versión" value={`0`} />
      </Row>

      <Separator margin={2} />

      <Row top>
        <Cell
          width={100}
          label="Nro. Registro"
          value={"REGISTRO DE INCIDENTES PELIGROSOS"}
          inline
          width_head={20}
          width_content={80}
          style_head={{
            backgroundColor: "transparent",
            textAlign: "left",
          }}
          style_content={{
            fontSize: theme.fontSize + 2,
            fontFamily: theme.fontBold,
          }}
        />
      </Row>
    </>
  );
}
