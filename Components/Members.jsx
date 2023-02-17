import { useRouter } from 'next/router';
const Members = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-2xl py-4 border-b-2 font-semibold hover:underline">
        Members
      </h1>
      {data.map((user, i) => (
        <div
          className="flex gap-4  hover:bg-purple-50 p-4 hover:rounded-md border-2 "
          key={user._id}
        >
          <div>
            <p className="text-sm mt-1 italic ">ID : {i + 1}</p>
          </div>
          <div className="border-l-2 pl-2">
            <h1 className="text-lg font-semibold mb-2">Name: {user.name}</h1>
            <p className="text-sm text-gray-500 hover:text-black hover:underline">
              Membership No. : {user._id}
            </p>
            <p className="text-sm text-gray-500 hover:text-black hover:underline">
              Email: {user.email}
            </p>
            <p className="text-sm text-gray-500 hover:text-black hover:underline">
              Phone Number: {user.phone}
            </p>
            <p className="text-sm text-gray-500 hover:text-black hover:underline">
              Email: {user.email}
            </p>
            <p className="text-xs text-gray-400 ml-20 font-extralight italic my-4 ">
              Created_at: {user.createdAt}
            </p>
            <button
              //   onClick={
              //   async () => {
              //   try {
              //     await fetch(`/api/${user._id}`, {
              //       method: 'UPDATE',
              //     });
              //     router.push('/');
              //   } catch (error) {
              //     console.log(error);
              //   }
              // }
              // }
              className="bg-red-600 text-white px-4 py-1 m-4 rounded-md hover:bg-red-700 flex "
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
