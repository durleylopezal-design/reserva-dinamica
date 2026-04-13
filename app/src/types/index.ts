// Tipos para el menú de navegación
export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path?: string;
  children?: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
  path: string;
  description?: string;
}

// Tipos para los productos académicos
export type CategoriaType = 
  | 'articulos'
  | 'trabajos-grado'
  | 'informes-tecnicos'
  | 'ponencias'
  | 'libros'
  | 'productos-derivados'
  | 'desarrollo-software';

export interface ProductoAcademico {
  id: string;
  categoria: CategoriaType;
  subcategoria: string;
  titulo: string;
  autores: string[];
  fechaPublicacion: string;
  programa: string;
  resumen: string;
  palabrasClave: string[];
  archivoUrl?: string;
  estado: 'borrador' | 'revision' | 'aprobado' | 'publicado';
  fechaRegistro: string;
  // Campos específicos por categoría
  metadata?: Record<string, any>;
}

// Campos específicos para artículos
export interface ArticuloMetadata {
  revista: string;
  issn: string;
  volumen: string;
  numero: string;
  paginas: string;
  doi: string;
  indexacion: ('scopus' | 'wos' | 'scielo' | 'otros')[];
  tipoArticulo: 'original' | 'revision' | 'narrativa' | 'sistematica' | 'comunicacion' | 'carta' | 'caso' | 'metodologico' | 'teorico' | 'editorial';
  enfoque: 'cualitativo' | 'cuantitativo' | 'mixto' | 'metaanalisis';
}

// Campos específicos para trabajos de grado
export interface TrabajoGradoMetadata {
  modalidad: 'investigacion-dirigida' | 'practica-investigativa' | 'monografia' | 'practica-profesional' | 'emprendimiento' | 'proyecto-aplicacion';
  director: string;
  codirector?: string;
  nota?: string;
  periodoAcademico: string;
  fechaGrado?: string;
}

// Campos específicos para informes técnicos
export interface InformeTecnicoMetadata {
  tipoInforme: 'diagnostico' | 'requerimientos' | 'diseno' | 'pruebas' | 'seguridad' | 'factibilidad' | 'avance' | 'implementacion' | 'cierre' | 'manual-tecnico' | 'manual-usuario' | 'mantenimiento' | 'incidencias' | 'ejecutivo' | 'pericial';
  cliente?: string;
  fechaInicio: string;
  fechaFin?: string;
  estadoProyecto: 'planificacion' | 'ejecucion' | 'finalizado';
}

// Campos específicos para ponencias
export interface PonenciaMetadata {
  evento: string;
  tipoEvento: 'nacional' | 'internacional';
  tipoPonencia: 'oral' | 'poster';
  lugar: string;
  fechaEvento: string;
  organizador: string;
}

// Campos específicos para libros
export interface LibroMetadata {
  editorial: string;
  isbn: string;
  anoPublicacion: string;
  numeroPaginas?: string;
  tipo: 'libro-completo' | 'capitulo';
  libroTitulo?: string; // Para capítulos
  editores?: string; // Para capítulos
}

// Campos específicos para desarrollo de software
export interface SoftwareMetadata {
  tipoSoftware: 'web' | 'movil' | 'escritorio' | 'embebido';
  especialidad: 'sistema-informacion' | 'ia' | 'ciberseguridad' | 'blockchain' | 'videojuegos';
  objetivo: 'prototipo' | 'algoritmo' | 'middleware';
  modeloAcceso: 'open-source' | 'propietario';
  lenguajes: string[];
  frameworks: string[];
  repositorio?: string;
  licencia?: string;
  version?: string;
}

// Estado de la aplicación
export interface AppState {
  sidebarCollapsed: boolean;
  currentPath: string;
  productos: ProductoAcademico[];
  usuario?: Usuario;
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: 'estudiante' | 'docente' | 'administrador';
  programa: string;
  avatar?: string;
}

// Filtros para búsqueda
export interface FiltrosBusqueda {
  categoria?: CategoriaType;
  estado?: ProductoAcademico['estado'];
  fechaDesde?: string;
  fechaHasta?: string;
  autor?: string;
  programa?: string;
  busqueda?: string;
}
