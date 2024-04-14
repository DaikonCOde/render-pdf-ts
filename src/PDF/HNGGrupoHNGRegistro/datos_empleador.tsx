import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function DatosEmpleador() {
  return (
    <>
      <HeadSection label="DATOS DEL EMPLEADOR PRINCIPAL" />

      <Row top height_head_cell={32}>
        <Cell
          width={23}
          label={`RAZÓN SOCIAL O \n DENOMINACIÓN SOCIAL`}
          value={"asdd"}
          numeration="1"
        />
        <Cell width={15} label="RUC" value={"asdd"} numeration="2" />
        <Cell
          width={27}
          label={`DOMICILIO \n (Dirección, distrito, departamento, provincia )`}
          value={"asdd"}
          numeration="3"
        />
        <Cell
          width={17}
          label={`TIPO DE ACTIVIDAD ECONÓMICA`}
          value={"asdd"}
          numeration="4"
        />
        <Cell
          width={18}
          label={`N° TRABAJADORES EN \n EL CENTRO LABORAL`}
          value={"asdd"}
          numeration="5"
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="COMPLETAR SÓLO EN CASO QUE LAS ACTIVIDADES DEL EMPLEADOR SEAN CONSIDERADAS DE ALTO RIESGO"
          hide_content
          bb_head={false}
          numeration="6"
          height_head_cell={20}
        />
      </Row>

      <Row height_head_cell={24}>
        <Cell
          width={20}
          label={`N° TRABAJADORES \n AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell
          width={20}
          label={`N° TRABAJADORES \n NO AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell width={60} label={`NOMBRE DE LA ASEGURADORA`} value={"asdd"} />
      </Row>
      <Row>
        <Cell
          width={100}
          label="Completar sólo si contrata servicios de intermediación o tercerización"
          br_head={false}
          inline
          width_head={50}
          width_content={50}
          head_bold={false}
          style_head={{ backgroundColor: "transparent", textAlign: "left" }}
        />
      </Row>

      <HeadSection
        label="DATOS DEL EMPLEADOR DE INTERMEDIACIÓN, TERCERIZACIÓN, CONTRATISTA, SUBCONTRATISTA U OTROS"
        bt={false}
        bb
      />

      <Row height_head_cell={32}>
        <Cell
          width={23}
          label={`RAZÓN SOCIAL O \n DENOMINACIÓN SOCIAL`}
          value={"asdd"}
          numeration="7"
        />
        <Cell width={15} label="RUC" value={"asdd"} numeration="8" />
        <Cell
          width={27}
          label={`DOMICILIO \n (Dirección, distrito, departamento, provincia )`}
          value={"asdd"}
          numeration="9"
        />
        <Cell
          width={17}
          label={`TIPO DE ACTIVIDAD ECONÓMICA`}
          value={"asdd"}
          numeration="10"
        />
        <Cell
          width={18}
          label={`N° TRABAJADORES EN \n EL CENTRO LABORAL`}
          value={"asdd"}
          numeration="11"
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="COMPLETAR SÓLO EN CASO QUE LAS ACTIVIDADES DEL EMPLEADOR SEAN CONSIDERADAS DE ALTO RIESGO"
          hide_content
          bb_head={false}
          numeration="12"
          height_head_cell={20}
        />
      </Row>

      <Row height_head_cell={24}>
        <Cell
          width={20}
          label={`N° TRABAJADORES \n AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell
          width={20}
          label={`N° TRABAJADORES \n NO AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell width={60} label={`NOMBRE DE LA ASEGURADORA`} value={"asdd"} />
      </Row>
    </>
  );
}
