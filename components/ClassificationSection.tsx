// components/ClassificationSection.tsx

const ClassificationSection = () => {
  return (
    <section id="classificacao" className="my-24 flex w-full flex-col items-center">
      {/* O fluxo do topo permanece o mesmo */}
      <h3 className="section-title">AVALIAÇÃO</h3>
      <p className="max-w-3xl text-center my-8 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
        O tratamento da DPOC se baseia em etapas progressivas conforme a 
        gravidade da doença. O grau de limitação ao fluxo aéreo, conhecido 
        como classificação GOLD e com o número e a gravidade das exacerbações 
        anteriores, conforme a categorização ABCD.
      </p>
      <div className="classification-flow">
        <div>Diagnóstico confirmado por espirometria</div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">Limitação do fluxo de ar</div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">Sintomas e risco de exacerbações</div>
      </div>


      <div className="classification-grid">
        {/* Coluna da Esquerda (GOLD) */}
        <div className="left-column">
          <div className="info-box">
            <p className="font-semibold">Após uso de broncodilatador</p>
            <p>VEF₁/VFC&lt;0,7</p>
          </div>
          <div className="info-box">
            <div className="gold-table">
              <div className="font-semibold bg-transparent">Classificação</div>
              <div className="font-semibold bg-transparent">VEF₁</div>
              <div>GOLD 1</div>
              <div>≥80</div>
              <div>GOLD 2</div>
              <div>50-79</div>
              <div>GOLD 3</div>
              <div>30-49</div>
              <div>GOLD 4</div>
              <div>&lt;30</div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita (ABCD) - ESTRUTURA ATUALIZADA */}
        <div className="right-column items-center">
          <p className="font-semibold mb-2">História de exacerbações</p>

          <div className="abcd-chart-wrapper">
            {/* As novas caixas para a legenda vertical */}
            <div className="y-axis-labels-container ">
              <div className="y-axis-box">≥2 ou ≥1 que levou a hospitalização</div>
              <div className="y-axis-box">0 ou 1 não levou a hospitalização</div>
            </div>

            {/* Wrapper para a grade e a legenda horizontal */}
            <div className="abcd-grid-wrapper">
              <div className="abcd-grid">
                <div className="grid-cell">C</div>
                <div className="grid-cell">D</div>
                <div className="grid-cell">A</div>
                <div className="grid-cell">B</div>
              </div>
              <div className="symptom-info-container">
                <div className="symptom-info">mMRC 0-1 <br /> CAT&lt;10</div>
                <div className="symptom-info">mMRC ≥2 <br /> CAT≥10</div>
              </div>
              <p className="font-semibold">Sintomas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassificationSection;