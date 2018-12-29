import styled from 'styled-components';
import themeColors from 'styles/theme/color';

const ListStyle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1204px;
  margin: 0 auto;
  color: ${themeColors.defaultColor};

  .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
`;

export default ListStyle;
