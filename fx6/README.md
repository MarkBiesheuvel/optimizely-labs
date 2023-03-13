# Make your feature experiment production ready

In this lab, you will validate all the variations and deploy the experiment to production.

## Prerequisites

You alread completed [`[FX5]`](../fx5/).

## Introduction

In the labs, you can simple re-run the code to quickly get a new user id and likely a different variation.
When QA'ing or testing your application in development or staging, this might be more difficult.
Luckily, you can implement some functionality to force yourself into a specific variation.
Let's see how this work!

## Instructions

1. Login to the Optimizely admin interface at [app.optimizely.com](https://app.optimizely.com/)
1. Select the project that is called `Hands-on labs - Feature Experimentation`
1. Click on the `Setting` item in the left-side menu
1. Copy the `SDK Key` that's listed under `Development` 
    - For example: "UURF9FECB7wHtC2QSMMkS"
    - You can click the "Copy to clipboard" icon
    - Store the value in a temporary note or document
1. Click on the `Flags` item in the left-side menu
1. Search for the flag your created in lab FX2 and copy the "Key"
    - Store the value in a temporary note or document
1. Click on the `Events` item in the left-side menu
1. Search for the event your created in lab FX2, click on it, and copy the "Event Key"
    - Store the value in a temporary note or document
1. Click on the `Audiences` item in the left-side menu
1. Click on the `Attributes` item in the top-side menu
1. Search for the attribute your created in lab FX3, click on it, and copy the "Attribute Key"
    - Store the value in a temporary note or document
1. No changes are needed in Optimizely for now
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
1. Paste the flag key you copied in step 6 between the two apostrophes
1. Go to line 3 of the React code
1. Paste the event key you copied in step 8 between the two apostrophes
1. Go to line 4 of the React code
1. Paste the attribute key you copied in step 11 between the two apostrophes
1. Click the `Run` button in the top-left
1. Notice how the page contains a readonly field containing the "Original decision"
    - This is what the Optimizely SDK would return under normal circumstances
1. Notice how the page also contains a drowpdown which allows you to select a "Forced decision"
    - This can be used during testing or QA to verify all variations
1. Use the "Forced decision" dropdown to view all variations without changing the user ID
1. If all variations look good to you, then it's time to deploy to production!
1. Go back to [app.optimizely.com](https://app.optimizely.com/)
1. Click on the `Flags` item in the left-side menu
1. Search for the flag your created in lab FX2 and click on it
1. Click on the `Production` item in the left-side menu
1. Click on the `Add rule` button and select `Copy rules from Development`
1. Click on the `Save` button
1. Click on the toggle at the top of the page to turn the flag on
1. Congratulations! Your experiment is now running in production

## Challange

The challange has less detailed instruction on purpose to make it more challanging.

1. Find the SDK key for Production and copy it
1. Replace the SDK key in JSfiddle with the production SDK key
1. That's it. This is how your application would look like in production

## Conclusion

The Optimizely SDK provides different methods to make it easy to QA your experiments before publishing them to production.
This was the final lab for Feature Experimentation.
Go ahead and apply what you've learned into practice. Good luck and have fun!