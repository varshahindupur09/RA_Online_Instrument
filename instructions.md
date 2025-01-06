backend for medicine app:

# /backend/.env
SEC_KEY = cE8z!$N#2sd@kR9wL5^yF
JWT_SEC = abc123!@#$%^&*()
MONGODB_URI = mongodb+srv://hindupurv:monopoly2024@online-instrument-origi.qg8wzeg.mongodb.net/?retryWrites=true&w=majority&appName=online-instrument-original&connectTimeoutMS=30000&socketTimeoutMS=30000
JWT_KEY = abc123!@#$%^&*()
STRIPE_KEY = justarandomvalue
PORT=5001

# create new .PEM file

# /frontend/.env
REACT_STRIPE_KEY = justarandomvalue

# AWS Access Keys:
AKIAVRUVQRBVP5MWCDFF
uBRYpbqrg5uTVlUskkqucoZTHdBiY687HlHktbM/

# steps reiterated for K8 deployment
Step 1: Create a Dockerfile for the Backend

Step 2: Create a Dockerfile for the Frontend (with Nginx)

Step 3: Create a .dockerignore File

Step 4: Build and Test Docker Images
	docker build -t medicine-backend:1.0 .
	docker run -p 5001:5001 medicine-backend:1.0

	docker build -t medicine-frontend:1.0 .
	docker run -p 3000:80 medicine-frontend:1.0

Step 5: Create Kubernetes Manifests
	Backend Deployment (backend-deployment.yaml)
	Backend Service (backend-service.yaml)
	Frontend Deployment (frontend-deployment.yaml)
	Frontend Service (frontend-service.yaml)

Step 6: Push Images to Docker Hub
	docker tag medicine-backend:1.0 hindupurv/medicine-backend:1.0
	docker push hindupurv/medicine-backend:1.0
	docker tag medicine-frontend:1.0 <your-dockerhub-username>/medicine-frontend:1.0
	docker push hindupurv/medicine-frontend:1.0
	
Step 7: Deploy to Kubernetes
	kubectl apply -f backend/backend-deployment.yaml
	kubectl apply -f backend/backend-service.yaml
	kubectl apply -f frontend/frontend-deployment.yaml
	kubectl apply -f frontend/frontend-service.yaml



# k8 deployment
https://medium.com/@subhampradhan966/deployment-of-a-three-tier-application-on-kubernetes-5fad942c6147

# EC2 setup commands
(base) varshahindupur@Varshas-MacBook-Air ~ % ifconfig
	inet 10.0.0.158 netmask 0xffffff00 broadcast 10.0.0.255

# SSH into EC2
Open local terminal and run the following commands:

ssh -i "/Users/varshahindupur/Downloads/Medicine-delivery-app-kubernetes-deployment/medapp-key-value-pair.pem" ubuntu@ec2-3-89-19-39.compute-1.amazonaws.com
	
(base) varshahindupur@Varshas-MacBook-Air ~ % ssh -i "/Users/varshahindupur/Downloads/Medicine-delivery-app-kubernetes-deployment/medapp-key-value-pair.pem" ubuntu@ec2-3-89-19-39.compute-1.amazonaws.com

root@ip-172-31-5-128:/home/ubuntu/3-tier# ls
Medicine-delivery-app-kubernetes-deployment

root@ip-172-31-5-128:/home/ubuntu/3-tier# cd Medicine-delivery-app-kubernetes-deployment

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# ls
README.md  backend  frontend  package-lock.json  package.json

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# cd ..

root@ip-172-31-5-128:/home/ubuntu/3-tier# sudo apt update

root@ip-172-31-5-128:/home/ubuntu/3-tier# sudo apt install awscli

root@ip-172-31-5-128:/home/ubuntu/3-tier# ls

Medicine-delivery-app-kubernetes-deployment

root@ip-172-31-5-128:/home/ubuntu/3-tier# sudo apt update

root@ip-172-31-5-128:/home/ubuntu/3-tier# sudo apt install awscli [Doesn’t work]

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo apt install awscli [Doesn’t work]

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo apt-get update 

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo apt-get install awscli  [Doesn’t work]

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo snap install aws-cli --classic
aws-cli (v2/stable) 2.22.7 from Amazon Web Services (aws✓) installed

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo pip3 install awscli --upgrade --user
error: externally-managed-environment

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo pip3 install awscli --upgrade --user

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# aws --version
aws-cli/2.22.7 Python/3.12.6 Linux/6.8.0-1016-aws exe/x86_64.ubuntu.24

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# aws configure
AWS Access Key ID [None]: AKIAVRUVQRBVP5MWCDFF
AWS Secret Access Key [None]: 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
Default region name [None]: us-east-1
Default output format [None]: json

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# usermod -aG docker $USER

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# newgrp docker

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo chmod 777 /var/run/docker.sock

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# which docker
/usr/bin/docker

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# curl -O https://s3.us-west-2.amazonaws.com/amazon-eks/1.31.2/2024-11-15/bin/linux/amd64/kubectl
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 53.7M  100 53.7M    0     0  8276k      0  0:00:06  0:00:06 --:--:-- 9239k

next:
chmod +x ./kubectl

mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$HOME/bin:$PATH

echo ‘export PATH=$HOME/bin:$PATH’ >> ~/.bashrc

kubectl version — client
error: extra arguments: [— client]

kubectl version

eks install:
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo mv /tmp/eksctl /usr/local/bin

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# eksctl version
0.194.0
root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# ls

README.md  backend  frontend  kubectl  package-lock.json  package.json

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# cd frontend

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment/frontend# ls
Dockerfile  frontend-deployment.yaml  package-lock.json  public
README.md   frontend-service.yaml     package.json       src

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# sudo adduser medapp-tier-user
info: Adding user `medapp-tier-user' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `medapp-tier-user' (1001) ...
info: Adding new user `medapp-tier-user' (1001) with group `medapp-tier-user (1001)' ...
info: Creating home directory `/home/medapp-tier-user' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password: 
passwd: password updated successfully
Changing the user information for medapp-tier-user
Enter the new value, or press ENTER for the default
	Full Name []: VarshaHindupurMedApp
	Room Number []: 35
	Work Phone []: 8576939108
	Home Phone []: 8576939108
	Other []: 8576939108
Is the information correct? [Y/n] y
info: Adding new user `medapp-tier-user' to supplemental / extra groups `users' ...
info: Adding user `medapp-tier-user' to group `users' ...

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# su - medapp-tier-user
medapp-tier-user@ip-172-31-5-128:~$ exit
root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment# cd frontend/

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment/frontend# su - medapp-tier-user

medapp-tier-user@ip-172-31-5-128:~$ aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/t0i2x4v5
Login Succeeded
medapp-tier-user@ip-172-31-5-128:~$ docker build -t medapp-frontend-repo .

medapp-tier-user@ip-172-31-5-128:~$ ls
snap

medapp-tier-user@ip-172-31-5-128:~$ exit
logout

root@ip-172-31-5-128:/home/ubuntu/3-tier/Medicine-delivery-app-kubernetes-deployment/frontend# docker build -t medapp-frontend-repo .


# steps for aws EKS deployment: https://docs.aws.amazon.com/codecatalyst/latest/userguide/deploy-tut-eks.html

aws --version
curl -O https://s3.us-west-2.amazonaws.com/amazon-eks/1.31.2/2024-11-15/bin/darwin/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin
kubectl version --client

OR 

-> install with homebrew
brew install kubectl
kubectl version --client

-> Install eksctl: eksctl is a CLI tool for creating and managing EKS clusters:
brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
eksctl version

-> cluster eks create:
eksctl create cluster --name mediapp-eks-cluster --region us-east-1 --nodes 2 --node-type t3.medium

-> verify deployment:
kubectl get nodes

-> one of these to launch ECR:
aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/t0i2x4v5
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 381491906666.dkr.ecr.us-east-1.amazonaws.com

-> ECR image push backend
aws ecr create-repository --repository-name medicine-backend
docker build -t medicine-backend .
docker tag medicine-backend:latest 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-backend:latest
docker push 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-backend:latest

-> ECR image push frontend
aws ecr create-repository --repository-name medicine-frontend
docker build -t medicine-frontend .
docker tag medicine-frontend:latest 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-frontend:latest
docker push 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-frontend:latest

-> ecs:
381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-backend
381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-frontend

kubectl get pods
NAME                                   READY   STATUS             RESTARTS       AGE
backend-deployment-755d74dcd8-5fhhn    0/1     CrashLoopBackOff   3 (49s ago)    101s
backend-deployment-755d74dcd8-k6fws    0/1     Error              4 (51s ago)    101s
frontend-deployment-58fdd5886f-bd9ct   0/1     CrashLoopBackOff   5 (108s ago)   5m
frontend-deployment-58fdd5886f-wrqnl   0/1     CrashLoopBackOff   5 (2m7s ago)   5m

kubectl logs backend-deployment-755d74dcd8-5fhhn
ans: exec /usr/local/bin/docker-entrypoint.sh: exec format error

docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 -t 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-backend:multiarch --push .
docker run --platform linux/amd64 -p 5001:5001 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-backend:multiarch
docker push 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-backend:multiarch

docker buildx build --platform linux/amd64,linux/arm64 -t 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-frontend:multiarch --push .
docker run --platform linux/amd64 -p 3000:80 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-frontend:multiarch
docker push 381491906666.dkr.ecr.us-east-1.amazonaws.com/medicine-frontend:multiarch


-> Apply Kubernetes Manifests:
cd backend
kubectl apply -f backend-deployment.yaml
<!-- kubectl apply -f backend-service.yaml -->

cd frontend
kubectl apply -f frontend-deployment.yaml
<!-- kubectl apply -f frontend-service.yaml -->


(base) varshahindupur@MacBookAir frontend % kubectl get pods
NAME                                   READY   STATUS    RESTARTS   AGE
backend-deployment-8d7dd77-ckccr       1/1     Running   0          45s
backend-deployment-8d7dd77-k9fb7       1/1     Running   0          51s
frontend-deployment-79c888f98b-pdt2z   1/1     Running   0          13s
frontend-deployment-79c888f98b-vzp4w   1/1     Running   0          17s

kubectl get services
NAME               TYPE           CLUSTER-IP       EXTERNAL-IP                                                               PORT(S)        AGE
backend-service    ClusterIP      10.100.31.129    <none>                                                                    5001/TCP       46m
frontend-service   LoadBalancer   10.100.142.248   abd9f2caab1484b0e8b17d43813e5981-1061278927.us-east-1.elb.amazonaws.com   80:31069/TCP   46m
kubernetes         ClusterIP      10.100.0.1       <none>                                                                    443/TCP        79m

run locally:
http://localhost:3000
http://localhost:5000

Configure frontend-service to Alias Record in Route 53 with Classic LB in us-east-1 region and abd9f2caab1484b0e8b17d43813e5981-1061278927.us-east-1.elb.amazonaws.com

Use Kubernetes Secrets Instead of .env:
kubectl create secret generic backend-env --from-env-file=backend/.env

gets names of the pods:
kubectl get pods 

kubectl describe pods backend-deployment-677f4f4f89-n9q28

kubectl exec -it backend-deployment-677f4f4f89-n9q28 -- env

(base) varshahindupur@MacBookAir Medicine-delivery-app-kubernetes-deployment % kubectl get nodes
NAME                            STATUS   ROLES    AGE   VERSION
ip-192-168-10-50.ec2.internal   Ready    <none>   32h   v1.30.7-eks-59bf375
ip-192-168-47-66.ec2.internal   Ready    <none>   32h   v1.30.7-eks-59bf375

COMMAND:
aws sts get-caller-identity
{
    "UserId": "AIDAVRUVQRBVKZFNC737W",
    "Account": "381491906666",
    "Arn": "arn:aws:iam::381491906666:user/VarshaHindupur"
}


ls ~/.kube/config
cat ~/.kube/config

provide access to AWS resources: DO not use this
aws sts get-caller-identity
kubectl edit configmap aws-auth -n kube-system

USE:
eksctl create iamidentitymapping \
  --cluster mediapp-eks-cluster \
  --region us-east-1 \
  --arn arn:aws:iam::381491906666:user/VarshaHindupur \
  --username admin \
  --group system:masters

(base) varshahindupur@MacBookAir Medicine-delivery-app-kubernetes-deployment % eksctl get iamidentitymapping --cluster mediapp-eks-cluster --region us-east-1

ARN                                                                                             USERNAME                                GROUPS   ACCOUNT
arn:aws:iam::123456789012:user/YourUserName                                                     admin                                   system:masters
arn:aws:iam::381491906666:role/eksctl-mediapp-eks-cluster-nodegro-NodeInstanceRole-VW3du6dKENY8 system:node:{{EC2PrivateDNSName}}       system:bootstrappers,system:nodes
arn:aws:iam::381491906666:user/VarshaHindupur                                                   admin                                   system:masters

aws eks --region us-east-1 update-kubeconfig --name mediapp-eks-cluster

kubectl get configmap aws-auth -n kube-system -o yaml > aws-auth.yaml

# working with ingress yaml
kubectl apply -f ingress/ingress-resource.yaml
kubectl get ingress mediswift-ingress

# logs / debugging
kubectl logs -l app=frontend
kubectl logs -l app=backend
kubectl exec -it <frontend-pod-name> -- curl http://backend-service.default.svc.cluster.local:5001/api

# restart k8
kubectl rollout restart deployment backend-deployment