import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Save,
  ArrowLeft,
  Upload,
  X,
  Plus,
  FileText,
  GraduationCap,
  ClipboardList,
  Mic,
  BookOpen,
  Code,
  Package,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
  subcategoriasDetalle,
  programas,
  indexaciones,
  lenguajesProgramacion,
  frameworks,
} from '@/data/menuData';

interface ProductFormProps {
  categoria: string;
  subcategoria?: string;
}

const categoriaIcons: Record<string, React.ElementType> = {
  articulos: FileText,
  'trabajos-grado': GraduationCap,
  'informes-tecnicos': ClipboardList,
  ponencias: Mic,
  libros: BookOpen,
  'desarrollo-software': Code,
  'productos-derivados': Package,
};

const categoriaLabels: Record<string, string> = {
  articulos: 'Artículos',
  'trabajos-grado': 'Trabajos de Grado',
  'informes-tecnicos': 'Informes Técnicos',
  ponencias: 'Ponencias',
  libros: 'Libros y Capítulos',
  'desarrollo-software': 'Desarrollo de Software',
  'productos-derivados': 'Productos Derivados',
};

export function ProductForm({ categoria, subcategoria }: ProductFormProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autores, setAutores] = useState<string[]>(['']);
  const [palabrasClave, setPalabrasClave] = useState<string[]>(['']);
  const [lenguajes, setLenguajes] = useState<string[]>([]);
  const [frameworksSelected, setFrameworksSelected] = useState<string[]>([]);

  const Icon = categoriaIcons[categoria] || FileText;
  const subcategorias = subcategoria ? subcategoriasDetalle[subcategoria] || [] : [];

  const handleAddAutor = () => setAutores([...autores, '']);
  const handleRemoveAutor = (index: number) => {
    if (autores.length > 1) {
      setAutores(autores.filter((_, i) => i !== index));
    }
  };
  const handleAutorChange = (index: number, value: string) => {
    const newAutores = [...autores];
    newAutores[index] = value;
    setAutores(newAutores);
  };

  const handleAddPalabraClave = () => setPalabrasClave([...palabrasClave, '']);
  const handleRemovePalabraClave = (index: number) => {
    if (palabrasClave.length > 1) {
      setPalabrasClave(palabrasClave.filter((_, i) => i !== index));
    }
  };
  const handlePalabraClaveChange = (index: number, value: string) => {
    const newPalabras = [...palabrasClave];
    newPalabras[index] = value;
    setPalabrasClave(newPalabras);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Producto registrado exitosamente', {
      description: 'Su producto ha sido guardado y está pendiente de revisión.',
    });
    
    setIsSubmitting(false);
    navigate('/');
  };

  const renderCamposEspecificos = () => {
    switch (categoria) {
      case 'articulos':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="revista">Revista *</Label>
                <Input id="revista" placeholder="Nombre de la revista" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="issn">ISSN</Label>
                <Input id="issn" placeholder="0000-0000" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="volumen">Volumen</Label>
                <Input id="volumen" placeholder="Vol. XX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numero">Número</Label>
                <Input id="numero" placeholder="No. X" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paginas">Páginas</Label>
                <Input id="paginas" placeholder="pp. 1-10" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="doi">DOI</Label>
                <Input id="doi" placeholder="10.xxxx/xxxxx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="indexacion">Indexación *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione indexación" />
                  </SelectTrigger>
                  <SelectContent>
                    {indexaciones.map((idx) => (
                      <SelectItem key={idx.value} value={idx.value}>
                        {idx.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );

      case 'trabajos-grado':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="director">Director *</Label>
                <Input id="director" placeholder="Nombre del director" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="codirector">Codirector</Label>
                <Input id="codirector" placeholder="Nombre del codirector" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="periodo">Periodo Académico *</Label>
                <Input id="periodo" placeholder="2025-1" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nota">Nota</Label>
                <Input id="nota" type="number" min="0" max="5" step="0.1" placeholder="4.5" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fecha-grado">Fecha de Grado</Label>
              <Input id="fecha-grado" type="date" />
            </div>
          </>
        );

      case 'informes-tecnicos':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="cliente">Cliente / Organización</Label>
              <Input id="cliente" placeholder="Nombre del cliente u organización" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fecha-inicio">Fecha de Inicio *</Label>
                <Input id="fecha-inicio" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fecha-fin">Fecha de Finalización</Label>
                <Input id="fecha-fin" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="estado-proyecto">Estado del Proyecto *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="planificacion">Planificación</SelectItem>
                  <SelectItem value="ejecucion">En Ejecución</SelectItem>
                  <SelectItem value="finalizado">Finalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );

      case 'ponencias':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="evento">Evento *</Label>
              <Input id="evento" placeholder="Nombre del evento" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo-evento">Tipo de Evento *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nacional">Nacional</SelectItem>
                    <SelectItem value="internacional">Internacional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo-ponencia">Tipo de Ponencia *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oral">Oral</SelectItem>
                    <SelectItem value="poster">Póster</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lugar">Lugar *</Label>
                <Input id="lugar" placeholder="Ciudad, País" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fecha-evento">Fecha del Evento *</Label>
                <Input id="fecha-evento" type="date" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizador">Organizador</Label>
              <Input id="organizador" placeholder="Nombre del organizador" />
            </div>
          </>
        );

      case 'libros':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="editorial">Editorial *</Label>
                <Input id="editorial" placeholder="Nombre de la editorial" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="isbn">ISBN *</Label>
                <Input id="isbn" placeholder="978-3-16-148410-0" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ano-publicacion">Año de Publicación *</Label>
                <Input id="ano-publicacion" type="number" min="1900" max="2100" placeholder="2025" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numero-paginas">Número de Páginas</Label>
                <Input id="numero-paginas" type="number" placeholder="250" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo-libro">Tipo *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="libro-completo">Libro Completo</SelectItem>
                  <SelectItem value="capitulo">Capítulo de Libro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );

      case 'desarrollo-software':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo-software">Tipo de Software *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Aplicación Web</SelectItem>
                    <SelectItem value="movil">Aplicación Móvil</SelectItem>
                    <SelectItem value="escritorio">Aplicación de Escritorio</SelectItem>
                    <SelectItem value="embebido">Software Embebido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelo-acceso">Modelo de Acceso *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione modelo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open-source">Código Abierto</SelectItem>
                    <SelectItem value="propietario">Propietario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Lenguajes de Programación *</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {lenguajes.map((leng) => (
                  <Badge key={leng} variant="secondary" className="gap-1">
                    {leng}
                    <button
                      onClick={() => setLenguajes(lenguajes.filter((l) => l !== leng))}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={(value) => {
                  if (!lenguajes.includes(value)) {
                    setLenguajes([...lenguajes, value]);
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Agregar lenguaje" />
                </SelectTrigger>
                <SelectContent>
                  {lenguajesProgramacion.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Frameworks</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {frameworksSelected.map((fw) => (
                  <Badge key={fw} variant="secondary" className="gap-1">
                    {fw}
                    <button
                      onClick={() => setFrameworksSelected(frameworksSelected.filter((f) => f !== fw))}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Select
                onValueChange={(value) => {
                  if (!frameworksSelected.includes(value)) {
                    setFrameworksSelected([...frameworksSelected, value]);
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Agregar framework" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((fw) => (
                    <SelectItem key={fw.value} value={fw.value}>
                      {fw.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="repositorio">Repositorio</Label>
                <Input id="repositorio" placeholder="https://github.com/..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="version">Versión</Label>
                <Input id="version" placeholder="v1.0.0" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="licencia">Licencia</Label>
              <Input id="licencia" placeholder="MIT, GPL, Apache, etc." />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-ucal-gray hover:text-ucal-blue hover:bg-ucal-light-blue"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-ucal-blue" />
              <h1 className="text-xl font-bold text-gray-800">
                Registrar {categoriaLabels[categoria]}
              </h1>
            </div>
            {subcategoria && subcategorias.length > 0 && (
              <p className="text-sm text-gray-500 ml-7">
                {subcategorias[0]?.label.split(':')[0]}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="border-gray-300"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-ucal-blue hover:bg-ucal-blue-dark text-white"
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Guardando...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Guardar
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Básica */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Información Básica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Subcategoría */}
            {subcategorias.length > 0 && (
              <div className="space-y-2">
                <Label htmlFor="subcategoria">Subcategoría *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una subcategoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategorias.map((sub) => (
                      <SelectItem key={sub.value} value={sub.value}>
                        <div>
                          <div>{sub.label}</div>
                          {sub.description && (
                            <div className="text-xs text-gray-500">{sub.description}</div>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Título */}
            <div className="space-y-2">
              <Label htmlFor="titulo">Título *</Label>
              <Input
                id="titulo"
                placeholder="Ingrese el título del producto"
                required
              />
            </div>

            {/* Autores */}
            <div className="space-y-2">
              <Label>Autores *</Label>
              <div className="space-y-2">
                {autores.map((autor, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={autor}
                      onChange={(e) => handleAutorChange(index, e.target.value)}
                      placeholder={`Autor ${index + 1}`}
                      required={index === 0}
                    />
                    {autores.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveAutor(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddAutor}
                className="text-ucal-blue border-ucal-blue hover:bg-ucal-light-blue"
              >
                <Plus className="h-4 w-4 mr-1" />
                Agregar Autor
              </Button>
            </div>

            {/* Fecha y Programa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha de Publicación/Entrega *</Label>
                <Input id="fecha" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="programa">Programa/Departamento *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione programa" />
                  </SelectTrigger>
                  <SelectContent>
                    {programas.map((prog) => (
                      <SelectItem key={prog.value} value={prog.value}>
                        {prog.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Resumen */}
            <div className="space-y-2">
              <Label htmlFor="resumen">Resumen/Abstract *</Label>
              <Textarea
                id="resumen"
                placeholder="Ingrese un resumen del producto (máximo 500 palabras)"
                rows={4}
                required
              />
            </div>

            {/* Palabras Clave */}
            <div className="space-y-2">
              <Label>Palabras Clave *</Label>
              <div className="space-y-2">
                {palabrasClave.map((palabra, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={palabra}
                      onChange={(e) => handlePalabraClaveChange(index, e.target.value)}
                      placeholder={`Palabra clave ${index + 1}`}
                      required={index === 0}
                    />
                    {palabrasClave.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemovePalabraClave(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddPalabraClave}
                className="text-ucal-blue border-ucal-blue hover:bg-ucal-light-blue"
              >
                <Plus className="h-4 w-4 mr-1" />
                Agregar Palabra Clave
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Campos Específicos */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Información Específica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderCamposEspecificos()}
          </CardContent>
        </Card>

        {/* Archivo Adjunto */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Archivo Adjunto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-ucal-orange hover:bg-ucal-light-orange/30 transition-colors cursor-pointer">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm font-medium text-gray-700 mb-1">
                Arrastre y suelte su archivo aquí
              </p>
              <p className="text-xs text-gray-500 mb-4">
                o haga clic para seleccionar (PDF, DOC, ZIP - máx. 50MB)
              </p>
              <Button
                type="button"
                variant="outline"
                className="border-ucal-blue text-ucal-blue hover:bg-ucal-light-blue"
              >
                Seleccionar Archivo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(-1)}
            className="border-gray-300"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-ucal-blue hover:bg-ucal-blue-dark text-white"
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Guardando...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Guardar Producto
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
