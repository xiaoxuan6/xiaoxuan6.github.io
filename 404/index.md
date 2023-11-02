---
title: 404 Not Found
toc: false # 是否启用内容索引
comments: false # 开启文章的评论功能
sidebar: none
permalink: /404
---

## 这是一個不存在的页面

对不起，您所访问的页面不存在或者已删除。

预计将在约 <span id="timeout">5</span> 秒后返回首页。

当然，你可以 **[点这里](/)** 直接返回首页。

<script>
let countTime = 5;

function count() {

  document.getElementById('timeout').textContent = countTime;
  countTime -= 1;
  if(countTime === 0){
    location.href = window.history.back(-1);
  }
  setTimeout(() => {
    count();
  }, 1000);
}

count();
</script>
