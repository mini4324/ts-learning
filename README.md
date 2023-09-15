# ts-learning

vitestのin-source testingを使ったJS練習問題集を作る試み

問題をだんだん増やせたら増やす。破綻したらやめる

# 進め方

たとえば001を解こうと思ったときは以下の手順

- `git switch main` でmainブランチに移動する
- `git switch -c solve-001` で001解答用ブランチを作成しつつ001解答用ブランチに移動する
- 問題001を解く
- 解答できたらコードを `git add src/001...(省略)` でステージし、 `git commit -m "...(省略)"` でコミット
- `git push -u origin solve-001` または `git push -u origin HEAD` でGitHubにpushする
- GitHubでmainブランチに向けたpull requestを作成する

注意として、最初にmainブランチに移動する手順を省かないこと。
たとえば001を上記手順でpull requestまで終えて002を解き始めようと思ったとき、solve-001ブランチに居るままの状態で `git switch -c solve-002` するとsolve-002に001への解答が混ざってしまう
