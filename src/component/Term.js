import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
const Term = ({ navigation }) => {
  const [value, setValue] = useState("");
  const handleMouseLeave = () => {
    setValue("");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View>
        <Text style={styles.title}>1. Điều khoản</Text>
        <Text style={styles.content}>
          Khi quý khách hàng truy cập vào app và website của chúng tôi có nghĩa
          là quý khách đồng ý với các điều khoản này. Trang web có quyền thay
          đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua
          bán hàng hóa này, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay
          khi được đăng trên trang web mà không cần thông báo trước. Và khi quý
          khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản
          này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi
          đó.
        </Text>
        <Text style={styles.content}>
          Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay
          đổi của chúng tôi.
        </Text>
      </View>

      <View>
        <Text style={styles.title}>2. Hướng dẫn sử dụng app và website</Text>
        <Text style={styles.content}>
          Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc
          truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách
          hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua
          bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.
        </Text>
      </View>

      <View>
        <Text style={styles.title}>3. Thanh toán an toàn và tiện lợi</Text>
        <Text style={styles.content}>
          Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa
          chọn áp dụng phương thức phù hợp:
        </Text>
        <Text style={styles.content}>
          Cách 1: Thanh toán sau (COD – giao hàng và thu tiền tận nơi)
        </Text>
        <Text style={styles.content}>
          Cách 2: Thanh toán chuyển khoản ngân hàng
        </Text>
      </View>
      <Text style={{ fontSize: 25, fontWeight: 700, alignSelf: "center" }}>
        KẾT NỐI VỚI CHÚNG TÔI
      </Text>
      <View style={styles.socialIcons}>
        <View style={styles.iconOut}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: value === "facebook" ? "#1877f2" : "#eee",
              justifyContent: "center",
              borderColor: "#eee",
              borderRadius: 50,
              borderWidth: 1,
            }}
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
            onMouseEnter={() => setValue("facebook")}
            onMouseLeave={handleMouseLeave}
          >
            <Icon
              name="facebook"
              size={20}
              style={{
                padding: 10,
                alignSelf: "center",
                color: value === "facebook" ? "white" : "black",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconOut}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: value === "google" ? "#FF6666" : "#eee",
              justifyContent: "center",
              borderColor: "#eee",
              borderRadius: 50,
              borderWidth: 1,
            }}
            onPress={() => {
              Linking.openURL("https://www.google.com/");
            }}
            onMouseEnter={() => setValue("google")}
            onMouseLeave={handleMouseLeave}
          >
            <Icon
              name="google-"
              size={20}
              style={{
                padding: 10,
                alignSelf: "center",
                color: value === "google" ? "white" : "black",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconOut}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: value === "instagram" ? "#fb02c7" : "#eee",
              justifyContent: "center",
              borderColor: "#eee",
              borderRadius: 50,
              borderWidth: 1,
            }}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/");
            }}
            onMouseEnter={() => setValue("instagram")}
            onMouseLeave={handleMouseLeave}
          >
            <Icon
              name="instagram"
              size={20}
              style={{
                padding: 10,
                alignSelf: "center",
                color: value === "instagram" ? "white" : "black",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconOut}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: value === "youtube" ? "#FF0000" : "#eee",
              justifyContent: "center",
              borderColor: "#eee",
              borderRadius: 50,
              borderWidth: 1,
            }}
            onPress={() => {
              Linking.openURL("https://www.youtube.com/");
            }}
            onMouseEnter={() => setValue("youtube")}
            onMouseLeave={handleMouseLeave}
          >
            <Icon
              name="youtube"
              size={20}
              style={{
                padding: 10,
                alignSelf: "center",
                color: value === "youtube" ? "white" : "black",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.iconOut}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: value === "twitter" ? "#0d94be" : "#eee",
              justifyContent: "center",
              borderColor: "#eee",
              borderRadius: 50,
              borderWidth: 1,
            }}
            onPress={() => {
              Linking.openURL("https://twitter.com/");
            }}
            onMouseEnter={() => setValue("twitter")}
            onMouseLeave={handleMouseLeave}
          >
            <Icon
              name="twitter"
              size={20}
              style={{
                padding: 10,
                alignSelf: "center",
                color: value === "twitter" ? "white" : "black",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
export default Term;
