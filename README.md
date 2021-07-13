# Welcome to Academy Admission Project
# Overseas IT Solutions
## An Academy Admission management app

App Name : Academy Admission

Development Team : 

Mentor: Monika Yadav (Senior MERN stack expert)
Pushparaj Kavara (Intern MERN stack developer : 9th June 2021 - 4th July 2021)

---

**About this file**  
The purpose of this file is to provide overview, setup instructions and background information of the project. If you have joined this project as a part of the development team, please ensure this file is up to date.  
  
**Note : All developers must ensure that the instructions mentioned in this file are sufficient to enable a new developer to obtain a executable copy of the lastest code in this repository, without involvement from any other human assistance.**

---

**Tools and Hardware Requirements Declaration**

I) Software requirements
1) Windows OS (or any other OS like Linux, MacOS)
2) Node.js LTS
3) VS Code (or Sublime or any other code editor)
4) MongoDB local (or cloud atlas)

II) Hardware requirements
1) Minimum 4 GB RAM
2) Minimum 8 GB Available Disk Space

---

**Project Technical Specifications**

* This project is a Javascript based MERN stack project which uses ReactJS   
  framework in front-end and NodeJS in backend.
* The Express is used to start the server and MongoDB (NoSQL) as database.
* This React project is crated using notus react template for design of front-end.
* The front-end client part uses Tailwind CSS for the design and styling.

---

**Setup Instructions**  
As mentioned earlier , this is a MERN stack project,  
The below mentioned steps may vary significantly across various operating systems, please follow them accordingly.

These instructions are aimed at a developer who has been added to the project team, after the project development has already been initiated,

Therefore the aim is to get the code from the git repository to run on the developer's system, so as to allow him / her to continue with further development.

---
**Create Project directory**

```mkdir Academy-Admission```

**Change current working directory to Project directory**

```cd Academy-Admission```

**Clone the repository from GitHub :**  

```git clone https://github.com/Pushparaj-Overseasits/academy-admission.git```

( This is the Client-Template as well as the Server root folder. )

**Checking out the latest development branch**

As of writing this guide the main branch used for development is : master  
To switch to this branch run : 

```git checkout master```

**Installing dependencies**  
This project requires npm packages for running,
You can install it by following the steps below:

**Change current working directory to Project directory**

```cd Academy-Admission```

**Change current working directory to client-template**

```cd client-template```

**Install all the Node Packages and Dependencies mensioned in package.json file**

```npm install```

**Wait for all the dependencies and node packages to be installed then follow same steps in server directory in the Project directory**

```cd Server```

**Install all the Node Packages and Dependencies mensioned in package.json file**

```npm install```

**Create an .env file for storing environment variable for backend server**
**Enter the following environment variables into .env file**
```API_SERVER_PORT=8000```
```MONGODB_URL='mongodb://localhost/academyAdmission'```
```SECRET_KEY=IAMAMERNSTACKDEVELOPERTHISISACADEMYADMISSIONBYOVERSEASITS```

The NodeJS version used at the time of writing this file is : ```14.15.3```
You can check the installed version using ```node --version```

The MongoDB version used at the time of writing this file is : ```4.4.3```
You can check the installed version using ```mongo --version```

The package.json file contains the list of all dependency packages and scripts used for this project.
Please ensure this file is updated incase any package is added / removed.

**Start the development server :**  

**Go to the Project Directory using Command Line or Terminal**

**To start Server change working directory to server**

```cd server```

**Enter following and wait for the Server to start serving**

```npm start```

**To start Client change working directory to client-template**

```cd client-template```

**Enter following and wait to start the Client and Open this link in browser: http://localhost:3000**

```npm start```

---
**Note for future developers**
The Way in which the Student List section of Admin displays the details of Students in not very great UI.
