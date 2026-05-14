# [レインボーライン 駐車場ゲートオープンデータ](https://code4fukui.github.io/rainbow-line-parking/)

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project provides a web-based visualization of vehicle traffic at the parking gates of the Rainbow Line, a scenic mountain parkway in Fukui, Japan. It uses open data from AI cameras deployed as part of the Fukui Prefecture Tourism DX initiative.

The live visualization displays an interactive SVG line chart showing the daily number of vehicles detected at two separate gates, along with a combined total.

## Data Sources

The visualization fetches data directly from the following CSV files, which are updated periodically:

-   **Gate 1:** `~~https://code4fukui.github.io/fukui-kanko-people-flow-visualization/rainbow-line-parking-lot-1-gate/LicensePlate.csv`~~ *(unavailable)*
-   **Gate 2:** `~~https://code4fukui.github.io/fukui-kanko-people-flow-visualization/rainbow-line-parking-lot-2-gate/LicensePlate.csv`~~ *(unavailable)*

## Usage

### Viewing in a Browser

Simply open `index.html` in any modern web browser. The page will automatically fetch the latest data and render the chart. No web server or build steps are required.

### Downloading Data Locally (Optional)

A Deno script is provided to download the source data for offline use or analysis.

1.  Install [Deno](https://deno.land/).
2.  Run the following command in the project directory:
    ```bash
    deno run --allow-net --allow-write download.js
    ```
3.  This will save `gate1.csv` and `gate2.csv` to the project folder.

## Related Projects

-   [福井県観光DX AIカメラオープンデータ](https://github.com/code4fukui/fukui-kanko-people-flow-data) (Fukui Tourism DX AI Camera Open Data)
-   [福井県観光DX AIカメラオープンデータ 可視化ウェブアプリケーション](https://github.com/code4fukui/fukui-kanko-people-flow-visualization/) (Visualization Web App for the Open Data)

## License

MIT License