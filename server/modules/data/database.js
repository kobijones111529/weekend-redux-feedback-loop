const pool = require('../pool');

module.exports = {
  getFeedback: async () => {
    const query = `
      SELECT * FROM "feedback"
        ORDER BY "id";
    `;
    const data = await pool.query(query);
    return data.rows;
  },
  addFeedback: async feedback => {
    const query = `
      INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
      VALUES
        ($1, $2, $3, $4);
    `;
    const queryData = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments];
    await pool.query(query, queryData);
  }
};
