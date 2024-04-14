import { type Style } from "@react-pdf/types";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { theme } from "./theme";

type PropsTextarea = {
  value: string | null | undefined;
  border?: boolean;
  bt?: boolean;
  style?: Style;
};

export default function Textarea({ value, border, bt, style }: PropsTextarea) {
  const styles = StyleSheet.create({
    wrap_textarea: {
      padding: 2,
      minHeight: theme.textarea.min_height,
      textAlign: theme.textarea.text_align as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,
      border: border ? theme.border() : "none",
      borderTop: bt ? theme.border() : "none",
      ...style,
    },
  });

  return (
    <View style={styles.wrap_textarea}>{!!value && <Text>{value}</Text>}</View>
  );
}
