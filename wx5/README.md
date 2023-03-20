# `[WX5]`  Build a web experiment that dynamically activates

In this hands-on lab, you will create a new experiment which only activates when someone scrolls to the relevant content.

## Prerequisites

You already completed [`[WX3]`](../wx3/).

## Instructions

1. To prevent everyone from seeing the same experiment, pick a prefix that is unique to you
    - You could use a nickname, your initials, postal code, or date of birth
    - For example, John Doe could use the prefix `jd`
1. Login to the Optimizely admin interface at [app.optimizely.com](https://app.optimizely.com/)
1. Select the project that is called `Hands-on labs - Web Experimentation`

1. Click on the `Implementation` item in the left-side menu
1. Click on the `Create New Page...` button and enter the following fields
    - Name: Your prefix followed by ` - Additional content`
    - Editor URL: `https://d2rd6osytpi57k.cloudfront.net/index.html`
    - Description: "Scrolled to additional content on PLP"
1. Click on the "Trigger" dropdown and change it to `When a callback is called`
1. Remove all the code from "Callback JavaScript"
1. Open the [`trigger.js`](./trigger.js) file, copy the content and paste it in "Callback JavaScript"
    - You can use the "Copy raw content button"
    - Feel free to look through the code to see if you understand what it does
1. Add the following value in the field in "URL matches these URL(s):" section
    - `https://d2rd6osytpi57k.cloudfront.net/index.html`
1. Click on the `Add Condition` dropdown and select `JavaScript Condition`
1. Remove everything from the "Custom Code" field
1. Paste the following code in the "Custom Code" field and replace the prefix `jd` with your own prefix
    - `function condition() { return window.prefix === "jd"; }`
1. Click on the `Create Page` button

1. Click on the `Experiments` item in the left-side menu
1. Click on the `Create New Experiment...` button, select `A/B Test`, and enter the following fields
    - Name: Your prefix followed by ` - Additional content`
    - Description: "Experiment for visitors who scroll to the additional content"
    - Target By: `Saved Pages`
1. Add the page you created in steps 5-13
1. Click on the `Create Experiment` button

1. Click on the `Variation #1` item
1. Click on the `Create >` button
1. Select `Element Change`
1. Enter `#additional-content` in the "Selector" field and click on the checkmark next to it
1. Click on the `> Styles` item in the list
1. Modify the `Classes` field and enter the following value
    - `row mt-3 bg-warning text-bg-warning`
1. Click on the `Save` button

1. Click on the `<- Variations` item in the top-left
1. Click on the `Metrics` item in the left-side menu
1. Click on the `> Click Events` item in the list
1. Select the event you created in a previous lab
1. Click on the `Save to Experiment` button
1. Click on the `Save` button

1. Click on the `Traffic Allocation` item in the left-side menu
1. Set "Original" to "0%" and "Variation #1" to "100%"
    - Note that it is not recommended to adjust the traffic allocation for real experiments
1. Click on the `Save` button

1. Click on the `Start Experiment` button
1. Click on the `Start Experiment` button again
1. Great work! This experiment should only be activated once a visitor scrolls far enough on the page
1. Go to https://d2rd6osytpi57k.cloudfront.net/index.html?optimizely_log=info in a new tab
1. (Optional) Open the Chrome Developer Tools by pressing F12
    - Or equivalent tool in different browser
1. Scroll down until you see the additional content
    - The background color changes to yellow as soon as the content comes in view
1. (Optional) Notice the log message in the Console of the Developer Tools
1. Congratulations! You've completed the lab