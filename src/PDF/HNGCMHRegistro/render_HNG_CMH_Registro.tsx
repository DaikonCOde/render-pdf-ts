import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { DatosInformante } from "./datos_informante";
import { ClasificacionIncidente } from "./clasificacion_incidente";
import { DatosGenerales } from "./datos_generales";
import { TestigosDescripcion } from "./testigos_descripcion";
import { AnalisisIncidente } from "./analisis_incidente";
import { AccionesCorrectivas } from "./acciones_correctivas";
import { Responsables } from "./responsables";

function RenderHNGCMHRegistro() {
  // custom
  theme.cell.bg_head = "transparent";
  //   theme.cell.color_content = "#4f42ff";
  // theme.cell.text_align_content = "left";
  theme.cell.text_align_head = "left";

  theme.border_style = "dotted";

  theme.head_section.bg = "transparent";
  theme.head_section.text_align = "left";
  theme.head_section.color = "black";
  theme.head_section.border = "none";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={globalStyles.page}>
          <Cabecera />
          <DatosInformante />

          <ClasificacionIncidente />

          <DatosGenerales />

          <TestigosDescripcion />

          <AnalisisIncidente />

          <AccionesCorrectivas />

          <Responsables />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGCMHRegistro;
