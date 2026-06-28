function Inputs (props) {
  return (
    <input 
    type={props.type}
    placeholder={props.placeholder} 
    className="border border-slate-300 outline-slate-400 px-4 p-2 rounded-md" 
    value={props.value}
    onChange={props.onChange}
      />
  )
  
}

export default Inputs;