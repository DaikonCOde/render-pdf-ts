import { HeadSection } from "../../components/head_section";
import { Img, WrapImage } from "../../components/image_wrap";
import Textarea from "../../components/textarea";

export function Causas() {
  return (
    <>
      <HeadSection
        label="DESCRIPCION DE LAS CAUSAS QUE ORIGINARON EL ACCIDENTE DE TRABAJO"
        bt={false}
        break_section
      />

      <HeadSection
        label="1. CAUSAS BASICAS QUE ORIGINARON EL INCIDENTE - ACCIDENTE"
        style_wrap={{ textAlign: "left" }}
      />
      <HeadSection
        label="1A. FACTORES PERSONALES"
        style_wrap={{ textAlign: "left" }}
        bb
      />
      <Textarea value={"asd"} border />

      <HeadSection
        label="1B. FACTORES DE TRABAJO"
        style_wrap={{ textAlign: "left" }}
        bb
        bt={false}
      />
      <Textarea value={"asd"} border />

      <HeadSection
        label="2. CAUSAS INMEDIATAS"
        style_wrap={{ textAlign: "left" }}
        bt={false}
      />

      <HeadSection
        label="2A. ACTOS INSEGUROS"
        style_wrap={{ textAlign: "left" }}
        bb
      />
      <Textarea value={"asd"} border />

      <HeadSection
        label="2B. CONDICIONES INSEGURAS"
        style_wrap={{ textAlign: "left" }}
        bb
        bt={false}
      />
      <Textarea value={"asd"} border />

      <HeadSection
        label="3. REGISTRE LA ESCENA DEL ACCIDENTE MEDIANTE GRAFICOS O TOMAS FOTOGRAFICAS"
        style_wrap={{ textAlign: "left" }}
        bt={false}
        bb
      />

      <WrapImage>
        <Img src="/flow.png" width={150} height={"auto"} />
        <Img src="/flow.png" width={150} height={"auto"} />
        <Img src="/flow.png" width={150} height={"auto"} />
        <Img src="/flow.png" width={150} height={"auto"} />
      </WrapImage>
    </>
  );
}
