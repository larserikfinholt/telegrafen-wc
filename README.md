# telegrafen-wc
UI component library

Contains:
- button, input, radios, tabs etc from Adaptive Web Components (and fast-foundation)
- counter (and other custom components based on fast-element)

Sample components can be seen by running `npm run dev`



# using the library
See the example project here: `\examples\use-telegrafen-wc` or do the following:

Install the library in your project `npm install telegrafen-wc`

Initialize it in your main
```
import {init} from "telegrafen-wc";

init()

```

Then you may use the compoents as regular `twc` components

```
<twc-button>Click me</twc-button>

<twc-counter></twc-counter>
```


# Build new version
To publish a new version
`npm run build`

`npm run build`

`npm publish`


