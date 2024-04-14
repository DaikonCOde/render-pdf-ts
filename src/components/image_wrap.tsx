import { type Style } from "@react-pdf/types";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { globalStyles, theme } from "./theme";

type TypesWrapImage = {
  children: React.ReactNode;
  border?: boolean;
  top?: boolean;
  style_wrap?: Style;
};

export function WrapImage({
  children,
  border = true,
  top,
  style_wrap,
}: TypesWrapImage) {
  const styles = StyleSheet.create({
    wrap_image: {
      ...globalStyles.flex,
      flexWrap: "wrap",
      flexDirection: "row",
      padding: 2,
      border: border ? theme.border() : "none",
      borderTop: top ? theme.border() : "none",

      ...style_wrap,
    },
  });

  return <View style={styles.wrap_image}>{children}</View>;
}

type PropsImg = {
  src?: string;
  description?: string;
  width?: number | string;
  height?: number | string;

  style_img?: Style;
  style_description?: Style;
};

export function Img({
  src,
  width,
  height,
  description,
  style_img,
  style_description,
}: PropsImg) {
  const styles = StyleSheet.create({
    wrap_image: {
      margin: 2,
      width: "auto",
    },
    img: {
      height: height || 40,
      width: width || "auto",
      aspectRatio: "16/9",
      objectFit: "contain",
      ...style_img,
    },
    wrap_description: {
      marginVertical: 8,
      width: width ? width : "auto",
      textAlign: "center",
      ...style_description,
    },
    description: {},
  });

  return (
    <View style={styles.wrap_image}>
      {src && <Image src={src} style={styles.img} />}

      {description && (
        <View style={styles.wrap_description}>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
}
