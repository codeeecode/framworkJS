//khai báo module express

const express = require("express");
const app = express();
// Khai báo mudule path 

const path = require("path");
//khai bao port
const port = process.env.PORT || 3000;
//set thư mục  chứa view phai co S o views
app.set("views", path.join(__dirname, "views"));
//set view engine (template engine)
//=> giúp đỡ code của back-end ngay trong front-end dễ hơn
//hbs: handle bar => nếu dùng view engine khác thì thay đổi giá trị này
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    let name = "Cloud Computing"
    let code = 1644
        //gửi biến  bang cach ("index",{name : name , code : code, semester : semester})
    res.render("index", { name: name, ma: code, ky: "fall 2022" });
});

app.get("/mobile", (req, res) => {
    let list = ["Iphone", "Samsung", "Oppo"]
    res.render("mobile", { mobiles: list })

})

app.get("/laptop", (req, res) => {
    let list = ["mac", "dell"]

    res.render("laptop", { laptop: list })
})

//listen port để chạy server
app.listen(port);