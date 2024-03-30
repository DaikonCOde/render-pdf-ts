import { StyleSheet, View } from "@react-pdf/renderer";
import { theme } from "./theme";

type PropsSeparator = {
  margin: number;
  break_content?: boolean;
  line?: boolean;
};

export default function Separator({
  margin,
  break_content,
  line,
}: PropsSeparator) {
  const styles = StyleSheet.create({
    separator: {
      width: "100%",
      marginVertical: margin,

      ...(line ? { borderBottom: theme.border } : {}),
    },
  });
  return <View style={styles.separator} break={break_content}></View>;
}
