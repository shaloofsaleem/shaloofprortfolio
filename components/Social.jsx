import Link from 'next/link'

import {FaGithub, FaLinkedin, FaYoutube ,FaTwitter} from 'react-icons/fa'


const Socials = [
    { icon : <FaGithub/>, path: 'https://github.com/shaloofsaleem' },
    { icon : <FaLinkedin/>, path: 'https://www.linkedin.com/in/shaloof-saleem/' },
    { icon : <FaYoutube/>, path: '' },
    { icon : <FaTwitter/>, path: 'https://x.com/SaleemShaloof' },
  ];


const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        Socials.map((item,index)=>{
          return<Link key ={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })
      }
    </div>
  )
}

export default Social
