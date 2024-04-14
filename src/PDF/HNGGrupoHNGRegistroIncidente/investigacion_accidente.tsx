import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function InvestigacionAccidente() {
  return (
    <>
      <HeadSection
        label="INVESTIGACIÓN DEL INCIDENTE PELIGROSO O INCIDENTE "
        bt={false}
        bb
        style_wrap={{ backgroundColor: "#808080", color: "white" }}
      />
      <Row>
        <Cell
          width={100}
          label="MARCAR CON (X) SI ES INCIDENTE PELIGROSO O INCIDENTE"
          bb_head={false}
          hide_content
        />
      </Row>

      <Row>
        <Cell
          width={50}
          label="INCIDENTE PELIGROSO"
          inline
          value={"X"}
          width_head={85}
          width_content={15}
          numeration="22"
        />
        <Cell
          width={50}
          label="INCIDENTE PELIGROSO"
          numeration="23"
          inline
          value={"X"}
          width_head={85}
          width_content={15}
        />
      </Row>

      <Row>
        <Cell width={50}>
          <Row bl_row={false}>
            <Cell
              width={100}
              label={`N° TRABAJADORES \n POTENCIALMENTE AFECTADOS`}
              inline
              width_head={85}
              width_content={15}
              value={"X"}
              style_head={{ backgroundColor: "transparent" }}
              br_cell={false}
            />
          </Row>
          <Row border={false}>
            <Cell
              width={100}
              label={`N° POBLADORES \n POTENCIALMENTE AFECTADOS`}
              inline
              width_head={85}
              width_content={15}
              value={"X"}
              style_head={{ backgroundColor: "transparent" }}
              br_cell={false}
            />
          </Row>
        </Cell>

        <Cell
          width={50}
          label={`DETALLAR TIPO DE \n ATENCIÓN EN \n PRIMEROS  AUXILIOS \n (de ser el caso)`}
          inline
          width_head={35}
          width_content={65}
          value={"X"}
          style_head={{ backgroundColor: "transparent" }}
          height_head_cell={44}
        />
      </Row>

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

      <Row>
        <Cell
          width={100}
          label={`DESCRIPCIÓN DEL INCIDENTE PELIGROSO O INCIDENTE`}
          render_content={() => <Textarea value={"asdd"} />}
          numeration="27"
        />
      </Row>

      <Row>
        <Cell
          width={65}
          label={`TESTIGO DEL ACCIDENTE`}
          value={"asdd"}
          inline
          width_head={35}
          width_content={65}
          style_content={{ textAlign: "left" }}
        />
        <Cell
          width={35}
          label={`DOC. IDENTIDAD`}
          value={"asdd"}
          inline
          width_head={50}
          width_content={50}
          style_content={{ textAlign: "left" }}
        />
      </Row>
      <Row>
        <Cell
          width={65}
          label={`TESTIGO DEL ACCIDENTE`}
          value={"asdd"}
          inline
          width_head={35}
          width_content={65}
          style_content={{ textAlign: "left" }}
        />
        <Cell
          width={35}
          label={`DOC. IDENTIDAD`}
          value={"asdd"}
          inline
          width_head={50}
          width_content={50}
          style_content={{ textAlign: "left" }}
        />
      </Row>
      <Row>
        <Cell
          width={65}
          label={`TESTIGO DEL ACCIDENTE`}
          value={"asdd"}
          inline
          width_head={35}
          width_content={65}
          style_content={{ textAlign: "left" }}
        />
        <Cell
          width={35}
          label={`DOC. IDENTIDAD`}
          value={"asdd"}
          inline
          width_head={50}
          width_content={50}
          style_content={{ textAlign: "left" }}
        />
      </Row>
    </>
  );
}
