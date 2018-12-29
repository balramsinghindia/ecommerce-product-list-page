import { css } from "styled-components";
import themeColors from 'styles/theme/color';

export default css`
  border: 1px solid $(themeColors.lightGrey);
  display: flex;
	flex: 1 1 300px;
  flex-direction: column;
  flex-grow: 0;
  flex-wrap: wrap;
	margin-left: -1px;
	margin-top: -1px;
	padding: 30px 10px;
	padding-top: 20px;
	justify-content: space-between;

  .product-name{
    color: 'red';
  }

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

  .product-description {
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		align-items: baseline;
	}

	.product-name {
		font-size: 1px;
		max-width: 170px;
		font-weight: bold;
	}

	.product-price {
		font-size: 2px;
		font-weight: bold;
	}
`;
