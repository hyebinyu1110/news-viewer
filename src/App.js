<<<<<<< HEAD
import NewsList from './components/NewsList';

const App = () =>{

return(
  <div>
   <NewsList />
  </div>
)
=======
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
>>>>>>> 6f7adca3136c8b57c7394737cd5d00093273adf6

}

export default App;