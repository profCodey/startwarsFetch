import React, {useEffect, useState} from 'react'
import './button.css'
import axios from "axios";



export default function Button() {
  const [result, setResult] = useState(null);
  const [title, setTitle] = useState(false);
  const [charArr, setCharArr] = useState([]);
  const [totalHeight, setTotalHeight] = useState(0);
  const [movieName, setMovieName] = useState("");
  const [show, setShow] = useState(false);

    
  const [info, setInfo] = useState(false);
  useEffect(() => {
    const url = "https://swapi.dev/api/films";
    axios.get(url).then((response) => {
      let output = response.data.results;
      setResult(output);
       
    });
  }, [!result]);

  const handleClick = () => {
    
    if (title === false) {
      setTitle(true);
    } else {setTitle(false)};
if (info === true) {
      setInfo(false);
    }

  }


  
  
  const infoClick = (movieTitle, characters, gender) => {
    // setResuot((prevEvent) => {
    //   return title.filter((title) => {
    //     return movieTitle !== title;
    //   })
    // });
      setCharArr([]);
    characters.forEach((element) => { 
      axios.get(element).then((response) => { 
        setCharArr((charArr) => [...charArr, ...[response.data]]);
  
        handleClick()
        setInfo(true);
        setTitle(false);
        console.log(charArr);

        // result.filter((event) => {
        //   return movieTitle !== event.title
        // })
        
      });
    });
  };




  return (
    <>
      <div className="allButton">
        <div className="btn-div">
          <button className="btn" onClick={handleClick}>
            Choose a star wars movie
            <i className="arrow down"></i>
          </button>
        </div>
        {title && (
          <div className="movieDiv">
            <div className="movieList">
              <ul className="dropdown">
                {result ? (
                  result?.map((item, i) => (
                    <li
                      className='drop'
                      key={item.title}
                      onClick={() => infoClick(item.title, item.characters)}
                    >
                      {item.title}
                      <i className="arrow down"></i>
                    
                        <marquee behavior="scroll" direction="left">
                          {item.opening_crawl}
                        </marquee>
                     
                    </li> 

                    
                 
                  ))
                ) : (
                  <>Loading...</>
                )}
              </ul>
            </div>
          </div>
        )}

        {info && (
          <div className="movieDi mo">
            <div className="movieLis">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Height</th>
                  </tr>
                </thead>
                <tbody>

                  {charArr ? (
                    <>
                      
                      {charArr?.map((char, index) => (
                        <tr key={index}>
                          <td>{char.name}</td>
                          <td>{char.gender}</td>
                          <td>{char.height}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <b>
                            Total <br />
                            Characters
                          </b>{" "}
                          <br />
                          {charArr.length}
                        </td>
                        <td></td>
                        <td>
                          <b>Total Height</b> <br />
                          {charArr.reduce(
                            (a, b) => (a + b.height ? a + +b.height : a + 0),
                            0
                          )}
                          cm
                        </td>
                      </tr>
                      
                    </>
                  ) : (
                    <div style={{ color: "#fff" }}>Loading...</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );


}
  