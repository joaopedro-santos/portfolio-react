export type Locale = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      talk: "Vamos conversar",
    },
    hero: {
      badge: "Disponível para projetos estratégicos",
      subTitle: "João Pedro — Engenheiro Front-end",
      title: "Construindo produtos digitais elegantes com clareza, velocidade e profundidade.",
      description: "Especialista em arquitetura frontend moderna, sistemas de UI polidos e experiências performáticas para times reais.",
      primary: "Conectar",
      secondary: "Ver projetos",
      insights: "Engenheiro front-end focado em interfaces lúcidas, sistemas bem pensados e desempenho calmo."
    },
    about: {
      label: "Sobre",
      title: "Um caminho de produtividade, visão e execução técnica.",
      description: [
        "Trabalho com equipes que precisam de produtos digitais refinados, performáticos e fáceis de evoluir.",
        "Do planejamento até o deploy, entrego propostas de arquitetura que mantêm experiência, qualidade e escalabilidade.",
      ],
      featureProjects: "Projetos",
      featureExperience: "Experiência",
      featureTech: "Tecnologias",
    },
    stack: {
      label: "Tecnologias",
      title: "Tecnologias selecionadas para projetos de alto impacto.",
    },
    experience: {
      label: "Experiência",
      title: "Vivência em produtos com escala, usabilidade e velocidade.",
    },
    projects: {
      label: "Projetos",
      title: "Uma vitrine para produtos pensados com cuidado técnico.",
      description: "Estrutura preparada para receber dados reais via API ou CMS, com cards desacoplados e claros.",
      demo: "Ver Demo",
      github: "GitHub",
    },
    process: {
      label: "Processo",
      title: "Um fluxo de trabalho claro para experiências consistentes.",
    },
    cta: {
      label: "Contato",
      title: "Preparado para transformar ideias em produtos digitais memoráveis.",
      button: "Fale Comigo no WhatsApp",
    },
    footer: {
      label: "Vamos conversar",
      info: "Estou disponível para projetos que priorizam produto, performance e experiência.",
      email: "Email:",
      linkedIn: "LinkedIn:",
      copyright: "© 2026 João Pedro",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      talk: "Let's talk",
    },
    hero: {
      badge: "Available for strategic projects",
      subTitle: "João Pedro — Front-end Engineer",
      title: "Crafting elegant digital products with clarity, speed and depth.",
      description: "Specialist in modern frontend architecture, polished UI systems and performant experiences for real teams.",
      primary: "Connect",
      secondary: "View projects",
      insights: "Front-end engineer focused on lucid interfaces, thoughtful systems and calm performance."
    },
    about: {
      label: "About",
      title: "A path of productivity, vision and technical execution.",
      description: [
        "I work with teams that need refined, performant digital products that are easy to evolve.",
        "From planning to deployment, I deliver architecture proposals that preserve experience, quality and scalability.",
      ],
      featureProjects: "Projects",
      featureExperience: "Experience",
      featureTech: "Technologies",
    },
    stack: {
      label: "Technologies",
      title: "Technologies selected for high-impact product work.",
    },
    experience: {
      label: "Experience",
      title: "Hands-on delivery across products with scale, usability and speed.",
    },
    projects: {
      label: "Projects",
      title: "A showcase of products designed with technical care.",
      description: "Structure built to receive real API or CMS data, with clear and decoupled cards.",
      demo: "View Demo",
      github: "GitHub",
    },
    process: {
      label: "Process",
      title: "A clear workflow for consistent experiences.",
    },
    cta: {
      label: "Contact",
      title: "Ready to turn ideas into memorable digital products.",
      button: "Contact via WhatsApp",
    },
    footer: {
      label: "Let's talk",
      info: "I’m available for projects that prioritize product, performance and experience.",
      email: "Email:",
      linkedIn: "LinkedIn:",
      copyright: "© 2026 João Pedro",
    },
  },
};

export type Translations = (typeof translations)[Locale];

export function localeText(locale: Locale) {
  return translations[locale];
}
