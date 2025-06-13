// components/SymptomsSection.tsx
'use client';

import { useState } from 'react';
import ExplanationCard from './ExplanationCard';

type Symptom = {
  name: string;
  description: string;
};

// Agora cada sintoma tem uma descrição
const symptomsData: Symptom[] = [
  { name: 'Falta de ar', description: 'Também conhecida como dispneia, é a sensação de não conseguir ar suficiente, inicialmente durante esforços e, em fases avançadas, em repouso.' },
  { name: 'Tosse crônica', description: 'Uma tosse persistente que dura mais de 8 semanas, frequentemente pior pela manhã e pode produzir catarro (tosse produtiva).' },
  { name: 'Chiado', description: 'Um som sibilante e agudo durante a respiração, causado pelo estreitamento das vias aéreas.' },
  { name: 'Opressão torácica', description: 'Sensação de aperto ou pressão no peito, que pode dificultar a respiração profunda.' },
  { name: 'Catarro', description: 'Produção excessiva de muco nas vias aéreas, que é expelido através da tosse.' },
  { name: 'Cansaço', description: 'Fadiga extrema e falta de energia que não melhora com o repouso, limitando as atividades diárias.' },
  { name: 'Fadiga', description: 'Uma sensação avassaladora de exaustão e diminuição da capacidade para o trabalho físico e mental.' },
  { name: 'Perda de peso', description: 'Emagrecimento não intencional que ocorre em estágios mais avançados da doença, devido ao maior gasto de energia para respirar.' },
];

const SymptomsSection = () => {
  // O estado agora guarda o objeto do sintoma selecionado, ou null
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);

  const handleSymptomClick = (symptom: Symptom) => {
    if (selectedSymptom?.name === symptom.name) {
      setSelectedSymptom(null);
    } else {
      setSelectedSymptom(symptom);
    }
  };

  return (
    <section id="sintomas" className="my-16 flex w-full flex-col items-center">
      <h3 className="section-title">Sintomas</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {symptomsData.map((symptom) => (
          <div
            key={symptom.name}
            onClick={() => handleSymptomClick(symptom)}
            // A classe agora é 'highlighted' se o sintoma estiver selecionado
            className={`symptom-card cursor-pointer ${
              selectedSymptom?.name === symptom.name ? 'highlighted' : ''
            }`}
          >
            <span>{symptom.name}</span>
          </div>
        ))}
      </div>

      {/* Usando nosso novo componente reutilizável! */}
      <ExplanationCard isVisible={!!selectedSymptom}>
        <p>{selectedSymptom?.description}</p>
      </ExplanationCard>
    </section>
  );
};

export default SymptomsSection;