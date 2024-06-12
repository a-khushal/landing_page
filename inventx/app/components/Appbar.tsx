
export default function Appbar() {
    return <>
        <div className="flex justify-between items-center px-10 py-4 shadow-md">
            <div className="flex justify-center items-center">
                <div className="text-xl font-semibold cursor-pointer">
                    InventX
                </div>
                <div className="flex text-sm justify-center items-center">
                    <div className="px-3 cursor-pointer">
                        Events
                    </div>
                    <div className="px-3 cursor-pointer">
                        Articles
                    </div>
                    <div className="px-3 cursor-pointer">
                        Alumni
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-md text-slate-800">
                <div className="px-3 cursor-pointer">
                    Signup
                </div>
                <div className="px-3 cursor-pointer">
                    Request access
                </div>
            </div>
        </div>
    </>
}