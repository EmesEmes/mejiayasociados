import { Briefcase, Shield, Scale, Users, FileText, Globe } from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'corporativo',
    title: 'Derecho Corporativo',
    shortDescription: 'Asesoría integral para empresas, constitución de compañías, fusiones y adquisiciones.',
    fullDescription: 'En un entorno empresarial dinámico, ofrecemos soluciones legales estratégicas que impulsan el crecimiento de su negocio. Desde la constitución de su empresa hasta complejas operaciones de fusión y adquisición, nuestro equipo garantiza seguridad jurídica en cada paso.',
    icon: Briefcase,
    features: [
      'Constitución y estructuración de compañías',
      'Fusiones, adquisiciones y escisiones',
      'Gobierno corporativo y cumplimiento (Compliance)',
      'Disolución y liquidación de empresas'
    ],
    benefits: [
      'Protección de activos empresariales',
      'Optimización de estructuras societarias',
      'Prevención de conflictos entre socios'
    ]
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    shortDescription: 'Defensa técnica especializada en procesos penales, garantizando el debido proceso.',
    fullDescription: 'Protegemos sus derechos fundamentales con una defensa técnica rigurosa y estratégica. Nos especializamos en delitos económicos, responsabilidad penal corporativa y defensa en todas las etapas procesales.',
    icon: Shield,
    features: [
      'Defensa en etapa de investigación previa',
      'Representación en audiencias de juicio',
      'Delitos de cuello blanco y económicos',
      'Recursos de casación y revisión'
    ],
    benefits: [
      'Estrategia de defensa personalizada',
      'Acompañamiento 24/7 en emergencias',
      'Confidencialidad absoluta'
    ]
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    shortDescription: 'Resolución de conflictos civiles, contratos, herencias y responsabilidad civil.',
    fullDescription: 'Gestionamos sus relaciones patrimoniales y personales con eficacia. Ya sea redacción de contratos complejos, reclamaciones por daños o procesos sucesorios, velamos por sus intereses.',
    icon: Scale,
    features: [
      'Redacción y revisión de contratos',
      'Responsabilidad civil contractual y extracontractual',
      'Posesiones efectivas y testamentos',
      'Cobro de carteras vencidas'
    ],
    benefits: [
      'Seguridad en transacciones patrimoniales',
      'Resolución ágil de disputas',
      'Asesoría preventiva'
    ]
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    shortDescription: 'Gestión de relaciones laborales, contratos y defensa ante autoridades de trabajo.',
    fullDescription: 'Buscamos el equilibrio en las relaciones obrero-patronales. Asesoramos tanto a empleadores como a trabajadores en el cumplimiento de la normativa vigente para evitar contingencias futuras.',
    icon: Users,
    features: [
      'Auditorías laborales',
      'Elaboración de reglamentos internos',
      'Defensa en sumarios administrativos',
      'Negociación colectiva'
    ],
    benefits: [
      'Reducción de riesgos de litigio',
      'Clima laboral estable y legal',
      'Optimización de costos laborales'
    ]
  },
  {
    id: 'administrativo',
    title: 'Derecho Administrativo',
    shortDescription: 'Representación ante entidades públicas y procesos contenciosos administrativos.',
    fullDescription: 'Navegar la burocracia estatal requiere conocimiento experto. Le representamos ante los organismos de control y defendemos sus derechos frente a actos administrativos injustos.',
    icon: FileText,
    features: [
      'Recursos administrativos',
      'Contratación pública',
      'Juicios contencioso-administrativos',
      'Sanciones y multas'
    ],
    benefits: [
      'Defensa efectiva ante el Estado',
      'Seguridad en licitaciones públicas',
      'Impugnación de actos ilegítimos'
    ]
  },
  {
    id: 'comercio-exterior',
    title: 'Comercio Exterior',
    shortDescription: 'Asesoría en aduanas, importaciones, exportaciones y derecho internacional.',
    fullDescription: 'Facilitamos su expansión global. Asesoramos en la normativa aduanera y tratados internacionales para que sus operaciones de importación y exportación sean eficientes y legales.',
    icon: Globe,
    features: [
      'Clasificación arancelaria',
      'Regímenes aduaneros especiales',
      'Contratos de distribución internacional',
      'Defensa ante el SENAE'
    ],
    benefits: [
      'Eficiencia en logística internacional',
      'Aprovechamiento de tratados comerciales',
      'Prevención de delitos aduaneros'
    ]
  },
];