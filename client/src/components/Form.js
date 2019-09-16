import React, {useState} from 'react'

const Form = (props) => {
  const { updateLeader } = props
  const [formData, setFormData] = useState({
    name: props.name,
    RSS: props.rss
  })
  const handleChange = (e) => {
    
    console.log(e.target.value);
    setFormData({
      ...formData,
      RSS: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    updateLeader(formData)
  }
  return (
    <div>
    <form>
      <label htmlFor="name">{props.name}'s New RSS:</label>
      <input id="name" value={formData.RSS} type="text" onChange={e=> handleChange(e)} required/>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  </div>
  )
}

export default Form
