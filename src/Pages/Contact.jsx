import React from "react";

const Contact = () => {
  return (
    <div className="my-12 flex justify-center flex-col items-center">
      <h1 className="text-center text-4xl font-bold">Contact Developer</h1>
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg
            "
          alt=""
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
          <p className="text-xl font-semibold text-green-600">Anas Mirza</p>
          <p className="text-xl font-semibold text-green-600">mirzaanas815@gmail.com</p>
          <p className="text-xl font-semibold text-green-600">+94 45785 24444</p>
          <a href="https://github.com/a-n-a-s/disease-app" className="text-xl font-semibold text-green-600" target="_blank">
          https://github.com/a-n-a-s/disease-app
          </a>
      </div>
    </div>
  );
};

export default Contact;
