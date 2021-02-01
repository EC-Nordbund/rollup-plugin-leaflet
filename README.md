# Rollup Plugin for Leaflet

Resolves leaflet with the es-module build wich doesn't expose L on window.

## Install

1. Run

```sh
yarn add @ec-nordbund/rollup-plugin-leaflet
```

2. Add to your Plugins:

```js
import leaflet from "@ec-nordbund/rollup-plugin-leaflet";
// ...

export default {
  //...
  plugins: [
    //...
    leaflet(),
    //...
  ],
  //...
};
```

## IMPORTANT

Add this BEFORE node-resolver. As the resolvers are used in provided order!
