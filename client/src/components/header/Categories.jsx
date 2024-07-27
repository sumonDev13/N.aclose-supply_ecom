import mailingBags from '../../assets/images/productCardImages/mailbagart2.png';
import chocolate from '../../assets/images/productCardImages/cklateart2.png';
import battery from '../../assets/images/productCardImages/bat1.png';
import home from '../../assets/images/productCardImages/mailbagart.png';
// import home from "../../assets/images/Categories/home.png";
// import travel from "../../assets/images/Categories/travel.png";
// import appliances from "../../assets/images/Categories/appliances.png";
// import furniture from "../../assets/images/Categories/furniture.png";
// import beauty from "../../assets/images/Categories/beauty.png";
// import grocery from "../../assets/images/Categories/grocery.png";
import { Link } from "react-router-dom";

const catNav = [
    {
        name: "All Products",
        icon: home,
    },
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
            <div className="flex flex-col sm:flex sm:flex-row items-center justify-normal justify-between ">
                {catNav.map((item, i) => (
                    <Link
                        to={`/products?category=${item.name}`}
                        className="flex flex-col gap-1 items-center p-2"
                        key={i}
                    >
                        <div className="h-40 w-72 m-4 rounded hover:scale-125 transition-all duration-500 cursor-pointer">
                            <img
                                draggable="false"
                                className="h-full w-full object-contain"
                                src={item.icon}
                                alt={item.name}
                            />
                        </div>
                        <span className="text-lg text-gray-800 font-medium group-hover:text-primary-blue">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
