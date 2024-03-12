

# Deploy app in cf

**Prerequisite :**

Run app locally 
    npm run build
    npm start

Login into CF 
    cf login --sso

Build react + push

    npm run build
    cf push