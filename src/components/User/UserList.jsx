import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import Link from "next/link";

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/Users`);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No users found.</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-4">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <div className="block p-2 shadow rounded hover:bg-gray-100">
                <h1 className="text-xl font-bold truncate">{user.name}</h1>
                <div className="text-lg truncate">{user.email}</div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
