import { Cell, Row } from "../../components/row_and_cell";

export function DetalleAccidente() {
  return (
    <>
      <Row top br_head={false}>
        <Cell
          width={65}
          label="Título"
          value={"asdasd"}
          inline
          width_content={90}
          width_head={10}
        />
        <Cell
          width={35}
          label="Código IEM (SHEC):"
          value={"asdasd"}
          inline
          width_head={45}
          width_content={55}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={40}
          label="Localización"
          value={"asdasd"}
          inline
          width_content={70}
          width_head={30}
        />
        <Cell
          width={60}
          label="Empresa/Área/Gerencia:"
          value={"asdasd"}
          inline
          width_head={32}
          width_content={68}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={30}
          label="Fecha del Evento"
          value={"asdasd"}
          inline
          width_head={45}
          width_content={55}
        />
        <Cell
          width={35}
          label="Hora del evento:"
          value={"asdasd"}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={35}
          label="Hora que se reportó:"
          value={"asdasd"}
          inline
          width_head={45}
          width_content={55}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={100}
          label="Tarea:"
          value={"asdasd"}
          inline
          width_head={5}
          width_content={95}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={12}
          label="Tipo:"
          value={"asdasd"}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={28}
          label="Accidente:"
          value={"asdasd"}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={30}
          label="Incidente:"
          value={"asdasd"}
          inline
          width_head={30}
          width_content={60}
        />
        <Cell
          width={30}
          label="Peligro:"
          value={"asdasd"}
          inline
          width_head={25}
          width_content={75}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={12}
          label="Grupo:"
          value={"asda"}
          inline
          width_head={50}
          width_content={50}
        />
        <Cell
          width={25}
          label="Seguridad (Persona):"
          value={"asdasd"}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={25}
          label="Medio Ambiente:"
          value={"asdasd"}
          inline
          width_head={55}
          width_content={45}
        />
        <Cell
          width={25}
          label="Daño a la propiedad:"
          value={"asdasd"}
          inline
          width_head={65}
          width_content={35}
        />
        <Cell
          width={13}
          label="Otros:"
          value={"asdasd"}
          inline
          width_head={40}
          width_content={60}
        />
      </Row>
      <Row br_head={false}>
        <Cell
          width={50}
          label="Controlado:"
          value={"asda"}
          inline
          width_head={20}
          width_content={80}
        />
        <Cell
          width={50}
          label="No Controlado:"
          value={"asda"}
          inline
          width_head={25}
          width_content={75}
        />
      </Row>
    </>
  );
}
