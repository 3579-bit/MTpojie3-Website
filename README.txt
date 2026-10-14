MT破解屍落地頁 V3 首頁改版

將此資料夾內所有檔案覆蓋至原本 GitHub 專案根目錄，再由 Render 重新部署。
啟動：npm install，npm start。
後台：/admin，密碼沿用 Render ADMIN_PASSWORD。
後台新增品牌名稱、LOGO 圖片網址、首頁截圖網址。請使用公開 HTTPS 圖片連結。
未填截圖時顯示明確標示的介面示意；此示意不是即時資料。
Demo 支援 MP4 播放或外部影片連結。
注意：既有後台仍寫入本機 JSON；Render 未設定持久磁碟時，重啟或部署可能重設後台修改。

V3.1 影片更新：已內建 public/demo.mp4（37.2 秒、直式）。
首頁直接播放，支援手機行內播放與全螢幕；完整顯示，不裁切。
後台 Demo 影片留空時亦會使用 /demo.mp4；填其他網址可替換。
解壓 ZIP 後，上傳裡面的檔案與 public、data 資料夾到 GitHub 根目錄，不要只上傳 ZIP。
