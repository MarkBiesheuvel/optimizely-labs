# `[WX2]` Build your first web experiment in Optimizely

In this hands-on lab, you will create a feature experiment from scratch. 

## Prerequisites

You already have a user account in Optimzily and created a separate project for the hands-on labs.

## Introduction

You are running a succesful webshop. You have notived that the add-to-cart rate is relatively low, so you want to experiment with different colors and copy to see if you can increase this conversion rate. Thefore, you will create an A/B test in Optimizely Web. Let's get started!

## Instructions

1. To prevent everyone from seeing the same experiment, pick a prefix that is unique to you
    - You could use a nickname, your initials, postal code, or date of birth
    - For example, John Doe could use the prefix `jd`
1. Login to the Optimizely admin interface at [app.optimizely.com](https://app.optimizely.com/)
1. Select the project that is called `Hands-on labs - Web Experimentation`

1. Click on the `Implementation` item in the left-side menu
1. Click on the `Create New Page...` button and enter the following fields
    - Name: Your prefix followed by ` - Product listing`
    - Editor URL: `https://d2rd6osytpi57k.cloudfront.net/index.html`
    - Description: "Product listing page (PLP)"
1. Keep the "Page Settings" as-is and add the follow url in the field in "URL matches these URL(s):" section
    - `https://d2rd6osytpi57k.cloudfront.net/index.html`
1. Click on the `Add Condition` dropdown and select `JavaScript Condition`
1. Paste the following code snippet in the "Custom Code" field and replace the prefix `jd` with your own prefix
    - `function condition() { return window.prefix === "mb"; }`
1. Click on the `Create Page` button

1. Click on the `Events` item in the top-side menu
1. Click on the `Create New Event...` button
1. Click on the `Select page...` dropdown and select the page you created in steps 5-9
1. Click on the `Create Event` button and enter the following fields
    - Name: Your prefix followed by ` - Add to cart`
    - Description: "Add to cart button on product listing page"
    - Selector: `.btn`
1. Click on the checkmark next to the "Selector" field
1. Click on the `Save` button

1. Click on the `Experiments` item in the left-side menu
1. Click on the `Create New Experiment...` button, select `A/B Test`, and enter the following fields
    - Name: Your prefix followed by ` - PLP - Add to cart`
    - Description: "Experiment on product listing page for the add-to-cart button"
    - Target By: `Saved Pages`
1. Add the page you created in steps 5-9
1. Click on the `Create Experiment` button

1. Click on the `Variation #1` item
1. Click on the `Create >` button
1. Select `Element Change`
1. Enter `h1` in the "Selector" field and click on the checkmark next to it
1. Modify the `HTML` field and enter a welcome message that includes your name, so you can recognize your experiment
    - For example: "Hello, John Doe!"
1. Click on the `Save` button
1. Click on the `Create >` button
1. Select `Element Change`
1. Enter `.btn` in the "Selector" field and click on the checkmark next to it
1. Click on the `> Styles` item in the list
1. Modify the `Classes` field and enter the following value
    - `btn btn-danger`
1. Click on the `Save` button

1. Click on the `<- Variations` item in the top-left
1. Click on the `Metrics` item in the left-side menu
1. Click on the `> Click Events` item in the list
1. Select the event you created in steps 11-15
1. Click on the `Save to Experiment` button
1. Click on the `Save` button

1. Click on the `Start Experiment` button
1. Click on the `Start Experiment` button again
1. Hurray! You're first web experiment is now live
1. Go to https://d2rd6osytpi57k.cloudfront.net/index.html in a new tab
1. Enter your prefix in the prefix field and reload the page
1. Notice how your experiment is now applied to the page
1. Congratulations! You've completed the lab

## Conclusion

After setting up another variation, you publish the experiment again. After a few days, the experiments reaches statistical significance showing exactly which variation had the highest increase in conversion rate. You can now apply these changes directly in your website and archive the experiment. On to the next experiment!