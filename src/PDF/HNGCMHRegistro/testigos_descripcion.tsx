import { StyleSheet } from "@react-pdf/renderer";
import { HeadSection } from "../../components/head_section";
import { Img, WrapImage } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import Separator from "../../components/separator";
import Textarea from "../../components/textarea";
import { theme } from "../../components/theme";

export function TestigosDescripcion() {
  const styles = StyleSheet.create({
    descripction_img: {
      padding: 3,
      backgroundColor: "#5a82be",
      borderRadius: 2,
    },
  });

  return (
    <>
      <HeadSection label="5. DATOS DEL TESTIGO (En caso exista)" />

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={100}
          label="Nombres y Apellidos"
          inline
          width_head={15}
          width_content={85}
        />
      </Row>

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={60}
          label="Puesto de trabajo"
          inline
          width_head={25}
          width_content={75}
        />
        <Cell
          width={10}
          label="CIA"
          inline
          width_head={50}
          width_content={50}
        />
        <Cell
          width={30}
          label="EE/CTTA:"
          inline
          width_head={25}
          width_content={75}
        />
      </Row>

      <Separator margin={4} line style_line="solid" />

      <HeadSection label="6. DESCRIPCIÓN Y GRÁFICOS DEL INCIDENTE" />

      <Row top>
        <Cell
          width={50}
          label="PRE-EVENTO"
          style_head={{ textAlign: "center", backgroundColor: "#dde5f1" }}
          render_content={() => (
            <>
              <Textarea
                value={"asdd"}
                style={{
                  borderBottom: theme.border(),
                  backgroundColor: "#dde5f1",
                }}
              />
              <Row
                border={false}
                head_bold={false}
                global_style_head={{ textAlign: "center" }}
              >
                <Cell
                  width={100}
                  label="FOTO PRE-EVENTO"
                  br_cell={false}
                  bb_head={false}
                  render_content={() => (
                    <WrapImage border={false}>
                      <Img
                        src="/flow.png"
                        description="Croquis del evento"
                        width={150}
                        height={"auto"}
                        style_description={styles.descripction_img}
                      />
                    </WrapImage>
                  )}
                />
              </Row>
            </>
          )}
        />

        <Cell
          width={50}
          label="EVENTO"
          style_head={{ textAlign: "center", backgroundColor: "#dde5f1" }}
          render_content={() => (
            <>
              <Textarea
                value={"asdd"}
                style={{
                  borderBottom: theme.border(),
                  backgroundColor: "#dde5f1",
                }}
              />
              <Row
                border={false}
                head_bold={false}
                global_style_head={{ textAlign: "center" }}
              >
                <Cell
                  width={100}
                  label="FOTO EVENTO"
                  br_cell={false}
                  bb_head={false}
                  render_content={() => (
                    <WrapImage border={false}>
                      <Img
                        src="/flow.png"
                        description="Colaborador despues de electocución asdasd asdasd asdasd sa"
                        width={150}
                        height={"auto"}
                        style_description={styles.descripction_img}
                      />
                    </WrapImage>
                  )}
                />
              </Row>
            </>
          )}
        />
      </Row>
    </>
  );
}
