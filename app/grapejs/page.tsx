"use client";

type Props = {};

import grapesjs from "grapesjs";
// import plugin from "grapesjs-plugin-name"; // Ejemplo de plugin
import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useRef } from "react";

const GrapesJSComponent = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: editorRef.current!,
      // Configuración adicional de GrapesJS
      //   plugins: [plugin],
      //   pluginsOpts: {
      // [plugin]: {
      /* opciones del plugin */
      // },
      //   },
      storageManager: {
        type: "local",
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
      },
      blockManager: {
        appendTo: ".myblocks",
        blocks: [
          {
            id: "image",
            label: "Image",
            media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
            </svg>`,
            // Use `image` component
            content: { type: "image" },
            // The component `image` is activatable (shows the Asset Manager).
            // We want to activate it once dropped in the canvas.
            activate: true,
            // select: true, // Default with `activate: true`
          },
        ],
      },
      canvas: {
        styles: [
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        ],
      },
    });

    return () => {
      // Limpiar el editor al desmontar el componente
      editor.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={editorRef}></div>
    </div>
  );
};

export default function GrapePage({}: Props) {
  return <GrapesJSComponent />;
}
