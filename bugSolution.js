import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Access props and state here after component mount
    const fetchData = async () => {
      //Simulate an API call or some async operation
      const response = await new Promise(resolve => setTimeout(resolve, 1000));
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <div>
       {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};
export default MyComponent;