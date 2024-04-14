import { HeadSection } from "../../components/head_section";
import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function MCResponsables() {
  return (
    <>
      <HeadSection
        label="MEDIDAS CORRECTIVAS"
        break_section
        bt={false}
        bb
        style_wrap={{ textAlign: "center" }}
      />
      <Row height_head_cell={30}>
        <Cell
          width={35}
          label="DESCRIPCION DE LA MEDIDA CORRECTIVA A IMPLEMENTARSE PARA ELIMINAR LA CAUSA Y PREVENIR LA RECURRENCIA"
          hide_content
          bb_head={false}
          style_head={{ fontSize: theme.fontSize - 1 }}
        />
        <Cell width={25} label="RESPONSABLE" hide_content bb_head={false} />
        <Cell
          width={25}
          render_head={() => (
            <Row border={false}>
              <Cell
                width={100}
                label="FECHA DE EJECUCION"
                br_cell={false}
                height_head_cell={20}
                render_content={() => (
                  <Row border={false} bb_head={false}>
                    <Cell width={33.3} label={"DIA"} hide_content />
                    <Cell width={33.3} label={"MES"} hide_content />
                    <Cell
                      width={33.4}
                      label={"AÑO"}
                      hide_content
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
          label={`Completar en la fecha de ejecucion propuestas, el ESTADO de la implementacion de la medida correctiva \n (realizada, pendiente, en ejecucion)`}
          hide_content
          bb_head={false}
          style_head={{ fontSize: theme.fontSize - 3 }}
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
        style_wrap={{ textAlign: "center" }}
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
