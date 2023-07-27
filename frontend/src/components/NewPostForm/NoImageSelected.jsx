import UpLoadImage from "../../assets/uploadImage.svg";

export function NoImageSelected() {
  return (
    <>
      <img src={UpLoadImage} alt="" />
      <p>
        Drag and drop your image or <span>Click Here</span>{" "}
      </p>
    </>
  );
}
