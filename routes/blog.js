const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../templates/index.html"));
  res.render("home");
});

router.get("/blog", (req, res) => {
  //   blogs.forEach((blog) => {
  //     console.log(blog.title);
  //   });
  // res.sendFile(path.join(__dirname, "../views/blogHome.html"));
  res.render("blogHome", {
    blogs: blogs,
  });
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return (e.slug = req.params.slug);
  });
  //   console.log(myBlog)
  // res.sendFile(path.join(__dirname, "../views/blogPage.html"));
  res.render('blogPage', {
    title: myBlog[0].title,
    content: myBlog[0].content
  })

});

module.exports = router;
