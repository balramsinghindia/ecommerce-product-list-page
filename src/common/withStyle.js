import styled from "styled-components";

export default (component, style) => styled(component)`
  ${props => (style ? style : "")};
`;
