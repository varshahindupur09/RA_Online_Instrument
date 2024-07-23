# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# dashboard functionality
npm install react-modal

# SSL cert password:
https://freedium.cfd/medium.com./@rajanmaharjan/secure-your-mongodb-connections-ssl-tls-92e2addb3c89
1. openssl genrsa -out rootCA.key 2048
2. openssl genrsa -des3 -out rootCA.key 2048
    pokemon@varkel
4. openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
5. Details in the file:
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:Massachusetts
Locality Name (eg, city) []:Boston
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Phd Dissertation
Organizational Unit Name (eg, section) []:University Of Central Florida
Common Name (e.g. server FQDN or YOUR name) []:Varsha Hindupur
Email Address []:hindupur.v@northeastern.edu
6. openssl genrsa -out mongodb.key 2048
7. openssl req -new -key mongodb.key -out mongodb.csr
8. Details of the file:
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:Massachusetts
Locality Name (eg, city) []:Boston
Organization Name (eg, company) [Internet Widgits Pty Ltd]:University of Central Florida
Organizational Unit Name (eg, section) []:Northeastern University
Common Name (e.g. server FQDN or YOUR name) []:VarshaElasticBeanstalkAndMongoDB
Email Address []:hindupur.v@northeastern.edu

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:NinjaKellyVarsha46138080
String too long, must be at most 20 bytes long
A challenge password []:NinjaKellyV4613        
An optional company name []:UCF
9. openssl x509 -req -in mongodb.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out mongodb.crt -days 500 -sha256
Certificate request self-signature ok
subject=C=US, ST=Massachusetts, L=Boston, O=University of Central Florida, OU=Northeastern University, CN=VarshaElasticBeanstalkAndMongoDB, emailAddress=hindupur.v@northeastern.edu


# Steps and Outcomes:
Generate Root CA Key (rootCA.key):
openssl genrsa -out rootCA.key 2048
Outcome: Generated the private key for your root Certificate Authority (CA).
Generate Root CA Key with Password (rootCA.key)

openssl genrsa -des3 -out rootCA.key 2048
Outcome: Generated the private key with passphrase protection for your root CA.
Generate Root CA Certificate (rootCA.pem)

openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
Outcome: Created the self-signed root CA certificate (rootCA.pem) valid for 1024 days.
Details provided:
Country: US
State: Massachusetts
City: Boston
Organization: Phd Dissertation
Organizational Unit: University Of Central Florida
Common Name: Varsha Hindupur
Email: hindupur.v@northeastern.edu
Generate MongoDB Key (mongodb.key):

bash
Copy code
openssl genrsa -out mongodb.key 2048
Outcome: Generated the private key (mongodb.key) for MongoDB.
Generate Certificate Signing Request (CSR) for MongoDB (mongodb.csr):

bash
Copy code
openssl req -new -key mongodb.key -out mongodb.csr
Outcome: Created the CSR (mongodb.csr) to be signed by the CA.
Details provided:

Country: US
State: Massachusetts
City: Boston
Organization: University of Central Florida
Organizational Unit: Northeastern University
Common Name: VarshaElasticBeanstalkAndMongoDB
Email: hindupur.v@northeastern.edu
Sign MongoDB Certificate (mongodb.crt) with Root CA:

bash
Copy code
openssl x509 -req -in mongodb.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out mongodb.crt -days 500 -sha256
Outcome: Signed the MongoDB certificate (mongodb.crt) using the root CA certificate (rootCA.pem) and key (rootCA.key), valid for 500 days.
Subject details verified:

Country: US
State: Massachusetts
City: Boston
Organization: University of Central Florida
Organizational Unit: Northeastern University
Common Name: VarshaElasticBeanstalkAndMongoDB
Email: hindupur.v@northeastern.edu
Next Steps:
Now that you have your rootCA.pem, mongodb.key, and mongodb.crt files generated, you need to use these files in your Node.js application to connect to MongoDB with SSL/TLS.

# MongoDB Atlas 
Admin: hindupurv
pass: NinjaKellyV4613