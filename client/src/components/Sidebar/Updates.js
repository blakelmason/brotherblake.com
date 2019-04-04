/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React from 'react';
import Section from './Section';
import Dropdown from './Dropdown';
import NavItem from '../NavItem';

const Updates = ({ years }) => {
  return (
    <>
      <Section>Updates</Section>
      <div className="border-top border-right border-left">
        {
          years.map(year =>
            <Dropdown value={year.value} key={year.value}>
              {
                year.months.map(month =>
                  <Dropdown value={<div className="pl-2">{month.value}</div>} key={year.value + month.value}>
                    {
                      month.days.map(day =>
                        <div
                          className="bg-white border-bottom d-flex align-items-center"
                          style={{ height: 45 }}
                          key={year.value + month.value + day.value}
                          css={{
                            cursor: 'pointer',
                            transition: 'background ',
                            '&:hover': {
                              background: '#f0f2f4!important'
                            }
                          }}
                        >
                          <NavItem
                            exact
                            to={`/updates/${year.value}/${month.value.toLowerCase()}/${day.value}`}
                            display={`${month.value} ${day.value}`}
                            className="d-flex align-items-center"
                            style={{ paddingLeft: 32 }}
                          />
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