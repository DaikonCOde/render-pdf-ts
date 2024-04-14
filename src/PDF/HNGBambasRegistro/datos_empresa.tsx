import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosEmpresa() {
  return (
    <>
      <HeadSection label="Datos de la Empresa Contratista" />
      <Row variant={"square"} head_bold={false}>
        <Cell
          width={100}
          label="Razón social:"
          value={"asdsad"}
          inline
          width_head={13.75}
          width_content={86.25}
          bt_content
        />
      </Row>
      <Row variant={"square"} head_bold={false}>
        <Cell
          width={100}
          label="Domicilio:"
          value={"asdsad"}
          inline
          width_head={13.75}
          width_content={86.25}
        />
      </Row>
      <Row variant={"square"} head_bold={false}>
        <Cell
          width={30}
          label="R.U.C:"
          value={"1234567890098"}
          inline
          width_head={48}
          width_content={52}
        />
        <Cell
          width={45}
          label="N° de trabajadores en el centro laboral:"
          value={"asdsad"}
          inline
          width_head={65}
          width_content={35}
        />
        <Cell
          width={30}
          label="Tipo de actividad:"
          value={"asdsad"}
          inline
          width_head={50}
          width_content={50}
        />
      </Row>
      <Row variant={"square"} head_bold={false}>
        <Cell
          width={30}
          label="N° de trabajadores afiliados al SCTR:"
          value={""}
          inline
          width_head={48}
          width_content={52}
        />
        <Cell
          width={45}
          label="N° de trabajadores no afiliados al SCTR:"
          value={"asdsad"}
          inline
          width_head={65}
          width_content={35}
        />
        <Cell
          width={30}
          label="Nombre de la aseguradora:"
          value={"asdsad"}
          inline
          width_head={50}
          width_content={50}
        />
      </Row>
    </>
  );
}
