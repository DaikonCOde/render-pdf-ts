import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

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
        label="Completar solo si contraa servicios de intermediacion o tercerizacion"
        bt={false}
      />
      <HeadSection
        label="DATOS DEL EMPLEADOR DE INTERMEDIACION Y TERCERIZACION, CONTRATISTA, SUBCONTRATISTA, OTROS:"
        style_wrap={{ backgroundColor: "transparent" }}
      />

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
    </>
  );
}
