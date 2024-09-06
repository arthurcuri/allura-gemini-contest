let dados = [
  {
    titulo: "Stranger Things",
    descricao:
      "Uma série que mistura ficção científica, terror e drama. Um grupo de crianças descobre segredos obscuros e criaturas estranhas em uma pequena cidade.",
    link: "https://www.netflix.com/title/80057281",
    tags: "ficção científica, terror, drama",
  },

  {
    titulo: "The Witcher",
    descricao:
      "A saga do caçador de monstros Geralt de Rivia em um mundo cheio de magia, intrigas políticas e criaturas lendárias.",
    link: "https://www.netflix.com/title/80189685",
    tags: "fantasia, aventura, ação",
  },

  {
    titulo: "Dark",
    descricao:
      "Uma série alemã de mistério e ficção científica que explora viagens no tempo e as consequências de ações passadas e futuras.",
    link: "https://www.netflix.com/title/80100172",
    tags: "mistério, ficção científica, thriller",
  },

  {
    titulo: "La Casa de Papel",
    descricao:
      "Um grupo de ladrões realiza um dos maiores assaltos da história, com planos elaborados e dramas intensos.",
    link: "https://www.netflix.com/title/80192098",
    tags: "crime, drama, thriller",
  },

  {
    titulo: "Bridgerton",
    descricao:
      "Uma série dramática e romântica ambientada na alta sociedade londrina do século 19, onde escândalos e amores proibidos dominam as relações sociais.",
    link: "https://www.netflix.com/title/80232398",
    tags: "drama, romance, histórico",
  },

  {
    titulo: "Black Mirror",
    descricao:
      "Uma série antológica que explora o impacto da tecnologia na sociedade através de histórias sombrias e, às vezes, perturbadoras.",
    link: "https://www.netflix.com/title/70264888",
    tags: "ficção científica, drama, suspense",
  },

  {
    titulo: "Narcos",
    descricao:
      "Baseada na história real dos cartéis de drogas na Colômbia e nas tentativas das autoridades para combater o tráfico.",
    link: "https://www.netflix.com/title/80025172",
    tags: "crime, drama, história",
  },

  {
    titulo: "The Crown",
    descricao:
      "A série narra a vida da Rainha Elizabeth II e os eventos históricos mais marcantes que ocorreram durante seu reinado.",
    link: "https://www.netflix.com/title/80025678",
    tags: "drama, história, biografia",
  },

  {
    titulo: "Lucifer",
    descricao:
      "Lucifer Morningstar, o Senhor do Inferno, decide tirar férias em Los Angeles e acaba se tornando consultor da polícia.",
    link: "https://www.netflix.com/title/80057918",
    tags: "fantasia, crime, drama",
  },

  {
    titulo: "The Umbrella Academy",
    descricao:
      "Uma família disfuncional de super-heróis se reúne para desvendar o mistério da morte de seu pai e evitar um apocalipse iminente.",
    link: "https://www.netflix.com/title/80186863",
    tags: "super-heróis, ficção científica, ação",
  },

  {
    titulo: "Ozark",
    descricao:
      "Um consultor financeiro que se envolve com o cartel de drogas se muda com sua família para a zona rural dos EUA para lavar dinheiro.",
    link: "https://www.netflix.com/title/80117552",
    tags: "crime, drama, thriller",
  },

  {
    titulo: "The Haunting of Hill House",
    descricao:
      "Uma série de terror que conta a história de uma família assombrada por eventos traumáticos vividos em uma casa mal-assombrada.",
    link: "https://www.netflix.com/title/80189221",
    tags: "terror, mistério, suspense",
  },

  {
    titulo: "You",
    descricao:
      "A série acompanha Joe Goldberg, um gerente de livraria que se torna obcecado por uma jovem e começa a persegui-la, levando a eventos perturbadores.",
    link: "https://www.netflix.com/title/80211991",
    tags: "drama, thriller, suspense",
  },

  {
    titulo: "Sex Education",
    descricao:
      "Uma série que explora a vida de adolescentes e os desafios da sexualidade através da história de Otis, um jovem que abre uma clínica de terapia sexual na escola.",
    link: "https://www.netflix.com/title/80197526",
    tags: "comédia, drama, adolescente",
  },

  {
    titulo: "Peaky Blinders",
    descricao:
      "Um drama histórico que segue a ascensão de uma gangue criminosa na Inglaterra do pós-Primeira Guerra Mundial.",
    link: "https://www.netflix.com/title/80002479",
    tags: "drama, crime, histórico",
  },

  {
    titulo: "Breaking Bad",
    descricao:
      "A série acompanha Walter White, um professor de química que se torna produtor de metanfetamina após ser diagnosticado com câncer terminal.",
    link: "https://www.netflix.com/title/70143836",
    tags: "crime, drama, thriller",
  },

  // Séries adicionadas

  {
    titulo: "Money Heist: Korea",
    descricao:
      "Uma adaptação sul-coreana da popular série La Casa de Papel, onde um grupo de ladrões realiza um assalto ambicioso.",
    link: "https://www.netflix.com/title/81281246",
    tags: "crime, thriller, drama",
  },

  {
    titulo: "Queen's Gambit",
    descricao:
      "Beth Harmon, uma jovem órfã, descobre seu talento para o xadrez e enfrenta desafios pessoais e profissionais para se tornar a melhor jogadora do mundo.",
    link: "https://www.netflix.com/title/80234304",
    tags: "drama, xadrez, biografia",
  },

  {
    titulo: "The Queen's Gambit",
    descricao:
      "A série acompanha a história de Beth Harmon, uma jovem prodígio do xadrez que enfrenta desafios enquanto busca ser a melhor jogadora do mundo.",
    link: "https://www.netflix.com/title/80234304",
    tags: "drama, biografia, xadrez",
  },

  {
    titulo: "Squid Game",
    descricao:
      "Centenas de pessoas com problemas financeiros são convidadas a participar de jogos mortais por uma grande quantia em dinheiro.",
    link: "https://www.netflix.com/title/81040344",
    tags: "drama, thriller, ação",
  },

  {
    titulo: "Love, Death & Robots",
    descricao:
      "Uma antologia de curtas-metragens de animação que explora temas variados, como inteligência artificial, guerra e a natureza humana.",
    link: "https://www.netflix.com/title/80174608",
    tags: "ficção científica, animação, antologia",
  },

  {
    titulo: "The Sandman",
    descricao:
      "Baseado na obra de Neil Gaiman, a série segue Morpheus, o Senhor dos Sonhos, enquanto tenta consertar os erros que cometeu durante sua imortalidade.",
    link: "https://www.netflix.com/title/81150303",
    tags: "fantasia, drama, mistério",
  },

  {
    titulo: "Arcane",
    descricao:
      "Baseada no universo do popular jogo League of Legends, a série acompanha a história de duas irmãs em uma cidade dividida pela magia e pela tecnologia.",
    link: "https://www.netflix.com/title/81435684",
    tags: "animação, fantasia, ação",
  }
];
