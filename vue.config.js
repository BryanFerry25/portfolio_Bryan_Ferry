module.exports = {
    css: {
      loaderOptions: {
        css: {
          // importez la police depuis le dossier "assets/fonts"
          '@font-face': [
            {
              font-family: 'Outline', // changez le nom de la police selon votre choix
              src: url('src/assets/porticoOutline.otf') // remplacez "Nom-de-la-police" par le nom de votre fichier OTF
            }
          ]
        }
      }
    }
  }