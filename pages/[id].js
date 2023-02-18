import { useState } from 'react';
import { useRouter } from 'next/router';

const Update = ({ data }) => {
  const [form, setForm] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${router.query.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      router.push('/');
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
          onClick={handleUpdate}
          className="text-white px-4 py-2 bg-blue-500 w-[100px] rounded-md hover:bg-blue-700  my-4"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;

export const getServerSideProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/${id}`).then((res) =>
    res.json()
  );
  return {
    props: {
      data: res.data,
    },
  };
};
