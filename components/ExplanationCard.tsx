type ExplanationCardProps = {
  // O conteúdo a ser exibido dentro do card
  children: React.ReactNode; 
  // Controla se o card está visível ou não
  isVisible: boolean; 
};

const ExplanationCard = ({ children, isVisible }: ExplanationCardProps) => {
  return (
    // A classe 'hidden' será adicionada/removida para controlar a visibilidade
    <div className={`explanation-card ${!isVisible ? 'hidden' : ''}`}>
      {children}
    </div>
  );
};

export default ExplanationCard;