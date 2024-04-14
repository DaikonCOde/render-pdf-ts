import { HeadSection } from "../../components/head_section";
import { Option, WrapOptions } from "../../components/options";
import { Cell, Row } from "../../components/row_and_cell";

export function ClasificacionIncidente() {
  return (
    <>
      <HeadSection label="3. CLASIFICACIÓN DEL INCIDENTE" />

      <Row head_bold={false} top br_head={false}>
        <Cell
          width={30}
          label="Tipo:"
          inline
          width_head={20}
          width_content={80}
          render_content={() => (
            <WrapOptions columns={2}>
              <Option label="Real" />
              <Option label="Potencial" />
            </WrapOptions>
          )}
        />

        <Cell
          width={30}
          label="Seguridad:"
          inline
          width_head={40}
          width_content={60}
          render_content={() => (
            <WrapOptions columns={2}>
              <Option label="Lesión" />
              <Option label="Fatal" />
            </WrapOptions>
          )}
        />

        <Cell
          width={20}
          label="SO:"
          inline
          width_head={30}
          width_content={70}
          value={"asdd"}
        />
        <Cell
          width={20}
          label="MA:"
          inline
          width_head={30}
          width_content={70}
          value={"asdd"}
        />
      </Row>

      <HeadSection label="3.1. Incidente de Seguridad (Según el RSSOM-024-2016 ANEXO 31)" />
      <Row head_bold={false} variant="dotted">
        <Cell
          width={60}
          label="Tipo:"
          inline
          width_head={15}
          width_content={83}
          value={"asdd"}
        />

        <Cell
          width={40}
          label="Lesión Anatómica:"
          inline
          width_head={35}
          width_content={65}
          value={"asdd"}
        />
      </Row>
      <Row head_bold={false} variant="dotted">
        <Cell
          width={60}
          label="Origen:"
          inline
          width_head={15}
          width_content={83}
          value={"asdd"}
        />

        <Cell
          width={40}
          label="Previsión:"
          inline
          width_head={35}
          width_content={65}
          value={"asdd"}
        />
      </Row>

      <HeadSection label="3.2. Incidente de Salud Ocupacional (Según el Listado de Enfermedades Ocupacionales NTS N°068)" />

      <Row head_bold={false} variant="dotted">
        <Cell
          width={70}
          label="Agente:"
          inline
          width_head={10}
          width_content={85}
          render_content={() => (
            <WrapOptions columns={4}>
              <Option label="Químico" />
              <Option label="Físico" />
              <Option label="Biológico" />
              <Option label="Ergonómico" />
            </WrapOptions>
          )}
        />

        <Cell
          width={30}
          label="Otro:"
          inline
          width_head={15}
          width_content={85}
          value={"asdd"}
        />
      </Row>
      <Row head_bold={false} variant="dotted">
        <Cell
          width={100}
          label="Descripción del agente:"
          inline
          width_head={20}
          width_content={80}
          value={"asdd"}
        />
      </Row>

      <HeadSection label="3.3. Incidente de Medio Ambiente" />
      <Row head_bold={false} variant="dotted">
        <Cell
          width={70}
          label="Recurso Afectado:"
          inline
          width_head={25}
          width_content={85}
          render_content={() => (
            <WrapOptions columns={5}>
              <Option label="Flora" />
              <Option label="Fauna" />
              <Option label="Agua" />
              <Option label="Aire" />
              <Option label="Suelo" />
            </WrapOptions>
          )}
        />

        <Cell
          width={30}
          label="Otro:"
          inline
          width_head={15}
          width_content={85}
          value={"asdd"}
        />
      </Row>
      <Row head_bold={false} variant="dotted">
        <Cell
          width={100}
          label="Descripción del recurso:"
          inline
          width_head={20}
          width_content={80}
          value={"asdd"}
        />
      </Row>

      <Row head_bold={false} variant="dotted">
        <Cell
          width={100}
          label="Severidad del Incidente:"
          inline
          width_head={25}
          width_content={85}
          render_content={() => (
            <WrapOptions columns={3}>
              <Option label="Menor" />
              <Option label="Temporal" />
              <Option label="Permanente" selected />
            </WrapOptions>
          )}
        />
      </Row>
      <Row head_bold={false} variant="dotted">
        <Cell
          width={100}
          label="Probabilidad de Ocurrencia:"
          inline
          width_head={25}
          width_content={85}
          render_content={() => (
            <WrapOptions columns={3}>
              <Option label="Frecuente" />
              <Option label="Ocasional" />
              <Option label="Rara vez" />
            </WrapOptions>
          )}
        />
      </Row>
    </>
  );
}
