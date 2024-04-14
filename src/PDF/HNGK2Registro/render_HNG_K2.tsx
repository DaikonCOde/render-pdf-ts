import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { DatosEmpleador } from "./datos_empleador";
import { DatosTrabajador } from "./datos_trabajador";
import { Investigacion } from "./investigacion";
import { MCResponsables } from "./mc_responsables";

function RenderHNGK2() {
  // custom
  theme.fontSize = 7;

  theme.cell.bg_head = "#f2f2f2";

  theme.head_section.bg = "#55b8b8";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={globalStyles.page}>
          <Cabecera />

          <DatosEmpleador />

          <DatosTrabajador />

          <Investigacion />

          <MCResponsables />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGK2;
