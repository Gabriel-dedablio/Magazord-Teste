import { UserProps } from "../types/user"
import {MapPin, Buildings,TwitterLogo, Link as LinkIcon, CaretDown} from 'phosphor-react'
import style from './cardUser.module.css'
import  Smiley from '../assets/smiley.svg'
import { useState } from 'react';

const User = ({
    name, 
    avatar_url, 
    location,
    company,
    bio,
    blog,
    twitter_username,
  }:UserProps) => {

  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className={style.card}>
      <div className={style.avatar}>
        <img src={avatar_url} alt={name} />
        <img src={Smiley} alt="smiley icon" className={style.smiley} />
      </div>

      <h2 className={style.name}>{name}</h2>
      {bio && <h3 className={style.subtitle}>{bio}</h3>}

      <div className={style.aboutMobile}>
        <button 
            onClick={() => setToggle(!toggle)}>
            Informações Adicionais
            <CaretDown weight="bold" style={toggle ? { transform:'rotate(180deg)' } : { transform:'rotate(0)' }} />
        </button>
        {toggle && (
          <div className={style.about}>
            {location && 
            <a target="_blank" href={`https://www.google.com/maps/place/${location.split(" ").join("+")}`}>
              <MapPin /><span>{location}</span>
            </a>
            } 
            {company && 
            <p>
              <Buildings />
              <samp>{company}</samp>
            </p>
            }
            {blog && <a target="_blank" href={blog} ><LinkIcon/><span>{blog}</span></a>}
            {twitter_username && <a target="_blank" href={`https://twitter.com/${twitter_username}`}><TwitterLogo/><span>{twitter_username}</span></a>}
          </div>
        )}
      </div>
    </div>
  )
}

export default User
