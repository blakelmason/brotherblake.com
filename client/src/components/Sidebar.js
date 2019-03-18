import React from 'react';

const Sidebar = () => {
  return (
    <div
      style={{ minWidth: 300, maxWidth: 300 }}
      className="flex-fill text-center py-5 bg-white shadow border-right d-none d-lg-block"
    >
      <div>
        <h4>BrotherBlake.com</h4>
        <div className="text-secondary">Gospel Insights and Musings</div>
      </div>
    </div>
  )
}

export default Sidebar;