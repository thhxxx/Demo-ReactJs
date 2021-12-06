import "../assets/css/products.scss"
import {useEffect, useState} from "react";
import {fetchData} from "../assets/js/callAPI";
import Pagination from "react-js-pagination";
import {Sort} from "./Sort";
import {useSelector} from "react-redux";

export const Products = () => {
    const [product, setProduct] = useState([])
    const [allProduct, setAllProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 2

    const [sortValue, setSortValue] = useState("")
    const [orderValue, setOrderValue] = useState("")
    const isSelected = useSelector(state => state.SortReducer.isSelected)

    useEffect(() => {

        if (isSelected === "price-decrease") {
            setSortValue("finalPrice")
            setOrderValue("desc")
        } else if (isSelected === "price-ascending") {
            setSortValue("finalPrice")
            setOrderValue("asc")
        } else {
            setSortValue("")
            setOrderValue("")
        }

        fetchData(currentPage, perPage, sortValue, orderValue).then(data => {
            setProduct(data)
        })
    }, [currentPage, sortValue, orderValue, isSelected])

    useEffect(() => {
        fetchData().then(data => {
            setAllProduct(data)
        })
    }, [])

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>

            <Sort/>

            <div className="products">
                {
                    product.map(value => {
                        return <div className="item" key={value.id}>
                            <div className="image">
                                <img src={"https://thhxxx.github.io/" + value.image}
                                     alt={value.image}/>
                            </div>
                            <h1>
                                {value.title}
                            </h1>
                            {
                                value.status === "in-stock"
                                    ? <h2>{value.status}</h2>
                                    : <h2><span>{value.status}</span></h2>
                            }
                            {
                                value.sale !== 0
                                    ? <h3>
                                        <s>${value.price.toFixed(2)}</s> ${value.finalPrice.toFixed(2)}
                                    </h3>
                                    : <h3>
                                        ${value.finalPrice.toFixed(2)}
                                    </h3>
                            }
                            {
                                value.sale !== 0 ? <h4>{value.sale}%</h4> : null
                            }
                            <button disabled={value.status === "Out of stock"} className="form-button">add to cart
                            </button>
                        </div>
                    })
                }
            </div>

            <Pagination
                activePage={currentPage}
                itemsCountPerPage={perPage}
                totalItemsCount={allProduct.length}
                pageRangeDisplayed={5}
                onChange={onPageChange}
            />

        </div>
    )
}