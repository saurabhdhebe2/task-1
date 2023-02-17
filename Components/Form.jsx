import { useState } from 'react';
import { useRouter } from 'next/router';

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      router.push('/');
      setForm({ name: '', email: '', phone: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:pl-40 lg:w-[50%]">
      <form action="" className="flex flex-col mx-4 my-4 p-4">
        <h1 className="text-xl mb-4 font-bold">Add New Members</h1>
        <label htmlFor="name">
          Name <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          className="border-2 w-[310px] py-1 px-4 outline-none my-1"
          onChange={handleChange}
        />
        <label htmlFor="email">
          Email <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          className="border-2 w-[310px] py-1 px-4 my-1"
          onChange={handleChange}
        />
        <label htmlFor="number">
          Phone Number <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          id="number"
          name="phone"
          value={form.phone}
          className="border-2 w-[310px] py-1 px-4 my-1"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="text-white px-4 py-2 bg-blue-500 w-[100px] rounded-md hover:bg-blue-700  my-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

// NodeJS
// 1. Create a table named users with id, membership_no, name, email, phone, created_at.
// 1. Create an api to add a member in above table with appropriate validations you could think of. Generate a unique id and save in membership_no column for this member and send in the api response
// 3. Create an api to update all the user details. email, phone should be unique
// 4. Create an api to list all the users created
