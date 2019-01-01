import styled from 'styled-components';
import themeColors from 'styles/theme/color';

export default styled.div`
  align-items: center;
  background:${themeColors.lightBlue}
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  margin: 30px 0 10px;

  h2 {
    margin: 0;
  }

  .size-filter select {
    font-size: 14px;
    width: 170px;
  }
`;
