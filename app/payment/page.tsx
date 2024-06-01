import React from 'react'
import MoneyAdd from "./moneyadd" 
import Sidebar from '../student/sidebar';

const page = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
      <MoneyAdd/>
      </div>
    </div>
  );
}

export default page