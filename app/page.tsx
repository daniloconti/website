"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Mail,
  Linkedin,
  Instagram,
  Menu,
  X,
  TrendingUp,
  Users,
  Lightbulb,
  BarChart3,
  Database,
  Target,
  Briefcase,
  GraduationCap,
  Palette,
  Globe,
  Search,
  Megaphone,
  Lock,
  ExternalLink,
  Languages,
} from "lucide-react"
import Image from "next/image"

type Language = "pt" | "en"

type Project = {
  id: string
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  icon: any
  category: string
  context: { pt: string; en: string }
  actions: { pt: string[]; en: string[] }
  delivery: { pt: string; en: string }
  hashtags: string[]
  link?: string
  isUnlocked?: boolean
}

type ExpertiseArea = {
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  icon: any
  details: {
    pt: { subtitle: string; items: string[] }
    en: { subtitle: string; items: string[] }
  }
}

const projects: Project[] = [
  {
    id: "onlab",
    title: { pt: "ON Lab - Sebrae PR", en: "ON Lab - Sebrae PR" },
    description: {
      pt: "Estruturação e operação de laboratório de inovação para apoiar a transformação digital e centrada no usuário.",
      en: "Structuring and operating an innovation laboratory to support digital and user-centered transformation.",
    },
    icon: Lightbulb,
    category: "Pesquisa & Inteligência",
    context: {
      pt: "Estruturação e operação de laboratório de inovação para apoiar a transformação digital e centrada no usuário.",
      en: "Structuring and operating an innovation laboratory to support digital and user-centered transformation.",
    },
    actions: {
      pt: [
        "Pesquisa exploratória com empreendedores.",
        "Desk research de modelos globais de labs.",
        "Definição de governança e modelo de atuação.",
        "Aplicação prática de Design Thinking.",
      ],
      en: [
        "Exploratory research with entrepreneurs.",
        "Desk research on global lab models.",
        "Definition of governance and operating model.",
        "Practical application of Design Thinking.",
      ],
    },
    delivery: {
      pt: "Playbook do ON Lab, documentando métodos e processos para replicação.",
      en: "ON Lab Playbook, documenting methods and processes for replication.",
    },
    hashtags: ["DesignThinking", "Governance", "ServiceDesign", "Innovation", "Research"],
    link: "https://drive.google.com/file/d/1LtgVYiu5I23xVurlx_3m_S6UcLmAq2HF/view?usp=drive_link",
    isUnlocked: true,
  },
  {
    id: "blip-onboarding",
    title: { pt: "Onboarding SMB - Blip", en: "SMB Onboarding - Blip" },
    description: {
      pt: "Redesenho da jornada de entrada para clientes SMB com objetivo de reduzir o churn inicial e acelerar o time-to-first-value.",
      en: "Redesign of onboarding journey for SMB clients aiming to reduce initial churn and accelerate time-to-first-value.",
    },
    icon: Users,
    category: "Design de Produto",
    context: {
      pt: "Redesenho da jornada de entrada para clientes SMB com objetivo de reduzir o churn inicial e acelerar o time-to-first-value.",
      en: "Redesign of onboarding journey for SMB clients aiming to reduce initial churn and accelerate time-to-first-value.",
    },
    actions: {
      pt: [
        "Pesquisa qualitativa com clientes e times internos.",
        "Mapeamento detalhado de dores e pontos de abandono.",
        "Definição de proto-personas.",
        "Desenho da nova oferta de serviço e modelo operacional.",
      ],
      en: [
        "Qualitative research with clients and internal teams.",
        "Detailed mapping of pain points and drop-off moments.",
        "Definition of proto-personas.",
        "Design of new service offering and operational model.",
      ],
    },
    delivery: {
      pt: "Material executivo com diagnóstico, proposta de serviço (Blueprint) e plano de implementação.",
      en: "Executive material with diagnosis, service proposal (Blueprint) and implementation plan.",
    },
    hashtags: ["ServiceDesign", "ProtoPersonas", "CustomerJourney", "Onboarding", "ChurnReduction"],
    isUnlocked: false,
  },
  {
    id: "bradesco",
    title: { pt: "Imersão BARE - Bradesco Seguros", en: "BARE Immersion - Bradesco Seguros" },
    description: {
      pt: "O ecossistema digital estava fragmentado em 3 apps, gerando confusão e ineficiência operacional.",
      en: "The digital ecosystem was fragmented across 3 apps, creating confusion and operational inefficiency.",
    },
    icon: BarChart3,
    category: "Pesquisa & Inteligência",
    context: {
      pt: "O ecossistema digital estava fragmentado em 3 apps (BSC, Dia&Noite, Dirija Bem), gerando confusão e ineficiência operacional.",
      en: "The digital ecosystem was fragmented across 3 apps (BSC, Dia&Noite, Dirija Bem), creating confusion and operational inefficiency.",
    },
    actions: {
      pt: [
        "Pesquisa Quali e Quanti com entrevistas e análise de dados.",
        "Diagnóstico para apoiar a tomada de decisão pelo board.",
        "Benchmark de tendências (Superapps).",
        "Definição da arquitetura para o App Bradesco Seguros 2.0.",
      ],
      en: [
        "Qualitative and Quantitative research with interviews and data analysis.",
        "Diagnosis to support board decision-making.",
        "Benchmark of trends (Superapps).",
        "Architecture definition for Bradesco Seguros App 2.0.",
      ],
    },
    delivery: {
      pt: "Roadmap estratégico de unificação dos aplicativos, descontinuação de legados e redesenho da jornada de Sinistro.",
      en: "Strategic roadmap for app unification, legacy discontinuation and Claims journey redesign.",
    },
    hashtags: ["QualitativeResearch", "QuantitativeResearch", "Benchmark", "Architecture", "UXStrategy", "Superapps"],
    isUnlocked: false,
  },
  {
    id: "blip-knowledge",
    title: { pt: "Gestão de Conhecimento - Blip", en: "Knowledge Management - Blip" },
    description: {
      pt: "Pesquisa para entender como o conhecimento era gerado, armazenado e compartilhado em uma empresa em hipercrescimento.",
      en: "Research to understand how knowledge was generated, stored and shared in a hyper-growth company.",
    },
    icon: Database,
    category: "Pesquisa & Inteligência",
    context: {
      pt: "Pesquisa para entender como o conhecimento era gerado, armazenado e compartilhado em uma empresa em hipercrescimento.",
      en: "Research to understand how knowledge was generated, stored and shared in a hyper-growth company.",
    },
    actions: {
      pt: [
        "Entrevistas com lideranças de múltiplos times.",
        "Mapeamento de fluxos formais e informais.",
        "Análise de ferramentas e rituais existentes.",
        "Identificação de riscos de silo e oportunidades.",
      ],
      en: [
        "Interviews with leaders from multiple teams.",
        "Mapping of formal and informal flows.",
        "Analysis of existing tools and rituals.",
        "Identification of silo risks and opportunities.",
      ],
    },
    delivery: {
      pt: "Findings Report executivo com recomendações estratégicas e próximos passos.",
      en: "Executive Findings Report with strategic recommendations and next steps.",
    },
    hashtags: ["Interviews", "Mapping", "FlowAnalysis", "KnowledgeManagement"],
    isUnlocked: false,
  },
  {
    id: "runnit",
    title: { pt: "Runnit", en: "Runnit" },
    description: {
      pt: "Criação da primeira assessoria de corrida runtech do Brasil, democratizando acesso a treino personalizado via IA e suporte híbrido.",
      en: "Creation of Brazil's first runtech coaching service, democratizing access to personalized training via AI and hybrid support.",
    },
    icon: TrendingUp,
    category: "Design de Produto",
    context: {
      pt: "Criação da primeira assessoria de corrida runtech do Brasil, democratizando acesso a treino personalizado via IA e suporte híbrido.",
      en: "Creation of Brazil's first runtech coaching service, democratizing access to personalized training via AI and hybrid support.",
    },
    actions: {
      pt: [
        "Pesquisa e identificação de oportunidade.",
        "Estratégia de produto e modelo de negócio (SaaS + Marketplace).",
        "Validação de MVP e roadmap de crescimento.",
        "Go-to-market e captação de investimento.",
      ],
      en: [
        "Research and opportunity identification.",
        "Product strategy and business model (SaaS + Marketplace).",
        "MVP validation and growth roadmap.",
        "Go-to-market and investment fundraising.",
      ],
    },
    delivery: {
      pt: "Protótipo funcional (App), Business Plan em validação e estratégia de Growth.",
      en: "Functional prototype (App), Business Plan under validation and Growth strategy.",
    },
    hashtags: ["SaaS", "Marketplace", "MVP", "GoToMarket", "Startup"],
    link: "https://runnit.com.br",
    isUnlocked: false,
  },
  {
    id: "lia",
    title: { pt: "App LIA", en: "LIA App" },
    description: {
      pt: "Diagnóstico estratégico e validação de interesse para um aplicativo de cuidado com idosos, focado em aquisição e product-market fit.",
      en: "Strategic diagnosis and interest validation for an elderly care app, focused on acquisition and product-market fit.",
    },
    icon: Target,
    category: "Growth Marketing",
    context: {
      pt: "Diagnóstico estratégico e validação de interesse para um aplicativo de cuidado com idosos, focado em aquisição e product-market fit.",
      en: "Strategic diagnosis and interest validation for an elderly care app, focused on acquisition and product-market fit.",
    },
    actions: {
      pt: [
        "Pesquisa exploratória com público-alvo (famílias).",
        "Diagnóstico de canais de aquisição (Ads, Orgânico).",
        "Definição de North Star Metric e Funil AIDA.",
        "Estruturação de hipóteses de crescimento.",
      ],
      en: [
        "Exploratory research with target audience (families).",
        "Acquisition channels diagnosis (Ads, Organic).",
        "North Star Metric and AIDA Funnel definition.",
        "Growth hypotheses structuring.",
      ],
    },
    delivery: {
      pt: "Relatório de Discovery consolidado, conectando dados de pesquisa a direcionamento estratégico.",
      en: "Consolidated Discovery Report, connecting research data to strategic direction.",
    },
    hashtags: ["NorthStar", "AIDAFunnel", "Acquisition", "ProductMarketFit"],
    isUnlocked: false,
  },
  {
    id: "blip-marketing",
    title: { pt: "Case Blip Marketing", en: "Blip Marketing Case" },
    description: {
      pt: "Preparação da empresa para IPO. O produto estava fragmentado, com alto custo operacional e churn elevado.",
      en: "Company preparation for IPO. Product was fragmented with high operational costs and elevated churn.",
    },
    icon: Megaphone,
    category: "Design de Produto",
    context: {
      pt: "Preparação da empresa para IPO. O produto estava fragmentado, com alto custo operacional e churn elevado.",
      en: "Company preparation for IPO. Product was fragmented with high operational costs and elevated churn.",
    },
    actions: {
      pt: [
        "Liderança de redesign sistêmico.",
        "Condução de pesquisa com +15 stakeholders internos e externos.",
        "Unificação da jornada do usuário e prototipagem.",
      ],
      en: [
        "Leadership of systemic redesign.",
        "Research conducted with +15 internal and external stakeholders.",
        "User journey unification and prototyping.",
      ],
    },
    delivery: {
      pt: "Otimização da estrutura de squads (de 4 para 3). Redução de ~40% no custo operacional do time. Validação de nova proposta de valor focada em 'Geração de Demanda'.",
      en: "Squad structure optimization (from 4 to 3). ~40% reduction in team operational costs. Validation of new value proposition focused on 'Demand Generation'.",
    },
    hashtags: ["Redesign", "OperationalEfficiency", "UserJourney", "Prototyping", "IPO"],
    isUnlocked: false,
  },
  {
    id: "blip-billing",
    title: { pt: "Case Blip Billing", en: "Blip Billing Case" },
    description: {
      pt: "Clientes (Enterprise e SMB) tinham dificuldades em entender faturas e gerenciar pagamentos dentro da plataforma.",
      en: "Clients (Enterprise and SMB) had difficulties understanding invoices and managing payments within the platform.",
    },
    icon: BarChart3,
    category: "Design de Produto",
    context: {
      pt: "Clientes (Enterprise e SMB) tinham dificuldades em entender faturas e gerenciar pagamentos dentro da plataforma.",
      en: "Clients (Enterprise and SMB) had difficulties understanding invoices and managing payments within the platform.",
    },
    actions: {
      pt: [
        "Mapeamento da jornada financeira.",
        "Redesign do painel de billing.",
        "Simplificação da visualização de faturas.",
      ],
      en: ["Financial journey mapping.", "Billing panel redesign.", "Invoice visualization simplification."],
    },
    delivery: {
      pt: "Redução de tickets de suporte sobre dúvidas de fatura. Aumento na taxa de pagamento pontual.",
      en: "Reduction in support tickets about invoice questions. Increase in on-time payment rate.",
    },
    hashtags: ["FinancialUX", "Billing", "Transparency", "Enterprise", "Payments"],
    isUnlocked: false,
  },
]

const expertiseAreas: ExpertiseArea[] = [
  {
    title: { pt: "Pesquisa & Inteligência", en: "Research & Intelligence" },
    description: {
      pt: "Compreensão profunda do contexto e comportamento. Uso de Atomic Research para estruturar aprendizados e transformar dados em diagnósticos claros.",
      en: "Deep understanding of context and behavior. Using Atomic Research to structure learnings and transform data into clear diagnoses.",
    },
    icon: Search,
    details: {
      pt: {
        subtitle: "Como posso ajudar:",
        items: [
          "Pesquisa Qualitativa: Entrevistas em profundidade, Grupos Focais e Diários de uso",
          "Imersão no Contexto: Shadowing e Cliente Oculto (Mystery Shopping)",
          "Market Intelligence: Trend Hunting, Benchmark competitivo e Análise SWOT",
          "Atomic Research: Estruturação de aprendizados para criar uma base de conhecimento perene",
        ],
      },
      en: {
        subtitle: "How I can help:",
        items: [
          "Qualitative Research: In-depth Interviews, Focus Groups and Usage Diaries",
          "Context Immersion: Shadowing and Mystery Shopping",
          "Market Intelligence: Trend Hunting, Competitive Benchmark and SWOT Analysis",
          "Atomic Research: Learning structuring to create a lasting knowledge base",
        ],
      },
    },
  },
  {
    title: { pt: "Design de Produto", en: "Product Design" },
    description: {
      pt: "Tangibilização de estratégias em soluções digitais. Conexão entre descoberta (discovery) e definição de MVP para validar hipóteses rapidamente.",
      en: "Tangibilization of strategies into digital solutions. Connection between discovery and MVP definition to validate hypotheses quickly.",
    },
    icon: Palette,
    details: {
      pt: {
        subtitle: "Como posso ajudar:",
        items: [
          "Estratégia de Produto: UX Strategy, Value Proposition Canvas e Visão de Futuro",
          "Design de Serviço: Service Blueprints e Mapeamento de Jornadas (To-Be)",
          "Planejamento: Priorização de roadmap baseada em valor",
          "Tangibilização: Prototipagem (Figma) e Design Systems para escala",
        ],
      },
      en: {
        subtitle: "How I can help:",
        items: [
          "Product Strategy: UX Strategy, Value Proposition Canvas and Future Vision",
          "Service Design: Service Blueprints and Journey Mapping (To-Be)",
          "Planning: Value-based roadmap prioritization",
          "Tangibilization: Prototyping (Figma) and Design Systems for scale",
        ],
      },
    },
  },
  {
    title: { pt: "Design (Brand & Mkt)", en: "Design (Brand & Mkt)" },
    description: {
      pt: "Design como alavanca de autoridade. Criação de identidade e narrativas visuais que materializam a proposta de valor com consistência em todos os canais.",
      en: "Design as authority lever. Creation of identity and visual narratives that materialize value proposition consistently across all channels.",
    },
    icon: Megaphone,
    details: {
      pt: {
        subtitle: "Como posso ajudar:",
        items: [
          "Posicionamento: Brandbook e definição de teses de posicionamento",
          "Narrativa Comercial: Storytelling e Mensagens-chave para apresentações de alto impacto",
          "Visualização de Dados: Relatórios executivos e Dashboards",
          "Conversão: Landing Pages e materiais focados em comunicar a proposta de valor",
        ],
      },
      en: {
        subtitle: "How I can help:",
        items: [
          "Positioning: Brandbook and positioning thesis definition",
          "Commercial Narrative: Storytelling and Key Messages for high-impact presentations",
          "Data Visualization: Executive Reports and Dashboards",
          "Conversion: Landing Pages and materials focused on communicating value proposition",
        ],
      },
    },
  },
  {
    title: { pt: "Growth Marketing", en: "Growth Marketing" },
    description: {
      pt: "Validação de caminhos de crescimento. Estruturação de Funis e ciclos de experimentação para encontrar alavancas de tração real.",
      en: "Validation of growth paths. Structuring Funnels and experimentation cycles to find real traction levers.",
    },
    icon: TrendingUp,
    details: {
      pt: {
        subtitle: "Como posso ajudar:",
        items: [
          "Estratégia de Funil: Diagnóstico AIDA / AARRR e Análise de canais de aquisição",
          "Métricas de Negócio: Definição de KPIs, North Star Metric e Análise de LTV/CAC",
          "Validação Rápida: Testes de fumaça (Smoke Tests) e Landing Pages",
          "Experimentação: Ciclos de Testes A/B e validação de hipóteses de crescimento",
        ],
      },
      en: {
        subtitle: "How I can help:",
        items: [
          "Funnel Strategy: AIDA / AARRR Diagnosis and Acquisition channels Analysis",
          "Business Metrics: KPIs definition, North Star Metric and LTV/CAC Analysis",
          "Rapid Validation: Smoke Tests and Landing Pages",
          "Experimentation: A/B Test Cycles and growth hypothesis validation",
        ],
      },
    },
  },
]

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseArea | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos")
  const [language, setLanguage] = useState<Language>("pt")
  const [trajectoryModalOpen, setTrajectoryModalOpen] = useState(false)

  const filters =
    language === "pt"
      ? ["Todos", "Pesquisa & Inteligência", "Design de Produto", "Design (Brand & Mkt)", "Growth Marketing"]
      : ["All", "Research & Intelligence", "Product Design", "Design (Brand & Mkt)", "Growth Marketing"]

  const filteredProjects =
    selectedFilter === "Todos" || selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const t = {
    pt: {
      menu: {
        about: "Sobre",
        expertise: "Atuação",
        projects: "Projetos",
        trajectory: "Trajetória",
      },
      hero: {
        title: "DANILO CONTI",
        subtitle: "Growth & Design Lead",
        description: "Escalando Produtos e Marcas via Estratégia e UX",
      },
      about: {
        title: "Quem eu sou",
        intro:
          "Growth & Design Lead – Atuo na intersecção onde a promessa da marca se materializa na entrega do produto, conectando experiência a alavancas de tração.",
        ctaButton: "Conheça minha trajetória completa",
        cards: {
          dataDriven: {
            title: "Data Driven",
            description:
              "Cultura de experimentação, análise de funis e tomada de decisão orientada por métricas e comportamento do usuário.",
          },
          international: {
            title: "Vivência Internacional",
            description:
              "Mestrado em Madrid e atuação em projetos globais, consolidando fluência cultural e visão estratégica em diferentes mercados.",
          },
          brands: {
            title: "Experiência em Grandes Marcas",
            description:
              "Histórico de atuação em players de mercado consolidados e scale-ups (como Blip, Bradesco Seguros e Sebrae), garantindo consistência e impacto em escala.",
          },
          management: {
            title: "Gestão de Times e Projetos",
            description:
              "Liderança de equipes multidisciplinares e orquestração de projetos complexos, garantindo alinhamento estratégico e excelência na entrega.",
          },
        },
      },
      formation: {
        title: "Base Técnica",
        cards: {
          masters: {
            title: "Mestrado em Design Estratégico",
            institution: "IED Madrid | 2018",
            description: "Foco em resolução de problemas complexos e sistêmicos.",
          },
          growth: {
            title: "Growth & Marketing Program (GMP)",
            institution: "Staage | 2025",
            description: "Visão de Negócio e alavancas de crescimento.",
          },
          bachelor: {
            title: "Graduação em Design de Produto",
            institution: "Universidade Presbiteriana Mackenzie | 2006",
            description: "Base sólida de produto e processos de criação.",
          },
          global: {
            title: "Vivência Global",
            institution: "Experiência internacional e participação em projetos globais",
            description: "Trazendo repertório multicultural.",
          },
        },
      },
      experience: {
        title: "Trajetória e Contexto",
        subtitle: "EXPERIÊNCIA RELEVANTE",
        companies: {
          mutualcore: {
            title: "Mutualcore",
            description: "Growth Marketing Manager (Diagnóstico, estratégia e execução de crescimento).",
          },
          blip: {
            title: "Blip",
            description: "Service Designer Sênior e Staff Designer (Estratégia de serviço e novos produtos).",
          },
          bradesco: {
            title: "Bradesco Seguros",
            description: "UX Strategist (Inovação e jornadas complexas).",
          },
          sebrae: {
            title: "Sebrae PR",
            description: "Consultor de Inovação (Modelagem de novos serviços).",
          },
          startups: {
            title: "Startups / Projetos Autorais",
            description: "Visão empreendedora de ponta a ponta.",
          },
        },
        environments: {
          subtitle: "AMBIENTES DE ATUAÇÃO",
          tech: "Tech & SaaS",
          corporate: "Corporações",
          innovation: "Inovação",
          health: "Saúde & Bem Estar",
          sustainability: "Sustentabilidade",
          smb: "SMB",
        },
      },
      howIWork: {
        title: "Como eu Trabalho",
        cards: {
          strategy: {
            title: "Da Estratégia à Tática",
            description:
              "Trabalho entendendo a estratégia macro do negócio e construindo as pontes para o direcionamento tático. Traduzo objetivos abstratos em planos acionáveis.",
            stack: "Stack:",
            tools: "OKRs, Miro/Mural, FigJam, Notion.",
          },
          execution: {
            title: "Execução (Hands-on)",
            description:
              "Atuação direta na construção da solução. Tenho domínio técnico para colocar a mão na massa, prototipar e garantir a excelência na entrega final.",
            stack: "Stack:",
            tools: "Figma, Adobe CC, GA4, Diversas em IA",
          },
          management: {
            title: "Gestão Colaborativa",
            description:
              "Abordagem próxima na gestão de projetos junto ao time. Atuo facilitando a comunicação e garantindo o alinhamento constante entre stakeholders.",
            stack: "Cultura:",
            tools: "Agile, Autogestão, facilitação e uso de ferramentas.",
          },
        },
      },
      expertise: {
        title: "Campos de Atuação",
      },
      projects: {
        title: "Projetos Selecionados",
        context: "Contexto",
        actions: "Principais Atuações",
        delivery: "Entregas Principais",
        accessProject: "Acessar o Projeto",
        protectedProject: "Este projeto está protegido",
        contactInfo: "Entre em contato para mais informações.",
      },
      quote: {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
      },
      footer: {
        rights: "© 2026 Danilo Conti. Todos os direitos reservados.",
        contact: "Entre em contato",
      },
    },
    en: {
      menu: {
        about: "About",
        expertise: "Expertise",
        projects: "Projects",
        trajectory: "Background",
      },
      hero: {
        title: "DANILO CONTI",
        subtitle: "Growth & Design Lead",
        description: "Scaling Products and Brands via Strategy and UX",
      },
      about: {
        title: "Who I am",
        intro:
          "Growth & Design Lead – I work at the intersection where brand promise materializes in product delivery, connecting experience to traction levers.",
        ctaButton: "Explore my complete background",
        cards: {
          dataDriven: {
            title: "Data Driven",
            description:
              "Experimentation culture, funnel analysis and decision-making guided by metrics and user behavior.",
          },
          international: {
            title: "International Experience",
            description:
              "Master's degree in Madrid and work on global projects, consolidating cultural fluency and strategic vision across different markets.",
          },
          brands: {
            title: "Experience in Major Brands",
            description:
              "Track record working with established market players and scale-ups (like Blip, Bradesco Seguros and Sebrae), ensuring consistency and impact at scale.",
          },
          management: {
            title: "Team and Project Management",
            description:
              "Leadership of multidisciplinary teams and orchestration of complex projects, ensuring strategic alignment and delivery excellence.",
          },
        },
      },
      formation: {
        title: "Technical Foundation",
        cards: {
          masters: {
            title: "Master's in Strategic Design",
            institution: "IED Madrid | 2018",
            description: "Focus on solving complex and systemic problems.",
          },
          growth: {
            title: "Growth & Marketing Program (GMP)",
            institution: "Staage | 2025",
            description: "Business Vision and growth levers.",
          },
          bachelor: {
            title: "Bachelor's in Product Design",
            institution: "Mackenzie Presbyterian University | 2006",
            description: "Solid foundation in product and creation processes.",
          },
          global: {
            title: "Global Experience",
            institution: "International experience and participation in global projects",
            description: "Bringing multicultural repertoire.",
          },
        },
      },
      experience: {
        title: "Background and Context",
        subtitle: "RELEVANT EXPERIENCE",
        companies: {
          mutualcore: {
            title: "Mutualcore",
            description: "Growth Marketing Manager (Diagnosis, strategy and growth execution).",
          },
          blip: {
            title: "Blip",
            description: "Senior Service Designer and Staff Designer (Service strategy and new products).",
          },
          bradesco: {
            title: "Bradesco Seguros",
            description: "UX Strategist (Innovation and complex journeys).",
          },
          sebrae: {
            title: "Sebrae PR",
            description: "Innovation Consultant (New services modeling).",
          },
          startups: {
            title: "Startups / Original Projects",
            description: "End-to-end entrepreneurial vision.",
          },
        },
        environments: {
          subtitle: "WORK ENVIRONMENTS",
          tech: "Tech & SaaS",
          corporate: "Corporations",
          innovation: "Innovation",
          health: "Health & Wellness",
          sustainability: "Sustainability",
          smb: "SMB",
        },
      },
      howIWork: {
        title: "How I Work",
        cards: {
          strategy: {
            title: "From Strategy to Tactics",
            description:
              "I work understanding the macro business strategy and building bridges to tactical direction. I translate abstract objectives into actionable plans.",
            stack: "Stack:",
            tools: "OKRs, Miro/Mural, FigJam, Notion.",
          },
          execution: {
            title: "Execution (Hands-on)",
            description:
              "Direct involvement in solution building. I have technical domain to get hands-on, prototype and ensure excellence in final delivery.",
            stack: "Stack:",
            tools: "Figma, Adobe CC, GA4, Various AI tools",
          },
          management: {
            title: "Collaborative Management",
            description:
              "Close approach in project management with the team. I facilitate communication and ensure constant alignment between stakeholders.",
            stack: "Culture:",
            tools: "Agile, Self-management, facilitation and tool usage.",
          },
        },
      },
      expertise: {
        title: "Fields of Expertise",
      },
      projects: {
        title: "Selected Projects",
        context: "Context",
        actions: "Main Actions",
        delivery: "Key Deliveries",
        accessProject: "Access Project",
        protectedProject: "This project is protected",
        contactInfo: "Contact me for more information.",
      },
      quote: {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
      },
      footer: {
        rights: "© 2025 Danilo Conti. All rights reserved.",
        contact: "Get in touch",
      },
    },
  }

  const trans = t[language]

  return (
    <div className="min-h-screen bg-background dark">
      {/* Navigation Menu */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-xl font-bold text-foreground">Danilo Conti</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {trans.menu.about}
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {trans.menu.expertise}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {trans.menu.projects}
            </button>
            <button
              onClick={() => setTrajectoryModalOpen(true)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {trans.menu.trajectory}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Languages className="h-4 w-4" />
              {language === "pt" ? "EN" : "PT"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {trans.menu.about}
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {trans.menu.expertise}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {trans.menu.projects}
              </button>
              <button
                onClick={() => {
                  setTrajectoryModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {trans.menu.trajectory}
              </button>
              <button
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="flex w-fit items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Languages className="h-4 w-4" />
                {language === "pt" ? "English" : "Português"}
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container relative mx-auto px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            {/* Left: Text */}
            <div className="order-2 md:order-1">
              <h1 className="font-display mb-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl text-center md:text-left">
                {language === "pt" ? "DANILO CONTI" : "DANILO CONTI"}
              </h1>
              <p className="font-display mb-2 text-xl font-bold md:text-2xl text-center" style={{ color: "#38bdf8" }}>
                Growth & Design Lead
              </p>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl text-center md:text-left">
                {language === "pt"
                  ? "Escalando Produtos e Marcas via Estratégia e UX"
                  : "Scaling Products and Brands through Strategy and UX"}
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                <Button size="lg" className="w-full md:w-auto gap-2 bg-[#38bdf8] hover:bg-[#38bdf8]/90" asChild>
                  <a href="mailto:danilocnt@gmail.com">
                    <Mail className="h-5 w-5" />
                    danilocnt@gmail.com
                  </a>
                </Button>
                {/* Social buttons container - side by side on mobile, inline on desktop */}
                <div className="flex gap-3 md:gap-4 w-full md:w-auto">
                  <Button size="lg" variant="outline" className="flex-1 md:flex-none gap-2 bg-transparent" asChild>
                    <a href="https://www.linkedin.com/in/danilocnt/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 md:flex-none gap-2 bg-transparent" asChild>
                    <a href="https://www.instagram.com/danilocnt" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                      <span className="hidden sm:inline">Instagram</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <Image
                  src="/images/danilocnt.png"
                  alt="Danilo Conti"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-border py-14" style={{ backgroundColor: "#1A1A2E" }}>
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
              {trans.about.title}
            </h2>
            <p className="mb-6 text-center text-lg text-muted-foreground">{trans.about.intro}</p>
            <div className="mb-8 flex justify-center">
              <Button variant="secondary" onClick={() => setTrajectoryModalOpen(true)}>
                {trans.about.ctaButton}
              </Button>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardHeader className="p-6">
                  <TrendingUp className="mb-3 h-10 w-10 text-primary" />
                  <CardTitle className="font-display mb-2 text-foreground">
                    {trans.about.cards.dataDriven.title}
                  </CardTitle>
                  <p className="text-sm text-card-foreground">{trans.about.cards.dataDriven.description}</p>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardHeader className="p-6">
                  <Globe className="mb-3 h-10 w-10 text-primary" />
                  <CardTitle className="font-display mb-2 text-foreground">
                    {trans.about.cards.international.title}
                  </CardTitle>
                  <p className="text-sm text-card-foreground">{trans.about.cards.international.description}</p>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardHeader className="p-6">
                  <Briefcase className="mb-3 h-10 w-10 text-primary" />
                  <CardTitle className="font-display mb-2 text-foreground">{trans.about.cards.brands.title}</CardTitle>
                  <p className="text-sm text-card-foreground">{trans.about.cards.brands.description}</p>
                </CardHeader>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardHeader className="p-6">
                  <Users className="mb-3 h-10 w-10 text-primary" />
                  <CardTitle className="font-display mb-2 text-foreground">
                    {trans.about.cards.management.title}
                  </CardTitle>
                  <p className="text-sm text-card-foreground">{trans.about.cards.management.description}</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="border-b border-border py-14">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
              {trans.expertise.title}
            </h2>
            <div className="mb-12 grid gap-5 md:grid-cols-2">
              {expertiseAreas.map((area, idx) => {
                const Icon = area.icon
                return (
                  <Card
                    key={idx}
                    className="cursor-pointer border-2 transition-all hover:scale-[1.02] hover:border-primary hover:shadow-lg"
                    onClick={() => setSelectedExpertise(area)}
                  >
                    <CardHeader className="p-6">
                      <div className="flex items-start gap-3">
                        <Icon className="h-8 w-8 flex-shrink-0 text-primary" />
                        <div>
                          <CardTitle className="font-display mb-2 text-lg text-foreground">
                            {area.title[language]}
                          </CardTitle>
                          <p className="text-sm text-card-foreground">{area.description[language]}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            <div className="mt-12">
              <h3 className="font-display mb-6 text-center text-2xl font-bold text-foreground md:text-3xl">
                {trans.howIWork.title}
              </h3>
              <div className="grid gap-5 md:grid-cols-3">
                <Card className="border-2 transition-shadow hover:shadow-lg">
                  <CardHeader className="p-6">
                    <Target className="mb-3 h-10 w-10 text-primary" />
                    <CardTitle className="font-display mb-2 text-foreground">
                      {trans.howIWork.cards.strategy.title}
                    </CardTitle>
                    <p className="mb-4 text-sm text-card-foreground">{trans.howIWork.cards.strategy.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">
                        {trans.howIWork.cards.strategy.stack}
                      </p>
                      <p className="text-xs text-card-foreground">{trans.howIWork.cards.strategy.tools}</p>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-2 transition-shadow hover:shadow-lg">
                  <CardHeader className="p-6">
                    <Palette className="mb-3 h-10 w-10 text-primary" />
                    <CardTitle className="font-display mb-2 text-foreground">
                      {trans.howIWork.cards.execution.title}
                    </CardTitle>
                    <p className="mb-4 text-sm text-card-foreground">{trans.howIWork.cards.execution.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">
                        {trans.howIWork.cards.execution.stack}
                      </p>
                      <p className="text-xs text-card-foreground">{trans.howIWork.cards.execution.tools}</p>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-2 transition-shadow hover:shadow-lg">
                  <CardHeader className="p-6">
                    <Users className="mb-3 h-10 w-10 text-primary" />
                    <CardTitle className="font-display mb-2 text-foreground">
                      {trans.howIWork.cards.management.title}
                    </CardTitle>
                    <p className="mb-4 text-sm text-card-foreground">{trans.howIWork.cards.management.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">
                        {trans.howIWork.cards.management.stack}
                      </p>
                      <p className="text-xs text-card-foreground">{trans.howIWork.cards.management.tools}</p>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-border py-14" style={{ backgroundColor: "#162950ff" }}>
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
              {trans.projects.title}
            </h2>

            {/* Filter Chips */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <Badge
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-5 md:grid-cols-2">
              {filteredProjects.map((project) => {
                const Icon = project.icon
                return (
                  <Card
                    key={project.id}
                    className="group cursor-pointer border-2 transition-all hover:scale-[1.02] hover:border-primary hover:shadow-xl"
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardHeader className="p-6">
                      <Icon className="mb-3 h-10 w-10 text-primary" />
                      <CardTitle className="font-display mb-2 text-xl text-foreground">
                        {project.title[language]}
                      </CardTitle>
                      <Badge variant="secondary" className="mb-3 w-fit">
                        {project.category}
                      </Badge>
                      <p className="text-sm text-card-foreground">{project.description[language]}</p>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="relative rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-10">
              <blockquote className="font-display text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
                {trans.quote.text}
              </blockquote>
              <footer className="mt-6">
                <cite className="text-lg font-medium text-primary">— {trans.quote.author}</cite>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="container mx-auto px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground text-center">{trans.footer.rights}</p>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" asChild>
                <a href="mailto:danilocnt@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  {trans.footer.contact}
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <a href="https://www.linkedin.com/in/danilocnt/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <a href="https://www.instagram.com/danilocnt" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent
          className="max-h-[85vh] max-w-4xl overflow-y-auto backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.88)",
          }}
        >
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-foreground">
                  {selectedProject.title[language]}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div>
                  <h3 className="font-display mb-2 text-lg font-semibold text-foreground">{trans.projects.context}</h3>
                  <p className="text-muted-foreground">{selectedProject.context[language]}</p>
                </div>

                <div>
                  <h3 className="font-display mb-2 text-lg font-semibold text-foreground">{trans.projects.actions}</h3>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {selectedProject.actions[language].map((action, idx) => (
                      <li key={idx}>{action}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display mb-2 text-lg font-semibold text-foreground">{trans.projects.delivery}</h3>
                  <p className="text-muted-foreground">{selectedProject.delivery[language]}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.hashtags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {selectedProject.isUnlocked && selectedProject.link ? (
                  <Button asChild className="w-full">
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {trans.projects.accessProject}
                    </a>
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button disabled className="w-full">
                      <Lock className="mr-2 h-4 w-4" />
                      {trans.projects.protectedProject}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">{trans.projects.contactInfo}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedExpertise} onOpenChange={() => setSelectedExpertise(null)}>
        <DialogContent
          className="max-h-[85vh] max-w-4xl overflow-y-auto backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.88)",
          }}
        >
          {selectedExpertise && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-foreground">
                  {selectedExpertise.title[language]}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <p className="text-lg text-muted-foreground">{selectedExpertise.description[language]}</p>

                <div>
                  <h3 className="font-display mb-3 text-lg font-semibold text-foreground">
                    {selectedExpertise.details[language].subtitle}
                  </h3>
                  <ul className="space-y-2">
                    {selectedExpertise.details[language].items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={trajectoryModalOpen} onOpenChange={setTrajectoryModalOpen}>
        <DialogContent
          className="max-h-[85vh] max-w-5xl overflow-y-auto backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.88)",
          }}
        >
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">{trans.menu.trajectory}</DialogTitle>
          </DialogHeader>
          <div className="space-y-8 py-4">
            {/* Base Técnica */}
            <div>
              <h3 className="font-display mb-6 text-xl font-bold text-foreground">{trans.formation.title}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="p-6">
                    <GraduationCap className="mb-3 h-10 w-10 text-primary" />
                    <CardTitle className="font-display mb-1 text-foreground">
                      {trans.formation.cards.masters.title}
                    </CardTitle>
                    <p className="mb-2 text-sm text-muted-foreground">{trans.formation.cards.masters.institution}</p>
                    <p className="text-sm text-card-foreground">{trans.formation.cards.masters.description}</p>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="p-6">
                    <TrendingUp className="mb-3 h-10 w-10 text-primary" />
                    <CardTitle className="font-display mb-1 text-foreground">
                      {trans.formation.cards.growth.title}
                    </CardTitle>
                    <p className="mb-2 text-sm text-muted-foreground">{trans.formation.cards.growth.institution}</p>
                    <p className="text-sm text-card-foreground">{trans.formation.cards.growth.description}</p>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="p-6">
                    <Palette className="mb-3 h-10 w-10 text-primary" />
                    <CardTitle className="font-display mb-1 text-foreground">
                      {trans.formation.cards.bachelor.title}
                    </CardTitle>
                    <p className="mb-2 text-sm text-muted-foreground">{trans.formation.cards.bachelor.institution}</p>
                    <p className="text-sm text-card-foreground">{trans.formation.cards.bachelor.description}</p>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="p-6">
                    <Globe className="mb-3 h-10 w-10 text-primary" />
                    <CardTitle className="font-display mb-1 text-foreground">
                      {trans.formation.cards.global.title}
                    </CardTitle>
                    <p className="mb-2 text-sm text-muted-foreground">{trans.formation.cards.global.institution}</p>
                    <p className="text-sm text-card-foreground">{trans.formation.cards.global.description}</p>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Trajetória e Contexto */}
            <div style={{ backgroundColor: "#1A1A2E" }} className="rounded-lg p-6">
              <h3 className="font-display mb-6 text-xl font-bold text-foreground">{trans.experience.title}</h3>

              {/* Experiência Relevante */}
              <div className="mb-8">
                <h4 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground">
                  {trans.experience.subtitle}
                </h4>
                <div className="space-y-3">
                  <div className="rounded-lg border border-border bg-card/50 p-4">
                    <h5 className="font-display mb-1 font-semibold text-foreground">
                      {trans.experience.companies.mutualcore.title}
                    </h5>
                    <p className="text-sm text-card-foreground">{trans.experience.companies.mutualcore.description}</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card/50 p-4">
                    <h5 className="font-display mb-1 font-semibold text-foreground">
                      {trans.experience.companies.blip.title}
                    </h5>
                    <p className="text-sm text-card-foreground">{trans.experience.companies.blip.description}</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card/50 p-4">
                    <h5 className="font-display mb-1 font-semibold text-foreground">
                      {trans.experience.companies.bradesco.title}
                    </h5>
                    <p className="text-sm text-card-foreground">{trans.experience.companies.bradesco.description}</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card/50 p-4">
                    <h5 className="font-display mb-1 font-semibold text-foreground">
                      {trans.experience.companies.sebrae.title}
                    </h5>
                    <p className="text-sm text-card-foreground">{trans.experience.companies.sebrae.description}</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card/50 p-4">
                    <h5 className="font-display mb-1 font-semibold text-foreground">
                      {trans.experience.companies.startups.title}
                    </h5>
                    <p className="text-sm text-card-foreground">{trans.experience.companies.startups.description}</p>
                  </div>
                </div>
              </div>

              {/* Ambientes de Atuação */}
              <div>
                <h4 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground">
                  {trans.experience.environments.subtitle}
                </h4>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  <Badge variant="secondary" className="justify-center py-2">
                    {trans.experience.environments.tech}
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    {trans.experience.environments.corporate}
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    {trans.experience.environments.innovation}
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    {trans.experience.environments.health}
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    {trans.experience.environments.sustainability}
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2">
                    {trans.experience.environments.smb}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
