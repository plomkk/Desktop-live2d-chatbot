const { app, BrowserWindow,dialog} = require('electron')

const createWindow = () => {
  const {screen} = require("electron")

  const getPrimaryDisplay = screen.getPrimaryDisplay()
  const {width,height} = getPrimaryDisplay.workArea
  
  const window_option = {
      x: width-300,
      y: height-250,
      width: 300,
      height: 500,
      movable : true,
      //maximizable: false,
      minimizable: false,
      //resizable: false,
      fullscreenable: false,
      frame: false,
      transparent: true,
      hasShadow: false,
      //alwaysOnTop: true,
      titleBarStyle: 'customButtonsOnHover',
      webPreferences: {
        nodeIntegration: true
      }
  }
  // Create the browser window.
  const mainWindow = new BrowserWindow(window_option)

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

const createDialog = ()=>{
  const dialog_option = {
    title:"hello"
  }

  dialog.showMessageBox(dialog_option)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  //createDialog()
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
