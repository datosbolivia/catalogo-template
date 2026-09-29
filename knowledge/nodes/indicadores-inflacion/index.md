---
type: dataset
title: Índice de Precios al Consumidor e Inflación
description: "Serie histórica de variación de precios e índice de inflación mensual, interanual y por divisiones de gasto."
dimensions:
  - fecha
  - ciudad
  - categoria
  - producto
contracts:
  - type: datapackage
    path: ./datapackage.yaml
lineage:
  source:
    - url: https://github.com/mauforonda/indicadores_inflacion
  version: 1.0.0
  updated_at: '2026-09-11T00:00:00Z'
---

# Uso Analítico

El conjunto de datos del Índice de Precios al Consumidor permite evaluar la evolución del costo de vida, calcular la inflación interanual y desagregar el impacto por rubros de consumo.

- **Inflación Acumulada**: Agrupar por año calendario y tomar el valor de `variacion_acumulada` al mes de diciembre.
- **Incidencia Sectorial**: Consultar la tabla de divisiones para identificar rubros con mayor aceleración de precios (ej. Alimentos vs. Transporte).
- **Consultas SQL Típicas**:

```sql
SELECT 
  fecha, 
  indice_mensual, 
  variacion_12_meses 
FROM ine_ipc_nacional 
ORDER BY fecha DESC 
LIMIT 12;
```

# Conceptos Relacionados (SKOS)

- [Índice de Precios al Consumidor (IPC)](concepts/cpi.md) — [Q180958](https://www.wikidata.org/wiki/Q180958)
- [Metodología de Estimación](knowledge/metodologia.md)

---

# Gráficos del Dataset

```chart
{
  "type": "line",
  "title": "Evolución de la Inflación Interanual (12 Meses)",
  "subtitle": "Tasa de variación porcentual interanual del IPC general",
  "source": "Instituto de Estadística vía DataMesh",
  "unit": "%",
  "xKey": "fecha",
  "yKeys": ["variacion_12_meses"],
  "colors": ["#0f766e"]
}
```
