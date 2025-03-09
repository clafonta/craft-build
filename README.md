# About

This is a [Next.js](https://nextjs.org) project bootstrapped with [Amplify](https://aws.amazon.com/amplify/).
These are the steps for a fresh setup.

# SECTION 0. Delete old things.
From root:
`amplify delete`
which will remove amplify resources from cloud and local dev.

```zsch
rm -rf .next         # Removes the Next.js build output
rm -rf out           # Removes the static export directory (if you use it)
rm -rf node_modules  # Removes all installed dependencies
rm -f package-lock.json  # Removes the package lock file
rm -rf amplify       # Removed old amplify project folder
```
# SECTION 1. Initialize Amplify
From root:
`amplify init`

Choose the right AWS Profile (that's an entire different set of guidelines)

**INFO:** From now on, it is highly recommended that you run `amplify push` _after_
every `amplify add XXXX` command. This reduces the chance of race conditions and
conflicts during environment setup.

# SECTION 2.  Add Amplify Auth

```zsch
amplify add auth
```

...then

```zsch
amplify push
```

This will create `src/amplifyconfiguration.json` with the updated settings.

Update your `.env.local` with the `COGNITO_USER_POOL_ID=us-east-1_xxxxxx` value.

Then from root, run this custom script that will set up
```Groups``` and ```Users``` in your Cognito User Pool that
Amplify created for this project.

```zsch
npm run setup:cognito // to add users and groups
```
TODO: Debug^

# SECTION 3. Add Amplity API

**IMPORTANT**: Be sure to select the right Authorization modes!!!!

From root, run:

```zsch
amplify add api
```
Use the following selections
- GraphQL
- Name: <you pick>
- Choose the default authorization type for the API
- Authorization mode is: ----> ***Amazon Cognito User Pool*** <----
- Blank schema

**Before** you push, make a copy of the schema from ```./aws/schemas/schema.graphql```
and place it here ```./amplify/backend/api/craftbuildapp/schema.graphql```.

Or run from root
```zsch
cp ./aws/schemas/schema.graphql ./amplify/backend/api/craftbuildapp/schema.graphql
```
### Let's ensure the schema is valid:
You can validate the schema using one of these commands from your project root:

1. Push without actually deploying (validates schema)
    ```zsch
    amplify push --test
    ```
2. Validate schema directly
    ```zsch
    amplify api gql-compile
    ```
### If all is good, then you're ready to push:
...then run:
```zsch
amplify push
amplify codegen
```

If all is good, then don't forget: 
```zsch
git add .
git commit -m "added amplify api and schema.graphql"
git push
```

# SECTION 4. Add Amplify Storage

```zsch
amplify add storage
```
..for Images, etc.

```zsch
amplify push
```
# SECTION 5. Validate your deploy

### Check your cloud deployed project:
* Visit: https://us-east-1.console.aws.amazon.com/amplify/apps
* Be sure to connect your Amplify project with your GitHub project for
  continuous deploys.

### Check your local project:

```zsch
npm run build
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#

# APPENDIX

## Got local build errors?

To ensure a clean build in a Next.js Router app, here are the key steps you should take:

1. Delete the following directories and files:
    ```zsch
    rm -rf .next         # Removes the Next.js build output
    rm -rf out           # Removes the static export directory (if you use it)
    rm -rf node_modules  # Removes all installed dependencies
    rm -f package-lock.json  # Removes the package lock file
    ```
2. Clear the cache:
    ```zsch
    npm cache clean --force  # Cleans the npm cache
    ```
3. Reinstall dependencies and rebuild:
    ```zsch
    npm install      # Reinstalls all dependencies
    npm run build    # Runs a fresh build
    ```

You can combine these into a single command if you'd like:
```zsch
rm -rf .next out node_modules package-lock.json && npm cache clean --force && npm install && npm run build
```

### Got an Amplify Console build issue?
```zsch
[ERROR]: !!! We failed to bundle your application due to an unexpected error. Please try again. If the issue persists, please contact AWS support. 
[ERROR]: !!! CustomerError: Artifacts base directory not found in build output, please check your buildSpec
```

Try this:
* Amplify Console
* Choose your app.
* Hosting > Build Settings
* Update the ```amplify.yml``` to the below:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
