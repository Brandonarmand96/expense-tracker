import React from 'react';



const current = new Date();
  //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const date = current.toDateString()
function Footer () {
    return(
        <div className="footer">
            <h2> LeRoi Vladimir codes {date}</h2>
        </div>
    )
}


export default Footer;