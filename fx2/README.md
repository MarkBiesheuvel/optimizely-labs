# `[FX2]` Build your first feature experiment in Optimizely

In this hands-on lab, you will create a feature experiment from scratch. You will configure the feature flag and experiment in the Optimizely admin interface. Then, you will run a code snippet to show that the feature experiment is working. Note, the lab will provide the code to you; no need to program something yourself.

## Prerequisites

You already have a user account in Optimzily and created a separate project for the hands-on labs.

## Introduction

You are running a succesful webshop. You have just developed a feature that allows logged-in users to save products to their wishlist. Before releasing this feature to everyone, you want to make sure that this does indeed increase product interactions and doesn't decrease purchases. Therefore, we will create an A/B test where 50% does not see the save button, and the other 50% does. Let's get started!

## Instructions

Notepad!!

1. To prevent everyone from creating the same flag, pick a prefix that is unique to you
    - You could use a nickname, your initials, postal code, or date of birth
    - For example, John Doe could use the prefix `jd`
1. Login to the Optimizely admin interface at [app.optimizely.com](https://app.optimizely.com/)
1. Select the project that is called `Hands-on labs` and has the type `Full Stack`
1. Click on the `Setting` item in the left-side menu
1. Copy the `SDK Key` that's listed under `Development` and store it in a temporary note or document
    - For example: "UURF9FECB7wHtC2QSMMkS"
    - You can click the "Copy to clipboard" icon
1. Click on the `Events` item in the left-side menu
1. Click on the `Create New Event...` button and enter the following fields
    - Event Key: Your prefix follow by `_product_interaction`
    - Description: "Visitor clicks on add-to-cart button, save button or detail page"
1. Click on the `Create Event` button
1. Click on the `Flags` item in the left-side menu
1. Click on the `Create New Flag...` button and enter the following fields
    - Name: Your prefix followed by ` - Save button`
    - Key: Your prefix followed by `_save_button`
    - Description: "Toggle for save button"
1. Click on the `Create Flag` button
1. Click on the toggle at the top of the page to turn the flag on
1. Click on the `Add rule` button and select `A/B Test`
1. Keep most of the settings as-is
1. Click on the `Search to add metrics` field in the `Metrics` section and add the event you created in step 7
1. Don't change any settings and click on the `Add metric` button
1. Click on the `Select a Variation` dropdown in the `Variations` section and select `On`
1. Click on the `Save` button
1. Hurray! You're first feature experiment is done; now let's see it in action
1. Open a new tab in your browser and go to [jsfiddle.net](https://jsfiddle.net/)
    - This is an online code editor, so you do not need to install anything on your computer
1. In the top-right, click `Settings` and change the editor layout to `Tabs (columns)`
1. Open the `HTML` tab
1. Open the [`index.html`](./index.html) file, copy the content and paste it in the HTML tab
    - You can use the "Copy raw content button"
1. Open the `JavaScript` tab
1. Click on the `JavaScript + No-Library (pure JS)` dropdown and change Language to `React`
1. Open the [`react.js`](./react.js) file, copy the content and paste it in the React tab
    - You can use the "Copy raw content button"
    - Feel free to look through the code to see if you understand what it does
1. Go to line 1 of the React code
1. Paste the SDK key you copied in step 5 between the two apostrophes
1. Go to line 2 of the React code
1. Paste the feature flag key you created in step 10
1. Go to line 3 of the React code
1. Paste the event flag key you created in step 7
1. Click `Run` in the top-left corner
    - Every time you click run you will emulate a different user
1. Keep count of how many users do and do not see the `Save` button
    - Feel free to click on the different buttons to generate some events
1. Grab some coffee, tea, water, or soda
    - It takes a few minutes for the results are available
1. Go back to [app.optimizely.com](https://app.optimizely.com/)
1. Click on the `Flags` item in the left-side menu
1. Click on the flag that you created in step 10
1. Click on the icon that looks like bar chart :bar_chart:
1. Verify that the number of users matches with your count from step 34
1. Congratulations! You've completed the lab

## Conclusion

After setting up a few monitoring metrics, such as number of product orders and average product per order, you publish the experiment to the production environment. After a few days, the experiments reaches statistical significance showing that product interactions increased without a (statistical significant) decrease in the monitoring metrics. You can now switch this feature flag from an A/B test to a targeted delivery so it is rolled out to 100% of your users. On to the next experiment!
