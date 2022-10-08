import { t } from "i18next";

function ProfileText(props:{subject:string | undefined}) {
  return (
    <div>
      <h1>{t("Subject:")}{props.subject}</h1>
    </div>
  );
}

export default ProfileText;
