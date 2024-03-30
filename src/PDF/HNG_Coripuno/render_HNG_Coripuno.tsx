import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { Cabecera } from "./cabecera";
import { Body } from "./body";

function RenderHNGCoripuno() {
  // custom
  theme.cell.bg_head = "transparent";
  // theme.cell.color_content = "#4f42ff";
  theme.cell.text_align_content = "left";
  theme.cell.text_align_head = "left";

  // theme.head_section.bg = "#1e365d";
  // theme.head_section.text_align = "left";

  return (
    <PDFViewer width={630} height={750}>
      <Document>
        <Page size={"A4"} style={globalStyles.page}>
          <Cabecera />
          <Body />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGCoripuno;
