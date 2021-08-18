# Doug's React Boiler

This project was built from Doug's React.js website boilerplate template ([dougs-react-boiler](https://github.com/douglasrcjames/dougs-react-boiler)) and was further bootstrapped from [Create React App](https://github.com/facebook/create-react-app). In this setup, we have Doug's 
base CSS library, base React components (like Header & Footer), directories structured, React Router ready to go, and more! 

Check all `TODO` tags to denote changes that might need to be made depending on your specific project. Find and replace `dougs-react-boiler` or `Doug's React Boiler` in all project files for naming specific items (including `package.json`). You may also need to delete files: `.firebaserc`, `firestore.indexes.json`, and `firebase.json` for a fresh firebase initialization.

Live demo: https://dougs-react-boiler.web.app/

## Available Scripts

In the project directory, you can run:

### `yarn start` || `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` || `npm run-script build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Firebase Setup

Firebase is my preferable setup for database, server functions, and SSL hosting, I would highly recommend!

### Create new project @ https://firebase.google.com/

 - Add a web app under Gear > Project Settings > Your Apps, then grab the Config snippet to copy past in our .env file
 - Pick Firestore server location so initialization works
 
### `firebase login`

Prompted for your firebase credentials, input them

### `firebase init`
  (* note if you don't want to use my settings, just Overwrite )
  1. $ `Proceed?` Yes
  2. Select what you need for your project, but I usually select Firestore, Functions, Hosting, and sometimes Storage
  3. Use Existing project
  4. $ `What file should be used for Firestore Rules?` firestore.rules
  5. $ `File firestore.rules already exists. Do you want to overwrite it with the Firestore Rules from the Firebase Console?` No
  6. $ `What file should be used for Firestore indexes?` firestore.indexes.json
  7. $ `File firestore.indexes.json already exists. Do you want to overwrite it with the Firestore Indexes from the Firebase Console?` No
  8. $ `What language would you like to use to write Cloud Functions?` TypeScript 
  9. $ `Do you want to use TSLint to catch probable bugs and enforce style?` Yes
 10. $ `File functions/package.json already exists. Overwrite?` No
 11. $ `File functions/tslint.json already exists. Overwrite?` No
 12. $ `File functions/tsconfig.json already exists. Overwrite?` No
 13. $ `File functions/src/index.ts already exists. Overwrite?` No
 14. $ `File functions/.gitignore already exists. Overwrite?` No
 15. $ `Do you want to install dependencies with npm now?` Yes
 16. $ `What do you want to use as your public directory?` build
 17. $ `Configure as a single-page app (rewrite all urls to /index.html)?` Yes
 18. $ `Set up automatic builds and deploys with GitHub?` No 
 
 Storage setup is:  
 19.  $ `What file should be used for Storage Rules?` storage.rules

### `npm run-script build` then `firebase deploy`

This will build your current setup and deploy everything including Functions, Firestore, Storage, etc rules, and Hosting to Firebase.

### Other commands: 
- Set Firebase config variables:  
$ `firebase functions:config:set emails.hello.user="email@email.com" emails.hello.password="1234password"`

- View the current Firebase config variables:  
$ `firebase functions:config:get`

- Call those firebase.config() variables:  
 $ `functions.config().emails.hello.user`

- Deploy only the Functions:  
 $ `firebase deploy --only functions`

- Deploy only specific Functions:  
 $ `firebase deploy --only functions:func1,functions:func2`

- Deploy only Firestore rules:  
 $ `firebase deploy --only firestore:rules`

- Deploy only hosting:  
 $ `firebase deploy --only hosting`

- Deploy everything with a message:  
 $ `firebase deploy -m "Deploying the best new feature ever."`

- Use the --debug command appended to the end to get more info:  
 $ `firebase deploy --debug`

- Setup multiple projects in the same folder, you can add alias for each project (1 will be default):  
 $ `firebase use --add`

- Export Firestore indexes:  
 $ `firebase firestore:indexes`

- For interacting with specific alias, use firebase commands as normal, but with the `--project=alias` suffix:  
 $ `firebase deploy --project=alias`
 $ `firebase functions:config:set --project=alias --only functions`
 $ `firebase deploy --only functions:onUserUpdated --project test`
 
### One Firebase project, multiple hosting URLs
1. Name the two targets you wish:  
 $ `firebase target:apply hosting test test-host-name`  
 $ `firebase target:apply hosting live live-host-name`  
 
2. Then update `firebase.json` file like so:  
```
...
"hosting": [
    {
      "target": "test",
      "public": "build",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    },
    {
      "target": "live",
      "public": "build",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    }
  ]
}

```  

3. Then deploy to specific target like so:  
 $ `firebase deploy --only hosting:test`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration


