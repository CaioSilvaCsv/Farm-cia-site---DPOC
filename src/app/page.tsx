import CausesSection from "../../components/CausesSection";
import ClassificationSection from "../../components/ClassificationSection";
import ConclusionSection from "../../components/ConclusionSection";
import Header from "../../components/Header";
import SideEffectsSection from "../../components/SideEffectiosSection";
import SymptomsSection from "../../components/SymptomsSection";
import TreatmentSection from "../../components/TreatmentSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-brand-background font-sans text-brand-text">
      {/* Container para limitar a largura do conteúdo */}
      <div className="w-full max-w-4xl px-4 py-12">
        

        <Header/>

        <p className="my-10 text-center text-lg leading-relaxed">
          A Doença Pulmonar Obstrutiva Crônica (DPOC) é uma enfermidade
          respiratória caracterizada por limitação persistente ao fluxo aéreo,
          de natureza progressiva e irreversível, associada a um processo
          inflamatório crônico das vias aéreas e do parênquima pulmonar. É a
          terceira principal causa de morte, sendo responsável por mais de três
          milhões de óbitos anuais.
        </p>
        
        {/* Seções da Página */}
        <CausesSection />
        <SymptomsSection />
        <TreatmentSection/>
        <ClassificationSection/>
        <SideEffectsSection/>
        <ConclusionSection/>

      </div>
    </main>
  );
}