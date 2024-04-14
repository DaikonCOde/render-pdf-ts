import { View } from "@react-pdf/renderer";
import { HeadSection } from "../../components/head_section";
import { Option, WrapOptions } from "../../components/options";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosGenerales() {
  return (
    <View style={{ backgroundColor: "#dde5f1" }}>
      <HeadSection label="4. DATOS GENERALES DEL ACCIDENTADO (Seguridad y Salud Ocupacional)" />

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={60}
          label="Nombres y Apellidos:"
          value={"asdd"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={20}
          label="DNI:"
          value={"asdd"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={20}
          label="Edad:"
          value={"asdd"}
          inline
          width_head={30}
          width_content={70}
        />
      </Row>

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={60}
          label="Puesto de trabajo:"
          value={"asdd"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={20}
          label="CIA:"
          value={"asdd"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={20}
          label="EE/CTTA:"
          value={"asdd"}
          inline
          width_head={34}
          width_content={66}
        />
      </Row>

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={35}
          label="Tiempo de experiencia en el puesto:"
          value={"asdd"}
          inline
          width_head={70}
          width_content={30}
        />
        <Cell
          width={15}
          label="Años:"
          value={"asdd"}
          inline
          width_head={40}
          width_content={60}
        />
        <Cell
          width={15}
          label="Meses:"
          value={"asdd"}
          inline
          width_head={40}
          width_content={60}
        />

        <Cell
          width={17.5}
          label="N° Accidentes:"
          value={"asdd"}
          inline
          width_head={65}
          width_content={35}
        />
        <Cell
          width={17.5}
          label="N° Infracciones:"
          value={"asdd"}
          inline
          width_head={65}
          width_content={35}
        />
      </Row>

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={50}
          label="Era la ocupación normal del accidentado:"
          render_content={() => (
            <WrapOptions columns={2} width_content={40}>
              <Option label="Si" />
              <Option label="No" />
            </WrapOptions>
          )}
          inline
          width_head={60}
        />
        <Cell
          width={50}
          label="¿El accidentado estuvo sólo?:"
          render_content={() => (
            <WrapOptions width_content={50} columns={2}>
              <Option label="Si" selected />
              <Option label="No" />
            </WrapOptions>
          )}
          inline
          width_head={50}
        />
      </Row>

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={100}
          label="Perfil Psicológico:"
          value={"asdd"}
          inline
          width_head={15}
          width_content={85}
        />
      </Row>
      <Row variant="dotted" head_bold={false}>
        <Cell
          width={100}
          label="Diagnóstico Médico:"
          value={"asdd"}
          inline
          width_head={15}
          width_content={85}
        />
      </Row>
    </View>
  );
}
