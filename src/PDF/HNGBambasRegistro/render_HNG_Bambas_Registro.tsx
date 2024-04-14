import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { DatosTitular } from "./datos_titular";
import { DatosEmpresa } from "./datos_empresa";
import { DatosEvento } from "./datos_evento";
import { Descripcion } from "./descripcion";
import { PersonasInvolucradas } from "./personas_involucradas";
import Separator from "../../components/separator";
import { AnalisisCausa } from "./analisis_causa";
import { PlanAccion } from "./plan_accion";
import { Cell, Row } from "../../components/row_and_cell";

function RenderHNGBambasRegistro() {
  // custom
  theme.border_color = "gray";

  theme.cell.bg_head = "transparent";
  // theme.cell.color_content = "#4f42ff";
  theme.cell.text_align_content = "left";
  theme.cell.text_align_head = "right";

  theme.head_section.bg = "transparent";
  theme.head_section.text_align = "left";
  theme.head_section.color = "black";
  theme.head_section.border = "none";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={[globalStyles.page, { paddingBottom: 35 }]}>
          <Cabecera />

          <DatosTitular />
          <DatosEmpresa />

          <DatosEvento />

          <Descripcion />

          <Separator margin={2} />
          <PersonasInvolucradas />

          <Separator margin={2} />
          <AnalisisCausa />

          <PlanAccion />

          <Row
            style_row={{
              width: 50,
              position: "absolute",
              bottom: 20,
              right: 20,
              textAlign: "right",
              fontSize: 6,
            }}
            border={false}
            fixed
          >
            <Cell
              width={100}
              br_cell={false}
              hide_head
              page_indicator
              variant_pagination="verbose"
            />
          </Row>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGBambasRegistro;
