import { HeadSection } from "../../components/head_section";
import { Img } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function MCResponsables() {
  return (
    <>
      <HeadSection
        label="MEDIDAS CORRECTIVAS"
        bt={false}
        bb
        style_wrap={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
        numeration="31"
      />
      <Row height_head_cell={30}>
        <Cell
          width={45.5}
          label={`DESCRIPCION DE LA  MEDIDA CORRECTIVA A IMPLEMENTARSE \n PARA ELIMINAR LA CAUSA Y PREVENIR LA RECURRENCIA`}
          hide_content
          bb_head={false}
          style_head={{ fontSize: theme.fontSize - 1 }}
        />
        <Cell width={22} label="RESPONSABLE" hide_content bb_head={false} />
        <Cell
          width={25}
          render_head={() => (
            <Row border={false}>
              <Cell
                width={100}
                label="FECHA DE EJECUCION"
                br_cell={false}
                height_head_cell={17}
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
        <Cell width={12.5} label={`ESTADO`} hide_content bb_head={false} />
      </Row>

      <Row>
        <Cell
          width={45.5}
          value="DESCRIPCION DE LA MEDIDA CORRECTIVA"
          hide_head
        />
        <Cell width={22} value="RESPONSABLE" hide_head />
        <Cell width={8.3} value={"asdd"} hide_head />
        <Cell width={8.3} value={"asdd"} hide_head />
        <Cell width={8.4} value={"asdd"} hide_head />
        <Cell width={12.5} value={`Realizada-Pendiente-`} hide_head />
      </Row>

      <HeadSection
        label="RESPONSABLES DEL REGISTRO Y DE LA INVESTIGACION"
        bt={false}
        bb
        numeration="32"
        style_wrap={{ textAlign: "center" }}
      />

      <Row
        global_style_head={{
          textAlign: "left",
          backgroundColor: "transparent",
        }}
        global_style_content={{ textAlign: "left" }}
      >
        <Cell width={80}>
          <Row bl_row={false}>
            <Cell
              width={100}
              label="NOMBRE:"
              inline
              width_head={20}
              width_content={80}
              value={"asdd"}
              br_head={false}
              br_cell={false}
              height_head_cell={14}
              style_head={{ backgroundColor: "transparent", textAlign: "left" }}
              style_content={{ textAlign: "left" }}
            />
          </Row>
          <Row bl_row={false}>
            <Cell
              width={100}
              label="CARGO:"
              inline
              width_head={20}
              width_content={80}
              value={"asdd"}
              br_cell={false}
              height_head_cell={14}
              style_head={{ backgroundColor: "transparent", textAlign: "left" }}
              style_content={{ textAlign: "left" }}
              br_head={false}
            />
          </Row>
          <Row border={false}>
            <Cell
              width={100}
              label="FECHA:"
              inline
              width_head={20}
              width_content={80}
              value={"asdd"}
              br_cell={false}
              style_head={{ backgroundColor: "transparent", textAlign: "left" }}
              style_content={{ textAlign: "left" }}
              br_head={false}
            />
          </Row>
        </Cell>

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

      <Row
        global_style_head={{
          textAlign: "left",
          backgroundColor: "transparent",
        }}
        global_style_content={{ textAlign: "left" }}
      >
        <Cell width={80}>
          <Row bl_row={false}>
            <Cell
              width={100}
              label="NOMBRE:"
              inline
              width_head={20}
              width_content={80}
              value={"asdd"}
              br_head={false}
              br_cell={false}
              height_head_cell={14}
              style_head={{ backgroundColor: "transparent", textAlign: "left" }}
              style_content={{ textAlign: "left" }}
            />
          </Row>
          <Row bl_row={false}>
            <Cell
              width={100}
              label="CARGO:"
              inline
              width_head={20}
              width_content={80}
              value={"asdd"}
              br_cell={false}
              height_head_cell={14}
              style_head={{ backgroundColor: "transparent", textAlign: "left" }}
              style_content={{ textAlign: "left" }}
              br_head={false}
            />
          </Row>
          <Row border={false}>
            <Cell
              width={100}
              label="FECHA:"
              inline
              width_head={20}
              width_content={80}
              value={"asdd"}
              br_cell={false}
              style_head={{ backgroundColor: "transparent", textAlign: "left" }}
              style_content={{ textAlign: "left" }}
              br_head={false}
            />
          </Row>
        </Cell>

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
