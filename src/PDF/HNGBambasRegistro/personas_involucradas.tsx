import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";
import Separator from "../../components/separator";
import { theme } from "../../components/theme";

export function PersonasInvolucradas() {
  return (
    <>
      <HeadSection
        label="Personas Involucradas"
        style_wrap={{ backgroundColor: "#c00000", color: "white" }}
      />

      <Row
        bt_content
        variant="square"
        global_style_head={{ textAlign: "left" }}
        global_style_content={{ fontFamily: theme.fontBold }}
        head_bold={false}
      >
        <Cell width={35} label="Apellidos y Nombres" value={"asdas"} />
        <Cell width={15} label="DNI/CE/Pasaporte" value={"asdas"} />

        <Cell width={35} label="Puesto de Trabajo" value={"asdas"} />
        <Cell width={15} label="Edad" value={"asdas"} br_content />
      </Row>

      <Row
        bt_content
        variant="square"
        global_style_head={{ textAlign: "left" }}
        global_style_content={{ fontFamily: theme.fontBold }}
        head_bold={false}
      >
        <Cell width={35} label="Antigüedad en el empleo" value={"asdas"} />
        <Cell width={15} label="Sexo" value={"asdas"} />

        <Cell
          width={35}
          label="N° de horas trabajadas en la jornada laboral (antes)"
          value={"asdas"}
        />
        <Cell width={15} label="Tipo de contrato" value={"asdas"} br_content />
      </Row>

      <Row
        bt_content
        variant="square"
        global_style_head={{ textAlign: "left" }}
        global_style_content={{ fontFamily: theme.fontBold }}
        head_bold={false}
      >
        <Cell width={15} label="Exp. laboral" value={"asdas"} />
        <Cell width={10} label="Turno" value={"asdas"} />

        <Cell width={20} label="Horario de trabajo" value={"asdas"} />
        <Cell width={10} label="Día Rot.:" value={"asdas"} />
        <Cell width={22.5} label="Naturaleza de la Lesión:" value={"asdas"} />
        <Cell
          width={22.5}
          label="Parte de Cuerpo Afectada:"
          value={"asdas"}
          br_content
        />
      </Row>

      <Separator margin={8} line />

      <>
        <Row
          bt_content
          variant="square"
          global_style_head={{ textAlign: "left" }}
          head_bold={false}
        >
          <Cell width={35} label="Apellidos y Nombres" value={"asdas"} />
          <Cell width={15} label="DNI/CE/Pasaporte" value={"asdas"} />

          <Cell width={35} label="Puesto de Trabajo" value={"asdas"} />
          <Cell width={15} label="Edad" value={"asdas"} br_content />
        </Row>

        <Row
          bt_content
          variant="square"
          global_style_head={{ textAlign: "left" }}
          head_bold={false}
        >
          <Cell width={35} label="Antigüedad en el empleo" value={"asdas"} />
          <Cell width={15} label="Sexo" value={"asdas"} />

          <Cell
            width={35}
            label="N° de horas trabajadas en la jornada laboral (antes)"
            value={"asdas"}
          />
          <Cell
            width={15}
            label="Tipo de contrato"
            value={"asdas"}
            br_content
          />
        </Row>

        <Row
          bt_content
          variant="square"
          global_style_head={{ textAlign: "left" }}
          head_bold={false}
        >
          <Cell width={15} label="Exp. laboral" value={"asdas"} />
          <Cell width={10} label="Turno" value={"asdas"} />

          <Cell width={20} label="Horario de trabajo" value={"asdas"} />
          <Cell width={10} label="Día Rot.:" value={"asdas"} />
          <Cell width={22.5} label="Naturaleza de la Lesión:" value={"asdas"} />
          <Cell
            width={22.5}
            label="Parte de Cuerpo Afectada:"
            value={"asdas"}
            br_content
          />
        </Row>
      </>

      <Separator margin={8} line />

      <>
        <Row
          bt_content
          variant="square"
          global_style_head={{ textAlign: "left" }}
          head_bold={false}
        >
          <Cell width={35} label="Apellidos y Nombres" value={"asdas"} />
          <Cell width={15} label="DNI/CE/Pasaporte" value={"asdas"} />

          <Cell width={35} label="Puesto de Trabajo" value={"asdas"} />
          <Cell width={15} label="Edad" value={"asdas"} br_content />
        </Row>

        <Row
          bt_content
          variant="square"
          global_style_head={{ textAlign: "left" }}
          head_bold={false}
        >
          <Cell width={35} label="Antigüedad en el empleo" value={"asdas"} />
          <Cell width={15} label="Sexo" value={"asdas"} />

          <Cell
            width={35}
            label="N° de horas trabajadas en la jornada laboral (antes)"
            value={"asdas"}
          />
          <Cell
            width={15}
            label="Tipo de contrato"
            value={"asdas"}
            br_content
          />
        </Row>

        <Row
          bt_content
          variant="square"
          global_style_head={{ textAlign: "left" }}
          head_bold={false}
          break_section
        >
          <Cell width={15} label="Exp. laboral" value={"asdas"} />
          <Cell width={10} label="Turno" value={"asdas"} />

          <Cell width={20} label="Horario de trabajo" value={"asdas"} />
          <Cell width={10} label="Día Rot.:" value={"asdas"} />
          <Cell width={22.5} label="Naturaleza de la Lesión:" value={"asdas"} />
          <Cell
            width={22.5}
            label="Parte de Cuerpo Afectada:"
            value={"asdas"}
            br_content
          />
        </Row>
      </>
    </>
  );
}
