import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function Causas() {
  return (
    <>
      <HeadSection
        label="DESCRIPCIÓN DE LAS CAUSAS QUE ORIGINARON EL INCIDENTE PELIGROSO O INCIDENTE"
        numeration="28"
        bb
        bt={false}
        style_wrap={{ textAlign: "center" }}
      />

      <Textarea value={"asdd"} border />

      <Row>
        <Cell
          width={40}
          label="Genera SAM"
          inline
          hide_content
          br_head={false}
          width_head={100}
        />
        <Cell
          width={20}
          label="SI"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
        <Cell
          width={20}
          label="N° SAM"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
        <Cell
          width={20}
          label="NO"
          inline
          width_head={50}
          width_content={50}
          value={"asdd"}
        />
      </Row>

      <HeadSection
        label="CONSECUENCIAS DEL INCIDENTE"
        numeration="29"
        bb
        style_wrap={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      />

      <Row>
        <Cell
          width={100}
          label="TIPO DE LESIÓN"
          inline
          width_head={25}
          width_content={75}
          value={"asdd"}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="PARTE DEL CUERPO AFECTADA"
          inline
          width_head={25}
          width_content={75}
          value={"asdd"}
        />
      </Row>

      <HeadSection
        label="DAÑOS MATERIALES"
        numeration="30"
        bb
        style_wrap={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
        break_section
      />

      <Row>
        <Cell
          width={100}
          label="INSTALACIÓN Y/O EQUIPO AFECTADO"
          render_content={() => <Textarea value={"asdd"} />}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="COSTO APROXIMADO"
          inline
          width_head={25}
          width_content={75}
          value={"asdd"}
        />
      </Row>
    </>
  );
}
