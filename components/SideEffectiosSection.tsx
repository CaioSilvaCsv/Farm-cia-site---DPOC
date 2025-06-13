// components/SideEffectsSection.tsx

// 1. Nova estrutura de dados, mais flexível para acomodar as variações.
// Note que algumas propriedades são opcionais (marcadas com '?').
type DrugInfo = {
  id: string;
  name: string;
  important?: string;
  contraindication?: string;
  caution?: string | string[]; // Pode ser um texto ou uma lista
  commonAdverseEffect?: string;
  shortTermEffects?: string[];
  sideEffects?: string[];
};

// Preenchendo com as informações detalhadas que você forneceu.
const drugClassEffectsData: DrugInfo[] = [
  {
    id: 'beta2',
    name: 'Agonistas Beta-2 Adrenérgicos',
    contraindication: 'Pessoas com hipersensibilidade à substância.',
    caution: 'Pacientes com tireotoxicose ou arritmias cardíacas.',
    sideEffects: [ 'Taquicardia', 'Palpitações', 'Tremores' ],
  },
  {
    id: 'muscarinicos',
    name: 'Antagonistas Muscarínicos',
    contraindication: 'Alergia à atropina ou seus derivados.',
    caution: [ 'Glaucoma de ângulo fechado', 'Hiperplasia prostática' ],
    commonAdverseEffect: 'Boca seca',
  },
  {
    id: 'corticosteroides_in',
    name: 'Corticosteroides Inalatórios',
    important: 'Não são indicados for alívio imediato dos sintomas.',
    sideEffects: [
      'Candidíase oral',
      'Rouquidão',
      'Uso prolongado pode aumentar o risco de pneumonia',
    ],
  },
  {
    id: 'corticosteroides_sis',
    name: 'Corticosteroides Sistêmicos',
    contraindication: 'Infecções fúngicas sistêmicas.',
    caution: 'Cautela especial: Pacientes com diabetes ou hipertensão arterial.',
    shortTermEffects: [ 'Insônia', 'Alterações de humor', 'Hiperglicemia' ],
  },
];

const SideEffectsSection = () => {
  return (
    <section id="efeitos-colaterais" className="my-24 flex w-full flex-col items-center">
      <h3 className="section-title mb-12">
        Efeitos Colaterais por Classe de Medicamento
      </h3>

      <div className="side-effects-grid">
        {drugClassEffectsData.map((drug) => (
          <div key={drug.id} className="effect-card">
            <h4 className="effect-card-title">{drug.name}</h4>

            {/* O componente agora renderiza cada bloco apenas se a informação existir */}

            {drug.important && (
              <div className="effect-info-block">
                <p className="effect-info-subtitle">Importante:</p>
                <p className="text-gray-600 dark:text-gray-400">{drug.important}</p>
              </div>
            )}

            {drug.contraindication && (
              <div className="effect-info-block">
                <p className="effect-info-subtitle">Contraindicação:</p>
                <p className="text-gray-600 dark:text-gray-400">{drug.contraindication}</p>
              </div>
            )}

            {drug.caution && (
              <div className="effect-info-block">
                <p className="effect-info-subtitle">Cautela:</p>
                {/* Lógica para lidar com cautela sendo um texto ou uma lista */}
                {Array.isArray(drug.caution) ? (
                  <ul>
                    {drug.caution.map((item, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-400">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{drug.caution}</p>
                )}
              </div>
            )}

            {drug.commonAdverseEffect && (
              <div className="effect-info-block">
                <p className="effect-info-subtitle">Efeito adverso comum:</p>
                <p className="text-gray-600 dark:text-gray-400">{drug.commonAdverseEffect}</p>
              </div>
            )}

            {drug.shortTermEffects && (
              <div className="effect-info-block">
                <p className="effect-info-subtitle">Efeitos mesmo em uso curto:</p>
                <ul>
                  {drug.shortTermEffects.map((effect, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">{effect}</li>
                  ))}
                </ul>
              </div>
            )}

            {drug.sideEffects && (
              <div className="effect-info-block">
                <p className="effect-info-subtitle">Possíveis efeitos colaterais:</p>
                <ul>
                  {drug.sideEffects.map((effect, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">{effect}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default SideEffectsSection;