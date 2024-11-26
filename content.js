const contentLevels = [
    `Level 1: Remove a Device from Find My on iPad<br><br>
    You can use the Find My app to remove a device from your Devices list. This is helpful if you no longer use the device or gave it away.<br><br>
    Steps:<br>
    1. Open the Find My app on your iPad.<br>
    2. Select the device you want to remove.<br>
    3. Tap Remove This Device.`,
    `Level 2: Overview with Key Scenarios<br><br>
    You can use the Find My app to remove a device from your Devices list or turn off Activation Lock. This is useful if you sold, gave away, or no longer use a device.<br><br>
    Key Scenarios:<br>
    1. To remove a device you still own:<br>
    - Open the Find My app.<br>
    - Turn off Find My [device] on the device before removing it.<br>
    2. To remove a device you no longer have:<br>
    - Open the Find My app on your iPad.<br>
    - Erase the device remotely.<br>
    - Tap Remove This Device once the erase is complete.`,
    `Level 3: With Offline Device Handling<br><br>
    You can use the Find My app to manage devices associated with your account. Removing a device can help if you sold, gave it away, or no longer need it.<br><br>
    Steps to Remove a Device:<br>
    1. For devices still owned:<br>
    - Turn off the device.<br>
    - Open the Find My app.<br>
    - Select the device and tap Remove This Device.<br>
    2. For devices no longer owned:<br>
    - Open the Find My app.<br>
    - Select the device and choose to erase it remotely.<br>
    - Tap Remove This Device to finalize.<br><br>
    Note: Offline devices will appear again if Activation Lock is still turned on or the device reconnects to your account.`,
    `Level 4: Detailed Instructions with Additional Notes<br><br>
    Use the Find My app to manage devices associated with your Apple ID. You can remove devices or turn off Activation Lock.<br><br>
    Steps to Remove a Device:<br>
    1. For devices still in your possession:<br>
    - Open the Find My app.<br>
    - Turn off the device or disable Find My [device] on the device itself.<br>
    - Select the device and tap Remove This Device.<br>
    2. For devices no longer in your possession:<br>
    - Open the Find My app.<br>
    - Select the device, erase it remotely, and confirm the action.<br>
    - Tap Remove This Device.<br><br>
    Handling Offline Devices:<br>
    - Offline devices will reappear in Find My if Activation Lock is still active.<br><br>
    Note: Removing a device allows someone else to link it to their Apple ID.`,
    `Level 5: Most Detail<br><br>
    You can use the Find My app to remove a device from your Devices list or turn off Activation Lock on a device you already sold or gave away.<br><br>
    Remove a device from your Devices list:<br>
    1. Turn off the device.<br>
    2. Open the Find My app on your iPad.<br>
    3. Tap Devices at the bottom-left side of the screen, then tap the name of the offline device.<br>
    4. Tap Remove This Device, then tap Remove.<br><br>
    Turn off Activation Lock on a device you no longer have:<br>
    1. Open the Find My app on your iPad.<br>
    2. Tap Devices at the bottom-left side of the screen, then tap the name of the device.<br>
    3. Erase the device remotely.<br>
    4. When the device is erased, tap Remove This Device, then tap Remove.<br><br>
    You can also remove a device online using iCloud.com.`
];

function updateContent() {
    const slider = document.getElementById('slider');
    const content = document.getElementById('content');
    content.innerHTML = contentLevels[slider.value - 1];
}
