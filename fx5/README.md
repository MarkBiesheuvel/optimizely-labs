# Make your feature experiment customizable within the admin interface

In this lab, you will modify the "Save button" experiment so that anyone can customize the experiment without needing to understand or change the source code.

## Prerequisites

You alread completed [`[FX3]`](../fx3/).

## Introduction

Creating a new feature flag always requires a developer to write some code to handle the different variations in your application. However, you would like to be able to make changes to the feature flag (and its experiment) without needing to update and redeploy your source code. So let's make the feature flag and experiment customizable!

## Instructions

1. Login to the Optimizely admin interface at [app.optimizely.com](https://app.optimizely.com/)
1. Select the project that is called `Hands-on labs` and has the type `Full Stack`
1. Click on the `Setting` item in the left-side menu
1. Copy the `SDK Key` that's listed under `Development` and store it in a temporary note or document
    - For example: "UURF9FECB7wHtC2QSMMkS"
    - You can click the "Copy to clipboard" icon
1. Search the flag you created in lab FX2 and click on that Flag
1. Click on the `Variables` item in the left-side menu
1. Click the plus icon to add a variable, choose `String`, and enter the following values:
    - Variable Key: `color`
    - Description: "Color of the save button"
    - Default Value: `red`
1. Click on the `Save` button
1. Click the plus icon to add a variable, choose `String`, and enter the following values:
    - Variable Key: `text`
    - Description: "Text of the save button"
    - Default Value: `Save`
1. Click on the `Save` button
1. Click on the `Variations` item in the left-side menu
1. Click on the plus icon at the top and enter the following values
    - Name: "Variation 1"
    - Key: `variation_1`
    - color: `blue`
    - text: `+1`
1. Click on the `Save` button
1. Click on the plus icon at the top and enter the following values
    - Name: "Variation 2"
    - Key: `variation_2`
    - color: `red`
    - text: `<3`
1. Click on the `Save` button
1. Click on the plus icon at the top and enter the following values
    - Name: "Variation 3"
    - Key: `variation_3`
    - color: `yellow`
    - text: `Like`
1. Click on the `Save` button
1. Click on the `Development` item in the left-side menu
1. Click on the `Experiment` item in the the middle of the page
1. Go to the "Variations" section and change each variation
    - Change `Red` to `Variation 1`
    - Change `Green` to `Variation 2`
    - Change `Blue` to `Variation 3`
1. If you did FX4, go to the "Add this experiment to the following Exclusion Group" section and change the dropdown to `None`
1. Click on the `Save` button
1. Great job, your experiment is now customizable
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
1. Paste the SDK key you copied in step 4 between the two apostrophes
1. Go to line 2 of the React code
1. Paste the feature flag key you created in FX2
1. Go to line 3 of the React code
1. Paste the event flag key you created in FX2
1. Go to line 4 of the React code
1. Paste the attribute flag key you created in FX3
1. Click `Run` in the top-left corner
    - Every time you click run you will emulate a different user
1. Notice how both the color and the text change depending on the variation

## Challange

The challange has less detailed instruction on purpose to make it more challanging.

1. Go back to the Optimizely admin interface
    - Keep JSFiddle open for later
1. Create some additional variations (`Variation 4`, `Variation 5`, ...)
1. Choose whichever text and color you like
    - Supported colors are `black`, `yellow`, `green`, `blue`, `grey`, and `red`
1. Add the new variations to the experiment and save
1. Go back to JSFiddle and run the code again
1. Notice how your newly created variations are visible without requiring any code changes
1. Congratulations! You've completed the lab and the challange

## Conclusion

Once a feature flag is created using variables it becomes really easy to create new variations!