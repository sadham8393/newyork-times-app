# newyork-times-app

A simple and modern web application built with **React**, **Redux Toolkit**, **TypeScript**, and **Vite**, to browse the most popular articles from The New York Times.

## 🚀 Features

- Fetches top articles using the New York Times API.
- Responsive and clean UI.
- Loading skeletons for better UX.
- Error handling with retry options.
- Tested with Jest and React Testing Library.
- Integrated with SonarQube for quality checks.

## 📦 Tech Stack

- **React 18** + **Vite**
- **TypeScript**
- **Redux Toolkit** for state management
- **Axios** for API requests
- **Tailwind CSS** for styling
- **Jest** for testing
- **SonarQube** for code quality analysis

## 📝 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 20 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** - [Install Yarn](https://yarnpkg.com/)
- **git** (latest available version) - [Install Git](https://git-scm.com/)

## 🛠️ Setup

1. Clone the repository

```
git clone https://github.com/sadham8393/newyork-times-app.git
cd newyork-times-app
```

2. Install dependencies

```
npm install
# or
yarn install
```

## Running the project

```
npm start
# or
yarn start

```
The project will run in http://localhost:5173/

## Building the Project

```
npm run build
# or
yarn build

```

## Running Test cases

### Unit Tests:

> - To view the coverage report, navigate to folder coverage -> Icov-report -> index.html.
> * Open index.html in browser for better visual.

```
npm test
# or
yarn test
```
### For Test Coverage

```
npm run test:coverage
# or
yarn test:coverage
```


## Linting and Formatting

To ensure that the code is clean and consistent, we use **ESLint** for linting and **Prettier** for code formatting.

### Linting

To run the linter, use the following command:

```
npm run lint
# or
yarn lint

```
This will check for any linting errors in the code. Make sure to fix any errors or warnings.

### Formatting

To automatically format the code according to the Prettier rules, use the following command:

```
npm run format
# or
yarn format

```

This will format the code based on Prettier's default settings, making sure the code is consistently styled.


## 🛡️ SonarQube Integration

SonarQube is used for code quality checks and generating detailed reports. You can run SonarQube analysis as part of your workflow.

### 1. Setup SonarQube Locally

If you're running **SonarQube** locally, follow these steps to start SonarQube in a Docker container or directly on your machine:

#### Before running `npm run sonar` or `yarn sonar`, follow these steps to run SonarQube locally:

1. **Download SonarQube (Community Version)** from [SonarQube Downloads](https://www.sonarqube.org/downloads/).

2. A folder will be downloaded in `.zip` format. Extract the folder.

3. To start SonarQube in the command prompt terminal:
   - **For Windows**: Navigate to `bin` -> `windows-x86-64` -> press `StartSonar`.
   - **For Mac**: Navigate to `bin` -> `macosx-universal-64` -> press `sonar`.
   - **For Linux**: Navigate to `bin` -> `linux-x86-64` -> press `sonar`.

4. Wait for a moment until you see the message: `SonarQube is operational` in the terminal.

5. Once SonarQube is up and running, open [http://localhost:9000](http://localhost:9000) in your browser.

   - Default credentials: 
     - **Username**: `admin`
     - **Password**: `admin`


## License

This project is licensed under MIT License.








