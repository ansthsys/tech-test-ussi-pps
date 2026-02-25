# tech-test-ussi-pps

Create a simple app to manage employees:

- Create employee
- List employee
- Edit employee
- Delete employee

## prerequisites

- PHP >= 8.3
- Node >= 22
- NPM
- PostgreSQL 15

## tech stack

- React
- Laravel
- Inertia
- TailwindCSS
- Shadcn

## run locally

- ### setup PHP

    - copy env `cp .env.example .env`
    - install dependencies `composer install`
    - generate key `php artisan key:generate`
    - change db env value `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`, `DB_SSLMODE`, `DB_URL`
    - run migration and seeder (if any) `php artisan migrate --seed`
    - run backend `php artisan serve`

- ### setup frontend

    - install dependencies `npm install`
    - run frontend `npm run dev`

## requirement

### data structure

| Field      | Type                         | Description         |
| ---------- | ---------------------------- | ------------------- |
| id         | Int (Primary Key)            | Employee id         |
| name       | String                       | Employee name       |
| position   | Enum (admin, staff, manager) | Employee position   |
| start_date | Date                         | Employee start date |
| status     | Boolean                      | Employee status     |

### validation

- `id`: auto increment, required
- `name`: required
- `start_date`: required, cannot be greater than today
- `position`: required, must be one of `admin`, `staff`, or `manager`
- `status`: nullable, default to `true`
