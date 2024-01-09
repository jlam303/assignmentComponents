import React from 'react'

const DynamicListContainer = ({data,type}) => {
  return (
    <div className='divo'>
    {type === "ul" && <ul>
        {data.map((x,i)=>{
            return <li key={i}>{x}</li>
        })}
    </ul>}
    {type === "ol" && <ol>
        {data.map((x,i)=>{
            return <li key={i}>{x}</li>
        })}
    </ol>}

    </div>
  )
}

export default DynamicListContainer