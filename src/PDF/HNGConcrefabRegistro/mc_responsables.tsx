import { HeadSection } from "../../components/head_section";
import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";

export function MCResponsables() {
  return (
    <>
      <Row
        height_head_cell={26.5}
        global_style_head={{ backgroundColor: "#d9d9d9" }}
      >
        <Cell
          width={35}
          label="DESCRIPCION DE LA MEDIDA CORRECTIVA"
          hide_content
          bb_head={false}
        />
        <Cell width={25} label="RESPONSABLE" hide_content bb_head={false} />
        <Cell
          width={25}
          render_head={() => (
            <Row
              border={false}
              global_style_head={{ backgroundColor: "#d9d9d9" }}
            >
              <Cell
                width={100}
                label="FECHA DE EJECUCION"
                br_cell={false}
                render_content={() => (
                  <Row
                    border={false}
                    global_style_content={{ backgroundColor: "#d9d9d9" }}
                  >
                    <Cell width={33.3} value={"DIA"} hide_head />
                    <Cell width={33.3} value={"MES"} hide_head />
                    <Cell
                      width={33.4}
                      value={"AÑO"}
                      hide_head
                      br_cell={false}
                    />
                  </Row>
                )}
              />
            </Row>
          )}
          hide_content
          bb_head={false}
        />
        <Cell
          width={20}
          label={`Realizada-Pendiente- \n En Ejecucion`}
          hide_content
          bb_head={false}
        />
      </Row>

      <Row>
        <Cell
          width={35}
          value="DESCRIPCION DE LA MEDIDA CORRECTIVA"
          hide_head
        />
        <Cell width={25} value="RESPONSABLE" hide_head />
        <Cell width={8.3} value={"asdd"} hide_head />
        <Cell width={8.3} value={"asdd"} hide_head />
        <Cell width={8.4} value={"asdd"} hide_head />
        <Cell width={20} value={`Realizada-Pendiente-`} hide_head />
      </Row>

      <HeadSection
        label="RESPONSABLES DEL REGISTRO Y DE LA INVESTIGACION"
        bt={false}
        bb
      />

      <Row
        global_style_head={{ textAlign: "left" }}
        global_style_content={{ textAlign: "left" }}
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
