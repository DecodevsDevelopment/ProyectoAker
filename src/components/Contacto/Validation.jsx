import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export const Validation = ({ isValid, title, message, icon, confirmButtonText }) => {
  if (!isValid) {
    MySwal.fire({
      title,
      text: message,
      icon,
      confirmButtonText,
    });
  }

  return null; // Return null as the component only renders side effects
};
