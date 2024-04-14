import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";
import { theme } from "../../components/theme";

export function Investigacion() {
  return (
    <>
      <HeadSection
        label="INVESTIGACIÓN DE ACCIDENTES DE TRABAJO"
        bt={false}
        bb
      />

      <Row height_head_cell={24}>
        <Cell
          width={25}
          label={`FECHA Y HORA DE OCURRENCIA \n DEL ACCIDENTE `}
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
          label={`MARCAR CON (X) EL GRADO DE ACCIDENTE \n INCAPACITANTE (DE SER EL CASO)`}
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

      <HeadSection label="DESCRIPCIÓN DEL ACCIDENTE DE TRABAJO" bt={false} bb />
      <Textarea value={"asdd"} border />
    </>
  );
}
