import { View } from "@react-pdf/renderer";
import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Separator from "../../components/separator";

export function DatosInformante() {
  return (
    <>
      <HeadSection label="1. DATOS DEL INFORMANTE" />

      <Row variant="dotted" head_bold={false}>
        <Cell
          width={70}
          label="Nombres y Apellidos:"
          value={"asdd"}
          inline
          width_head={23}
          width_content={77}
        />
        <Cell
          width={30}
          label="DNI:"
          value={"asdd"}
          inline
          width_head={20}
          width_content={80}
        />
      </Row>
      <Row variant="dotted" head_bold={false}>
        <Cell
          width={50}
          label="Puesto de Trabajo:"
          value={"asdd"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={15}
          label="CIA:"
          value={"asdd"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={35}
          label="EE/CTTA:"
          value={"asdd"}
          inline
          width_head={25}
          width_content={75}
        />
      </Row>

      <Separator margin={4} line style_line="solid" />

      <View style={{ backgroundColor: "#dde5f1" }}>
        <HeadSection label="2. UBICACIÓN, FECHA Y HORA" />

        <Row variant="dotted" head_bold={false}>
          <Cell
            width={60}
            label="Ubicación del Incidente:"
            value={"asdd"}
            inline
            width_head={30}
            width_content={70}
          />
          <Cell
            width={20}
            label="Fecha:"
            value={"asdd"}
            inline
            width_head={25}
            width_content={75}
          />
          <Cell
            width={20}
            label="Hora:"
            value={"asdd"}
            inline
            width_head={25}
            width_content={75}
          />
        </Row>

        <Row variant="dotted" head_bold={false}>
          <Cell
            width={20}
            label="Zona:"
            value={"asdd"}
            inline
            width_head={30}
            width_content={70}
          />
          <Cell
            width={20}
            label="Mina:"
            value={"asdd"}
            inline
            width_head={25}
            width_content={75}
          />
          <Cell
            width={20}
            label="Nivel:"
            value={"asdd"}
            inline
            width_head={25}
            width_content={75}
          />
          <Cell
            width={20}
            label="Labor:"
            value={"asdd"}
            inline
            width_head={30}
            width_content={70}
          />
          <Cell
            width={20}
            label="Lugar:"
            value={"asdd"}
            inline
            width_head={30}
            width_content={70}
          />
        </Row>
      </View>

      <Separator margin={4} line style_line="solid" />
    </>
  );
}
