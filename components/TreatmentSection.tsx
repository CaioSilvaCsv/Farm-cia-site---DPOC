// components/TreatmentSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import ExplanationCard from './ExplanationCard';

type Treatment = {
  id: string;
  title: string;
  subtitle: string;
  positionClasses: string;
  description: string;
};

// Nossos dados de tratamento, agora com descrições e classes de posicionamento
const treatmentsData: Treatment[] = [
  {
    id: 'beta2',
    title: 'Agonistas Beta-2 Adrenérgicos',
    subtitle: 'SABA e LABA',
    positionClasses: 'top-[20%] left-[5%]',
    description: 'Os agonistas beta-2 adrenérgicos, como salbutamol e fenoterol (de curta ação, SABA) e formoterol, salmeterol, vilanterol e olodaterol (de longa ação, LABA), atuam estimulando a ação desse receptor, que age na musculatura lisa. Essa ativação leva o aumento de AMPc intracelular, resultando no relaxamento muscular e broncodilatação.',
  },
  {
    id: 'muscarinicos',
    title: 'Antagonistas Muscarínicos',
    subtitle: 'SAMA e LAMA',
    positionClasses: 'top-[20%] right-[5%]',
    description: 'Os antagonistas muscarínicos, como o brometo de ipratrópio (de curta ação, SAMA) e o brometo de tiotrópio e umeclidínio (de longa ação, LAMA), tem como função é bloquear competitivamente os receptores muscarínicos M3 na musculatura lisa brônquica. Ao antagonizar o efeito broncoconstritor da acetilcolina, reduzem o tônus colinérgico e promovem broncodilatação.',
  },
  {
    id: 'corticosteroides',
    title: 'Corticosteroides',
    subtitle: 'Inalatório e Sistêmico',
    positionClasses: 'bottom-[15%] left-1/2 -translate-x-1/2',
    description: 'Corticosteroides como beclometasona e budesonida (inalatórios) reduzem a inflamação brônquica de forma localizada, enquanto prednisona, prednisolona e hidrocortisona (sistêmicos) são usados por curto prazo em crises agudas para acelerar a recuperação.',
  },
];

const TreatmentSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const handleTreatmentClick = (treatment: Treatment) => {
    if (selectedTreatment?.id === treatment.id) {
      setSelectedTreatment(null);
    } else {
      setSelectedTreatment(treatment);
    }
  };

  return (
    <section id="tratamento" className="my-24 flex w-full flex-col items-center">
      <h3 className="section-title mb-16">Tratamento farmacológico</h3>
      <div className="relative w-full max-w-xl h-96">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/pulmoes.png"
            alt="Ilustração de pulmões"
            width={280}
            height={280}
            className="opacity-40 dark:opacity-60"
          />
        </div>

        {/* Mapeando os dados para criar os labels dinamicamente */}
        {treatmentsData.map((treatment) => (
          <div
            key={treatment.id}
            onClick={() => handleTreatmentClick(treatment)}
            // Aplicando a classe de posicionamento e a classe 'active'
            className={`treatment-label ${treatment.positionClasses} ${
              selectedTreatment?.id === treatment.id ? 'active' : ''
            }`}
          >
            <p>{treatment.title}</p>
            <p>{treatment.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Usando nosso componente de explicação também aqui! */}
      <ExplanationCard isVisible={!!selectedTreatment}>
        <p>{selectedTreatment?.description}</p>
      </ExplanationCard>
    </section>
  );
};

export default TreatmentSection;