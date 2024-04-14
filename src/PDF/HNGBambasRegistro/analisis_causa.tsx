import { Text, View } from "@react-pdf/renderer";
import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import { Option, WrapOptions } from "../../components/options";

export function AnalisisCausa() {
  return (
    <>
      <HeadSection
        label="ANÁLISIS CAUSA ICAM (EVENTOS CON LESIONES NIVEL 3,4 Y 5) (EVENTOS DAÑO A LA PROPIEDAD NIVEL 4 Y 5"
        style_wrap={{ backgroundColor: "#c00000", color: "white" }}
      />
      <View style={{ backgroundColor: "#f2dcdb" }}>
        <Row
          variant="square"
          global_style_head={{ textAlign: "left" }}
          bt_content
          head_bold={false}
        >
          <Cell
            width={40}
            label="Defensas ausentes / fallidas"
            value={"asdsa"}
          />
          <Cell width={60} label="Descripción" value={"asdsa"} br_content />
        </Row>

        <Row
          variant="square"
          global_style_head={{ textAlign: "left" }}
          bt_content
          head_bold={false}
        >
          <Cell
            width={40}
            label="Acciones individuales o de equipo"
            value={"asdsa"}
          />
          <Cell width={60} label="Descripción" value={"asdsa"} br_content />
        </Row>

        <Row
          variant="square"
          global_style_head={{ textAlign: "left" }}
          bt_content
          head_bold={false}
        >
          <Cell
            width={40}
            label="Condiciones de tarea / entorno y Factores Humano"
            value={"asdsa"}
          />
          <Cell width={60} label="Descripción" value={"asdsa"} br_content />
        </Row>

        <Row
          variant="square"
          global_style_head={{ textAlign: "left" }}
          bt_content
          head_bold={false}
        >
          <Cell width={40} label="Factores organizacionales" value={"asdsa"} />
          <Cell width={60} label="Descripción" value={"asdsa"} br_content />
        </Row>
      </View>

      <HeadSection
        label="ANÁLISIS CAUSA 5 PORQUE (EVENTOS DE LESIONES NIVEL 1 Y 2) (EVENTOS DAÑOS A LA PROPIEDAD NIVEL 1, 2 Y 3)"
        style_wrap={{ backgroundColor: "#c00000", color: "white" }}
      />
      <Row global_style_head={{ textAlign: "center" }} bb_head={false}>
        <Cell width={25} label="Causas Inmediatas" hide_content />
        <Cell width={25} label="Causas Básicas" hide_content />
        <Cell width={50} label="Descripción" hide_content />
      </Row>
      <Row global_style_content={{ textAlign: "center" }}>
        <Cell width={25} value="Causas Inmediatas" hide_head />
        <Cell width={25} value="Causas Básicas" hide_head />
        <Cell width={50} value="Descripción" hide_head />
      </Row>

      <HeadSection
        label="Evaluación de peligros y riesgos previa implementación de controles"
        bb
      />
      <Row>
        <Cell
          width={100}
          label="Se identifican peligros y riesgos nuevos o diferentes o la necesidad de controles nuevos o cambios"
          style_head={{ textAlign: "left" }}
          head_bold={false}
          render_content={() => (
            <>
              <WrapOptions columns={2}>
                <Option label="Si" selected />
                <Option label="No" />
              </WrapOptions>
              <Text style={{ padding: 2 }}>
                Si la respuesta es si, indicar IPERC en el cual se ha realizado
                la modificación o la nueva evaluación: RESGUARDO Y VIGILANCIA
              </Text>
            </>
          )}
        />
      </Row>
    </>
  );
}
