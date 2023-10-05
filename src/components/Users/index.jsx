import Link from "next/link";
const { useUsers } = require("@/src/hooks/useUsers");

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {`${user.name}` + "：" + `(${user.email})`}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
