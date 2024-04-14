import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export function DatosEmpleador() {
  return (
    <>
      <HeadSection label="DATOS DEL EMPLEADOR PRINCIPAL" bt={false} />

      <Row top height_head_cell={24}>
        <Cell width={15} label="RAZON SOCIAL" value={"asdd"} />
        <Cell width={15} label="RUC" value={"asdd"} />
        <Cell
          width={32.5}
          label={`DOMICILIO \n (Dirección,Distrito,Departamento,Provincia)`}
          value={"asdd"}
        />
        <Cell
          width={17.5}
          label={`TIPO DE ACTIVIDAD \n ECONOMICA`}
          value={"asdd"}
        />
        <Cell
          width={20}
          label={`N° TRABAJADORES EN \n EL  CENTRO LABORAL`}
          value={"asdd"}
        />
      </Row>

      <HeadSection
        label="COMPLETAR SOLO EN CASO QUE LAS ACTIVIDADES DEL EMPLEADOR SEAN CONSIDERADAS DE ALTO RIESGO"
        style_wrap={{ fontSize: theme.fontSize }}
        bt={false}
      />
      <Row top height_head_cell={24}>
        <Cell
          width={20}
          label={`Nro. TRABAJADORES \n AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell
          width={25}
          label={`Nro. DE TRABAJADORES NO AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell width={55} label={"NOMBRE DE LA ASEGURADORA"} value={"asdd"} />
      </Row>

      <HeadSection
        label="Completar solo si contrata servicios de intermediación o tercerización"
        bt={false}
        style_wrap={{
          fontSize: theme.fontSize,
          textAlign: "left",
          fontFamily: theme.font,
        }}
      />
      <Row top height_head_cell={24}>
        <Cell
          width={20}
          label={`Nro. TRABAJADORES \n AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell
          width={25}
          label={`Nro. DE TRABAJADORES NO AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell width={55} label={"NOMBRE DE LA ASEGURADORA"} value={"asdd"} />
      </Row>

      <HeadSection
        label="COMPLETAR SOLO EN CASO QUE LAS ACTIVIDADES DEL EMPLEADOR SEAN CONSIDERADAS DE ALTO RIESGO"
        style_wrap={{ fontSize: theme.fontSize }}
        bt={false}
      />
      <Row top height_head_cell={24}>
        <Cell
          width={20}
          label={`Nro. TRABAJADORES \n AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell
          width={25}
          label={`Nro. DE TRABAJADORES NO AFILIADOS AL SCTR`}
          value={"asdd"}
        />
        <Cell width={55} label={"NOMBRE DE LA ASEGURADORA"} value={"asdd"} />
      </Row>
    </>
  );
}
