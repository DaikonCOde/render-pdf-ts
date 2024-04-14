import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { DatosEmpleador } from "./datos_empleador";
import { DatosTrabajador } from "./datos_trabajador";
import { Investigacion } from "./investigacion";
import { Descripcion } from "./descripcion";
import { Causas } from "./causas";
import { MCResponsables } from "./mc_responsables";

function RenderHNGConcrefabRegistroIncidente() {
  // custom
  theme.cell.bg_head = "transparent";
  //   theme.cell.color_content = "#4f42ff";
  // theme.cell.text_align_content = "left";
  //   theme.cell.text_align_head = "left";

  //   theme.border_style = "dotted";

  //   theme.head_section.bg = "transparent";
  theme.head_section.text_align = "left";
  //   theme.head_section.color = "black";
  //   theme.head_section.border = "none";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={globalStyles.page}>
          <Cabecera />

          <DatosEmpleador />
          <DatosTrabajador />

          <Investigacion />

          <Descripcion />
          <Causas />

          <MCResponsables />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGConcrefabRegistroIncidente;
