import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function DatosTrabajador() {
  return (
    <>
      <HeadSection
        label={`DATOS DEL TRABAJADOR(A): \n Completar sólo en caso que el INCIDENTE afecte a trabajador(es).`}
        bt={false}
        bb
      />

      <Row
        height_head_cell={34}
        global_style_head={{ fontSize: theme.fontSize - 1 }}
        global_style_content={{ fontSize: theme.fontSize - 1 }}
      >
        <Cell
          width={17}
          label="APELLIDOS Y NOMBRES DEL TRABAJADOR"
          value={"asdd"}
        />
        <Cell width={7} label="N° DNI / CE" value={"asdd"} />
        <Cell width={6} label="EDAD" value={"asdd"} />
        <Cell width={6} label={`Sexo`} value={"asdd"} />
        <Cell width={7} label="Área" value={"asdd"} />
        <Cell width={7} label="Puesto de trabajo" value={"asdd"} />
        <Cell width={7} label="Antigüedad en el empleo" value={"asdd"} />
        <Cell width={7} label={`Turno`} value={"asdd"} />
        <Cell width={7} label={`Tipo de Contrato`} value={"asdd"} />
        <Cell
          width={15}
          label={`Tiempo de experiencia en el puesto de trabajo`}
          value={"asdd"}
        />
        <Cell
          width={15}
          label={`N° de horas trabajadas en la jornada laboral (antes del suceso)`}
          value={"asdd"}
        />
      </Row>
    </>
  );
}
