# `[FX4]` Create your second feature experiment and make it exclusive

In this hands-on lab, you will create a second experiment and make sure visitors are included in either your first or second experiment, but never both at the same time.

## Prerequisites

You already completed [`[FX3]`](../fx3/).
Your current Optimizely plan has Exclusion Groups enabled (i.e. the Scale package).

## Introduction

Our first experiment is doing well and is collecting data. While we wait for it to reach statistical significance, we are going to build our second experiment. However, the only challange is that these two experiments do not work together. We want a visitor to be either in experiment 1 or in experiment 2, but never both. Let's create an exclusion group!

## Instructions

1. To prevent everyone from creating the same flag, pick a prefix that is unique to you
    - You could use a nickname, your initials, postal code, or date of birth
    - For example, John Doe could use the prefix `jd`
1. Login to the Optimizely admin interface at [app.optimizely.com](https://app.optimizely.com/)
1. Select the project that is called `Hands-on labs - Feature Experimentation`
1. Click on the `Setting` item in the left-side menu
1. Copy the `SDK Key` that's listed under `Development` and store it in a temporary note or document
    - For example: "UURF9FECB7wHtC2QSMMkS"
    - You can click the "Copy to clipboard" icon
1. Click on the `Flags` item in the left-side menu
1. Click on the `Create New Flag...` button and enter the following fields
    - Name: Your prefix followed by ` - Product layout`
    - Key: Your prefix followed by `_product_layout`
    - Description: "Toggle for different product layouts"
1. Click on the `Create Flag` button
1. Click on the `Variations` item in the left-side menu
1. Click on the plus icon at the top and enter the following values
    - Name: "Control"
    - Key: `control`
1. Click on the `Save` button
1. Click on the plus icon at the top and enter the following values
    - Name: "Treatment"
    - Key: `treatment`
1. Click on the `Save` button
1. Click on the `Development` item in the left-side menu
1. Click on the toggle at the top of the page to turn the flag on
1. Click on the `Off` dropdown under "For everyone in Development" and select `Control`
1. Click on the `Add rule` button and select `A/B Test`
1. Enter the following fields:
    - Name: Your prefix followed by ` - Product layout experiment`
    - Key: Your prefix followed by `_product_layout_experiment`
1. Click on the `Search to add metrics` field in the `Metrics` section and add the event you created in FX2
1. Don't change any settings and click on the `Add metric` button
1. Click on the `Select a Variation` dropdown in the `Variations` section and select `Treatment`
1. Click on the `Save` button
1. Click on the icon in the top-right that looks like a play button :arrow_forward:
1. Click on the `Flags` item in the left-side menu
1. Search the flag you created in lab FX2 and click on that Flag
1. Click on the `Add rule` button and select `Targeted Delivery`
1. Enter the following fields:
    - Name: Your prefix followed by ` - Save button default`
    - Key: Your prefix followed by `_save_button_default`
1. Click on the `Search and add audiences` field in the `Audiences` section and select the audience your created in lab FX3
1. Click on the dropdown in the `Deliver` section and select `Red`
1. Click on the `Save` button
1. Click on the icon in the top-right that looks like a play button :arrow_forward:
1. Click on the `Flags` item in the left-side menu
1. Click on the `Exclusion Groups` item in the top-side menu
1. Click on the `Create New Exclusion Group…` button and enter the following fields
    - Exclusion Group Name: Your prefix followed by ` - Exclusion Group`
    - Description: ""
1. Click on the dropdown under "Environment" and select `Development`
1. Search for the experiment you created in lab FX2 and add it
1. Search for the experiment you created in steps 17-22 and add it
1. Enter `50` in the both field under "Traffic Allocation"
1. Click on the `Create Exclusion Group` button
1. Click on the `Save Group` button
1. Congrats, you now have an exclusion group
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
1. Paste the flag key you created in lab FX2
1. Go to line 3 of the React code
1. Paste the flag key you created in steps 6-8
1. Go to line 4 of the React code
1. Paste the event key you created in lab FX2
1. Go to line 5 of the React code
1. Paste the attribute key you created in lab FX3
1. Click `Run` in the top-left corner
    - Every time you click run you will emulate a different user
    - The subtitle specifies whether the user is logged in or not
    - The subtext specifies which experiment of the exclusion group is active
1. Notice that the "Save" button is still only showed when users are logged in
    - When the layout experiment is active, the "Save" button is "Red" due our change in steps 24-28
    - When the save button experiment is active and a user is not logged in, nothing is change
1. Congratulations! You've completed the lab