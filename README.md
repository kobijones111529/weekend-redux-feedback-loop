# Redux Feedback Loop

## Description

_Duration: weekend challenge_

A simple website allowing students to leave feedback about how they're doing.

Feedback consists of
1. Feeling - How students are feeling generally
2. Understanding - How students are feeling about their understanding of the content
3. Support - How well students are feeling supported
4. Comments - Any additional comments students have

Students enter this information on 4 separate pages, then review and submit it.

---

### Prerequisites

- [Node.js](https://nodejs.org/)
- Postgres

### Installation

1. Clone/fork this repo
2. Set up a Postgres database as described in [data.sql](./data.sql)
3. Install dependencies with `npm install`
4. Running:
   - In development:
     1. `npm run server`
     2. `npm run client`
     3. Open [http://localhost:3000] or wherever React is running the development server
   - In production:
     1. `npm run build`
     2. `npm start`
     3. Open [http://localhost:5001] or wherever the Express.js server is running

### Build With

- React.js
- Redux
- Express.js
- Postgres

---

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
