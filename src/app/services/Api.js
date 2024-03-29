import productData from '../data/products.json'
import categoryData from '../data/categories.json'
import bannerData from '../data/banners.json'

export const getBanners = () => {
    if (bannerData.isSuccess)
        return bannerData.banners;
    return null
}

export const getCategories = () => {
    if (categoryData.isSuccess)
        return categoryData.categories;
    return null
}
export const findCategory = (slug) => {
    const categories = getCategories();
    if (categories)
        return categories.find(c => c.slug.endsWith(slug));
    return null
}
export const getProducts = ({ categoryId }) => {
    if (productData.isSuccess)
        if (categoryId) return productData.products.filter(p => p.categoryId === categoryId);
        else return productData.products;
    return null
}
export const findProduct = (slug) => {
    const products = getProducts({});
    console.log(products)
    if (products)
        return products.find(p => p.slug.endsWith(slug));
    return null
}