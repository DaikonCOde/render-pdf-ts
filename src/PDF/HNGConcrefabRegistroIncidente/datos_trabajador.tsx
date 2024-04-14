import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosTrabajador() {
  return (
    <>
      <HeadSection
        label={`DATOS DEL TRABAJADOR (A): \n Completar solo en casos que el incidente afecte al trabajador(es)`}
        bt={false}
        bb
      />

      <Row>
        <Cell
          width={60}
          label="APELLIDOS Y NOMBRES DEL TRABAJDOR:"
          value={"asdd"}
        />
        <Cell width={20} label="N° DNI" value={"asdd"} />
        <Cell width={20} label="EDAD" value={"asdd"} />
      </Row>

      <Row height_head_cell={35}>
        <Cell width={10} label="AREA" value={"asdd"} />
        <Cell width={15} label={`PUESTO DE \n TRABAJO`} value={"asdd"} />
        <Cell width={14} label={`ANTIGÜEDAD \n EN  EL EMPLEO`} value={"asdd"} />
        <Cell width={6} label={`SEXO \n F/M`} value={"asdd"} />
        <Cell width={7} label={`TURNO \n D/T/N`} value={"asdd"} />
        <Cell width={12} label={`TIPO DE \n CONTRATO`} value={"asdd"} />
        <Cell
          width={22}
          label={`TIEMPO EXPERIENCIA \n EN PUESTO DE TRABAJO`}
          value={"asdd"}
        />
        <Cell
          width={24}
          label={`N° HORAS TRABAJADAS EN EL JORNADA LABORAL \n (Antes del Accidente)`}
          value={"asdd"}
        />
      </Row>
    </>
  );
}
