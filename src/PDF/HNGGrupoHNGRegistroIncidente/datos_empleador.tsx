import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Separator from "../../components/separator";

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
          label={`N° TRAB. EN  EL \n CENTRO LABORAL`}
          value={"asdd"}
          numeration="5"
        />
      </Row>

      <Separator margin={4} />
      <Row top>
        <Cell
          width={100}
          label="Compleatar sólo si contrata servicios de intermediación o tercerización"
          hide_content
          bb_head={false}
          style_head={{ textAlign: "left" }}
        />
      </Row>

      <HeadSection
        bt={false}
        label="DATOS DEL EMPLEADOR DE INTERMEDIACIÓN, TERCERIZACIÓN, CONTRATISTA, SUBCONTRATISTA, OTROS "
      />

      <Row top height_head_cell={32}>
        <Cell
          width={23}
          label={`RAZÓN SOCIAL O \n DENOMINACIÓN SOCIAL`}
          value={"asdd"}
          numeration="6"
        />
        <Cell width={15} label="RUC" value={"asdd"} numeration="7" />
        <Cell
          width={27}
          label={`DOMICILIO \n (Dirección, distrito, departamento, provincia )`}
          value={"asdd"}
          numeration="8"
        />
        <Cell
          width={17}
          label={`TIPO DE ACTIVIDAD ECONÓMICA`}
          value={"asdd"}
          numeration="9"
        />
        <Cell
          width={18}
          label={`N° TRAB. EN  EL \n CENTRO LABORAL`}
          value={"asdd"}
          numeration="10"
        />
      </Row>
    </>
  );
}
