import Sidebar from "../../components/sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setData(response.data.products); // Use response.data to set the data
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call fetchData function
    }, []);
    console.log(data);
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="p-7 w-full">
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-2xl font-semibold">
                                Products
                            </div>
                            <div className="text-md font-semibold">Lets Grow to your business! Create your product and Upload here</div>
                        </div>
                        <div>
                            <button className="bg-[#F26522] text-white rounded-md px-3 py-1 text-xl font-semibold">Create</button>
                        </div>
                    </div>
                    <div className="mt-5 bg-white shadow-xl">
                        <div className="flex justify-start mt-5 gap-x-[150px]">
                            <div className="text-sm font-semibold text-gray-400">Title</div>
                            <div className="text-sm font-semibold text-gray-400">Stock</div>
                            <div className="text-sm font-semibold text-gray-400">Price</div>
                            <div className="text-sm font-semibold text-gray-400">Brand</div>
                            <div className="text-sm font-semibold text-gray-400">Category</div>
                            <div className="text-sm font-semibold text-gray-400">Image</div>
                            <div className="text-sm font-semibold text-gray-400">Action</div>
                        </div>
                        <div className="">
                            {data.map((item, index) => (
                                <div className="flex justify-start items-center mt-5 gap-x-[120px]">
                                    <div className="w-20">{item.title}</div>
                                    <div className="w-10 flex justify-center">{item.stock}</div>
                                    <div className="w-10 flex justify-center">{item.price}</div>
                                    <div className="pl-10 w-10 flex justify-center">{item.brand}</div>
                                    <div className="pl-10 w-10 flex justify-center">{item.category}</div>
                                    <div><img src={`${item.thumbnail}`} className="w-[100px] h-[100px] rounded-xl" /></div>
                                    <div className="flex justify-between items-center gap-10">
                                        <button className="bg-[#F26522] text-white rounded-md px-3 py-1 text-xl font-semibold">Edit</button>
                                        <button className="bg-red-600 text-white rounded-md px-3 py-1 text-xl font-semibold">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard;