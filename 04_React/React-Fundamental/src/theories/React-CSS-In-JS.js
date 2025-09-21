/*
Q. Describe the role and benefits of using a CSS-in-JS library with React.

CSS-in-JS means writing your CSS styles inside JavaScript/TypeScript files, usually scoped to components.
Instead of keeping styles in .css files, you define them right in your React component.
Libraries like styled-components, Emotion, JSS make this possible.

✅ Benefits of CSS-in-JS
1. coped Styles (no conflicts)
2. Dynamic Styling with Props
const Button = styled.button<{ primary?: boolean }>`
  background: ${(props) => (props.primary ? "blue" : "gray")};
`;
3. Collocation:
Component + its styles live together in the same file.
4.Better Theming Support
Many CSS-in-JS libs provide a ThemeProvider.
Makes global themes (dark/light mode, brand colors) easier.
5. Automatic Vendor Prefixing
Handles browser compatibility without manually writing -webkit-, -moz-.

*/

import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  &:hover {
    background: darkblue;
  }
`;

export default function App() {
  return <Button>Click Me</Button>;
}


