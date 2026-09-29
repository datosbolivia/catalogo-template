---
type: dataset
title: Directorio de Trámites y Servicios del Estado
description: "Catálogo exhaustivo de trámites gubernamentales, costos, requisitos y plazos de atención ciudadana."
contracts:
  - type: datapackage
    path: ./datapackage.yaml
---

# Uso Analítico

Este dataset facilita auditorías ciudadanas sobre la burocracia administrativa, identificación de cuellos de botella y priorización de iniciativas de gobierno digital.

- **Porcentaje de Trámites Gratuitos**: `COUNT(CASE WHEN costo_moneda_local = 0 THEN 1 END) * 100.0 / COUNT(*)`.
- **Tiempos de Atención por Sector**: `AVG(tiempo_resolucion_dias)` agrupado por `categoria_servicio`.

```sql
SELECT 
  categoria_servicio, 
  COUNT(*) AS total_tramites, 
  ROUND(AVG(tiempo_resolucion_dias), 1) AS promedio_dias,
  SUM(CASE WHEN canal_atencion = 'En Línea' THEN 1 ELSE 0 END) AS tramites_digitales
FROM catalogo_tramites_publicos 
GROUP BY categoria_servicio 
ORDER BY total_tramites DESC;
```

# Conceptos Relacionados (SKOS)

- [Trámite Ciudadano y Gobierno Electrónico](concepts/tramite_ciudadano.md) — [Q192931](https://www.wikidata.org/wiki/Q192931)
- [Estándar de Interoperabilidad](knowledge/estandar_interoperabilidad.md)

---

# Gráficos del Dataset

```chart
{
  "type": "bar",
  "title": "Cantidad de Trámites por Categoría de Servicio",
  "subtitle": "Volumen de servicios públicos clasificados por ámbito sectorial",
  "source": "Portal Estatal de Trámites vía DataMesh",
  "unit": "Trámites",
  "xKey": "categoria_servicio",
  "yKeys": ["total_tramites"],
  "colors": ["#4f46e5"]
}
```
