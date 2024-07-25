import mailingBags from '../../assets/images/mailbagCard.jpeg';
import chocolate from '../../assets/images/chocklateCard.jpeg';
import battery from '../../assets/images/batteryCard.jpeg';
// import home from "../../assets/images/Categories/home.png";
// import travel from "../../assets/images/Categories/travel.png";
// import appliances from "../../assets/images/Categories/appliances.png";
// import furniture from "../../assets/images/Categories/furniture.png";
// import beauty from "../../assets/images/Categories/beauty.png";
// import grocery from "../../assets/images/Categories/grocery.png";
import { Link } from "react-router-dom";

const catNav = [
    {
        name: "Chocolate",
        icon: chocolate,
    },
    {
        name: "Battery",
        icon: battery,
    },
    {
        name: "Mailing Bags",
        icon: mailingBags,
    },
    // {
    //     name: "Home",
    //     icon: home,
    // },
    // {
    //     name: "Travel",
    //     icon: travel,
    // },
    // {
    //     name: "Appliances",
    //     icon: appliances,
    // },
    // {
    //     name: "Furniture",
    //     icon: furniture,
    // },
    // {
    //     name: "Beauty,Toys & more",
    //     icon: beauty,
    // },
    // {
    //     name: "Grocery",
    //     icon: grocery,
    // },
];

const Categories = () => {
    return (
        <section className="sm:block bg-white p-0 min-w-full px-12 shadow overflow-hidden">
            <div className="flex flex-col sm:flex sm:flex-row items-center justify-between group">
                {catNav.map((item, i) => (
                    <Link
                        to={`/products?category=${item.name}`}
                        className="flex flex-col gap-1 items-center p-2"
                        key={i}
                    >
                        <div className="h-40 w-96 m-4">
                            <img
                                draggable="false"
                                className="h-full w-full object-contain"
                                src={item.icon}
                                alt={item.name}
                            />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
