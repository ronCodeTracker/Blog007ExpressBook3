


module.exports = (req, res) => {

    if (req.session.userId) {
        console.log("got to this place")

       

        return res.render("create", {errors2:req.flash('validationErrors2'), error2: req.flash('validationError2')});
    }


    res.redirect('/auth/login')

}

