from diagrams import Cluster, Diagram
from diagrams.aws.network import Route53
from diagrams.aws.storage import S3
from diagrams.aws.network import CloudFront
from diagrams.aws.compute import ElasticBeanstalk
from diagrams.onprem.container import Docker
from diagrams.onprem.database import MongoDB as OnPremMongoDB
from diagrams.aws.analytics import Quicksight
from diagrams.onprem.client import User

with Diagram("AWS Application Architecture", show=False):
    with Cluster("AWS Cloud"):
        user = User("End User")
        route53 = Route53("DNS")
        s3 = S3("Static Content")
        cloudFront = CloudFront("Content Delivery")
        quicksight = Quicksight("Business Analytics")
        with Cluster("Elastic Beanstalk"):
            beanstalk = ElasticBeanstalk("App Deployment")
            docker = Docker("Docker Container")
            mongoDB = OnPremMongoDB("MongoDB Database")
        
        user >> route53 >> cloudFront >> s3
        user >> route53 >> beanstalk >> docker
        docker >> mongoDB
        mongoDB >> quicksight
        user >> quicksight
