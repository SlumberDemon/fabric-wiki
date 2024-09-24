// @ts-check
import { prefixLinks } from "./src/plugins/CorrectURL";
import starlightVersions from "starlight-versions";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const BASE_URL = "fabric-wiki";

// https://astro.build/config
export default defineConfig({
  base: "/" + BASE_URL,
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [prefixLinks({ base: "/" + BASE_URL + "/" })],
  },
  integrations: [
    starlight({
      title: "Fabric",
      plugins: [
        starlightVersions({
          versions: [{ slug: "0.0.1", label: "v0.0.1" }],
        }),
      ],
      editLink: {
        baseUrl: "https://github.com/Fabric-Development/fabric-wiki/edit/",
      },
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo-light.svg",
        replacesTitle: false,
      },
      social: {
        github: "https://github.com/Fabric-Development/fabric",
        discord: "https://discord.gg/3sDbYc9SZP",
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "introduction" },
        },

        {
          label: "Guide",
          autogenerate: { directory: "guide" },
        },

        {
          label: "Widgets",
          autogenerate: { directory: "widgets" },
        },
      ],

      customCss: [
        "./src/tailwind.css",
        "./src/styles/custom.css",

        "@fontsource/jost/100.css",
        "@fontsource/jost/200.css",
        "@fontsource/jost/300.css",
        "@fontsource/jost/400.css",
        "@fontsource/jost/600.css",
        "@fontsource/jost/700.css",
        "@fontsource/jost/800.css",
        "@fontsource/jost/900.css",

        "@fontsource/readex-pro/200.css",
        "@fontsource/readex-pro/300.css",
        "@fontsource/readex-pro/400.css",
        "@fontsource/readex-pro/600.css",
        "@fontsource/readex-pro/700.css",
      ],
    }),
    tailwind({ applyBaseStyles: false }),
    react({
      include: "./src/components/*.[jsx|tsx]",
    }),
  ],
});
