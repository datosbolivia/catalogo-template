---
type: dataset
title: Censo y Demografía de Población
description: "Resultados demográficos, recuento poblacional por distrito territorial y distribución entre áreas urbanas y rurales."
contracts:
  - type: datapackage
    path: ./datapackage.yaml
---

# Uso Analítico

El conjunto de datos de demografía censal proporciona la línea base para la planificación territorial, el cálculo de indicadores per cápita y la asignación de recursos públicos.

- **Cálculo de Porcentaje Urbano**: `(poblacion_urbana * 100.0 / poblacion_total) AS pct_urbano`.
- **Hogares Promedio**: `(poblacion_total / NULLIF(hogares_censados, 0)) AS personas_por_hogar`.

```sql
SELECT 
  nombre_distrito, 
  poblacion_total, 
  ROUND(poblacion_urbana * 100.0 / poblacion_total, 1) AS pct_urbano
FROM censo_poblacion_distritos 
ORDER BY poblacion_total DESC;
```

# Conceptos Relacionados (SKOS)

- [Censo de Población y Vivienda](concepts/censo_poblacion.md) — [Q39825](https://www.wikidata.org/wiki/Q39825)
- [Definiciones y Criterios Censales](knowledge/definiciones.md)

---

# Gráficos del Dataset

```chart
{
  "type": "bar",
  "title": "Distribución Poblacional por Distrito Territorial",
  "subtitle": "Población total empadronada en principales unidades administrativas",
  "source": "Censo Oficial de Población vía DataMesh",
  "unit": "Habitantes",
  "xKey": "nombre_distrito",
  "yKeys": ["poblacion_total"],
  "colors": ["#0284c7"]
}
```
