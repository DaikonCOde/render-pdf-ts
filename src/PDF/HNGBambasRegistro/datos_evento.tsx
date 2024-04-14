import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosEvento() {
  return (
    <>
      <HeadSection label="Datos del Evento" />
      <Row variant="square" head_bold={false} bt_content>
        <Cell
          width={40}
          label="Tipo:"
          value={"asdas"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={20}
          hide_head
          value={"asdas"}
          inline
          width_head={30}
          width_content={70}
        />

        <Cell
          width={40}
          label="Consecuencia Real:"
          value={"asdas"}
          inline
          width_head={40}
          width_content={60}
        />
      </Row>
      <Row variant="square" head_bold={false}>
        <Cell
          width={40}
          label="Área:"
          value={"asdas"}
          inline
          width_head={30}
          width_content={70}
        />
        <Cell
          width={20}
          hide_head
          value={"asdas"}
          inline
          width_head={30}
          width_content={70}
        />

        <Cell
          width={40}
          label="Consecuencia Potencial:"
          value={"asdas"}
          inline
          width_head={40}
          width_content={60}
        />
      </Row>
      <Row variant="square" head_bold={false}>
        <Cell
          width={50}
          label="Fecha:"
          value={"asdas"}
          inline
          width_head={24}
          width_content={76}
        />
        <Cell
          width={50}
          label="Fecha de inicio de la investigación"
          value={"asdas"}
          inline
          width_head={52}
          width_content={48}
        />
      </Row>
      <Row variant="square" head_bold={false} bt_content>
        <Cell
          width={100}
          label="Lugar:"
          value={"asdas"}
          inline
          width_head={12}
          width_content={88}
          br_content
        />
      </Row>
    </>
  );
}
