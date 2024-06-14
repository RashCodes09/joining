import next from "next";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:2323/api/get-all-products", {
      method: "GET",
      next: { revalidate: 0 },
    });

    return res.json();
  } catch (error) {
    console.error();
  }
};

const page = async () => {
  const data = await getData();

  return (
    <div className=" flex flex-wrap gap-4 px-5 py-7">
      {data?.data?.map((props: any) => {
        return (
          <div
            key={props?._id}
            className="w-[250px] h-[350px] border  rounded-2xl flex flex-col relative"
          >
            <span className="capitalize font-medium  px-1 py-1 absolute top-2 right-2 z-10 p-3 h-8 w-10 text-sm bg-slate-400  rounded-lg flex justify-center items-center">
              -{props?.discount}%
            </span>
            <img
              alt="image"
              src={props?.image}
              className="w-full h-44 rounded-tl-2xl rounded-tr-2xl object-cover relative"
            />

            <span className="capitalize font-medium text-lg px-1 py-1 mt-3">
              {props?.title}
            </span>
            <span className="text-sm px-1 py-1">{props?.description}</span>
            <div className="flex items-center">
              <span className="text-sm px-1 py-1 text-slate-500 line-through font-bold">
                ₦{props?.price}
              </span>
              <span className="text-sm px-1 font-semibold py-1 ml-2">
                ₦{props?.splashPrice}
              </span>
            </div>
            <span className="text-sm px-1 py-1 flex items-center">
              Quantity-Available:{" "}
              <span className="ml-2 font-bold text-base">
                {props?.quantity}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default page;
