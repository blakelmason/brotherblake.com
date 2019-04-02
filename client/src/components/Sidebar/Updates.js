import React from 'react';
import Section from './Section';
import Dropdown from './Dropdown';
import NavItem from '../NavItem';

const Updates = ({ years }) => {
  console.log(years);
  return (
    <>
      <Section>Updates</Section>
      <div
        className="border"
        style={{
          display: 'grid',
          gridGap: 1,
          background: '#dee2e6'
        }}
      >
        {
          years.map(year =>
            <Dropdown value={year.value}>
              {
                year.months.map(month =>
                  <Dropdown value={<div className="pl-2">{month.value}</div>}>
                    {
                      month.days.map(day =>
                        <div className="bg-white border-top d-flex align-items-center" style={{ height: 45 }}>
                          <div className="mr-auto" style={{ marginLeft: 16 }}>
                            <NavItem exact to={`/updates/${year.value}/${month.value.toLowerCase()}/${day.value}`} display={`${month.value} ${day.value}`} />
                          </div>
                        </div>
                      )
                    }
                  </Dropdown>
                )
              }
            </Dropdown>
          )
        }
      </div>
    </>
  )
}

export default Updates