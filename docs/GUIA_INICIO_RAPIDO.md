---
type: guide
title: Guía de Inicio Rápido para el Template DataMesh
description: Pasos esenciales para clonar, configurar tu organización, crear datasets y desplegar tu catálogo soberano.
timestamp: 2026-09-28T00:00:00Z
---

# Guía de Inicio Rápido

Bienvenido al repositorio template de **DataMesh Sovereign Catalog**. Este portal estático está diseñado para desplegarse instantáneamente en cualquier infraestructura con 0 dependencias de backend, respetando la especificación **Open Knowledge Format (OKF v0.2)** y **Frictionless DataPackage**.

---

## 1. Requisitos Previos

- **Node.js**: Versión 18.0 o superior (recomendado Node 20 LTS o 22 LTS).
- **npm**: Gestor de paquetes oficial (incluido con Node.js).
- **Git**: Sistema de control de versiones.

---

## 2. Instalación y Entorno Local

```bash
# 1. Clonar el repositorio template
git clone https://github.com/tu-organizacion/catalogo-datamesh.git
cd catalogo-datamesh

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo local
npm run dev
```

El portal estará disponible de inmediato en `http://localhost:8001` con soporte de hot-reloading.

---

## 3. Configuración de tu Portal

Edita el archivo [`portal.config.ts`](/portal.config.ts) en la raíz del proyecto para adaptar la identidad institucional:

```typescript
export const config: PortalConfig = {
  organization: {
    name: "Tu Organización o Colectivo",
    slug: "tu-organizacion",
    url: "https://datos.tu-organizacion.org",
    github: "https://github.com/tu-organizacion/catalogo-datamesh",
    description: "Catálogo federado de datos abiertos soberanos."
  },
  site: {
    title: "Portal de Datos Abiertos",
    description: "Catálogo soberano de datos públicos y verificables",
    tagline: "Datos abiertos y descentralizados para la ciudadanía y Agentes de IA.",
    url: "https://datos.tu-organizacion.org",
    base: "/"
  },
  pwa: {
    enabled: true,
    name: "Portal de Datos Abiertos",
    shortName: "DatosPortal",
    themeColor: "#0f766e",
    backgroundColor: "#fcfbf9"
  },
  desktopApp: {
    enabled: true,
    name: "Portal Desktop",
    downloadUrl: "https://github.com/tu-organizacion/catalogo-datamesh/releases",
    enableLocalProcessing: true
  }
};
```

---

## 4. Estructura de Datasets de Ejemplo

Cada conjunto de datos vive de forma modular e independiente dentro de `knowledge/nodes/<slug>/`:

```text
knowledge/nodes/mi-dataset/
├── datapackage.yaml       # Esquema tabular Frictionless con tipos de columnas
├── index.md               # Contexto analítico principal (Obsidian-style zero scroll)
├── concepts/              # Definiciones ontológicas con SKOS / Wikidata
│   └── mi_concepto.md
└── knowledge/             # Documentos metodológicos o especificaciones
    └── metodologia.md
```

### Paso a paso para agregar un nuevo dataset:

1. **Crear carpeta del nodo**:
```bash
mkdir -p knowledge/nodes/mi-dataset/{concepts,knowledge}
```

2. **Declarar el contrato `datapackage.yaml`**:
```yaml
name: mi-dataset
title: Nombre del Dataset
resources:
  - name: tabla_principal
    type: table
    path: https://ejemplo.org/datos.csv
    format: csv
    schema:
      fields:
        - name: fecha
          type: date
          description: Fecha de registro
        - name: valor
          type: number
          description: Métrica cuantificada
```

3. **Escribir `index.md` con contexto analítico**:
```markdown
---
type: dataset
title: Nombre del Dataset
description: Descripción sintética del contenido.
contracts:
  - type: datapackage
    path: ./datapackage.yaml
---

# Uso Analítico
Explicación de cómo cruzar y consultar las columnas principales.

# Conceptos Relacionados
- [Concepto Semántico](concepts/mi_concepto.md)
```

4. **Registrar el dataset en `knowledge/index.md`** bajo la categoría correspondiente:
```markdown
### Mi Categoría
- [Nombre del Dataset](/nodes/mi-dataset/index.md)
```

---

## 5. Validación y Suite de Auditoría

El template incluye una suite de pruebas automatizadas obligatorias que verifican la integridad del portal:

```bash
# Validar contratos y schemas OKF & ODKF v0.2 (0 errores)
npm run lint:okf

# Ejecutar auditoría integral de 15 pruebas normativas
npm run audit

# Compilar el sitio estático completo (40+ páginas HTML en dist/)
npm run build
```

---

## 6. Opciones de Despliegue

El directorio `dist/` resultante de `npm run build` es 100% estático y compatible con:
- **Cloudflare Pages** (Build command: `npm run build`, Output directory: `dist`)
- **GitHub Pages** (Acción automatizada incluida en `.github/workflows/deploy.yml`)
- **Vercel / Netlify** (Framework preset: `Astro`)
- **Servidor Propio / Nginx / Docker** (Copia la carpeta `dist/` a tu servidor web).
