import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen, setOrders } from '../../store/features/leftSideBar';

const LeftSide = () => {
  const { isOpen } = useSelector((state) => state.leftSideBar);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setOpen(false));
    dispatch(setOrders([]));
  };

  return (
    <aside className="side_nav">
      <div className="logo">
        <img src={'/src/assets/pos-logo.png'} alt="" />
      </div>
      <div className="asideLink">
        <ul>
          <li onClick={handleClick}>
            <NavLink to={'/'}>
              <img src={'/src/assets/pos-logo.png'} alt="" />
              <span>الرئيسيه</span>
            </NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to={'/dessert'}>
              <img src={'/src/assets/pos-logo.png'} alt="" />
              <span>الحلو</span>
            </NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to={'/completedOrders'}>
              <span>الطلبات الجاهزه</span>
            </NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to={'/uncompletedOrders'}>
              <span>طلبات تحت التجهيز</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftSide;
