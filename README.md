# Bootstrap Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/twbs/icons](https://github.com/twbs/icons)

[See available icons here](https://react-icons.deno.dev/bs)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/bs":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-bs@1.0.9/mod.ts",
    "react-icons/bs/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-bs@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib bs

```ts
import { BsFill0CircleFill } from "https://deno.land/x/react_icons_bs@1.0.9/mod.ts"
```

## import_map import an icon from all icons

```ts
import { BsFill0CircleFill } from "react-icons/bs"
```

## import a single icon, downloading just one icon

```ts
import { BsFill0CircleFill } from "react-icons/bs/BsFill0CircleFill.ts"
```

or using default export

```ts
import BsFill0CircleFill from "react-icons/bs/BsFill0CircleFill.ts"
```

