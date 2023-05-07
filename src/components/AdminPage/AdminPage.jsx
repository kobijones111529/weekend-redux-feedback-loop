import { useEffect, useState } from "react";
import { getFeedback } from "../../api/dummy";

function AdminPage() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getFeedback()
      .then(feedback => {
        setFeedback(feedback);
      });
  }, []);

  return (
    <>
      <p>Admin stuff</p>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map(feedback => {
            return (
              <tr key={feedback.id}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default AdminPage;
