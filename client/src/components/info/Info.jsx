import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="flex flex-row justify-around p-4 tracking-wider bg-white underline text-sm font-light ">
      <span><Link> Free Delivery on orders over £10/Free Next Day over £50</Link></span>
      <span><Link>Follow us on Instagram</Link></span>
      <spam>Help: 01757325153</spam>
    </div>
  );
};

export default Info;
