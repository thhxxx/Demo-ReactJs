import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getSortValue} from "../reducers/SortReducer";

const initSort = [
    {
        name: "sort by price decrease",
        value: "price-decrease"
    },
    {
        name: "sort by price ascending",
        value: "price-ascending"
    }
]

export const Sort = () => {
    const [selected, setSelected] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSortValue({selected}))
    }, [dispatch, selected])

    return (
        <div className="sort-product">
            <div className="form-input">
                <select onChange={event => setSelected(event.target.value)}>
                    <option value="">-- Sort by --</option>
                    {
                        initSort.map(value => {
                            return <option key={value.name} value={value.value}>{value.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}