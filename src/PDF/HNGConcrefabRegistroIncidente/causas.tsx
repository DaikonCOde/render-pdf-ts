import { HeadSection } from "../../components/head_section";
import Textarea from "../../components/textarea";
import { theme } from "../../components/theme";

export function Causas() {
  return (
    <>
      <HeadSection
        label="DESCRIPCION DE LAS CAUSAS QUE ORIGINARON EL INCIDENTE PELIGROSO O INCIDENTE"
        bt={false}
        style_wrap={{ textAlign: "center" }}
      />
      <HeadSection
        label="Cada empresa, entidad publica o privada puede adoptar el modelo de determinacion de las causas que mejor se adapte a su caracteristica"
        style_wrap={{
          backgroundColor: "transparent",
          fontSize: theme.fontSize - 1,
        }}
        bb
      />

      <Textarea value={"asdd"} border />
    </>
  );
}
