import React from "react";
import { HeadSection } from "../../components/head_section";
import { Cell, Row } from "../../components/row_and_cell";

export function Causas() {
  return (
    <>
      <HeadSection label="DESCRIPCIÓN DE LAS CAUSAS QUE ORIGINARON EL INCIDENTE PELIGROSO O INCIDENTE" />
      <Row top>
        <Cell
          height_head_cell={44}
          width={15}
          label={`CAUSAS \n INMEDIATAS`}
          hide_content
          bb_head={false}
        />
        <Cell width={85}>
          <Row bl_row={false}>
            <Cell
              br_cell={false}
              width={100}
              label={`CONDICIONES \n SUBESTANDARES `}
              value={"--"}
              inline
              width_head={20}
              width_content={80}
            />
          </Row>

          <Row border={false}>
            <Cell
              br_cell={false}
              width={100}
              label={`ACTOS \n SUBESTANDARES`}
              value={"--"}
              inline
              width_head={20}
              width_content={80}
            />
          </Row>
        </Cell>
      </Row>

      <Row>
        <Cell
          height_head_cell={44}
          width={15}
          label={`CAUSAS \n BÁSICAS`}
          hide_content
          bb_head={false}
        />
        <Cell width={85}>
          <Row bl_row={false}>
            <Cell
              br_cell={false}
              width={100}
              label={`FACTORES \n PERSONALES `}
              value={"--"}
              inline
              width_head={20}
              width_content={80}
            />
          </Row>

          <Row border={false}>
            <Cell
              br_cell={false}
              width={100}
              label={`FACTORES DE \n TRABAJO`}
              value={"--"}
              inline
              width_head={20}
              width_content={80}
            />
          </Row>
        </Cell>
      </Row>

      <Row>
        <Cell width={100} label="MEDIDAS CORRECTIVAS" />
      </Row>
      <Row height_head_cell={40}>
        <Cell
          width={30}
          label={`Descripción de la Medida Correctiva a \n implementarse para eliminar la causa y prevenir la recurrencia`}
        />
        <Cell width={15} label="Responsable" />
        <Cell width={12} label={`Fecha de \n Ejecución \n (Día/Mes/Año)`} />
        <Cell
          width={43}
          label={`Completar en la  fecha de ejecución propuesta, el ESTADO \n de  la Implementación de la medidad correctiva (Realizada, \n pendiente, en ejecución)`}
        />
      </Row>

      <Row>
        <Cell
          width={100}
          label=" RESPONSABLES DEL REGISTRO Y DE LA INVESTIGACIÓN "
        />
      </Row>

      <Row height_head_cell={40}>
        <Cell
          width={30}
          label="Nombre"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={25}
          label="Cargo"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={20}
          label="Fecha"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={25}
          label="Firma"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
      </Row>
      <Row height_head_cell={40}>
        <Cell
          width={30}
          label="Nombre"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={25}
          label="Cargo"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={20}
          label="Fecha"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={25}
          label="Firma"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
      </Row>
      <Row height_head_cell={40}>
        <Cell
          width={30}
          label="Nombre"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={25}
          label="Cargo"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={20}
          label="Fecha"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
        <Cell
          width={25}
          label="Firma"
          value={" "}
          inline
          width_head={35}
          width_content={65}
        />
      </Row>
    </>
  );
}
