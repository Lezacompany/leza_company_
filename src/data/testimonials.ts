export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  highlight: string;
  verified: boolean;
  avatarText: string;
  avatarBg: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Santos",
    role: "Mãe do Noah (5 anos) e da Sofia (8 anos)",
    location: "Luanda, Angola",
    rating: 5,
    highlight: "Ele próprio corre para a cama pedindo para sortear a oração!",
    comment:
      "A nossa rotina noturna era um verdadeiro campo de batalha com telemóveis e cansaço. Quando comecei a usar o Potinho de Oração, tudo mudou. Em 10 minutos oramos, rimos com as perguntas do dia e eles adormecem em paz. O Noah até pede: 'Mamã, deixa eu tirar a cartinha hoje!'. Vale mais do que qualquer brinquedo que já comprei.",
    verified: true,
    avatarText: "MS",
    avatarBg: "bg-emerald-600",
  },
  {
    id: 2,
    name: "Dona Teresa Gonçalves",
    role: "Avó coruja de 3 netos",
    location: "Benguela, Angola",
    rating: 5,
    highlight: "A melhor herança que posso deixar aos meus netos é a fé.",
    comment:
      "Quando vi a frase 'que memórias terão de nós?', meus olhos encheram-se de lágrimas. Imprimi em cartolina colorida e montei num pote de vidro com fita verde. Meus netos vêm à minha casa ao fim de semana e a primeira coisa que fazem é orar comigo. Material lindo, bem escrito e muito abençoado.",
    verified: true,
    avatarText: "TG",
    avatarBg: "bg-amber-600",
  },
  {
    id: 3,
    name: "Carlos & Patrícia Mendes",
    role: "Pais da Beatriz (6 anos)",
    location: "Lisboa, Portugal",
    rating: 5,
    highlight: "As perguntas de conversa abriram o coração da minha filha.",
    comment:
      "Muitas vezes nós pais perguntamos 'como foi o dia?' e a criança responde apenas 'foi bom'. Com as perguntas guiadas do potinho, a Beatriz começou a desabafar sobre medos na escola e a demonstrar gratidão espontânea. Mudou a atmosfera espiritual do nosso lar.",
    verified: true,
    avatarText: "CP",
    avatarBg: "bg-sky-600",
  },
  {
    id: 4,
    name: "Profª Eunice Kalufe",
    role: "Coordenadora do Ministério Infantil",
    location: "Huambo, Angola",
    rating: 5,
    highlight: "Recomendei para mais de 40 famílias na nossa congregação.",
    comment:
      "A linguagem é perfeita: doce, bíblica, acessível e profunda ao mesmo tempo. Não é apenas repetição de palavras, ensina a criança a conversar verdadeiramente com o Pai Celestial. A entrega no e-mail foi super rápida, chegou em menos de 10 minutos.",
    verified: true,
    avatarText: "EK",
    avatarBg: "bg-rose-600",
  },
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Quais são as modalidades disponíveis?",
    highlight: "Duas Modalidades",
    answer:
      "Existem duas opções: semipresencial, por 25.990 Kz, e 100% online, por 15.990 Kz.",
  },
  {
    id: 2,
    question: "O que inclui a modalidade semipresencial?",
    highlight: "Online + Presencial",
    answer:
      "Inclui formação online durante 3 dias, e-book de apoio, acompanhamento online, sessão presencial para esclarecimento de dúvidas e certificado de participação.",
  },
  {
    id: 3,
    question: "O que inclui a modalidade 100% online?",
    highlight: "Totalmente à Distância",
    answer:
      "Inclui formação online durante 3 dias, e-book de apoio, acompanhamento totalmente online e certificado digital enviado por e-mail ou WhatsApp.",
  },
  {
    id: 4,
    question: "Quando será a sessão presencial?",
    highlight: "Sábado a Confirmar",
    answer:
      "Está prevista para um sábado. A data e o local serão confirmados.",
  },
  {
    id: 5,
    question: "Quantas vagas existem?",
    highlight: "15 e 30 Vagas",
    answer:
      "Existem 15 vagas semipresenciais e 30 vagas para a modalidade 100% online.",
  },
];
