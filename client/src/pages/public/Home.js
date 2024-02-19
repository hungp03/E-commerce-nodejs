//useState để lưu giá trị
//useEffect để gọi api
import React from "react";
import {
  Banner,
  Sidebar,
  BestSeller,
  DealDaily,
  FeatureProduct,
  CustomSlider
} from "../../components";
import { useSelector } from "react-redux";
import icons from '../../ultils/icons'

const {GrNext} = icons

const Home = () => {
  const { newProducts } = useSelector((state) => state.products);
  const { _categories } = useSelector((state) => state.app);
  // console.log(_categories);
  return (
    <>
      <div className="w-main flex">
        <div className="flex flex-col gap-5 w-[25%] flex-auto">
          <Sidebar />
          <DealDaily />
        </div>
        <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto">
          <Banner />
          <BestSeller />
        </div>
      </div>
      <div className="my-8">
        <FeatureProduct />
      </div>
      <div className="my-8 w-full">
        <h2 className="text-[20px] uppercase font-semibold py-[10px] border-b-4 border-main">
          New Arrival
        </h2>
        <div className="w-full mt-4 mx-[-10px]">
          <CustomSlider products={newProducts} />
        </div>
      </div>
      <div className="my-8 w-full">
        <h2 className="text-[20px] uppercase font-semibold py-[10px] border-b-4 border-main">
          Hot Collection
        </h2>
        <div className="flex flex-wrap ">
          {_categories?.filter(e => e.brand.length > 0).map((e) => 
            <div className="w-1/3 p-2" key={e._id}>
              <div className="border flex gap-4 min-h-[180px]">
                <img src={e?.image} alt="" className="w-[144px] h-[130px] flex-1 object-contain"/>
                <div className="flex-1">
                  <h4 className="font-semibold uppercase text-gray-700">{e?.title}</h4>
                  <ul className="text-sm">
                    {e?.brand?.map(item => 
                      <span key={item} className="flex gap-1 items-center text-gray-500">
                        <GrNext/>
                        <li>{item}</li>
                      </span>
                      )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="my-8 w-full">
        <h2 className="text-[20px] uppercase font-semibold py-[10px] border-b-4 border-main">
          Blog Post
        </h2>
        </div>
      
    </>
  );
};

export default Home;
