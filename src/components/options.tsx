import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React, { isValidElement } from "react";
import { globalStyles, theme } from "./theme";

type PropsWrapOptions = {
  children: React.ReactNode;
  columns: number;
  reverse?: boolean;
};

export function WrapOptions({ children, ...propsChild }: PropsWrapOptions) {
  const styles = StyleSheet.create({
    wrap_options: {
      ...globalStyles.flex,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
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
};
export function Option({ label, selected, columns, reverse }: PropsOption) {
  const styles = StyleSheet.create({
    wrap_option: {
      ...globalStyles.flex,
      flexDirection: "row",
      padding: 2,
      width: `${100 / (columns || 1)}%`,
    },
    label: {
      marginHorizontal: 5,
    },
    select: {
      width: 15,
      height: 15,
      padding: 2,
      border: theme.border,
      textAlign: "center",
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
