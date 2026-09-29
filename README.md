# DataMesh Sovereign Catalog — Template Repository

Plantilla soberana y federada para la publicación de catálogos de datos abiertos, diseñada bajo principios de descentralización, contratos sintácticos verificables (**Open Knowledge Format v0.2**) y optimización para analistas ciudadanos y **Agentes de Inteligencia Artificial (LLMs)**.

---

## Características Principales

- **Arquitectura Estática 100% Autónoma (SSG con Astro):** Compila páginas HTML puras sin dependencias de servidor ni bases de datos activas en producción.
- **Explorador Estilo Obsidian (Zero Scroll):** Navegación fluida por árbol de archivos (`index.md`, `knowledge/`, `concepts/`, tablas y esquemas) en una vista compacta con viewport delimitado.
- **Contratos Sintácticos Frictionless:** Cada dataset incluye `datapackage.yaml` con tipado estricto a nivel de columna (string, number, date, etc.).
- **Interoperabilidad Semántica W3C SKOS:** Enlaces ontológicos directos a vocabularios abiertos y entidades de Wikidata (`prefLabel`, `exactMatch`, `broader`).
- **Filtro Multi-Selección de Dominios y Vistas:** Filtrado combinable por categorías a la izquierda y conmutador accesible de vista en cuadrícula / lista a la derecha.
- **Internacionalización Completa (i18n):** Paridad 1:1 estricta entre Español e Inglés con conmutación dinámica en tiempo de ejecución (`data-i18n` y `data-i18n-title`).
- **Soporte Nativo para Agentes LLM:** Endpoints `/llms.txt`, `/llms-full.txt` y `/raw/[...slug]` con formato limpio Markdown.
- **Distribución Multiplataforma:** Progressive Web App (PWA) offline instalable y contenedor de escritorio (Electron) para procesamiento local.
- **Suite de Auditoría Automatizada:** 15 pruebas de cumplimiento normativo (rutas, neutralidad, layouts, paridad i18n, linter OKF).

---

## 5 Rutas Canónicas del Portal

1. **`/` (Inicio):** Resumen del catálogo, buscador cívico integrado, métricas y temáticas prioritarias.
2. **`/datasets`:** Catálogo interactivo con multi-selección de dominios, búsqueda por texto y selector de vistas (cuadrícula/lista). Fichas en `/datasets/[slug]` y subdocumentos en `/datasets/[slug]/[...doc]`.
3. **`/about`:** Fundamentos de la Malla de Datos (DataMesh), gobernanza descentralizada y estándares abiertos.
4. **`/docs`:** Centro documental con especificaciones normativas, guías de despliegue, notas técnicas y Registros de Decisión de Arquitectura (ADRs).
5. **`/download`:** Instalador de la Progressive Web App (PWA) y versiones de escritorio.

---

## Inicio Rápido

### 1. Clonar e Instalar

```bash
git clone https://github.com/tu-organizacion/catalogo-datamesh.git
cd catalogo-datamesh
npm install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

Accede a `http://localhost:8001` en tu navegador.

### 3. Validar y Auditar

```bash
# Validar esquemas y bundles OKF v0.2
npm run lint:okf

# Ejecutar auditoría integral de 15 pruebas normativas
npm run audit

# Compilar sitio estático
npm run build
```

---

## Datasets de Ejemplo Incluidos

Esta plantilla incluye 5 conjuntos de datos de ejemplo que ilustran los tipos más comunes de información pública:

| Dataset | Dominio | Tipo de Datos | Características Destacadas |
|---------|---------|---------------|----------------------------|
| [`air_quality`](knowledge/nodes/air_quality/) | Medio Ambiente | Sensores / Series temporales | Coordenadas geoespaciales, conceptos SKOS (PM2.5, ICA), gráficos interactivos. |
| [`indicadores-inflacion`](knowledge/nodes/indicadores-inflacion/) | Economía | Índices y porcentajes | Multi-recurso (nacional, divisiones COICOP, ciudades), concepto SKOS de IPC. |
| [`demografia-censo`](knowledge/nodes/demografia-censo/) | Demografía | Tabular territorial | Desglose urbano/rural, definiciones censales, gráficos de barras. |
| [`tramites-gobierno`](knowledge/nodes/tramites-gobierno/) | Gobierno | Catálogo de servicios | Costos arancelarios, plazos de resolución, estándar de interoperabilidad. |
| [`matriz-energetica`](knowledge/nodes/matriz-energetica/) | Energía | Balance de generación | Comparativa renovable vs. fósil, factor de planta, emisiones CO2. |

---

## Personalización

1. **Configuración Global:** Modifica [`portal.config.ts`](portal.config.ts) con los datos y redes de tu organización.
2. **Estilo e Identidad Visual:** Ajusta los tokens de diseño (colores, fuentes, bordes) en [`src/styles/theme.css`](src/styles/theme.css) siguiendo las pautas de [`DESIGN.md`](DESIGN.md).
3. **Páginas Editoriales:** Edita el contenido Markdown en `content/pages/` (`home.md`, `about.md`, `download.md`).
4. **Agregar Datasets:** Sigue las instrucciones de [`docs/GUIA_INICIO_RAPIDO.md`](docs/GUIA_INICIO_RAPIDO.md).

---

## Despliegue

La carpeta `dist/` generada por `npm run build` es 100% estática. Se puede alojar directamente en:
- **Cloudflare Pages**
- **GitHub Pages**
- **Vercel / Netlify**
- **Servidores Nginx / Apache / Docker**

Para instrucciones detalladas de configuración de DNS y CI/CD, consulta [`docs/GUIAS_FORK_Y_DESPLIEGUE.md`](docs/GUIAS_FORK_Y_DESPLIEGUE.md).

---

## Estándares y Contribución

Consulta [`CONTRIBUTING.md`](CONTRIBUTING.md) para conocer las directrices de contribución, convenciones de código y políticas de neutralidad institucional.
