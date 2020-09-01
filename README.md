# Simple Rest API using TypeScript

A simple nodejs application running a rest API written in TypeScript.

## Build and run the server
* npm run test
* npm run dev
* npm run prod

## Test the API
* curl http://localhost:3010/api/health/status
* curl -X POST -H "Content-Type: application/json" http://localhost:3010/api/product -d '{"name": "Ovaltine", "type": "drink"}'