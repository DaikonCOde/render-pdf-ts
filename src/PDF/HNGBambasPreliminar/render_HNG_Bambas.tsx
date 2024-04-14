import {
  Document,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";
import { DetalleAccidente } from "./detalle_accidente";
import { DescripcionFotos } from "./descripcion_fotos";

function RenderHNGBambas({ data }: { data: any }) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#f24822",
    },

    bg: {
      position: "absolute",
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
      width: "100%",
      height: "100%",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    content: {
      position: "relative",
      margin: "60px 0",
      backgroundColor: "white",
    },
  });

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
        <Page size={"A4"} style={[globalStyles.page, styles.page]}>
          <View style={styles.bg}>
            <Image style={styles.img} src={"/flow.png"} />
          </View>

          <View style={styles.content}>
            <DetalleAccidente />

            <DescripcionFotos />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderHNGBambas;
