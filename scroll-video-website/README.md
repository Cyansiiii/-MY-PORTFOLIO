# Scroll Video Animation Website

This project demonstrates a smooth scroll-based video animation where the video advances frame by frame as the user scrolls down the page. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Frame-by-frame video playback controlled by scroll position
- Smooth animation using requestAnimationFrame
- Responsive design that works on various screen sizes
- Customizable frame count and frame rate

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How It Works

The ScrollVideo component tracks the user's scroll position and maps it to the video's timeline. As the user scrolls down the page, the video advances proportionally, creating a smooth frame-by-frame animation effect.

Key implementation details:

- Scroll position is tracked using a scroll event listener with requestAnimationFrame for performance
- The scroll progress (0-1) is calculated based on the current scroll position relative to the total scrollable height
- The video's currentTime is set based on this scroll progress and the video's duration

## Customization

You can customize the ScrollVideo component by adjusting the following props:

- `videoFile`: Path to the video file
- `frameCount`: Total number of frames in the video
- `frameRate`: Frames per second of the video

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
