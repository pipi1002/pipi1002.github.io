var posts=["2023/05/04/C++mistakes/","2023/02/23/C++Project/","2022/11/16/C-Ctext/","2022/11/16/C-C/","2022/11/16/CSS样式/","2022/11/20/EXAM-NOTE-C语言/","2022/11/16/HTML/","2023/09/25/数据结构/","2023/01/02/文章/","2022/11/20/hello-world/","2022/11/16/页面homework/","2023/07/17/MatlabClass/","2023/02/23/EXAM-NOTE-C++/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};