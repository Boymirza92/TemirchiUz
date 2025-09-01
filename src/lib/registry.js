// "use client";

// import React, { useState } from "react";
// import { useServerInsertedHTML } from "next/navigation";
// import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// export default function StyledComponentsRegistry({ children }) {
//   const [sheet] = useState(() => new ServerStyleSheet());

//   useServerInsertedHTML(() => {
//     const styles = sheet.getStyleElement();
//     sheet.instance.clearTag();
//     return <>{styles}</>;
//   });

//   return (
//     <StyleSheetManager sheet={sheet.instance}>
//       {children}
//     </StyleSheetManager>
//   );
// }


// lib/registry.js

'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }) {
  // ServerStyleSheet'ni faqat bir marta, "lazy" holatda yaratamiz.
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}