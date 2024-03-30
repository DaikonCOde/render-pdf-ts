import { type Style } from "@react-pdf/types";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { theme } from "./theme";

type PropsTextarea = {
  value: string;
  style?: Style;
};

export default function Textarea({ value }: PropsTextarea) {
  const styles = StyleSheet.create({
    wrap_textarea: {
      padding: 4,
      minHeight: theme.textarea.min_height,
      textAlign: theme.textarea.text_align as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,
    },
  });

  return (
    <View style={styles.wrap_textarea}>
      <Text>{value}</Text>
    </View>
  );
}
