import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apidata, setApidata] = useState([]);

  const ApiContent = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-05-09&to=2022-05-09&sortBy=popularity&apiKey=f6f9d8494fde45659ac634287eddf18e"
      )
      .then((data) => {
        setApidata(data.data.articles);
      });
    console.log(apidata);
  };
  useEffect(() => {
    ApiContent();
  }, []);
  return (
      <div className="container-fluid mt-5">

          <div className="row">
            {apidata.map((element) => {
              return (
                <div className="col-10 col-md-4 mt-2  " style={{width:"250px",height:"150px"}}>
                    <div className="d-flex align-items-center" style={{overflow:"hidden"}}>
      
                  <div className="col-mid-4  " >
                    <div class="card m-2">
                      <div class="card-header">Featured</div>
                      <div class="card-body">
                        
                        <p class="card-text">{element.title}</p>
                        
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
              );
            })}
          </div>
      </div>
        );
}
export default App;
