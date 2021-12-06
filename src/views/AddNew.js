import "../assets/css/add-new.scss"
import {useState} from "react";
import axios from "axios";

const initProduct = {
    title: "",
    status: "",
    category: "",
    price: "",
    sale: ""
}

const initStatus = [
    {
        name: "in stock",
        value: "in-stock"
    },
    {
        name: "out of stock",
        value: "out-of-stock"
    }
]

const initCategory = [
    {
        name: "fruit & vegetable",
        value: "fruit-vegetable"
    },
    {
        name: "meat & seafood",
        value: "meat-seafood"
    },
    {
        name: "breakfast",
        value: "breakfast"
    },
    {
        name: "drink",
        value: "drink"
    },
    {
        name: "bakery",
        value: "bakery"
    },
    {
        name: "frozen",
        value: "frozen"
    }
]

export const AddNew = () => {
    const [product, setProduct] = useState(initProduct)
    const [image, setImage] = useState()

    const handleInputFile = (event) => {
        const file = event.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImage(file)
    }

    const handleInput = (event) => {
        const {name, value} = event.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    const validateForm = () => {
        if (!image) {
            alert("Please select product photo!")
        } else if (!product.title) {
            alert("Please select product title!")
        } else if (!product.status) {
            alert("Please select product status!")
        } else if (!product.category) {
            alert("Please select product category!")
        } else if (isNaN(Number(product.price)) || Number(product.price) < 0 || !product.price) {
            alert("The value of the price must be a number greater than 0!")
        } else if (isNaN(Number(product.sale)) || Number(product.sale) < 0 || Number(product.sale) > 100 || !product.sale) {
            alert("The value of the sale must be a number greater than 0 and less than 100!")
        } else {
            return true
        }
    }

    const resetForm = () => {
        setProduct(initProduct)
        setImage(null)
    }

    async function addNew() {
        if (validateForm()) {
            try {
                // eslint-disable-next-line no-restricted-globals
                if (confirm("Add new products?")) {
                    await axios.post("http://localhost:2210/data", {
                        image: image.name,
                        title: product.title,
                        status: product.status,
                        category: product.category,
                        price: Number(product.price),
                        sale: Number(product.sale),
                        finalPrice: Number(((product.price / 100) * (100 - product.sale)).toFixed(2))
                    })
                }
                resetForm()
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <div className="add-new">
            <div className="item">
                <div className="form-input">
                    <input
                        type="file"
                        onChange={handleInputFile}
                    />
                </div>
            </div>
            {
                image ? <img
                    style={
                        {
                            "width": "40%",
                            "marginTop": "20px"
                        }
                    }
                    src={image.preview}
                    alt={image.name}
                /> : null
            }
            <div className="item">
                <div className="form-input">
                    <input
                        className="text-input"
                        type="text"
                        placeholder=" "
                        name="title"
                        value={product.title}
                        onChange={handleInput}
                    />
                    <label>Title</label>
                </div>
            </div>
            <div className="item grid-1-2">
                <div className="form-input">
                    <select
                        name="status"
                        value={product.status}
                        onChange={handleInput}
                    >
                        <option value="">-- Status --</option>
                        {
                            initStatus.map(value => {
                                return <option key={value.value} value={value.value}>{value.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="item grid-1-2">
                <div className="form-input">
                    <select
                        name="category"
                        value={product.category}
                        onChange={handleInput}
                    >
                        <option value="">-- Category --</option>
                        {
                            initCategory.map(value => {
                                return <option key={value.value} value={value.value}>{value.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="item">
                <div className="form-input">
                    <input
                        className="text-input"
                        type="text"
                        placeholder=" "
                        name="price"
                        value={product.price}
                        onChange={handleInput}
                    />
                    <label>Price $</label>
                </div>
                <p>Example: 7.35</p>
            </div>
            <div className="item">
                <div className="form-input">
                    <input
                        className="text-input"
                        type="text"
                        placeholder=" "
                        name="sale"
                        value={product.sale}
                        onChange={handleInput}
                    />
                    <label>Sale %</label>
                </div>
                <p>Example: 0-100</p>
            </div>
            <div className="item">
                <button onClick={addNew} className="form-button">
                    Add new
                </button>
            </div>
        </div>
    )
}