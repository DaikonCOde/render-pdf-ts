import { Img, WrapImage } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import Textarea from "../../components/textarea";

export function DescripcionFotos() {
  return (
    <>
      <Row>
        <Cell
          width={100}
          label="Descripión corta:"
          render_content={() => <Textarea value="asdasd" />}
          bb_head={false}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label="Acciones Inmediatas para controlar el riesgo (post evento):"
          render_content={() => <Textarea value="asdasd" />}
          bb_head={false}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label="Fotos:"
          render_content={() => (
            <WrapImage border={false}>
              <Img src="/flow.png" style_img={{ width: 200, height: 200 }} />
              <Img src="/flow.png" style_img={{ width: 200, height: 200 }} />
            </WrapImage>
          )}
          bb_head={false}
        />
      </Row>

      <Row br_head={false}>
        <Cell
          width={45}
          label="Consecuencia:"
          inline
          value="asdasd"
          width_head={30}
          width_content={70}
        />
        <Cell
          width={25}
          label="Real (calificación de 1 al 6):"
          inline
          value="1"
          width_head={80}
          width_content={20}
        />
        <Cell
          width={30}
          label="Petencial (calificación de I al VI):"
          value="VI"
          inline
          width_head={80}
          width_content={20}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={70}
          label="Para mayor información, póngase en contacto con:"
          head_bold={false}
          inline
          value="asdasd"
          width_head={50}
          width_content={50}
        />
        <Cell
          width={30}
          label="Teléfono:"
          inline
          value="112312323"
          width_head={30}
          width_content={70}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={45}
          label="Consecuencia:"
          inline
          value="asdasd"
          width_head={30}
          width_content={70}
        />
        <Cell
          width={25}
          label="Real (calificación de 1 al 6):"
          inline
          value="1"
          width_head={80}
          width_content={20}
        />
        <Cell
          width={30}
          label="Petencial (calificación de I al VI):"
          value="VI"
          inline
          width_head={80}
          width_content={20}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={100}
          label="Nota:"
          inline
          value="asdasd"
          width_head={5}
          width_content={95}
        />
      </Row>
    </>
  );
}
