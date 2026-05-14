# [レインボーライン 駐車場ゲートオープンデータ](https://code4fukui.github.io/rainbow-line-parking/)

このプロジェクトは、福井県の景勝地である観光道路「レインボーライン」の駐車場ゲートにおける車両交通量をウェブ上で可視化するものです。福井県観光DXの取り組みの一環として設置されたAIカメラのオープンデータを活用しています。

この可視化ページでは、2つのゲートで検出された1日あたりの車両数とその合計を示す、インタラクティブなSVG折れ線グラフを表示します。

## データソース

可視化ページは、定期的に更新される以下のCSVファイルから直接データを取得します：

- **ゲート1:** `~~https://code4fukui.github.io/fukui-kanko-people-flow-visualization/rainbow-line-parking-lot-1-gate/LicensePlate.csv`~~ *(unavailable)*
- **ゲート2:** `~~https://code4fukui.github.io/fukui-kanko-people-flow-visualization/rainbow-line-parking-lot-2-gate/LicensePlate.csv`~~ *(unavailable)*

## 使い方

### ブラウザでの表示

任意のモダンウェブブラウザで `index.html` を開くだけです。ページが自動的に最新データを取得し、グラフを描画します。ウェブサーバーやビルド作業は必要ありません。

### ローカルへのデータダウンロード（オプション）

オフラインでの利用やデータ分析のために、ソースデータをダウンロードするDenoスクリプトを提供しています。

1. [Deno](https://deno.land/) をインストールします。
2. プロジェクトディレクトリで以下のコマンドを実行します：
    ```bash
    deno run --allow-net --allow-write download.js
    ```
3. これにより、`gate1.csv` と `gate2.csv` がプロジェクトフォルダに保存されます。

## 関連プロジェクト

- [福井県観光DX AIカメラオープンデータ](https://github.com/code4fukui/fukui-kanko-people-flow-data) (Fukui Tourism DX AI Camera Open Data)
- [福井県観光DX AIカメラオープンデータ 可視化ウェブアプリケーション](https://github.com/code4fukui/fukui-kanko-people-flow-visualization/) (Visualization Web App for the Open Data)

## ライセンス

MIT License
