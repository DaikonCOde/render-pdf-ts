import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosEmpleador() {
  return (
    <>
      <HeadSection label="DATOS DEL EMPLEADOR PRINCIPAL" />

      <Row top height_head_cell={32}>
        <Cell
          width={24}
          label={` Organización \n (Razón o Denominación Social)`}
          value={"asdd"}
        />
        <Cell width={14} label="RUC" value={"asdd"} />
        <Cell
          width={27}
          label={`Domicilio \n (Dirección, distrito, departamento, provincia )`}
          value={"asdd"}
        />
        <Cell width={17} label={`Tipo de Actividad Económica`} value={"asdd"} />
        <Cell
          width={18}
          label={`N° de Trabajadores en el \n Centro Laboral`}
          value={"asdd"}
        />
      </Row>

      <HeadSection
        label="COMPLETAR SÓLO EN CASO QUE LAS ACTIVIDADES DEL EMPLEADOR SEAN CONSIDERADAS DE ALTO RIESGO"
        bt={false}
        bb
      />

      <Row height_head_cell={24}>
        <Cell
          width={30}
          label={`N° de Trabajadores \n afiliados al SCTR`}
          inline
          width_head={70}
          width_content={30}
          value={"asdd"}
        />
        <Cell
          width={30}
          label={`N° de Trabajadores \n NO afiliados al SCTR`}
          value={"asdd"}
          inline
          width_head={70}
          width_content={30}
        />
        <Cell
          width={40}
          label={`NOMBRE DE LA ASEGURADORA`}
          value={"asdd"}
          inline
          width_head={35}
          width_content={65}
        />
      </Row>

      <HeadSection
        label={`DATOS DEL EMPLEADOR DE INTERMEDIACIÓN, TERCERIZACIÓN, CONTRATISTA, SUBCONTRATISTA U OTROS:  \n Completar sólo si contrata servicios de intermediación o tercerización`}
        bt={false}
        bb
      />

      <Row height_head_cell={32}>
        <Cell width={24} label={`Razon o Denominación Social`} value={"asdd"} />
        <Cell width={14} label="RUC" value={"asdd"} />
        <Cell
          width={27}
          label={`Domicilio \n (Dirección, distrito, departamento, provincia )`}
          value={"asdd"}
        />
        <Cell width={17} label={`Tipo de Actividad Económica`} value={"asdd"} />
        <Cell
          width={18}
          label={`N° de Trabajadores en el \n Centro Laboral`}
          value={"asdd"}
        />
      </Row>

      <HeadSection
        label="COMPLETAR SÓLO EN CASO QUE LAS ACTIVIDADES DEL EMPLEADOR SEAN CONSIDERADAS DE ALTO RIESGO"
        bt={false}
        bb
      />

      <Row height_head_cell={24}>
        <Cell
          width={30}
          label={`N° de Trabajadores \n afiliados al SCTR`}
          inline
          width_head={70}
          width_content={30}
          value={"asdd"}
        />
        <Cell
          width={30}
          label={`N° de Trabajadores \n NO afiliados al SCTR`}
          value={"asdd"}
          inline
          width_head={70}
          width_content={30}
        />
        <Cell
          width={40}
          label={`NOMBRE DE LA ASEGURADORA`}
          value={"asdd"}
          inline
          width_head={35}
          width_content={65}
        />
      </Row>
    </>
  );
}
