# Veo - Next.js Project

Este proyecto está construido con Next.js 15 y React 19, utilizando una amplia gama de componentes de UI de Radix UI y otras librerías modernas.

## 🚀 Instalación de Dependencias

### Problema Inicial

Al intentar instalar las dependencias con `npm install`, encontramos conflictos de dependencias (ERESOLVE) debido a:

- React 19 es muy nuevo y muchos paquetes aún no lo soportan oficialmente
- Conflictos entre `date-fns@4.1.0` y `react-day-picker@8.10.1`
- Conflictos entre `vaul@0.9.9` y React 19

### Solución Implementada

#### 1. Instalación Inicial

```bash
npm install --legacy-peer-deps
```

#### 2. Actualización de Dependencias Problemáticas

```bash
npm install react-day-picker@latest --legacy-peer-deps
```

#### 3. Limpieza de Cache (Opcional)

```bash
npm cache clean --force
```

#### 4. Verificación de Instalación

```bash
npm ls
```

## 📦 Dependencias Principales

### Framework

- **Next.js**: 15.2.4
- **React**: 19.1.0
- **TypeScript**: 5.8.3

### UI Components (Radix UI)

- Accordion, Alert Dialog, Avatar, Button, Card
- Dialog, Dropdown Menu, Form, Input, Label
- Navigation Menu, Popover, Select, Tabs
- Toast, Tooltip, y muchos más...

### Utilidades

- **Tailwind CSS**: Para estilos
- **Lucide React**: Iconos
- **React Hook Form**: Manejo de formularios
- **Zod**: Validación de esquemas
- **date-fns**: Manipulación de fechas
- **Recharts**: Gráficos

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint
```

## 🔧 Comandos Útiles para el Futuro

### Instalación de Nuevas Dependencias

```bash
# Instalar paquete individual
npm install nombre-paquete --legacy-peer-deps

# Instalar dependencia de desarrollo
npm install nombre-paquete --save-dev --legacy-peer-deps
```

### Resolución de Conflictos

```bash
# Ver dependencias instaladas
npm ls

# Limpiar cache
npm cache clean --force

# Reinstalar node_modules
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## ⚠️ Notas Importantes

### ¿Por qué usar --legacy-peer-deps?

- React 19 es muy nuevo y muchos paquetes aún no lo soportan oficialmente
- Esta flag le dice a npm que use la resolución de dependencias más permisiva
- Es seguro para desarrollo y la mayoría de casos de uso

### Conflictos Comunes

- **date-fns**: Algunos paquetes requieren versiones específicas
- **React 19**: Muchos paquetes aún no lo soportan oficialmente
- **Peer Dependencies**: Conflictos entre dependencias anidadas

## 🎯 Estado del Proyecto

- ✅ **302 paquetes instalados** correctamente
- ✅ **0 vulnerabilidades** encontradas
- ✅ **Servidor de desarrollo** funcionando en http://localhost:3000
- ✅ **Todas las dependencias** compatibles

## 📁 Estructura del Proyecto

```
veo/
├── app/                 # App Router de Next.js
├── components/          # Componentes de UI
│   └── ui/             # Componentes de Radix UI
├── hooks/              # Custom hooks
├── lib/                # Utilidades
├── public/             # Archivos estáticos
└── styles/             # Estilos globales
```

## 🚀 Próximos Pasos

1. El servidor de desarrollo está ejecutándose en http://localhost:3000
2. Puedes comenzar a desarrollar tu aplicación
3. Para agregar nuevas dependencias, usa `--legacy-peer-deps`
4. Si encuentras conflictos, consulta la sección de resolución de conflictos

---

**Nota**: Este README documenta los pasos específicos tomados para resolver los conflictos de dependencias en este proyecto. Los comandos y soluciones pueden variar dependiendo de las versiones específicas de las dependencias.
