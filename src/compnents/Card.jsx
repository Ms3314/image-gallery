import React from 'react'
Window.React = React

function Card({ img }) {
    const tag = img.tags.split(",")
  return (
    <div className='max-w-sm h-fit rounded-xl overflow-hidden shadow-lg'>
      <img src={img.largeImageURL} alt="" className=" p-5 w-full  " />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {img.user}
            </div>
          <div>
              <ul>
                  <li>
                    <strong>Views : </strong>
                    #{img.views}
                  </li>
                  <li>
                     <strong>Downloads : </strong>
                    #{img.downloads} 
                  </li>
                  <li>
                    <strong>Likes : </strong>
                    #{img.likes}
                  </li>
              </ul>
            </div>
      </div >
      <div className="px-6 py-4 flex flex-wrap gap-3 text ">
      {tag.map(tag => (
        <span key={tag} className=' bg-slate-300 rounded-full py-[7px] px-[13px]  text-sm font-semibold text-grey-700 '>
             {tag} 
        </span>
      ))}
      </div>
    </div>
  )
}

export default Card

