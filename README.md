# Projects manager app
This is an app for manage your projects with tasks, soonly I will add a settings panel, but now I am a bit tired of this project. So this is only a fast preview.

## Table of contents

* [Project on development setup](#run-on-development-setup)
	* [Database](#database)
	* [Backend](#backend)
	* [Frontend](#frontend)

## Run on development setup

### Database
You only need to have [mysql](https://www.mysql.com/) installed and create a user with password and a database. Then you edit the **api/.env** file and put your credentials and your database name.

### Backend
This backend is created with [node](https://nodejs.org/en/) and [express](https://expressjs.com/es/) so cd into **api/** and run:
```bash
npm i
```
Before run the project you must add a PORT and a JWT_SECRET on the **.env** then run the project then
```bash
npm run dev
```

### Frontend
This fronted is made with [astro](https://astro.build/) and [tailwind](https://tailwindcss.com/) so cd into **app/** and run: 
and run:
```bash
npm i
```
Before run the project you must add a PUBLIC_BASE_URL and a PUBLIC_JWT_SECRET on the **.env** then run the project then
```bash
npm run dev
```

