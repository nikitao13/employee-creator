# Employee Creator Portal

## An internal tool for creating, updating, and deleting employee data.

### Features:

#### - View current employee data

#### - Modify existing employee data

#### - Delete existing employee data

#### - Create new employee data

#### - Download employee data as JSON

#### - Filter employee data with searchbar

---

### Running the application:

```bash
cd client
npm i
npm run dev
```

Input MySQL credentials in application.properties.

```bash
cd backend
mvn spring-boot:run
```

This will seed the database with some pre-filled data. To remove/edit the mock data, delete/edit the EmployeeSeeder.java file.

---

### Future Updates

#### - Implement AWS S3 cloud storage for employee profile images

---

#### Made using React, Typescript, Java, MySQL, & Sass.
