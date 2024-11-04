const BASE_URL = import.meta.env.VITE_LOCAL_URL

export const URLS = {
    BYCATEGORY: BASE_URL + 'products/category/',
    PRODUCTDETAILS: BASE_URL + 'products/get/',
    ADDTOWISHLIST: BASE_URL + 'products/wishlist/',
}