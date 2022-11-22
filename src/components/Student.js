function Student(props){
    return <div className="flex outline outline-3 m-4 rounded-xl justify-around text-right p-1 text-white text-[20px] outline-blue-800 bg-[#cd96d7] w-[400px]">
        <div>{props.position}</div>
        <div>{props.name}</div>
        <div>{props.score}</div>
    </div>
}

export default Student;