import "../closeFriend/closeFriend.css";

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
         <img src={user.profilePicture} alt="friend name" className="sidebarFriendImg" />
         <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
