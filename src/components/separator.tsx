import { type Style } from "@react-pdf/types";
import { StyleSheet, View } from "@react-pdf/renderer";
import { theme } from "./theme";

type PropsSeparator = {
  margin: number;
  break_content?: boolean;
  line?: boolean;
  color_line?: string;
  style_line?: "solid" | "dotted" | "dashed";
  style_separator?: Style;
};

export default function Separator({
  margin,
  break_content,
  line,
  color_line = theme.border_color,
  style_line = theme.border_style as "solid" | "dotted" | "dashed",
  style_separator,
}: PropsSeparator) {
  const styles = StyleSheet.create({
    separator: {
      width: "100%",
      marginVertical: margin,

      ...(line
        ? {
            borderBottom: theme.border(),
            borderColor: color_line,
            borderStyle: style_line,
          }
        : {}),

      ...style_separator,
    },
  });
  return <View style={styles.separator} break={break_content}></View>;
}
