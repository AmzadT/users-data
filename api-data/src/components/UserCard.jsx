const UserCard = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">

      <h2 className="text-lg font-semibold">
        {user.name}
      </h2>

      <p className="text-gray-600">
        {user.email}
      </p>

      <p className="text-sm text-gray-500">
        {user.phone}
      </p>

      <p className="text-sm text-gray-500">
        {user.company.name}
      </p>

    </div>
  );
};

export default UserCard;