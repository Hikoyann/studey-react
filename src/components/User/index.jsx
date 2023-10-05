import { useUser } from "@/src/hooks/useUser";

export const UserComponent = () => {
  const { data, error, isEmpty, isLoading } = useUser();

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>{error.messages}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }
  return (
    <div>
      <h1>{data?.name}</h1>
      <ul>
        <li>{data?.email}</li>
        <li>{data?.username}</li>
        <li>{data?.address.city}</li>
        <li>{data?.phone}</li>
        <li>{data?.website}</li>
        <li>{data?.company.name}</li>
      </ul>
    </div>
  );
};
