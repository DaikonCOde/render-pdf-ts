import { type Style } from "@react-pdf/types";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React, { isValidElement } from "react";
import { globalStyles, theme } from "./theme";

type PropsWrapOptions = {
  children: React.ReactNode;
  columns: number;
  style_wrap?: Style;
  width_content?: number;

  reverse?: boolean;
  global_style_label?: Style;
  global_style_square?: Style;
  global_style_option?: Style;
};

export function WrapOptions({
  children,
  style_wrap,
  width_content,
  ...propsChild
}: PropsWrapOptions) {
  const styles = StyleSheet.create({
    wrap_options: {
      ...globalStyles.flex,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      width: width_content ? `${width_content}%` : "100%",
      ...style_wrap,
    },
  });

  const addChildrenProps = React.Children.map(
    children,
    (child: React.ReactNode) => {
      if (isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<PropsOption>, {
          ...propsChild,
        });
      }
      return child;
    }
  );

  return <View style={styles.wrap_options}>{addChildrenProps}</View>;
}

type PropsOption = {
  columns?: number;
  reverse?: boolean;
  label: string;
  selected?: boolean;
  style_label?: Style;
  style_square?: Style;
  style_option?: Style;

  global_style_label?: Style;
  global_style_square?: Style;
  global_style_option?: Style;
};
export function Option({
  label,
  selected,
  columns,
  reverse,
  style_label,
  style_square,
  style_option,
  global_style_label,
  global_style_square,
  global_style_option,
}: PropsOption) {
  const styles = StyleSheet.create({
    wrap_option: {
      ...globalStyles.flex,
      flexDirection: "row",
      padding: 2,
      width: `${100 / (columns || 1)}%`,
      ...global_style_option,
      ...style_option,
    },
    label: {
      marginHorizontal: 5,
      ...global_style_label,
      ...style_label,
    },
    select: {
      width: 13,
      height: 13,
      padding: 1,
      border: theme.border(),
      borderStyle: "solid",
      textAlign: "center",
      ...global_style_square,
      ...style_square,
    },
  });

  const labelComponent = () => (
    <View style={styles.label}>
      <Text>{label}</Text>
    </View>
  );
  const selectedComponent = () => (
    <View style={styles.select}>{selected && <Text>X</Text>}</View>
  );

  const render = [labelComponent, selectedComponent];

  if (reverse) render.reverse();

  return (
    <View style={styles.wrap_option}>
      {render.map((component) => component())}
    </View>
  );
}
