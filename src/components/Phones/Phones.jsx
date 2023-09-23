/* eslint-disable react/prop-types */

import Phone from "./Phone";

const Phones = ({ phones }) => {
  // console.log(phones)

  return (
    <div>
      <div>
        <h2 className="text-4xl font-semibold text-center">Our Phone Collection</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-2 my-10">
        {
            phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
        }
      </div>
    </div>
  );
};

export default Phones;
