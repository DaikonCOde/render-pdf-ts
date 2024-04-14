import { HeadSection } from "../../components/head_section";
import { Option, WrapOptions } from "../../components/options";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";
import { theme } from "../../components/theme";

export function Investigacion() {
  return (
    <>
      <HeadSection
        label={`INVESTIGACIÓN DEL SUCESO (Identificar accidente, incidente peligroso o incidente)`}
        bt={false}
        bb
      />

      <Row
        global_style_head={{
          backgroundColor: "transparent",
          fontSize: theme.fontSize - 1,
        }}
        head_bold={false}
      >
        <Cell
          width={20}
          label="ACCIDENTE"
          value={"asdd"}
          inline
          width_head={40}
          width_content={60}
          style_head={{ backgroundColor: theme.cell.bg_head }}
        />

        <Cell
          width={25}
          label="GRAVEDAD DEL ACCIDENTE"
          height_head_cell={18}
          render_content={() => (
            <WrapOptions
              columns={2}
              reverse
              global_style_label={{ fontSize: theme.fontSize - 2 }}
              global_style_square={{
                width: 8,
                height: 8,
                padding: 0,
                fontSize: theme.fontSize - 2,
              }}
            >
              <Option label="Accidente Leve" selected />
              <Option label="Accidente Incapacitante" />
              <Option label="Accidente Mortal" />
            </WrapOptions>
          )}
        />
        <Cell
          width={30}
          label={`GRADO DEL ACCIDENTE INCAPACITANTE \n (DE SER EL CASO)`}
          render_content={() => (
            <WrapOptions
              columns={3}
              reverse
              global_style_label={{ fontSize: theme.fontSize - 2 }}
              global_style_square={{
                width: 8,
                height: 8,
                padding: 0,
                fontSize: theme.fontSize - 2,
              }}
            >
              <Option label="Total Temporal" />
              <Option label="Parcial Temporal" />
              <Option label="Parcial Permanente" />
              <Option label="Total Permanente" />
            </WrapOptions>
          )}
        />
        <Cell width={11} label="N° DIAS DE DESCANSO MÉDICO" value={"asdd"} />
        <Cell width={14} label="N° DE TRABAJADORES AFECTADOS" value={"asdd"} />
      </Row>

      <Row
        height_head_cell={24}
        global_style_head={{ backgroundColor: theme.head_section.bg }}
      >
        <Cell
          width={25}
          label={`FECHA Y HORA DE OCURRENCIA \n DEL SUCESO`}
          render_content={() => (
            <Row
              border={false}
              head_bold={false}
              global_style_head={{ backgroundColor: "transparent" }}
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
          render_content={() => (
            <Row
              border={false}
              head_bold={false}
              global_style_head={{ backgroundColor: "transparent" }}
            >
              <Cell width={30} label="DÍA" value={"as"} />
              <Cell width={30} label="MES" value={"as"} />
              <Cell width={40} label="AÑO" value={"as"} br_cell={false} />
            </Row>
          )}
        />
        <Cell width={20} label="LUGAR DE TRABAJO" value={"asdd"} />
        <Cell
          width={30}
          label="LUGAR EXACTO DONDE OCURRIO EL ACCIDENTE"
          value={"asdd"}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label={`DESCRIPCIÓN DEL SUCESO`}
          value={"asdd"}
          render_content={() => <Textarea value={"asdd"} />}
          style_head={{ backgroundColor: theme.head_section.bg }}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label={`Adjuntos`}
          value={"asdd"}
          inline
          width_head={10}
          width_content={90}
        />
      </Row>

      {/* SECTION: CAUSAS */}

      <Row>
        <Cell
          width={100}
          label={`DESCRIPCIÓN DE LAS CAUSAS QUE ORIGINARON EL SUCESO`}
          value={"asdd"}
          render_content={() => <Textarea value={"asdd"} />}
          style_head={{ backgroundColor: theme.head_section.bg }}
        />
      </Row>
    </>
  );
}
