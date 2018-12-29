import styled from "styled-components";
import themeColors from 'styles/theme/color';

export default styled.div`
  align-items: center;
  background:${themeColors.lightBlue}
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  margin: 25px 18px 10px 16px;

  h2 {
    margin: 0;
  }
`;
