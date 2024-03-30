import { Img, WrapImage } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function Body() {
  return (
    <>
      <Row top>
        <Cell
          width={50}
          br_head={false}
          label="Lugar:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={50}
          br_head={false}
          label="Unidad:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
      </Row>
      <Row>
        <Cell
          width={50}
          br_head={false}
          label="Fecha y Hora:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={50}
          br_head={false}
          label="Tipó de Incidente:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
      </Row>
      <Row>
        <Cell
          width={50}
          br_head={false}
          label="Empresa:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={50}
          br_head={false}
          label="Jefe del Área:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
      </Row>
      <Row>
        <Cell
          width={50}
          br_head={false}
          label="Lesión a personas:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={50}
          br_head={false}
          label="Daños Materiales:"
          value={"asdf"}
          inline
          width_head={30}
          width_content={70}
        />
      </Row>
      <Row style_row={{ borderBottom: "none" }}>
        <Cell
          width={50}
          br_head={false}
          label="Consecuencia real personal:"
          value={"asdf"}
          inline
          width_head={50}
          width_content={50}
        />
        <Cell
          width={50}
          br_head={false}
          label="Consecuencia potencial personal:"
          value={"asdf"}
          inline
          width_head={50}
          width_content={50}
        />
      </Row>
      <Row>
        <Cell
          width={50}
          br_head={false}
          label="Consecuencia real patrimonio:"
          value={"asdf"}
          inline
          width_head={50}
          width_content={50}
        />
        <Cell
          width={50}
          br_head={false}
          label="Consecuencia potencial patrimonio:"
          value={"asdf"}
          inline
          width_head={55}
          width_content={45}
        />
      </Row>
      <Row>
        <Cell
          bb_head={false}
          width={100}
          label="Descripción (¿Qué ocurrió?):"
          render_content={() => <Textarea value="asdf" />}
        />
      </Row>
      <Row>
        <Cell
          bb_head={false}
          width={100}
          label="Fotografías o Diagrama:"
          render_content={() => (
            <WrapImage>
              <Img src="/flow.png" />
              <Img src="/flow.png" />
              <Img src="/flow.png" />
            </WrapImage>
          )}
        />
      </Row>
      <Row>
        <Cell
          bb_head={false}
          width={100}
          label="Acciones Inmediatas:"
          render_content={() => <Textarea value="asdf" />}
        />
      </Row>
      <Row>
        <Cell
          br_head={false}
          width={100}
          label="Flash Report elaborado por:"
          inline
          width_head={30}
          width_content={70}
          value={"asdf"}
        />
      </Row>
    </>
  );
}
