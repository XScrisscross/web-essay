module.exports = {
    index:(req, res) => {
        console.log(req.session.isLogin);
        res.render("index.ejs", {"status":req.session.username,"isLogin":req.session.isLogin});
    },
    login:(req, res) => {
        res.render("login.ejs", {});
    },
    register:(req, res) => {
        res.render("register.ejs", {});
    }
}