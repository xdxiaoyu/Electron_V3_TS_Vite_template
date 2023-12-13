// app，它着您应用程序的事件生命周期
// BrowserWindow，它负责创建和管理应用窗口。
import { app, BrowserWindow, ipcMain  } from "electron";
import path from "path";

// createWindow() 函数将您的页面加载到新的 BrowserWindow 实例中：
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Load your file
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

// 在应用准备就绪时调用函数
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})