import { Cell, Row } from "../../components/row_and_cell";
import { globalStyles, theme } from "../../components/theme";

export default function Cabecera() {
  return (
    <Row top>
      <Cell
        width={20}
        label="FACILITA"
        render_content={() => (
          <Row border={false}>
            <Cell width={33} label="Hola" value="Mundo" />
            <Cell width={33} label="Hola" value="Mun do" />
            <Cell
              width={33}
              label="Hola"
              value="Mundo"
              style_wrap={{ borderRight: "none" }}
            />
          </Row>
        )}
      />
      <Cell
        width={60}
        style_wrap={globalStyles.flex}
        style_head={{ backgroundColor: "transparent" }}
        bb_head={false}
        label="REGISTRO E INVESTIGACIÓN DE INCIDENTES PELIGROSOS E INCIDENTES"
        hide_content
      />
      <Cell width={20}>
        <Row
          border={false}
          style_row={{ borderBottom: theme.border, fontSize: 6 }}
          height_head_cell={13}
        >
          <Cell
            label="CODIGO"
            value="F-SST-54"
            width={100}
            inline
            style_wrap={{ borderRight: "none" }}
            width_head="40%"
            width_content="60%"
            numeration="5"
          />
        </Row>
        <Row
          border={false}
          style_row={{ borderBottom: theme.border, fontSize: 6 }}
          height_head_cell={13}
        >
          <Cell
            label="VERSIÓN"
            value="1"
            width={100}
            inline
            style_wrap={{ borderRight: "none" }}
            width_head="40%"
            width_content="60%"
          />
        </Row>

        <Row border={false} style_row={{ fontSize: 6 }} height_head_cell={13}>
          <Cell
            label="FECHA"
            value="18/08/2019"
            width={100}
            inline
            style_wrap={{ borderRight: "none" }}
            width_head="40%"
            width_content="60%"
          />
        </Row>
      </Cell>
    </Row>
  );
}
