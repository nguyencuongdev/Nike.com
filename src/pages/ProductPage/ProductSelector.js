import { createSelector } from '@reduxjs/toolkit';
import * as FillterSelector from '~/layouts/Filter/FillterSelector';
import { checkProduct } from '~/helper/';
export const productListSelector = (state) => state.productList;
export const typeProductSelector = (state) => state.fillter.type;

export const productListRemainingSelector = createSelector(
    productListSelector, FillterSelector.FillterTypeSelector,
    FillterSelector.FillterSuitableSelector, FillterSelector.FillterBrandsSelector,
    FillterSelector.FillterColorsSelector, FillterSelector.FillterSizesSelector,
    FillterSelector.FillterGendersSelector, FillterSelector.FillterSortSelector,
    (productList, filterType, filterSuitable, filterBrands, filterColors, filterSizes, filterGenders, filterSort) => {

        let checkColor = false, checkSize = false, checkGender = false, checkBrand = false;
        const data = productList.filter((product) => {

            (filterColors.length > 0) ?
                checkColor = checkProduct.handlecCheckColor(product, filterColors)
                : (checkColor = true);
            (filterSizes.length > 0) ?
                checkSize = checkProduct.handlecCheckSize(product, filterSizes)
                : checkSize = true;
            (filterGenders.length > 0) ?
                checkGender = checkProduct.handlecCheckGender(product, filterGenders)
                : checkGender = true;
            (filterBrands.length > 0) ?
                checkBrand = filterBrands.includes(product.brand)
                : checkBrand = true;

            if (filterSuitable === 'All' && filterType === '') {
                return checkBrand && checkColor && checkSize && checkGender; //trả về tất cả sản phẩm của tất cả thể loại nhưng phải khớp với fillter;
            }
            else if (filterSuitable === 'All' && filterType !== '') {
                //trả về tất cả sản phẩm có type khớp với type of filter;
                return (product.type === filterType) && checkBrand && checkColor && checkSize && checkGender
            }
            else {
                //trả về tất cả sản phầm khớp với suitable và type khớp với type of filter;
                return product.suitable.includes(filterSuitable) && product.type === filterType && checkBrand && checkColor && checkSize && checkGender;
            }
        })

        if (filterSort === 'desc') {
            return data.sort((a, b) => b.price - a.price);
        } else {
            return data.sort((a, b) => a.price - b.price);
        }
    }
)

