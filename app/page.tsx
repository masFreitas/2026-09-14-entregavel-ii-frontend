"use client";

import BotaoInverter from "@/components/BotaoInverter";
import BotaoOnOff from "@/components/BotaoOnOff";
import BotaoOnOffComProps from "@/components/BotaoOnOffComProps";
import CampoNome from "@/components/CampoNome";
import CampoSenha from "@/components/CampoSenha";
import CampoSenhaReRender from "@/components/CampoSenhaReRender";
import CampoSenhaUseEffect from "@/components/CampoSenhaUseEffect";
import RadioButtonGenero from "@/components/RadioButtonGenero";
import SelectFrutas from "@/components/SelectFrutas";

import { useState } from "react";

export default function Home() {

  const [ligado, setLigado] = useState(false)


  return (
    <div>
      <span>1 - Botao On Off</span>
      <BotaoOnOff></BotaoOnOff>

      <br />

      <span>2 - Botao On Off Com Props</span>
      <BotaoOnOffComProps
        ligado={ligado}
        onClick={() => {
          setLigado(!ligado)
        }}
      >
      </BotaoOnOffComProps>

      <br />

      <span>3 - Campo Nome</span>
      <CampoNome></CampoNome>

      <br />

      <span>4 - Campo Senha</span>
      <CampoSenha></CampoSenha>

      <br />

      <span>5 - Campo Senha com useEffect</span>
      <CampoSenhaUseEffect></CampoSenhaUseEffect>

      <br />

      <span>6 - Campo Senha com re-render</span>
      <CampoSenhaReRender></CampoSenhaReRender>

      <br />

      <span>7 - Botão Inverter</span>
      <BotaoInverter></BotaoInverter>

      <br />

      <span>8 - Radio Button Gênero</span>
      <RadioButtonGenero></RadioButtonGenero>

      <br />

      <span>9 - Select Frutas</span>
      <SelectFrutas></SelectFrutas>
    </div>
  );
}