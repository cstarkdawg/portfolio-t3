import React from "react";
import ProfilePhoto from "src/pages/templates/simple-profile-with-photo/ProfilePlaceholderPhoto.png";
import SimpleProfileWithPhotoTemplate from "src/templates/intros/SimpleProfileWithPhoto/SimpleProfileWithPhotoTemplate.tsx";

const content = {
  name: `<Dev's Name>`,
  profilePhoto: ProfilePhoto,
  title: `<Dev's Title>`,
  cta: {
    label: "Call to Action!",
    url: "#",
  },
  socialMedia: {
    github: "#",
    dribbble: "#",
    twitter: "#",
    email: "#",
  },
  header: (
    <div>
      {`Dev's`} <span className="text-blue-600">awesome</span> motto!
    </div>
  ),
  description: (
    <div className="font-dark">
      <p>Hi</p>
      <p>How are you?</p>
      <p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxZistXPHcmRXkmFE5_wuGFrgFbxrLKWM3YyztueygQ&s" alt="Little Nangang Mountain"/>
      </p>
      <span>{`Ut enim `}</span> Lorem ipsum dolor
      <span className="font-semibold  text-blue-500"> voluptate velit</span>.
      sunt in culpa qui officia deserunt
      <span className="px-1  font-semibold text-pink-500">
        sit amet, consectetur adipiscing elit
      </span>
      , sed do eiusmod tempor incididunt
    </div>
  ),
};

function SimpleProfileWithPhoto() {
  return (
    <div className="container mx-auto w-full max-w-7xl">
      <div className=""></div>
      <div className="">
      <SimpleProfileWithPhotoTemplate {...content} />
      </div>
    </div>
  );
}

export default SimpleProfileWithPhoto;
