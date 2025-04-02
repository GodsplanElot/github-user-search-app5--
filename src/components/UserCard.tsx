import { Calendar, MapPin, Link, Users, Briefcase } from "lucide-react";

interface UserCardProps {
    user: any;
    theme: string;
}

export default function UserCard({ user, theme }: UserCardProps) {
    return (
        <div
            className={`mt-6 p-6 rounded-lg shadow-lg w-full transition-colors duration-300 
                   ${theme === "dark" ? "bg-[#1E2A47] text-white shadow-gray-800" : "bg-white text-black shadow-gray-300"}`}
        >
            {/* Profile Image and Name Section */}
            <div className="flex items-start gap-6">
                <img
                    src={user.avatar_url}
                    alt="Avatar"
                    className="w-[117px] h-[117px] rounded-full shadow-md"
                />

                {/* User Details Section */}
                <div className="flex flex-col flex-grow gap-3">
                    <div className="flex justify-between items-center flex-wrap">
                        <h2 className="text-lg font-bold">{user.name || "No Name"}</h2>
                        <p className="flex items-center gap-2 text-sm"><Calendar className="w-4 h-4" /> {user.created_at ? new Date(user.created_at).toDateString() : <span className="text-gray-500">Not available</span>}</p>
                    </div>
                    <p className="text-[#0079FF]">@{user.login}</p>
                </div>
            </div>
            
            {/* User Bio */}
            <p className="mt-4">{user.bio || "No bio available."}</p>
            
            {/* Stats */}
            <div className={`flex justify-between p-3 rounded-lg text-center mt-4 ${theme === "dark" ? "bg-[#141D2F]" : "bg-[#F6F8FF]"}`}>
                <div>
                    <p className="text-sm">Repos</p>
                    <p className="font-bold">{user.public_repos ?? <span className="text-gray-500">Not available</span>}</p>
                </div>
                <div>
                    <p className="text-sm">Followers</p>
                    <p className="font-bold">{user.followers ?? <span className="text-gray-500">Not available</span>}</p>
                </div>
                <div>
                    <p className="text-sm">Following</p>
                    <p className="font-bold">{user.following ?? <span className="text-gray-500">Not available</span>}</p>
                </div>
            </div>
            
            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {user.location || <span className="text-gray-500">Not available</span>}</p>
                <p className="flex items-center gap-2">
                    <Link className="w-4 h-4" />
                    {user.blog ? (
                        <a
                            href={user.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#0079FF] break-words w-full"
                        >
                            {user.blog}
                        </a>
                    ) : (
                        <span className="text-gray-500">Not available</span>
                    )}
                </p>
                <p className="flex items-center gap-2"><Users className="w-4 h-4" /> {user.twitter_username ? `@${user.twitter_username}` : <span className="text-gray-500">Not available</span>}</p>
                <p className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {user.company || <span className="text-gray-500">Not available</span>}</p>
            </div>
        </div>
    );
}
