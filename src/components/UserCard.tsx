interface UserCardProps {
    user: any;
    theme: string; // Accept theme as a prop
  }
  
  export default function UserCard({ user, theme }: UserCardProps) {
    return (
      <div
        className={`mt-6 p-6 rounded-lg shadow-lg w-full transition-colors duration-300 
                   ${
                     theme === "dark"
                       ? "bg-[#1E2A47] text-white shadow-gray-800"
                       : "bg-white text-black shadow-gray-300"
                   }`}
      >
        <div className="flex items-center gap-4">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-lg font-bold">{user.name || "No Name"}</h2>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              @{user.login}
            </p>
          </div>
        </div>
        <p className="mt-4">{user.bio || "No bio available."}</p>
      </div>
    );
  }
  