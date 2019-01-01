import styled from 'styled-components';
import themeColors from 'styles/theme/color';

export default styled.li`
  border: 1px solid ${themeColors.lightGrey};
  display: flex;
  flex: 1 1 290px;
  flex-direction: column;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -1px;
  margin-top: -1px;
  padding: 20px 5px;

  .sale-tag {
    background-color: ${themeColors.red};
    color: ${themeColors.white};
    display: inline-block;
    padding: 16px 21px;
  }

  .exclusive-tag {
    background-color:${themeColors.green};
    color: ${themeColors.white};
    display: inline-block;
    padding: 16px 35px;
  }

  .product {

    &-details {
      padding: 0 10px;
    }

    &-description {
      align-items: baseline;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }

    &-name {
      font-size: 17px;
      font-weight: bold;
      max-width: 170px;
    }

    &-price {
      font-size: 22px;
      font-weight: bold;
    }
  }
`;
