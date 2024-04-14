import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function DatosEmpleador() {
  return (
    <>
      <HeadSection label="DATOS DEL EMPLEADOR PRINCIPAL" />

      <Row top height_head_cell={32}>
        <Cell
          width={23}
          label={`1. RAZÓN SOCIAL O \n DENOMINACIÓN SOCIAL`}
          value={"asdd"}
        />
        <Cell width={15} label="2. RUC" value={"asdd"} />
        <Cell
          width={27}
          label={`3. DOMICILIO (DIRECCIÓN, DISTRITO, DEPARTAMENTO, \n PROVINCIA)`}
          value={"asdd"}
        />
        <Cell
          width={17}
          label={`4. TIPO DE ACTIVIDAD ECONÓMICA`}
          value={"asdd"}
        />
        <Cell
          width={18}
          label={`5. N° TRABAJADORES EN \n EL CENTRO LABORAL`}
          value={"asdd"}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="Completar sólo si contrata servicios de intermediación o tercerización"
          hide_content
          bb_head={false}
          style_head={{ textAlign: "left", fontSize: theme.fontSize - 2 }}
        />
      </Row>

      <HeadSection
        label="DATOS DEL EMPLEADOR DE INTERMEDIACIÓN, TERCERIZACIÓN, CONTRATISTA, SUBCONTRATISTA, OTROS"
        bt={false}
        bb
      />

      <Row height_head_cell={32}>
        <Cell
          width={23}
          label={`6. RAZÓN SOCIAL O \n DENOMINACIÓN SOCIAL`}
          value={"asdd"}
        />
        <Cell width={15} label="7. RUC" value={"asdd"} />
        <Cell
          width={27}
          label={`8. DOMICILIO (DIRECCIÓN, DISTRITO, DEPARTAMENTO,\n PROVINCIA)`}
          value={"asdd"}
        />
        <Cell
          width={17}
          label={`9. TIPO DE ACTIVIDAD ECONÓMICA`}
          value={"asdd"}
        />
        <Cell
          width={18}
          label={`10. N° TRABAJADORES EN \n EL CENTRO LABORAL`}
          value={"asdd"}
        />
      </Row>
    </>
  );
}
