# `[WX3]`  Update your web experiment to target audiences

In this hands-on lab, you will modify your existing web experiment to only target ....

## Prerequisites

You already completed [`[WX2]`](../wx2/).

## Instructions

1. To prevent everyone from seeing the same experiment, pick a prefix that is unique to you
    - You could use a nickname, your initials, postal code, or date of birth
    - For example, John Doe could use the prefix `jd`
1. Login to the Optimizely admin interface at [app.optimizely.com](https://app.optimizely.com/)
1. Select the project that is called `Hands-on labs - Web Experimentation`

1. Click on the `Implementation` item in the left-side menu
1. Click on the `Create New Page...` button and enter the following fields
    - Name: Your prefix followed by ` - Checkout`
    - Editor URL: `https://d2rd6osytpi57k.cloudfront.net/checkout.html`
    - Description: "Checkout page"
1. Keep the "Page Settings" as-is and add the following value in the field in "URL matches these URL(s):" section
    - `https://d2rd6osytpi57k.cloudfront.net/checkout.html`
1. Click on the `Add Condition` dropdown and select `JavaScript Condition`
1. Remove everything from the "Custom Code" field
1. Paste the following code in the "Custom Code" field and replace the prefix `jd` with your own prefix
    - `function condition() { return window.prefix === "jd"; }`
1. Click on the `Create Page` button

1. Click on the `Events` item in the top-side menu
1. Click on the `Create New Event...` button
1. Click on the `Select page...` dropdown and select the page you created in steps 5-9
1. Click on the `Create Event` button and enter the following fields
    - Name: Your prefix followed by ` - Checkout`
    - Description: "Checkout button on checkout page"
    - Selector: `.btn`
1. Click on the checkmark next to the "Selector" field
1. Click on the `Save` button

1. Click on the `Experiments` item in the left-side menu
1. Search for your prefix and click on the "Summer sale" experiment
1. Click on the `Targeting` item in the left-side menu
1. Add the page you created in steps 5-9
1. Click on the `Save` button

1. Click on the `Variations` item in the left-side menu
1. Click on the `Variation #1` item
1. Click on the dropdown at the top of page that specifies the page and select "Checkout"
1. Click on the `Create >` button
1. Select `Element Change`
1. Enter `#discount` in the "Selector" field and click on the checkmark next to it
1. Modify the `HTML` field and enter a discount code in the value field
    - For example: `<input type="text" class="form-control" value="SUMMERSALE">`
1. Click on the `Save` button

1. Click on the `<- Variations` item in the top-left
1. Click on the `Publish Experiment` button
1. Click on the `Publish Experiment` button again
1. Congrats! You're web experiment now extends over two pages
1. Go to https://d2rd6osytpi57k.cloudfront.net/index.html?utm_campaign=summer-sale in a new tab
1. Enter your prefix in the prefix field and reload the page
1. Notice how the "Summer sale" experiment is active
1. Now go to https://d2rd6osytpi57k.cloudfront.net/checkout.html in a new tab
1. Notice how the "Summer sale" experiment is still active on this other page
1. Congratulations! You've completed the lab