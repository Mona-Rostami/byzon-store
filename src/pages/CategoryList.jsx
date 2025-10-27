import React from 'react'

const CategoryList = ({data}) => {
    console.log();
    
  return (
    <div>
      {data?<div>
        {
        data.map((item)=>{
            return(
              <div><div>{item.title}</div>
                <img src={item.images} alt="" /></div>
                
            )
        })
        }
      </div>:<div></div>}
    </div>
  )
}

export default CategoryList
