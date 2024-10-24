import useMenu from "../../Hooks/useMenu";
import PopularMenuItem from "./PopularMenuItem";


const PopularItem = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter((item) => item.popular);

    return (
        <div className="flex flex-col mb-6">
            <div className="grid md:grid-cols-2 w-4/5 mx-auto gap-6 p-4">
            {popularItems.map((item) => (
                <PopularMenuItem key={item.itemName} item={item} />
            ))}
        </div>
        <button className="p-5 border-b-2 border-black rounded-lg hover:border-b-[#D99904] mx-auto font-medium text-xl text-[#1F2937]">View Full  Menu</button>
        </div>
    );
};

export default PopularItem;
