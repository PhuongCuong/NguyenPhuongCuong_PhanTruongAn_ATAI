import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listproductsell: [
        {
            id: 1,
            name: "Bánh gỏi thập cẩm",
            img: require("../../assets/img/product/banhhoi.jpg"),
            price: "35.000đ",
            portfolio: "Sản phẩm bán chạy"
        },
        {
            id: 2,
            name: "Bún thập cẩm",
            img: require("../../assets/img/product/bunthapcam.jpg"),
            price: "35.000đ",
            portfolio: "Sản phẩm bán chạy"

        },
        {
            id: 3,
            name: "Cơm đùi gà nướng",
            img: require("../../assets/img/product/comduiganuong.jpg"),
            price: "30.000đ",
            portfolio: "Sản phẩm bán chạy"

        },
        {
            id: 4,
            name: "Cơm ba rọi nướng",
            img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
            price: "40.000đ",
            portfolio: "Sản phẩm bán chạy"

        },
        {
            id: 5,
            name: "Cơm sườn bì chả",
            img: require("../../assets/img/product/Com-Tam-Suon-Bi-Cha-Huong-Dan-Cach-Lam-Tuyet-Ngon-Bat-Vi.jpeg"),
            price: "45.000đ",
            portfolio: "Sản phẩm bán chạy"
        },
    ],
    listproduct1: [
        {
            id: 1,
            name: "Cơm ba chỉ nướng",
            img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
            price: "40.000đ",
            portfolio: "Cơm văn phòng"
        },
        {
            id: 2,
            name: "Cơm gà kho xả",
            img: require("../../assets/img/product/comgakhoxa.jpg"),
            price: "30.000đ",
            portfolio: "Cơm văn phòng"


        },
        {
            id: 3,
            name: "Cơm thịt kho trứng",
            img: require("../../assets/img/product/comthitkhotrung.jpg"),
            price: "35.000đ",
            portfolio: "Cơm văn phòng"


        },
        {
            id: 4,
            name: "Cơm canh khổ qua",
            img: require("../../assets/img/product/comcanhkhoqua.jpg"),
            price: "35.000đ",
            portfolio: "Cơm văn phòng"
        },
        {
            id: 5,
            name: "Cơm sườn cọng nướng",
            img: require("../../assets/img/product/comsuoncongnuong.jpg"),
            price: "40.000đ",
            portfolio: "Cơm văn phòng"

        },
        {
            id: 6,
            name: "Cơm đùi gà",
            img: require("../../assets/img/product/comduiganuong.jpg"),
            price: "35.000đ",
            portfolio: "Cơm văn phòng"

        },
        {
            id: 7,
            name: "Cơm heo quay",
            img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
            price: "35.000đ",
            portfolio: "Cơm văn phòng"


        },
        {
            id: 8,
            name: "Cơm sườn trứng",
            img: require("../../assets/img/product/comsuontrung.jpg"),
            price: "30.000đ",
            portfolio: "Cơm văn phòng"


        },
        {
            id: 9,
            name: "Cơm sườn chả trứng",
            img: require("../../assets/img/product/comsuonchatrung.jpg"),
            price: "40.000đ",
            portfolio: "Cơm văn phòng"


        },
        {
            id: 10,
            name: "Cơm sườn bì trứng",
            img: require("../../assets/img/product/Com-Tam-Suon-Bi-Cha-Huong-Dan-Cach-Lam-Tuyet-Ngon-Bat-Vi.jpeg"),
            price: "45.000đ",
            portfolio: "Cơm văn phòng"

        },
        {
            id: 11,
            name: "Cơm sườn nướng",
            img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
            price: "40.000đ",
            portfolio: "Cơm văn phòng"


        },
        {
            id: 12,
            name: "Cơm má đùi gà nướng",
            img: require("../../assets/img/product/Com-Tam-Suon-Bi-Cha-Huong-Dan-Cach-Lam-Tuyet-Ngon-Bat-Vi.jpeg"),
            price: "45.000đ",
            portfolio: "Cơm văn phòng"
        },
    ],
    listproduct2: [
        {
            id: 1,
            name: "Bún thị nướng",
            img: require("../../assets/img/product/bunthinuong.jpg"),
            price: "40.000đ",
            portfolio: "BÚN THỊT NƯỚNG"
        },
        {
            id: 2,
            name: "Bún thịt nướng chả giò",
            img: require("../../assets/img/product/bunthinuongchagio.jpg"),
            price: "30.000đ",
            portfolio: "BÚN THỊT NƯỚNG"



        },
        {
            id: 3,
            name: "Bún thịt nem nướng chả giò",
            img: require("../../assets/img/product/bunthinuongnemnuong.jpg"),
            price: "35.000đ",
            portfolio: "BÚN THỊT NƯỚNG"



        },
        {
            id: 4,
            name: "Bún nem nướng",
            img: require("../../assets/img/product/bunnemnuong.jpg"),
            price: "35.000đ",
            portfolio: "BÚN THỊT NƯỚNG"

        },
        {
            id: 5,
            name: "Bún chả giò",
            img: require("../../assets/img/product/bunchagio.jpg"),
            price: "40.000đ",
            portfolio: "BÚN THỊT NƯỚNG"


        },
        {
            id: 6,
            name: "Bún thịt nướng nem nướng",
            img: require("../../assets/img/product/bunthinuongnemnuong.jpg"),
            price: "35.000đ",
            portfolio: "BÚN THỊT NƯỚNG"

        },
        {
            id: 7,
            name: "Bún thập cẩm",
            img: require("../../assets/img/product/bunthapcam.jpg"),
            price: "35.000đ",
            portfolio: "BÚN THỊT NƯỚNG"
        },
    ],
    listproduct3: [
        {
            id: 1,
            name: "Bánh hỏi thịt nướng",
            img: require("../../assets/img/product/banhhoithinuong.jpg"),
            price: "40.000đ",
            portfolio: "BÁNH HỎI"
        },
        {
            id: 2,
            name: "Bánh hỏi thập cẩm",
            img: require("../../assets/img/product/bunthapcam.jpg"),
            price: "30.000đ",
            portfolio: "BÁNH HỎI"
        },
        {
            id: 3,
            name: "Bánh hỏi thịt nướng nem nướng",
            img: require("../../assets/img/product/banhhoithinuongnemnuong.jpg"),
            price: "35.000đ",
            portfolio: "BÁNH HỎI"
        },
        {
            id: 4,
            name: "Bánh hỏi thịt nướng chả giò",
            img: require("../../assets/img/product/banhhoithinuongchagio.jpg"),
            price: "35.000đ",
            portfolio: "BÁNH HỎI"

        },
        {
            id: 5,
            name: "Bánh hỏi nem nướng chả giò",
            img: require("../../assets/img/product/BanhHoiNemNuongchagio.jpg"),
            price: "40.000đ",
            portfolio: "BÁNH HỎI"

        },
        {
            id: 6,
            name: "Bánh hỏi chả giò",
            img: require("../../assets/img/product/banhhoichagio.jpg"),
            price: "35.000đ",
            portfolio: "BÁNH HỎI"

        },
        {
            id: 7,
            name: "Bánh hỏi nem nướng",
            img: require("../../assets/img/product/banhhoinemnuong.jpg"),
            price: "35.000đ",
            portfolio: "BÁNH HỎI"
        },
    ],
    listproduct5: [
        {
            id: 1,
            name: "Rau má đậu xanh",
            img: require("../../assets/img/product/rau-ma-dau-xanh-thumbnail.jpg"),
            price: "10.000đ",
            portfolio: "NƯỚC GIẢI KHÁT"
        },
        {
            id: 2,
            name: "Cam ép",
            img: require("../../assets/img/product/camep.jpg"),
            price: "15.000đ",
            portfolio: "NƯỚC GIẢI KHÁT"

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