import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Formulário de Contato',
  description: 'Entre em contato ou envie suas sugestões através do nosso formulário online sobre o projeto de DPOC.',
};

export default function FormularioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <h1 className="section-title mb-8">Formulário de Contato</h1>
      <p className="max-w-3xl text-center mb-8 text-gray-700 dark:text-gray-300">
        Por favor, preencha o formulário abaixo. Sua resposta é muito importante para nós.
      </p>
      <div className="form-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBaBWxO_wbBLtdeFsAfDmWBPEsAiRcveWz3grk9heCH8NPAQ/viewform?embedded=true" 
        className="google-form-iframe"
        width="640" height="1753"
        >Carregando…</iframe>
      </div>

    </main>
  );
}