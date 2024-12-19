from graphviz import Digraph

# Create a flowchart for the system design
flowchart = Digraph("SurveyPlatformSystemDesign", format="png")

# Define nodes for the flowchart
flowchart.node("Frontend", "Frontend (Flutter & Web)")
flowchart.node("API", "Backend API (Node.js + Express)")
flowchart.node("DB", "Database (MongoDB Atlas)")
flowchart.node("LoadBalancer", "Load Balancer (AWS ELB)")
flowchart.node("Storage", "Static Assets (AWS S3)")
flowchart.node("Auth", "Authentication (JWT)")
flowchart.node("Monitoring", "Monitoring & Alerts (CloudWatch)")

# Define edges for the flowchart
flowchart.edges([
    ("Frontend", "LoadBalancer"),
    ("LoadBalancer", "API"),
    ("API", "Auth"),
    ("API", "DB"),
    ("API", "Storage"),
    ("API", "Monitoring"),
])

# Save and render the flowchart
flowchart.render("SurveyPlatformSystemDesignBasic", "./SurveyPlatformSystemDesign.png")
