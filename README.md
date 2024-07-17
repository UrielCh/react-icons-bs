# Bootstrap Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/twbs/icons](https://github.com/twbs/icons)

[See available icons here](https://react-icons.deno.dev/bs)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.9",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/bs": "jsr:@preact-icons/bs@^1.0.10/mod.ts",
    "react-icons/bs/": "jsr:@preact-icons/bs@^1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib bs

```ts
import { BsFill0CircleFill } from "jsr:preact-icons/bs@1.0.10/mod.ts"
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

