import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
function Api() {
  const [data, setData] = useState([]);
  const getUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const alldata = await res.json();
    setData(alldata);
  };

  useEffect(() => {
    // Axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then((res)=>{
    //     setData(res.data);
    //     console.log(data)

    // })
    getUser();
  }, []);
  return (
    <div>
      <h2 className="text-center mt-5">Fatching Api</h2>

      <div className="container-fluid ">
        <div className="row text-center">

          {data.map((element) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">
                      {element.body}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
export default Api;
