import React from 'react';

function ButtonLink(props){
  // props => {className: "O que a gente passa", href: "/"}
  return (
    <a className={props.className} href={props.href}>
     {props.children}
    </a>
  );
}

export default ButtonLink;