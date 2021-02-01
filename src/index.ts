import { Plugin } from "rollup";
import { join, dirname } from "path";

export default (): Plugin => {
  return {
    name: "leaflet",
    resolveId(id) {
      if (id !== "leaflet") {
        return;
      }

      return join(dirname(require.resolve("leaflet")), "leaflet-src.esm.js");
    },
  };
};
