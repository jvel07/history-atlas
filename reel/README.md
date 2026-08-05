# Reel background images

Drop photographs here and reference them from a story's `reel` cards. Until a
card has an `image`, it gets a procedural background derived from the story's
mood — so this is entirely optional, and the reels work with none of it.

## Layout

```
public/reel/<story-slug>/<name>.jpg
```

e.g. `public/reel/united-fruit/banana-port.jpg`, referenced as
`/reel/united-fruit/banana-port.jpg`.

## Adding one

On the card:

```ts
{
  beat: 'worldBefore',
  kicker: '1899',
  text: 'An American company starts growing bananas in Central America.',
  image: {
    src: '/reel/united-fruit/banana-port.jpg',
    alt: 'Bananas loaded onto a United Fruit steamer at Puerto Barrios',
    credit: 'United Fruit Company photograph',
    licence: 'Public domain',
    source: 'https://www.loc.gov/item/...',
  },
}
```

All five fields are required, and `npm run verify` fails without them. An image
with no licence and no credit is a liability, not an asset.

## Where to get them

Public-domain historical photography is the natural fit — it is free to use and
it is actually of the thing being described:

- **Wikimedia Commons** — filter by "public domain" or a CC licence
- **The Library of Congress** — Prints & Photographs, much of it PD
- **National archives** (US NARA, UK National Archives, etc.)
- **Flickr Commons** — institutional accounts with cleared rights

Avoid: anything you cannot name a licence for; modern stock photos of unrelated
subjects; AI-generated images (they put an unverifiable picture next to sourced
claims, which is the one thing this atlas will not do).

## Preparing the file

Keep them light — they sit behind text at reduced opacity, so quality past a
point is wasted bytes.

```
# ~1200px wide, stripped metadata, reasonable compression
magick input.jpg -resize 1200x -strip -quality 82 output.jpg
```

Landscape orientation works best; the backdrop covers and drifts slowly, so the
centre of the frame is what shows.
