import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function Investigacion() {
  return (
    <>
      <HeadSection
        bt={false}
        label="NIVESTIGACION DE INCIDENTES PELIGROSOS O INCIDENTES"
        style_wrap={{ textAlign: "center" }}
      />
      <HeadSection
        bb
        label="MARCAR CON (X) SI ES INCIDENTES PELIGROSOS O INCIDENTE"
        style_wrap={{ textAlign: "center" }}
      />

      <Row>
        <Cell
          width={50}
          label="INCIDENTES PELIGROSOS"
          value={"X"}
          inline
          width_head={60}
          width_content={40}
        />
        <Cell
          width={50}
          label="INCIDENTES"
          value={"X"}
          inline
          width_head={60}
          width_content={40}
        />
      </Row>

      <Row>
        <Cell width={50}>
          <Row style_row={{ borderLeft: "none" }}>
            <Cell
              width={100}
              label={`N° TRABAJADORES \n POTENCIALEMENTE AFECTADOS`}
              value={"asdd"}
              inline
              width_head={60}
              width_content={40}
              br_cell={false}
            />
          </Row>
          <Row border={false}>
            <Cell
              width={100}
              label={`N° POBLADORES \n POTENCIALEMENTE AFECTADOS`}
              value={"asdd"}
              inline
              width_head={60}
              width_content={40}
              br_cell={false}
            />
          </Row>
        </Cell>
        <Cell
          width={50}
          label={`DETALLAR TIPO DE ATENCION EN \n PRIMEROS AUXILIOS \n (DE SER EL CASO)`}
          value={"X"}
          inline
          width_head={60}
          width_content={40}
        />
      </Row>

      <Row height_head_cell={24}>
        <Cell
          width={30}
          label={`FECHA Y HORA EN QUE OCURRIO EL \n INCIDENTE PELIGROSO O INCIDENTE`}
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
          width={20}
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
          label="LUGAR EXACTO DONDE OCURRIO EL HECHO"
          value={"asdd"}
        />
      </Row>
    </>
  );
}
