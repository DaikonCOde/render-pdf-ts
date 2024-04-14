import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { DetalleAccidente } from "./detalle_accidente";
import { DatosReportante } from "./datos_reportante";
import { MitigacionIncidente } from "./mitigacion_incidente";

function RenderHNGCMH() {
  // custom
  theme.cell.bg_head = "#e7e6e6";
  theme.cell.color_content = "#4f42ff";
  theme.cell.text_align_content = "left";
  theme.head_section.bg = "#1e365d";
  theme.head_section.text_align = "left";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={globalStyles.page}>
          <Cabecera />

          <DetalleAccidente />

          <DatosReportante />

          <MitigacionIncidente />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGCMH;
