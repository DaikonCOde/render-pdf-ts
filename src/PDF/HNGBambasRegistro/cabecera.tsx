import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { theme } from "../../components/theme";

export function Cabecera() {
  const styles = StyleSheet.create({
    content: {
      backgroundColor: "red",
      padding: "3px 3px 5px 3px",
    },

    subtitle: {
      fontFamily: theme.fontBold,
      width: "100%",
      marginBottom: 10,
      color: "white",
    },

    title: {
      fontFamily: theme.fontBold,
      width: "100%",
      fontSize: 9,
      color: "white",
    },
  });

  return (
    <>
      <View style={styles.content} fixed>
        <Text style={styles.subtitle}>
          FORMATO - Especifico del sitio (Las Bambas)
        </Text>

        <Text style={styles.title}>
          INFORME FINAL DE INVESTIGACIÓN DE EVENTO
        </Text>
        <Text style={styles.title}>GGO-S-F-0012</Text>
      </View>
    </>
  );
}
