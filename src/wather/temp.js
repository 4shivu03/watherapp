import React from 'react'

function Temp() {
  return (
    <>
        <div className='wrsp'>
            <div className='=search'>
<input type='search' placeholder='search here....' autoFocus id='search' className='searchTerm'/>
<button className='searchbutton' type='button'>search</button>
            </div>
        </div>
        <article>
            <div>
                <i className='wi wi-day-sunny'></i>
            </div>
            <div>
                <div>
                    <span>25.25deg;</span>
                </div>
                <div></div>
            </div>
        </article>
    </>
  )
}

export default Temp
