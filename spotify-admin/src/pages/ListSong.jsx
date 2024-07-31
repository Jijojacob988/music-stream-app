import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {
  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      console.log('Response:', response.data);

      if (response.data.success) {
        setData(response.data.songs);
        console.log('Songs:', response.data.songs);
      } else {
        toast.error("Failed to fetch songs");
      }
    } catch (error) {
      toast.error("Error occurred");
      console.error('Fetch error:', error);
    }
  };

  const removeSong = async (id)=>{
    try {

        const response = await axios.post(`${url}/api/song/remove`,{id});

        if (response.data.success) {
            toast.success(response.data.message);
            await fetchSongs();
            
        }
        
    } catch (error) {
        toast.error("Error occured")
        
    }

  }

  useEffect(() => {
    fetchSongs();
  }, []);

  useEffect(() => {
    console.log('Data state updated:', data);
  }, [data]);

  return (
    <div>
      <p>All Songs List</p>
      <br />
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr 2fr 1fr 0.5fr', alignItems: 'center', gap: '2.5px', padding: '3px', border: '1px solid gray', backgroundColor: 'lightgray' }}>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr 2fr 1fr 0.5fr', alignItems: 'center', gap: '2.5px', padding: '3px', border: '1px solid gray' }}>
            <img style={{ width: '50px' }} src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.album}</p>
            <p>{item.duration}</p>
            <p className='cursor-pointer' onClick={()=>removeSong(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSong;
