# Traducción al español (ES) — Estado

Este paquete es un fork local de `kesiev/massive-randomness-2` con el
idioma **Español (ES)** añadido como tercer idioma jugable, junto a
EN e IT.

## Cómo probarlo

Sirve la carpeta con un servidor local (no funciona con `file://`
directamente, porque usa Service Worker/PWA), por ejemplo:

```
python3 -m http.server 8000
```

y abre `http://localhost:8000/`. En el menú de ajustes (icono de
engranaje) aparecerá "Español" en el selector de idioma.

## Qué está traducido en esta primera entrega (Fase 1)

- Interfaz completa de la aplicación (menús, ajustes, textos del
  generador) — `modules/interface.js`
- Modo Exploración — `modules/gamemodes.js`
- Módulos de caja base: Massive Darkness 1, Crystal & Lava,
  Heavenfall, Rainbow Crossing, y los 6 módulos de Zombicide
- Reglas por defecto de mazmorra, cruce con Zombicide, bastiones,
  zonas anegadas — `modules/quests-default.js`
- Los 28 Desafíos por defecto — `modules/challenges-default.js`
- Nombres de fichas/marcadores y dados de Hellscape —
  `modules/md2-hellscape.js`
- Listas técnicas de validación (acentos permitidos en ES) —
  `js/tools.js`

## Fase 2 (en curso)

Ya traducidas por completo:

- `modules/quests-rainbowcrossing.js`
- `modules/quests-darkbringerpack.js`
- `modules/quests-internet.js`
- `modules/quests-mr.js`
- `modules/quests-ravaged.js`
- `modules/quests-upgradepack.js` (las 6 misiones del Pack de Mejora)
- `modules/boss.js` (los 10 combates contra jefes)
- `modules/campaign.js` (las 3 campañas: Heavenfall completa, mini-campaña y campaña de 2 misiones)
- `modules/quests-hellscapewq.js` (las 8 misiones "Web Quest" de Hellscape)

Todavía **pendiente** (el último archivo):

- `modules/quests-hellscape.js`
- `modules/quests-ravaged.js`
- `modules/quests-upgradepack.js`
- `modules/boss.js` (jefes)
- `modules/campaign.js` (Modo Campaña)
- `modules/quests-hellscapewq.js`
- `modules/quests-hellscape.js`

## Nota sobre pequeñas imperfecciones gramaticales aceptadas

En los textos narrativos generados por combinación de fragmentos
(nombres de "Guardianes" con género variable, términos como
"Inframundo/Abismo/Poder Arcano", etc.) puede quedar, en casos muy
puntuales, una preposición sin contraer correctamente (por ejemplo
"a el Guardián" en vez de "al Guardián") en 1 o 2 combinaciones de
cientos posibles. Es un compromiso consciente para poder cubrir la
enorme cantidad de combinaciones posibles del generador sin
bloquear el trabajo; si en las pruebas encuentras alguna frase que
suene mal, dímelo y la reviso puntualmente.

Mientras tanto, la app ya sabe gestionar esto: si activas la opción
**"Excluir aventuras no traducidas"** en Ajustes, solo generará
aventuras que sí tengan ES disponible (las de Fase 1 arriba). Si la
dejas desactivada, las aventuras no traducidas se muestran en
inglés como reserva (fallback), sin romper nada.

## Terminología

Se ha usado como referencia el manual oficial en español que
proporcionaste (*Massive Darkness 2: Hellscape* — Manual Unificado),
para términos como **Vida**, **Defensa**, **Habilidad**, **Cuadrilla**,
**Líder / Secuaces**, **Combate**, **Maná**, **Fuego**, **Escarcha**,
**Zona**. Donde el manual no cubre un término (texto propio de la
interfaz de la app, no del juego de mesa), se ha traducido de forma
natural.

## Nota sobre el PR de traducción al polaco (#1)

Se revisó el hilo de `kesiev/massive-randomness-2#1` antes de
traducir, para no repetir los dos problemas que el desarrollador
señaló:

1. **Terminología no alineada con el manual oficial** — de ahí el
   uso del manual en español como referencia.
2. **Placeholders vacíos que rompen frases generadas** (arrays de
   traducción más cortos que el original, con huecos en blanco) —
   en esta traducción se ha mantenido siempre el mismo número de
   elementos que las versiones EN/IT, sin dejar ningún hueco vacío.

También se revisó el tercer punto que mencionaba (detección de
idioma del navegador en mayúsculas/minúsculas) — en la rama `main`
actual el código ya compara correctamente en mayúsculas, así que no
requería ningún cambio.
