# `public/` — assets del sitio

Esta carpeta es la única que debes tocar para reemplazar imágenes/video reales.
Ningún componente tiene una ruta de imagen hardcodeada fuera de lo que se
describe acá — si cambias un archivo en este lugar, el sitio se actualiza solo.

```
public/
├── logo.png          → Logo del pub (fondo transparente, usado en Header y Footer)
├── hero-video.mp4     → Video de fondo del Hero, en loop (silencioso)
├── hero-poster.jpg    → Foto de respaldo del Hero (se ve mientras carga el video)
├── galeria/           → Fotos de la galería. Cada foto que agregues acá también
│                        se debe listar en /data/galeria.ts (ruta + texto alternativo)
├── eventos/           → Fotos de los sábados/eventos pasados (flyers, fotos del salón)
└── iconos/            → Íconos de marca propios, si se necesita alguno que no
                          exista en Lucide (los íconos de UI usan Lucide, no esta carpeta)
```

## Especificaciones recomendadas

| Archivo | Formato | Peso recomendado | Notas |
|---|---|---|---|
| `logo.png` | PNG con transparencia | < 50 KB | Idealmente también un SVG si está disponible |
| `hero-video.mp4` | MP4 (H.264) | < 8 MB, sin audio | 1920x1080, loop de 10–20 seg |
| `hero-poster.jpg` | JPG | < 200 KB | Un frame representativo del video |
| `galeria/*.jpg` | JPG o WebP | < 300 KB c/u | Usa nombres descriptivos: `pista-sabado-01.jpg` |
| `eventos/*.jpg` | JPG o WebP | < 300 KB c/u | |

Ninguno de estos archivos existe todavía en este entregable — son placeholders
de estructura. Reemplázalos por los archivos reales y el sitio los tomará
automáticamente.
