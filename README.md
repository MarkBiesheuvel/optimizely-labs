# Hands-on labs for Optimizely Web/Feature Experimentation

This is a collections of hands-on labs for a custom training programme from Expert Services.

The training programme starts with a combined introductions for both Web Experimentation and Feature experimentation. This first session does not have a hands-on lab. After the introduction sessions there are separate tracks for either Web or Feature Experimentation, denoted by the `[WX_]` or `[FX_]` tag respectively.

## Acknowledgements

The hands-on labs use code snippets that are built using JavaScript and React. This language and framework are chosen because they are easy to run in your browser without needing to install a development environment. While your organization might not use React, the hands-on labs are still helpful in teaching you all about Optimizely. Since the SDKs for different languages.

Note that while the Feature Experimentation labs use React for rendering elements, it does not use the Optimizely React SDK. Instead it uses the Optimizely JavaScript SDK since it can easily be included with a single script tag. If you are building a React application, consider installing the Optimizely React SDK and bundling it with your app.

These labs are simplified examples. Do as they say, not as they do.

## Setup

In order to complete the labs, you will need to have an Optimizely account and follow these [setup instructions](./setup).

## Schedule

There are separate schedules for both Web Experimentation and Feature Experimentation. Note that two sessions are shared between both products. That means that `[FX1]` and `[WX1]` are the same and also `[FX4]` and `[WX4]` are the same.

### `[FX1]` Introduction to Optimizely
Agenda:
- Differences between Web Experimentation and Feature Experimentation
- Feature Experimentation use cases
- Optimizely admin interface
- Managing collaborators
- Account-level and project-level settings
- MAU usage

### `[FX2]` Creating a feature rollout and feature experiment
Agenda:
- High-level demo
- Creating a feature rollout
- Creating a feature experiment
- Creating events

Lab: [Build your first feature experiment in Optimizely](./fx2)

### `[FX3]` Audiences and attributes
- What are audiences and attributes?
- Creating attributes
- Creating audiences
- How to target a rollout or experiment
- Third-party integrations

Lab: [Update your feature experiment to target audiences](./fx3)

### `[FX4]` Exclusion groups
- What are exclusion groups
- Creating exclusion groups in Web Experimentation
- Creating exclusion groups in Feature Experimentation
- When not to use them?

Lab: [Create your second feature experiment and make it exclusive](./fx4)

### `[FX5]` Templating
- What are variables?
- How to use variables in a feature experimentation
- Best practices to make experiments customizable

Lab: [Make your feature experiment customizable within the admin interface](./fx5)

### `[FX6]` Quality assurance and troubleshooting
- Environments
- QA audience
- Forced variations
- Triggering events
- How are conversions counted?

Lab: [Make your feature experiment production ready](./fx6)

### `[WX1]` Introduction to Optimizely
- See `[FX1]`

### `[WX2]` Creating a web experiment
- What are pages, events, and experiments?
- Creating pages
- Creating events
- Creating experiments

Lab: [Build your first web experiment in Optimizely](./wx2)

### `[WX3]` Audiences, standard attributes, and custom attributes
- Creating an audience using standard attributes
- How to set up custom attributes
- Third-party integrations

Lab: [Update your web experiment to target audiences](./wx3/)

### `[WX4]` Exclusion groups
- See `[FX4]`

### `[WX5]` Custom code
- Page activation triggers
- Variation code editor
- Optimizely functions
- Examples

Lab: Build a web experiment that dynamically activates

### `[WX6]` Quality assurance and troubleshooting
- Preview tool and share link
- Funnel-testing
- Scheduling
- Chrome browser extensions
- Browser developer tools

Lab: Creating a multi-page (funnel) test
