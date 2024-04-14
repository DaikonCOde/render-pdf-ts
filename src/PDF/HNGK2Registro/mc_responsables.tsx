import { HeadSection } from "../../components/head_section";
import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";

export function MCResponsables() {
  return (
    <>
      <HeadSection label="MEDIDAS CORRECTIVAS / PREVENTIVAS" bt={false} bb />

      <Row height_head_cell={30}>
        <Cell width={25} label={`Acciones`} hide_content bb_head={false} />
        <Cell width={20} label="Responsable" hide_content bb_head={false} />

        <Cell
          width={10}
          label={`Fecha de \n Ejecución`}
          hide_content
          bb_head={false}
        />
        <Cell width={12} label={"Estado"} hide_content bb_head={false} />
        <Cell
          width={10}
          label={`Fecha de \n Control`}
          hide_content
          bb_head={false}
        />

        <Cell width={23} label={`COMENTARIOS`} hide_content bb_head={false} />
      </Row>

      <Row>
        <Cell
          width={25}
          value="DESCRIPCION DE LA MEDIDA CORRECTIVA"
          hide_head
        />
        <Cell width={20} value="RESPONSABLE" hide_head />
        <Cell width={10} value={"asdd"} hide_head />
        <Cell width={12} value={"asdd"} hide_head />
        <Cell width={10} value={"asdd"} hide_head />
        <Cell width={23} value={`Realizada-Pendiente-`} hide_head />
      </Row>

      <HeadSection
        label="RESPONSABLES DEL REGISTRO Y DE LA INVESTIGACION"
        bt={false}
        bb
      />

      <Row
        global_style_head={{
          textAlign: "left",
          backgroundColor: "transparent",
        }}
        global_style_content={{ textAlign: "left" }}
        head_bold={false}
      >
        <Cell
          width={40}
          label="NOMBRE:"
          inline
          width_head={20}
          width_content={80}
          value={"asdd"}
          br_head={false}
        />
        <Cell
          width={20}
          label="CARGO:"
          inline
          width_head={40}
          width_content={60}
          value={"asdd"}
          br_head={false}
        />
        <Cell
          width={20}
          label="FECHA:"
          inline
          width_head={40}
          width_content={60}
          value={"asdd"}
          br_head={false}
        />
        <Cell
          width={20}
          label="FIRMA:"
          inline
          width_head={40}
          width_content={60}
          render_content={() => <Img src="/flow.png" />}
          br_head={false}
        />
      </Row>
    </>
  );
}
