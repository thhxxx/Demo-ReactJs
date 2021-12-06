import axios from "axios";

export async function fetchData(page, limit, sort, order) {
    try {
        let {data} = await axios.get(`http://localhost:2210/data?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`)
        return data
    } catch (e) {
        console.log(e)
    }
}