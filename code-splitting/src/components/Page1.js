import React from 'react'

const Page1 = ({setPage,pagenumber}) => {
    return (
        <div>
            <h1>Page 1</h1>
            <button disabled={pagenumber==1 ? true:false} onClick={() => setPage(1)}>Page 1</button>
            <button onClick={() => setPage(2)}>Page 2</button>
            <button  onClick={() => setPage(3)}>Page 3</button>
        </div>
    )
}

export default Page1