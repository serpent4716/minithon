import React, { useState } from "react";
import Avatar from "./Avatar";
import Refer from "./Refer";

function ProfileSection(props) {
  const [profile, setProfile] = useState({
    name: "John Doe",
    qualification: "Advocate",
    badges: ["Top Lawyer", "Certified Mediator"],
    certificates: ["Bar Council Certificate", "Mediation Certification"],
    languages: ["English", "Hindi", "Marathi"],
    expertise: ["Family Law", "Corporate Law", "Intellectual Property"],
  });

  return (
    <div className="profile-section">
      <h2>{profile.name}</h2>
      <Avatar img={props.img} />
      <p>Qualification: {profile.qualification}</p>
      <div>
        <h4>Badges:</h4>
        <ul>
          {profile.badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Certifications:</h4>
        <ul>
          {profile.certificates.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Languages:</h4>
        <p>{profile.languages.join(", ")}</p>
      </div>
      <div>
        <h4>Areas of Expertise:</h4>
        <ul>
          {profile.expertise.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      <Refer />
    </div>
  );
}

export default ProfileSection;
