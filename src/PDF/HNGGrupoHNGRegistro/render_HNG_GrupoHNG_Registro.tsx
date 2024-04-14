import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { DatosEmpleador } from "./datos_empleador";
import { DatosTrabajador } from "./datos_trabajador";
import { InvestigacionAccidente } from "./investigacion_accidente";
import { Descripcion } from "./descripcion";
import { MCResponsables } from "./mc_responsables";

function RenderHNGGrupoHNGRegistro() {
  // custom
  theme.cell.bg_head = "#f2f2f2";
  (theme.cell.fontFamily = theme.font),
    //   theme.cell.color_content = "#4f42ff";
    // theme.cell.text_align_content = "left";
    //   theme.cell.text_align_head = "left";

    //   theme.border_style = "dotted";

    (theme.head_section.bg = "#7ba651");
  theme.head_section.color = "white";
  theme.head_section.text_align = "left";
  //   theme.head_section.border = "none";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={globalStyles.page}>
          <Cabecera />

          <DatosEmpleador />

          <DatosTrabajador />

          <InvestigacionAccidente />

          <Descripcion />

          <MCResponsables />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGGrupoHNGRegistro;
