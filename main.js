'use strict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on( "window-all-closed", () => {
    if ( process.platform != 'darwin' ) app.quit();
});

app.on( "ready", () => {
    mainWindow = new BrowserWindow();
    //mainWindow.webContents.openDevTools();
    var temp = 'file://' + __dirname + '/index.html';
    mainWindow.loadURL(temp);
    mainWindow.on('closed', () => { mainWindow = null; });
});