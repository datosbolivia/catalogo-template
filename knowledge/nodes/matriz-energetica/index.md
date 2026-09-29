---
type: dataset
title: Generación y Matriz Energética
description: "Balance de inyección de energía eléctrica al sistema interconectado, comparando fuentes renovables y térmicas."
contracts:
  - type: datapackage
    path: ./datapackage.yaml
---

# Uso Analítico

Este conjunto de datos permite fiscalizar el avance de la transición energética, la participación de energías limpias en la matriz y el factor de emisiones de gases de efecto invernadero.

- **Porcentaje de Energía Limpia**: `SUM(CASE WHEN tipo_fuente = 'Renovable' THEN energia_generada_mwh ELSE 0 END) * 100.0 / SUM(energia_generada_mwh)`.
- **Intensidad de Carbono**: `SUM(emisiones_co2_ton) / SUM(energia_generada_mwh)`.

```sql
SELECT 
  tecnologia, 
  tipo_fuente, 
  SUM(energia_generada_mwh) AS total_generado_mwh,
  ROUND(AVG(factor_planta_pct), 1) AS factor_planta_promedio
FROM balance_generacion_diaria 
GROUP BY tecnologia, tipo_fuente 
ORDER BY total_generado_mwh DESC;
```

# Conceptos Relacionados (SKOS)

- [Energía Renovable y Transición Energética](concepts/energia_renovable.md) — [Q12705](https://www.wikidata.org/wiki/Q12705)
- [Criterios de Despacho Eléctrico](knowledge/balance_nacional.md)

---

# Gráficos del Dataset

```chart
{
  "type": "bar",
  "title": "Generación Eléctrica por Tecnología",
  "subtitle": "Inyección neta de energía expresada en MWh por fuente de generación",
  "source": "Comité de Despacho de Carga vía DataMesh",
  "unit": "MWh",
  "xKey": "tecnologia",
  "yKeys": ["total_generado_mwh"],
  "colors": ["#16a34a"]
}
```
