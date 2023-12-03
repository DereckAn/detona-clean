interface CardContactProps {
  title: string;
  info: string;
  icon: React.ElementType;
}

const CardContact = ({ title, info, icon:Icon }: CardContactProps) => {
  return (
    <div className="flex bg-white dark:bg-black shadow-lg rounded-lg w-full">
      <div className="icon bg-green-600 dark:bg-green-800 flex justify-center items-center py-4 px-6 rounded-tr-3xl rounded-lg">
        <Icon size={50} />
      </div>
      <div className="flex flex-col p-4 rounded-tr-lg rounded-br-lg  ">
        <h2 className="font-semibold text-green-600 ">{title}</h2>
        <p className="text-gray-700 dark:text-white">{info}</p>
      </div>
    </div>
  );
};

export default CardContact;
