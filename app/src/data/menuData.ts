import type { MenuItem } from '@/types';

export const menuData: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    path: '/',
  },
  {
    id: 'articulos',
    label: 'A. Artículos',
    icon: 'FileText',
    children: [
      {
        id: 'articulos-fuente',
        label: '1. Según Fuente de Información',
        path: '/articulos/fuente',
        description: 'Artículos originales, de revisión, narrativos y sistemáticos',
      },
      {
        id: 'articulos-objetivo',
        label: '2. Según Objetivo Específico',
        path: '/articulos/objetivo',
        description: 'Comunicaciones cortas, cartas, reportes de caso, metodológicos',
      },
      {
        id: 'articulos-enfoque',
        label: '3. Según Enfoque Metodológico',
        path: '/articulos/enfoque',
        description: 'Cualitativos, cuantitativos, mixtos y metaanálisis',
      },
    ],
  },
  {
    id: 'trabajos-grado',
    label: 'B. Trabajos de Grado',
    icon: 'GraduationCap',
    children: [
      {
        id: 'trabajos-investigacion',
        label: '1. Modalidades de Investigación',
        path: '/trabajos-grado/investigacion',
        description: 'Investigación dirigida, práctica investigativa y monografía',
      },
      {
        id: 'trabajos-proyeccion',
        label: '2. Proyección Social y Profesional',
        path: '/trabajos-grado/proyeccion',
        description: 'Práctica profesional, emprendimiento y proyecto de aplicación',
      },
    ],
  },
  {
    id: 'informes-tecnicos',
    label: 'C. Informes Técnicos',
    icon: 'ClipboardList',
    children: [
      {
        id: 'informes-proposito',
        label: '1. Según Propósito Operativo',
        path: '/informes-tecnicos/proposito',
        description: 'Diagnóstico, requerimientos, diseño, pruebas y seguridad',
      },
      {
        id: 'informes-ciclo',
        label: '2. Según Ciclo de Vida',
        path: '/informes-tecnicos/ciclo',
        description: 'Factibilidad, avance, implementación y cierre',
      },
      {
        id: 'informes-naturaleza',
        label: '3. Según Naturaleza Técnica',
        path: '/informes-tecnicos/naturaleza',
        description: 'Manuales técnicos, de usuario, mantenimiento e incidencias',
      },
      {
        id: 'informes-formalidad',
        label: '4. Según Formalidad',
        path: '/informes-tecnicos/formalidad',
        description: 'Informes ejecutivos y periciales',
      },
    ],
  },
  {
    id: 'ponencias',
    label: 'D. Ponencias',
    icon: 'Mic',
    path: '/ponencias',
  },
  {
    id: 'libros',
    label: 'E. Libros y Capítulos',
    icon: 'BookOpen',
    path: '/libros',
  },
  {
    id: 'productos-derivados',
    label: 'F. Productos Derivados',
    icon: 'Package',
    path: '/productos-derivados',
  },
  {
    id: 'desarrollo-software',
    label: 'G. Desarrollo de Software',
    icon: 'Code',
    children: [
      {
        id: 'software-entorno',
        label: '1. Según Entorno de Despliegue',
        path: '/desarrollo-software/entorno',
        description: 'Web, móvil, escritorio y embebido',
      },
      {
        id: 'software-especialidad',
        label: '2. Según Aplicación Técnica',
        path: '/desarrollo-software/especialidad',
        description: 'Sistemas de información, IA, ciberseguridad, blockchain, videojuegos',
      },
      {
        id: 'software-objetivo',
        label: '3. Según Objetivo de Investigación',
        path: '/desarrollo-software/objetivo',
        description: 'Prototipos, algoritmos de optimización y middleware',
      },
      {
        id: 'software-acceso',
        label: '4. Según Modelo de Acceso',
        path: '/desarrollo-software/acceso',
        description: 'Código abierto y software propietario',
      },
    ],
  },
];

// Subcategorías detalladas para formularios
export const subcategoriasDetalle: Record<string, { value: string; label: string; description?: string }[]> = {
  'articulos-fuente': [
    { value: 'originales', label: 'Artículos Originales (Primarios)', description: 'Investigaciones originales con datos primarios' },
    { value: 'revision', label: 'Artículos de Revisión (Secundarios)', description: 'Revisión de literatura existente' },
    { value: 'narrativa', label: 'Revisión Narrativa', description: 'Síntesis descriptiva de investigaciones' },
    { value: 'sistematica', label: 'Revisión Sistemática', description: 'Revisión metodológica rigurosa' },
  ],
  'articulos-objetivo': [
    { value: 'comunicacion-corta', label: 'Comunicaciones Cortas', description: 'Notas técnicas breves' },
    { value: 'carta-editor', label: 'Cartas al Editor', description: 'Comentarios o correcciones' },
    { value: 'reporte-caso', label: 'Reportes de Caso', description: 'Estudios de caso clínicos o técnicos' },
    { value: 'metodologico', label: 'Artículos Metodológicos', description: 'Desarrollo de métodos o técnicas' },
    { value: 'teorico', label: 'Artículos Teóricos', description: 'Desarrollo de marcos teóricos' },
    { value: 'editorial', label: 'Editoriales', description: 'Opiniones de editores' },
  ],
  'articulos-enfoque': [
    { value: 'cualitativo', label: 'Cualitativos', description: 'Enfoque cualitativo de investigación' },
    { value: 'cuantitativo', label: 'Cuantitativos', description: 'Enfoque cuantitativo de investigación' },
    { value: 'mixto', label: 'Mixtos', description: 'Enfoque mixto de investigación' },
    { value: 'metaanalisis', label: 'Metaanálisis', description: 'Análisis estadístico de múltiples estudios' },
  ],
  'trabajos-investigacion': [
    { value: 'investigacion-dirigida', label: 'Investigación Dirigida', description: 'Proyecto bajo tutoría de docente investigador' },
    { value: 'practica-investigativa', label: 'Práctica Investigativa', description: 'Vinculación a proyecto institucional' },
    { value: 'monografia', label: 'Monografía', description: 'Análisis crítico y teórico' },
  ],
  'trabajos-proyeccion': [
    { value: 'practica-profesional', label: 'Práctica Profesional', description: 'Desempeño laboral en organización externa' },
    { value: 'emprendimiento', label: 'Emprendimiento / Plan de Negocio', description: 'Propuesta de spin-off o start-up' },
    { value: 'proyecto-aplicacion', label: 'Proyecto de Aplicación', description: 'Solución técnica para problema real' },
  ],
  'informes-proposito': [
    { value: 'diagnostico', label: 'Informe de Diagnóstico', description: 'Estado actual de sistema o infraestructura' },
    { value: 'requerimientos', label: 'Informe de Requerimientos', description: 'Necesidades funcionales y no funcionales' },
    { value: 'diseno', label: 'Informe de Diseño (Arquitectura)', description: 'Estructura técnica y componentes' },
    { value: 'pruebas', label: 'Informe de Pruebas', description: 'Resultados de testing y correcciones' },
    { value: 'seguridad', label: 'Informe de Seguridad / Auditoría', description: 'Vulnerabilidades y cumplimiento' },
  ],
  'informes-ciclo': [
    { value: 'factibilidad', label: 'Estudio de Factibilidad', description: 'Viabilidad técnica y financiera' },
    { value: 'avance', label: 'Informe de Avance', description: 'Estado de tareas y cronogramas' },
    { value: 'implementacion', label: 'Informe de Implementación', description: 'Proceso de despliegue' },
    { value: 'cierre', label: 'Informe de Cierre', description: 'Balance final y lecciones aprendidas' },
  ],
  'informes-naturaleza': [
    { value: 'manual-tecnico', label: 'Manual Técnico', description: 'Para desarrolladores y administradores' },
    { value: 'manual-usuario', label: 'Manual de Usuario', description: 'Guía operativa para usuarios finales' },
    { value: 'mantenimiento', label: 'Informe de Mantenimiento', description: 'Cambios, parches y optimizaciones' },
    { value: 'incidencias', label: 'Informe de Incidencias', description: 'Análisis de fallas críticas' },
  ],
  'informes-formalidad': [
    { value: 'ejecutivo', label: 'Informe Ejecutivo', description: 'Resumen de alto nivel para decisiones' },
    { value: 'pericial', label: 'Informe Pericial', description: 'Documento con validez legal' },
  ],
  'software-entorno': [
    { value: 'web', label: 'Aplicaciones Web', description: 'Desarrollos basados en navegadores' },
    { value: 'movil', label: 'Aplicaciones Móviles', description: 'Software nativo o híbrido iOS/Android' },
    { value: 'escritorio', label: 'Aplicaciones de Escritorio', description: 'Software instalado localmente' },
    { value: 'embebido', label: 'Software Embebido', description: 'Microcontroladores y sistemas IoT' },
  ],
  'software-especialidad': [
    { value: 'sistema-informacion', label: 'Sistemas de Información', description: 'ERPs, CRMs a medida' },
    { value: 'ia', label: 'Software de Inteligencia Artificial', description: 'ML, visión computacional, NLP' },
    { value: 'ciberseguridad', label: 'Herramientas de Ciberseguridad', description: 'Pentesting, cifrado, gestión de identidades' },
    { value: 'blockchain', label: 'Soluciones Blockchain', description: 'Contratos inteligentes, trazabilidad' },
    { value: 'videojuegos', label: 'Videojuegos y Entornos Virtuales', description: 'Simuladores, AR/VR' },
  ],
  'software-objetivo': [
    { value: 'prototipo', label: 'Prototipo Funcional', description: 'Software mínimo viable' },
    { value: 'algoritmo', label: 'Algoritmo de Optimización', description: 'Eficiencia en resolución de problemas' },
    { value: 'middleware', label: 'Software de Middleware', description: 'Conexión entre sistemas' },
  ],
  'software-acceso': [
    { value: 'open-source', label: 'Software de Código Abierto', description: 'Licencias libres para la comunidad' },
    { value: 'propietario', label: 'Software Propietario', description: 'Soluciones bajo plan de negocio' },
  ],
};

// Programas de la universidad
export const programas = [
  { value: 'ingenieria-sistemas', label: 'Ingeniería de Sistemas' },
  { value: 'ingenieria-software', label: 'Ingeniería de Software' },
  { value: 'ingenieria-telecomunicaciones', label: 'Ingeniería de Telecomunicaciones' },
  { value: 'ingenieria-industrial', label: 'Ingeniería Industrial' },
  { value: 'ingenieria-civil', label: 'Ingeniería Civil' },
  { value: 'ingenieria-electronica', label: 'Ingeniería Electrónica' },
  { value: 'administracion-empresas', label: 'Administración de Empresas' },
  { value: 'contaduria', label: 'Contaduría Pública' },
  { value: 'derecho', label: 'Derecho' },
  { value: 'psicologia', label: 'Psicología' },
  { value: 'comunicacion-social', label: 'Comunicación Social' },
  { value: 'diseno-grafico', label: 'Diseño Gráfico' },
  { value: 'medicina', label: 'Medicina' },
  { value: 'enfermeria', label: 'Enfermería' },
  { value: 'otros', label: 'Otros' },
];

// Estados de productos
export const estadosProducto = [
  { value: 'borrador', label: 'Borrador', color: 'bg-gray-400' },
  { value: 'revision', label: 'En Revisión', color: 'bg-yellow-500' },
  { value: 'aprobado', label: 'Aprobado', color: 'bg-blue-500' },
  { value: 'publicado', label: 'Publicado', color: 'bg-green-500' },
];

// Indexaciones para artículos
export const indexaciones = [
  { value: 'scopus', label: 'Scopus' },
  { value: 'wos', label: 'Web of Science' },
  { value: 'scielo', label: 'SciELO' },
  { value: 'redalyc', label: 'Redalyc' },
  { value: 'dialnet', label: 'Dialnet' },
  { value: 'google-scholar', label: 'Google Scholar' },
  { value: 'otros', label: 'Otros' },
];

// Lenguajes de programación
export const lenguajesProgramacion = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'cpp', label: 'C++' },
  { value: 'c', label: 'C' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'dart', label: 'Dart' },
  { value: 'sql', label: 'SQL' },
  { value: 'r', label: 'R' },
  { value: 'matlab', label: 'MATLAB' },
  { value: 'otros', label: 'Otros' },
];

// Frameworks
export const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'django', label: 'Django' },
  { value: 'flask', label: 'Flask' },
  { value: 'fastapi', label: 'FastAPI' },
  { value: 'spring', label: 'Spring Boot' },
  { value: 'laravel', label: 'Laravel' },
  { value: 'flutter', label: 'Flutter' },
  { value: 'react-native', label: 'React Native' },
  { value: 'tensorflow', label: 'TensorFlow' },
  { value: 'pytorch', label: 'PyTorch' },
  { value: 'otros', label: 'Otros' },
];
