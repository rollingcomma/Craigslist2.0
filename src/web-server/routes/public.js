const express = require("express");
const router = express.Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const urlbase = "http://99.79.9.84:8080";

const passport = require("passport");
require("../utilities/passport")(passport);

module.exports = function() {
  router.get("/", (req, res) => {
    Promise.all([
      axios.get(urlbase + "/category"),
      axios.get(urlbase + "/province")
    ])
    .then(responses => {
      if (responses[0].data && responses[1].data) {
        responses[0].data.map((category) => { category.sub_categories = JSON.parse(category.sub_categories) })
        const header = req.user ? 'private-header' : 'public-header'
        const message = req.query.msg || null
        res.render("pages/index",
        {
          title: "Index",
          css: "index.css",
          label: "search",
          header: header,
          category: responses[0].data,
          province: responses[1].data,
          message: message
        });
      } else {
        // console.log("Error:", err.message);
        res.status(500).send("oops, something is wrong");
      }  
    })
    .catch(err=> {
      console.log(err.message);
      res.status(500).send("oops, something is wrong");
    })
  });

  router.get("/posts", (req, res) => {
    Promise.all([
      axios.get(urlbase + "/category"),
      axios.get(urlbase + "/province"),
      axios.get(urlbase + "/posts")
    ])
    .then(responses => {
      responses[0].data.map((category) => { category.sub_categories = JSON.parse(category.sub_categories) })
      responses[2].data.map((listing) => { listing.image_list = JSON.parse(listing.image_list) })
      const header = req.user ? 'private-header' : 'public-header'
      const msg = req.query.msg || null
      res.render("pages/listing",
        {
          title: "Listings",
          css: "listings.css",
          label: "search",
          search:"",
          header: header,
          category: responses[0].data,
          province: responses[1].data,
          message: msg,
          listings: responses[2].data
        }); 
      })
    .catch(err => {
      console.log("Error:", err.message);
      res.status(500).send("oops, something is wrong");
    })
  })

  //get a user's public profile
  router.get('/user/:id', (req, res) => {
    userId = res['req']['user']['id'];
    console.log("current users id:", userId)
    if (req.user && req.user.id === req.params.id) res.redirect("/api/users/account")
    axios.get(`${urlbase}/users/${userId}`)
      // axios.get(urlbase + '/users/32')
      .then((response) => {
        const {
          username,
          email,
          average_rating,
          is_verified
        } = response['data'][0];
        console.log(userId);
        axios.get(`http://99.79.9.84:8080/ratings/${userId}`)
          // axios.get('http://99.79.9.84:8080/ratings/32')
          .then((response) => {
            // console.log("my response", response)
            let ratings = response['data'];
            console.log(ratings)
            res.render('pages/userprofile', {
              css: "index.css",
              username: username,
              email: email,
              average_rating: average_rating,
              is_verified: is_verified,
              ratings: ratings,
              show_personal_listings: false
            })
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        console.log(err)
      })
  })

  router.post("/signup", (req, res) => {
    //form data validation
    if (req.body.username && req.body.firstname && req.body.lastname && req.body.email
      && req.body.password && req.body.housenumber && req.body.province && req.body.postalcode && req.body.country) res.status(400).send("Form data is invalid!")
    try {
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          const signup = {
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hash,
            house_num: req.body.housenumber,
            street: req.body.street,
            city: req.body.city,
            province_code: req.body.province.toUpperCase(),
            postcode: req.body.postalcode,
            country_code: req.body.country.toUpperCase()
          }
          axios.post(urlbase + "/users", signup)
            .then((response) => {
              // console.log(response.data);

              res.cookie('user_id', response.data.id);
              console.log(response.data.id)
              res.redirect('/?msg=success');
              // res.redirect(`/api/users/user`);
            })
            .catch((err) => {
              console.log("Error:", err.message);
              res.status(500).send("oops, something is wrong");
            })
        });
      });
    } catch(err) {
      res.status(400).send('Bad request')
    }

  });

  router.post("/login", (req, res, next) => {
    //form data validation
    if (!(req.body.email && req.body.password)) res.status(400).send("Form data is invalid")
    passport.authenticate('local', (err, user, info) => {
      if (info !== undefined) {
        console.log('info ' + info.message);
      }
      if (err || !user) {
        console.log('!user');
        res.redirect("/?msg=Password or email is incorrect");
      } else {

        req.logIn(user, err => {
          if (err) { console.log('err'); return next(err) };
          res.cookie('user_id', req.user.id);
          res.redirect('/?msg=success');
          // res.redirect(`/api/users/user`);
        });
      }
    })(req, res);
  })

  router.post("/search", (req, res) => {
    try{
      req.body.category_id = req.body.category_id? req.body.category_id:null
      req.body.sub_category_id = req.body.sub_category_id? req.body.sub_category_id:null
      req.body.keyword = req.body.keyword? req.body.keyword:null

      Promise.all([
        axios.get(urlbase + "/category"),
        axios.get(urlbase + "/province"),
        axios.post(urlbase + "/posts/search", req.body)
      ])
      .then(responses => {
        // console.log(, values[1].data, values[2].data);
        responses[0].data.map((category) => { category.sub_categories = JSON.parse(category.sub_categories) })
        responses[2].data.map((listing) => { listing.image_list = JSON.parse(listing.image_list) })
        const header = req.user ? 'private-header' : 'public-header'
        const msg = req.query.msg || null
        res.render("pages/listing", 
          {
            title: "Listings",
            css: "listings.css",
            label: "search",
            header: header,
            category: responses[0].data,
            province: responses[1].data,
            message: msg,
            listings: responses[2].data,
            search: req.body.keyword,
          }); 

        // res.status(200).send(response.data); //testing purpose
      })
        .catch((err) => {
        console.log("Error:", err.message);
        res.status(500).send("oops, something is wrong");
      })
    } catch(err) {
        res.status(400).send('Bad request'+ err.message)
    }
  });

  return router;
}