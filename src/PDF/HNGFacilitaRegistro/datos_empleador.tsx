import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Separator from "../../components/separator";
import { theme } from "../../components/theme";

export function DatosEmpleador() {
  return (
    <>
      <HeadSection label="DATOS DEL EMPLEADOR PRINCIPAL" />

      <Row top height_head_cell={24}>
        <Cell
          width={23}
          label={`RAZÓN SOCIAL O \n DENOMINACIÓN SOCIAL`}
          value={"asdd"}
        />
        <Cell width={15} label="RUC" value={"asdd"} />
        <Cell width={27} label={`DOMICILIO`} value={"asdd"} />
        <Cell width={17} label={`TIPO DE ACTIVIDAD ECONÓMICA`} value={"asdd"} />
        <Cell
          width={18}
          label={`N° TRABAJADORES EN \n EL CENTRO LABORAL`}
          value={"asdd"}
        />
      </Row>
      <Row>
        <Cell
          width={100}
          label="COMPLETAR SÓLO EN CASO QUE LAS ACTIVIDADES DEL EMPLEADOR SEAN CONSIDERADAS DE ALTO RIESGO"
          hide_content
          bb_head={false}
          style_head={{ textAlign: "left", fontSize: theme.fontSize - 2 }}
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
          style_head={{ textAlign: "left", fontSize: theme.fontSize - 2 }}
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
        />
        <Cell width={15} label="RUC" value={"asdd"} />
        <Cell width={27} label={`DOMICILIO`} value={"asdd"} />
        <Cell width={17} label={`TIPO DE ACTIVIDAD ECONÓMICA`} value={"asdd"} />
        <Cell
          width={18}
          label={`N° TRABAJADORES EN \n EL CENTRO LABORAL`}
          value={"asdd"}
        />
      </Row>
      <Separator margin={4} />

      <Row height_head_cell={24} top>
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
