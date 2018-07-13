'use strict';
const express = require('express');
const router = express.Router();

const Flickr = require("node-flickr");
const keys = { "api_key": process.env.FLICKR_KEY }
// console.log("keys is: " + JSON.stringify(keys));
const flickr = new Flickr(keys);

router.get('/', function (req, res, next) {
  let photoArray = [];
  flickr.get("photos.search", { "tags": "cat,dogs" }, function (err, result) {
    if (err) return next(err);
    if (result.stat === 'ok') {
      photoArray = result.photos.photo.map(element => {
        return {
          url: `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}_m.jpg`,
          title: element.title
        };
      });
      // console.log(photoArray);
      res.json(photoArray);
    }
    else {
      res.json([]);
    }
  });
});

//apply search
router.get('/:query', function (req, res, next) {
  let photoArray = [];
  flickr.get("photos.search", { "tags": req.params.query }, function (err, result) {
    if (err) return next(err);
    if (result.stat === 'ok') {
      photoArray = result.photos.photo.map(element => {
        return {
          url: `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}_m.jpg`,
          title: element.title
        };
      });
      // console.log(photoArray);
      res.json(photoArray);
    }
    else {
      res.json([]);
    }
  });
});

module.exports = router;