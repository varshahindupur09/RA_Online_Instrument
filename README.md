# RA_Online_Instrument
This is an online instrument that allows the surveys to be hosted for determining spatial ability as part of experiment. I will be the Solution Architect for this application's development and this experiment will allow us to gather insights of approximately 200 individuals responses to surveys.

## Run Locally
### Terminal 1:
cd frontend
npm start

### Terminal 2:
cd backend
node server.js
http://localhost:8080/api-docs/

# To Clone this repository
Use following commands:
1. git clone https://kwellman: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@github.com/varshahindupur09/RA_Online_Instrument.git
2. cd RA_Online_Instrument
3. python -m venv <environment_name>
4. source venv_oi/bin/activate
5. conda deactivate

# 4-condition online instrument surveys:
    location: https://barvc.limesurvey.net/admin/index
    Survey 1: https://barvc.limesurvey.net/669436?lang=en
    Survey 2: https://barvc.limesurvey.net/555449 : This is for finacial literally validation and graph solutions

# Installations: React JS
1. pip freeze > requirements.txt, after creating requirements.txt and choosing the libraries required
2. pip install streamlit
3. npx create-react-app front-end, cd front-end, npm i react-router-dom --save styled-components, npm install react-icons
4. npm start

# Vue Commands
1. npm uninstall -g @vue/cli
2. vue create front-end-vue
3. cd front-end-vue
4. npm install vue-router@4
5. npm run serve
<!-- 6. npm install bootstrap bootstrap-vue -->
<!-- 7. npm install bootstrap@5 or npm install bootstrap-vue bootstrap@5 -->
8. npm install @vue/cli-service@latest
9. npm audit fix --force
10. npm install vueify --save-dev, vue add vuetifyy

# Professor Kelly's Github Token: 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

# Varsha's Github Token: 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
git clone https://hindupur.v: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@github.com/varshahindupur09/Medicine-delivery-app-kubernetes-deployment.git

# Currently, Backend = Mangoose + MongoDB 
cd backend
npm install mongoose=8.3.0

# Config changes in docker daemon for setting up DNS configuration 
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "dns": ["8.8.8.8", "8.8.4.4"]
}

# docker build -t my-react-app --progress=plain .


# Using swagger to test APIs
cd backend
npm install swagger-ui-express swagger-jsdoc
brew services start mongodb-community
brew services restart mongodb-community
npm install cors
npm install express mongoose cors dotenv
brew tap mongodb/brew
brew install mongodb-community-shell

http://localhost:3000/api-docs

npm install axios


# release a port with this command
lsof -i :8080
kill -9 <PID>

# backend commands
conda deactivate
cd backend/
lsof -i :8080

docker build -t my-node-backend:latest . 
~/eb-docker-flask$ docker build -t eb-docker-flask

docker run -p 8080:8080 my-node-backend:latest
docker run -dp 127.0.0.1:5000:5000 eb-docker-flask .

docker kill ad573933fed84fbd57172d36f9bc9349bbef3dd9b76cf5c36d80b49cbf41c520

# creating ebextensions for backend
1. mkdir backend/.ebextensions
2. Create a configuration file (backend/.ebextensions/01_config.config):
  option_settings:
    aws:elasticbeanstalk:environment:proxy:
      ProxyServer: nginx
    aws:elasticbeanstalk:application:environment:
      NODE_ENV: production
      MONGO_URI: YOUR_MONGO_URI_HERE
3. cd backend
zip -r ../nodejs.zip . -x "node_modules/*" -x ".git/*"

# adding cors
cd backend
npm install cors

# 2 gitignores and envs
frontend:
REACT_APP_API_BASE_URL=http://experiment-study.us-east-1.elasticbeanstalk.com/  this isnt that now
backend:
MONGO_URI=mongodb+srv://hindupurv:monopoly2024@@online-instrument-origi.qg8wzeg.mongodb.net/?retryWrites=true&w=majority&appName=online-instrument-original


# 3 beanstalk app
aws cloudformation create-stack --stack-name my-beanstalk-stack --template-body file://cloudformation-template.yaml --capabilities CAPABILITY_NAMED_IAM
o/p:
{
    "StackId": "arn:aws:cloudformation:us-east-1:381491906666:stack/my-beanstalk-stack/a36b7a00-3bf9-11ef-8c38-0eabe201a2a3"
}

# 4 CICD Workflows



# s3 bucket commands AWS CLI
npm run build
aws s3 rm s3://adg429.com --recursive
aws s3 cp "/Users/varshahindupur/Downloads/RA_Online_Instrument/frontend/build" s3://adg429.com/ --recursive --exclude "*/" --include "*"


# backend deploy
cd backend
zip -r ../nodejs.zip . -x "node_modules/*" -x ".git/*"

# Run what needs to be changed
.env in backend
BACKEND_API_URL=https://backend.adg429.com
BACKEND_API_URL=http://localhost:8080

.env in frontend
REACT_APP_API_BASE_URL=https://backend.adg429.com
REACT_APP_API_BASE_URL=http://localhost:8080
