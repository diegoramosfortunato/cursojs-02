const Artista = ['Kanye West' , 'Djonga' , 'Bk']

const Musica = ['Heaven and Hell', 'junho de 94', 'Cidade do pecado' ]

const MusicaseNotas = [Artista , Musica]

const ExibeArtistaeMusica = (NomeArtista) =>{
    if(MusicaseNotas[0].includes(NomeArtista)){
     let indice = MusicaseNotas[0].indexOf(NomeArtista)
      return MusicaseNotas[0][indice] + ` Sua musica é : ` + MusicaseNotas[1][indice]
    }else{
        return `Artista não cadastrado`
    }
}


console.log(ExibeArtistaeMusica('Djonga'));

