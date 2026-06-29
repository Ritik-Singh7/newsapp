import React, { Component } from 'react'

export default class N1 extends Component {
  render() {
    let {title, discription, imgLink} = this.props
    return (
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        
        <img
          className="w-full h-52 object-cover"
          src={imgLink} 
          alt="News"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">
            {title}
          </h2>

          <p className="text-gray-600 text-sm">
            {discription}
          </p>

          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>

      </div>
    )
  }
}
