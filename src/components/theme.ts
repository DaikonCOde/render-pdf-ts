import { StyleSheet } from "@react-pdf/renderer";

export const theme = {
  border_color: "#212121",
  border_style: "solid",
  border_width: "1px",

  border: () =>
    `${theme.border_width} ${theme.border_style} ${theme.border_color}`,

  font: "Helvetica",
  fontBold: "Helvetica-Bold",
  fontSize: 8,

  cell: {
    bg_head: "#d9d9d9",
    color_head: "black",
    color_content: "black",
    text_align_head: "center",
    text_align_content: "center",
    fontFamily: "Helvetica-Bold",
  },

  head_section: {
    bg: "#d9d9d9",
    text_align: "center",
    color: "black ",
    border: "1px solid #212121",
    fontFamily: "Helvetica-Bold",
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

  // numeration
  numeration: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 5,
    width: 8,
    height: 8,
    zIndex: 4,
  },
});
