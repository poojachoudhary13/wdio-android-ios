let adbShell = require("shelljs")

export function clearAppData() {
    if (browser.isIOS) throw new Error("This method is ONLY for Android")
    adbShell.exec(`adb -s ${browser.capabilities.udid} shell pm clear ${browser.capabilities.appPackage}`)
    console.log('App data cleared')
}

/**
 * Use this function to allow app permissions in android
 */
export function allowPermissions() {
    if (browser.isAndroid) {
        let permissions = ["android.permission.ACCESS_FINE_LOCATION", "android.permission.WRITE_EXTERNAL_STORAGE", "android.permission.READ_EXTERNAL_STORAGE"]
        permissions.forEach(permission => {
            adbShell.exec(`adb -s ${browser.capabilities.udid} shell pm grant ${browser.capabilities.appPackage} ${permission}`)
        })
    }
}