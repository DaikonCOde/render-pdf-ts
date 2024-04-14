import { StyleSheet } from "@react-pdf/renderer";
import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function Causas() {
  const styles = StyleSheet.create({
    section_31: {
      backgroundColor: "#a6a6a6",
      color: "white",
      textAlign: "left",
    },
    section_31_content: {
      textAlign: "left",
    },
  });
  return (
    <>
      <HeadSection
        label="29. DESCRIPCIÓN DE LAS CAUSAS QUE ORIGINARON EL INCIDENTE PELIGROSO O INCIDENTE"
        bb
        bt={false}
      />

      <Textarea value={"asdd"} border />

      <Row global_style_head={{ backgroundColor: "#8db4e2", color: "white" }}>
        <Cell
          width={40}
          label="Genera SAM"
          inline
          hide_content
          br_head={false}
          width_head={100}
          style_head={{ backgroundColor: "#a6a6a6", color: "white" }}
        />
        <Cell
          width={20}
          label="SI"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
        <Cell
          width={20}
          label="N° SAM"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
        <Cell
          width={20}
          label="NO"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
      </Row>

      <HeadSection
        label="30. DESCRIPCIÓN DE LAS CAUSAS QUE ORIGINARON EL ACCIDENTE DE TRABAJO"
        bb
        bt={false}
      />

      <Textarea value={"asdd"} border />

      <Row global_style_head={{ backgroundColor: "#8db4e2", color: "white" }}>
        <Cell
          width={40}
          label="Genera SAM"
          inline
          hide_content
          br_head={false}
          width_head={100}
          style_head={{ backgroundColor: "#a6a6a6", color: "white" }}
        />
        <Cell
          width={20}
          label="SI"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
        <Cell
          width={20}
          label="N° SAM"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
        <Cell
          width={20}
          label="NO"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
      </Row>

      <HeadSection
        label="31. CONSECUENCIAS DEL ACCIDENTE DE TRABAJO"
        bb
        break_section
        bt={false}
      />

      <Row
        global_style_head={styles.section_31}
        global_style_content={styles.section_31_content}
      >
        <Cell
          width={100}
          label="ACCIDENTE CON BAJA:"
          inline
          width_head={32}
          width_content={68}
          value={"asdd"}
        />
      </Row>
      <Row
        global_style_head={styles.section_31}
        global_style_content={styles.section_31_content}
      >
        <Cell
          width={45}
          label=""
          inline
          width_head={71}
          width_content={29}
          value={""}
          style_head={{ backgroundColor: "transparent" }}
        />
        <Cell
          width={27.5}
          label="FECHA DE BAJA"
          inline
          width_head={50}
          width_content={50}
          value={""}
        />
        <Cell
          width={27.5}
          label="FECHA DE ALTA"
          inline
          width_head={50}
          width_content={50}
          value={""}
        />
      </Row>
      <Row
        global_style_head={styles.section_31}
        global_style_content={styles.section_31_content}
      >
        <Cell
          width={100}
          label="TIPO DE LESIÓN/GRAVEDAD: TABLA 6"
          inline
          width_head={32}
          width_content={68}
          value={"asdd"}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label=" "
          inline
          width_head={32}
          width_content={68}
          value={""}
          style_head={{ backgroundColor: "transparent" }}
        />
      </Row>

      <Row
        global_style_head={styles.section_31}
        global_style_content={styles.section_31_content}
      >
        <Cell
          width={100}
          label="PARTE DEL CUERPO AFECTADA TABLA 5"
          inline
          width_head={32}
          width_content={68}
          value={"asdd"}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label=" "
          inline
          width_head={32}
          width_content={68}
          value={""}
          style_head={{ backgroundColor: "transparent" }}
        />
      </Row>

      <Row
        global_style_head={styles.section_31}
        global_style_content={styles.section_31_content}
      >
        <Cell
          width={100}
          label="ACCIDENTE SIN BAJA:"
          inline
          width_head={32}
          width_content={68}
          value={"asdd"}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label=" "
          inline
          width_head={32}
          width_content={68}
          value={""}
          style_head={{ backgroundColor: "transparent" }}
        />
      </Row>

      <Row
        global_style_head={styles.section_31}
        global_style_content={styles.section_31_content}
      >
        <Cell
          width={100}
          label="TIPO DE LESIÓN/GRAVEDAD: TABLA 6"
          inline
          width_head={32}
          width_content={68}
          value={"asdd"}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label=" "
          inline
          width_head={32}
          width_content={68}
          value={""}
          style_head={{ backgroundColor: "transparent" }}
        />
      </Row>

      <HeadSection label="32. DAÑOS MATERIALES" bb bt={false} />

      <Row global_style_head={{ backgroundColor: "#a6a6a6", color: "white" }}>
        <Cell width={50} label="INSTALACIÓN EQUIPO AFECTADO" value={"asdd"} />
        <Cell width={50} label="COSTO APROXIMADO" value={"asdd"} />
      </Row>
      <Textarea value={"asdd"} border />
    </>
  );
}
