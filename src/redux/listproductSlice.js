import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listproductsell: [
    {
      id: 1,
      name: "Bánh gỏi thập cẩm",
      img: require("../../assets/img/product/banhhoi.jpg"),
      price: "35.000đ",
      portfolio: "Sản phẩm bán chạy",
      description:
        "Bánh gỏi thập cẩm là một món ăn truyền thống với bánh gỏi mềm, nhân thập cẩm gồm nhiều loại thịt, tôm, rau sống và gia vị. Thường ăn kèm với nước mắm pha chua ngọt.",
    },
    {
      id: 2,
      name: "Bún thập cẩm",
      img: require("../../assets/img/product/bunthapcam.jpg"),
      price: "35.000đ",
      portfolio: "Sản phẩm bán chạy",
      description:
        "Bún thập cẩm là sự kết hợp của bún mềm mịn với nhiều loại thực phẩm như thịt, chả, rau sống và nước mắm, tạo nên một bữa ăn phong phú và đa dạng về hương vị.",
    },
    {
      id: 3,
      name: "Cơm đùi gà nướng",
      img: require("../../assets/img/product/comduiganuong.jpg"),
      price: "30.000đ",
      portfolio: "Sản phẩm bán chạy",
      description:
        "Cơm đùi gà nướng bao gồm đùi gà nướng thơm ngon, thường được kết hợp với cơm trắng và các loại rau sống, tạo nên một bữa ăn đơn giản và ngon miệng.",
    },
    {
      id: 4,
      name: "Cơm ba rọi nướng",
      img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
      price: "40.000đ",
      portfolio: "Sản phẩm bán chạy",
      description:
        "Cơm ba rọi nướng là một món cơm truyền thống với ba chỉ thịt nướng thơm ngon, thường được kết hợp với cơm trắng và rau sống.",
    },
    {
      id: 5,
      name: "Cơm sườn bì chả",
      img: require("../../assets/img/product/Com-Tam-Suon-Bi-Cha-Huong-Dan-Cach-Lam-Tuyet-Ngon-Bat-Vi.jpeg"),
      price: "45.000đ",
      portfolio: "Sản phẩm bán chạy",
      description:
        "Cơm sườn bì chả là sự kết hợp của sườn nướng, bì, chả và trứng, thường được kết hợp với cơm trắng và rau sống, tạo nên một bữa ăn phong phú và đa dạng về hương vị.",
    },
  ],
  listproduct1: [
    {
      id: 1,
      name: "Cơm ba chỉ nướng",
      img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
      price: "40.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm ba chỉ nướng là một món cơm hấp dẫn với ba chỉ thịt nướng thơm ngon, thường được kết hợp với cơm trắng và các loại rau sống.",
    },
    {
      id: 2,
      name: "Cơm gà kho xả",
      img: require("../../assets/img/product/comgakhoxa.jpg"),
      price: "30.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm gà kho xả là một món cơm truyền thống với gà kho thơm ngon, hòa quyện vị xả thơm lừng, thường ăn kèm với cơm trắng.",
    },
    {
      id: 3,
      name: "Cơm thịt kho trứng",
      img: require("../../assets/img/product/comthitkhotrung.jpg"),
      price: "35.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm thịt kho trứng bao gồm thịt kho truyền thống kèm theo trứng luộc, thường được ăn cùng với cơm trắng và rau sống.",
    },
    {
      id: 4,
      name: "Cơm canh khổ qua",
      img: require("../../assets/img/product/comcanhkhoqua.jpg"),
      price: "35.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm canh khổ qua bao gồm món canh đơn giản từ khổ qua, thường được kết hợp với cơm trắng, tạo vị ngon và bổ dưỡng.",
    },
    {
      id: 5,
      name: "Cơm sườn cọng nướng",
      img: require("../../assets/img/product/comsuoncongnuong.jpg"),
      price: "40.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm sườn cọng nướng gồm sườn nướng thơm ngon, thường ăn kèm với cơm trắng và rau sống, tạo một bữa ăn phong phú.",
    },
    {
      id: 6,
      name: "Cơm đùi gà",
      img: require("../../assets/img/product/comduiganuong.jpg"),
      price: "35.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm đùi gà bao gồm đùi gà nướng thơm ngon, thường được kết hợp với cơm trắng và các loại rau sống.",
    },
    {
      id: 7,
      name: "Cơm heo quay",
      img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
      price: "35.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm heo quay bao gồm thịt heo quay giòn rụm, thường ăn kèm với cơm trắng và một số loại rau sống.",
    },
    {
      id: 8,
      name: "Cơm sườn trứng",
      img: require("../../assets/img/product/comsuontrung.jpg"),
      price: "30.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm sườn trứng là một sự kết hợp giữa sườn nướng và trứng luộc, thường ăn kèm với cơm trắng và rau sống.",
    },
    {
      id: 9,
      name: "Cơm sườn chả trứng",
      img: require("../../assets/img/product/comsuonchatrung.jpg"),
      price: "40.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm sườn chả trứng bao gồm sườn nướng, chả và trứng, thường được kết hợp với cơm trắng và rau sống.",
    },
    {
      id: 10,
      name: "Cơm sườn bì trứng",
      img: require("../../assets/img/product/Com-Tam-Suon-Bi-Cha-Huong-Dan-Cach-Lam-Tuyet-Ngon-Bat-Vi.jpeg"),
      price: "45.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm sườn bì trứng là sự kết hợp của sườn nướng, bì, trứng, thường được ăn kèm với cơm trắng và một số loại rau sống.",
    },
    {
      id: 11,
      name: "Cơm sườn nướng",
      img: require("../../assets/img/product/com-ba-roi-nuong.jpg"),
      price: "40.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm sườn nướng bao gồm sườn nướng thơm ngon, thường được kết hợp với cơm trắng và rau sống.",
    },
    {
      id: 12,
      name: "Cơm má đùi gà nướng",
      img: require("../../assets/img/product/Com-Tam-Suon-Bi-Cha-Huong-Dan-Cach-Lam-Tuyet-Ngon-Bat-Vi.jpeg"),
      price: "45.000đ",
      portfolio: "Cơm văn phòng",
      description:
        "Cơm má đùi gà nướng gồm má đùi gà nướng thơm ngon, thường được kết hợp với cơm trắng và rau sống.",
    },
  ],
  listproduct2: [
    {
      id: 1,
      name: "Bún thị nướng",
      img: require("../../assets/img/product/bunthinuong.jpg"),
      price: "40.000đ",
      portfolio: "BÚN THỊT NƯỚNG",
      description:
        "Bún thịt nướng là một món ăn truyền thống với sợi bún mềm, thơm phức hợp với thịt nướng thơm ngon, các loại rau sống và nước mắm chua ngọt.",
    },
    {
      id: 2,
      name: "Bún thịt nướng chả giò",
      img: require("../../assets/img/product/bunthinuongchagio.jpg"),
      price: "30.000đ",
      portfolio: "BÚN THỊT NƯỚNG",
      description:
        "Bún thịt nướng chả giò kết hợp giữa vị thơm ngon của thịt nướng và hương vị giòn rụm của chả giò, thêm hấp dẫn cho bữa ăn.",
    },
    {
      id: 3,
      name: "Bún thịt nem nướng chả giò",
      img: require("../../assets/img/product/bunthinuongnemnuong.jpg"),
      price: "35.000đ",
      portfolio: "BÚN THỊT NƯỚNG",
      description:
        "Bún thịt nem nướng chả giò gồm bún mềm mịn, thịt nem nướng thơm ngon, cùng với hương vị đặc trưng và giòn rụm của chả giò.",
    },
    {
      id: 4,
      name: "Bún nem nướng",
      img: require("../../assets/img/product/bunnemnuong.jpg"),
      price: "35.000đ",
      portfolio: "BÚN THỊT NƯỚNG",
      description:
        "Bún nem nướng gồm bún mềm mịn kèm theo nem nướng thơm ngon, thường được ăn cùng với rau sống và nước mắm chua ngọt.",
    },
    {
      id: 5,
      name: "Bún chả giò",
      img: require("../../assets/img/product/bunchagio.jpg"),
      price: "40.000đ",
      portfolio: "BÚN THỊT NƯỚNG",
      description:
        "Bún chả giò là sự kết hợp giữa sợi bún mềm mịn với chả giò giòn rụm, tạo nên hương vị độc đáo và hấp dẫn.",
    },
    {
      id: 6,
      name: "Bún thịt nướng nem nướng",
      img: require("../../assets/img/product/bunthinuongnemnuong.jpg"),
      price: "35.000đ",
      portfolio: "BÚN THỊT NƯỚNG",
      description:
        "Bún thịt nướng nem nướng gồm bún mềm mịn, thịt nướng thơm ngon và nem nướng giòn rụm, tạo nên một hương vị đặc trưng.",
    },
    {
      id: 7,
      name: "Bún thập cẩm",
      img: require("../../assets/img/product/bunthapcam.jpg"),
      price: "35.000đ",
      portfolio: "BÚN THỊT NƯỚNG",
      description:
        "Bún thập cẩm là sự pha trộn hài hòa giữa nhiều loại thực phẩm như thịt, chả, rau sống và nước mắm, tạo nên một bữa ăn phong phú và đa dạng về hương vị.",
    },
  ],
  listproduct3: [
    {
      id: 1,
      name: "Bánh hỏi thịt nướng",
      img: require("../../assets/img/product/banhhoithinuong.jpg"),
      price: "40.000đ",
      portfolio: "BÁNH HỎI",
      description:
        "Bánh hỏi thịt nướng là một món ăn truyền thống Việt Nam, bao gồm những sợi bánh hỏi mỏng và dai, kèm theo miếng thịt nướng thơm ngon, cùng các loại rau sống và nước mắm pha chua ngọt.",
    },
    {
      id: 2,
      name: "Bánh hỏi thập cẩm",
      img: require("../../assets/img/product/bunthapcam.jpg"),
      price: "30.000đ",
      portfolio: "BÁNH HỎI",
      description:
        "Bánh hỏi thập cẩm là sự kết hợp của bánh hỏi mềm mịn cùng với nhiều loại gia vị, thập cẩm từ thịt, chả, rau sống và nước mắm pha chua ngọt.",
    },
    {
      id: 3,
      name: "Bánh hỏi thịt nướng nem nướng",
      img: require("../../assets/img/product/banhhoithinuongnemnuong.jpg"),
      price: "35.000đ",
      portfolio: "BÁNH HỎI",
      description:
        "Bánh hỏi thịt nướng nem nướng kết hợp giữa sợi bánh hỏi mềm mịn, thịt nướng thơm ngon và nem nướng giòn tan, tạo nên hương vị đặc trưng và hấp dẫn.",
    },
    {
      id: 4,
      name: "Bánh hỏi thịt nướng chả giò",
      img: require("../../assets/img/product/banhhoithinuongchagio.jpg"),
      price: "35.000đ",
      portfolio: "BÁNH HỎI",
      description:
        "Bánh hỏi thịt nướng chả giò kết hợp vị thơm ngon của thịt nướng, cùng với hương vị giòn rụm của chả giò, là một sự lựa chọn tuyệt vời cho bữa ăn.",
    },
    {
      id: 5,
      name: "Bánh hỏi nem nướng chả giò",
      img: require("../../assets/img/product/BanhHoiNemNuongchagio.jpg"),
      price: "40.000đ",
      portfolio: "BÁNH HỎI",
      description:
        "Bánh hỏi nem nướng chả giò là sự kết hợp độc đáo giữa nem nướng thơm ngon và chả giò giòn rụm, ăn kèm với sợi bánh hỏi mềm mịn.",
    },
    {
      id: 6,
      name: "Bánh hỏi chả giò",
      img: require("../../assets/img/product/banhhoichagio.jpg"),
      price: "35.000đ",
      portfolio: "BÁNH HỎI",
      description:
        "Bánh hỏi chả giò là sự kết hợp của sợi bánh hỏi mềm mịn và chả giò giòn rụm, mang đến hương vị thơm ngon và hấp dẫn.",
    },
    {
      id: 7,
      name: "Bánh hỏi nem nướng",
      img: require("../../assets/img/product/banhhoinemnuong.jpg"),
      price: "35.000đ",
      portfolio: "BÁNH HỎI",
      description:
        "Bánh hỏi nem nướng là sự pha trộn hài hòa giữa sợi bánh hỏi mềm mịn và nem nướng thơm ngon, thường ăn kèm với rau sống và nước mắm.",
    },
  ],
  listproduct5: [
    {
      id: 1,
      name: "Rau má đậu xanh",
      img: require("../../assets/img/product/rau-ma-dau-xanh-thumbnail.jpg"),
      price: "10.000đ",
      portfolio: "NƯỚC GIẢI KHÁT",
      description:
        "Rau má đậu xanh là một loại nước giải khát tự nhiên, kết hợp giữa rau má tươi mát và đậu xanh giàu dinh dưỡng, tạo nên một thức uống thơm ngon và bổ dưỡng.",
    },
    {
      id: 2,
      name: "Cam ép",
      img: require("../../assets/img/product/camep.jpg"),
      price: "15.000đ",
      portfolio: "NƯỚC GIẢI KHÁT",
      description:
        "Cam ép là một loại nước giải khát được làm từ quả cam tươi, giữ lại đầy đủ hương vị và dinh dưỡng của trái cây, cung cấp năng lượng và vitamin cho cơ thể.",
    },
  ],
  listproduct6: [
    {
      id: 1,
      name: "Dưa chua",
      img: require("../../assets/img/product/duachua.jpg"),
      price: "10,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Dưa chua giúp cân bằng hương vị và tạo cảm giác sảng khoái, dễ chịu khi ăn cùng cơm sườn, bì chả.",
    },
    {
      id: 2,
      name: "Rau sống",
      img: require("../../assets/img/product/rausong.jpg"),
      price: "5,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Bắp cải, rau sống như rau thơm, xà lách, rau mùi... là lựa chọn tốt để cung cấp độ tươi ngon và cung cấp chất xơ.",
    },
    {
      id: 3,
      name: "Salad đu đủ cà rốt",
      img: require("../../assets/img/product/saladcarot.jpg"),
      price: "20,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Một món salad từ đu đủ và cà rốt cũng là một sự kết hợp tuyệt vời.",
    },
    {
      id: 4,
      name: "Bánh tráng trộn",
      img: require("../../assets/img/product/banhtrangtron.jpg"),
      price: "15,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Bánh tráng trộn với các loại gia vị, đậu phộng, rau sống, tạo ra một món ăn vừa ngon, vừa thú vị.",
    },
    {
      id: 5,
      name: "Nước mắm pha chua ngọt",
      img: require("../../assets/img/product/nuocmamchuangot.jpg"),
      price: "8,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Nước mắm pha chua ngọt là một loại nước chấm phổ biến, thêm hương vị đặc trưng và hấp dẫn cho món cơm sườn, bì chả.",
    },
    {
      id: 6,
      name: "Trứng ốp la",
      img: require("../../assets/img/product/trungopla.jpg"),
      price: "12,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Trứng ốp la có thể là sự bổ sung tuyệt vời cho bữa ăn của bạn.",
    },
    {
      id: 7,
      name: "Nộm bò khô",
      img: require("../../assets/img/product/nombo.jpg"),
      price: "25,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Nộm bò khô có thể cung cấp vị chua, ngọt, cay và ngon miệng.",
    },
    {
      id: 8,
      name: "Rau muống xào tỏi",
      img: require("../../assets/img/product/raumuong.jpg"),
      price: "6,000 VND",
      portfolio: "MÓN THÊM",
      description: "Một món rau xào nhẹ nhàng, giúp cân bằng khẩu phần ăn.",
    },
    {
      id: 9,
      name: "Canh chua",
      img: require("../../assets/img/product/canhchua.jpg"),
      price: "18,000 VND",
      portfolio: "MÓN THÊM",
      description: "Canh chua sẽ tạo sự cân bằng vị chua ngọt cho bữa ăn.",
    },
    {
      id: 10,
      name: "Bún/Phở",
      img: require("../../assets/img/product/bunpho.jpg"),
      price: "30,000 VND",
      portfolio: "MÓN THÊM",
      description:
        "Một tô bún hay phở sẽ là lựa chọn tốt cho ai muốn thay đổi khẩu phần cơm thông thường.",
    },
  ],
};

export const counterSlice = createSlice({
  name: "listproductsell",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
