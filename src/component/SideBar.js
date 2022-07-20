let sugestaoData = [
  {
    imagem: "assets/img/bad.vibes.memes.svg",
    nome: "bad.vibes.memes",
    razao: "Segue você"
  },
  {
    imagem: "assets/img/chibirdart.svg",
    nome: "chibirdart",
    razao: "Segue você"
  },
  {
    imagem: "assets/img/razoesparaacreditar.svg",
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram"
  },
  {
    imagem: "assets/img/adorable_animals.svg",
    nome: "adorable_animals",
    razao: "Segue você"
  },
  {
    imagem: "assets/img/smallcutecats.svg",
    nome: "smallcutecats",
    razao: "Segue você"
  }
];

let perfilUsuario = [
  {
    imagem: "assets/img/catanacomics.svg",
    nomeUsuario: "catanacomics",
    nome: "Catana"

  }
]

function Sugestao({ imagem, nome, razao }) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={imagem} />
        <div class="texto">
          <div class="nome">{nome}</div>
          <div class="razao">{razao}</div>
        </div>
      </div>

      <div class="seguir">seguir</div>
    </div>
  )
}

export default function SideBar() {
  return (
    <div class="sidebar">

      {perfilUsuario.map(({ imagem, nomeUsuario, nome }) => (
        <div class="usuario">
          <img src={imagem} />
          <div class="texto">
            <strong>{nomeUsuario}</strong>
            {nome}
          </div>
        </div>
      ))}

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestaoData.map(item =>
          <Sugestao
            imagem={item.imagem}
            nomeUsuario={item.nomeUsuario}
            nome={item.nome} />
        )}

      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}