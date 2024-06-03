type Props = {
  title: string;
  description?: string;
  image: string;
};

const Class = ({ title, description, image }: Props) => {
  return (
    <li className="relative inline-block h-[380px] w-[450px] md:mx-5">
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center whitespace-normal bg-primary-500 p-5 text-center text-white opacity-0 transition-all duration-300 hover:opacity-100">
        <p className="mb-3 text-2xl font-bold">{title}</p>
        <p className="">{description}</p>
      </div>
      <img src={image} alt={image} />
    </li>
  );
};

export default Class;
