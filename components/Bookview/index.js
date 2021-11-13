import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookie from "js-cookie";
import Info from "./info";
import Reviews from "./reviews";
import Feedback from "./feedback";

const index = (props) => {
  console.log(props);

  const router = useRouter();
  const [bookDetail, setbookDetail] = useState({});

  React.useEffect(() => {
    axios
      .get(`https://sociolib-api.herokuapp.com/library/book/${props.id}`, {
        headers: {
          Authorization: `Token ${Cookie.get("Token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setbookDetail(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props]);

  return (
    <div>
      <Info {...bookDetail} />
      <hr />
      <div className="bg-gray-50">
        <div className="grid justify-items-center pt-9 pb-11 divide-y divide-gray-800">
          <h1 className="inline-block align-baseline text-3xl antialiased font-semibold font-serif">
            Create review
          </h1>
          <div className="mt-3 pt-7 w-full">
            <Feedback {...bookDetail} />
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-blue-100">
        <div className="grid justify-items-center pt-9 pb-11 divide-y divide-gray-800">
          <h1 className="inline-block align-baseline text-3xl antialiased font-semibold font-serif">
            Top reviews
          </h1>
          <div className="mt-4 ">
            <Reviews {...bookDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
