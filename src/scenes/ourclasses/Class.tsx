type Props = {
  title: string;
  description?: string;
  image: string;
};

const Class = ({ title, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className="absolute p-5 inset-0 z-30 flex flex-col bg-primary-500 items-center justify-center whitespace-normal text-center text-white opacity-0 hover:opacity-100 transition-all duration-300">
        <p className="text-2xl font-bold mb-3">{title}</p>
        <p className="">{description}</p>
      </div>
      <img src={image} alt={image} />
    </li>
  );
};

export default Class;
