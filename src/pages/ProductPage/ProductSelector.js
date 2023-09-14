import { createSelector } from '@reduxjs/toolkit';
import * as FillterSelector from '~/layouts/Filter/FillterSelector';
import { checkProduct } from '~/helper/';
export const productListSelector = (state) => state.productList;
export const typeProductSelector = (state) => state.fillter.type;

export const productListRemainingSelector = createSelector(
    productListSelector, FillterSelector.FillterTypeSelector,
    FillterSelector.FillterSuitableSelector, FillterSelector.FillterBrandsSelector,
    FillterSelector.FillterColorsSelector, FillterSelector.FillterSizesSelector,
    FillterSelector.FillterGendersSelector,
    (productList, type, suitable, brand, colors, sizes, gender) => {

        let checkColor = false, checkSize = false, checkGender = false, checkBrand = false;
        const data = productList.filter((product) => {

            (colors.length > 0) ?
                checkColor = checkProduct.handlecCheckColor(product, colors)
                : (checkColor = true);
            (sizes.length > 0) ?
                checkSize = checkProduct.handlecCheckSize(product, sizes)
                : checkSize = true;
            (gender.length > 0) ?
                checkGender = checkProduct.handlecCheckGender(product, gender)
                : checkGender = true;
            (brand.length > 0) ?
                checkBrand = brand.includes(product.brand)
                : checkBrand = true;

            if (suitable === 'All' && type === '') {
                return checkBrand && checkColor && checkSize && checkGender; //trả về tất cả sản phẩm của tất cả thể loại nhưng phải khớp với fillter;
            }
            else if (suitable === 'All' && type !== '') {
                //trả về tất cả sản phẩm có type khớp với type of filter;
                return (product.type === type) && checkBrand && checkColor && checkSize && checkGender
            }
            else {
                //trả về tất cả sản phầm khớp với suitable và type khớp với type of filter;
                return product.suitable.includes(suitable) && product.type === type && checkBrand && checkColor && checkSize && checkGender;
            }
        })

        return data.sort((a, b) => Math.random() - 0.5);
    }
)

