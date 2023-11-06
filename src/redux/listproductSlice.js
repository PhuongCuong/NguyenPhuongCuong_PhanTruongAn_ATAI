import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listproductsell: [
        {
            id: 1,
            name: "Bánh gỏi thập cẩm",
            img: require("../../assets/img/product/banhhoi.jpg"),
            price: "35.000đ",
        },
        {
            id: 2,
            name: "Bún thập cẩm",
            img: require("../../assets/img/product/bunthapcam.jpg"),
            price: "35.000đ",
        },
        {
            id: 3,
            name: "Cơm đùi gà nướng",
            img: require("../../assets/img/product/comduiganuong.jpg"),
            price: "30.000đ",
        },
        {
            id: 4,
            name: "Cơm ba rọi nướng",
            img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
            price: "40.000đ",
        },
        {
            id: 5,
            name: "Cơm sườn bì chả",
            img: require("../../assets/img/product/Com-Tam-Suon-Bi-Cha-Huong-Dan-Cach-Lam-Tuyet-Ngon-Bat-Vi.jpeg"),
            price: "45.000đ",
        },
    ]
}

export const counterSlice = createSlice({
    name: "listproductsell",
    initialState,
    reducers: {

    }
})


export default counterSlice.reducer;