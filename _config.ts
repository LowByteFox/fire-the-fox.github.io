import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";

const site = lume();

site.use(tailwindcss());
site.use(postcss());
site.use(vento());

const extensions = [".webp"];

const check = (path: string) => {
    for (const ext of extensions) {
        if (path.endsWith(ext)) return true;
    }
    return false;
}

site.copyRemainingFiles(check);

export default site;
