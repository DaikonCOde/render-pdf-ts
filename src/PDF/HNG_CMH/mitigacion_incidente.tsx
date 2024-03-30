import { HeadSection } from "../../components/head_section";
import { Img, WrapImage } from "../../components/image_wrap";
import { Cell, Row } from "../../components/row_and_cell";
import { theme } from "../../components/theme";

export const MitigacionIncidente = () => {
  return (
    <>
      <HeadSection label="6. MITIGACIÓN DEL INCIDENTE / ACCIDENTE (Acciones inmediatas)" />
      <Row>
        <Cell
          width={35}
          label="Acciones Inmediatas(correcciones)"
          hide_content
          bb_head={false}
        />
        <Cell width={25} label="Responsable" hide_content bb_head={false} />
        <Cell width={20} label="Empresa" hide_content bb_head={false} />
        <Cell
          width={20}
          label="Fecha de Ejecución"
          hide_content
          bb_head={false}
        />
      </Row>

      <Row global_style_content={{ textAlign: "center" }}>
        <Cell width={35} value="Acciones Inmediatas(correcciones)" hide_head />
        <Cell width={25} value="Responsable" hide_head />
        <Cell width={20} value="Empresa" hide_head />
        <Cell width={20} value="Fecha de Ejecución" hide_head />
      </Row>

      <HeadSection label="7. GRÁFICOS DEL INCIDENTE / ACCIDENTE" />

      <WrapImage>
        <Img src="/flow.png" />
        <Img />
        <Img />
      </WrapImage>

      <Row global_style_content={{ textAlign: "center" }}>
        <Cell
          width={100}
          label="Fecha de Inicio de la Investigación:"
          value="Acciones Inmediatas(correcciones)"
          inline
          width_head={40}
          width_content={60}
          br_head={false}
          style_head={{
            color: theme.cell.color_content,
            backgroundColor: "transparent",
          }}
        />
      </Row>

      <Row
        global_style_head={{
          backgroundColor: theme.head_section.bg,
          color: "white",
        }}
      >
        <Cell width={20} label="Cargo" hide_content bb_head={false} />
        <Cell
          width={40}
          label="Nombres y Apellidos"
          hide_content
          bb_head={false}
        />
        <Cell width={20} label="Firma" hide_content bb_head={false} />
        <Cell width={20} label="Fecha" hide_content bb_head={false} />
      </Row>

      <Row global_style_content={{ textAlign: "center" }}>
        <Cell width={20} value="Acciones Inmediatas(correcciones)" hide_head />
        <Cell width={40} value="Responsable" hide_head />
        <Cell width={20} value={""} hide_head />
        <Cell width={20} value="Fecha de Ejecución" hide_head />
      </Row>
    </>
  );
};
