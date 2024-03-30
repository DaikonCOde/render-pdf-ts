import { StyleSheet } from "@react-pdf/renderer";

export const theme = {
  border: "1px solid #212121",

  font: "Helvetica",
  fontBold: "Helvetica-Bold",
  fontSize: 8,

  cell: {
    bg_head: "#3333",
    color_head: "black",
    color_content: "black",
    text_align_head: "center",
    text_align_content: "center",
  },

  head_section: {
    bg: "#212121",
    text_align: "center",
    color: "white",
  },

  textarea: {
    min_height: 60,
    text_align: "left",
  },
};

export const globalStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: theme.fontSize,
    fontFamily: "Helvetica",
  },
  cell: {
    padding: 2,
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
