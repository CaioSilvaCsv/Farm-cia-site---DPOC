'use client';

import { useState } from 'react';

// Para melhor organização com TypeScript, definimos um tipo para nossos dados
type Cause = {
  id: string;
  name: string;
  description: string;
};

const causesData: Cause[] = [
  { id: 'tabagismo', name: 'Tabagismo', description: 'O tabagismo é considerado o principal fator de risco para o desenvolvimento da Doença Pulmonar Obstrutiva Crônica (DPOC)' },
  { id: 'infeccoes', name: 'Infecções respiratórias recorrentes', description: 'As infecções respiratórias recorrentes, especialmente na infância, danificam as vias aéreas e favorecem processos inflamatórios crônicos, contribuindo para o desenvolvimento e agravamento da DPOC ao longo da vida.' },
  { id: 'biomassa', name: 'Queima de biomassa', description: 'A queima de biomassa (como lenha e carvão) libera partículas e gases tóxicos que irritam e inflamam as vias respiratórias, promovendo lesões crônicas nos pulmões e aumentando o risco de desenvolver DPOC.' },
  { id: 'fatores', name: 'Fatores genéticos', description: 'Fatores genéticos, como a deficiência de alfa-1 antitripsina, reduzem a proteção do pulmão contra enzimas destrutivas, facilitando danos ao tecido pulmonar e aumentando o risco de desenvolver DPOC, mesmo sem exposição ao tabaco.' },
  { id: 'poluicao', name: 'Poluição do ar', description: 'A poluição do ar expõe os pulmões a partículas e gases irritantes que provocam inflamação crônica das vias aéreas, favorecendo lesões pulmonares progressivas e aumentando o risco de DPOC, especialmente em áreas urbanas e industrializadas.' },
  { id: 'ocupacionais', name: 'Exposições ocupacionais', description: 'Exposições ocupacionais a poeiras, vapores e fumaças irritantes causam inflamação e lesões crônicas nas vias respiratórias, contribuindo para o desenvolvimento e agravamento da DPOC, especialmente em trabalhadores sem proteção adequada.' },
];

const CausesSection = () => {
  // MUDANÇA 1: O estado inicial agora é 'null' (nada selecionado)
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  // MUDANÇA 2: Lógica para selecionar e também para des-selecionar
  const handleCauseClick = (cause: Cause) => {
    // Se a causa clicada já for a que está selecionada...
    if (selectedCause?.id === cause.id) {
      // ... anule a seleção.
      setSelectedCause(null);
    } else {
      // Senão, selecione a nova causa.
      setSelectedCause(cause);
    }
  };

  return (
    <section id="causas" className="my-16 flex w-full flex-col items-center">
      <h3 className="section-title">Causas</h3>
      <p className="mt-[-2rem] mb-8 text-gray-600 dark:text-gray-400">
        Selecione as causas para saber mais
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {causesData.map((cause) => (
          <button
            key={cause.id}
            onClick={() => handleCauseClick(cause)}
            // A lógica da classe continua a mesma e funcionará perfeitamente
            className={`causes-button ${selectedCause?.id === cause.id ? 'active' : ''}`}
          >
            {cause.name}
          </button>
        ))}
      </div>
      
      {/* Esta condição agora só será verdadeira após um clique, 
          pois 'selectedCause' começa como 'null' */}
      {selectedCause && (
        <div className="description-card">
          <p>{selectedCause.description}</p>
        </div>
      )}
    </section>
  );
};

export default CausesSection;