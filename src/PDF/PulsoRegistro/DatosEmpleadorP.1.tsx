import { Cell, Row } from "../../components/row_and_cell";

export function DatosEmpleadorP() {
  return (
    <>
      <Row top>
        <Cell width={100} label="DATOS DEL EMPLEADOR PRINCIPAL" />
      </Row>
      <Row>
        <Cell
          height_head_cell={22.5}
          width={30}
          label="Razon Social o Denominación Social"
          value={" PULSO CORPORACIÓN MÉDICA S.A.C.  "}
        />
        <Cell
          height_head_cell={22.5}
          width={10}
          label="RUC"
          value={"20455823880"}
        />
        <Cell
          width={22}
          label={` Domicilio (Dirección, distrito, \n departamento o provincia) `}
          value={` AV. JAVIER PRADO ESTE NRO. 2932 URB. \n SAN BORJA - LIMA  `}
        />
        <Cell
          width={20}
          label="Tipo de Actividad Economica"
          value={` ACTIVIDADES DE MÉDICOS Y \n ODONTÓLOGOS `}
        />

        <Cell
          width={18}
          label={`N° Trabajadores en el \n Centro Laboral`}
          value={"   "}
        />
      </Row>

      <Row>
        <Cell
          style_head={{ backgroundColor: "transparent" }}
          width={100}
          label="COMPLETAR SOLO SI CONTRATA SERVICIOS DE INTERMEDIACION O TERCERIZACIÓN"
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label="DATOS DEL EMPLEADOR DE INTERMEDIACION, TERCERIZACION, CONTRATISTA, SUBCONTRATISTA, OTROS"
        />
      </Row>

      <Row>
        <Cell
          height_head_cell={22.5}
          width={30}
          label="Razon Social o Denominación Social"
          value={"   "}
        />
        <Cell height_head_cell={22.5} width={10} label="RUC" />
        <Cell
          width={22}
          label={` Domicilio (Dirección, distrito, \n departamento o provincia) `}
        />
        <Cell width={20} label="Tipo de Actividad Economica" />
        <Cell width={18} label={`N° Trabajadores en el \n Centro Laboral`} />
      </Row>

      <Row>
        <Cell
          width={100}
          label="DATOS DEL TRABAJADOR (COMPLETAR SOLO EN CASO QUE EL INCIDENTE AFECTE A TRABAJADORES)"
        />
      </Row>

      <Row>
        <Cell
          width={50}
          label="Apellidos y Nombres del Trabajador Accidentado"
          value={"   "}
        />
        <Cell width={25} label="N°DNI /CE" value={"   "} />
        <Cell width={25} label="Edad" value={"  "} />
      </Row>

      <Row height_head_cell={45}>
        <Cell width={20} label="Area" value={"   "} />
        <Cell width={15} label={`Puesto de \n Trabajo`} value={"   "} />
        <Cell width={10} label="Antigüedad en el empleo" value={"  "} />
        <Cell width={5} label="Sexo (F/M)" value={"  "} />
        <Cell width={10} label="Turno (D/T/N)" value={"  "} />
        <Cell width={10} label={`Tipo de \n Contrato`} value={"  "} />
        <Cell
          width={12}
          label="Tiempo de experiencia en el Puesto de Trabajo"
          value={"  "}
        />
        <Cell
          width={28}
          label={`N° de Horas Trabajadas en la \n Jornada Laboral (Antes del \n suceso)`}
          value={"  "}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label="INVESTIGACIÓN DEL INCIDENTE PELIGROSO O INCIDENTE"
        />
      </Row>

      <Row>
        <Cell
          style_head={{ backgroundColor: "transparent" }}
          width={100}
          label="Marcar con (X) si es incidente peligroso o incidente "
        />
      </Row>

      <Row>
        <Cell
          width={50}
          label="Incidente Peligroso"
          value={" "}
          inline
          width_head={65}
          width_content={35}
        />
        <Cell
          width={50}
          label="Incidente"
          value={" "}
          inline
          width_head={65}
          width_content={35}
        />
      </Row>
      <Row>
        <Cell
          width={50}
          label="N° Trabajadores Potencialmente Afectados"
          value={" "}
          inline
          width_head={65}
          width_content={35}
        />
        <Cell
          width={50}
          label={`Detallar tipo de atención en \n Primeros Auxilios (De ser el caso)`}
          value={" "}
          inline
          width_head={65}
          width_content={35}
        />
      </Row>

      <Row height_head_cell={25}>
        <Cell
          width={35}
          label={`Fecha y Hora en que ocurrio el Incidente peligroso o \n Incidente (Día/Mes/Año/Hora)`}
        />
        <Cell
          width={25}
          label="Fecha de Inicio de la Investigacion (Día/Mes/Año)"
          value={"  "}
        />
        <Cell
          width={40}
          label="Lugar Exacto donde Ocurrió el Hecho"
          value={"   "}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label="DESCRIPCION DEL INCIDENTE PELIGROSO O INCIDENTE"
          value={""}
        />
      </Row>
    </>
  );
}
