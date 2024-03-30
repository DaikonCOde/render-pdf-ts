import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { theme, globalStyles } from "./theme";
import { type Style } from "@react-pdf/types";
import React, { isValidElement } from "react";

// SECTION: ROW

type PropsRow = {
  children: React.ReactNode;
  border?: boolean;
  style_row?: Style;
  fixed?: boolean;
  top?: boolean;

  head_bold?: boolean;
  height_head_cell?: number;
  br_head?: boolean;
  bb_head?: boolean;
  global_style_wrap?: Style;
  global_style_head?: Style;
  global_style_content?: Style;
  br_cell?: boolean;
};

export function Row({
  children,
  style_row,
  border = true,
  fixed,
  top,

  ...propsChild
}: PropsRow) {
  const styles = StyleSheet.create({
    wrap_row: {
      display: "flex",
      flexDirection: "row",
      border: border ? theme.border : "none",
      borderRight: "none",
      borderTop: top ? theme.border : "none",

      ...style_row,
    },
  });

  const addChildrenProps = React.Children.map(
    children,
    (child: React.ReactNode) => {
      if (isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<PropsCell>, {
          ...propsChild,
        });
      }
      return child;
    }
  );

  return (
    <View fixed={fixed} style={styles.wrap_row}>
      {addChildrenProps}
    </View>
  );
}

// SECTION: CELL
type PropsCell = {
  head_bold?: boolean;
  height_head_cell?: number;

  label?: string;
  value?: string | null | undefined;
  width: number;
  inline?: boolean;
  width_head?: number;
  width_content?: number;
  br_head?: boolean;
  bb_head?: boolean;
  numeration?: string;
  page_indicator?: boolean;

  br_cell?: boolean;

  style_wrap?: Style;
  style_head?: Style;
  style_content?: Style;
  global_style_wrap?: Style;
  global_style_head?: Style;
  global_style_content?: Style;

  render_head?: () => JSX.Element;
  render_content?: () => JSX.Element;

  hide_content?: boolean;
  hide_head?: boolean;
  children?: React.ReactNode;
};

export function Cell({
  head_bold = true,
  height_head_cell,
  label,
  value,
  width,
  inline,
  width_head,
  width_content,
  br_head = inline ? true : false,
  bb_head = !inline ? true : false,
  numeration,
  page_indicator,

  br_cell = true,

  style_wrap,
  style_head,
  style_content,
  global_style_wrap,
  global_style_head,
  global_style_content,

  render_head,
  render_content,

  hide_content = false,
  hide_head = false,
  children,
}: PropsCell) {
  const styles = StyleSheet.create({
    wrap_cell: {
      display: "flex",
      width: `${width}%`,
      borderRight: br_cell ? theme.border : "none",
      flexDirection: inline ? "row" : "column",
      position: "relative",

      ...global_style_wrap,
      ...style_wrap,
    },

    head_cell: {
      ...globalStyles.cell,
      ...globalStyles.flex,
      height: height_head_cell || "auto",
      borderBottom: !inline && bb_head ? theme.border : "none",
      borderRight: inline && br_head ? theme.border : "none",
      width: inline ? `${width_head}%` : "100%",
      backgroundColor: theme.cell.bg_head,
      textAlign: theme.cell.text_align_head as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,
      color: theme.cell.color_head,

      ...global_style_head,
      ...style_head,
    },

    head_cell_text: {
      fontFamily: head_bold ? theme.fontBold : theme.font,
      width: "100%",
    },

    content_cell: {
      ...globalStyles.cell,
      ...globalStyles.flex,
      width: inline ? `${width_content}%` : "100%",
      color: theme.cell.color_content,
      textAlign: theme.cell.text_align_content as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,

      ...global_style_content,
      ...style_content,
    },
    content_cell_text: {
      width: "100%",
    },

    // numeration
    numeration: {
      position: "absolute",
      top: 2,
      left: 2,
      fontSize: 6,
      width: 10,
      height: 10,
    },
  });

  return (
    <View style={styles.wrap_cell}>
      {numeration && <Text style={styles.numeration}> {numeration} </Text>}

      {children ? (
        children
      ) : (
        <>
          {render_head ? (
            render_head()
          ) : !hide_head ? (
            <View style={styles.head_cell}>
              <Text style={styles.head_cell_text}>{label}</Text>
            </View>
          ) : null}
          {render_content ? (
            render_content()
          ) : !hide_content ? (
            <View style={styles.content_cell}>
              {value && <Text style={styles.content_cell_text}>{value}</Text>}
              {page_indicator && <PageIndicator />}
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}

// SECTION: PAGE INDICATOR

export function PageIndicator() {
  const styles = StyleSheet.create({
    text: {
      width: "100%",
    },
  });

  return (
    <Text
      style={styles.text}
      render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
    />
  );
}
