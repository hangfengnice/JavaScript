# git

```bash
# 查看当前代理设置
git config --global --get http.proxy
git config --global --get https.proxy

# 取消代理设置
git config --global --unset http.proxy
git config --global --unset https.proxy

# 或者直接设为空
git config --global http.proxy ""
git config --global https.proxy ""
```
