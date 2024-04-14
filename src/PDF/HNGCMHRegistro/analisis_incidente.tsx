import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function AnalisisIncidente() {
  return (
    <>
      <HeadSection label="7. ANÁLISIS DEL INCIDENTE" />

      <HeadSection
        label="TIPO DE CONTACTO/PELIGRO"
        style_wrap={{
          border: theme.border(),
          borderStyle: "solid",
          backgroundColor: "#dce6f1",
        }}
        bb
      />

      <Row style_row={{ borderStyle: "solid" }}>
        <Cell
          width={100}
          label="Contacto con energía (Electicidad, neumática, radiación, etc"
          head_bold={false}
          value={"asdd"}
          style_head={{ borderStyle: "solid" }}
          style_wrap={{ borderStyle: "solid" }}
          inline
          width_head={50}
          width_content={50}
        />
      </Row>

      <HeadSection
        label="CAUSAS INMEDIATAS"
        style_wrap={{
          border: theme.border(),
          borderTop: "none",
          borderStyle: "solid",
          backgroundColor: "#c5d9f1",
        }}
        bb
      />

      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid" }}
        global_style_wrap={{ borderStyle: "solid" }}
      >
        <Cell
          width={50}
          label="ACTOS SUBESTANDAR"
          style_head={{ backgroundColor: "#dce6f1", textAlign: "center" }}
          render_content={() => (
            <>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell width={50} label="ACTOS SUBESTANDAR" hide_content />
                <Cell
                  width={50}
                  label="COMENTARIOS"
                  hide_content
                  br_cell={false}
                />
              </Row>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell width={50} value="ACTOS SUBESTANDAR" hide_head />
                <Cell
                  width={50}
                  value="COMENTARIOS"
                  hide_head
                  br_cell={false}
                />
              </Row>
            </>
          )}
        />

        <Cell
          width={50}
          label="CONDICIONES SUBESTANDAR"
          style_head={{ backgroundColor: "#dce6f1", textAlign: "center" }}
          render_content={() => (
            <>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell width={50} label="CONDICIONES SUBESTANDAR" hide_content />
                <Cell
                  width={50}
                  label="COMENTARIOS"
                  hide_content
                  br_cell={false}
                />
              </Row>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell width={50} value="CONDICIONES SUBESTANDAR" hide_head />
                <Cell
                  width={50}
                  value="COMENTARIOS"
                  hide_head
                  br_cell={false}
                />
              </Row>
            </>
          )}
        />
      </Row>

      <HeadSection
        label="CAUSAS BASICAS"
        style_wrap={{
          border: theme.border(),
          borderTop: "none",
          borderStyle: "solid",
          backgroundColor: "#c5d9f1",
        }}
        bb
      />

      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid" }}
        global_style_wrap={{ borderStyle: "solid" }}
      >
        <Cell
          width={50}
          label="FACTORES PERSONALES"
          style_head={{ backgroundColor: "#dce6f1" }}
          render_content={() => (
            <>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell width={50} value="ACTOS SUBESTANDAR" hide_head />
                <Cell
                  width={50}
                  value="COMENTARIOS"
                  hide_head
                  br_cell={false}
                />
              </Row>
            </>
          )}
        />

        <Cell
          width={50}
          label="COMENTARIOS"
          style_head={{ backgroundColor: "#dce6f1" }}
          render_content={() => (
            <>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell
                  width={100}
                  value="COMENTARIOS"
                  hide_head
                  br_cell={false}
                />
              </Row>
            </>
          )}
        />
      </Row>

      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid" }}
        global_style_wrap={{ borderStyle: "solid" }}
      >
        <Cell
          width={50}
          label="FACTORES DE TRABAJO"
          style_head={{ backgroundColor: "#dce6f1" }}
          render_content={() => (
            <>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell width={50} value="ACTOS SUBESTANDAR" hide_head />
                <Cell
                  width={50}
                  value="COMENTARIOS"
                  hide_head
                  br_cell={false}
                />
              </Row>
            </>
          )}
        />

        <Cell
          width={50}
          label="COMENTARIOS"
          style_head={{ backgroundColor: "#dce6f1" }}
          render_content={() => (
            <>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell
                  width={100}
                  value="COMENTARIOS"
                  hide_head
                  br_cell={false}
                />
              </Row>
            </>
          )}
        />
      </Row>

      <Row
        style_row={{ borderStyle: "solid" }}
        global_style_head={{ borderStyle: "solid" }}
        global_style_wrap={{ borderStyle: "solid" }}
      >
        <Cell
          width={100}
          label="FALLAS EN SISTEMA DE PREVENCIÓN DE RIESGOS"
          style_head={{ backgroundColor: "#c5d9f1" }}
          render_content={() => (
            <>
              <Row
                border={false}
                style_row={{ borderStyle: "solid" }}
                global_style_head={{ borderStyle: "solid" }}
                global_style_wrap={{ borderStyle: "solid" }}
              >
                <Cell width={30} value="ACTOS SUBESTANDAR" hide_head />
                <Cell
                  width={70}
                  value="COMENTARIOS"
                  hide_head
                  br_cell={false}
                />
              </Row>
            </>
          )}
        />
      </Row>
    </>
  );
}
