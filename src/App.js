import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8c18e150c391487a94e2dba3b0d657eb"
      );
      console.log(response);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {
        data &&
        <textarea rows={15} value={JSON.stringify(data, null, 2)} readOnly={true} />
      }

    </div>
  );
};

export default App;
