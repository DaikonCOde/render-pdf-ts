import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosTrabajador() {
  return (
    <>
      <HeadSection
        label="DATOS DEL TRABAJADOR(A): Completar sólo en caso que el incidente afecte a trabajador(es)."
        bt={false}
      />

      <Row top>
        <Cell
          width={60}
          label="11. APELLIDOS Y NOMBRES DEL TRABAJADOR(A)"
          value={"asdd"}
        />
        <Cell width={20} label="12. N° DNI / CE" value={"asdd"} />
        <Cell width={20} label="13. EDAD" value={"asdd"} />
      </Row>

      <Row height_head_cell={34}>
        <Cell width={10} label="ÁREA" value={"asdd"} numeration="14" />
        <Cell
          width={12}
          label="PUESTO DE TRABAJO"
          value={"asdd"}
          numeration="15"
        />
        <Cell
          width={12.5}
          label="ANTIGÜEDAD EN EL EMPLEO "
          value={"asdd"}
          numeration="16"
        />
        <Cell width={7} label={`SEXO \n F/M`} value={"asdd"} numeration="17" />
        <Cell
          width={7}
          label={`TURNO \n D/T/N`}
          value={"asdd"}
          numeration="18"
        />
        <Cell
          width={12}
          label={`TIPO DE \n CONTRATO`}
          value={"asdd"}
          numeration="19"
        />
        <Cell
          width={24}
          label={`TIEMPO DE EXPERIENCIA EN \n EL PUESTO DE TRABAJO`}
          value={"asdd"}
          numeration="20"
        />
        <Cell
          width={23}
          label={`N° HORAS TRABAJADAS EN LA JORNADA LABORAL \n (Antes del suceso)`}
          value={"asdd"}
          numeration="21"
        />
      </Row>
    </>
  );
}
