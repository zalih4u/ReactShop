import * as ProductDao from "../../DAO/Products"

export default {
    state: {
        loading: true,
        products: [],
        caourosil: []
    },
    reducers: {
        setProducts(state, products) {
            return {
                ...state,
                loading: false,
                products: products
            }
        },
        setCaourosil(state, caourosil) {
            return {
                ...state,
                loading: false,
                caourosil: caourosil
            }
        },
    },
    effects: (dispatch) => ({
        async getProducts(payload) {
            try {
                let products = await ProductDao.getProducts()
                this.setProducts(products)
            } catch (e) {
                // Analitics.log(e)
                console.log(e)
            }
            return
        },
        async getCaourosil(payload) {
            try {
                let caourosil = await ProductDao.getCaourosil()
                this.setCaourosil(caourosil)
            } catch (e) {
                // Analitics.log(e)
                console.log(e)
            }
            return
        }
    })
}