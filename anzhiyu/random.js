var posts=["2023/02/23/C++Project/","2024/03/03/AssemblyLanguage/","2023/05/04/C++mistakes/","2022/11/16/C-C/","2022/11/16/CSS样式/","2022/11/16/C-Ctext/","2023/02/23/EXAM-NOTE-C++/","2022/11/20/EXAM-NOTE-C语言/","2023/07/17/MatlabClass/","2022/11/16/HTML/","2023/09/25/OJ/","2022/11/20/hello-world/","2024/01/15/数学建模算法/","2024/02/26/数学建模案例1/","2024/01/26/数学建模算法2/","2024/02/29/数学建模算法3/","2023/09/25/数据结构/","2022/11/16/页面homework/","2023/01/02/文章/","2023/11/09/数据结构exam/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};