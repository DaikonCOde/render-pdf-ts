import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cell, Row } from "../../components/row_and_cell";
import { HeadSection } from "../../components/head_section";
import { Causas } from "./causas";
import { Cabecera } from "./cabecera";
import { DatosEmpleadorP } from "./DatosEmpleadorP.1";

// se modifica el nombre de componente por el del archivo "Render[nombre-carpeta].tsx"
function RenderPulsoRegistro() {
  // custom style

  return (
    <>
      <PDFViewer width={630} height={750}>
        <Document>
          <Page size={"A4"} style={globalStyles.page}>
            <Cabecera />
            <DatosEmpleadorP />
            <Causas />
            {/* contenido */}
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default RenderPulsoRegistro;
