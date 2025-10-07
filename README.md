Project Sentry — Automating Inventory Replenishment

Project Sentry is an event-driven, microservices-based backend system that automates the inventory replenishment lifecycle — from low-stock detection to final delivery confirmation.
Built with Node.js, TypeScript, MongoDB, and Apache Kafka, it ensures real-time synchronization between stores and warehouses, reducing stockouts and overstocking.

Overview

UrbanStyle Apparel’s supply chain depends on keeping high-demand items available.
Project Sentry automates this process by implementing an event-driven architecture that handles the four stages of replenishment:

Stock Alert Management – Automated alerts when product quantity falls below the reorder threshold.

Transfer Order Creation – Intelligent order creation based on warehouse stock availability.

Shipment Tracking – Real-time updates as items move from warehouse to store.

Delivery Confirmation – Automatic inventory updates upon receipt at the store.

System Architecture

Project Sentry follows an event-driven microservices architecture, using Apache Kafka for message streaming and MongoDB as the digital thread (single source of truth).

Event Flow
Stage	Description	Kafka Topic
1	Raise Stock Alert	transfer-order
2	Create Transfer Order	shipment
3	Process Shipment	delivery
4	Confirm Delivery	— (final update)

Each stage produces an event that triggers the next stage in the lifecycle, ensuring smooth and asynchronous coordination between services.

Tech Stack
Category	Technologies
Backend Framework	Node.js, Express.js, TypeScript
Database	MongoDB
Message Broker	Apache Kafka
Containerization	Docker, Docker Compose
Environment	.env configuration support
Setup and Installation
Prerequisites

Ensure you have the following installed:

Node.js ≥ v18

Docker and Docker Compose

npm or yarn

Option 1: Run the Entire Stack via Docker (Recommended)
# Build all services
docker-compose build

# Start the stack
docker-compose up -d

# Check service status
docker-compose ps

# View backend logs
docker-compose logs -f backend


The application runs on: http://localhost:3003

Option 2: Run Backend Locally (Development Mode)

Start only MongoDB and Kafka using Docker:

docker-compose up mongo broker -d


Install dependencies and start the backend:

# Install Node dependencies
npm install

# Copy environment template
cp .env.template .env

# Start development server
npm run dev


The application runs on: http://localhost:3003

Populate Warehouse Items (Sample Data Setup)

You can add initial items to the warehouse database using the following commands (choose based on your OS/terminal).

Windows PowerShell
$body = @'
{
    "items":[
        {"item_name":"Zara Oversized Blazer","quantity":150,"price":79,"description":"Black oversized blazer with shoulder pads"},
        {"item_name":"H&M Skinny Jeans","quantity":200,"price":29,"description":"High-waisted skinny fit denim jeans"},
        {"item_name":"Forever 21 Crop Top","quantity":180,"price":12,"description":"Basic cotton crop top in various colors"},
        {"item_name":"Shein Maxi Dress","quantity":120,"price":24,"description":"Floral print summer maxi dress"},
        {"item_name":"Urban Outfitters Mom Jeans","quantity":100,"price":69,"description":"Vintage-style high-waisted mom jeans"}
    ]
}
'@

Invoke-RestMethod -Uri "http://localhost:3003/api/warehouse/additems" -Method POST -Body $body -ContentType "application/json"

Windows Command Prompt or Git Bash
curl -X POST http://localhost:3003/api/warehouse/additems ^
-H "Content-Type: application/json" ^
-d "{\"items\":[{\"item_name\":\"Zara Oversized Blazer\",\"quantity\":150,\"price\":79,\"description\":\"Black oversized blazer with shoulder pads\"},{\"item_name\":\"H&M Skinny Jeans\",\"quantity\":200,\"price\":29,\"description\":\"High-waisted skinny fit denim jeans\"},{\"item_name\":\"Forever 21 Crop Top\",\"quantity\":180,\"price\":12,\"description\":\"Basic cotton crop top in various colors\"},{\"item_name\":\"Shein Maxi Dress\",\"quantity\":120,\"price\":24,\"description\":\"Floral print summer maxi dress\"},{\"item_name\":\"Urban Outfitters Mom Jeans\",\"quantity\":100,\"price\":69,\"description\":\"Vintage-style high-waisted mom jeans\"}]}"

macOS or Linux Terminal
curl -X POST http://localhost:3003/api/warehouse/additems \
-H "Content-Type: application/json" \
-d '{"items":[{"item_name":"Zara Oversized Blazer","quantity":150,"price":79,"description":"Black oversized blazer with shoulder pads"},{"item_name":"H&M Skinny Jeans","quantity":200,"price":29,"description":"High-waisted skinny fit denim jeans"},{"item_name":"Forever 21 Crop Top","quantity":180,"price":12,"description":"Basic cotton crop top in various colors"},{"item_name":"Shein Maxi Dress","quantity":120,"price":24,"description":"Floral print summer maxi dress"},{"item_name":"Urban Outfitters Mom Jeans","quantity":100,"price":69,"description":"Vintage-style high-waisted mom jeans"}]}'

API Highlights
Endpoint	Method	Description
/api/alerts	POST	Raise a low-stock alert
/api/transfer/create	POST	Generate transfer order
/api/shipment/update	POST	Update shipment status
/api/delivery/confirm	POST	Confirm store delivery
/api/warehouse/additems	POST	Add sample warehouse items
Key Features

Event-driven lifecycle management using Kafka topics

Digital thread persistence in MongoDB

Unique identifiers for each replenishment order

Real-time stock updates and traceability

Stateless REST API design with microservice scalability

Future Enhancements

Add JWT authentication for service communication

Implement Prometheus and Grafana for observability

Integrate predictive analytics for demand forecasting

Deploy microservices on Kubernetes with auto-scaling

Author

Rohith Sarvesaa

PSG College of Technology — Computer Science Engineering(Artificial Intelligence and Machine Learning)

GitHub: https://github.com/rohithrajansarvesaa

Email: rohithrajansarvesaa@gmail.com

