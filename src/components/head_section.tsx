import { type Style } from "@react-pdf/types";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { theme } from "./theme";

type PropsHeadSection = {
  label: string;
  bb?: boolean;
  style_wrap?: Style;
};

export function HeadSection({
  label,
  bb = false,
  style_wrap,
}: PropsHeadSection) {
  const styles = StyleSheet.create({
    wrap_section: {
      backgroundColor: theme.head_section.bg,
      padding: 5,
      fontSize: theme.fontSize + 1,
      textAlign: theme.head_section.text_align as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,
      color: theme.head_section.color,
      border: theme.border,
      borderBottom: bb ? theme.border : "none",
      ...style_wrap,
    },
  });

  return (
    <View style={styles.wrap_section}>
      <Text> {label} </Text>
    </View>
  );
}
