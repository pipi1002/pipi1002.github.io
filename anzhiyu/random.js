var posts=["2022/11/16/C-C/","2022/11/16/C-Ctext/","2022/11/16/CSS样式/","2022/11/16/HTML/","2022/11/20/hello-world/","2022/11/16/页面homework/","2022/11/20/EXAM-NOTE/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};