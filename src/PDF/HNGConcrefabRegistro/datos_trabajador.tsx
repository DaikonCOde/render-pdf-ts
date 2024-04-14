import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function DatosTrabajador() {
  return (
    <>
      <HeadSection label="DATOS DEL TRABAJADOR" bt={false} bb />

      <Row>
        <Cell
          width={60}
          label="APELLIDOS Y NOMBRES DEL TRABAJDOR ACCIDENTADO"
          value={"asdd"}
        />
        <Cell width={20} label="D.N.I" value={"asdd"} />
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

      <Row height_head_cell={24}>
        <Cell
          width={25}
          label={`FECHA Y HORA DE OCURRENCIA \n DEL INCIDENTE`}
          render_content={() => (
            <Row border={false} head_bold={false}>
              <Cell width={25} label="DÍA" value={"as"} />
              <Cell width={25} label="MES" value={"as"} />
              <Cell width={25} label="AÑO" value={"as"} />
              <Cell width={25} label="HORA" value={"as"} br_cell={false} />
            </Row>
          )}
        />
        <Cell
          width={25}
          label={`FECHA DE INICIO DE LA \n INVESTIGACION`}
          render_content={() => (
            <Row border={false} head_bold={false}>
              <Cell width={30} label="DÍA" value={"as"} />
              <Cell width={30} label="MES" value={"as"} />
              <Cell width={40} label="AÑO" value={"as"} br_cell={false} />
            </Row>
          )}
        />
        <Cell
          width={50}
          label="LUGAR EXACTO DONDE OCURRIO EL ACCIDENTE"
          value={"asdd"}
        />
      </Row>

      <Row height_head_cell={24}>
        <Cell
          width={32.5}
          label={`MARCAR CON (X) GRAVEDAD DEL \n ACCIDENTE DE TRABAJO`}
          render_content={() => (
            <Row
              border={false}
              head_bold={false}
              global_style_head={{ fontSize: theme.fontSize - 2 }}
              global_style_content={{ fontSize: theme.fontSize - 2 }}
            >
              <Cell
                width={32}
                inline
                width_head={85}
                width_content={15}
                label="ACCIDENTE LEVE"
                value={"X"}
              />
              <Cell
                width={38}
                inline
                width_head={85}
                width_content={15}
                label={`ACCIDENTE \n INCAPACITANTE`}
                value={"as"}
              />
              <Cell
                width={30}
                inline
                width_head={85}
                width_content={15}
                label="MORTAL"
                value={"X"}
                br_cell={false}
              />
            </Row>
          )}
        />
        <Cell
          width={32.5}
          label={`MARCAR CON (X) GRADO DEL ACCIDENTE \n INCAPACITANTE DE SER EL CASO`}
          render_content={() => (
            <Row
              border={false}
              head_bold={false}
              global_style_head={{ fontSize: theme.fontSize - 2 }}
              global_style_content={{ fontSize: theme.fontSize - 2 }}
            >
              <Cell
                width={33.3}
                inline
                width_head={85}
                width_content={15}
                label={`TOTAL \n TEMPORAL`}
                value={"X"}
              />
              <Cell
                width={33.3}
                inline
                width_head={85}
                width_content={15}
                label={`PARCIAL \n TEMPORAL`}
                value={"as"}
              />
              <Cell
                width={33.4}
                inline
                width_head={85}
                width_content={15}
                label={`PARCIAL \n PERMANENTE`}
                value={"as"}
                br_cell={false}
              />
            </Row>
          )}
        />
        <Cell
          width={15}
          label={`N° DE DIAS DE DESCANSO \n MEDICO`}
          value={"asdd"}
        />
        <Cell
          width={20}
          label={`N° DE TRABAJADORES \n AFECTADOS`}
          value={"asdd"}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="DESCRIBIR PARTE DEL CUERPO LESIONADO (DE SER EL CASO)"
          inline
          width_head={50}
          width_content={50}
          head_bold={false}
          value={"asdd"}
        />
      </Row>
    </>
  );
}
