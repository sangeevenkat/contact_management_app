import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }
    const [statusSelect, setStatusSelect] = useState('active');

  const handleChangeRadio = (event) => {
    setStatusSelect(event.target.value);
  };




    function handleSave() {



        dispatch(addContact(form))

    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
  <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
  <div className='formbox m-4 p-6'>
  <div className="mb-4 flex">
    <label className="font-bold mb-2 w-1/4" htmlFor="first-name">
      First Name:
    </label>
    <input
      className="border border-gray-400 p-2 rounded-md flex-grow"
      id="first-name"
      type="text"
      name="first_name"
      value={form.first_name}
      onChange={handleChange}
    />
  </div>

  <div className="mb-4 flex">
    <label className="font-bold mb-2 w-1/4" htmlFor="last-name">
      Last Name:
    </label>
    <input
      className="border border-gray-400 p-2 rounded-md flex-grow"
      id="last-name"
      type="text"
      name="last_name"
      value={form.last_name}
      onChange={handleChange}
    />
  </div>

  <div className="mb-4 flex">
    <label className="font-bold mb-2 w-1/4" htmlFor="mobile-number">
      Mobile Number:
    </label>
    <input
      className="border border-gray-400 p-2 rounded-md flex-grow"
      id="mobile-number"
      type="number"
      name="mob"
      min="10"
      max="10"
      value={form.mob}
      onChange={handleChange}
    />
  </div>

  <div className="mb-4 flex">
    <label className="font-bold mb-2 w-1/4">Status:</label>
      <label className='flex-grow'>
        <input
          type="radio"
          name="status"
          value="active"
          checked={statusSelect === 'active'}
          onChange={handleChangeRadio}
        />&nbsp;&nbsp;
        Active
      </label>
    <label className='flex-grow'>
        <input
          type="radio"
          name="status"
          value="inactive"
          checked={statusSelect === 'inactive'}
          onChange={handleChangeRadio}
        />&nbsp;&nbsp;
        Inactive
      </label>
  </div>
  </div>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleSave}
  >
    Save Contact
  </button>
</div>

    );
}


export default ContactForm