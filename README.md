# Bootstrap Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/twbs/icons](https://github.com/twbs/icons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=bs)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/bs":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-bs@1.0.1/mod.ts",
    "react-icons/bs/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-bs/ico/",
  }
}
```

## Direct import sample

`import { BsFill0CircleFill } from "https://deno.land/x/react_icons_bs@1.0.1/mod.ts"`

## import_map import sample

`import { BsFill0CircleFill } from "react-icons/bs"`

## minimal import

`import { BsFill0CircleFill } from "react-icons/bs/BsFill0CircleFill.ts"`

## minimal import default

`import BsFill0CircleFill from "react-icons/bs/BsFill0CircleFill.ts"`

