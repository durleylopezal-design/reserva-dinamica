import { useEffect, useState } from 'react';
import {
  FileText,
  GraduationCap,
  ClipboardList,
  Mic,
  BookOpen,
  Code,
  Package,
  TrendingUp,
  Calendar,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ title, value, icon: Icon, color, trend, trendUp }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card className="hover-lift cursor-pointer border-0 shadow-md overflow-hidden">
      <div className={`h-1 ${color}`} />
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">
              {displayValue.toLocaleString()}
            </p>
            {trend && (
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp
                  className={`h-3 w-3 ${trendUp ? 'text-green-500' : 'text-red-500'}`}
                />
                <span
                  className={`text-xs ${trendUp ? 'text-green-500' : 'text-red-500'}`}
                >
                  {trend}
                </span>
              </div>
            )}
          </div>
          <div
            className={`w-12 h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center`}
          >
            <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface RecentActivity {
  id: string;
  title: string;
  type: string;
  date: string;
  status: 'aprobado' | 'revision' | 'borrador' | 'publicado';
}

const recentActivities: RecentActivity[] = [
  {
    id: '1',
    title: 'Inteligencia Artificial en Educación Superior',
    type: 'Artículo',
    date: '2025-04-10',
    status: 'aprobado',
  },
  {
    id: '2',
    title: 'Sistema de Gestión de Inventarios',
    type: 'Desarrollo de Software',
    date: '2025-04-08',
    status: 'publicado',
  },
  {
    id: '3',
    title: 'Análisis de Vulnerabilidades en Redes',
    type: 'Informe Técnico',
    date: '2025-04-05',
    status: 'revision',
  },
  {
    id: '4',
    title: 'Machine Learning para Predicción de Datos',
    type: 'Trabajo de Grado',
    date: '2025-04-03',
    status: 'borrador',
  },
  {
    id: '5',
    title: 'Ponencia: Blockchain en la Industria',
    type: 'Ponencia',
    date: '2025-04-01',
    status: 'aprobado',
  },
];

const getStatusBadge = (status: RecentActivity['status']) => {
  const styles = {
    aprobado: 'bg-blue-100 text-blue-700 border-blue-200',
    revision: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    borrador: 'bg-gray-100 text-gray-700 border-gray-200',
    publicado: 'bg-green-100 text-green-700 border-green-200',
  };
  const labels = {
    aprobado: 'Aprobado',
    revision: 'En Revisión',
    borrador: 'Borrador',
    publicado: 'Publicado',
  };
  return (
    <Badge variant="outline" className={styles[status]}>
      {labels[status]}
    </Badge>
  );
};

export function Dashboard() {
  const stats = [
    {
      title: 'Total Productos',
      value: 156,
      icon: Package,
      color: 'bg-ucal-blue',
      trend: '+12% este mes',
      trendUp: true,
    },
    {
      title: 'Artículos',
      value: 42,
      icon: FileText,
      color: 'bg-green-500',
      trend: '+5% este mes',
      trendUp: true,
    },
    {
      title: 'Trabajos de Grado',
      value: 38,
      icon: GraduationCap,
      color: 'bg-purple-500',
      trend: '+8% este mes',
      trendUp: true,
    },
    {
      title: 'Informes Técnicos',
      value: 31,
      icon: ClipboardList,
      color: 'bg-orange-500',
      trend: '-2% este mes',
      trendUp: false,
    },
    {
      title: 'Ponencias',
      value: 18,
      icon: Mic,
      color: 'bg-pink-500',
      trend: '+15% este mes',
      trendUp: true,
    },
    {
      title: 'Libros',
      value: 12,
      icon: BookOpen,
      color: 'bg-indigo-500',
      trend: '0% este mes',
      trendUp: true,
    },
    {
      title: 'Software',
      value: 15,
      icon: Code,
      color: 'bg-cyan-500',
      trend: '+20% este mes',
      trendUp: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header del Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Bienvenido al Sistema de Seguimiento de Productos Académicos
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-ucal-blue text-ucal-blue hover:bg-ucal-light-blue"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Este Mes
          </Button>
          <Button className="bg-ucal-blue hover:bg-ucal-blue-dark text-white">
            <TrendingUp className="h-4 w-4 mr-2" />
            Ver Reportes
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Actividad Reciente */}
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-800">
                Actividad Reciente
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-ucal-blue">
                Ver Todo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-ucal-light-blue flex items-center justify-center">
                      <FileText className="h-5 w-5 text-ucal-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {activity.type} • {activity.date}
                      </p>
                    </div>
                  </div>
                  {getStatusBadge(activity.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Panel Lateral */}
        <div className="space-y-6">
          {/* Resumen Rápido */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-800">
                Resumen Rápido
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-ucal-gray" />
                    <span className="text-sm text-gray-600">Autores Activos</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">87</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-ucal-gray" />
                    <span className="text-sm text-gray-600">Pendientes</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-ucal-gray" />
                    <span className="text-sm text-gray-600">Tasa de Aprobación</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">94%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceso Rápido */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-ucal-blue to-ucal-blue-dark">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                ¿Nuevo Producto?
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Registra tu artículo, trabajo de grado o desarrollo de software.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-ucal-blue hover:bg-white/90"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Registrar Ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
