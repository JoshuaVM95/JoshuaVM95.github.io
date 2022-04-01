mkdir ~/.ssh
echo "$PRIVATE_KEY" > ~/.ssh/id_ed25519
sudo chmod 600 ~/.ssh/id_ed25519
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_ed25519
cd build
git init
git config user.name github-actions
git config user.email github-actions@github.com
git remote add origin git@github.com:JoshuaVM95/JoshuaVM95.github.io.git
git branch -M github-pages
git add .
git commit -m "Update gh-pages"
git push -u --force origin github-pages
rm -rf ~/.ssh