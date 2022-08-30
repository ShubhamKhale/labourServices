import { IonIcon, IonPage } from "@ionic/react";
import "./ProfilePhoto.css";

function ProfilePhoto() {
  return (
    <div>
      <div>
        <img
          className="profile-image"
          onClick={() => {
            alert("This is image");
          }}
          src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
        />
      </div>
    </div>
  );
}

export default ProfilePhoto;
