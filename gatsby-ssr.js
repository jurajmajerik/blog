/* eslint-disable */
import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Menlo-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="menloFont"
    />,
  ]);
};
