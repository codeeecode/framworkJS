//khai báo module express

const express = require("express");
const app = express();
// Khai báo mudule path 

const path = require("path");
//khai bao port
const port = process.env.PORT || 3000;
//set thư mục  chứa view
app.set("views", path.join(__dirname, "views"));
//set view engine (template engine)
//=> giúp đỡ code của back-end ngay trong front-end dễ hơn
//hbs: handle bar => nếu dùng view engine khác thì thay đổi giá trị này
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/mobile", (req, res) => {
    res.render("mobile")

})

app.get("/laptop", (req, res) => {
    res.render("laptop")
})

//listen port để chạy server
app.listen(port);