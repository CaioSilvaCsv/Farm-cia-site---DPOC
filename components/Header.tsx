// components/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    // 1. A classe principal que aplica a imagem de fundo a partir do CSS
    <header className="header-background">

      {/* 2. Um container para todo o conteúdo, para garantir que ele fique
             acima da imagem de fundo e do overlay escuro (z-10) */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* 3. Textos com cores claras (ex: text-white) para contrastar com o fundo */}
        <h1 className="font-serif text-8xl font-bold text-white">DPOC</h1>
        <p className="text-sm tracking-widest text-gray-200">
          DOENÇA PULMONAR OBSTRUTIVA CRÔNICA
        </p>
        <h2 className="mt-4 font-serif text-4xl text-white">
          Abordagem farmacológica
        </h2>

        {/* 4. Navegação atualizada com o componente Link do Next.js */}
        <nav className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-200">
          {/* Link para a página inicial */}
          <Link href="/" className="hover:underline">Início</Link>
          <span>|</span>
          {/* Links de âncora para rolar a página inicial */}
          <Link href="/#causas" className="hover:underline">Causas</Link>
          <span>|</span>
          <Link href="/#sintomas" className="hover:underline">Sintomas</Link>
          <span>|</span>
          <Link href="/#tratamento" className="hover:underline">Tratamento</Link>
          <span>|</span>
          <Link href="/#classificacao" className="hover:underline">Avaliação</Link>
          <span>|</span>
          <Link href="/#efeitos-colaterais" className="hover:underline">Efeitos Colaterais</Link>
          <span>|</span>
          <Link href="/formulario" className="hover:underline">Formulário</Link>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;