import Image, { StaticImageData } from "next/image";

interface CleanServiceProps {
  title: string;
  description: string[];
  image: StaticImageData;
  id:number;
}

const CleanService = ({title, description, image, id} : CleanServiceProps) => {
  return (
    <div className="bg-fourth py-14 flex flex-row items-center justify-evenly">
      {id % 2 === 0 ? (
        <>
          <div className="flex flex-col" id="dos">
            <h2 className="text-3xl font-bold">{title}</h2>
            <ul className="custom-list pl-5 ">
              {description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-96" id="uno" >
            <Image
              src={image}
              alt="hero image"
              className="rounded-xl object-cover"
              priority
              
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-96" id="uno" >
            <Image
              src={image}
              alt="hero image"
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col border w-full max-w-2xl" id="dos">
            <h2 className="text-3xl font-bold">{title}</h2>
            <ul className="custom-list pl-5 ">
              {description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default CleanService;
