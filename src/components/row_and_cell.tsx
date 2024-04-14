import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { theme, globalStyles } from "./theme";
import { type Style } from "@react-pdf/types";
import React, { isValidElement } from "react";

type VariantRowAndCell = "grid" | "square" | "dotted";

// SECTION: ROW

type PropsRow = {
  children: React.ReactNode;
  border?: boolean;
  style_row?: Style;
  fixed?: boolean;
  top?: boolean;
  bb_row?: boolean;
  bl_row?: boolean;
  variant?: VariantRowAndCell;
  break_section?: boolean;

  head_bold?: boolean;
  height_head_cell?: number;
  height_content_cell?: number;
  br_head?: boolean;
  bb_head?: boolean;
  global_style_wrap?: Style;
  global_style_head?: Style;
  global_style_content?: Style;
  br_cell?: boolean;
  bt_content?: boolean;
  br_content?: boolean;
};

export function Row({
  children,
  style_row,
  border = true,
  fixed,
  top,
  bb_row = true,
  bl_row = true,
  variant = "grid",
  break_section,

  ...propsChild
}: PropsRow) {
  const stylesVariants = {
    grid: {
      border: border ? theme.border() : "none",
      borderRight: "none",
      borderTop: top ? theme.border() : "none",
      ...(!bl_row
        ? {
            borderLeft: "none",
          }
        : {}),
      ...(!bb_row
        ? {
            borderBottom: "none",
          }
        : {}),
    },
    square: {
      border: "none",
    },

    dotted: {
      border: "none",
    },
  };

  const styles = StyleSheet.create({
    wrap_row: {
      display: "flex",
      flexDirection: "row",
      ...stylesVariants[variant as keyof typeof stylesVariants],
      ...style_row,
    },
  });

  const addChildrenProps = React.Children.map(
    children,
    (child: React.ReactNode) => {
      if (isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<PropsCell>, {
          ...propsChild,
          variant,
        });
      }
      return child;
    }
  );

  return (
    <View fixed={fixed} style={styles.wrap_row} break={break_section}>
      {addChildrenProps}
    </View>
  );
}

// SECTION: CELL
type PropsCell = {
  head_bold?: boolean;
  height_head_cell?: number;
  height_content_cell?: number;

  label?: string;
  value?: string | null | undefined;
  width: number;
  inline?: boolean;
  width_head?: number;
  width_content?: number;
  br_head?: boolean;
  bb_head?: boolean;
  bt_content?: boolean;
  br_content?: boolean;
  numeration?: string;
  page_indicator?: boolean;
  variant_pagination?: VariantsPageIndicator;
  separator_pagination?: string;

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
  variant?: VariantRowAndCell;
};

export function Cell({
  head_bold = true,
  height_head_cell,
  height_content_cell,
  label,
  value,
  width,
  inline,
  width_head,
  width_content,
  br_head = inline ? true : false,
  bb_head = !inline ? true : false,
  bt_content = false,
  br_content = inline ? true : false,
  numeration,
  page_indicator,
  variant_pagination = "standar",
  separator_pagination,

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
  variant = "grid",
}: PropsCell) {
  const stylesVariants = {
    grid: {
      wrap_cell: {
        borderRight: br_cell ? theme.border() : "none",
      },
      head: {
        borderBottom: !inline && bb_head ? theme.border() : "none",
        borderRight: inline && br_head ? theme.border() : "none",
      },
      content: {},
    },
    square: {
      wrap_cell: {},
      head: {
        border: "none",
      },
      content: {
        border: theme.border(),
        borderTop: bt_content ? theme.border() : "none",
        borderRight: br_content ? theme.border() : "none",
      },
    },

    dotted: {
      wrap_cell: {},
      head: {
        border: "none",
      },
      content: {
        border: "none",
        borderBottom: theme.border(),
      },
    },
  };

  const styles = StyleSheet.create({
    wrap_cell: {
      display: "flex",
      width: `${width}%`,
      flexDirection: inline ? "row" : "column",
      position: "relative",

      ...stylesVariants[variant].wrap_cell,

      ...global_style_wrap,
      ...style_wrap,
    },

    head_cell: {
      ...globalStyles.cell,
      ...globalStyles.flex,
      height: height_head_cell || "auto",
      width: inline ? `${width_head}%` : "100%",
      backgroundColor: theme.cell.bg_head,
      textAlign: theme.cell.text_align_head as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,
      color: theme.cell.color_head,
      fontFamily: head_bold ? theme.cell.fontFamily : theme.font,

      ...stylesVariants[variant].head,

      ...global_style_head,
      ...style_head,
    },

    head_cell_text: {
      width: "100%",
    },

    content_cell: {
      ...globalStyles.cell,
      ...globalStyles.flex,
      height: height_content_cell || "auto",
      width: inline ? `${width_content}%` : "100%",
      color: theme.cell.color_content,
      textAlign: theme.cell.text_align_content as
        | "center"
        | "left"
        | "right"
        | "justify"
        | undefined,

      ...stylesVariants[variant].content,

      ...global_style_content,
      ...style_content,
    },
    content_cell_text: {
      width: "100%",
    },
  });

  return (
    <View style={styles.wrap_cell}>
      {children ? (
        children
      ) : (
        <>
          {render_head ? (
            render_head()
          ) : !hide_head ? (
            <View style={styles.head_cell}>
              {numeration && (
                <Text style={globalStyles.numeration}>{numeration}</Text>
              )}
              <Text style={styles.head_cell_text}>{label}</Text>
            </View>
          ) : null}
          {render_content ? (
            render_content()
          ) : !hide_content ? (
            <View style={styles.content_cell}>
              {value && <Text style={styles.content_cell_text}>{value}</Text>}
              {page_indicator && (
                <PageIndicator
                  variant_pagination={variant_pagination}
                  separator={separator_pagination}
                />
              )}
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}

// SECTION: PAGE INDICATOR

type PropsPageIndicator = {
  variant_pagination?: VariantsPageIndicator;
  separator?: string;
};
type VariantsPageIndicator = "verbose" | "standar";

export function PageIndicator({
  variant_pagination = "standar",
  separator = "-",
}: PropsPageIndicator) {
  const styles = StyleSheet.create({
    text: {
      width: "100%",
    },
  });

  const format = (pageNumber: number, totalPages: number): string => {
    const list = {
      verbose: `PÁGINA ${pageNumber} DE ${totalPages}`,
      standar: `${pageNumber} ${separator} ${totalPages}`,
    };

    return list[variant_pagination];
  };

  return (
    <Text
      style={styles.text}
      render={({ pageNumber, totalPages }) => format(pageNumber, totalPages)}
    />
  );
}
