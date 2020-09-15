import Nav from "../components/nav";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="px-20 py-16">
        <div className="relative flex items-center justify-center">
          <div className="relative flex space-x-4 pointer-events-none">
            <img className="h-40 opacity-50" src="../frontview-1.png" alt="" />
            <img className="h-40 opacity-50" src="../frontview-2.jpg" alt="" />
            <img className="h-40 opacity-50" src="../frontview-3.jpg" alt="" />
            <img className="h-40 opacity-50" src="../frontview-4.png" alt="" />
          </div>
          <div className="absolute">
            <Link href="#">
              <a className="text-xl btn-green">EM BREVE</a>
            </Link>
          </div>
        </div>
        <div className="mt-16 font-semibold text-center text-accent-1">
          <p>
            Nós temos a maior listas de imóveis que qualquer corretor em
            Ribeirão Pires. Nesta cidade, nós sabemos que maior e melhor são a
            mesma coisa.
          </p>
          <br />
          <p>
            É um mercado de compradores. É um mercado de vendedores. É qualquer
            coisa que você quer que seja. Na Dynasty 8, seus sonhos vêm
            pré-aprovados.
          </p>
          <br />
          <p>Ninguém nunca perdeu dinheiro no mercado imobiliário.</p>
          <br />
          <p>
            Para um toque profissional, pessoal, às vezes impróprio, não procure
            mais do que Dynasty 8. Não pense em nós como seu corretor de
            imóveis, pense em nós como seu amigo.
          </p>
          <p>
            Um amigo bajulador que mostra sua foto em tudo como se fosse um
            anuário do ensino médio e exige uma porcentagem do seu dinheiro para
            dizer coisas que você já sabe, como "Isto é um banheiro" ou "Este
            jardim seria ótimo para seus filhos brincarem"
          </p>
          <br />
          <p>Ligue hoje para Dynasty 8 e diga olá a uma boa COMPRA!</p>
        </div>
      </div>
    </div>
  );
}
