
#  **Second Assignment-Project**

## Overview

Welcome to the Second Assignment-Project! This is a straightforward project built with an Express.js server using TypeScript and MongoDB with Mongoose. It includes essential configurations for linting, formatting, and testing.

## 🛠️ Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Tanvir-khondoker/L2-assignment-02.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd L2-assignment-02
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## ⚙️ Configuration

1. Create a `.env` file in the root of the project and set the following variables:

    ```env
    NODE_ENV=development
    PORT=5000
    DATABASE_URL=mongodb+srv://admin-um-2:wF7CVqCWoCALlvkh@cluster0.ypzt2um.mongodb.net/L2-assignment-2?retryWrites=true&w=majority
    BCRYPT_SALT_ROUNDS=12
    ```

    You can use your own MongoDB URI for local testing by replacing the `DATABASE_URL` value.

## 🌐 Production Link

- **[Visit the Production Site on Vercel](https://level2-assignment-2-orpin.vercel.app/)**

## 📜 Scripts

- **Start the application in production mode:**

    ```bash
    npm run start:prod
    ```

- **Start the application in development mode with ts node dev:**

    ```bash
    npm run start:dev
    ```

- **Build the TypeScript files:**

    ```bash
    npm run build
    ```

- **Lint the code:**

    ```bash
    npm run lint
    ```

- **Fix linting issues automatically:**

    ```bash
    npm run lint:fix
    ```

- **Format the code using Prettier:**

    ```bash
    npm run prettier
    ```

- **Fix formatting issues automatically:**

    ```bash
    npm run prettier:fix
    ```

