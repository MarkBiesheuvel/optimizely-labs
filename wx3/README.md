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

1. Click on the `Audiences` item in the left-side menu
1. Click on the `Create New Audience...` button and enter the following fields
    - Name: Your prefix followed by ` - Summer sale ad campaign`
    - Description: "Visitors from summer sale ad campaign"
1. Drag the `Ad Campaign` attribute from the left-side list to the "Conditions" section
1. Keep all settings as-is and enter the following value in the empty field
    - `summer-sale`
1. Click on the `Save Audience` button

1. Click on the `Experiments` item in the left-side menu
1. Click on the `Create New Experiment...` button, select `A/B Test`, and enter the following fields
    - Name: Your prefix followed by ` - PLP - Summer sale`
    - Description: "Experiment for visitors from the summer sale ad campaign"
    - Target By: `Saved Pages`
1. Add the page you created in the previous lab
1. Click on the `Create Experiment` button

1. Click on the `Variation #1` item
1. Click on the `Create >` button
1. Select `Element Change`
1. Enter `.product:first-of-type` in the "Selector" field and click on the checkmark next to it
1. Scroll the the "Rearrange" section
1. Click on the `Before` dropdown and select `After`
1. Enter `.product:last-of-type` in the field below and click on the checkmark next to it
1. Click on the `Save` button

1. Click on the `Create >` button
1. Select `Insert HTML`
1. Click on the `Before` dropdown and select `After`
1. Click on the "Welcome" header in the preview
1. Enter the following value in the `HTML` field
    - `<span></span> <span class="badge bg-warning">Summer sale</span>`
1. Click on the `Save` button

1. Click on the `<- Variations` item in the top-left
1. Click on the `Audiences` item in the left-side menu
1. Add the audience you created in steps 4-8
1. Click on the `Save` button

1. Click on the `Metrics` item in the left-side menu
1. Click on the `> Click Events` item in the list
1. Select the event you created in the previous lab
1. Click on the `Save to Experiment` button
1. Click on the `Save` button

1. Click on the `Traffic Allocation` item in the left-side menu
1. Set "Original" to "0%" and "Variation #1" to "100%"
    - Note that it is not recommended to adjust the traffic allocation for real experiments
1. Click on the `Save` button

1. Click on the `Start Experiment` button
1. Click on the `Start Experiment` button again
1. Hurray! You're second web experiment is now live
1. Go to https://d2rd6osytpi57k.cloudfront.net/index.html in a new tab
1. Enter your prefix in the prefix field and reload the page
1. Notice how only your previous experiment is currently visible
1. Now go to https://d2rd6osytpi57k.cloudfront.net/index.html?utm_campaign=summer-sale in a new tab
    - Notice the query string parameter indicating an ad campaign
1. Notice how both your experiment are now applied to the page
1. Congratulations! You've completed the lab