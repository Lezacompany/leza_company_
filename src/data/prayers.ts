export interface PrayerCard {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  prayer: string;
  question: string;
  verse: string;
  reference: string;
  actionPrompt: string;
}

export const SAMPLE_PRAYERS: PrayerCard[] = [
  {
    id: 1,
    category: "Gratidão da Noite",
    categoryColor: "bg-amber-100 text-amber-800 border-amber-300",
    title: "Obrigado pelo Dia de Hoje",
    prayer:
      "Querido Deus, obrigado pelo ar que respiro, pela minha cama quentinha e por cada pessoa que cuidou de mim hoje. Sei que o Senhor esteve comigo em todos os passos. Abençoa o meu sono e prepara um novo dia cheio de paz. Amém!",
    question: "Qual foi a coisa mais boa ou engraçada que te aconteceu hoje?",
    verse: "Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre.",
    reference: "Salmos 107:1",
    actionPrompt: "Diga 3 coisas simples pelas quais você quer agradecer a Deus antes de fechar os olhos.",
  },
  {
    id: 2,
    category: "Coragem & Proteção",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    title: "Vencendo o Medo do Escuro",
    prayer:
      "Senhor Jesus, às vezes o escuro me dá um pouco de medo, mas a Tua Palavra diz que Tu nunca dormes e sempre cuidas de mim. Coloca Teus anjos ao redor do meu quarto. Meu coração agora descansa nos Teus braços. Amém!",
    question: "Existe algo que te deixou com medo hoje? Quer que oremos juntos sobre isso?",
    verse: "Não tenha medo, pois eu estou com você; não se desespere, pois eu sou o seu Deus.",
    reference: "Isaías 41:10",
    actionPrompt: "Segure a mão de quem está com você e respire fundo 3 vezes sentindo a paz de Deus.",
  },
  {
    id: 3,
    category: "Amor em Família",
    categoryColor: "bg-rose-100 text-rose-800 border-rose-300",
    title: "Abençoando Nossos Pais e Irmãos",
    prayer:
      "Pai do Céu, muito obrigado pela minha família. Abençoa a mamãe, o papai, meus avós e meus irmãos. Guarda cada um de nós com saúde, alegria e união. Que na nossa casa nunca falte amor, paciência e perdão. Amém!",
    question: "Quem na nossa família você gostaria de abraçar bem apertado agora?",
    verse: "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.",
    reference: "Colossenses 3:14",
    actionPrompt: "Dê um abraço bem demorado em quem está orando com você agora.",
  },
  {
    id: 4,
    category: "Bondade & Amizade",
    categoryColor: "bg-sky-100 text-sky-800 border-sky-300",
    title: "Coração Generoso com os Coleguinhas",
    prayer:
      "Jesus, ajuda-me a ser um bom amigo na escola e nas brincadeiras. Se algum coleguinha estiver triste ou sozinho, coloca no meu coração o desejo de ajudar. Ensina-me a dividir e a falar palavras de carinho. Amém!",
    question: "Você viu algum amigo triste ou que precisava de ajuda hoje?",
    verse: "O amigo ama em todos os momentos; é um irmão na adversidade.",
    reference: "Provérbios 17:17",
    actionPrompt: "Pense em uma palavra boa para falar a um amiguinho amanhã de manhã.",
  },
  {
    id: 5,
    category: "Perdão & Calma",
    categoryColor: "bg-purple-100 text-purple-800 border-purple-300",
    title: "Limpando o Coração para Dormir Leve",
    prayer:
      "Senhor, se hoje eu perdi a paciência, respondi mal ou fiz algo que entristeceu alguém, peço o Teu perdão. Ajuda-me a também perdoar quem me magoou. Não quero ir dormir chateado. Enche o meu peito de serenidade. Amém!",
    question: "Aconteceu alguma coisa hoje que deixou seu coração pesado ou zangado?",
    verse: "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente.",
    reference: "Efésios 4:32",
    actionPrompt: "Faça um pedido de desculpas ou ofereça um sorriso de paz.",
  },
  {
    id: 6,
    category: "Sonhos & Futuro",
    categoryColor: "bg-teal-100 text-teal-800 border-teal-300",
    title: "Plantando Sementes de Esperança",
    prayer:
      "Deus de amor, Tu tens planos maravilhosos para o meu crescimento. Ajuda-me a aprender com alegria, a respeitar os mais velhos e a descobrir os talentos que colocaste dentro de mim. O amanhã pertence a Ti! Amém!",
    question: "O que você mais gosta de fazer e sonha em realizar quando for mais velho?",
    verse: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor...",
    reference: "Jeremias 29:11",
    actionPrompt: "Diga a si mesmo no espelho ou em voz alta: 'Deus me fez único e muito especial'.",
  },
];
