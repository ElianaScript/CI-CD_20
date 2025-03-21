# CI/CD_20

## Project Overview
This project is a **CI/CD pipeline** implementation for a **MERN-stack application** with a client-server architecture. The pipeline automates testing, building, and deployment to a cloud hosting provider (**Render**).

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **CI/CD**: Render, GitHub Actions
- **Testing**: Cypress

## Project Structure
```
CI-CD_20/
│── client/           # React frontend
│── server/           # Express backend
│── .github/workflows # (Optional) CI/CD workflows
```

## Setup & Installation
### Prerequisites
- **Node.js**
- **MongoDB**
- **Git**

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/ElianaScript/CI-CD_20.git
   cd CI-CD_20
   ```
2. **Install dependencies**
   ```sh
   cd server && npm install
   cd ../client && npm install
   ```
3. **Set up environment variables**
   - Create a `.env` file in the `server/` directory:
     ```ini
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
4. **Run the development server**
   ```sh
   cd server && npm run dev
   ```
   In another terminal:
   ```sh
   cd client && npm start
   ```

## Deployment on Render
- **Automatic Deployment**: Push changes to `main` branch.
- **Manual Redeployment**: Use Render Dashboard.
- **Troubleshooting**: Check logs via `render logs`.

## Testing
Run tests using Cypress (E2E & component testing):
```sh
cd client
npm run test
```

###  Node version mismatch
Ensure Node.js version is set correctly in `package.json`:
```json
"engines": {
  "node": "22.x"
}
```

## Contributing
1. Fork the repo
2. Create a new branch
3. Make changes & commit
4. Open a PR!

## License
MIT License © 2025 ElianaScript

