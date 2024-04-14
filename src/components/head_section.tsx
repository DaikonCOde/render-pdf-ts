import { type Style } from "@react-pdf/types";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { globalStyles, theme } from "./theme";

type PropsHeadSection = {
  label: string;
  bb?: boolean;
  bt?: boolean;
  break_section?: boolean;
  style_wrap?: Style;
  numeration?: string;
};

export function HeadSection({
  label,
  bb = false,
  bt = true,
  break_section,
  style_wrap,
  numeration,
}: PropsHeadSection) {
  const styles = StyleSheet.create({
    wrap_section: {
      backgroundColor: theme.head_section.bg,
      padding: "4px 2px",
      fontSize: theme.fontSize,
      textAlign: theme.head_section.text_align as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,
      color: theme.head_section.color,
      border: theme.head_section.border,
      borderBottom: bb ? theme.border() : "none",
      borderTop: bt ? theme.border() : "none",
      fontFamily: theme.head_section.fontFamily,
      ...style_wrap,
    },
  });

  return (
    <View style={styles.wrap_section} break={break_section}>
      {!!numeration && (
        <Text style={globalStyles.numeration}>{numeration}</Text>
      )}
      <Text> {label} </Text>
    </View>
  );
}
