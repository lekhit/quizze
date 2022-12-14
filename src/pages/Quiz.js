import Questions from "../components/Question";

function Quiz(){

    let Question = {number:'1',question:'What the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']}

    return <div className="p-8 relative flex justify-center items-center w-screen h-full min-h-screen bg-gradient-to-t from-violet-800 to-violet-400">
        <div className="absolute h-screen bottom-2/3 opacity-30 right-screen sm:right-2/3 w-full sm:w-1/3 rounded-r-full bg-red-300"></div>
        <div className="absolute h-screen bottom-2/3 opacity-30 left-screen sm:left-2/3 w-full sm:w-1/3 rounded-l-full bg-red-300"></div>
        <Questions question={Question}/>
    </div>
}

export default Quiz;