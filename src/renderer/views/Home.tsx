/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import { type } from 'os';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type PropsButton = {
  link: string;
  name: string;
};
const ButtonReutilizable =({ link, name }: PropsButton) =>{
  return (
    <div>
      <button>
        <a target='blank' href={link}>{name}</a>
      </button>
    </div>
  );
}

export default ButtonReutilizable;
