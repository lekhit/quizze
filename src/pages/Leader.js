import Student from '../components/Student';
import back from '../resources/crown.png'

function Leader(){

    const leader = [[1,1100,'Somesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh'],[2,1000,'Rajesh']]

    return <div className="p-8 flex justify-center items-center w-screen h-full min-h-screen bg-gradient-to-t from-violet-800 to-violet-400">

                <div className=' w-[1000px] h-[600px] rounded-xl bg-white outline bg-[#7f0457] outline-2 outline-blue-800 flex justify-between'>
                    <div className='w-[100px] ml-28'>
                        <img src={back} className='m-28 mb-0'/>
                        <div className='rounded-t-xl justify-around flex border items-end  border-4 w-[300px] h-[400px]'>
                            <div className='bg-blue-300 border h-[200px] w-[60px] m-2 mb-0'>
                                01
                            </div>
                            <div className='border bg-blue-300 h-[320px] w-[60px] m-2 mb-0'>
                                02
                            </div>
                            <div className='border w-[60px] bg-blue-300 h-[160px] m-2 mb-0'>
                                03
                            </div>
                        </div>
                    </div>
                    <div className='w-fit pt-6'>
                    {leader.map((stud)=>{
                        return <Student name={stud[2]} position={stud[0]} score={stud[1]}/>
                    })}
                    </div>
                </div>
            
        </div>
}

export default Leader;