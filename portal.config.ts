export interface PortalConfig {
  organization: {
    name: string;
    slug: string;
    url: string;
    github: string;
    description: string;
  };
  site: {
    title: string;
    description: string;
    tagline: string;
    url: string;
    base: string;
  };
  pwa: {
    enabled: boolean;
    name: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
  };
  desktopApp: {
    enabled: boolean;
    name: string;
    downloadUrl: string;
    enableLocalProcessing: boolean;
  };
  nav: Array<{
    label: string;
    key?: string;
    path: string;
  }>;
}

export const config: PortalConfig = {
  organization: {
    name: "DataMesh Sovereign Organization",
    slug: "datamesh-org",
    url: "https://datamesh-template.example.org",
    github: "https://github.com/organization/catalogo-datamesh",
    description: "Iniciativa colaborativa y abierta de datos federados soberanos."
  },
  site: {
    title: "DataMesh Catalog",
    description: "Portal catálogo de Datos Abiertos y Federados",
    tagline: "Datos abiertos y descentralizados para la comunidad y Agentes de IA.",
    url: "https://datamesh-template.example.org",
    base: "/"
  },
  pwa: {
    enabled: true,
    name: "DataMesh Catalog - Portal de Datos",
    shortName: "DataMesh",
    themeColor: "#0f766e",
    backgroundColor: "#fcfbf9"
  },
  desktopApp: {
    enabled: true,
    name: "DataMesh Catalog Desktop",
    downloadUrl: "https://github.com/organization/catalogo-datamesh/releases",
    enableLocalProcessing: true
  },
  nav: [
    { label: "Inicio", key: "nav.home", path: "/" },
    { label: "Datasets", key: "nav.datasets", path: "/datasets" },
    { label: "Acerca de", key: "nav.about", path: "/about" },
    { label: "Docs", key: "nav.docs", path: "/docs" },
    { label: "Descargas", key: "nav.download", path: "/download" }
  ]
};
