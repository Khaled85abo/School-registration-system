declare module "world.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGPathElement>>;
  const title: string;
  const id: string;
}
