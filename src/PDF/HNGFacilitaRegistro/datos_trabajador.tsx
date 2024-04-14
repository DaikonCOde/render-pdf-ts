import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosTrabajador() {
  return (
    <>
      <HeadSection label="DATOS DEL TRABAJADOR" bt={false} />

      <Row top>
        <Cell
          width={60}
          label="APELLIDOS Y NOMBRES DEL TRABAJADOR ACCIDENTADO"
          value={"asdd"}
        />
        <Cell width={20} label="N° DNI / CE" value={"asdd"} />
        <Cell width={20} label="EDAD" value={"asdd"} />
      </Row>

      <Row height_head_cell={24}>
        <Cell width={10} label="ÁREA" value={"asdd"} />
        <Cell width={12} label="PUESTO DE TRABAJO" value={"asdd"} />
        <Cell width={12.5} label="ANTIGÜEDAD EN EL PUESTO" value={"asdd"} />
        <Cell width={7} label={`SEXO`} value={"asdd"} />
        <Cell width={7} label={`TURNO`} value={"asdd"} />
        <Cell width={12} label={`TIPO DE \n CONTRATO`} value={"asdd"} />
        <Cell
          width={24}
          label={`TIEMPO DE EXPERIENCIA EN \n EL PUESTO DE TRABAJO`}
          value={"asdd"}
        />
        <Cell
          width={23}
          label={`N° HORAS TRABAJADAS EN LA JORNADA LABORAL`}
          value={"asdd"}
        />
      </Row>
    </>
  );
}
