import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";
import { theme } from "../../components/theme";

export function Causas() {
  return (
    <>
      <HeadSection
        label="DESCRIPCIÓN DE LAS CAUSAS QUE ORIGINARON EL ACCIDENTE DE TRABAJO (D.S 012-2014-TR)"
        bt={false}
        bb
      />

      <Row global_style_head={{ fontFamily: theme.fontBold }}>
        <Cell
          width={33.3}
          label="FALTA DE CONTROL"
          render_content={() => <Textarea value={"asdd"} />}
        />
        <Cell
          width={33.3}
          label="CAUSAS BÁSICAS"
          render_content={() => <Textarea value={"asdd"} />}
        />
        <Cell
          width={33.4}
          label="CAUSAS INMEDIATAS"
          render_content={() => <Textarea value={"asdd"} />}
        />
      </Row>
      <Row global_style_head={{ fontFamily: theme.fontBold }}>
        <Cell
          width={100}
          label="ESTANDARES DE TRABAJO"
          value={"Trabajo de manera preventiva en todo momento"}
          style_content={{ textAlign: "left" }}
        />
      </Row>
    </>
  );
}
