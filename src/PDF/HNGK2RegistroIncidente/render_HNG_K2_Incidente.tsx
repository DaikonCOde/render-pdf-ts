import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { DatosEmpleador } from "./datos_empleador";
import { DatosTrabajador } from "./datos_trabajador";
import { InvestigacionAccidente } from "./investigacion_accidente";
import { Causas } from "./causas";
import { MCResponsables } from "./mc_responsables";

function RenderHNGK2Incidente() {
  // custom
  theme.cell.bg_head = "transparent";

  theme.head_section.bg = "#31869b";
  theme.head_section.color = "white";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={globalStyles.page}>
          <Cabecera />

          <DatosEmpleador />

          <DatosTrabajador />

          <InvestigacionAccidente />

          <Causas />

          <MCResponsables />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGK2Incidente;
