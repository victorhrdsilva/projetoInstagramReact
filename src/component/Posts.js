import React from 'react';

let postData = [
  {
    imagemUsuario: "assets/img/meowed.svg",
    nomeUsuario: "meowed",
    imagemPost: "assets/img/gato-telefone.svg",
    imagemPerfilCurtiu: "assets/img/respondeai.svg",
    perfilCurtiu: "respondeai",
    numeroCurtidas: "101.523"
  },
  {
    imagemUsuario: "assets/img/barked.svg",
    nomeUsuario: "barked",
    imagemPost: "assets/img/dog.svg",
    imagemPerfilCurtiu: "assets/img/adorable_animals.svg",
    nomePerfilCurtiu: "adorable_animals",
    numeroCurtidas: "99.159"
  },
  {
    imagemUsuario: "assets/img/barked.svg",
    nomeUsuario: "barked",
    imagemPost: "assets/img/dog.svg",
    imagemPerfilCurtiu: "assets/img/adorable_animals.svg",
    nomePerfilCurtiu: "adorable_animals",
    numeroCurtidas: "99.159"
  }
]

function Post({ imagemUsuario, nomeUsuario, imagemPost, imagemPerfilCurtiu, nomePerfilCurtiu, numeroCurtidas }) {
  const [coracao, setCoracao] = React.useState("heart-outline");

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={imagemUsuario} />
          {nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={() => {
          if (coracao == 'heart-outline') { setCoracao('heart') }
        }}
          src={imagemPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={() => coracao == 'heart-outline' ? setCoracao('heart') : setCoracao('heart-outline')} name={coracao}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={imagemPerfilCurtiu} />
          <div class="texto">
            Curtido por <strong>{nomePerfilCurtiu}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Posts() {
  return (
    <div class="posts">
      {postData.map(item =>
        <Post
          imagemUsuario={item.imagemUsuario}
          nomeUsuario={item.nomeUsuario}
          imagemPost={item.imagemPost}
          imagemPerfilCurtiu={item.imagemPerfilCurtiu}
          nomePerfilCurtiu={item.nomePerfilCurtiu}
          numeroCurtidas={item.numeroCurtidas} />
      )}
    </div>
  );
}