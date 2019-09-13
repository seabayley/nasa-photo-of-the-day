import React, { useState, useEffect } from "react";
import axios from 'axios';
import MediaContainer from './components/MediaContainer';
import MediaInfo from './components/MediaInfo';
import DatePicker from './components/DatePicker';
import "./App.css";


function App() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date('2017-03-14T21:11:54'));

  function useAxios() {

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=r0xlPKp5sbsJPh2cxpTryqkoyxmhX5zK2AEVyqyR&date=${formatDate(selectedDate)}`)
        .then(function (response) {
          setApodData(apodData => apodData = response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [selectedDate])
  }

  function formatDate(date) {
    let temp = date.toLocaleDateString().split('/');
    return [temp[2], temp[0], temp[1]].join('-')
  }

  useAxios();

  return (
    <div className="apod_wrapper">
      <DatePicker setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
      <MediaContainer imageData={apodData} loading={loading} />
      <MediaInfo imageData={apodData} loading={loading} />
    </div>
  )
}



export default App;