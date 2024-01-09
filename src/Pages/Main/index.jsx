import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '@img/profile.png';
import Template from '@components/Templates/Main/Template';

const Main = () => {
  return (
    <div>
      <Template />

      <aside>
        <input type='text' />
        <ul>
          <li>
            Js <span>1</span>
          </li>
          <li>
            Ts<span>2</span>
          </li>
          <li>
            react<span>3</span>
          </li>n
          <li>
            zustand<span>1</span>
          </li>
        </ul>
      </aside>
      <aside>
        <h2>최근 본 포스트</h2>
        <ul>
          <li>최근 본 포스트1</li>
          <li>최근 본 포스트2</li>
          <li>최근 본 포스트3</li>
          <li>최근 본 포스트4</li>
          <li>최근 본 포스트5</li>
        </ul>
      </aside>
    </div>
  );
};

export default Main;
