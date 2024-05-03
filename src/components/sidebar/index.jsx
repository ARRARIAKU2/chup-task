import { NavLink } from "react-router-dom";

function sidebar() {
    const data = [
        {
            name: "Dashboard",
            path: "/"
        },
        {
            name: "Appointment",
            path: "/appointment"
        },
        {
            name: "Live Queue",
            path: "/live-queue"
        },
        {
            name: "Serving",
            path: "/serving"
        },
        {
            name: "Messages",
            path: "/messages"
        },
        {
            name: "Clients",
            path: "/clients"
        },
        {
            name: "Analytics",
            path: "/analytics"
        },
        {
            name: "Settings",
            path: "/settings"
        },
        {
            name: "Logout",
            path: "/logout"
        }

    ]
    return (
        // <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">

        // </div>
        <>
            <aside className="py-6 px-10 w-64 border-r border-gray-200">
                <div className="flex justify-center">
                    <img src="src/assets/chup.svg" className="flex justify-center" />
                </div>
                <div className="flex flex-col pt-6 gap-y-4">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-start items-center font-bold gap-x-4">
                            <img src={`src/assets/Vector${index + 1}.svg`} className="h-4 w-4" />
                            <NavLink to={item.path} className={({ isActive }) => `${isActive ? "text-red-600" : "text-gray-600"} py-2 rounded-md font-semibold`}>
                                {item.name}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    )
}

export default sidebar;