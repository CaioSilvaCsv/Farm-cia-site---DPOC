// components/ConclusionSection.tsx


// 1. Estrutura de dados simplificada, sem o campo 'imageUrl'
type Participant = {
  id: string;
  name: string; 
  role?: string;
};

const participantsData: Participant[] = [
  {
    id: 'p1',
    name: 'Anielle Gomes',
    role: 'Estudante Farmacia',
  },
  {
    id: 'p2',
    name: 'Hemilly Moreira',
    role: 'Estudante Farmacia',
  },
  {
    id: 'p3',
    name: 'Julia Castro',
    role: 'Estudante Farmacia',
  },
  {
    id: 'p4',
    name: 'Nina Inês',
    role: 'Estudante Farmacia',
  },
];


const ConclusionSection = () => {
  return (
    <footer id="conclusao" className="conclusion-section">
      
      {/* O texto de conclusão permanece o mesmo */}
      <div className="max-w-3xl text-center">
        <h3 className="section-title">Conclusão</h3>
        {/* ... (todo o texto da conclusão) ... */}
        <p className="text-lg leading-relaxed">
          O tratamento da Doença Pulmonar Obstrutiva Crônica (DPOC) deve ser personalizado, 
          levando em conta a intensidade dos sintomas, o histórico clínico do paciente e 
          como ele responde aos diferentes tratamentos.
        </p>
        <p className="mt-6 text-lg font-semibold">
          Mais do que escolher os medicamentos certos, é essencial:
        </p>
        <ul className="conclusion-list mx-auto mt-4">
          <li><span>💨</span> Parar de fumar</li>
          <li><span>💉</span> Manter a vacinação em dia</li>
          <li><span>👩‍⚕️</span> Ter acompanhamento médico regular</li>
          <li><span>💊</span> Usar os remédios de forma correta e combinada, quando necessário</li>
        </ul>
        <p className="mt-6 text-lg leading-relaxed">
          Com esses cuidados, é possível reduzir crises e complicações, além de melhorar 
          significativamente a qualidade de vida de quem convive com essa doença 
          respiratória crônica.
        </p>
      </div>

      {/* Seção de Participantes ATUALIZADA */}
      <div className="w-full flex flex-col items-center mt-16">
        <h3 className="section-title">Participantes do Projeto</h3>
        <div className="participants-grid">

          {/* O .map agora gera apenas o <div> do card, sem o link <a> */}
          {participantsData.map((participant) => (
            <div key={participant.id} className="participant-card">
              {/* Ícone do Instagram foi removido */}
              
              {/* Informações de texto centralizadas */}
              <div className="flex flex-col items-center justify-center h-full">
                <p className="participant-name">{participant.name}</p>
                {participant.role && (
                  <p className="participant-role mt-1">{participant.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ConclusionSection;