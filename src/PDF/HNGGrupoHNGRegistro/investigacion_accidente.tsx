import { HeadSection } from "../../components/head_section";
import { Option, WrapOptions } from "../../components/options";
import { Cell, Row } from "../../components/row_and_cell";

export function InvestigacionAccidente() {
  return (
    <>
      <HeadSection
        label="INVESTIGACIÓN DEL ACCIDENTE DEL TRABAJO"
        bt={false}
        bb
        style_wrap={{ backgroundColor: "#808080", color: "white" }}
      />

      <Row height_head_cell={24}>
        <Cell
          width={25}
          label={`FECHA Y HORA DE OCURRENCIA \n DEL ACCIDENTE`}
          numeration="24"
          render_content={() => (
            <Row
              border={false}
              head_bold={false}
              global_style_head={{ backgroundColor: "#7ba651" }}
            >
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
          numeration="25"
          render_content={() => (
            <Row
              border={false}
              head_bold={false}
              global_style_head={{ backgroundColor: "#7ba651" }}
            >
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
          numeration="26"
        />
      </Row>

      <Row height_head_cell={24}>
        <Cell
          width={34}
          label={`MARCAR CON (X) GRAVEDAD DEL \n ACCIDENTE DE TRABAJO`}
          numeration="27"
          render_content={() => (
            <WrapOptions
              columns={2}
              global_style_option={{ fontSize: 5 }}
              global_style_square={{ fontSize: 8 }}
            >
              <Option label="ACCIDENTE LEVE" selected />
              <Option label="ACCIDENTE MORTAL" />
              <Option label="ACCIDENTE INCAPACITANTE" />
            </WrapOptions>
          )}
        />
        <Cell
          width={32.5}
          label={`MARCAR CON (X) GRADO DEL ACCIDENTE INCAPACITANTE \n (de ser el caso)`}
          numeration="28"
          render_content={() => (
            <WrapOptions
              columns={2}
              global_style_option={{ fontSize: 5 }}
              global_style_square={{ fontSize: 8 }}
            >
              <Option label="PARCIAL TEMPORAL" selected />
              <Option label="PARCIAL PERMANENTE" />
              <Option label="TOTAL TEMPORAL" />
              <Option label="TOTAL PERMANENTE" />
            </WrapOptions>
          )}
        />
        <Cell
          width={16.5}
          label={`N° DÍAS DE \n DESCANSO MÉDICO`}
          value={"asdd"}
          numeration="29"
        />
        <Cell
          width={17}
          label={`N° TRABAJADORES AFECTADOS`}
          value={"asdd"}
          numeration="30"
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label={`DESCRIBIR PARTE DEL CUERPO LESIONADO \n (de ser el caso)`}
          value={"asdd"}
          numeration="31"
          inline
          width_head={40}
          width_content={60}
        />
      </Row>
    </>
  );
}
