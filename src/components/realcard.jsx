import React from 'react'

const Realcard = (props) => {
  return (
    <div>
    
        <div className='container'>
            <div className="img">
                <img src="https://images.unsplash.com/photo-1580570598977-4b2412d01bbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvd3N8ZW58MHx8MHx8fDA%3D" alt="cow" />
                </div>
                <div className="name">
                    <h2>{props.user} {props.saal}</h2>
                   
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sunt accusamus recusandae, modi sint fugiat soluta asperiores sit sed labore.</p>
                    
                </div>
            
        </div>
  
    </div>
  )
}

export default Realcard