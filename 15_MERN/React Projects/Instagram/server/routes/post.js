const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, pic } = req.body;

  if (!title || !body || !pic) {
    console.log("error posts.js");
    return res.status(422).json({ error: "Please add all the fields" });
  }

  //DON'T STORE PASSWORD OF USER WHO POSTED
  // console.log(req.user);
  req.user.password = undefined;
  console.log("pic " + pic);
  const post = new Post({
    title: title,
    body: body,
    photo: pic,
    postedBy: req.user,
  });

  post
    .save()
    .then((result) => {
      res.status(200).json({ message: result });
    })
    .catch((err) => {
      console.log("posts.js " + err);
    });
});

router.get("/allposts", requireLogin, (req, res) => {
  Post.find()
    // .populate("postedBy") // it will show all data in postBy field
    .populate("postedBy", "_id name email") // it will show _id name and email in postBy field
    .then((posts) => {
      res.status(200).json({ posts: posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all posts of following
router.get("/getsubpost", requireLogin, (req, res) => {
  Post.find({postedBy : {$in : req.user.following}})
    // .populate("postedBy") // it will show all data in postBy field
    .populate("postedBy", "_id name email") // it will show _id name and email in postBy field
    .then((posts) => {
      res.status(200).json({ posts: posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name email")
    .then((result) => {
      res.status(200).json({ posts: result });
    })
    .catch((err) => {
      console.log("posts.js " + err);
    });
});

router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      // return res.json({result : result});
      res.json(result);
    }
  });
});

router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      //remove this user from array array
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      // return res.json({result : result});
      res.json(result);
    }
  });
});

router.put("/comment", requireLogin, (req, res) => {
  const comm = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      //remove this user from array array
      $push: { comments: comm },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        // return res.json({result : result});
        res.json(result);
      }
    });
});

router.delete("/deletePost/:postId", requireLogin, (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

module.exports = router;
