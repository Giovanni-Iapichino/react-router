import axios from "axios";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams();
  return (
    <div className="container">
      <h2>Post Detail</h2>
    </div>
  );
}
