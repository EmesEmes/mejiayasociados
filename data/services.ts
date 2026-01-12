import { Shield, Users, FileText, Scale, Building, Lightbulb, PenTool, BookOpen, Landmark } from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'penal',
    title: 'Derecho Penal',
    shortDescription: 'Defensa técnica rigurosa y estratégica en delitos y procesos penales complejos.',
    fullDescription: 'Constituye uno de los ejes centrales de nuestro estudio. Nos especializamos en el análisis profundo de la tipicidad, el dolo, la culpa y la defensa técnica en todas las etapas procesales. Construimos teorías del caso sólidas orientadas a la protección de la libertad y el debido proceso.',
    icon: Shield,
    highlight: true,
    features: [
      'Defensa técnica en indagación previa e instrucción fiscal',
      'Litigio en audiencias de juicio y apelación',
      'Delitos económicos y contra la administración pública',
      'Recursos de casación y revisión'
    ],
    benefits: [
      'Estrategia de defensa personalizada',
      'Protección de derechos fundamentales',
      'Manejo técnico de la prueba'
    ]
  },
  {
    id: 'constitucional',
    title: 'Derecho Constitucional',
    shortDescription: 'Tutela de derechos fundamentales y control de actos del poder público.',
    fullDescription: 'Nuestra práctica constitucional es transversal a todo conflicto jurídico. Nos enfocamos en el control de legalidad, acciones de protección y garantías jurisdiccionales para asegurar que los actos públicos y judiciales respeten los derechos consagrados en la Constitución.',
    icon: BookOpen,
    highlight: true,
    features: [
      'Acciones de Protección y Habeas Corpus',
      'Acciones Extraordinarias de Protección',
      'Control constitucional de actos administrativos',
      'Defensa de derechos humanos'
    ],
    benefits: [
      'Restitución de derechos vulnerados',
      'Freno a la arbitrariedad estatal',
      'Análisis jurídico de alto nivel'
    ]
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    shortDescription: 'Gestión de relaciones laborales y defensa ante autoridades.',
    fullDescription: 'Asesoramos en la gestión preventiva y resolución de conflictos laborales, asegurando el cumplimiento normativo y la estabilidad en las relaciones obrero-patronales.',
    icon: Users,
    features: [
      'Defensa en litigios laborales',
      'Elaboración de contratos y reglamentos',
      'Despidos intempestivos y liquidaciones',
      'Negociación colectiva'
    ],
    benefits: [
      'Prevención de contingencias legales',
      'Defensa de derechos laborales',
      'Seguridad jurídica en la contratación'
    ]
  },
  {
    id: 'notarial',
    title: 'Derecho Notarial',
    shortDescription: 'Seguridad y fe pública en actos, contratos y declaraciones.',
    fullDescription: 'Brindamos acompañamiento en la formalización de actos jurídicos, garantizando que cumplan con todos los requisitos legales para su plena validez y eficacia probatoria.',
    icon: FileText,
    features: [
      'Legalización de documentos',
      'Declaraciones juramentadas',
      'Poderes y mandatos',
      'Reconocimiento de firmas'
    ],
    benefits: [
      'Certeza jurídica en documentos',
      'Agilidad en trámites',
      'Asesoría previa a la firma'
    ]
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    shortDescription: 'Regulación de relaciones personales, patrimoniales y sucesorias.',
    fullDescription: 'Manejamos conflictos relacionados con bienes, obligaciones y sucesiones, buscando siempre la protección del patrimonio y los intereses de nuestros clientes.',
    icon: Scale,
    features: [
      'Juicios ordinarios y ejecutivos',
      'Herencias y posesiones efectivas',
      'Prescripciones adquisitivas',
      'Daños y perjuicios'
    ],
    benefits: [
      'Protección del patrimonio',
      'Resolución efectiva de disputas',
      'Claridad en derechos sucesorios'
    ]
  },
  {
    id: 'societario',
    title: 'Derecho Societario',
    shortDescription: 'Estructuración, constitución y vida jurídica de empresas.',
    fullDescription: 'Acompañamos a las empresas desde su nacimiento hasta su liquidación, asegurando un gobierno corporativo sano y el cumplimiento de obligaciones ante los entes de control.',
    icon: Building,
    features: [
      'Constitución de compañías SAS y limitadas',
      'Aumentos de capital y reforma de estatutos',
      'Acuerdos de accionistas',
      'Fusiones y escisiones'
    ],
    benefits: [
      'Estructuras societarias eficientes',
      'Cumplimiento regulatorio',
      'Prevención de conflictos entre socios'
    ]
  },
  {
    id: 'propiedad-intelectual',
    title: 'Propiedad Intelectual',
    shortDescription: 'Protección de marcas, patentes y derechos de autor.',
    fullDescription: 'Protegemos los activos intangibles de nuestros clientes, asegurando la exclusividad de sus creaciones, marcas e innovaciones en el mercado.',
    icon: Lightbulb,
    features: [
      'Registro de marcas y nombres comerciales',
      'Defensa ante oposiciones',
      'Derechos de autor',
      'Licencias de uso'
    ],
    benefits: [
      'Protección de la identidad comercial',
      'Valorización de activos intangibles',
      'Seguridad legal sobre creaciones'
    ]
  },
  {
    id: 'contractual',
    title: 'Derecho Contractual',
    shortDescription: 'Elaboración y análisis de acuerdos para blindar sus intereses.',
    fullDescription: 'Redactamos y analizamos contratos civiles y mercantiles con un enfoque preventivo, minimizando riesgos y asegurando el cumplimiento de las obligaciones pactadas.',
    icon: PenTool,
    features: [
      'Contratos civiles y mercantiles',
      'Cláusulas de confidencialidad',
      'Resolución de incumplimientos contractuales',
      'Negociación de términos'
    ],
    benefits: [
      'Relaciones comerciales claras',
      'Reducción de riesgos legales',
      'Ejecutabilidad de acuerdos'
    ]
  },
  {
    id: 'administrativo',
    title: 'Derecho Administrativo',
    shortDescription: 'Defensa del ciudadano frente a la administración pública.',
    fullDescription: 'Representamos a nuestros clientes en sus relaciones con el Estado, impugnando actos administrativos injustos y defendiendo sus derechos en sede administrativa y judicial.',
    icon: Landmark,
    features: [
      'Recursos administrativos y de apelación',
      'Juicios contencioso-administrativos',
      'Defensa en sumarios administrativos',
      'Contratación pública'
    ],
    benefits: [
      'Control de legalidad de actos públicos',
      'Defensa ante sanciones',
      'Protección frente al poder estatal'
    ]
  }
];