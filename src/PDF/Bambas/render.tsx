import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { Cell, PageIndicator, Row } from "../../components/row_and_cell";
import { globalStyles } from "../../components/theme";
import { HeadSection } from "../../components/head_section";
import Separator from "../../components/separator";
import { Option, WrapOptions } from "../../components/options";
import Cabecera from "./cabecera";

function Render() {
  // custom

  return (
    <>
      <PDFViewer width={630} height={750}>
        <Document>
          <Page size={"A4"} style={globalStyles.page}>
            <Cabecera />
            <Separator margin={4} />

            <HeadSection label="DATOS DEL EMPLEADOR PRINCIPAL:" />

            <Row style_row={{ width: "auto" }}>
              <Cell
                width={50}
                label="Descripción"
                render_content={() => <PageIndicator />}
              />
            </Row>
            <Row style_row={{ width: 250 }}>
              <Cell width={100} label="Descripción" value="asdasd" />
            </Row>

            <Row>
              <Cell
                width={100}
                label="Options"
                render_content={() => (
                  <WrapOptions columns={3}>
                    <Option label="ACCIDENTE LEVE" selected />
                    <Option label="ACCIDENTE MORTAL" />
                    <Option label="ACCIDENTE INCAPACITANTE" />
                    <Option label="ACCIDENTE INCAPACITANTE" />
                    <Option label="ACCIDENTE INCAPACITANTE" />
                  </WrapOptions>
                )}
              />
            </Row>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default Render;
