# `[FX3]` Update your feature experiment to target audiences

In this hands-on lab, you will modify your existing feature experiment to only target logged in users.

## Prerequisites

You already completed [`[FX2]`](../fx2/).

## Introduction

Hold on! During our last lab we were testing a feature that would save a product to a users' profile. However, we never checked whether a user was logged in or not. We might have cut some corners to get our first experiment out the door, but let's fix that now. Also, we were only experimenting with an `on` and `off` variation. Let's create some more variations to see which works best!

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
1. Click on the `Audiences` item in the left-side menu
1. Click on the `Attributes` item in the top-side menu
1. Click on the `Create New Attribute...` button and enter the following fields
    - Attribute Key: Your prefix follow by `_is_logged_in`
    - Attribute Description: "Whether a visitor is logged in or not"
1. Click on the `Save Attribute` button
1. Click on the `Saved` item in the top-side menu
1. Click on the `Create New Audience...` button and enter the following fields
    - Name: Your prefix followed by ` - Logged in users`
    - Description: "Logged in users"
1. Drag the attribute you created in step 8 from the right list to the middle
1. Click on the `Select Type` dropdown and select `Boolean`
1. Click on the `is false` dropdown and select `is true`
1. Click on the `Save Audience` button
1. Hurray! You have now succesfully created an audiences
1. Click on the `Flags` item in the left-side menu
1. Click on the flag which you created in the previous lab
1. Click on the `Variations` item in the left-side menu
1. Click on the plus icon at the top and enter the following values
    - Name: "Red"
    - Key: `red`
1. Click on the `Save` button
1. Click on the plus icon at the top and enter the following values
    - Name: "Green"
    - Key: `green`
1. Click on the `Save` button
1. Click on the plus icon at the top and enter the following values
    - Name: "Blue"
    - Key: `blue`
1. Click on the `Save` button
1. Click on the `Development` item in the left-side menu
1. Click on the `Experiment` item in the middle of the page
1. Click on the `Search and add audiences` field in the `Audiences` section and select the audience your created in step 11
1. Scroll to `Variations` section
1. Click on the `Off` dropdown and change it to `Red`
1. Click on the `On` dropdown and change it to `Green`
1. Click on the plus icon to add a new variation and select `Blue`
    - Each variation should now automatically get 33.3% traffic
1. Click on the `Save` button
1. Congrats, your experiment is updated
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
1. Paste the feature flag key you created in the previous lab
1. Go to line 3 of the React code
1. Paste the event flag key you created in the previous lab
1. Go to line 4 of the React code
1. Paste the attribute flag key you created in step 8
1. Click `Run` in the top-left corner
    - Every time you click run you will emulate a different user
    - The subtitle specifies whether the user is logged in or not
1. Notice how the "Save" button is only showed when users are logged in
1. Congratulations! You've completed the lab


## Conclusion

We have fixed the targeting of our experiment. Also, now that we have multiple variations, we can test which button color has the highest conversion rate. Maybe one of the variations we didn't expect to perform well, actually does outperform the rest significantly. On to the next experiment!