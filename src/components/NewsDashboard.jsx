import React, { Component } from 'react'
import N1 from './N1'

export default class NewsDashboard extends Component {
  constructor(){
    super();
    console.log("hello papa")
  }
  render() {
    return (
      <div>
        <div className='w-full bg-red-500 h-20 text-center flex justify-center items-center border-2'>
          <h1 className='text-4xl font-bold'>DESI NEWS</h1>
        </div>
        <div className='bg-blue-900
 grid gap-4 pt-4 pb-5 grid-cols-3'>
          <N1 imgLink="https://static.toiimg.com/thumb/msid-132034808,imgsize-490767,width-400,height-225,resizemode-4/cbv-39.jpg" discription="Ashwin questions Gautam Gambhir's 'wrong utilisation' of Washington Sundar in T20Is" title="Backing without role clarity" />
          <N1/>
          <N1/><N1/>
        </div>
      </div>
    )
  }
}
