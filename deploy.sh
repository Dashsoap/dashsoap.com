# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build --dest dist

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
echo 'dashsoap.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git config user.email "deploy@circleci.com"
git config user.name "circleci"

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://${token}@${address} master:master
git push -f git@github.com:dashsoap/dashsoap.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
